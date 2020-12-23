import CardInfo from "../../components/CardInfo.jsx";
import {CardGroup} from "react-bootstrap";
import MaskGalleryCards from "../../components/MaskGalleryCards/MaskGalleryCards";
import masks from "../../constants/mask_specs";

export default function index() {
    return (
        <div>
            <h1>RE-PRESENTING ART</h1>
            <CardGroup>
              <MaskGalleryCards
                  imagePosition={masks[0].card.imagePositon}
                  imageSrc={masks[0].card.imageSrc}
                  linkToMaskDetails={masks[0].card.linkToMaskDetails}
                  maskNum={masks[0].number}
              />
                <MaskGalleryCards
                    imagePosition={masks[0].card.imagePositon}
                    imageSrc={masks[0].card.imageSrc}
                    linkToMaskDetails={masks[0].card.linkToMaskDetails}
                    maskNum={masks[0].number}

                />
            </CardGroup>
        </div>
    )
}