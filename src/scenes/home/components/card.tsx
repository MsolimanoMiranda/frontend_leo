import { Result } from "../models/PokemonList";

interface props {
  pokemon: Result
}

const Card = ({pokemon}:props) : JSX.Element=>{

  const getId = (value: string)=>{
    const setValue = parseInt(value.substring(34,35));
    if( setValue < 10){
      return `00${value.substring(34,35)}`
    }
    if( setValue >= 10 && setValue < 100){
      return `0${value.substring(34,35)}`
    }
    return setValue
  }


  return (
    <div className="card">
    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getId(pokemon.url)}.png`} className="card__img" alt={""}/>
    <div className="card__circle"></div>
    <div className="card-body">
        <h5>#{getId(pokemon.url)}</h5>
        <h1 className="card-title">{pokemon.name}</h1>
     <div className="card__type">
     </div>
        <button type="button" className="btn btn-primary buttonPoke" data-toggle="modal" > Ver Gráfica </button>
    </div>
 </div>
  )
}

export default Card;