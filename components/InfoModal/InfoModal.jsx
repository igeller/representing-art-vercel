import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {Modal, ModalDialog} from "react-bootstrap";
import styles from './InfoModal.module.scss'



const InfoModal = (props) => {
    return(
        <>
            <Modal
                show={props.openInfoModal}
                onHide={props.closeInfoModal}
            >
                <ModalDialog className={styles.modal}>
                <Modal.Body >
                    <h1>{props.group}</h1>
                    <p>{props.groupLocation}</p>
                    <h1>{props.itemName}</h1>
                    <p>{props.itemCreation}</p>
                    <p>{props.medium}</p>
                    <p>{props.description}</p>
                </Modal.Body>
                </ModalDialog>
            </Modal>
        </>

    )
};

InfoModal.propTypes = {
    openInfoModal: PropTypes.bool.isRequired,
    closeInfoModal: PropTypes.func.isRequired,
    group: PropTypes.string.isRequired,
    groupLocation: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemCreation: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default InfoModal;
