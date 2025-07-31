// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const hangman = ["H", "A", "N", "G", "M", "A", "N"];
const regex = /^[a-z]$/;
const wordsToGuess = ["python", "java", "swift", "javascript"];

let results = {
    wins: 0,
    losses: 0,
};
let exit = false;

console.log(hangman.join(" "));

let getLetter = (letters) => input(`
${letters}
Input a letter: `);

let replaceCharacter = (string, index, replacement) => string.substring(0, index) + replacement + string.substring(index + 1);

let play = () => {
    const wordToGuess = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    let letters = "-".repeat(wordToGuess.length);
    let guesses = [];
    let attemptsLeft = 8;
    while (attemptsLeft > 0) {
        if (letters === wordToGuess) {
            console.log(`\nYou guessed the word ${wordToGuess}!\nYou survived!`);
            attemptsLeft = 0;
            results.wins += 1;
            break;
        }
        let letter = getLetter(letters);

        if (!regex.test(letter)) {
            if (letter.length > 1 || letter === " " || letter === "") {
                console.log("Please, input a single letter.");
            }
            else {
                console.log("Please, enter a lowercase letter from the English alphabet.");
            }
            continue;
        }
        if (guesses.includes(letter)) {
            console.log("You've already guessed this letter.");
            continue;
        }

        if (!wordToGuess.includes(letter)) {
            console.log("That letter doesn't appear in the word.");
            guesses.push(letter);
            attemptsLeft--;
        } else {
            for (let index = 0; index < wordToGuess.length; index++) {
                if (letter === wordToGuess[index]) {
                    letters = replaceCharacter(letters, index, letter);
                    guesses.push(letter);
                }
            }
        }
    }
    if (letters !== wordToGuess) {
        console.log("\nYou lost!");
        results.losses += 1;
    }
}

let showResults = () => {
    console.log(`You won: ${results.wins} times.\nYou lost: ${results.losses} times.`);
}

while (!exit) {
    let option = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');
    if (option === "exit") {
        break;
    } else if (option === "results") {
        showResults();
    } else if (option === "play") {
        play();
    }
}
