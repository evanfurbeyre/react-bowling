

import React from 'react'
import Cell from './Cell'
import TenthCell from './TenthCell'

export default function Row({ player, rolls, scores, total }) {

  // keys for the 9 standard cells, [0,1,2,...,8]
  let cellIds = [...Array(9).keys()].map( i => i);

  return (
    <React.Fragment>
      <div className="cell player-name">{ player }</div>

      {cellIds.map( i => <Cell // first 9 cells
        key={i} 
        score={ scores[i] || ''}
        rolls={ rolls[i] || ''} />
      )}
      
      <TenthCell 
        score={ scores[9] || ''} 
        rolls={ rolls[9] || ''} />

      <div className="cell round-total">{ total }</div>
    </React.Fragment>
  )
}
