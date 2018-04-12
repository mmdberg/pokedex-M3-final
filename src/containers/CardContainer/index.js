import React from 'react';
import { Card } from '../../components/Card';
import { connect } from 'react-redux';
import './styles.css';


export const CardContainer = ({typeData}) => {
  const pokemonList = typeData.map((type, index) => 
    <Card key={index} type={type} />) 
  
  return (
    <div className="card-container">
      {pokemonList}
    </div>
  )
}

export const mapStateToProps = state => ({
  typeData: state.typeData
})

export default connect(mapStateToProps, null)(CardContainer)
