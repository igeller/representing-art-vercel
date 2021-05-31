import React from "react";
import PropTypes from "prop-types";
import {Toast} from "react-bootstrap";
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import stylesMap from './MapModal.module.scss'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; //CHANGE FOR THE DE

const MapModal = (props) => {

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoicmVwcmVzZW50aW5nYXJ0IiwiYSI6ImNrazFrcnVoczBzNHgydXQxOWFyZTkyZWIifQ.tkwUtgPIhfaA0S-qOKjkQw',
        interactive: false,
        logoPosition: 'top-right',
        attributionControl: false
    });

        return (
            <>


                {/*<div className={`bg-transparent h-100 w-100 text-left`}*/}
                {/*style={{zIndex: '100000'}}*/}
                {/*     onClick={() => setToast(!tst)}*/}
                {/*>*/}
                <Toast
                    show={props.openMapModal}
                    onClose={props.closeMapModal}
                    className={`position-absolute w-100 h-50 p-4 text-left mx-auto my-0`}
                    style={{top: 'auto', bottom: `${props.height}px`, backgroundColor: `${props.bgColor}`, zIndex: `20000000`}}
                >
                    {console.log(props.mapDetails.mapInfo)}

                    <Toast.Body className={`h-100 ${stylesMap.ovrflw}`}>
                        <div className={`p-0 m-0 w-100 h-100`}>
                            <Map style="mapbox://styles/mapbox/streets-v9"
                                 className={"w-100 h-100"}
                                 center={[props.mapDetails.markerLong, props.mapDetails.markerLat]}
                                 zoom={[3.75]}
                            >

                                {/* Circle example */}
                                <Marker
                                    coordinates={[`${props.mapDetails.markerLong}`, `${props.mapDetails.markerLat}`]}
                                    anchor="bottom"
                                    className={`bg-transparent`}
                                    color={'red'}
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size={"3x"} className={`${stylesMap.mapIcon}`}/>
                                </Marker>
                            </Map>
                        </div>

                    </Toast.Body>

                </Toast>
                {/*</div>*/}



            </>
        )
    };

    MapModal.propTypes = {
        height: PropTypes.number,
        openMapModal: PropTypes.bool.isRequired,
        closeMapModal: PropTypes.func.isRequired,
        mapDetails: PropTypes.object.isRequired,
        bgColor: PropTypes.string.isRequired
    }

    export default MapModal;
