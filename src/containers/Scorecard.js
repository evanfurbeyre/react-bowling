import React, { Component } from 'react'
import Row from '../components/Row'
import { connect } from 'react-redux'


class Scorecard extends Component {

  render() {

    let titles = ['Name','1','2','3','4','5','6','7','8','9','10','Total'].map(i => {
      return <div key={i} className="cell">{i}</div>
    })
  
    let rows = this.props.players.map( p => {
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


function mapStateToProps({ players }){
  return { players }
  }

export default connect(mapStateToProps)(Scorecard)
