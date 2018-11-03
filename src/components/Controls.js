import React, { Component } from 'react'

export default class Controls extends Component {
  constructor(props){
    super(props)

    this.state = {
      playerTurn: ""
    }
  }

  render() {

    let rollButtons = [...Array(11).keys()].map( i => {
      return (
        <button 
          key={i}
          value={i} 
          className="roll-button" 
          onClick={this.props.func}
        >
          {i}
        </button>
      )
    })

    function handleRoll (e) {
      console.log()
      this.props.func()
    }

    return (
      <div className="controls-container">
        <div className="controls">
          <div>Evan's turn</div>
          <div>Okay roll</div>
          <div>
            {rollButtons}
          </div>

        </div>
      </div>
    )
  }
}
