import './style.css'

// function renderPage() {}
//update scores
//update names

// Need click event for adding Team Names
const inputElement = document.querySelector('input')
const paragraphElement = document.querySelector('h2')

function updateParagraph(event: Event) {
  const elementChanged = event.target

  if (elementChanged instanceof HTMLInputElement) {
    const currentInputValue = elementChanged.value
    if (paragraphElement?.innerText) {
      paragraphElement.innerText = currentInputValue
    }
  }
}
if (inputElement) {
  inputElement.addEventListener('input', updateParagraph)
}

// Need click event for adding point to score
// let addButton = document.querySelector('.add')
// let subButton = document.querySelector('.subtract')

let teamOneScore = document.querySelector('.team1 h3')
let teamTwoScore = document.querySelector('.team2 h3')

function handleClickButton(event: MouseEvent) {
  const thingClickedOn = event.target

  if (thingClickedOn instanceof HTMLElement) {
    // Team 1 - WHY NOT BELOW LINE?!?!?
    // if (thingClickedOn.classList.contains('team1')) {
    if (thingClickedOn.classList.contains('add')) {
      if (thingClickedOn.classList.contains('teamOne')) {
        if (teamOneScore?.textContent) {
          teamOneScore.textContent = String(
            Number(teamOneScore.textContent) + 1
          )
        }
      }
    }
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
    }
    // }

    // Team 2 - WHY NOT BELOW LINE?!?!?
    // if (thingClickedOn.classList.contains('team2')) {
    if (thingClickedOn.classList.contains('add')) {
      if (thingClickedOn.classList.contains('teamTwo')) {
        if (teamTwoScore?.textContent) {
          teamTwoScore.textContent = String(
            Number(teamTwoScore.textContent) + 1
          )
        }
      }
    }
    if (thingClickedOn.classList.contains('subtract')) {
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
    // }
  }
}

const scoreBoard = document.querySelector('main')

if (scoreBoard instanceof HTMLElement) {
  scoreBoard.addEventListener('click', handleClickButton)
}
