import { INIT_GAME, ROLL } from "../actions";
import reduceRoll  from "./game/reduce_roll"
import reduceLastRoundRoll  from "./game/reduce_last_round_roll"


export default function(state = null, action) {

  switch(action.type) {
    case INIT_GAME:

      const players = action.payload.players.map( player => {
        return { 
          name: player,
          rolls: [[]],
          scores: [],
          scoresWithBonuses :[],
          total: 0
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
      let newState = Object.assign({}, state)
      const roll = parseFloat(action.payload)
      const isLastRound = state.round === 9
      const isGameOver = state.round > 9

      if (isLastRound) {
        return reduceLastRoundRoll(newState, state, roll)
      } else if (!isGameOver) {
        return reduceRoll(newState, state, roll)
      } else {
        return newState
      }

    default:
      return {
        initialized: false
      }
  }
}