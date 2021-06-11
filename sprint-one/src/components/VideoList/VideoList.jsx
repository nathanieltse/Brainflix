import VideoListCard from '../VideoListCard/VideoListCard'

import './VideoList.scss'


//listing all video
const VideoList= (props) => {

    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {props.videoData.map(video => {
                if(video !== props.selected){
                    return <VideoListCard 
                                key={video.id} 
                                videoData={video}
                                onClick={()=> props.onClick(video.id)}
                            />
                } else {
                    return null
                }
            })}
        </section>
    )
}

export default VideoList