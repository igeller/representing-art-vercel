import React from "react";
import PropTypes from "prop-types";
import {Navbar} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from "next/link";
import {TiHome} from "react-icons/ti"

const ReactFitText = require('react-fittext');

const TopMenu = (props) => {
    return(
        <>
            <Navbar variant={"dark"} expand={"3000px"} bg={"black"} className={'d-flex justify-content-around p-0 mt-4 mx-4'}>
                <Link href={`/`} className={`align-self-left mx-0 `}>
                    <div  className={`mx-0`}>
                        <ReactFitText compressor={1.1} maxFontSize={20} minFontSize={18}>
                            <h1>
                                <TiHome  className={`vertical-align-inherit mr-2`}/>
                                Representing Art
                            </h1>
                        </ReactFitText>
                    </div>
                    
    
                </Link>
                <img className={'loweLogo w-25 mx-auto my-auto d-block'}/>
                {/*<Navbar.Toggle*/}
                {/*    aria-controls="basic-navbar-nav"*/}
                {/*    className={`${styles.menustyle} ${styles.toggle} p-0 mx-0 border-0 `}*/}
                {/*/>*/}
                {/*<Navbar.Collapse id="basic-navbar-nav" className={`text-right`}>*/}
                {/*    <Nav id={`${styles.hamburgerOpenMenu}`} className={`w-100 mx-auto mt-2 pb-2`}  style={{zIndex: 999}}>*/}
                {/*        <Accordion bg={"black"} className={'d-flex flex-column mx-0 my-0'}>*/}
                {/*            <MenuItem*/}
                {/*                eventKey={"0"}*/}
                {/*                details={menuInfo[0]}*/}
                {/*                itemBackground={"#DA5527"}/>*/}
                {/*            <MenuItem*/}
                {/*                eventKey={"1"}*/}
                {/*                details={menuInfo[1]}*/}
                {/*                itemBackground={"#F37424"}/>*/}
                {/*            <MenuItem*/}
                {/*                eventKey={"2"}*/}
                {/*                details={menuInfo[2]}*/}
                {/*                itemBackground={"#0C5230"}/>*/}
                {/*            <MenuItem*/}
                {/*                eventKey={"3"}*/}
                {/*                details={menuInfo[3]}*/}
                {/*                itemBackground={"#A3D7F4"}/>*/}
                {/*            <MenuItem*/}
                {/*                eventKey={"4"}*/}
                {/*                details={menuInfo[4]}*/}
                {/*                itemBackground={"#C0CB2F"}/>*/}
                {/*            <MenuItem*/}
                {/*                eventKey={"5"}*/}
                {/*                details={menuInfo[4]}*/}
                {/*                itemBackground={"#FEE49C"}/>*/}
                {/*        </Accordion>*/}
                
                {/*    </Nav>*/}
                
                {/*</Navbar.Collapse>*/}
            </Navbar>

        </>

    )
}

TopMenu.propTypes = {
    backLink: PropTypes.string.isRequired
}

export default TopMenu;
