import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React from "react";

import Link from 'next/link';

export default function Home() {
  return (

    <div className={styles.container}>
      <div>
        <img className={'loweLogo w-50 d-block mx-auto position-absolute mt-5'}/>
        <h2 className={'mt-5'}>RE-PRESENTING ART</h2>
          <p className={'mx-auto my-3 font-italic'}>
            A Holographic Installation<br/>
            for the Lowe Art of<br/>
            Africa Gallery Collections</p>
        <Link href={'mask_gallery/'}>
          <Button className={`${styles.btn} mt-5 text-wrap badge-pill btn-lg px-5 py-2`}>View Gallery</Button>
        </Link>
      </div>
    </div>
  )
}
