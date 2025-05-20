import React, {useContext} from 'react';
import pokeapiLogo from '../../assets/pokeapi_logo.png';
import FavoriteContext from '../../contexts/favoriteContext';
import './navbar.css'


const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);
    return(
        <nav className='navbar'>
            <div>
                <img 
                    alt = "PokéApi logo"
                    src = {pokeapiLogo}
                    className = "navbar-img"
                />
            </div>
            <div className = "navbar-favorite">❤️<b>{favoritePokemons.length}</b></div>
        </nav>
    )
}

export default Navbar;