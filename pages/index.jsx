import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React from "react";

import Link from 'next/link';
import TopBanner from "../components/TopBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
import {Textfit} from 'react-textfit';

export default function Home() {
  return (
      <div className={`mx-4 text-center`}>
          <TopBanner className={`fixed-top mt-4`}/>
          <div className={`d-flex position-relative flex-column mt-5`}>
            <img className={'loweLogo w-50 mt-4 mb-5 pb-5 mx-auto '}/>
            <Textfit mode={'single'} className={`mt-5 pt-5 ${styles.title}`}>RE-PRESENTING ART</Textfit>
            <p className={'mx-auto my-3 font-italic'}>
                A Holographic Installation<br/>
                for the Lowe Art of<br/>
                Africa Gallery Collections
            </p>
            <Link href={'mask_gallery/'}>
              <Button className={`${styles.btn} mt-5 text-wrap badge-pill btn-lg px-3 py-2 w-75 mx-auto`}>View Gallery</Button>
            </Link>
          </div>
          {/*CHANGE TO CORRECT IMAGE BELOW!!*/}
          <img className={'lowelogo w-50 mt-5 pt-5 mx-auto'}/>

          <BottomBanner/>
      </div>

  )
}
