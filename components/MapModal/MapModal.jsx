import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {Button, Modal, ModalDialog} from "react-bootstrap";
import Link from "next/link";
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './MapModal.module.scss'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";//CHANGE FOR THE DE

const MapModal = (props) => {

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoicmVwcmVzZW50aW5nYXJ0IiwiYSI6ImNrazFrcnVoczBzNHgydXQxOWFyZTkyZWIifQ.tkwUtgPIhfaA0S-qOKjkQw',
        interactive: false,
        logoPosition: 'top-right',
        attributionControl: false
    });

    return(
        <>

            <Modal
                className={`bg-transparent`}
                dialogClassName={`${styles.pos}`}
                contentClassName={`border-0`}
                backdropClassName={'bg-transparent'}
                scrollable={true}
                animation={false}
                show={props.openMapModal}
                onHide={props.closeMapModal}
            >
                <Modal.Body
                    className={`h-25 p-3`}
                    style={{backgroundColor: `${props.bgColor}`}}
                >

                    <Map style="mapbox://styles/mapbox/streets-v9"
                         containerStyle={{
                            height: '100%'
                         }}
                         className={"w-100"}
                         center={[`${props.mapDetails.mapInfo.centerMapLong}`, `${props.mapDetails.mapInfo.centerMapLat}`]}
                         zoom={[3.75]}
                    >

                        {/* Circle example */}
                        <Marker
                            coordinates={[`${props.mapDetails.mapInfo.markerLong}`, `${props.mapDetails.mapInfo.markerLat}`]}
                            anchor="bottom"
                            className={`bg-transparent`}
                            color={'red'}
                        >
                            <FontAwesomeIcon icon={faMapMarkerAlt} size={"3x"} className={`${styles.mapIcon}`}/>
                        </Marker>
                    </Map>
                </Modal.Body>

            </Modal>
        </>
    )
};

MapModal.propTypes = {
    openMapModal: PropTypes.bool.isRequired,
    closeMapModal: PropTypes.func.isRequired,
    mapDetails: PropTypes.object.isRequired,
    bgColor: PropTypes.string.isRequired
}

export default MapModal;
