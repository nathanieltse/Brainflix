import dateConvertor from '../../utils'

import ViewIcon from '../../assets/icons/Icon-views.svg'
import LikeIcon from '../../assets/icons/Icon-likes.svg'

import './VideoDetail.scss'


//video's info block
const VideoDetail = (props) =>{
    return (
        <section className="video-detail">
            <h1 className="video-detail__title">
                {props.selected.title}
            </h1>
            <article className="video-detail__detail">
                <div className="video-detail__subtitle">
                    <h2 className="video-detail__creator">
                        By {props.selected.channel}
                    </h2>
                    <p className="video-detail__date">
                        {dateConvertor(props.selected.timestamp)}
                    </p>
                </div>
                <div className="video-detail__stats-wrapper">
                    <img className="video-detail__view-icon" src={ViewIcon} alt="view icon"/>
                    <p className="video-detail__view-num">
                        {props.selected.views}
                    </p>
                    <img className="video-detail__like-icon" src={LikeIcon} alt="view icon"/>
                    <p className="video-detail__like-num">
                        {props.selected.likes}
                    </p>
                </div>
            </article>
            <p className="video-detail__text">{props.selected.description}</p>
        </section>
    )
}

export default VideoDetail