import ViewIcon from '../../assets/icons/Icon-views.svg'
import LikeIcon from '../../assets/icons/Icon-likes.svg'

import './VideoDetail.scss'

const VideoDetail = () =>{
    return (
        <section className="video-detail">
            <h1 className="video-detail__title">BMX Rampage: 2018 Highlights</h1>
            <article className="video-detail__detail">
                <div className="video-detail__subtitle">
                    <h2 className="video-detail__creator">By Red Cow</h2>
                    <p className="video-detail__date">12/18/2018</p>
                </div>
                <div className="video-detail__stats-wrapper">
                    <img className="video-detail__view-icon" src={ViewIcon} alt="view icon"/>
                    <p className="video-detail__view-num">1,001,023</p>
                    <img className="video-detail__like-icon" src={LikeIcon} alt="view icon"/>
                    <p className="video-detail__like-num">110,985</p>
                </div>
            </article>
            <p className="video-detail__text">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the
                doors off what is possible on two wheels, unleashing some of the biggest
                moments the sport has ever seen. While mother nature only allowed for one full
                run before the conditions made it impossible to ride, that was all that was needed
                for event veteran Kyle Strait, who won the event for the second time -- eight years
                after his first Red Cow Rampage title
            </p>
        </section>
    )
}

export default VideoDetail