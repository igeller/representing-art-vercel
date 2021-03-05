import {CardGroup, CardDeck, CardColumns} from "react-bootstrap";
import MaskGalleryCards from "../../components/MaskGalleryCards/MaskGalleryCards";
import masks from "../../constants/mask_specs";
import TopMenu from '../../components/TopMenu/TopMenu'
import {Textfit} from 'react-textfit';
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import {useEffect, useState} from "react";
import styles from "../../styles/Home.module.scss";
import  mainStyles from "../../styles/Home.module.scss";

export default function index() {
    // let [pos, setState] = useState(0)
    // let posT, posB = 0;
    //
    // useEffect(()=>{
    //
    //     console.log('111111', document.readyState)
    //
    //     if(document.readyState != "complete"){
    //         slow()
    //     }
    //
    //     if(document.readyState == "complete") {
    //         posT = document.getElementById('t1').getBoundingClientRect().bottom
    //         posB = document.getElementById('b1').getBoundingClientRect().top
    //         console.log('###:T', posT, ' ####B: ', posB, posB-posT)
    //         let hei = posB-posT
    //         document.getElementById('bodyDiv').style.marginTop = `${posT}px`
    //         document.getElementById('bodyDiv').style.height = `${hei}px`
    //         console.log('******!!!! use effectcomplete', document.getElementById('t1').getBoundingClientRect())
    //
    //         // if(window.width > 900){
    //         //     loweImage = 'https://igeller.github.io/assets/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Lowe.png';
    //         //     mellonImage = 'https://igeller.github.io/assets/Assets/Kiosk/Logos/Africa-Kiosk-Logo-Carnegie.png';
    //         // }
    //
    //     }
    //
    //
    // }, [pos]);
    //
    // function slow(){
    //     const timer = setTimeout(() => {
    //         setState({pos: document.getElementById(`t1`).getBoundingClientRect()})
    //         console.log('This will run after 2 second!')
    //         return;
    //
    //     }, 2000);
    //     return () => {
    //         clearTimeout(timer);
    //         pos = document.getElementById('t1').getBoundingClientRect()
    //
    //     }
    // }


    return (
        <div className={`gridHolder`}>
            <TopNavBar backLink={'/'} className={`topOfGrid align-self-center`} id={'t1'}/>
            <div className={` middleOfGrid flex-column w-100  my-4  mx-auto`} id={'bodyDiv'} >
                <Textfit
                    mode={`single`}
                    className={'mx-5 mb-3'}>
                    <div>RE-PRESENTING ART</div>
                </Textfit>
                <CardGroup className={`mx-auto row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 `}>
                    <MaskGalleryCards maskOBJ={masks[0]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[0]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>

                </CardGroup>
            </div>
            <BottomBanner className={`bottomOfGrid align-self-end`} id={`b1`}/>
        </div>
    )
}
