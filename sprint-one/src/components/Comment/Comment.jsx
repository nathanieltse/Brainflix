import CommentCard from '../CommentCard/CommentCard'
import CommentForm from '../CommentForm/CommentForm'

import './Comment.scss'


//comment area UI
const Comment = (props) => {
    const submitForm = (event) =>{
        event.preventDefault()
    }
    return (
        <section className="comment">
            <h3 className="comment__title">3 Comments</h3>
            <CommentForm action={submitForm}/>

            {props.videoData.comments.map(comment => {
                return <CommentCard key={comment.id} commentData={comment} />
            })}
            
        </section>
    )
}

export default Comment