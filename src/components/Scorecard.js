import React, { Component } from 'react'
import Header from './Header'
import Row from './Row'
import Controls from './Controls'

export default class Scorecard extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: ""
    }
  }

  callback(params) {
    console.log('callback')
    this.setState({
      data: params
    })
  }

  render() {

    // let rows = this.state.players.map( p => <Row key={p} player={p} />);

    return (
      <div className="scorecard-container">
        <div className="scorecard">
          <Header />
          {/* {rows} */}
          <Row key={"Evan"} player={"Evan"} />
        </div>
        
        <Controls func={this.callback.bind(this)} />

      </div>
    )
  }
}
