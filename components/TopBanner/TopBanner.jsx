import React from 'react';
import styles from './TopBanner.module.scss'
import PropTypes from "prop-types";


const TopBanner = (props) =>{
    return(
        <img className={`${styles.topbanner} ${props.className} d-flex`}/>
    )
}

TopBanner.propTypes = {
    className: PropTypes.string
};


export default TopBanner;


