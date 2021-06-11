import dateConvertor from '../../utils'

import ViewIcon from '../../assets/icons/Icon-views.svg'
import LikeIcon from '../../assets/icons/Icon-likes.svg'

import './VideoDetail.scss'


//video's info block
const VideoDetail = (props) =>{
    return (
        <section className="video-detail">
            <h1 className="video-detail__title">
                {props.videoData.title}
            </h1>
            <article className="video-detail__detail">
                <div className="video-detail__subtitle">
                    <h2 className="video-detail__creator">
                        By {props.videoData.channel}
                    </h2>
                    <p className="video-detail__date">
                        {dateConvertor(props.videoData.timestamp)}
                    </p>
                </div>
                <div className="video-detail__stats-wrapper">
                    <img className="video-detail__view-icon" src={ViewIcon} alt="view icon"/>
                    <p className="video-detail__view-num">
                        {props.videoData.views}
                    </p>
                    <img className="video-detail__like-icon" src={LikeIcon} alt="view icon"/>
                    <p className="video-detail__like-num">
                        {props.videoData.likes}
                    </p>
                </div>
            </article>
            <p className="video-detail__text">{props.videoData.description}</p>
        </section>
    )
}

export default VideoDetail