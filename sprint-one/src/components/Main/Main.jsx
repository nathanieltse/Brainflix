import VideoPlayer from './VideoPlayer/VideoPlayer'
import VideoDetail from './VideoDetail/VideoDetail'
import Comment from './Comment/Comment'

import {Component} from 'react'
import './Main.scss'


class Main extends Component {

    render(){
        return (
            <>
            <section className="video__hero">
                <VideoPlayer/>
            </section>
            <section className="video__body">
                <VideoDetail/>
                <Comment/>
            </section>
            
            </>
        )
    }
}

export default Main