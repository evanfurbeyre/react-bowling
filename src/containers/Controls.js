import React, { Component } from 'react'
import { connect } from 'react-redux'
import Roll from './Roll'
import Init from '../components/Init'

import '../style/Controls.css';


class Controls extends Component {
  render() {
    const { initialized, isGameOver } = this.props.game 

    return (
      <div className="controls-container">
        <div className="controls">
          { 
            ( !initialized && <Init /> )
            ||
            ( isGameOver && <h3>Game Over!</h3> )
            ||
            <Roll />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ game }){
  return { game }
}

export default connect(mapStateToProps)(Controls)

