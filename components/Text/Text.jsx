import React from 'react'
import PropTypes, {object, string} from 'prop-types'
const ReactFitText = require('react-fittext');

//uses react fittext to automatically esnure text is sizedd properly
//used for html tags that contain text including lists, links, and nav
//not for media tags

const validTags = [`a`,
		`abbr`,
		`acronym`,
		`address`,
		`applet`,
		`area`,
		`article`,
		`aside`,
		`audio`,
		`b`,
		`base`,
		`basefont`,
		`bdi`,
		`bdo`,
		`bgsound`,
		`big`,
		`blink`,
		`blockquote`,
		`body`,
		`br`,
		`button`,
		`canvas`,
		`caption`,
		`center`,
		`cite`,
		`code`,
		`col`,
		`colgroup`,
		`content`,
		`data`,
		`datalist`,
		`dd`,
		`decorator`,
		`del`,
		`details`,
		`dfn`,
		`dir`,
		`div`,
		`dl`,
		`dt`,
		`element`,
		`em`,
		`embed`,
		`fieldset`,
		`figcaption`,
		`figure`,
		`font`,
		`footer`,
		`form`,
		`frame`,
		`frameset`,
		`h1`,
		`h2`,
		`h3`,
		`h4`,
		`h5`,
		`h6`,
		`head`,
		`header`,
		`hgroup`,
		`hr`,
		`html`,
		`i`,
		`iframe`,
		`img`,
		`input`,
		`ins`,
		`isindex`,
		`kbd`,
		`keygen`,
		`label`,
		`legend`,
		`li`,
		`link`,
		`listing`,
		`main`,
		`map`,
		`mark`,
		`marquee`,
		`menu`,
		`menuitem`,
		`meta`,
		`meter`,
		`nav`,
		`nobr`,
		`noframes`,
		`noscript`,
		`object`,
		`ol`,
		`optgroup`,
		`option`,
		`output`,
		`p`,
		`param`,
		`plaintext`,
		`pre`,
		`progress`,
		`q`,
		`rp`,
		`rt`,
		`ruby`,
		`s`,
		`samp`,
		`script`,
		`section`,
		`select`,
		`shadow`,
		`small`,
		`source`,
		`spacer`,
		`span`,
		`strike`,
		`strong`,
		`style`,
		`sub`,
		`summary`,
		`sup`,
		`table`,
		`tbody`,
		`td`,
		`template`,
		`textarea`,
		`tfoot`,
		`th`,
		`thead`,
		`time`,
		`title`,
		`tr`,
		`track`,
		`tt`,
		`u`,
		`ul`,
		`var`,
		`video`,
		`wbr`,
		`xmp`
]
const Text = (props) =>{
	let Tag = `${props.tag}`
	//check valid
	if(validTags.indexOf(props.tag) != -1){
		return(
			<ReactFitText maxFontSize={props.maxFontSize} minFontSize={props.minFontSize} compressor={props.compressor}>
				<Tag className={`${props.className}`} id={`${props.id}`} style={`${props.style}`}>
					{props.txt}
				</Tag>
			</ReactFitText>
		)
	}else{
		{props.children}
	}
	
}


Text.propTypes ={
	tag: PropTypes.oneOf(validTags),
	txt: PropTypes.oneOfType([string, object]),
	maxFontSize: PropTypes.string,
	minFontSize: PropTypes.string,
	compressor: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	style: PropTypes.object, //style applies to the tag within the fit text,
	children,
}

export default Text

