import React, { Component } from 'react';
import { Card } from '../../components/Card';
import { connect } from 'react-redux';
import './styles.css';
import PropTypes from 'prop-types';

export class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonList: [],
      activeList: []
    }
  }

  handleClick = (type) => {
    this.makeActiveArray(type)
  }

  makeActiveArray = (type) => {
    const activeList = this.props.typeData.map((typeObj, index) => {
      if (typeObj.id === type.id) {
        return <Card key={index} type={typeObj} className='card active' pokemon={type.pokemon} handleClick={this.handleClick}/>  
      } else {
        return <Card key={index} type={typeObj} className='card' pokemon={[]} handleClick={this.handleClick}/>  
      }
    })
    this.setState({
      activeList
    })
  }

  componentDidMount() {
    const pokemonList = this.props.typeData.map((type, index) => 
      <Card key={index} type={type} className='card' pokemon={[]} handleClick={this.handleClick}/>)
    this.setState({
      pokemonList
    })
  }

  render() {
    return (
      <div className="card-container">
        { 
          this.state.activeList.length > 0 ? this.state.activeList : this.state.pokemonList
        }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  typeData: state.typeData
})

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
  typeData: PropTypes.array
}
