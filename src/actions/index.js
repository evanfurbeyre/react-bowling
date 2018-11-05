export const INIT_GAME = 'INIT_GAME'
export const ROLL = 'ROLL'


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
