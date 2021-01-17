import React from 'react';
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import Link from 'next/link';

//{/*href={props.linkToMaskDetails}*/}
const MaskGalleryCards = (props) =>{
    return(
        <Card>
            <Card.Img variant={props.maskOBJ.card.imagePosition} src={props.maskOBJ.card.imageSrc}/>
            <Link href={{ pathname: props.maskOBJ.card.linkToMaskDetails, query: { maskNumber: props.maskOBJ.id }}}>
                <a className="btn btn-primary stretched-link">Learn More</a>
            </Link>
        </Card>

    )
}

MaskGalleryCards.propTypes = {
    maskOBJ: PropTypes.object.isRequired,
};


export default MaskGalleryCards;


