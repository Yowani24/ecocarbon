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

        <div className={styles.content}>
            <div className={styles.interface}>
                <div className={styles.list_content}>
                    <span>
                        <p>Carbon Credit <br/> <i>More details goes here like description</i></p>
                        <p>2</p>
                        <p>$ 240</p>
                    </span>

                    <span>
                        <p>Carbon Credit <br/> <i>More details goes here like description</i></p>
                        <p>2</p>
                        <p>$ 240</p>
                    </span>

                    <span>
                        <p>Carbon Credit <br/> <i>More details goes here like description</i></p>
                        <p>2</p>
                        <p>$ 240</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={styles.button_box}>
            <div className={styles.interface}>
                <span>
                    <Link href="/cart" passHref><button>Back</button></Link>
                    <button>Comfirm</button>
                </span>
            </div>
        </div>
       </>
    );
}