import React, { Component } from 'react'
import Subcell from './Subcell'

export default class Cell extends Component {
  render() {
    return (
      <div className='cell'>
        <div className='subcells'>
          <Subcell display={this.props.display}/>
          <Subcell display={this.props.display}/>
        </div>
        {this.props.display ? this.props.value : ''}    
      </div>
    )
  }
}
