import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class App extends Component {
  async componentDidMount() {
    const typeData = await api.getPokemonTypeData()
    console.log('typeData in App', typeData)
    this.props.addTypeData(typeData)

  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
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
