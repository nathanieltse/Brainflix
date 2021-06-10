import './CommentCard.scss'

const CommentCard = () => {
    return(
        <article className="comment__card">
            <img className="comment__avatar"alt="user avatar"/>
            <div className="comment__body">
                <p className="comment__user">
                    1222
                </p>
                <p className="comment__date">
                    32222
                </p>
                <p className="comment__text">
                They BLEW the ROOF off at their
last show, once everyone started
figuring out they were going. This is
still simply the greatest opening of a
concert I have EVER witnessed.
                </p>
                
            </div>
        </article>
    )
}

export default CommentCard