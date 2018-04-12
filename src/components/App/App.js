import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../containers/CardContainer/';
import gif from '../../loading.gif';

import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class App extends Component {
  async componentDidMount() {
    const typeData = await api.getPokemonTypeData()
    console.log('Data in app:', typeData)
    // this.props.addTypeData(typeData)
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h1> POKéDEX </h1>
        </header>
        {
          this.props.typeData.length > 0 ? 
          <CardContainer /> :
          <img src={gif} />
        }


      </div>
    );
  }
}

export const mapStateToProps = state => ({
  typeData: state.typeData
});

export const mapDispatchToProps = dispatch => ({
  addTypeData: pokemonTypes => dispatch(actions.addTypeData(pokemonTypes))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
