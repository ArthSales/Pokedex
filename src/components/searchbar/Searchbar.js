import React, {useState} from "react";
import './Searchbar.css';
import { searchPokemon } from '../../api';

const Searchbar = (props) => {
    const [search, setSearch] = useState("ditto");
    const {onSearchHandler} = props;

    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
        if (e.target.length === 0) {
            onSearchHandler(undefined);
        }
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search);
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
        </div>
    )
}

export default Searchbar