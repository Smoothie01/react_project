import css from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/feed/" + props.id
    return (
        <div className={css.item}>
            <NavLink to={path}>{props.name}</NavLink>
            <hr/>
        </div>
    )
}

export default Dialog
