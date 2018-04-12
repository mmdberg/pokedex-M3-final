import React from 'react';
import './styles.css';

export const Card = (props) => {
  console.log(props)
  return(
    <div className='card'>
      <p>{props.type.name}</p>
    </div>
  )
}