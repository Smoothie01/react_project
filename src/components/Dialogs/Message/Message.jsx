import css from "../Dialogs.module.css"

const Message = (props) => {
    let text = props.text,
        empty = "",
        person = !props.me?css.me:css.companion,
        meAvatar= props.me?<div className={css.avatar}><img src="https://via.placeholder.com/45" alt=""/></div>:empty,
        companionAvatar= !props.me?<div className={css.avatar}><img src="https://via.placeholder.com/45" alt=""/></div>:empty

    return (
        <div className={`${css.message} ${person}`}>
            {meAvatar}
            <div className={css.text}>
                {text}
            </div>
            {companionAvatar}
        </div>
    )
}

export default Message;
