import css from './Comments.module.css'
import Comment from './Comment/Comment'

const Comments = () => {
    let commentData = [
        {image:"https://via.placeholder.com/45/",text:"Hello, python!",likesCount:"5"},
        {image:"https://via.placeholder.com/45/",text:"Nice work",likesCount:"10"},
        {image:"https://via.placeholder.com/45/",text:"We love you",likesCount:"155"}
    ],
        commentElements= commentData.map(comment=><Comment image = {comment.image} text = {comment.text}  likesCount={comment.likesCount}/>);

    return (
            <div className={css.comments}>
                <h4 className="title">Комменты</h4>
                <div className={css.content}>
                    <textarea name="comment" cols="30" rows="10"></textarea>
                    <input type="button" value="add"/>
                    <div className={css.comment}>
                        { commentElements }
                    </div>

                </div>
            </div>
    )
}

export default Comments
