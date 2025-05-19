import React from "react";
import './pokemon.css';

const Pokemon = (props) => {
    const {pokemon} = props;
    console.log(" Pokemon name:", pokemon.name);

    const onHeartClick = () => {
        console.log("pode favoritar")
    }

    const heart = "❤"
    return (
        <div className="pokemon-card">
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
                                    {type.type.name}
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