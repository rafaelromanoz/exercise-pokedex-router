import React from 'react';
import { Switch,BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" render={(props)=> <Pokedex pokemons={pokemons}/>}/>
    <div className="App">
      <h1> Pokedex </h1>
      <h2>Rafael Romano</h2>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;