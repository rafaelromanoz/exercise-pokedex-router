import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class About extends Component{
  render(){
    return (
      <div>
        <p>Essa é uma pokedex que é muito legal, e foi bem dificil de fazer basta clicar nos detalhes!</p>
        <img src="https://escolaeducacao.com.br/wp-content/uploads/2019/08/pokemon.jpg" alt="imagem-poke-lindos" />
        <Link to="/">Pokedex</Link>
      </div>
    )
  }
}

export default About;