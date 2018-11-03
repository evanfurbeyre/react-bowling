import React from 'react'
import Subcell from './Subcell'


export default function Cell({subcells, value, display}) {
  return (
    <div className='cell'>
      <div className='subcells'>
        <Subcell value={subcells[0]}/>
        <Subcell value={subcells[1]}/>
        <Subcell value={subcells[2]}/>
      </div>
      {display ? value : ''}
    </div>
  )
}
