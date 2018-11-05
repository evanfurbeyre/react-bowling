import { combineReducers } from 'redux'
import PlayerReducer from './reduce_players'
import GameReducer from './reduce_game'

const rootReducer = combineReducers({
  game: GameReducer,
  players: PlayerReducer
});

export default rootReducer;
