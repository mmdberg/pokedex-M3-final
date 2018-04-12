import React from 'react';
import './styles.css';

export const Card = (props) => {
  return(
    <div className='card'>
      <p>{props.type.name}</p>
    </div>
  )
}