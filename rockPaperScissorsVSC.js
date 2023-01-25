function rockPaperScissors(playerGuess) {
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let playerCounter = 0;
    let computerCounter = 0;

    console.log('Game of Rock, Paper, Scissors')

    if (playerGuess === 'r' || playerGuess === 'rock') {
        playerGuess = rock;
    } else if (playerGuess === 'p' || playerGuess === 'paper') {
        playerGuess = paper;
    } else if (playerGuess === 's' || playerGuess === 'scissors') {
        playerGuess = scissors;
    } else {
        console.log('\x1b[91m Invalid input! Try again... \x1b[0m');
        return;
    }
    console.log(`You choose: ${playerGuess}`);

    let computerGuess = Math.floor(Math.random() * 3) + 1;

    if (computerGuess === 1) {
        computerGuess = rock;
    } else if (computerGuess === 2) {
        computerGuess = paper;
    } else if (computerGuess === 3) {
        computerGuess = scissors;
    }
    console.log(`The computer chooses: ${computerGuess}`);

    if (playerGuess === rock && computerGuess == scissors || playerGuess === scissors && computerGuess == paper
        || playerGuess === paper && computerGuess == rock) {
            playerCounter++;
        console.log('\x1b[92m You win! \x1b[0m');
    } else if (playerGuess === rock && computerGuess == paper || playerGuess === scissors && computerGuess == rock
        || playerGuess === paper && computerGuess == scissors) {
            computerCounter++;
        console.log('\x1b[93m You lose! \x1b[0m');
    } else {
        console.log('\x1b[35m This game was a draw! \x1b[0m');
    }
    console.log(`Score: ${playerCounter} - ${computerCounter}`);
    if (playerCounter === 3) {
        console.log('The game ended! The Player wins!');
    } else if (computerCounter === 3) {
        console.log('The game ended! The Computer wins!');
    }
}
rockPaperScissors('m');
console.log('-------------------------------');
rockPaperScissors('p');
console.log('-------------------------------');
rockPaperScissors('r');
console.log('-------------------------------');
rockPaperScissors('s');