import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import Pokedex from './components/pokedex/pokedex';
import { getPokemonData, getPokemons } from './api';

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState ([]);

  const fetchPokemons = async () =>{
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons: ", error);
    }
  }

  useEffect (() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return(
    <div className='header'>
      <Navbar />
      <Searchbar 
      />
      <Pokedex pokemons = {pokemons} loading = {loading}/>
      <div className='App'></div>
    </div>
  );
}

export default App;
