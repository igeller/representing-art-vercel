import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {findDOMNode} from 'react-dom';
import Link from 'next/link';
import TopBanner from "../components/TopBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
import {Textfit} from 'react-textfit';

export default function Home() {
    // let [topBannerBottomPos, bottomBannerPos] = useState(0)

    // let topBannerBottomPos = document.getElementById('t1').getBoundingClientRect().bottom;
    // let bottomBannerPos = document.getElementById('b1').getBoundingClientRect().top;
    // bottomBannerPos = document.getElementById('b1').getBoundingClientRect().top;
    // function topBan(x){
    //     return x
    // }
    // function botBan(x){
    //     return x
    // }
    // function topBannerBottomPos();
    // let bottomBannerPos = botBan()
    // useEffect(()=>{
    //     topBannerBottomPos(()=>{(document.getElementById('t1').getBoundingClientRect().bottom)});
    //     botBan(document.getElementById('b1').getBoundingClientRect().top)
    // });

    this.imgRf = React.createRef()



    // let bottomBannerHeight = document.getElementById('b1').getBoundingClientRect().height;
    console.log('****', topBannerBottomPos);
    return (

      <div className={`mx-4 text-center`}>
          <TopBanner className={`fixed-top pt-4`} id={`t1`}/>
          <div className={`d-flex position-relative flex-column h-100`} style={{marginTop: `${topBannerBottomPos}px`, height: `${topBannerBottomPos-bottomBannerPos}`}}>
            <img className={'loweLogo w-50 mt-4 mb-5 pb-5 mx-auto'}/>
            <Textfit mode={'single'} className={`mt-5 pt-5 ${styles.title}`}>RE-PRESENTING ART</Textfit>
            <p className={'mx-auto my-3 font-italic'}>
                A Holographic Installation<br/>
                for the Lowe Art of<br/>
                Africa Gallery Collections
            </p>
            <Link href={'mask_gallery/'}>
              <Button className={`${styles.btn} mt-5 text-wrap badge-pill btn-lg px-3 py-2 w-75 mx-auto`}>View Gallery</Button>
            </Link>
            {/*<img className={'mellonLogo w-50 mt-5 pt-5 mx-auto'}/>*/}
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}/>
          </div>
          {/*CHANGE TO CORRECT IMAGE BELOW!!*/}

          <BottomBanner id={`b1`} />
      </div>

  )
}
