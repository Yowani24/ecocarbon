import React from 'react';
import Head from 'next/head'

import styles from './Cart.module.css'
import Link from 'next/link'

import { CreditList } from '../product/CreditList'
import { useContext } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_live_51JaOX7Bk6OhykIzASR0lyFawR8tnw2QKGQrqYW4Ypg9EzkZO3HcfZhe1ClpTbn6T0BnyVPP8fI6PCuHueSRYKcmP003JkGVRur");


export default function Cart(props) {
    const {cartContent, onAdd, onRemove} = useContext(CreditList);
    const [cartItems, setCartItems] = cartContent;
    const itemPrice = cartItems.reduce((a, c) => a + c.price *c.quantity , 0);
    const total = itemPrice;

    
    const [stripeError,setStripeError] = useState();
    const [loading,setLoading] = useState();
    const [abc, setAbc] = useState(200)

    const handleClick = async () => {
        setLoading(true);

        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: product.price,
                    quantity: product.quantity
                },
            ],
            mode: "payment",
            cancelUrl: window.location.origin,
            successUrl: `${window.location.origin}/successPage`,
        });

        if (error) {
            setLoading(false);
            setStripeError(error);
        }
    };
    return (
        <>
        {stripeError && <p style={{color: "red" }}>{stripeError}</p>}
          <Head>
              <title>Cart</title>
          </Head>
          <header>
              <div className={styles.interface}>
                    <div className={styles.header_content}>
                        <h1>Cart</h1>
                        <p>{cartItems.length}</p>
                    </div>
              </div>
          </header>

          <section className={styles.cart_content}>
              <div className={styles.interface}>
                  <div className={styles.boxes}>
                      <h3 className={styles.noItemInCart}>{cartItems.length === 0 && <p>No item added</p>}</h3>
                      {cartItems.map(item => (
                          <div className={styles.content_box} key={item.id}>
                          <div className={styles.box}>
                              <h3>{item.product}</h3>
                          </div>

                          <div className={styles.product_details}>
                            <div className={styles.description}>
                                <p>{item.product} - {item.id}</p>
                                <p>{item.description}</p>
                            </div>

                            <div className={styles.details_wrapper}>
                                <div className={styles.quantity_controls}>
                                    <button onClick={() => onRemove(item)}>-</button>
                                    <button onClick={() => onAdd(item)}>+</button>
                                </div>

                                <div className={styles.current_money}>
                                    <p>{item.quantity}</p>
                                    <span>x</span>
                                    <p>$ {item.price}</p>
                                </div>
                            </div>
                          </div>
                      </div>
                      ))}
                  </div>

                  {cartItems.length > 0 && 
                    <div className={styles.total_to_pay_box}>
                        <span>
                            <p>Sub Total</p>
                            <p>$ {itemPrice}</p>
                        </span>
                        <span>
                            <p>Total</p>
                            <p>$ {total}</p>
                        </span>
                    </div>
                  }

                  <div className={styles.button_box}>
                      <Link href="/" passHref><button>Back Home</button></Link>
                      {/* {cartItems.length > 0 && <Link href="/payment" passHref><button>Continue</button></Link>} */}
                      
                  </div>
              </div>
          </section>
        </>
    )
}