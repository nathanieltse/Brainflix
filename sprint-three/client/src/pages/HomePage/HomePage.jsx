import {Component} from 'react'
import { v4 as uuid} from 'uuid'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoList from '../../components/VideoList/VideoList'
import VideoDetail from '../../components/VideoDetail/VideoDetail'
import Comment from '../../components/Comment/Comment'
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
            .get(`/videos`)
            .then(res => {
                //default to the first video if no id in path 
                let selectedId = null
                this.props.match.params.id ? selectedId = this.props.match.params.id  : selectedId = res.data[0].id
                this.setState({videoData:res.data})
                //call to populate selected video detail
                return axios.get(`/videos/${selectedId}`)
            })
            .then(res => this.setState({selected:res.data})) 
            .catch(err => console.log(err))   
    }

    componentDidUpdate(prevState){
        if(this.props.match.params.id !== prevState.match.params.id){
            //if no id in path default call to the first video
            let selectedId = null
            this.props.match.params.id ? selectedId = this.props.match.params.id  : selectedId = this.state.videoData[0].id
            axios
                .get(`/videos/${selectedId}`)
                .then(res => this.setState({selected:res.data}))
                .catch(err => console.log(err))
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const newText = event.target.comment.value
        const userName = "BrainStation man"
        axios
            .post(`/videos/${this.state.selected.id}/comments`,{
                "name":userName,
                "id":uuid(),
                "comment":newText,
                "timestamp":Date.now()
            })
            .then(res => {
                this.setState({selected:{...this.state.selected, comments:[res.data,...this.state.selected.comments]}})
            })
            .catch(err => console.log(err))
        event.target.reset()
    }

    handleDelete = (id) =>{
        axios
            .delete(`/videos/${this.state.selected.id}/comments/${id}`)
            .then(res => {
                const newComments = this.state.selected.comments.filter(comment => comment.id !== res.data.id)
                this.setState({selected:{...this.state.selected, comments:newComments}})
            })
            .catch(err => console.log(err))
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
                    <VideoDetail 
                            selected={this.state.selected}/> 

                    <Comment 
                            selected={this.state.selected}
                            handleSubmit={this.handleSubmit}
                            handleDelete={this.handleDelete}/>
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