import MaskInfoView from "../../components/MaskInfoView/MaskInfoView";


export default function mask1(props) {
    return (
        <div>
            <MaskInfoView queryParam={props.name}></MaskInfoView>
        </div>

    )
}

mask1.getInitialProps = async function({query}) {
    const name = query.name

    return {
        name: name
    }
}
