import {CardGroup} from "react-bootstrap";
import MaskGalleryCards from "../../components/MaskGalleryCards/MaskGalleryCards";
import masks from "../../constants/mask_specs";



export default function index() {
    return (
        <div>

            <h1>RE-PRESENTING ART</h1>
            <CardGroup>
              <MaskGalleryCards maskOBJ={masks[0]}/>
              <MaskGalleryCards maskOBJ={masks[1]}/>
            </CardGroup>
        </div>
    )
}
