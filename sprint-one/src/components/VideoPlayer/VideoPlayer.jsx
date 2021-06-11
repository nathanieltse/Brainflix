import './VideoPlayer.scss'


//video hero player
const VideoPlayer = (props) => {
    return (
        <div className="video-player__wrapper">
            <video className="video-player__player" poster={props.videoData.image} controls>
                <source src={props.videoData.video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoPlayer