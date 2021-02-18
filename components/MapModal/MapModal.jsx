import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {Button, Modal, ModalDialog} from "react-bootstrap";
import Link from "next/link";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../InfoModal/InfoModal.module.scss'

//CHANGE FOR THE DE

const InfoModal = (props) => {

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoicmVwcmVzZW50aW5nYXJ0IiwiYSI6ImNrazFrcnVoczBzNHgydXQxOWFyZTkyZWIifQ.tkwUtgPIhfaA0S-qOKjkQw'
    });

    return(
        <>

            <Modal
                className={`bg-transparent h-100`}
                dialogClassName={`${styles.pos}`}
                contentClassName={`border-0 bg-transparent`}
                backdropClassName={'bg-transparent'}
                animation={false}
                show={props.openMapModal}
                onHide={props.closeMapModal}
            >
                <Modal.Body
                    className={`p-3`}
                    style={{backgroundColor: `${props.bgColor}`}}
                >
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '50vh',
                            width: '100vw'
                        }}
                        className={"mw-100"}
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                        </Layer>
                    </Map>
                </Modal.Body>

            </Modal>
        </>
    )
};

InfoModal.propTypes = {
    openMapModal: PropTypes.bool.isRequired,
    closeMapModal: PropTypes.func.isRequired
}

export default InfoModal;
