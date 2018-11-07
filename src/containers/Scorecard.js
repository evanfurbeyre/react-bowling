import React, { Component } from 'react'
import Row from '../components/Row'
import { connect } from 'react-redux'

class Scorecard extends Component {

  render() {
    if (!this.props.game.initialized) return ''

    let titles = ['Name','1','2','3','4','5','6','7','8','9','10','Total'].map(i => {
      return <div key={i} className="cell">{i}</div>
    })
  
    let rows = this.props.game.players.map( p => {
      return (
        <Row 
          key={p.name} 
          player={p.name} 
          rolls={p.rolls} 
          scores={p.scores}
          total={p.total} />
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
