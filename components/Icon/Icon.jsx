import React from 'react'
import PropTypes, {object, string} from 'prop-types'
// const ReactFitText = require('react-fittext');
// import {props.iconName} from 'react-icons/all.d.ts'
//uses react fittext to automatically esnure text is sizedd properly
//used for html tags that contain text including lists, links, and nav
//not for media tags
// import {ic} from "react-icons/all/beer"


const Icon = (props) =>{
	const iconLibrary = require(`react-icons/all/Fa`)
	let iconName = `${props.iconName}`
	let SvgIcon = `${iconLibrary.iconName}`
	
	return(
		<SvgIcon />
	)
	
	
}


Icon.propTypes ={
	iconName: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
	style: PropTypes.object, //style applies to the tag within the fit text,
}

export default Icon;

