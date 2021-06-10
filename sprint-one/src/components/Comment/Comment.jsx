import CommentCard from '../CommentCard/CommentCard'
import CommentForm from '../CommentForm/CommentForm'

import './Comment.scss'

const Comment = () => {
    const submitForm = (event) =>{
        event.preventDefault()
    }
    return (
        <section className="comment">
            <h3 className="comment__title">3 Comments</h3>
            <CommentForm action={submitForm}/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </section>
    )
}

export default Comment