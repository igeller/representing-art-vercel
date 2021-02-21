import React from 'react';
import styles from './BottomBanner.module.scss'
import PropTypes from "prop-types";


const BottomBanner = (props) =>{
    return(
        <img className={`${styles.bottombannerbg} ${props.className} d-block fixed-bottom`}/>
    )
}

BottomBanner.propTypes = {
    className: PropTypes.string
};


export default BottomBanner;


