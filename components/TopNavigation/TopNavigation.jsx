import React from 'react';
import PropTypes from "prop-types";
import TopBanner from "../TopNavDecorativeBanner/TopBanner";
import TopNavItems from "../TopNavItems/TopNavItems";


const TopNavigation = (props) =>{
    return(
        <div className={`${props.className} d-block`} id={`${props.id}`}>
            <TopNavItems backLink={`${props.backLink}`} navVersion={`${props.navVersion}`}/>
            <TopBanner/>
        </div>
    )
};

TopNavigation.propTypes = {
    className: PropTypes.string,
    backLink: PropTypes.string.isRequired,
    id: PropTypes.string,
    navVersion: PropTypes.oneOf([`homeGal`, `detail`]).isRequired
};

TopNavigation.defaultProps ={
    navVersion: `homeGal`
}

export default TopNavigation;




