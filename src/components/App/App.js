import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import * as api from '../../apiCalls'

class App extends Component {
  componentDidMount() {
    api.getPokemonTypeData()
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


export default App;
