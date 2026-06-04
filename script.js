function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice(choice) {
    return choice;
}

function playRound(choice) {
    const humanChoice = getPlayerChoice(choice);
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        resultContainer.textContent = 'It\'s a tie!';
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        playerScore++
        resultContainer.textContent = 'Congrats you won!';
    } else {
        computerScore++
        resultContainer.textContent = 'Sorry you lost. Try again';
    }
    scoresContainer.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    choicesContainer.textContent = `Player: ${humanChoice}\nComputer: ${computerChoice}`;
}

let playerScore = 0
let computerScore = 0
let count = 0
const resultContainer = document.getElementById('results')
const choicesContainer = document.getElementById('choices')
const scoresContainer = document.getElementById('scores')
const btn = document.getElementById('play')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));