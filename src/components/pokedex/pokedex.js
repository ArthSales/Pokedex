import React from "react";
import './pokedex.css'
import Pokemon from "../pokemon/pokemon";

const Pokedex = (props) => {
    const {pokemons, loading} = props;
    console.log("Pokedex - pokemons: ", pokemons)

    return (
        <div className="pokedex">
            <div className="pokedex-header">
                <h1>Pokédex</h1>
                <div>Paginação:</div>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) =>{
                        return(
                            <Pokemon key = {index} pokemon = {pokemon}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex