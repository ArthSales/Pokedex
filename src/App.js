import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import Pokedex from './components/pokedex/pokedex';
import { getPokemonData, getPokemons, searchPokemon } from './api';
import { FavoriteProvider,FavoriteContext } from './contexts/favoriteContext';

const favoritesKey = "favorites";

function App() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons: ", error);
    }
  }

// useEffect pra carregar as informações do localStorage
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }

  useEffect(() =>{
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex,1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon)

    if(!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }

    setLoading(false);
  }

  return (
    <FavoriteProvider
      value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons,}}
    >
    <div className='header'>
      <Navbar />
      <Searchbar onSearchHandler = {onSearchHandler}/>
      {notFound ? (
        <div className='not-found-text-container'><b>Pokémon não encontrado.</b></div>
      ) :
      ( <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />)}
        <div className='App'></div>
    </div>
    </FavoriteProvider>
  );
}

export default App;
