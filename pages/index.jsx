import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React, {useEffect, useLayoutEffect, useState, useCallback} from "react";
import Link from 'next/link';
import TopBanner from "../components/TopBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
const ReactFitText = require('react-fittext');
import ReactDOM from 'react-dom';


let loweImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png';
let mellonImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Carnegie.png';

// const IMAGES = [
//     {url: `${loweMobile}` },
//     {url: `${mellonMobile}`},
//     {url: 'https://igeller.github.io/assets/Assets/Kiosk/Banners/Africa-Kiosk-Banner-Bottom.png'}
// ];


export default function Home(pageProps) {

    let [pos, setState] = useState(0)
    let posT, posB = 0;

    useEffect(()=>{

        console.log('111111', document.readyState)

        if(document.readyState != "complete"){
            slow()
        }

        if(document.readyState == "complete") {
            posT = document.getElementById('t1').getBoundingClientRect().bottom
            posB = document.getElementById('b1').getBoundingClientRect().top
            document.getElementById('bodyDiv').style.marginTop = `${posT}px`
            document.getElementById('bodyDiv').style.height = `${posB-posT}px`
            console.log('******!!!! use effectcomplete', document.getElementById('t1').getBoundingClientRect())

            if(window.width > 900){
                loweImage = 'https://igeller.github.io/assets/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Lowe.png';
                mellonImage = 'https://igeller.github.io/assets/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Carnegie.png';
            }

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
                <TopBanner className={`fixed-top pt-4 h-auto`} id={'t1'}/>

            </>
            <div className={`d-block position-relative flex-column ${styles.bodyOvrflw} mx-auto pt-3`} id={'bodyDiv'}>

                <img className={'loweLogo w-50  mb-5 pb-5 mx-auto '} src={`${loweImage}`}/>

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
                <img className={'mellonLogo w-50 mt-5 pt-5 mx-auto'} src={`${mellonImage}`}/>

            </div>
            <BottomBanner className={`pt-3`} id={'b1'}/>
        </div>





    )
}
