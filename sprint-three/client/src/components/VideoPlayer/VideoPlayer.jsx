import './VideoPlayer.scss'


//video hero player
const VideoPlayer = ({selected}) => {
    return (
        <div className="video-player__wrapper">
            <video className="video-player__player" poster={selected.image} controls>
                <source src={selected.video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoPlayer