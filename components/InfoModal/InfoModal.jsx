import React from "react";
import PropTypes from "prop-types";
import {Toast} from "react-bootstrap";
import styles from './InfoModal.module.scss'
const ReactFitText = require('react-fittext');



/*
Content Class name is a div underneath of the modal body.. giving a different background color does not matter

backgroupClassName is the typically grey background to a modal

modal.body style sets the orange behind the text

 */

const InfoModal = (props) => {
    const [tst, setToast] = React.useState(props.openInfoModal)

    return(
        <>

            {/*<div className={`bg-transparent h-100 w-100 text-left`}*/}
            {/*style={{zIndex: '100000'}}*/}
            {/*     onClick={() => setToast(!tst)}*/}
            {/*>*/}
                <Toast
                    show={props.openInfoModal}
                    onClose={props.closeInfoModal}
                    className={`position-absolute w-100 h-50 p-4 text-left`}
                    style= {{top: 'auto', left:'0px',  bottom: `${props.height}px`, backgroundColor: `${props.bgColor}`}}
                >

                    <Toast.Body className={`h-100 ${styles.ovrflw}`}>
                        <div className={`p-0 m-0`}>
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

                    </Toast.Body>

                </Toast>
            {/*</div>*/}



</>)
}

InfoModal.propTypes = {
    height: PropTypes.number,
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
