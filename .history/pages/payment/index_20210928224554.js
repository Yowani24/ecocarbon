import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Payment.module.css'
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_live_51JaOX7Bk6OhykIzASR0lyFawR8tnw2QKGQrqYW4Ypg9EzkZO3HcfZhe1ClpTbn6T0BnyVPP8fI6PCuHueSRYKcmP003JkGVRur');

export default function Payment(props) {
    const [product, setProduct] = useState({
        name: "Carb Cred",
        price: 120,
        quantity: 1
    });
    const [stripeError,setStripeError] = useState();
    const [loading,setLoading] = useState();

    const handleClick = async () => {
        setLoading(true);

        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "120"
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
            <title>Payment</title>
        </Head>

        <header className={styles.header}>
            <div className={styles.interface}>
                <div className={styles.header_content}>
                    <h1>Payment</h1>
                </div>
            </div>
        </header>
        
        <section className={styles.button_box}>
            <div className={styles.interface}>

            
                <span>
                    <Link href="/cart" passHref><button>Back</button></Link>
                    <button role="link" onClick={handleClick} disabled={loading} className={styles.confirmBtn}>Comfirm</button>
                </span>
            </div>
        </section>
       </>
    );
}