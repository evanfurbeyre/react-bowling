import { combineReducers } from 'redux'
import PlayerReducer from './reduce_players'

const rootReducer = combineReducers({
  players: PlayerReducer
});

export default rootReducer;
