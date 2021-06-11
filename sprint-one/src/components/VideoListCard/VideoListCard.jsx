import './VideoListCard.scss'


//video listing constructor
const VideoListCard = (props) =>{
    
    return (
        <article className="video-list-card" onClick={props.onClick}>
            <img className="video-list-card__image" src={props.videoData.image} alt={props.videoData.title}/>
            <div className="video-list-card__text-wrapper">
                <p className="video-list-card__title">
                    {props.videoData.title}
                </p>
                <p className="video-list-card__creator">
                    {props.videoData.channel}
                </p>
            </div>
        </article>
    )
}

export default VideoListCard