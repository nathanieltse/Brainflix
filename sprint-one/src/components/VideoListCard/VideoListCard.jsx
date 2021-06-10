import './VideoListCard.scss'

const VideoListCard = (props) =>{
    
    return (
        <article className="video-list-card">
            <img className="video-list-card__image" src="https://i.imgur.com/l2Xfgpl.jpg" alt="BMX Rampage: 2018 Highlights"/>
            <div className="video-list-card__text-wrapper">
                <p className="video-list-card__title">Become A Travel Pro In One Easy Lesson</p>
                <p className="video-list-card__creator">Red Cow</p>
            </div>
        </article>
    )
}

export default VideoListCard