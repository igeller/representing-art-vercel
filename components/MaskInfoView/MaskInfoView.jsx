//THis will need the menu at the bottom
//model viewer above it
//states that control the query for the next and last buttons based on the position
import React from "react";
import PropTypes from "prop-types";
import {ButtonGroup, Button} from "react-bootstrap";
import MobileMaskMenu from "../MobileMaskMenu/MobileMaskMenu";
import ModelViewer from "../ModelViewer/ModelViewer";
import masks from "../../constants/mask_specs";

const MaskInfoView = (props) => {
    return(
        <div>
            <h1>Mask Name</h1>
            <ModelViewer
                glb={masks[props.queryParam].model.glb}
                usdz={masks[props.queryParam].model.usdz}
                placeholder={masks[props.queryParam].model.placeholder}
            />
            <MobileMaskMenu maskNum={props.queryParam}/>
            {/*<MobileMaskMenu></MobileMaskMenu>*/}
        </div>
    )
}

MaskInfoView.propTypes = {
    queryParam: PropTypes.string.isRequired
}

export default MaskInfoView;
