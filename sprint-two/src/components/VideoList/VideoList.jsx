import VideoListCard from '../VideoListCard/VideoListCard'
import {Link} from 'react-router-dom'
import './VideoList.scss'


//listing all video
const VideoList= ({videoData, selected}) => {
    
    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {videoData.map(video => {
                if(video !== selected){
                    return <Link className="video-list__link" to={`/${video.id}`} key={video.id} >
                                <VideoListCard videoData={video}/>
                            </Link>
                } else {
                    return null
                }
            })}
        </section>
    )
}

export default VideoList