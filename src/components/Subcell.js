import React from 'react'

export default function Subcell({ roll }) {
  return (
    <div className="subcell">
      <div className="subcell-value">
        { roll !== undefined ? roll : '' }
      </div>
    </div>
  )
}

