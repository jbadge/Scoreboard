import './style.css'

// Adding and changing Team Names
let teamOneName = 'Team 1'
let teamTwoName = 'Team 2'
const teamOneInputElement = document.querySelector(
  '.team1 input'
) as HTMLInputElement
const teamOneOutputElement = document.querySelector(
  '.team1 h2'
) as HTMLHeadingElement
const teamTwoInputElement = document.querySelector(
  '.team2 input'
) as HTMLInputElement
const teamTwoOutputElement = document.querySelector(
  '.team2 h2'
) as HTMLHeadingElement

function updateTeamOneOutput(event: Event) {
  const elementChanged = event.target

  if (elementChanged instanceof HTMLInputElement) {
    const currentInputValue = elementChanged.value
    teamOneName = currentInputValue
  }
  render()
}

function updateTeamTwoOutput(event: Event) {
  const elementChanged = event.target

  if (elementChanged instanceof HTMLInputElement) {
    const currentInputValue = elementChanged.value
    teamTwoName = currentInputValue
  }
  render()
}

function render() {
  if (teamOneOutputElement) {
    teamOneOutputElement.innerText = teamOneName
  }
  if (teamTwoOutputElement) {
    teamTwoOutputElement.innerText = teamTwoName
  }
}

// Changing Score
let teamOneScore = document.querySelector('.team1 h3')
let teamTwoScore = document.querySelector('.team2 h3')
let whoWon = document.querySelector('h1')

// Click event for adding point to score
function handleClickButton(event: MouseEvent) {
  const thingClickedOn = event.target

  if (thingClickedOn instanceof HTMLElement) {
    // ADD
    if (thingClickedOn.classList.contains('add')) {
      if (
        thingClickedOn.classList.contains('teamOne') &&
        teamOneScore?.textContent !== '21'
      ) {
        if (teamOneScore?.textContent) {
          teamOneScore.textContent = String(
            Number(teamOneScore.textContent) + 1
          )
        }
      }
      if (
        thingClickedOn.classList.contains('teamTwo') &&
        teamTwoScore?.textContent !== '21'
      ) {
        if (teamTwoScore?.textContent) {
          teamTwoScore.textContent = String(
            Number(teamTwoScore.textContent) + 1
          )
        }
      }
    }

    // SUBTRACT
    if (thingClickedOn.classList.contains('subtract')) {
      if (
        thingClickedOn.classList.contains('teamOne') &&
        teamOneScore?.textContent !== '0'
      ) {
        if (teamOneScore?.textContent) {
          teamOneScore.textContent = String(
            Number(teamOneScore.textContent) - 1
          )
        }
      }
      if (
        thingClickedOn.classList.contains('teamTwo') &&
        teamTwoScore?.textContent !== '0'
      ) {
        if (teamTwoScore?.textContent) {
          teamTwoScore.textContent = String(
            Number(teamTwoScore.textContent) - 1
          )
        }
      }
    }
  }
  if (teamOneScore?.textContent === '21') {
    if (whoWon instanceof HTMLHeadingElement) { 
      whoWon.textContent = `Congratulations ${teamOneName}!`
      return
  } 
}
  if (teamTwoScore?.textContent === '21') {
    if (whoWon instanceof HTMLHeadingElement) { 
    whoWon.textContent = `Congratulations ${teamTwoName}!`
  }
}
}


function reset() {
  if (teamOneScore instanceof HTMLHeadingElement) {
    teamOneScore.textContent = '0'
  } 
  if (teamTwoScore instanceof HTMLHeadingElement) {
    teamTwoScore.textContent = '0'
  }
}

if (teamOneInputElement) {
  teamOneInputElement.addEventListener('input', updateTeamOneOutput)
}
if (teamTwoInputElement) {
  teamTwoInputElement.addEventListener('input', updateTeamTwoOutput)
}

const scoreBoard = document.querySelector('main')

if (scoreBoard instanceof HTMLElement) {
  scoreBoard.addEventListener('click', handleClickButton)
}

document.getElementById('reset-button')?.addEventListener('click', reset)
