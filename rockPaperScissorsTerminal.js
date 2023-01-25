function rockPaperScissors() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let playerCounter = 0;
    let computerCounter = 0;
    let playerGuess;
    let computerGuess;

    console.log('Game of Rock, Paper, Scissors');
    console.log(`r = Rock   p = Paper   s = Scissors`);

    let recursiveReadline = function () {

        let computerGuess = Math.floor(Math.random() * 3) + 1;
        if (computerGuess === 1) {
            computerGuess = rock;
        }
        else if (computerGuess === 2) {
            computerGuess = paper;
        }
        else if (computerGuess === 3) {
            computerGuess = scissors;
        }

        readline.question('Player choice: ', answer => {
            playerGuess = answer;

            if (playerGuess === 'r') {
                playerGuess = rock;
            }
            else if (playerGuess === 'p') {
                playerGuess = paper;
            }
            else if (playerGuess === 's') {
                playerGuess = scissors;
            }
            else {
                console.log('\x1b[91m Invalid input! Try again... \x1b[0m');
                return recursiveReadline();
            }

            console.log(`You choose: ${playerGuess}`);
            console.log(`The computer chooses: ${computerGuess}`);

            if (playerGuess === rock && computerGuess == scissors || playerGuess === scissors && computerGuess == paper
                || playerGuess === paper && computerGuess == rock) {
                playerCounter++;
                console.log('\x1b[92m You win! \x1b[0m');
                console.log(`Score: ${playerCounter} - ${computerCounter}`);
                recursiveReadline();
            }
            else if (playerGuess === rock && computerGuess == paper || playerGuess === scissors && computerGuess == rock
                || playerGuess === paper && computerGuess == scissors) {
                computerCounter++;
                console.log('\x1b[93m You lose! \x1b[0m');
                console.log(`Score: ${playerCounter} - ${computerCounter}`);
                recursiveReadline();
            }
            else if (playerGuess === rock && computerGuess == rock || playerGuess === scissors && computerGuess == scissors
                || playerGuess === paper && computerGuess == paper) {
                console.log('\x1b[35m This game was a draw! \x1b[0m');
                console.log(`Score: ${playerCounter} - ${computerCounter}`);
                recursiveReadline();
            }

            if (playerCounter === 3) {
                console.log('The game ended! The Player wins!');
                return readline.close();
            }
            else if (computerCounter === 3) {
                console.log('The game ended! The Computer wins!');
                return readline.close();
            }
        });
    }
    recursiveReadline();
}
rockPaperScissors();