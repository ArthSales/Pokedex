import React, {useState} from "react";
import './Searchbar.css';

const Searchbar = () => {
    const [search, setSearch] = useState("ditto")

    const onChangeHandler = (e) =>{
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("pokemon: ", search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokémon..." onChange={onChangeHandler}>
                </input>
            </div>
            <div className="searchbar-btn">
                <button onClick = {onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar