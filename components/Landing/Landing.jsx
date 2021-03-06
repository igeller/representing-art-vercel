import React from 'react';
import './styles/App.scss';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

import * as ROUTES from "../../../src/constants/routes"
import {Link} from "react-router-dom";


function Home() {
    return (
        <div>
            {/*musuem anme*/}
            <h1>LOWE</h1>

            {/*//Project Name*/}
            <h2>RE-PRESENTING ART</h2>
            {/*info about project*/}
            <p>A Holographic Installation for the Lowe Art of Africa Gallery Collections</p>
            {/*//button to link to gallery*/}
            <Link to={ROUTES.GALLERY}>
                <Button variant={'primary'}>ENTER GALLERY</Button>
            </Link>


            {/*<Gallery images={IMAGES} enableImageSelection={false} onClickThumbnail={show3dobs}/>*/}
            {/*<model-viewer src={"https://representingart.imfast.io/punu/scene.gltf"} loading="eager" poster="https://representingart.imfast.io/kulango-people-ceremonial-dance-mask/textures/KulangaMaskMesh.png" ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls/>*/}

        </div>
    );
}

export default (Home);
