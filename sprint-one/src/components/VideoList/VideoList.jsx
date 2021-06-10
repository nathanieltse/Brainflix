import { Component } from "react";
import VideoListCard from '../VideoListCard/VideoListCard'
import './VideoList.scss'

class VideoList extends Component {
    state = {

    }
    render(){
        return (
            <section class="video-list">
                <h2 class="video-list__title">NEXT VIDEO</h2>
                <VideoListCard datas="" />
            </section>
        )
    }
}

export default VideoList