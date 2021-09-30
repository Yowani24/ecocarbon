import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Payment.module.css'
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
    process.env.NEXT_APP_PUB_KEY
);

export default function Payment(props) {
    const [stripeError,setStripeError] = useState();
    const [loading,setLoading] = useState();

    return (
       <>
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
                    <button className={styles.confirmBtn}>Comfirm</button>
                </span>
            </div>
        </section>
       </>
    );
}