import MaskInfoView from "../../components/MaskInfoView/MaskInfoView";
import maskSpecs from "../../constants/mask_specs";


// const maskSpecs = "../../constants/mask_specs.jsx";
// const maskSpecs = "./../../constants/";

export default function mask1(props) {
    return (
        <div>
            {/*<MaskInfoView maskOBJ={maskSpecs[props.maskNumber]} maskNumber={props.maskNumber} maskSpecFile={maskSpecs}></MaskInfoView>*/}
            <MaskInfoView maskOBJ={maskSpecs[props.maskNumber]}></MaskInfoView>
        </div>

    )
}

mask1.getInitialProps = async function({query}) {
    const maskNumber = query.maskNumber

    return {
        maskNumber: query.maskNumber
    }
}
