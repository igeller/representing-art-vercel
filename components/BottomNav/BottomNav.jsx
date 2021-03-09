import React, {useEffect, useRef} from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {
    ButtonGroup,
    Button,
    SplitButton,
    DropdownButton,
    Dropdown,
    Modal,
    ModalBody,
    Card,
    Accordion,
    AccordionToggle,
    Tabs,
    Tab, TabContainer, TabContent,
    Nav, OverlayTrigger, AccordionCollapse,
    Overlay
} from "react-bootstrap";
import Link from "next/link";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapModal from "../MapModal/MapModal";
import InfoModal from "../InfoModal/InfoModal";
import * as styles from './BottomNav.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faInfoCircle, faCompass} from "@fortawesome/free-solid-svg-icons";
const ReactFitText = require('react-fittext');

const BottomNav = (props) => {
    // const h = useRef(null);
    const [showMap, setShowMap] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    // const [evKey, setEvKey] = useState(false);

    const [loading, setLoading] = useState(false);
    const [dStyle, setDivStyle] = useState(0)
    //
    // React.useEffect(()=>{
    //     setDivStyle((x)=>{
    //         console.log(x);
    //         return x;
    //     })
    //
    // })




    return(
<>
    {/*{        console.log('eventKey: ', evKey)}*/}
            <ButtonGroup className={`${props.className} ${styles.menustyle} w-100`} id={`${props.id}`}  id={`infoButton`}>

                <Link href={{ query: { maskNumber: props.previousMask }}}>
                    <a
                        className={`btn btn-primary stretched-link ${styles.buttonborder} w-100 mr-1 p-2`}
                        style={{backgroundColor: `#DA5527`}}
                    >
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

                    onClick={() => {
                        setShowInfo(!showInfo)
                        setDivStyle(document.getElementById(`infoButton`).getBoundingClientRect().height)
                    }}

                    className={`${styles.buttonborder} mr-1 p-2 w-100`}
                    style={{backgroundColor: `#F37424`}}>
                    <FontAwesomeIcon icon={faInfoCircle} size={`2x`} className={`bg-transparent d-block mx-auto`}/>
                    <ReactFitText minFontSize={10}>
                        <div className={`bg-transparent mt-1`}>
                            Info
                        </div>
                    </ReactFitText>
                </Button>



                <Button
                    variant="primary"
                    onClick={() => {
                        setShowMap(!showMap)
                        setDivStyle(document.getElementById(`infoButton`).getBoundingClientRect().height)
                    }}
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
                        style={{backgroundColor: `#C0CB2F`}}
                    >
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
                height={dStyle > 0 ?dStyle : 0}
                openMapModal={showMap}
                closeMapModal={() => setShowMap(false)}
                bgColor={'#A3D7F4'}
                mapDetails={props.maskDetails.mapInfo}
            />
            <InfoModal
                height={dStyle > 0 ?dStyle : 0}
                eventKey="0"
                openInfoModal={showInfo}
                bgColor={'#F37424'}
                closeInfoModal={() => setShowInfo(false)}
                group={props.maskDetails.group}
                groupLocation={props.maskDetails.groupLocation}
                itemName={props.maskDetails.itemName}
                itemCreation={props.maskDetails.itemCreation}
                medium={props.maskDetails.medium}
                description={props.maskDetails.description}
                providedBy={props.maskDetails.providedBy}
            />

        </>

    )
}

BottomNav.propTypes = {
    nextMask: PropTypes.number.isRequired,
    previousMask: PropTypes.number.isRequired,
    maskDetails: PropTypes.object.isRequired,
    className: PropTypes.string,
    style: PropTypes.string,
    id: PropTypes.string
};

export default BottomNav
