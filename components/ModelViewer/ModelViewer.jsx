import React from "react";
import Head from "next/head";
import PropTypes from 'prop-types';

const ModelViewer = function(props) {
    return(
        <div className={`${props.className}`}>
            <Head>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <script noModule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
            </Head>
            <div className={`h-100 w-100`}>
                <model-viewer
                    src={props.glb}
                    // ios-src={props.usdz}
                    poster={props.placeholder}
                    loading={'eager'}
                    reveal={'auto'}
                    style={{width: '100%', height: '70vh'}}
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    ar-scale="auto"
                    background-color="black"
                    camera-controls
                    interaction-prompt={'auto'}
                    interaction-prompt-style={'wiggle'}


                />
            </div>

        </div>

    )
};


ModelViewer.propTypes={
    glb: PropTypes.string.isRequired,
    usdz: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default ModelViewer;
