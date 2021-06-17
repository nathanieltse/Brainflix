import {Component} from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoDetail from '../VideoDetail/VideoDetail'
import Comment from '../Comment/Comment'
import VideoList from '../VideoList/VideoList'
import { api_url, api_key } from '../../utils'
import axios from 'axios'

import './HomePage.scss'


//main section of page
class HomePage extends Component {
    state = {
        videoData: null,
        selected: null,
    }

    componentDidMount() {
        //call to populate video list
        axios
            .get(`${api_url}/videos${api_key}`)
            .then(res => {
                //if no id in path default to the first video
                let selectedId = null
                this.props.match.params.id ? selectedId = this.props.match.params.id  : selectedId = res.data[0].id
                const selectedVideo = res.data.find(video => video.id === selectedId)
                this.setState({videoData:res.data, selected:selectedVideo})
            })
            .catch(err => {
                console.log(err)
            })
        //call to populate video detail
        //default to first video if no id in path
        // if (this.state.videoData.length !== 0){
        //     let selectedId = null
        //     this.props.match.params.id ? selectedId = this.props.match.params.id  : selectedId = this.state.videoData[0].id
        //     axios
        //         .get(`${api_url}/videos/${selectedId}${api_key}`)
        //         .then(res => {
        //             this.setState({selected:res.data})
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })  
        // }
           
    }

    componentDidUpdate(prevState){
        if(this.props.match.params.id !== prevState.match.params.id){
            //if no id in path default call to the first video
            let selectedId = null
            this.props.match.params.id ? selectedId = this.props.match.params.id  : selectedId = this.state.videoData[0].id
            axios
                .get(`${api_url}/videos/${selectedId}${api_key}`)
                .then(res => {
                    this.setState({selected:res.data})
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    
    
    render(){ 
        return (
            this.state.selected ?
            <>
                <section className="main__hero">
                    <VideoPlayer 
                        selected={this.state.selected}/>
                </section>
                <section className="main__body">
                    <div className="main__body-left">
                        {/* <VideoDetail 
                            selected={this.state.selected}/> */}

                        {/* <Comment 
                            selected={this.state.selected.comments}/>  */}
                    </div>
                    <div className="main__body-right">
                        <VideoList
                            videoData={this.state.videoData}
                            selected={this.state.selected}/>
                    </div>
                </section>
            </>   
            :
            <p>Loading....</p>
            
        )
        
    }
}

export default HomePage