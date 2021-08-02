import React from 'react';
import { Link } from 'react-router-dom';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
      pokemons,
    } = this.props;
    this.state = {
      pokemons: pokemons,
      id: id,
      pokeParam: '',
    };
    this.verificaPokemon = this.verificaPokemon.bind(this);
  }
  verificaPokemon() {
    const blab = this.state.pokemons
      .filter((poke) => poke.id == this.state.id)
      .map((poku) => poku);
    console.log(blab[0].foundAt[0].map);
    return blab;
  }
  render() {
    return (
      <div>
        <h1>{this.verificaPokemon()[0].name}</h1>
        <h3>{this.verificaPokemon()[0].type}</h3>
        <img src={this.verificaPokemon()[0].image} alt="asdsadsa" />
        <h1>
          É encontrado em :{' '}
          <img
            src={this.verificaPokemon()[0].foundAt[0].map}
            alt="asdsad"
          ></img>
        </h1>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/about">Home</Link>
      </div>
    );
  }
}

export default PokemonDetails;
