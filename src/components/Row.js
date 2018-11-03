import React, { Component } from 'react'
import Cell from './Cell'

export default class Row extends Component {
  // constructor(){
  //   super()
  //   // this.state = {
  //   //   rolls:  [...Array(10)].map(() => 0),
  //   //   rounds: [...Array(10)].map(() => 0),
  //   //   totals: [...Array(10)].map(() => 0)
  //   // }
  // }


  render() {
    
    let cellIds = [...Array(9).keys()].map( i => i);

    return (
      <React.Fragment>
        <Cell display={this.props.player} classes="player-name"/>
        {cellIds.map( i => <Cell key={i} subcells={2} classes="standard-cell"/>)}
        <Cell key={"9"} subcells={3} classes="tenth-cell" />
        <Cell classes="round-total" />
      </React.Fragment>
    )
  }
}
