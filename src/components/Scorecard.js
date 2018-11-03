import React from 'react'
import Header from './Header'
import Row from './Row'

export default function Scorecard({players, roll, round}) {

  let rows = players.map( p => {
    return (
      <Row 
        key={p} 
        player={p} 
        roll={roll} 
        round={round} />
    )
  });

  return (
    <div className="scorecard-container">
      <div className="scorecard">
        <Header />
        {rows}
      </div>
    </div>
  )
}
