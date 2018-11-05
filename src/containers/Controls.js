import React, { Component } from 'react'
import { connect } from 'react-redux'
import Roll from '../components/Roll'
import Init from '../components/Init'

class Controls extends Component {

  render() {

    return (
      <div className="controls-container">
        <div className="controls">
          { 
            this.props.initialized 
            ? <Roll />
            : <Init />
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

