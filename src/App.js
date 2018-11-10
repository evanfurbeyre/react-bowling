import React, { Component } from 'react';
import Scorecard from './containers/Scorecard'
import Controls from './containers/Controls'
import bowlingBall from './bowling-ball.png';
import bowlingPin from './bowling-pin.png';

import './style/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="background">
            <div className="icons-container">
              <img src={bowlingPin} className="icon bowling-pin" alt="bowling-pin" />
              <img src={bowlingBall} className="icon bowling-ball" alt="bowling-ball" />
              <img src={bowlingPin} className="icon bowling-pin" alt="bowling-pin" />
            </div>
          </div>
        </header>
        <div className="game">
          <Scorecard />
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
