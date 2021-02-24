import React, {useEffect, useState} from 'react';
import styles from './TopBanner.module.scss'
import PropTypes from "prop-types";
import {withResizeDetector} from 'react-resize-detector';
import {findDOMNode} from 'react-dom'

const TopBanner = (props) =>{
    return(
        <picture className={`${styles.topbanner} ${props.className} d-inline`} id={`${props.id}`}  src={`${props.src}`} onLoad={console.log('banner loaded')}/>
    )
}

TopBanner.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    src: PropTypes.string.isRequired
};


export default TopBanner;


