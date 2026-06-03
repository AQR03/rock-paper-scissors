function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        console.log('Rock');
    } else if (choice === 1) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
}

function getPlayerChoice() {
    let choice = prompt('Type your selection here:');
    console.log(choice);
}
