import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';

function App() {
  return(
    <div>
      <Navbar />
      <Searchbar />
      <div className='App'></div>
    </div>
  );
}

export default App;
