import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import Link from 'next/link';
import TopBanner from "../components/TopBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
const ReactFitText = require('react-fittext');


let loweImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png';
let mellonImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Carnegie.png';


export default function Home() {
    let contentSectionTitleMaxFontSize = 20;
    let contentSectionBodyMaxFontSize = 12;
    
    return (
        
        
        <div className={`text-center h-100 gridHolder mx-auto`}>
            <TopBanner className={`topOfGrid mt-5 mb-1`} id={'t1'}/>
            
            {/*add normal space above top banner
                - move the lowe and mellon images inline below banner
                - add that weird mask image
                - make buttons uniform size and squared
            */}
            
            
            <div className={`middleOfGrid h-100 align-self-center`} id={'bodyDiv'}>
                {/*<div id={`section1`} className={`${styles*/}
                {/*    .section1}`}>*/}
                <div className={`${styles.grd} `}>
                    <div id={`organizationImgs`} className={`${styles.organizationImgs} mw-100 mx-5 mt-3`}>
                        <img className={`${styles.img}`} src={`${loweImage}`}/>
                        <img className={`${styles.img}`} src={`${mellonImage}`}/>
                    </div>
                    
                    <div id={`titleSection`} className={`${styles.titleSection} mt-2`}>
                        <img src={"https://igeller.github.io/assets/NewAssetss/Homepage/represent-home-mask.png"}/>
                        <ReactFitText minFontSize={25} compressor={1.25}>
                            <h1 className={`${styles.centerText}`}>
                                RePresenting ART
                            </h1>
                        </ReactFitText>
                    </div>
                    
                    <p className={'mx-auto my-3 font-italic'}>
                        An augmented reality view into the<br/>
                        Lowe Art of Africa Gallery Collections
                    </p>
                    
                    <div id={`homepgButtons`} className={`${styles.homepageButtons} mx-5 mb-3`}>
                        
                        
                        <Link href={`#about`}>
                            <Button className={`${styles.btn}  text-wrap btn-lg w-100`}>
                                <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.25}>
                                    <p className={`my-1`}>ABOUT</p>
                                </ReactFitText>
                            </Button>
                        </Link>
                        
                        <Link href={`#instructions`}>
                            <Button className={`${styles.btn}  text-wrap btn-lg w-100`}>
                                <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.25}>
                                    <p className={`my-1`}>INSTRUCTIONS</p>
                                </ReactFitText>
                            </Button>
                        </Link>
                        
                        <Link href={'mask_gallery/'}>
                            <Button className={`${styles.btn}  text-wrap btn-lg w-100`}>
                                <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.25}>
                                    <p className={`my-1`}>GALLERY</p>
                                </ReactFitText>
                            </Button>
                        </Link>
                    
                    </div>

                    <BottomBanner className={` mt-1 mb-0`} id={'b1'}/>
                    {/*</div>*/}
                    
                    
                    
                    
                    <div id={`contentSections`}>
                        <div id={`about`} className={`text-left my-3 min-vh-100`}>
                            <ReactFitText maxFontSize={contentSectionTitleMaxFontSize} compressor={1.25}>
                                <h1 className={`px-5`}> About </h1>
                            </ReactFitText>
                            <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
                                <p className={`px-5`}> Lorem ipsume asdfjhaskdfhasodfha</p>
                            </ReactFitText>
    
                            <ReactFitText maxFontSize={contentSectionTitleMaxFontSize} compressor={1.25}>
                                <h1 className={`px-5`}> Team </h1>
                            </ReactFitText>
                            <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
                                <p className={`px-5`}> Lorem ipsume asdfjhaskdfhasodfha</p>
                            </ReactFitText>
                            
                        </div>
                        <BottomBanner className={`bottomOfGrid mt-1 mb-0`} id={'b1'}/>
                        
                        <div id={`instructions`} className={`text-left mb-5 min-vh-100`}>
                            <ReactFitText maxFontSize={contentSectionTitleMaxFontSize} compressor={1.25}>
                                <h1 className={`px-5`}> Instructions </h1>
                            </ReactFitText>
                            <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
                                <p className={`px-5`}> Lorem ipsume asdfjhaskdfhasodfha</p>
                            </ReactFitText>
                        </div>
                       
                        
                    </div>
                    </div>
                    
            
            
            </div>
            {/*<BottomBanner className={`bottomOfGrid mt-1 mb-0`} id={'b1'}/>*/}
        </div>
    
    
    
    
    
    )
}
