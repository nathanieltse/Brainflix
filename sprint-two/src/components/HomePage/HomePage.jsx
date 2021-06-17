import {Component} from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoDetail from '../VideoDetail/VideoDetail'
import Comment from '../Comment/Comment'
import VideoList from '../VideoList/VideoList'
import Dataset from '../../data/video-details.json'
import { api_url, api_key } from '../../utils'
import axios from 'axios'

import './HomePage.scss'


//main section of page
class HomePage extends Component {
    state = {
        videoData: [],
        selected: [],
        selectedDetail: []
    }

    componentDidMount(){
        //call to populate video list
        axios
            .get(`${api_url}/videos${api_key}`)
            .then(res => {
                this.setState({videoData:res.data})
                const selected = res.data.find(movie => {
                    return movie.id === this.props.match.params.id
                })
                let selectedId = null
                this.props.match.params.id ? selectedId = this.props.match.params.id  : selectedId = res.data[0].id
                // call with id to get detail
                axios
                    .get(`${api_url}/videos/${selectedId}${api_key}`)
                    .then(res => {
                        this.setState({selected:res.data})
                    })
                    .catch(err => {
                        console.log(err)
                        
                    })
            })
            .catch(err => {
                console.log(err)
            })   
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.id && this.props.match.params.id !== this.state.selected.id){
            axios
                .get(`${api_url}/videos/${this.props.match.params.id}${api_key}`)
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
            this.state.selectedDetail ?
            <>
                <section className="main__hero">
                    <VideoPlayer 
                        videoData={this.state.selected}/>
                </section>
                <section className="main__body">
                    <div className="main__body-left">
                        <VideoDetail 
                            selected={this.state.selected}/>

                        {/* <Comment 
                            selected={this.state.selectedDetail}/>  */}
                    </div>
                    <div className="main__body-right">
                        <VideoList
                            videoData={this.state.videoData}
                            selected={this.state.selected}/>
                    </div>
                </section>
            </>
            :
            <p>Loading...</p> 
            
            
            
        )
        
    }
}

export default HomePage