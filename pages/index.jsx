import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import Link from 'next/link';
import TopBanner from "../components/TopNavDecorativeBanner/TopBanner";
import BottomBanner from "../components/BottomBanner/BottomBanner";
const ReactFitText = require('react-fittext');


let loweImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png';
let mellonImage = 'https://igeller.github.io/assets/Assets/Mobile/Logos/Africa-Mobile-Logo-Carnegie.png';


export default function Home() {
    let contentSectionTitleMaxFontSize = 40;
    let contentSectionBodyMaxFontSize = 13;
    
    return (
        
        
        <div className={`text-center h-100 gridHolder mx-auto`}>
            <TopBanner className={`topOfGrid mt-5 mb-1`} id={'t1'}/>

            
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
    
                
                    <div id={`homepgButtons`} className={`container`}>
                        <span className={`row row-cols-1 mx-0`}>
                             <Link href={`#about`}>
                                <Button className={`${styles.btn} text-wrap col-8 mb-3`}>
                                    <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.25}>
                                        <p className={`my-1`}>ABOUT</p>
                                    </ReactFitText>
                                </Button>
                            
                        </Link>
                        
                        <Link href={`#instructions`}>
                           
                            <Button className={`${styles.btn} text-wrap col-8 mb-3`}>
                                <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.25}>
                                    <p className={`my-1`}>INSTRUCTIONS</p>
                                </ReactFitText>
                            </Button>
                        </Link>
                        
                        <Link href={'mask_gallery/'}>
                            <Button className={`${styles.btn} text-wrap col-8 mb-3`}>
                                <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.25}>
                                    <p className={`my-1`}>GALLERY</p>
                                </ReactFitText>
                            </Button>
                        </Link>
                        </span>
                       
                       
                    
                    </div>

                    <BottomBanner className={`mt-1 mb-0`} id={'b1'}/>
                    
                    
                    
                    
                    <div id={`contentSections`}>
                        <div id={`about`} className={`text-left my-3 min-vh-100`}>
                            <div className={`mb-5`}>
                                <ReactFitText maxFontSize={contentSectionTitleMaxFontSize} compressor={1.25}>
                                    <h1 className={`px-5 mb-3`}> About </h1>
                                </ReactFitText>
                                <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
                                    <p className={`px-5`}>
                                        Masks are essential in African life and tradition. Masks and masked dances are integral to African ceremonies, namely, initiation rites such as the transition from childhood into adulthood on the one hand and the transition to the afterlife after death on the other or into membership in secret societies or age-grade organizations, for festivals, and sacred rituals for invocation of deities.  They also serve in many ceremonies honoring and propitiating the ancestors (those who had died after living lives worthy of emulation) during annual commemorations and, above all, helping ground societies in the mores and morals of their existence.
                                        <p className={`mb-2`}/>
                                        Many masks are made of wood, the typical material available in Western and Central Africa. However, other materials such as beads, leather, metal (such as copper or bronze) may also be used. Often shaped after a human or animal face – either in exactness or in highly abstract forms – the mask is usually worn as a head mask, or a facemask and one is believed to lose one’s or her identity and take on the form of the spirit represented by the mask.
                                        <p className={`mb-2`}/>
                                        African masks are functional.  They are made to be used in ceremonies rather than be kept on display.  This functionality underscores the use of everyday materials like wood so that masks can readily be replaced with new ones when they had served their purpose.  Masks are worn over the head completely, or over the wearer's face, or attached to a basket-like cap on the head.
                                    </p>
                                </ReactFitText>
                            </div>
                            
    <div>
        <ReactFitText maxFontSize={contentSectionTitleMaxFontSize} compressor={1.25}>
            <h1 className={`px-5 mb-3`}> Team </h1>
        </ReactFitText>
        <ReactFitText maxFontSize={15} compressor={1.25}>
            <h3 className={`px-5 bold`}> Faculty Pls</h3>
        </ReactFitText>
        <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
            <p className={`px-5 mb-3`}>Zevensuy Rodriguez</p>
        </ReactFitText>
    
        <ReactFitText maxFontSize={15} compressor={1.25}>
            <h3 className={`px-5 bold`}>UI/UX Design</h3>
        </ReactFitText>
        <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
            <p className={`px-5 mb-3`}>Lorena Lopez</p>
        </ReactFitText>
    
        <ReactFitText maxFontSize={15} compressor={1.25}>
            <h3 className={`px-5 bold`}>Development</h3>
        </ReactFitText>
        <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
            <p className={`px-5 mb-3`}>Isabelle Geller</p>
        </ReactFitText>
    
    
        <ReactFitText maxFontSize={15} compressor={1.25}>
            <h3 className={`px-5 bold`}>Educational Development</h3>
        </ReactFitText>
        <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
            <p className={`px-5 mb-3`}>loremipsum</p>
        </ReactFitText>
    
    
        <ReactFitText maxFontSize={15} compressor={1.25}>
            <h3 className={`px-5 bold`}>Lowe Art Museum</h3>
        </ReactFitText>
        <ReactFitText maxFontSize={contentSectionBodyMaxFontSize} compressor={1.25}>
            <p className={`px-5`}>
                Eugenia Incer, Associate Directory of Collections and Exhibitions
                <p/>
                Christina Larson, Mellon Academic Fellow
                <p/>
                Ebonie Pollock, Curatorial Assistant
                <p/>
                Mark Osterman, Digital Experience Manager and Head of Education
            </p>
        </ReactFitText>
    </div>
                        
                            
                        </div>
                        <BottomBanner className={`mt-1 mb-0`} id={'b1'}/>
                        
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
