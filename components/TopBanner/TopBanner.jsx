import React from 'react';
import styles from './TopBanner.module.scss'
import PropTypes from "prop-types";


const TopBanner = (props) =>{
    return(
        <img className={`${styles.topbannerbg} ${props.className}`} src={"https://github.com/igeller/assets/blob/main/Assets/Mobile/Banners/Africa-Mobile-Banner-Top.png?raw=true"}></img>
    )
};

TopBanner.propTypes = {
    className: PropTypes.string
};


export default TopBanner;


