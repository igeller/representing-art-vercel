import React, {useEffect, useRef, useState} from 'react'
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";
import getRefPosition from "../../functions/functions";
import * as ReactIcons from 'react-icons/all.d.ts'
import styles from './SlideModal.module.scss'
const ReactFitText = require('react-fittext')


const  BottomNavigationButton =  (props) => {
	
	const node = useRef();
	
	// let sty = {
	// 	icn :
	// 		`*`:{
	// 			fill: `red !important`
	// 		}
	// 	}
	// }
	let CurrentIcon = null;
	
	if(props.icon != null && ReactIcons[props.icon] != null){
		CurrentIcon = ReactIcons[props.icon]
	}else {
		CurrentIcon = ReactIcons[`AiOutlineCloseSquare`]
	}
	
	//the below section deals with clicks outside modals
	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", handleClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);
	const handleClick = e => {
		if (!node.current.contains(e.target)) {
			setShowModal(false);
			// console.log(`outsiddeeee`);
			return;
		}
	};
	
	const [showModal, setShowModal] = useState(false);
	const [modalPosition, setModalPosition] = useState({top: `0`})
	
	
	let modalContent = null
	if(props.children != null){
		modalContent = props.children
	}else{
		modalContent = `working?`
		
	}
	
	
	return(<div className={`w-100 h-100`} >
			
			
			<Button
				variant="primary"
				onClick={() => {
					setModalPosition(getRefPosition(props.maskActionBarRef))
					setShowModal(!showModal)
				}}
				
				className={`p-2 w-100`}
				style={{
					backgroundColor: `${props.bgColor}`,
					border: `none`,
					borderRadius: `0px`,
					margin: `0px`
				}}>
				
				<CurrentIcon  style={ { color: `white !important`, stroke: `white !important`, fill: 'white' +
						' !important' }}/>
				
				
				<ReactFitText minFontSize={10}>
					<div className={`bg-transparent mt-1`}>
						{props.btnText}
					</div>
				</ReactFitText>
			</Button>
			
			
			
			
			{/*below is the modal*/}
			{/*{modalContent}*/}
			<div
				className={`w-100 p-3 ${styles.modalContent}`}
				ref={node}
				style={{
					position: `absolute`,
					display: `${showModal ? `block` :`none`}`,
					backgroundColor: `${props.bgColor}`,
					bottom: `${modalPosition.height + `px`}`,
					left: `${modalPosition.left + `px`}`,
				}}
				onClick={()=>{
					setShowModal(!showModal)
				}}
			>
				<div className={`p-3 h-100 text-left ${styles.modalContentText}`}>
					{modalContent}
				</div>
			</div>
		</div>
	
	)}
// )

SlideModal.propTypes ={
	btnText: PropTypes.string,
	txtColor: PropTypes.string,
	bgColor: PropTypes.string,
	maskActionBarRef: PropTypes.object.isRequired,
	icon: PropTypes.string
}

SlideModal.defaultProps = {
	btnText: `btn name`,
	txtColor: `white`,
	bgColor: `black`
}

export default SlideModal;
