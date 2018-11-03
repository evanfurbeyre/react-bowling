import React, { Component } from 'react'
import Subcell from './Subcell'


export default class Cell extends Component {

  render() {
    
    let numSubcells = this.props.subcells || 0;
    let subcells = [...Array(numSubcells).keys()].map( i => <Subcell key={i}/>);
    
    return (
      <div className={`cell`}>
        <div className="subcells">
          {subcells}
        </div>
        {this.props.display}
      </div>
    )
  }
}
