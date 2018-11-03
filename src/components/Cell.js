import React from 'react'
import Subcell from './Subcell'


export default function Cell({subcells, value, display}) {
  return (
    <div className='cell'>
      <div className='subcells'>
        <Subcell display={display}/>
        <Subcell display={display}/>
      </div>
      {display ? value : ''}    
    </div>
  )
}
