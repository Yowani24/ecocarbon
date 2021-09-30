import React from 'react';
import Head from 'next/head'
import styles from './Payment.module.css'
import Link from 'next/link';


export default function Payment(props) {
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

        
       </>
    );
}