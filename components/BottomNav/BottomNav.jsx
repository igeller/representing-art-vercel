import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import 'mapbox-gl/dist/mapbox-gl.css';
import * as styles from './BottomNav.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import SlideModal from "../SlideModal/SlideModal";
import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import getRefPosition from "../../functions/functions";
import {Button} from "react-bootstrap";
import ModelViewer from "../ModelViewer/ModelViewer";
const ReactFitText = require('react-fittext');

const BottomNav = (props) => {
    // const h = useRef(null);
    const [showMap, setShowMap] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const navGridRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [dStyle, setDivStyle] = useState(0)
    
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoicmVwcmVzZW50aW5nYXJ0IiwiYSI6ImNrazFrcnVoczBzNHgydXQxOWFyZTkyZWIifQ.tkwUtgPIhfaA0S-qOKjkQw',
        interactive: false,
        logoPosition: 'top-right',
        attributionControl: false
    });
    
    
    return(
    
<>
 
    <div className={`${styles.navGrid} ${styles.buttonborder} w-100 `} ref={navGridRef}>
    
    
        <Button
            variant="primary"
            
        
            className={`p-2 w-100`}
            style={{
                border: `none`,
                borderRadius: `0px`,
                margin: `0px`,
                backgroundColor: `#DA5527`}}
        >
    
    
            <Link href={{ query: { maskNumber: props.previousMask }}}>
                <a
                    className={``}
                    style={{
                        border: `none`,
                        borderRadius: `0px`,
                        margin: `0px`,
                        backgroundColor: `#DA5527`}}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className={`bg-transparent d-block mx-auto`}/>
                    <ReactFitText minFontSize={10}>
                        <div className={`bg-transparent mt-1`}>
                            Previous
                        </div>
                    </ReactFitText>
                </a>
            </Link>
            
        
            {/*<CurrentIcon  style={ { color: `white !important`, stroke: `white !important`, fill: 'white' +*/}
            {/*        ' !important' }}/>*/}
            
        </Button>
        
            
            
    
           
        
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
        >
            
          
            <div className={`${styles.map}`}>
                <Map style="mapbox://styles/mapbox/streets-v9"
                     className={`w-100 ${styles.pos}`}
                     center={[props.maskDetails.mapInfo.markerLong, props.maskDetails.mapInfo.markerLat]}
                     zoom={[3.75]}
                >
            
                    <Marker
                        coordinates={[`${props.maskDetails.mapInfo.markerLong}`, `${props.maskDetails.mapInfo.markerLat}`]}
                        anchor="bottom"
                        className={`bg-transparent`}
                        color={'red'}
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} size={"3x"} className={`${styles.mapIcon}`}/>
                    </Marker>
                </Map>
            </div>
            
            
        </SlideModal>
    
        <Button
            variant="primary"
            // onClick={ModelViewer.showPoster()}
        
            className={`p-2 w-100`}
            style={{
                border: `none`,
                borderRadius: `0px`,
                margin: `0px`,
                backgroundColor: `#C0CB2F`}}
        >
        
        
            <Link href={{ query: { maskNumber: props.nextMask }}}>
                <a>
                    <FontAwesomeIcon icon={faChevronRight} className={`bg-transparent d-block mx-auto`}/>
                    <ReactFitText minFontSize={10}>
                        <div className={`bg-transparent mt-1`}>
                            Next
                        </div>
                    </ReactFitText>
                </a>
            </Link>
        
        
            {/*<CurrentIcon  style={ { color: `white !important`, stroke: `white !important`, fill: 'white' +*/}
            {/*        ' !important' }}/>*/}
    
        </Button>
    
        
    </div>
    
   

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
