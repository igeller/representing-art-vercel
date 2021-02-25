import React, {useState, useEffect, useContext} from 'react';
import PropTypes from "prop-types";
import TopBanner from "../TopBanner/TopBanner";
import TopMenu from "../TopMenu/TopMenu";




const TopNavBar = (props) =>{
    return(
        <div className={`${props.className} d-block`} style={{zIndex: '1'}} id={`${props.id}`}>
            <TopMenu backLink={`${props.backLink}`}/>
            <TopBanner/>
        </div>
    )
};

TopNavBar.propTypes = {
    className: PropTypes.string,
    backLink: PropTypes.string.isRequired,
    id: PropTypes.string
};


export default TopNavBar;




