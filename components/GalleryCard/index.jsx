import React from 'react';

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Co";

import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import * as ROUTES from '../../../src/constants/routes';
import LandingPage from "../Landing/Landing";
import Gallery from "../Gallery";
const GalleryCard = () => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
);

export default GalleryCard;


