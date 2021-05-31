import React from 'react';
import {Card, Col} from "react-bootstrap";
import PropTypes from 'prop-types';
import Link from 'next/link';

const ReactFitText = require('react-fittext');


const MaskGalleryCards = (props) =>{
    return(
        <Col className={`m-0 mb-4`}>
            <Card className={"mb-1"}>
                <Link href={{ pathname: props.maskOBJ.linkToMaskDetails, query: { maskNumber: props.maskOBJ.id }}}>
                    <Card.Img variant={`top`} src={props.maskOBJ.model.placeholder} className={`img`}/>
                </Link>
            </Card>
            <ReactFitText>
                <div>{props.maskOBJ.details.group}</div>
            </ReactFitText>
            <ReactFitText maxFontSize={10}>
                <div>{props.maskOBJ.details.medium}</div>

            </ReactFitText>
        </Col>


    )
}

MaskGalleryCards.propTypes = {
    maskOBJ: PropTypes.object.isRequired,
    marginRight: PropTypes.bool
};


export default MaskGalleryCards;


