import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { initGame } from '../actions'


class Init extends Component {
  constructor(props){
    super(props)

    this.state = {
      players: ['', '']
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this)
    this.handleGameBegin = this.handleGameBegin.bind(this)
  }

  handleGameBegin(e) {
    e.preventDefault()
    this.props.initGame({
      players: this.state.players
    })
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

  renderNameInput(i) {
    return (
      <div key={i}>
        <span>Player {i+1}</span>
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
        <form>
          {playerInputs}
          <div>
            <span onClick={this.handleAddPlayer}>
              Add Player
            </span>
            <span onClick={this.handleRemovePlayer}>
              Remove Player
            </span>
          </div>
          <button type="submit" onClick={ this.handleGameBegin }>
            Begin Game
          </button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initGame: initGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Init)