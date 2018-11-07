import { combineReducers } from 'redux'
import GameReducer from './reduce_game'

const rootReducer = combineReducers({
  game: GameReducer,
});

export default rootReducer;
