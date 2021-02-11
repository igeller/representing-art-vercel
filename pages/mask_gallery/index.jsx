import {CardGroup, CardDeck, CardColumns} from "react-bootstrap";
import MaskGalleryCards from "../../components/MaskGalleryCards/MaskGalleryCards";
import masks from "../../constants/mask_specs";
import MenuBar from '../../components/MenuBar/MenuBar'

export default function index() {
    return (
        <div className={'mx-4'}>
            <MenuBar backLink={'/'}/>
            <h1>RE-PRESENTING ART</h1>
            <CardGroup className={"row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6"}>
                <MaskGalleryCards maskOBJ={masks[0]}/>
                <MaskGalleryCards maskOBJ={masks[1]}/>
                <MaskGalleryCards maskOBJ={masks[1]}/>
                <MaskGalleryCards maskOBJ={masks[0]}/>
                <MaskGalleryCards maskOBJ={masks[1]}/>
                <MaskGalleryCards maskOBJ={masks[1]}/>
                {/*<MaskGalleryCards maskOBJ={masks[0]}/>*/}
                {/*<MaskGalleryCards maskOBJ={masks[1]}/>*/}
                {/*<MaskGalleryCards maskOBJ={masks[1]}/>*/}
            </CardGroup>
        </div>
    )
}
