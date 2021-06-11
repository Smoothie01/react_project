import css from './Comment.module.css'

const Comment = (props) => {
    return (
        <div className={css.comment}>
            <div className={css.avatar}>
                <img src={props.image} alt="avatar"/>
            </div>
            <div className={css.text}>
                {props.text}
            </div>
            <div className={css.text}>
                Likes:
                {props.likesCount}
            </div>
        </div>
    )
}

export default Comment
