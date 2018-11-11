import { INIT, ROLL, RESET, CLEAR } from "../actions";
import reduceRoll  from "./game/reduce_roll"
import reduceLastRoundRoll  from "./game/reduce_last_round_roll"


export default function(state = null, action) {

  let newState = Object.assign({}, state)

  switch(action.type) {
    case INIT:

      const players = action.payload.players.map( player => {
        return { 
          name: player,
          rolls: [[]],
          scores: [],
          scoresWithBonuses: [],
        }
      })

      return {
        initialized: true,
        isGameOver: false, 
        players: players,
        whichRoll: 0,         // first, second, or third roll (0,1,2)
        pinsUp: 10,    
        turn: 0,              // which players turn (0 to players.length-1)
        round: 0,             // 0 to 9
      }

    case ROLL:
      const roll = parseFloat(action.payload)
      const isLastRound = state.round === 9

      if (isLastRound) {
        return reduceLastRoundRoll(newState, state, roll)
      } else {
        return reduceRoll(newState, state, roll)
      } 

    case RESET:
      return {
        initialized: false,
        isGameOver: false, 
        players: [],
        whichRoll: 0,         // first, second, or third roll (0,1,2)
        pinsUp: 10,    
        turn: 0,              // which players turn (0 to players.length-1)
        round: 0,             // 0 to 9
      }
      
    case CLEAR:
      newState.players.map( player => player.rolls = [[]] )
      newState.players.map( player => player.scores = [] )
      newState.players.map( player => player.scoresWithBonuses = [] )
      newState.whichRoll = 0
      newState.pinsUp = 10
      newState.turn = 0
      newState.round = 0
      return newState


    default:
      return {
        initialized: false
      }
  }
}