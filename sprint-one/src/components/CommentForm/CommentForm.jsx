import profileImage from '../../assets/images/Mohan-muruge.jpg'

import './CommentForm.scss'


//comment form 
const CommentForm = (props) => {
    return (
        <form className="comment-form" onSubmit={props.action}>
            <div className="comment-form__avatar-wrapper">
                <img className="comment-form__avatar" src={profileImage} alt="Mogan muruge"/>
            </div>
            <div className="comment-form__body">
                <label className="comment-form__text" htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea row="3" className="comment-form__input" name="comment" placeholder="Write comment here"/>
                <button className="comment-form__submit">COMMENT</button>
            </div>
        </form>
    )
}

export default CommentForm
