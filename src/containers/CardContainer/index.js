import React, { Component } from 'react';
import { Card } from '../../components/Card';
import { connect } from 'react-redux';
import './styles.css';


export class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonList: [],
      favorite: {}
    }
  }

  handleClick = (type) => {
    console.log(type.pokemon)
    this.setState({
      favorite: type
    })

    //fetch for pokemon data
  }

  componentDidMount() {
    const pokemonList = this.props.typeData.map((type, index) => 
      <Card key={index} type={type} handleClick={this.handleClick}/>)
    console.log(pokemonList) 
    this.setState({
      pokemonList
    })
  }

  // componentDidUpdate() {
  //   const pokemonList = this.props.typeData.map((type, index) => {
  //     if (type.id === this.state.favorite.id) {
  //       <Card key={index} type={type} handleClick={this.handleClick}/>)  
  //     } else {
  //       <Card key={index} type={type} handleClick={this.handleClick}/>)  
  //     }
  //   }
  //   console.log(pokemonList) 
  //   this.setState({
  //     pokemonList
  //   })
  //   }
  // }

  render() {
    console.log()
    return (
      <div className="card-container">
        {this.state.pokemonList}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  typeData: state.typeData
})

export default connect(mapStateToProps)(CardContainer)
