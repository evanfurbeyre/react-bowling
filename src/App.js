import React, { Component } from 'react';
import Scorecard from './components/Scorecard'
import Controls from './components/Controls'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: ['Evan'],
      turn: 0,
      round: 0,
      roll: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Scorecard 
          players={this.state.players} 
          round={this.state.round}
          turn={this.state.turn}
          roll={this.state.roll} />
        <Controls
          turn={this.state.turn} 
          onRoll={ roll => this.setState({roll}) } />

      </div>
    );
  }
}

export default App;
