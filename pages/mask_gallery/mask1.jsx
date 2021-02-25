import MaskInfoView from "../../components/MaskInfoView/MaskInfoView";
import maskSpecs from "../../constants/mask_specs";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import React, {useEffect, useState} from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import styles from "../../styles/Home.module.scss";

export default function mask1(props) {
    let [pos, setState] = useState({})
    let posT, posB= 0;

    useEffect(()=>{

        console.log('111111', document.readyState)

        if(document.readyState != "complete"){
            slow()
        }

        if(document.readyState == "complete") {
            posT = document.getElementById('t1').getBoundingClientRect().height
            posB = document.getElementById('b1').getBoundingClientRect().top
            console.log('###:T', posT, ' ####B: ', posB, posB-posT)
            let hei = posB-posT

            document.getElementById('bodyDiv').style.marginTop = `${posT}px`
            console.log('###:T', posT, ' ####B: ', posB, posB-posT)

            document.getElementById('bodyDiv').style.height = `${hei}px`
            console.log('******!!!! use effectcomplete', document.getElementById('bodyDiv').style.height)


        }


    }, [pos]);

    function slow(){
        const timer = setTimeout(() => {
            setState({pos: document.getElementById(`t1`).getBoundingClientRect()})
            setState({posB: document.getElementById('b1').getBoundingClientRect().top})

            console.log('This will run after 2 second!')
            return;

        }, 2000);
        return () => {
            clearTimeout(timer);
            pos = document.getElementById('t1').getBoundingClientRect()

        }
    }

    return (
        <>
            <TopNavBar className={'fixed-top'} backLink={'./'} id={'t1'}/>
            {/*${styles.bodyOvrflw} -- goes in maskinfoview className*/}

            <MaskInfoView maskOBJ={maskSpecs[props.maskNumber]} className={`pt-3 ${styles.bodyOvrflw}`} id={'bodyDiv'}/>
            {console.log('pb: ', posB)}
            <BottomNav
                className={'fixed-bottom pt-3'}
                nextMask={maskSpecs[props.maskNumber].next}
                previousMask={maskSpecs[props.maskNumber].previous}
                maskDetails={maskSpecs[props.maskNumber].details}
                id={'b1'}
            />
        </>


    )
}

mask1.getInitialProps = async function({query}) {
    let maskNum = query.maskNumber

return {
        maskNumber: maskNum
    }
}
