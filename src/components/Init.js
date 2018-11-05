import React, { Component } from 'react'
import NameInput from './NameInputs'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { initGame } from '../actions'


class Init extends Component {
  constructor(props){
    super(props)

    this.state = {
      players: ['']
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this)
  }

  handleNameChange(i) {
    console.log("hnc")
  }

  handleAddPlayer() {
    console.log('add')
  }

  handleRemovePlayer() {
    console.log("rm")
  }


  render() {
    const numPlayers = this.state.players.length

    let playerInputs = [...Array(numPlayers).keys()].map( i => {
      return (
        <NameInput 
          key={i}
          player={this.state.players[i]} />
      )
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
          <button type="submit" onClick={ () => this.props.initGame() }>Begin Game</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initGame: initGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Init)