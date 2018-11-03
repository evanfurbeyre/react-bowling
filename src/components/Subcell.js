import React from 'react'

export default function Subcell({value, display}) {
  return (
    <div className="subcell">
      <div className="subcell-value">
        {display ? value : ''}
      </div>
    </div>
  )
}

