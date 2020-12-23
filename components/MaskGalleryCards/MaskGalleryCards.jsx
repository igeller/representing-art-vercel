import React from 'react';
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import Link from 'next/link';

//{/*href={props.linkToMaskDetails}*/}
const MaskGalleryCards = (props) =>{
    return(
        <Card>
            <Card.Img variant={props.imagePosition} src={props.imageSrc}/>
            <Link href={{ pathname: props.linkToMaskDetails, query: { name: props.maskNum }}}>
                <a className="btn btn-primary stretched-link">Learn More</a>
            </Link>
        </Card>

    )
}

MaskGalleryCards.propTypes = {
    imagePosition: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    linkToMaskDetails: PropTypes.string.isRequired,
    maskNum: PropTypes.number.isRequired
};


export default MaskGalleryCards;


