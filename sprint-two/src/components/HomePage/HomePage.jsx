import {Component} from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoDetail from '../VideoDetail/VideoDetail'
import Comment from '../Comment/Comment'
import VideoList from '../VideoList/VideoList'
import Dataset from '../../data/video-details.json'

import './HomePage.scss'


//main section of page
class HomePage extends Component {
    state = {
        videoData: Dataset,
        selected: Dataset[0]
    }

    handleClick = (routeProps) => {
        console.log(routeProps)
        // const selected = this.state.videoData.find(video => video.id === id)
        // this.setState({selected:selected})
    }

    render(){
        return (
            <>
                <section className="main__hero">
                    <VideoPlayer 
                        videoData={this.state.selected}/>
                </section>
                <section className="main__body">
                    <div className="main__body-left">
                        <VideoDetail 
                            selected={this.state.selected}/>
                        <Comment 
                            selected={this.state.selected}/>
                    </div>
                    <div className="main__body-right">
                        <VideoList
                            videoData={this.state.videoData}
                            selected={this.state.selected}/>
                    </div>
                </section>
            </>
        )
    }
}

export default HomePage