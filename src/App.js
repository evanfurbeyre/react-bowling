import React, { Component } from 'react';
import Scorecard from './components/Scorecard'
import Controls from './components/Controls'
import logo from './logo.svg';
import './style/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Scorecard />
        <Controls />

      </div>
    );
  }
}

export default App;
