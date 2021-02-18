//THis will need the menu at the bottom
//model viewer above it
//states that control the query for the next and last buttons based on the position
import React from "react";
import PropTypes from "prop-types";
import BottomNav from "../BottomNav/BottomNav";
import ModelViewer from "../ModelViewer/ModelViewer";
import TopMenu from "../TopMenu/TopMenu";
import TopNavBar from "../TopNavBar/TopNavBar";
const ReactFitText = require('react-fittext');


const MaskInfoView = (props) => {

    return(
        <div className={'position-static bg-transparent overflow-auto'} >
            {/*<TopNavBar className={'hidden'}/>*/}
            <ReactFitText
                compressor={2.25}
                minFontSize={10}>
                    <h1
                        className={'text-uppercase font-weight-bold'}>
                            {props.maskOBJ.name}
                    </h1>
            </ReactFitText>
                <ModelViewer
                    className={`my-4`}
                    glb={props.maskOBJ.model.glb}
                    usdz={props.maskOBJ.model.usdz}
                    placeholder={props.maskOBJ.model.placeholder}
                />

            {/*<BottomNav*/}
            {/*    className={'invisible'}*/}
            {/*    style={{visibility: 'hidden'}}*/}
            {/*    nextMask={props.maskOBJ.next}*/}
            {/*    previousMask={props.maskOBJ.previous}*/}
            {/*    maskDetails={props.maskOBJ.details}/>*/}
        </div>
    )
};

MaskInfoView.propTypes = {
    maskOBJ: PropTypes.object.isRequired
}

export default MaskInfoView;
