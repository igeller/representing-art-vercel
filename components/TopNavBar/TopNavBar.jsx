import React from 'react';
import PropTypes from "prop-types";
import TopBanner from "../TopBanner/TopBanner";
import TopMenu from "../TopMenu/TopMenu";




const TopNavBar = (props) =>{
    return(
        <div className={`${props.className} d-block`} style={{zIndex: '1'}}>
            <TopMenu backLink={`${props.backLink}`}/>
            <TopBanner/>
        </div>
    )
};

TopNavBar.propTypes = {
    className: PropTypes.string,
    backLink: PropTypes.string.isRequired
};


export default TopNavBar;




