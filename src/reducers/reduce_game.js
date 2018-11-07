import { INIT_GAME, ROLL, LAST_ROUND_ROLL } from "../actions";
import reduceRoll  from "./game/reduce_roll"
import reduceLastRoundRoll  from "./game/reduce_last_round_roll"


export default function(state = null, action) {

  let newState = Object.assign({}, state)
  const roll = parseFloat(action.payload);


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
        gameOver: false, 
        players: players,
        whichRoll: 0,         // first, second, or third roll (0,1,2)
        pinsUp: 10,    
        turn: 0,              // which players turn (0 to players.length-1)
        round: 0,             // 0 to 9
      }

    case ROLL:
      const roll = parseFloat(action.payload);
      return reduceRoll(newState, state, roll)
      
    case LAST_ROUND_ROLL:
      return reduceLastRoundRoll(newState, state, roll)

    default:
      return {
        initialized: false
      }
  }
}