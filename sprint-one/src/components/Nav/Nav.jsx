import SearchBar from '../SearchBar/SearchBar'
import logo from '../../assets/logo/Logo-brainflix.svg'

import './Nav.scss'

const Nav = () =>{
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="BrainFlix logo"/>
            <SearchBar/>
        </nav>
    )
}

export default Nav