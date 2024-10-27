/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Home.scss';
import logo from '../../assets/img/logo.png';
import Card from './components/card';
import service from "./service";
import { Result } from './models/PokemonList';

const Home = ()  => {

  const [listPokemon, setListPokemon] = useState<Result[]>([]);

const init = async () =>{
  const reponse = await service.getListPokemon();
  if(reponse){
    setListPokemon(reponse.results)
  }else{
    setListPokemon([])
  }
}



useEffect(() => {
  init();
}, []);

  

  return (
    <div className="app">
      <div className="app__logoContent" >
        <img className="app__logoContent__logo" 
            src={logo} 
            alt="Pokemon"/>
      </div>
      <div className="app__contenedor" >

        { listPokemon && listPokemon?.length > 0 && listPokemon.map((pokemon: Result) => (
         <Card key={pokemon.name} pokemon={pokemon}/> 
        ))
        }
      
      </div>
    </div>
  );
}

export default Home;

