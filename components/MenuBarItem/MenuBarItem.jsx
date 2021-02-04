import React from "react";
import PropTypes from "prop-types";
import {Accordion, Card} from "react-bootstrap";


const MenuBarItem = (props) => {
    return(
        <>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
                    {props.details.menuTitle}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.eventKey}>
                    <Card.Body>{props.details.menuDetails}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
};

MenuBarItem.propTypes = {
    eventKey: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired
}


export default MenuBarItem;
