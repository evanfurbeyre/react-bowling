import React, { Component } from 'react'

export default class Controls extends Component {

  handleClick(e){
    this.props.onRoll(e.target.value)
  }

  render() {

    let rollButtons = [...Array(11).keys()].map( i => {
      return (
        <button 
          key={i}
          value={i} 
          className="roll-button" 
          onClick={ e => this.props.onRoll(e.target.value) }
        >
          {i}
        </button>
      )
    })


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
