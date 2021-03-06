import React from "react";
// import '@google/model-viewer';

import {Card, CardGroup, Container, Col, Row} from "react-bootstrap";
// import * as ROUTES from "../../../src/constants/routes";
import Button from "react-bootstrap/Button";
// import {Route, Link} from "react-router-dom";
import CardInfo from "../CardInfo";
import Link from 'next/link';

const Gallery= () =>  {
    return (
        <Container>
            <Row>
                <Col md>
                    {/*<Link to={'CardInfo'}>*/}
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>SculptureName</Card.Title>
                                <Card.Text>
                                    Quick Sculpture Info
                                </Card.Text>
                            </Card.Body>
                            <Link href="/testing">
                                <Button variant={'primary'} >ENTER GALLERY</Button>

                            </Link>

                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    {/*</Link>*/}

                </Col>


            </Row>

        </Container>
    );
}

export default Gallery;
