import React, {useEffect, useState} from 'react';
import styles from './TopBanner.module.scss'
import PropTypes from "prop-types";
import {withResizeDetector} from 'react-resize-detector';
import {findDOMNode} from 'react-dom'

const TopBanner = (props) =>{
    return(
        <img className={`${styles.topbanner} ${props.className} d-inline`} id={`${props.id}`}  src={`https://igeller.github.io/assets/Assets/Kiosk/Banners/Africa-Kiosk-Banner-Bottom.png`} style={{backgroundColor: 'black'}}/>
    )
}

TopBanner.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    src: PropTypes.string
};


export default TopBanner;


