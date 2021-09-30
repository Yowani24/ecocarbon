import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Payment.module.css'
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe("pk_live_51JaOX7Bk6OhykIzASR0lyFawR8tnw2QKGQrqYW4Ypg9EzkZO3HcfZhe1ClpTbn6T0BnyVPP8fI6PCuHueSRYKcmP003JkGVRur");
export default function Payment(props) {
    const handleClick = () => {
        fetch('http://localhost:3000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    {id: 1, quant: 3},
                    {id: 2, quant: 1}
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
       {/* {stripeError && <p style={{color: "red" }}>{stripeError}</p>} */}
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
                    <button onClick={handleClick} className={styles.confirmBtn}>Comfirm</button>
                </span>
            </div>
        </section>
       </>
    );
}