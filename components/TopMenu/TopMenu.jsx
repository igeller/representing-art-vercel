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
            <Navbar variant={"dark"} expand={"3000px"} bg={"black"} className={'d-flex justify-content-around p-0 mt-4 mx-4'}>
                <div className={`ml-0 ${styles.navGrid}`}>
                    <Link href={`/`} className={`float-left mx-0 `}>
                        <div  className={`mx-0`}>
                            <TiHome  className={`vertical-align-inherit mr-2`}/>
                        
                        </div>
                    </Link>
    
    
                    <div  className={`mx-0`}>
                        <ReactFitText compressor={1.1} maxFontSize={20} minFontSize={18}>
                            <h1>
                                RePresenting ART
                            </h1>
                        </ReactFitText>
                    </div>
    
    
                    <Link href={`/mask_gallery`} className={`align-self-left mx-0 `}>
                        <div  className={`justify-content-end`}>
                            <BsImages className={`vertical-align-inherit mr-2`} style={{
                                stroke: `white !important`,
                                fill: `white !important`,
                            }}
                                      fill={`white`}
                            />
                        </div>
                    </Link>

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
