export default function roll_reduce(newState, state, roll) {
  newState = updateScores(newState, state, roll)
  newState = updateTurn(newState, state, roll)
  return newState

  // Update roll/turn/round
  function updateTurn(newState, state, roll) {
    const { whichRoll, turn, round, players } = state
    const roundsRolls = players[turn].rolls[round]

    // Declare roll booleans
    const isFirstRoll = whichRoll === 0
    const isSecondRoll = whichRoll === 1
    const isThirdRoll = whichRoll === 2
    const isNextTurnNewRound = turn === players.length - 1
    const strike = roll === 10
    const spare = isSecondRoll && roundsRolls[0] + roundsRolls[1] === 10
    const firstRollStrike = roundsRolls.length && roundsRolls[0]

    // Set state boolean that controls third roll
    const doesPlayerGetThirdRoll = (firstRollStrike) || (isSecondRoll && spare)
    newState.players[turn].getsThirdRoll = doesPlayerGetThirdRoll

    // 1st Roll Logic
    if ( isFirstRoll ) {     
      newState.whichRoll = 1
      if (strike) {
        newState.pinsUp = 10
      } else {
        newState.pinsUp -= roll
      }
    }
    
    // 2nd roll logic
    if ( isSecondRoll ) {
      newState.whichRoll = 2

      if (spare || strike ) {
        newState.pinsUp = 10
      } else if (doesPlayerGetThirdRoll) {
        newState.pinsUp -= roll
      }
      
      if (!doesPlayerGetThirdRoll) {
        newState.turn = isNextTurnNewRound ? 0 : turn + 1
        newState.round = isNextTurnNewRound ? round + 1 : round
      }
    }

    // 3rd roll logic
    if ( isThirdRoll && doesPlayerGetThirdRoll ) {
      newState.whichRoll = 3
    } 

    if ( isNextTurnNewRound && round > 9) {
      newState.isGameOver = true
    }

    return newState
  }

  // Update scores and apply bonuses
  function updateScores(newState, state, roll) {
    const { turn, round, players } = state

    // Add roll to player's rolls array
    newState.players[turn].rolls[round].push(roll)

    // Update score
    const rolls = players[turn].rolls[round]
    const rollSum = rolls.reduce((x, y) => x + y, 0)
    newState.players[turn].scores[round] = rollSum

    // Update scoresWithBonuses
    newState.players[turn].scoresWithBonuses[round] = rollSum  // start with roll sum
    newState = updateScoresWithBonuses(newState)               // then apply bonuses

    // Update total
    let scoreSum = state.players[turn].scoresWithBonuses.reduce((a, b) => a + b, 0)
    newState.players[turn].total = scoreSum
  
    return newState
  }

  /*
  Bowling rules state that a strike will cause the next two rolls
  to be added to the current round's score, and the next one roll for 
  a spare. This function will look back 2 rounds, and apply
  bonuses to those rounds accordingly.
  */
  function updateScoresWithBonuses(newState) {

    const { whichRoll, turn, round, players } = newState
    const allRolls = players[turn].rolls
    const roll = allRolls[round][whichRoll]
    const isFirstRoll = whichRoll === 0

    // Array containing strikes and spares for each round
    const strikesAndSpares = allRolls.map( r => {
      if (r[0] === 10)        return 'strike'
      if (r[0] + r[1] === 10) return 'spare'
      return null
    })

    // Set boolean values for previous strikes and spares
    let prevRoundSpare, prevRoundStrike, prevPrevRoundStrike

    if (round > 0) {
      prevRoundSpare = strikesAndSpares[round-1] === 'spare'
      prevRoundStrike = strikesAndSpares[round-1] === 'strike'
    }

    if (round > 1) {
      prevPrevRoundStrike = strikesAndSpares[round-2] === 'strike'
    }

    // Apply bonuses - this code runs for both first and second rolls
    // a spare bonus can only apply to the next rounds first roll
    if ( prevRoundSpare && isFirstRoll ) { 
      newState.players[turn].scoresWithBonuses[round-1] += roll
    }

    // A bonus is applied for the next two rolls
    //  (case non-strike): both rolls from current round applied to prev score
    //  (case strike): bonus applied, and a bonus will apply again next round 
    if ( prevRoundStrike ) { 
      newState.players[turn].scoresWithBonuses[round-1] += roll

      // (case back-to-back strikes), a bonus is applied 2 rounds back
      if ( prevPrevRoundStrike ) {
        newState.players[turn].scoresWithBonuses[round-2] += roll
      }
    }

    return newState
  }



}