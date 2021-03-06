import MaskInfoView from "../../components/MaskInfoView/MaskInfoView";
import maskSpecs from "../../constants/mask_specs";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import React, {useEffect, useState} from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import styles from "../../styles/Home.module.scss";

export default function mask1(props) {

    return (
        <div className={`gridHolder`}>
            <TopNavBar className={'topOfGrid'} backLink={'./'} id={'t1'}/>

            <MaskInfoView maskOBJ={maskSpecs[props.maskNumber]} className={` middleOfGrid ${styles.bodyOvrflw} my-4 mx-auto`} id={'bodyDiv'}/>
            <BottomNav
                className={'bottomOfGrid'}
                nextMask={maskSpecs[props.maskNumber].next}
                previousMask={maskSpecs[props.maskNumber].previous}
                maskDetails={maskSpecs[props.maskNumber].details}
                id={'b1'}
            />
        </div>


    )
}

mask1.getInitialProps = async function({query}) {
    let maskNum = query.maskNumber

return {
        maskNumber: maskNum
    }
}
