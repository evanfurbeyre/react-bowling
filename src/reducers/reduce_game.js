import { INIT_GAME } from "../actions";

export default function(state = null, action) {

  switch(action.type) {
  case INIT_GAME:
    return {
      initialized: false,
      players: ['Evan', 'Shmevan'],
      turn: 0,
      round: 0,
    }
  }
  return state
}