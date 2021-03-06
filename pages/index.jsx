import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React, {useEffect, useLayoutEffect, useState, useCallback} from "react";
import Link from 'next/link';
import TopBanner from "../components/TopBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
const ReactFitText = require('react-fittext');


let loweImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png';
let mellonImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Carnegie.png';


export default function Home() {

    return (


        <div className={`text-center h-100 gridHolder`}>
                <TopBanner className={` topOfGrid`} id={'t1'}/>


            <div className={`middleOfGrid my-4`} id={'bodyDiv'}>

                <img className={'loweLogo w-50 mb-5 pb-5 mx-auto '} src={`${loweImage}`}/>

                <ReactFitText minFontSize={10} compressor={1.5}>
                    <h1 className={`mt-5 pt-5 ${styles.title}`}>
                        REPRESENTING ART
                    </h1>
                </ReactFitText>
                <p className={'mx-auto my-3 font-italic'}>
                    A Holographic Installation<br/>
                    for the Lowe Art of<br/>
                    Africa Gallery Collections
                </p>
                <Link href={'mask_gallery/'}>
                    <Button className={`${styles.btn} mt-5 text-wrap badge-pill btn-lg px-3 py-2 w-75 mx-auto`}>View Gallery</Button>
                </Link>
                <img className={'mellonLogo position-relative w-50 pt-5 mx-auto align-self-end'} src={`${mellonImage}`}/>

            </div>
            <BottomBanner className={`bottomOfGrid`} id={'b1'}/>
        </div>





    )
}
