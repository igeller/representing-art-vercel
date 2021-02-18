import React from "react";
import PropTypes from "prop-types";
import {Modal, ModalDialog} from "react-bootstrap";
import styles from './InfoModal.module.scss'


const InfoModal = (props) => {
    return(
        <>

            <Modal
                className={`bg-transparent h-100`}
                dialogClassName={`${styles.pos}`}
                contentClassName={`border-0 bg-transparent`}
                backdropClassName={'bg-transparent'}
                animation={false}
                show={props.openInfoModal}
                onHide={props.closeInfoModal}
            >
                <Modal.Body
                    className={`p-5`}
                    style={{backgroundColor: `${props.bgColor}`}}
                >
                    <h1>{props.group}</h1>
                    <p>{props.groupLocation}</p>
                    <h1>{props.itemName}</h1>
                    <p>{props.itemCreation}</p>
                    <p>{props.medium}</p>
                    <p>{props.description}</p>
                </Modal.Body>

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
    bgColor: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default InfoModal;
