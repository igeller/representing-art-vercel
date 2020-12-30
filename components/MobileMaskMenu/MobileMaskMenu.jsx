import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import {ButtonGroup, Button} from "react-bootstrap";

const MobileMaskMenu = (props) => {
    // const [maskNum, setMaskNum] = useState(props.maskNum);

    const menustyle ={
        position: "absolute",
        bottom: "0px",
    };

    function goToPreviousMask(currentMask){
        // console.log("clicked previous!")
        return currentMask-1
    }
    function goToNextMask(currentMask){
        return currentMask+1
    }
    function getInfo(currentMask){
    }
    function openARView(currentMask){
        return currentMask-1
    }
    function openMapView(currentMask){
    }
    return(
        <div>
            {/*{console.log(maskNum)}*/}
            <ButtonGroup aria-label="" style={menustyle} >
                <Button onClick={goToPreviousMask} >Last Mask</Button>
                <Button variant="secondary">more info</Button>
                <Button variant="secondary">ar view</Button>
                <Button variant="secondary">map view</Button>
                <Button variant="secondary">next mask</Button>


            </ButtonGroup>
        </div>

    )
}

MobileMaskMenu.propTypes = {
    maskNum: PropTypes.number.isRequired
}

export default MobileMaskMenu;
