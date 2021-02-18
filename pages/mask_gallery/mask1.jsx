import MaskInfoView from "../../components/MaskInfoView/MaskInfoView";
import maskSpecs from "../../constants/mask_specs";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import ReactDOM from "react-dom";
import {openNav} from '../../components/TopNavBar/TopNavBar'

export default function mask1(props) {

    return (
        <div style={{height: '100vh'}}>
            <TopNavBar className={'fixed-top position-sticky mb-3'} backLink={'/mask_gallery/'}/>
            {/*{const totalMasks = props.}*/}
            {/*<MaskInfoView maskOBJ={maskSpecs[props.maskNumber]} maskNumber={props.maskNumber} maskSpecFile={maskSpecs}></MaskInfoView>*/}

            <MaskInfoView maskOBJ={maskSpecs[props.maskNumber]}/>
            <BottomNav
                className={'fixed-bottom '}
                nextMask={maskSpecs[props.maskNumber].next}
                previousMask={maskSpecs[props.maskNumber].previous}
                maskDetails={maskSpecs[props.maskNumber].details}/>
        </div>

    )
}

mask1.getInitialProps = async function({query}) {
    // const maskNumber = query.maskNumber

    return {
        maskNumber: query.maskNumber
    }
}
