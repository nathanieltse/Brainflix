import './VideoPlayer.scss'


//video hero player
const VideoPlayer = (props) => {
    return (
        <div className="video-player__wrapper">
            <video className="video-player__player" controls poster={props.videoData.image}>
                <source src={props.videoData.video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoPlayer