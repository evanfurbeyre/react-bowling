export const INIT_GAME = 'INIT_GAME'
export const ROLL = 'ROLL'
// export const LAST_ROUND_ROLL = 'LAST_ROUND_ROLL'

export function initGame(data) {
  return {
    type: INIT_GAME,
    payload: data
  }
}

export function roll(data) {
  return {
    type: ROLL,
    payload: data
  }
}

// export function lastRoundRoll(data) {
//   return {
//     type: LAST_ROUND_ROLL,
//     payload: data
//   }
// }