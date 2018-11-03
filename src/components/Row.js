import React, { Component } from 'react'
import Cell from './Cell'
import TenthCell from './TenthCell'

export default class Row extends Component {
  constructor(props){
    super(props)
    this.state = {
      rolls:  [...Array(9)].map(() => [0,0]),
      scores: [...Array(10)].map(() => 0),
      totals: [...Array(10)].map(() => 0)
    }

    this.state.rolls.push([0,0,0]); // add the final round's rolls
  }

  render() {
    
    // keys for the 9 standard cells, [0,1,2,...,8]
    let cellIds = [...Array(9).keys()].map( i => i);

    return (
      <React.Fragment>
        <div className="cell player-name">
          {this.props.player}
        </div>

        {/* // Render the first 9 cells */}
        {cellIds.map( i => <Cell 
          key={i} 
          value={this.state.scores[i]} 
          onRoll={ this.handleRoll }
          display={this.props.round >= i} />
        )}
        
        {/* // This cell has different logic so it gets its own component */}
        <TenthCell 
          value={this.state.scores[9]} 
          subcells={this.state.rolls[9]} />

        <div className="cell round-total">
          {this.state.totals[this.props.round]}
        </div>
      </React.Fragment>
    )
  }

  handleRoll() {
    console.log('handling roll...')
  }
}
