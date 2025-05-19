import React, {useState} from "react";
import './Searchbar.css';
import { searchPokemon } from '../../api';

const Searchbar = () => {
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) =>{
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Pesquisar pokémon..." onChange={onChangeHandler}>
                </input>
            </div>
            <div className="searchbar-btn">
                <button onClick = {onButtonClickHandler}><b>Buscar</b></button>
            </div>
            {pokemon ? (
                <div>
                    <div>{pokemon.name}</div>
                    <div>{pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt="Pokémon front image"></img>
                </div>
            ): null}
        </div>
    )
}

export default Searchbar