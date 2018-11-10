import React from 'react'

import '../style/Subcell.css';


export default function Subcell({ roll }) {
  return (
    <div className="subcell">
      <div className="subcell-value">
        { roll !== undefined ? roll : '' }
      </div>
    </div>
  )
}

