//THis will need the menu at the bottom
//model viewer above it
//states that control the query for the next and last buttons based on the position
import React from "react";
import PropTypes from "prop-types";
import MobileMaskMenu from "../MobileMaskMenu/MobileMaskMenu";
import ModelViewer from "../ModelViewer/ModelViewer";
import MenuBar from "../MenuBar/MenuBar";


const MaskInfoView = (props) => {

    return(
        <>
            <MenuBar backLink={'/mask_gallery/'}/>
            <h1>{props.maskOBJ.name}</h1>
            <ModelViewer
                glb={props.maskOBJ.model.glb}
                usdz={props.maskOBJ.model.usdz}
                placeholder={props.maskOBJ.model.placeholder}
            />
            <MobileMaskMenu
                nextMask={props.maskOBJ.next}
                previousMask={props.maskOBJ.previous}
                maskDetails={props.maskOBJ.details}/>
        </>
    )
}

MaskInfoView.propTypes = {
    maskOBJ: PropTypes.object.isRequired
}

export default MaskInfoView;
