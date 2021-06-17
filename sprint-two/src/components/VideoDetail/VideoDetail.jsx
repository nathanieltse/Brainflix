import dateConvertor from '../../utils'
import { Component } from 'react'
import axios from 'axios'
import { api_url, api_key } from '../../utils'

import ViewIcon from '../../assets/icons/Icon-views.svg'
import LikeIcon from '../../assets/icons/Icon-likes.svg'

import './VideoDetail.scss'



//video's info block
class VideoDetail extends Component {

    componentDidMount(){
    // call with id to get detail
        axios
        .get(`${api_url}/videos/${this.props.selected.id}${api_key}`)
        .then(res => {
            this.setState({details:res.data})
        })
        .catch(err => {
            console.log(err)
            
        })
    }

    componentDidUpdate(){
        if(this.props.selected.id !== this.state.details.id){
            // call with id to get detail
            axios
                .get(`${api_url}/videos/${this.props.selected.id}${api_key}`)
                .then(res => {
                    this.setState({details:res.data})
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
    }

    render(){
        return (
            <section className="video-detail">
                <h1 className="video-detail__title">
                    {this.state.details.title}
                </h1>
                <article className="video-detail__detail">
                    <div className="video-detail__subtitle">
                        <h2 className="video-detail__creator">
                            By {this.state.details.channel}
                        </h2>
                        <p className="video-detail__date">
                            {dateConvertor(this.state.details.timestamp)}
                        </p>
                    </div>
                    <div className="video-detail__stats-wrapper">
                        <img className="video-detail__view-icon" src={ViewIcon} alt="view icon"/>
                        <p className="video-detail__view-num">
                            {this.state.details.views}
                        </p>
                        <img className="video-detail__like-icon" src={LikeIcon} alt="view icon"/>
                        <p className="video-detail__like-num">
                            {this.state.details.likes}
                        </p>
                    </div>
                </article>
                <p className="video-detail__text">
                    {this.state.details.description}
                </p>
            </section>
        )
    }
}

export default VideoDetail