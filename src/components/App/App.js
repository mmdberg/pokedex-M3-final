import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../containers/CardContainer/';

import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class App extends Component {
  async componentDidMount() {
    const typeData = await api.getPokemonTypeData()
    this.props.addTypeData(typeData)
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h1> POKéDEX </h1>
        </header>
        <CardContainer />

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
