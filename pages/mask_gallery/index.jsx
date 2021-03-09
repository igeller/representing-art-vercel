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

    return (
        <div className={`gridHolder`}>
            <TopNavBar backLink={'/'} className={`topOfGrid mb-1`} id={'t1'}/>
            <div className={`middleOfGrid align-self-start my-0`} id={'bodyDiv'} >
                <Textfit
                    mode={`single`}
                    className={'mx-5 mb-3'}>
                    <div>RE-PRESENTING ART</div>
                </Textfit>
                <CardGroup className={`mx-auto row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 `}>
                    <MaskGalleryCards maskOBJ={masks[0]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[2]}/>
                    <MaskGalleryCards maskOBJ={masks[3]}/>
                    <MaskGalleryCards maskOBJ={masks[4]}/>
                    <MaskGalleryCards maskOBJ={masks[5]}/>
                    <MaskGalleryCards maskOBJ={masks[6]}/>
                    <MaskGalleryCards maskOBJ={masks[7]}/>

                </CardGroup>
            </div>
            <BottomBanner className={`bottomOfGrid mt-1`} id={`b1`}/>
        </div>
    )
}
