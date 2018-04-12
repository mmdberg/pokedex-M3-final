import React from 'react';
import './styles.css';

export const Card = ({type, handleClick, className, pokemon}) => {
  const pokemonList = pokemon.map(character => { 
    return (
      <div>
        <h4>{character.name}</h4>
        <p>weight: {character.weight} lbs</p>
        <p>type: {character.type}</p>
        <img src={character.sprites.back_default} alt=""/>
      </div>)


  })
  
  return(
    <div className={className} onClick={() => handleClick(type)}>
      <h2>{type.name}</h2>
      {
        pokemon.length > 0 && 
        <p>{pokemonList}</p> 

      }
    </div>
  )
}
