'use strict';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let randomNumbers = Math.floor(Math.random() * 100) + 1; // Exm => 0.723456 * 100 = 72.3456 => 72 Random Number
let attempts = 0;

console.log(Math.floor(Math.random()));
console.log(randomNumbers);

function guessGames() {
    rl.question("Enter Numbers: ", (input) => {
        const guess = parseInt(input);

        attempts++;

        if (guess === randomNumbers) {
            console.log(`Successfully ${randomNumbers} After: ${attempts} Attempts`);
            rl.close();

        } else if (guess < randomNumbers) {
            console.log(`Number Biggest Than.`);
            guessGames();
        }
        else {
            console.log(`Number Smallest Than.`);
            guessGames();
        }
    });

}

guessGames();