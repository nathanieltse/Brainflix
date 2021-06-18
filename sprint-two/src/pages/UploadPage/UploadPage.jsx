import {Link} from 'react-router-dom'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'

const UploadPage = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        document.querySelector(".upload").classList.add("loading")
        setTimeout(()=> {
            alert("Uploaded!")
            props.history.push('/')
        },3000)  
    }

        return(
            <section className="upload" onSubmit={handleSubmit}>
                <h1 className="upload__title">Upload Video</h1>
                    <form className="upload__form">
                        <div className="upload__form-left">
                            <p className="upload__label">VIDEO THUMBNAIL</p>
                            <img className="upload__thumbnail" src={thumbnail} alt="a blue bike"/>
                        </div>
                        <div className="upload__form-right">
                            <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                            <input className="upload__input" name="title" placeholder="Add a title to your video" required></input>
                            <label className="upload__label" htmlFor="text">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload__textarea" name="text" placeholder="Add a title to your video" required></textarea>
                        </div>
                        <div className="upload__action">
                            <button className="upload__submit">PUBLISH</button>
                            <Link className="upload__link" to="/">CANCEL</Link>
                        </div>
                    </form>
            </section>
        )
    
}

export default UploadPage