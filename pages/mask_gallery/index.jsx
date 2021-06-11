import {CardGroup} from "react-bootstrap";
import MaskGalleryCards from "../../components/MaskGalleryCards/MaskGalleryCards";
import masks from "../../constants/mask_specs";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
const ReactFitText = require('react-fittext');


export default function index() {

    return (
        <div className={`gridHolder`}>
            <TopNavBar backLink={'/'} className={`topOfGrid mb-1`} id={'t1'}/>
            <div className={`middleOfGrid align-self-start my-0`} id={'bodyDiv'} >
                <ReactFitText  maxFontSize={30} minFontSize={30}>
                    <h1 className={'mx-5 mb-3'}>RE-PRESENTING ART</h1>
                </ReactFitText>
                <CardGroup className={`mx-auto row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 `}>
                    <MaskGalleryCards maskOBJ={masks[0]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[2]}/>
                    <MaskGalleryCards maskOBJ={masks[3]}/>
                    <MaskGalleryCards maskOBJ={masks[4]}/>
                    <MaskGalleryCards maskOBJ={masks[5]}/>
                    <MaskGalleryCards maskOBJ={masks[6]}/>
                    <MaskGalleryCards maskOBJ={masks[7]}/>

                </CardGroup>
            </div>
            <BottomBanner className={`bottomOfGrid mt-1`} id={`b1`}/>
        </div>
    )
}
