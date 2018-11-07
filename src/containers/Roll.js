import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { roll, lastRoundRoll } from '../actions'

class Roll extends Component {

  // handleRoll() { START UP HERE TOMORROW

  // }

  render() {
    // Set the state of the current players turn
    const { players, turn, whichRoll, pinsUp } = this.props.game
    const player = players[turn].name     

    // The player can roll up to the number of pins standing
    let rollButtons = [...Array(11).keys()].map( i => {
      return (
        <button
          disabled={i > pinsUp} 
          key={i}
          value={i} 
          className="roll-button" 
          onClick={ e => this.props.roll(e.target.value) } >
          {i}
        </button>
      )
    })

    return (
      <div className="controls-container">
        <div className="controls">
          <div>
            {player}'s 
            {whichRoll === 0 && ' first '}
            {whichRoll === 1 && ' second '} 
            {whichRoll === 2 && ' third '}  
            roll 
          </div>
          <div>
            {rollButtons}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ game }){
  return { game }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    roll: roll,
    lastRoundRoll: lastRoundRoll
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Roll)