import React from "react";
import './pokedex.css'
import Pokemon from "../pokemon/pokemon";
import Pagination from "../pagination/pagination";

const Pokedex = (props) => {
    const {pokemons, loading, page, setPage, totalPages} = props;
    console.log("Pokedex - pokemons: ", pokemons);

    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page-1);
        }
    }

    const onRightClickHandler = () => {
        if (page+1 !== totalPages){
            setPage(page+1);
        }
    }

    return (
        <div className="pokedex">
            <div className="pokedex-header">
                <h1>Pokédex</h1>
                <Pagination
                    page = {page+1}
                    totalPages = {totalPages}
                    onLeftClick = {onLeftClickHandler}
                    onRightClick = {onRightClickHandler}
                />
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