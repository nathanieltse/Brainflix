import CommentCard from './CommentCard/CommentCard'

import profileImage from '../../../assets/images/Mohan-muruge.jpg'

import './Comment.scss'

const Comment = () => {
    return (
        <>
            <h3 className="comment__title">3 Comments</h3>
            <form className="comment-form">
                <div className="comment-form__avatar-wrapper">
                    <img className="comment-form__avatar" src={profileImage} alt="Mogan muruge"/>
                </div>
                <div className="comment-form__body">
                    <label className="comment-form__text" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <textarea row="3" class="comment-form__input" name="comment" placeholder="Write comment here"/>
                    <button class="comment-form__submit">COMMENT</button>
                </div>
            </form>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </>
    )
}

export default Comment