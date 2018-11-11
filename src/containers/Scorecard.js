import React, { Component } from 'react'
import Row from '../components/Row'
import { connect } from 'react-redux'

import '../style/Scorecard.css';

class Scorecard extends Component {

  render() {
    if (!this.props.game.initialized) return ''

    // The first row, e.g. column headers
    let titles = ['Name','1','2','3','4','5','6','7','8','9','10','Total'].map(i => {
      return <div key={i} className="header-cell">{i}</div>
    })
  
    // Declare row for each player
    let rows = this.props.game.players.map( (p, i) => {
      return (
        <Row 
          key={i} 
          player={p.name} 
          rolls={p.rolls} 
          scoresWithBonuses={p.scoresWithBonuses} />
      )
    });

    return (
      <div className="scorecard-container">
        <div className="scorecard">
          {titles}
          {rows}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ game }){
  return { game }
}

export default connect(mapStateToProps)(Scorecard)
