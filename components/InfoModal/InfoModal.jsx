import React from "react";
import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";
import styles from './InfoModal.module.scss'
const ReactFitText = require('react-fittext');



/*
Content Class name is a div underneath of the modal body.. giving a different background color does not matter

backgroupClassName is the typically grey background to a modal

modal.body style sets the orange behind the text

 */

const InfoModal = (props) => {
    return(
        <>

            <Modal
                className={`bg-transparent`}
                dialogClassName={`${styles.pos}`}
                contentClassName={`border-0`}
                backdropClassName={'bg-transparent'}
                scrollable={true}
                animation={false}
                show={props.openInfoModal}
                onHide={props.closeInfoModal}
            >
                <Modal.Body
                    className={`text-left p-4`}
                    style={{backgroundColor: `${props.bgColor}`}}
                >
                    <div className={`${styles.ovrflw} p-0 m-0`}>
                        <ReactFitText minFontSize={10}>
                            <h1 className={'mb-1 font-weight-bold'}>{props.group}</h1>
                        </ReactFitText>
                        <ReactFitText maxFontSize={20}>
                            <p className={`mb-4 font-weight-medium`} >{props.groupLocation}</p>
                        </ReactFitText>
                        <ReactFitText minFontSize={10}>
                            <h1 className={'mb-1 font-weight-bold'}>{props.itemName}</h1>
                        </ReactFitText>
                        <ReactFitText maxFontSize={22}>
                            <p className={`mb-4 font-weight-light`} >{props.itemCreation}</p>
                        </ReactFitText>
                        <ReactFitText maxFontSize={18}>
                            <p className={`mb-4 font-weight-light`} >{props.medium}</p>
                        </ReactFitText>
                        <ReactFitText maxFontSize={18}>
                            <p className={`mb-4 font-weight-light`} >{props.description}</p>
                        </ReactFitText>
                        <ReactFitText maxFontSize={14}>
                            <p className={`mb-4 font-weight-bold font-italic`}>{props.providedBy}</p>
                        </ReactFitText>
                    </div>

                </Modal.Body>

            </Modal>
        </>

    )
};

InfoModal.propTypes = {
    bgColor: PropTypes.string.isRequired,
    openInfoModal: PropTypes.bool.isRequired,
    closeInfoModal: PropTypes.func.isRequired,
    group: PropTypes.string.isRequired,
    groupLocation: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemCreation: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    description: PropTypes.string,
    providedBy: PropTypes.string,
}

export default InfoModal;
