import React from "react";
import PropTypes from "prop-types";
import {Button, Navbar, Nav, Accordion, Card} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './MenuBar.module.scss'
import menuInfo from "../../constants/menu_info";
import MenuItem from "../MenuBarItem/MenuBarItem";
import Link from "next/link";


const MenuBar = (props) => {
    return(
        <>
            <Navbar expand={"3000px"} >
                <Link href={props.backLink} >
                    <Button variant={'primary'}>BACK</Button>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.menustyle}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`mr-auto ${styles.menustyle} w-100`}>
                        <Accordion>
                            <MenuItem eventKey={"0"} details={menuInfo[0]}/>
                            <MenuItem eventKey={"1"} details={menuInfo[1]}/>
                            <MenuItem eventKey={"2"} details={menuInfo[2]}/>
                            <MenuItem eventKey={"3"} details={menuInfo[3]}/>
                            <MenuItem eventKey={"4"} details={menuInfo[4]}/>
                        </Accordion>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>

    )
}

MenuBar.propTypes = {
    backLink: PropTypes.string.isRequired
}

export default MenuBar;
