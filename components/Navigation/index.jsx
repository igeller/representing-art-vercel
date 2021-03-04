import React from 'react';

import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Co";

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import * as ROUTES from '../../../src/constants/routes';
import LandingPage from "../Landing/Landing";
import Gallery from "../Gallery";
import CardInfo from "../CardInfo";


const Navigation = () => (
<div>
    <Router>


    <Nav fill variant="pills" style={{position: 'absolute', bottom: '0px', width: '100%'}}>
        <Nav.Item>
            <Nav.Link as={NavLink} exact to={ROUTES.LANDING} >Landing</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link as={NavLink} exact to={ROUTES.GALLERY}>Gallery</Nav.Link>
        </Nav.Item>
    </Nav>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.GALLERY} component={Gallery} />
        <Route exact path={ROUTES.CARDINFO} component={CardInfo} />

    </Router>

</div>

);

export default Navigation;


