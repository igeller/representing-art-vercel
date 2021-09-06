import React from "react";
import PropTypes from "prop-types";
import {Navbar} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from "next/link";
import {BsImages} from "react-icons/bs";
import {TiHome} from "react-icons/ti";
import styles from './TopMenu.module.scss'
const ReactFitText = require('react-fittext');

const TopMenu = (props) => {
    return(
        <>
            <Navbar variant={"dark"} expand={"3000px"} bg={"black"} className={'p-0 mt-4 mx-4'}>
                <div className={`d-flex flex-fill justify-content-start`}>
                    <Link href={`/`} className={`mx-0`}>
                        <div  className={`mx-0`}>
                            <TiHome  className={`vertical-align-inherit mr-2`}
                                     size={25}
                            />
                        </div>
                    </Link>
    
    
                    <div  className={`w-auto mx-0 flex-fill text-center`}>
                        <ReactFitText compressor={1.1} maxFontSize={20} minFontSize={18}>
                            <h1>
                                RePresenting ART
                            </h1>
                        </ReactFitText>
                    </div>
                </div>
                
                
    {/*<div className={`mr-0`}>*/}
    
    
    {/*</div>*/}
            
            </Navbar>

        </>

    )
}

TopMenu.propTypes = {
    backLink: PropTypes.string.isRequired
}

export default TopMenu;
