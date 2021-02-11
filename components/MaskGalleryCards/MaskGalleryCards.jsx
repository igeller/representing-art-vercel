import React from 'react';
import {Card, Col} from "react-bootstrap";
import PropTypes from 'prop-types';
import Link from 'next/link';

const MaskGalleryCards = (props) =>{
    return(
        <Col>
            <Card className={"mb-4"}>
                <Link href={{ pathname: props.maskOBJ.card.linkToMaskDetails, query: { maskNumber: props.maskOBJ.id }}}>
                    <Card.Img variant={props.maskOBJ.card.imagePosition} src={props.maskOBJ.card.imageSrc} className={` img`}/>
                </Link>
            </Card>
        </Col>


    )
}

MaskGalleryCards.propTypes = {
    maskOBJ: PropTypes.object.isRequired,
    marginRight: PropTypes.bool
};


export default MaskGalleryCards;


