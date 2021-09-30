import React, { useState } from 'react';
import Head from 'next/head'
import styles from './Payment.module.css'
import Link from 'next/link';
import StripeCheckout from 'react-stripe-checkout';


export default function Payment(props) {
    const [product, setProduct] = useState({
        name: "Test Product",
        price: 120,
    });
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
                    <div>
                    <StripeCheckout
                        stripeKey=""
                        token=""
                        name="Buying"
                    >
                        <button className={styles.confirmBtn}>Comfirm</button>
                    </StripeCheckout>
                    </div>
                </span>
            </div>
        </section>
       </>
    );
}