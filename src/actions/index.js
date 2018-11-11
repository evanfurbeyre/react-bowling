export const INIT= 'INIT'
export const ROLL = 'ROLL'
export const RESET = 'RESET'
export const CLEAR = 'CLEAR'


export function initGame(data) {
  return {
    type: INIT,
    payload: data
  }
}

export function roll(data) {
  return {
    type: ROLL,
    payload: data
  }
}

export function resetGame(data) {
  return {
    type: RESET,
    payload: data
  }
}

export function clearScores(data) {
  return {
    type: CLEAR,
    payload: data
  }
}