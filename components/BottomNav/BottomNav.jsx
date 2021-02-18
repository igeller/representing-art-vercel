import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {ButtonGroup, Button} from "react-bootstrap";
import Link from "next/link";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapModal from "../MapModal/MapModal";
import InfoModal from "../InfoModal/InfoModal";
import * as styles from './BottomNav.module.scss';
import {faChevronLeft, faChevronRight, faInfoCircle, faCompass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const ReactFitText = require('react-fittext');


const BottomNav = (props) => {


    const [showMap, setShowMap] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    return(
        <>
            <ButtonGroup className={`${props.className} ${styles.menustyle} w-100`}>

                <Link href={{ query: { maskNumber: props.previousMask }}}>
                    <a
                        className={`btn btn-primary stretched-link ${styles.buttonborder} w-100 mr-1 p-2`}
                        style={{backgroundColor: `#DA5527`}}>
                            <FontAwesomeIcon icon={faChevronLeft} size={`2x`} className={`bg-transparent d-block mx-auto`}/>
                            <ReactFitText minFontSize={10}>
                                <div className={`bg-transparent mt-1`}>
                                    Last Mask
                                </div>
                            </ReactFitText>
                    </a>
                </Link>

                <Button
                    variant="primary"
                    onClick={() => {setShowInfo(!showInfo)}}
                    className={`${styles.buttonborder} mr-1 p-2 w-100`}
                    style={{backgroundColor: `#F37424`}}>
                        <FontAwesomeIcon icon={faInfoCircle} size={`2x`} className={`bg-transparent d-block mx-auto`}/>
                        <ReactFitText minFontSize={10}>
                            <div className={`bg-transparent mt-1`}>
                                More Info
                            </div>
                        </ReactFitText>
                </Button>


                <Button
                    variant="primary" onClick={() => setShowMap(true)}
                    className={`${styles.buttonborder} mr-1 p-2 w-100`}
                    style={{backgroundColor: `#A3D7F4`}}>
                        <FontAwesomeIcon icon={faCompass} size={`2x`} className={`bg-transparent d-block mx-auto`}/>
                        <ReactFitText minFontSize={10}>
                            <div className={`bg-transparent mt-1`}>
                                Map View
                            </div>
                        </ReactFitText>
                </Button>

                <Link href={{ query: { maskNumber: props.previousMask }}}>
                    <a
                        className={`btn btn-primary stretched-link ${styles.buttonborder} w-100`}
                        style={{backgroundColor: `#C0CB2F`}}>
                            <FontAwesomeIcon icon={faChevronRight} size={`2x`} className={`bg-transparent d-block mx-auto`}/>
                            <ReactFitText minFontSize={10}>
                                <div className={`bg-transparent mt-1`}>
                                    Next Mask
                                </div>
                            </ReactFitText>
                    </a>
                </Link>
            </ButtonGroup>

            <MapModal
                openMapModal={showMap}
                closeMapModal={() => setShowMap(false)}
                bgColor={'#A3D7F4'}
            />
            <InfoModal
                openInfoModal={showInfo}
                closeInfoModal={() => setShowInfo(false)}
                group={props.maskDetails.group}
                groupLocation={props.maskDetails.groupLocation}
                itemName={props.maskDetails.itemName}
                itemCreation={props.maskDetails.itemCreation}
                medium={props.maskDetails.medium}
                bgColor={'#F37424'}
                description={props.maskDetails.description}
            />

        </>

    )
}

BottomNav.propTypes = {
    nextMask: PropTypes.number.isRequired,
    previousMask: PropTypes.number.isRequired,
    maskDetails: PropTypes.object.isRequired,
    className: PropTypes.string,
    style: PropTypes.string
}

export default BottomNav;
