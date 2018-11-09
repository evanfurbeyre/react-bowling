

import React from 'react'
import Cell from './Cell'
import TenthCell from './TenthCell'

export default function Row({ player, rolls, scoresWithBonuses }) {

  // keys for the 9 standard cells, [0,1,2,...,8]
  let cellIds = [...Array(9).keys()].map( i => i);

  const totals = scoresWithBonuses.map( (i,j) => {
    return scoresWithBonuses.slice(0,j+1).reduce((x,y) => x+y,0)
  })

  const total = totals[totals.length-1]
  
  return (
    <React.Fragment>
      <div className="cell player-name">{ player }</div>

      {cellIds.map( i => <Cell // first 9 cells
        key={i} 
        score={ totals[i] }
        rolls={ rolls[i] || ''} />
      )}
      
      <TenthCell 
        score={ totals[9] } 
        rolls={ rolls[9] || ''} />

      <div className="cell round-total">{ total }</div>
    </React.Fragment>
  )
}
