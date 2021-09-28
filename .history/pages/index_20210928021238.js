import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// ----------------SPLIDEJS---------------------
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
// ---------------------------------------------

import Link from 'next/link';
import { CreditList } from './products/CreditList'
import { useContext, useState } from 'react'


export default function Home() {
  const {credits,cartContent, onAdd} = useContext(CreditList);
  const [credit, setCredit] = credits;
  // const cartLength = cartContent;
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.interface}>
          <div className={styles.header_box}>
            <h1>Carb Cred - Towards a Sustainable Land</h1>
            <h1>Carb Cred</h1>
            <div className={styles.ImageBox}>
              <Link href="/cart" passHref>
                <span>
                  <p>cart</p>
                  <p></p>
                </span>
                
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.cards_sec}>
        <div className={styles.interface}>

            <div className={styles.card_box}>
              <Splide
                options={ {
                  type: 'loop',
                  gap: '1rem',
                  perPage: 3,
                  focus: 'center',
                  pagination: false,
      
                  breakpoints: {
                    420: {
                      perPage: 1,
                      arrows:false,
                      gap: '1rem',
                      padding: {
                        right: '6rem',
                      },
                    },
                    785: {
                      arrows:false,
                      pagination: true,
                    }
                    
                  }
                  
                }}
              >
                {credit.map(ecocarbon => (
                  <SplideSlide key={ecocarbon.id}>
                    <div className={styles.card}>
                      <div className={styles.topSide_card}>
                        <p>More details</p>
                        <span className={styles.arrowIcon_box}>
                          <p>go</p>
                        </span>
                      </div>
                      <div className={styles.centerSide_card}>
                        <p>$ {ecocarbon.price.toFixed(2)}</p>
                        <p>{ecocarbon.product} - {ecocarbon.id}</p>
                        <p>{ecocarbon.description}</p>
                      </div>
                      <div className={styles.card_add_btn_box}>
                        <button onClick={() => onAdd(ecocarbon)}>Add</button>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
              
            </div>

          <div className={styles.bottom_text}>
            <h1>Carbon Credits Purchase Flow</h1>
            <p>Yowani da Costa</p>
          </div>
          
        </div>
      </section>
    </div>
  )
}