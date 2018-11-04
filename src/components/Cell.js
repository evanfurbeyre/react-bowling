import React from 'react'
import Subcell from './Subcell'

export default function Cell({ score, rolls }) {
  return (
    <div className='cell'>
      <div className='subcells'>
        <Subcell roll={rolls[0] || ''}/>
        <Subcell roll={rolls[1] || ''}/>
      </div>
      { score || ''}
    </div>
  )
}
