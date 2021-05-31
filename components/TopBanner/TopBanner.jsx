import React from 'react';
import styles from './TopBanner.module.scss'
import PropTypes from "prop-types";

const TopBanner = (props) =>{

    return(
        <img className={`${styles.topbanner} ${props.className}`} id={`${props.id}`}  src={`https://igeller.github.io/assets/Assets/Kiosk/Banners/Africa-Kiosk-Banner-Bottom.png`} style={{backgroundColor: 'black'}}/>
    )
}

TopBanner.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    src: PropTypes.string
};


export default TopBanner;


