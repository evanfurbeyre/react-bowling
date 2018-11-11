import React, { Component } from 'react'
import { connect } from 'react-redux'
import Roll from './Roll'
import Init from '../components/Init'
import { resetGame, clearScores } from '../actions'

import '../style/Controls.css';


class Controls extends Component {x

  renderGameOver() {
    return (
      <div> 
        <h3>Game Over!</h3>
        <button 
          className="control-button" 
          onClick={ () => this.props.resetGame() }>
          Play Again?
        </button>
      </div>
    )
  }

  renderControls() {
    return (
      <div>
        <Roll />
        <button 
          className="control-button" 
          onClick={ () => this.props.clearScores() }>
          Clear scores
        </button>
        <button 
          className="control-button" 
          onClick={ () => this.props.resetGame() }>
          Exit
        </button>
      </div>
    )
  }

  render() {
    const { initialized, isGameOver } = this.props.game 

    return (
      <div className="controls-container">
        <div className="controls">
          { 
            ( !initialized && <Init /> )
            ||
            ( isGameOver && this.renderGameOver() )
            ||
            this.renderControls()
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ game }){
  return { game }
}

export default connect(mapStateToProps, { resetGame, clearScores })(Controls)

