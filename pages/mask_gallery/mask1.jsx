import MaskInfoView from "../../components/MaskInfoView/MaskInfoView";
import maskSpecs from "../../constants/mask_specs";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";

export default function mask1(props) {

    return (
        <div style={{height: '100vh'}}>
            <TopNavBar className={'fixed-top position-sticky mb-3'} backLink={'/mask_gallery/'}/>

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
    let maskNum = query.maskNumber

return {
        maskNumber: maskNum
    }
}
