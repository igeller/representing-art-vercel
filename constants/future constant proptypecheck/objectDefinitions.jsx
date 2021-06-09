import PropTypes from 'prop-types'

const maskSpecsObject = (props) =>({
	currentMaskID: props.cu,
	nextMaskID: props.nextMaskID,
	previousId: previous,
	modelViewerData: modelViewerData(glb, imgPlaceholder)
});
maskSpecsObject.propTypes={
	currentMaskID: PropTypes.number.isRequired,
	nextMaskID: PropTypes.number.isRequired,
	previousMaskID: PropTypes.number.isRequired,
	linkToMaskDetails: PropTypes.string.isRequired,
	maskName: PropTypes.string.isRequired,
	maskMedium: PropTypes.string.isRequired,
	maskDescription: PropTypes.string.isRequired,
	glb: PropTypes.string.isRequired,
	glbImgPlaceholder: PropTypes.string.isRequired,
	groupName: PropTypes.string.isRequired,
	groupLocation: PropTypes.string.isRequired,
	providedBy: PropTypes.string.isRequired,
	centerMapLong: PropTypes.string.isRequired,
	centerMapLat: PropTypes.string.isRequired,
	markerLong: PropTypes.string.isRequired,
	markerLat: PropTypes.string.isRequired,
	
	
	
}

const modelViewerData  = ({glb, imgPlaceholder}) =>({
	glb: glb,
	imgPlaceholder: imgPlaceholder
})
modelViewerData.propTypes={
	glb: PropTypes.string.isRequired,
	imgPlaceholder: PropTypes.string.isRequired
}
modelViewerData.defaultProps={
	glb: `https://github.com/igeller/assets/blob/main/finalmasks/babindjimask/GLBbabindjimask.glb?raw=true`,
	imgPlaceholder: `https://emuseum1.as.miami.edu/internal/media/dispatcher/423/preview`
}
export {maskSpecsObject, modelViewerData}
