import React, { useContext, useState } from 'react';
import Head from 'next/head'

import styles from './Cart.module.css'
import Link from 'next/link'

import { CreditList } from '../product/CreditList'



export default function Cart(props) {
    const {cartContent, onAdd, onRemove} = useContext(CreditList);
    const [cartItems, setCartItems] = cartContent;
    const itemPrice = cartItems.reduce((a, c) => a + c.price *c.quantity , 0);
    const total = itemPrice;
    const qty = cartItems.reduce((a, c) => c.quantity , 0);
    const productName = "";

    const handleClick = () => {
        fetch('http://localhost:4000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    {
                        id: 1,
                        quant: qty,
                        price: total
                    },
                ]
            })
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        }).catch(e => {
            console.error(e.error)
        })
    };
    
    
    return (
        <>
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

                          {/* <input style={{display:"none"}} type="tex" value={item.product} onChange={(e) => setProductName(e.target.value)}/> */}


                          <div className={styles.product_details}>
                            <div className={styles.description}>
                                <p id="productName">{item.product}</p>
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
                            <p>$ {total.toFixed(2)}</p>
                        </span>
                    </div>
                  }

                  <div className={styles.button_box}>
                      <Link href="/" passHref><button>Back Home</button></Link>
                      {/* {cartItems.length > 0 && <Link href="/payment" passHref><button>Continue</button></Link>} */}
                      
                      {cartItems.length > 0 && <button onClick={handleClick} className={styles.confirmBtn}>Comfirm</button>}
                  </div>
              </div>
          </section>
        </>
    )
}