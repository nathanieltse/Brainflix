import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoDetail from '../VideoDetail/VideoDetail'
import Comment from '../Comment/Comment'
import VideoList from '../VideoList/VideoList'

import {Component} from 'react'
import './Main.scss'


class Main extends Component {
    render(){
        return (
            <main className="main">
                <section className="main__hero">
                    <VideoPlayer/>
                </section>
                <section className="main__body">
                    <div className="main__body-left">
                        <VideoDetail/>
                        <Comment/>
                    </div>
                    <div className="main__body-right">
                        <VideoList/>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main