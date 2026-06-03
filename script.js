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
    console.log(`Player: ${humanChoice}\nComputer: ${computerChoice}`)
}

const humanChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);