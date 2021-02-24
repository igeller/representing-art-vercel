import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React, {useEffect, useLayoutEffect, useState, useCallback} from "react";
import Link from 'next/link';
import TopBanner from "../components/TopBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
import {Textfit} from 'react-textfit';
import ReactDOM from 'react-dom';


const loweMobile = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png';
const loweKiosk = 'https://igeller.github.io/assets/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Lowe.png';
const mellonMobile = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Carnegie.png';
const mellonKiosk = 'https://igeller.github.io/assets/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Carnegie.png';

const IMAGES = [
    {url: `${loweMobile}` },
    {url: `${mellonMobile}`},
    {url: 'https://igeller.github.io/assets/Assets/Kiosk/Banners/Africa-Kiosk-Banner-Bottom.png'}
];


export default function Home(pageProps) {

    let [pos, setState] = useState(0)

    let yPos = 0;
    useEffect(()=>{

        console.log('111111', document.readyState)

        if(document.readyState != "complete"){
            slow()
        }

        if(document.readyState == "complete") {
            pos = document.getElementById('t1').getBoundingClientRect()
            console.log(document.getElementsByClassName('loweLogo').item(0))
            document.getElementsByClassName('loweLogo').item(0).style.marginTop = `${pos.bottom}px`
            console.log('******!!!! use effectcomplete', document.getElementById('t1').getBoundingClientRect())

        }


    }, [pos]);

    function slow(){
        const timer = setTimeout(() => {
            setState({pos: document.getElementById(`t1`).getBoundingClientRect()})
            console.log('This will run after 2 second!')
            return;

        }, 2000);
        return () => {
            clearTimeout(timer);
            pos = document.getElementById('t1').getBoundingClientRect()

        }
    }





    return (


        <div className={`mx-4 text-center`}>
            <>
                <TopBanner className={`fixed-top mt-4 h-auto`} id={'t1'} src={IMAGES[2].url}/>

            </>
            <div className={`d-flex position-relative flex-column`} id={'bodyDiv'}>

                <img className={'loweLogo w-50  mb-5 pb-5 mx-auto '} src={'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png'}/>

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
            <img className={'mellonLogo w-50 mt-5 pt-5 mx-auto'} src={`${IMAGES[1].url}`}/>

            <BottomBanner/>
        </div>





    )
}
