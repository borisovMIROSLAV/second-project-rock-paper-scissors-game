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

            if (playerGuess === 'rock' || playerGuess === 'r') {
                playerGuess = rock;
            } else if (playerGuess === 'paper' || playerGuess === 'p') {
                playerGuess = paper;
            } else if (playerGuess === 'scissors' || playerGuess === 's') {
                playerGuess = scissors;
            } else {
                console.log('\x1b[91m Invalid input! Try again... \x1b[0m');
                recursiveReadline();
            }
            if (playerGuess === rock && computerGuess == scissors || playerGuess === scissors && computerGuess == paper
                || playerGuess === paper && computerGuess == rock) {
                console.log('\x1b[92m You win! \x1b[0m');
                return readline.close();
            } else if (playerGuess === rock && computerGuess == paper || playerGuess === scissors && computerGuess == rock
                || playerGuess === paper && computerGuess == scissors) {
                    console.log('\x1b[93m You lose! \x1b[0m');
                return readline.close();
            } else if (playerGuess === rock && computerGuess == rock || playerGuess === scissors && computerGuess == scissors
                || playerGuess === paper && computerGuess == paper) {
                console.log('\x1b[35m This game was a draw! \x1b[0m');
                recursiveReadline();
            }
        });
    }
    recursiveReadline();
}
rockPaperScissors();