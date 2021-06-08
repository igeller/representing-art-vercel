import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import Link from "next/link";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapModal from "../MapModal/MapModal";
import InfoModal from "../InfoModal/InfoModal";
import * as styles from './BottomNav.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faCompass} from "@fortawesome/free-solid-svg-icons";
import SlideModal from "../SlideModal/SlideModal";

const ReactFitText = require('react-fittext');

const BottomNav = (props) => {
    // const h = useRef(null);
    const [showMap, setShowMap] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const navGridRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [dStyle, setDivStyle] = useState(0)
   

    return(
    
<>
 
    <div className={`${styles.navGrid} ${styles.buttonborder} w-100 `} ref={navGridRef}>
        
            
                <Link href={{ query: { maskNumber: props.previousMask }}}>
                    <a
                        className={`btn btn-primary  ${styles.buttonborder} w-100  p-2`}
                        style={{backgroundColor: `#DA5527`}}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size={`2x`} className={`bg-transparent d-block mx-auto`}/>
                        <ReactFitText maxFontSize={10}>
                            <div className={`bg-transparent mt-1`}>
                                Last Mask
                            </div>
                        </ReactFitText>
                    </a>
                </Link>
            
            
    
            {/*<Button*/}
            
            {/*    variant="primary"*/}
            
            {/*    onClick={() => {*/}
            {/*        setShowMap(false)*/}
            {/*        setShowInfo(!showInfo)*/}
            {/*        setDivStyle(document.getElementById(`infoButton`).getBoundingClientRect().height)*/}
            {/*    }}*/}
            
            {/*    className={`${styles.buttonborder} mr-1 p-2 w-100`}*/}
            {/*    style={{backgroundColor: `#F37424`}}>*/}
            {/*    <FontAwesomeIcon icon={faInfoCircle} size={`2x`} className={`bg-transparent d-block mx-auto`}/>*/}
            {/*    <ReactFitText minFontSize={10}>*/}
            {/*        <div className={`bg-transparent mt-1`}>*/}
            {/*            Info*/}
            {/*        </div>*/}
            {/*    </ReactFitText>*/}
            {/*</Button>*/}
        
        <SlideModal
            btnText={`About`}
            bgColor={`#F37424`}
            maskActionBarRef={navGridRef}
            icon={`GiTribalMask`}
        >
            
                <ReactFitText minFontSize={16} maxFontSize={18}>
                    <h1 className={'mb-1 font-weight-bold'}>{props.maskDetails.itemName}</h1>
                </ReactFitText>
                <ReactFitText minFontSize={16} maxFontSize={18}>
                    <p className={`mb-4 font-weight-medium`} >{props.maskDetails.groupLocation}</p>
                </ReactFitText>
                <ReactFitText minFontSize={16} maxFontSize={18}>
                    <h1 className={'mb-1 font-weight-bold'}>{props.maskDetails.itemName}</h1>
                </ReactFitText>
                <ReactFitText minFontSize={11} maxFontSize={13}>
                    <p className={`mb-4 font-weight-light`} >{props.maskDetails.itemCreation}</p>
                </ReactFitText>
                <ReactFitText minFontSize={11} maxFontSize={13}>
                    <p className={`mb-4 font-weight-light`} >{props.maskDetails.medium}</p>
                </ReactFitText>
                <ReactFitText minFontSize={11} maxFontSize={13}>
                    <p className={`mb-4 font-weight-light`} >{props.maskDetails.description}</p>
                </ReactFitText>
                <ReactFitText minFontSize={11} maxFontSize={13}>
                    <p className={`mb-4 font-weight-bold font-italic`}>{props.maskDetails.providedBy}</p>
                </ReactFitText>
        </SlideModal>
        
        <SlideModal
            btnText={`Instructions`}
            bgColor={`#0C5230`}
            maskActionBarRef={navGridRef}
            icon={`AiFillInfoCircle`}
        />
        <SlideModal
            btnText={`Map`}
            bgColor={`#A3D7F4`}
            maskActionBarRef={navGridRef}
            icon={`FaCompass`}
        />
            {/*<Button*/}
    
            {/*    variant="primary"*/}
    
            {/*    onClick={() => {*/}
            {/*        setShowMap(false)*/}
            {/*        setShowInfo(false)*/}
            {/*        setShowInstructions(!showInstructions)*/}
            {/*        setDivStyle(document.getElementById(`infoButton`).getBoundingClientRect().height)*/}
            {/*    }}*/}
    
            {/*    className={`${styles.buttonborder} mr-1 p-2 w-100`}*/}
            {/*    style={{backgroundColor: `#0C5230`}}>*/}
            {/*    <FontAwesomeIcon icon={faQuestionCircle} size={`2x`} className={`bg-transparent d-block mx-auto`}/>*/}
            {/*    <ReactFitText minFontSize={10}>*/}
            {/*        <div className={`bg-transparent mt-1`}>*/}
            {/*            Instructions*/}
            {/*        </div>*/}
            {/*    </ReactFitText>*/}
            {/*</Button>*/}
    
    
            <Button
                variant="primary"
                onClick={() => {
                    setShowInfo(false)
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
                    className={`btn btn-primary ${styles.buttonborder} w-100`}
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
    </div>
    
    {/*<div className={`w-100 row-col`} id={`${props.id}`}  id={`infoButton`}>*/}
    
    
    {/*        </div>*/}
            
            <MapModal
                height={dStyle > 0 ?dStyle : 0}
                openMapModal={showMap}
                closeMapModal={() => setShowMap(!showMap)}
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
