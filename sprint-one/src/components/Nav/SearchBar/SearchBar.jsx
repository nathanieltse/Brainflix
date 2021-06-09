// import searchIcon from "../../../assets/icons/Icon-search.svg"
// import uploadIcon from "../../../assets/icons/Icon-upload.svg"
import profileImage from '../../../assets/images/Mohan-muruge.jpg'

import './SearchBar.scss'

const SearchBar = () => {
    return (
        <form className="search-form">
            <label htmlFor="search"></label>
            
            <input className="search-form__input" type="text" name="search" placeholder="Search"/>
           
            <input className="search-form__submit" type="submit" value="UPLOAD"/>

            <div className="search-form__avatar-wrapper">
            <img className="search-form__avatar" src={profileImage} alt="Mogan muruge"/>
            </div>

        </form>
    )
}

export default SearchBar