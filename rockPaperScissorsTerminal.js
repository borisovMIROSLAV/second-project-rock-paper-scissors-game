function rockPaperScissors() {
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let computerGuess = Math.floor(Math.random() * 3) + 1;
    let playerGuess;

    if (computerGuess === 1) {
        computerGuess = rock;
    } else if (computerGuess === 2) {
        computerGuess = paper;
    } else if (computerGuess === 3) {
        computerGuess = scissors;
    }

    console.log('Game of Rock, Paper, Scissors');

    let recursiveReadline = function () {
        readline.question('Player choice: ', answer => {
            playerGuess = answer;

            if (playerGuess === 'rock') {
                playerGuess = rock;
            } else if (playerGuess === 'paper') {
                playerGuess = paper;
            } else if (playerGuess === 'scissors') {
                playerGuess = scissors;
            } else {
                console.log('Invalid input! Try again...');
            }
            if (playerGuess === rock && computerGuess == scissors || playerGuess === scissors && computerGuess == paper
                || playerGuess === paper && computerGuess == rock) {
                console.log('You win!');
                return readline.close();
            } else if (playerGuess === rock && computerGuess == paper || playerGuess === scissors && computerGuess == rock
                || playerGuess === paper && computerGuess == scissors) {
                console.log('You lose!');
                return readline.close();
            } else {
                console.log('This game was a draw!');
                recursiveReadline();
            }
        });
    }
    recursiveReadline();
}
rockPaperScissors();