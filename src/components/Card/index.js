import React from 'react';
import './styles.css';

export const Card = ({type, handleClick, pokemon}) => {
  console.log('pokemon', pokemon)
  const pokemonList = pokemon.map(character => <p>{character.name}</p>)
  
  return(
    <div className='card' onClick={() => handleClick(type)}>
      <h3>{type.name}</h3>
      {
        pokemon.length > 0 && 
        <p>{pokemonList}</p> 

      }
    </div>
  )
}