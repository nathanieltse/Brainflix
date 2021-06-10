import searchIcon from "../../../assets/icons/Icon-search.svg"
import uploadIcon from "../../../assets/icons/Icon-upload.svg"
import profileImage from '../../../assets/images/Mohan-muruge.jpg'

import './SearchBar.scss'

const SearchBar = () => {

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form className="search-form" onSubmit={submitHandler}>
            <label htmlFor="search"></label>
            
            <div className="search-form__input-wrapper">
                <img className="search-form__search-icon" src={searchIcon} alt="search icon"/>
                <input className="search-form__input" type="text" name="search" placeholder="Search"/>
            </div>
           
            <button className="search-form__submit" type="submit">
                <img className="search-form__submit-icon" src={uploadIcon} alt="upload icon"/>
                UPLOAD
            </button>

            <div className="search-form__avatar-wrapper">
                <img className="search-form__avatar" src={profileImage} alt="Mogan muruge"/>
            </div>

        </form>
    )
}

export default SearchBar