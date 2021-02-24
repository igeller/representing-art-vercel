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
    // const topBan = React.useRef(null);

    let [pos, setState] = useState(0)

let yPos = 0;
    useEffect(()=>{

        console.log('111111', document.readyState)


        //
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
            // console.log('******!!!! complete', document.getElementById('t1').getBoundingClientRect())
            console.log('This will run after 2 second!')
            return;
            // p = pos.bottom
            // const style = {
            //     // marginTop: `${p}px`
            //

        }, 2000);
        return () => {
            clearTimeout(timer);
            pos = document.getElementById('t1').getBoundingClientRect()

        }
    }

    const [imgsLoaded, setImgsLoaded] = useState(false)

    // useEffect(() => {
    //     const loadImage = image => {
    //         return new Promise((resolve, reject) => {
    //             const loadImg = new Image()
    //             loadImg.src = image.url
    //             // wait 2 seconds to simulate loading time
    //             loadImg.onload = () =>
    //                 setTimeout(() => {
    //                     resolve(image.url)
    //                 }, 2000)
    //
    //             loadImg.onerror = err => reject(err)
    //         })
    //     }
    //
    //     Promise.all(IMAGES.map(image => loadImage(image)))
    //         .then(() => {setImgsLoaded(true);
    //             console.log(image.height);}
    //         )
    //         .catch(err => console.log(`Failed to load images ${IMAGES[0].lM}`, err))
    // }, [])




    useLayoutEffect(()=>{
        console.log('use layouteffectloaded')

        // console.log('******!!!!', document.getElementById('t1').getBoundingClientRect())
        // if(screen.width >= 900){
        //     document.getElementsByClassName('loweLogo').item(0).setAttribute('src', 'https://github.com/igeller/assets/blob/main/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Lowe.png?raw=true')
        //
        //     document.getElementsByClassName('mellonLogo').item(0).setAttribute('src', "https://github.com/igeller/assets/blob/main/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Mellon.png?raw=true");
        // }else{
        //     document.getElementsByClassName('loweLogo').item(0).setAttribute('src', "");
        //     document.getElementsByClassName('mellonLogo').item(0).setAttribute('src',"https://github.com/igeller/assets/blob/main/Assets/Mobile/Logos/Africa-Kiosk-Mobile-Mellon.png?raw=true");
        // }


        // console.log(screen.width)
        // console.log('222222', document.readyState)
        // // const doc = document;
        // // topBannerBottom = doc.getElementById('t1').getBoundingClientRect().bottom;
        // // console.log('****', topBannerBottom);
        // topBannerBottom = document.getElementById('t1').getBoundingClientRect().bottom;
        // console.log('****', document.getElementById('t1').innerHTML);
        // console.log("&&&&&", document.getElementById('bodyDiv'));
        //
        // document.getElementById('bodyDiv').style.marginTop = `${topBannerBottom}px`;
    });



    return (


                    <div className={`mx-4 text-center`}>
                        <>
                            <TopBanner className={`fixed-top mt-4 h-auto`} id={'t1'} src={IMAGES[2].url}/>

                        </>
                        {/*<div className={`d-flex position-relative flex-column mt-5`}>*/}
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
