import React from "react";
import PropTypes from "prop-types";
import {Navbar} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from "next/link";
import {BsImages} from "react-icons/bs";
import { TiHome} from "react-icons/ti";

const ReactFitText = require('react-fittext');

const TopMenu = (props) => {
    return(
        <>
            <Navbar variant={"dark"} expand={"3000px"} bg={"black"} className={'d-flex justify-content-around p-0 mt-4 mx-4'}>
                <div className={`ml-0`}>
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

                </div>
    <div className={`mr-0`}>
        <Link href={`/mask_gallery`} className={`align-self-left mx-0 `}>
            <div  className={`mx-0`}>
                <ReactFitText compressor={1.1} maxFontSize={20} minFontSize={18}>
                    <h1>
                        <BsImages className={`vertical-align-inherit mr-2`} style={{
                            stroke: `white !important`,
                            fill: `white !important`,
                        }}
                                  fill={`white`}
                        />
                        Gallery
                    </h1>
                </ReactFitText>
            </div>
        </Link>

    </div>
            
            </Navbar>

        </>

    )
}

TopMenu.propTypes = {
    backLink: PropTypes.string.isRequired
}

export default TopMenu;
