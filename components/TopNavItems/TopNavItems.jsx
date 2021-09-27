import React from "react";
import PropTypes from "prop-types";
import {Navbar} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from "next/link";
import {BsImages} from "react-icons/bs";
import {TiHome} from "react-icons/ti";
import styles from './TopNavItems.module.scss'
const ReactFitText = require('react-fittext');

let galIcon = true;

const TopNavItems = (props) => {
    if(props.navVersion === "homeGal"){
        galIcon = true
    }else{
        galIcon = false
    }
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
    
    
                    <div hidden={galIcon}>
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
                    



                </div>
            </Navbar>

        </>

    )
}

TopNavItems.propTypes = {
    backLink: PropTypes.string.isRequired,
    navVersion: PropTypes.oneOf([`homeGal`, `detail`]).isRequired
}

TopNavItems.defaultProps={
    navVersion: `homeGal`
}
export default TopNavItems;
