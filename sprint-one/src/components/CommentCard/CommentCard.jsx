import dateConvertor from '../../utils'

import './CommentCard.scss'


//comment block constructor
const CommentCard = (props) => {
    return(
        <article className="comment__card">
            <img className="comment__avatar"alt="user avatar"/>
            <div className="comment__body">
                <p className="comment__user">
                    {props.commentData.name}
                </p>
                <p className="comment__date">
                    {dateConvertor(props.commentData.timestamp)}
                    
                </p>
                <p className="comment__text">
                    {props.commentData.comment}
                </p>
            </div>
        </article>
    )
}

export default CommentCard