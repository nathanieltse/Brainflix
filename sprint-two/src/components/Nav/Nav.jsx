import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'

import logo from '../../assets/logo/Logo-brainflix.svg'

import './Nav.scss'

//nav bar element
const Nav = () =>{
    return (
        <nav className="nav">
            <Link className="nav__link" to="/">
                <img className="nav__logo" src={logo} alt="BrainFlix logo"/>
            </Link>
            <SearchBar/>
        </nav>
    )
}

export default Nav