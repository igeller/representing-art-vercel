//THis will need the menu at the bottom
//model viewer above it
//states that control the query for the next and last buttons based on the position
import React from "react";
import PropTypes from "prop-types";
import MobileMaskMenu from "../MobileMaskMenu/MobileMaskMenu";
import ModelViewer from "../ModelViewer/ModelViewer";


const MaskInfoView = (props) => {

    return(
        <div>

            <h1>Mask Name</h1>
            <ModelViewer
                glb={props.maskOBJ.model.glb}
                usdz={props.maskOBJ.model.usdz}
                placeholder={props.maskOBJ.model.placeholder}
            />
            <MobileMaskMenu maskNum={props.maskOBJ.number}/>
        </div>
    )
}

MaskInfoView.propTypes = {
    maskOBJ: PropTypes.object.isRequired
}

export default MaskInfoView;
