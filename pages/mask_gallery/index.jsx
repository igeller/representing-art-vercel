import {CardGroup, CardDeck, CardColumns} from "react-bootstrap";
import MaskGalleryCards from "../../components/MaskGalleryCards/MaskGalleryCards";
import masks from "../../constants/mask_specs";
import TopMenu from '../../components/TopMenu/TopMenu'
import {Textfit} from 'react-textfit';
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import BottomBanner from "../../components/BottomBanner/BottomBanner";

export default function index() {
    return (
        <div className={'mx-4 my-5 pt-5 d-flex '}>
            <TopNavBar backLink={'/'} className={'fixed-top'}/>
            <div className={`mt-2`}>
                <Textfit
                    mode={`single`}
                    className={'mx-5 mb-3'}>
                    <div>RE-PRESENTING ART</div>
                </Textfit>
                <CardGroup className={"row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 overflow-auto"}>
                    <MaskGalleryCards maskOBJ={masks[0]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[0]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>
                    <MaskGalleryCards maskOBJ={masks[1]}/>

                </CardGroup>
            </div>
            <BottomBanner/>
        </div>
    )
}
