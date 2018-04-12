import React from 'react';
import './styles.css';

export const Card = ({type, handleClick}) => {
  return(
    <div className='card' onClick={() => handleClick(type)}>
      <p>{type.name}</p>
    </div>
  )
}