import React from "react";
import PropTypes from "prop-types";
import {Accordion, Card} from "react-bootstrap";
import {Textfit} from 'react-textfit';
import styles from './TopMenuItem.module.scss'

const TopMenuItem = (props) => {
    return(
        <>
            {/*create a style constant for the background and border colors
            also figure our how to pass a value to css*/}
            <Card
                style={{backgroundColor: `${props.itemBackground}`, borderColor: `${props.itemBackground}`}}
                className={'text-left py-3 mb-2 mx-0 w-100 rounded-0'}
            >
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey={props.eventKey}
                    className={'d-flex border-0'}
                    style={{backgroundColor: `${props.itemBackground}`}}>

                    <Textfit
                        mode={'multi'}
                        className={`${styles.topMenuItemTitle} font-weight-bold pl-3`}
                        // style={{fontWeight: 'bold', backgroundColor: `${props.itemBackground}`}}>
                        >
                        <div style={{backgroundColor: `${props.itemBackground}`}}>
                            {props.details.menuTitle}
                        </div>
                    </Textfit>
                </Accordion.Toggle>

                <Accordion.Collapse
                    eventKey={props.eventKey}
                    // style={{backgroundColor: `${props.itemBackground}`, borderColor: `${props.itemBackground}`}}>
>
                    <Card.Body
                        className={'w-100 text-left'}
                        style={{backgroundColor: `${props.itemBackground}`, borderColor: 'none'}}>
                        {props.details.menuDetails}
                    </Card.Body>

                </Accordion.Collapse>
            </Card>
        </>
    )
};

TopMenuItem.propTypes = {
    eventKey: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    itemBackground: PropTypes.string.isRequired,
    className: PropTypes.string
}


export default TopMenuItem;
