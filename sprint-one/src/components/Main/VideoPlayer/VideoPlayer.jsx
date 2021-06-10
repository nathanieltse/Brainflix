import './VideoPlayer.scss'

const VideoPlayer = () => {

    return (
        <div className="video__wrapper">
            <video className="video__player" controls poster="https://i.imgur.com/l2Xfgpl.jpg">
                <source src="https://project-2-api.herokuapp.com/stream" type="video/mp4"/>
                
            </video>
        </div>
    )
}

export default VideoPlayer