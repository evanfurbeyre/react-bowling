import React, { Component } from 'react'

export default class Header extends Component {

  render() {

    const headerCellNames = [
      "Name", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Total"
    ]

    const headerCells = headerCellNames.map( name => {
      return <div key={name} className="cell">{name}</div>
    })

    return (
      <React.Fragment>
        {headerCells}
      </React.Fragment>
    )
  }
}
