import React from 'react'

export default function NameInput({ playerName }) {
  return (
    <div>
      <span>Player </span>
      <input 
        type='text' 
        value={playerName}
        onChange={console.log('here')} />
    </div>
  )
}
