import React, {useContext} from "react";
import './pokemon.css';
import FavoriteContext from "../../contexts/favoriteContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
    const {pokemon} = props;
    console.log(" Pokemon name:", pokemon.name);

    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name);
    }

    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "❤"
    return (
        <div className={`pokemon-card ${pokemon.types[0].type.name}`} >
            <div className="pokemon-img-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className=""></img>
            </div>
            <div className="pokemon-card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="card-pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key = {index} className="pokemon-type-text">
                                    <b>{type.type.name}</b>
                                </div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>{heart}</button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon