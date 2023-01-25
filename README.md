# The "Rock - Paper - Scissors" Game

JavaScript implementation of the simple rock, paper, scissors game. The first to three points is the winner.

1. First I created a readline so the game can be played until a winner is decided and it is closed.
- https://nodejs.org/api/readline.html
2. I set constants for rock, paper and scissors in order to give them string value.
3. I set variables for computer and player gusses + counters for both.
4. Printed the game name as header.
5. Printed the optios for input (r=rock, p=paper, s=scissors).
6. Created a recursive function so the answer of the player can be re-entered until the game is closed.
7. Set the computer guess to a random (Math.floor and Math.random) from 1 to 3 and changed the values:
- 1 = rock, 2 = paper, 3 = scissors (they were given string values at step 2).
8. Read the input and print invalid if it is different than r, p or s and reset the try.
9. If the input(player choice) is r = rock, p = paper or s = scissors the will change their valued (they were given string values at step 2), else invalid.
10. Check if the player choice beats the computer choice, else if vice versa, else there is a draw.
11. Increase the count based on the outcome (only if the player or the computer wins, there is no score change when there is a draw).
12. Check if the player or the computer reached 3 points. If yes, closed the game.
13. Print the player and computer guesses, print the outcome of the current attempt, print if the player or the computer is the winner once 3 points are reached by either of the two.

Tested in Replit: https://replit.com/@MiroBB/RockPaperScissors#rockPaperScissors.js