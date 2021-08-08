import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route
          exact
          path="/poke/:id"
          render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
