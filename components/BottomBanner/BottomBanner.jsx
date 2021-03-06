import React from 'react';
import styles from './BottomBanner.module.scss'
import PropTypes from "prop-types";


const BottomBanner = (props) =>{
    return(
        <img className={`${styles.bottombannerbg} ${props.className}`} id={`${props.id}`} />
    )
};

BottomBanner.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};


export default BottomBanner;


