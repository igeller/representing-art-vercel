import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {ButtonGroup, Button, Modal} from "react-bootstrap";
import Link from "next/link";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Head from "next/head";
import MapModal from "../MapModal/MapModal";
import InfoModal from "../InfoModal/InfoModal";


const MobileMaskMenu = (props) => {
    // const [maskNum, setMaskNum] = useState(props.maskNum);


    const menustyle ={
        position: "absolute",
        bottom: "0px",
    };

    const [showMap, setShowMap] = useState(false);
    const [showInfo, setShowInfo] = useState(false);


    return(
        <>
            <ButtonGroup aria-label="" style={menustyle} >
                <Link href={{ query: { maskNumber: props.previousMask }}}>
                    <a className="btn btn-primary stretched-link">Last Mask</a>
                </Link>

                <Button variant="primary" onClick={() => setShowInfo(true)}>More Info</Button>
                <Button variant="primary" onClick={() => setShowMap(true)}>Map View</Button>
                <Link href={{ query: { maskNumber: props.previousMask }}}>
                    <a className="btn btn-primary stretched-link">Next Mask</a>
                </Link>
            </ButtonGroup>

            <MapModal openMapModal={showMap} closeMapModal={() => setShowMap(false)}/>
            <InfoModal
                openInfoModal={showInfo}
                closeInfoModal={() => setShowInfo(false)}
                group={props.maskDetails.group}
                groupLocation={props.maskDetails.groupLocation}
                itemName={props.maskDetails.itemName}
                itemCreation={props.maskDetails.itemCreation}
                medium={props.maskDetails.medium}
                description={props.maskDetails.description}
            />


        </>

    )
}

MobileMaskMenu.propTypes = {
    nextMask: PropTypes.number.isRequired,
    previousMask: PropTypes.number.isRequired,
    maskDetails: PropTypes.object.isRequired
}

export default MobileMaskMenu;
