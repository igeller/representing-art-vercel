import React from "react";
import * as ReactDOM from 'react-dom';

 function getRefPosition (ref)  {
	if(ref != null && ReactDOM.findDOMNode(ref.current) != null) {
		console.log(ReactDOM.findDOMNode(ref.current).getBoundingClientRect())
		return(ReactDOM.findDOMNode(ref.current).getBoundingClientRect())
	}
	
}

export default getRefPosition;
