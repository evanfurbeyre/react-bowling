import React from 'react'
import Subcell from './Subcell'


export default function Cell({ score, rolls }) {

  let r1 = rolls[0], r2 = rolls[1], r3 = rolls[3]

  if (r1 === 10) r1 = 'X'
  if (r2 === 10) r2 = 'X'
  if (r3 === 10) r3 = 'X'

  if (r1 + r2 === 10) r2 = '/'
  if (r2 + r3 === 10) r3 = '/'
 
  return (
    <div className='cell'>
      <div className='subcells'>
        <Subcell roll={r1}/>
        <Subcell roll={r2}/>
        <Subcell roll={r3}/>
      </div>
      { score || ''}
    </div>
  )
}