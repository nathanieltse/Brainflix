import CommentCard from '../CommentCard/CommentCard'
import CommentForm from '../CommentForm/CommentForm'

import './Comment.scss'

const Comment = () => {
    const submitForm = (event) =>{
        event.preventDefault()
    }
    return (
        <>
            <h3 className="comment__title">3 Comments</h3>
            <CommentForm action={submitForm}/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </>
    )
}

export default Comment