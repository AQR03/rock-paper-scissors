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

function getPlayerChoice() {
    let choice = prompt('Type your selection here:');
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie');
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        playerScore++
        console.log('Congrats you won!');
    } else {
        computerScore++
        console.log('Sorry you lost. Try again.');
    }
    console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`)
    console.log(`Player: ${humanChoice}\nComputer: ${computerChoice}`)
}

let playerScore = 0
let computerScore = 0
const humanChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);