import { type } from "os";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

type BTNprops = {
    ValueBtn: String,
    ClickBtn: any
}
export default function Button(props: BTNprops) {
    return (
        <button className="btn btn-danger mt-5 mx-5 " onClick={props.ClickBtn}>{props.ValueBtn}</button>
    )

}

