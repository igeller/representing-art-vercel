import React from "react";
import Head from "next/Head";
import PropTypes from 'prop-types';

const ModelViewer = function(props) {
    return(
        <div>
            <Head>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <script noModule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
            </Head>
            <model-viewer
                src={props.gltf}
                ios-src={props.usdz}
                poster={props.placeholderImage}
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="auto"
                background-color="#f6ffe3"
                preload
                reveal-when-loaded
                auto-rotate
                camera-controls
            />
        </div>

    )
}


ModelViewer.propTypes={
    gltf: PropTypes.string.isRequired,
    usdz: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default ModelViewer;
