import React from 'react';
import styles from './BottomBanner.module.scss'
import PropTypes from "prop-types";


const BottomBanner = (props) =>{
    return(
        <img className={`${styles.bottombannerbg} ${props.className} d-block fixed-bottom`} src={"https://github.com/igeller/assets/blob/main/Assets/Mobile/Banners/Africa-Mobile-Banner-Bottom.png?raw=true"}></img>
    )
}

BottomBanner.propTypes = {
    className: PropTypes.string
};


export default BottomBanner;


