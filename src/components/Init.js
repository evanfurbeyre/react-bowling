import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initGame } from '../actions'

import '../style/Init.css';

class Init extends Component {
  constructor(props){
    super(props)

    this.state = {
      players: ['', '']   // default to two players
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this)
    this.handleGameBegin = this.handleGameBegin.bind(this)
  }

  handleGameBegin(e) {
    e.preventDefault()
    
    let players = this.state.players.map( (p, i) => {
      if (p === '') return `Player ${i+1}`    // If name is blank, default to Player $i
      return p
    })

    this.props.initGame({players})
  }

  onNameChange(i, e) {
    let players = this.state.players
    players[i] = e.target.value
    this.setState({ players: players})
  }

  handleAddPlayer() {
    this.setState({
      players: [...this.state.players, '']
    })
  }

  handleRemovePlayer() {
    const { players  } = this.state
    this.setState({
      players: [...players.slice(0, players.length-1)]
    })
  }

  // Row where player's name is entered
  renderNameInput(i) {
    return (
      <div key={i} className="player-input-row">
        <div className="player-number" >Player {i+1}</div>
        <input 
          type='text' 
          value={this.state.players[i]}
          onChange={this.onNameChange.bind(this, i)} />
      </div>
    )
  }

  render() {
    const numPlayers = this.state.players.length

    let playerInputs = [...Array(numPlayers).keys()].map( i => {
      return this.renderNameInput(i)
    })

    return (
      <div>
        <h1>Welcome to Bowling!</h1>
        <h4>Who will be playing?</h4>
        <form>
          {playerInputs}
          <div>
            <span className="player-control" onClick={this.handleAddPlayer}>
              Add Player
            </span>
            <span className="player-control" onClick={this.handleRemovePlayer}>
              Remove Player
            </span>
          </div>
          <button className="submit-players" type="submit" onClick={ this.handleGameBegin }>
            Begin Game
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { initGame })(Init)