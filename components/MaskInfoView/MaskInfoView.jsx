//THis will need the menu at the bottom
//model viewer above it
//states that control the query for the next and last buttons based on the position
import React from "react";
import PropTypes from "prop-types";
import ModelViewer from "../ModelViewer/ModelViewer";

const ReactFitText = require('react-fittext');


const MaskInfoView = (props) => {

    return(
        <div className={'position-static bg-transparent overflow-auto'} >
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
        </div>
    )
};

MaskInfoView.propTypes = {
    maskOBJ: PropTypes.object.isRequired
}

export default MaskInfoView;
