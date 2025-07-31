// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const hangman = ["H", "A", "N", "G", "M", "A", "N"];
const wordsToGuess = ["python", "java", "swift", "javascript"];
const wordToGuess = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
let attemptsLeft = 8;
let letters = "-".repeat(wordToGuess.length);

console.log(hangman.join(" "));

let getLetter = () => input(`
${letters}
Input a letter: `);

let replaceCharacter = (string, index, replacement) => string.substring(0, index) + replacement + string.substring(index + 1);

while (attemptsLeft > 0) {
    if (letters === wordToGuess) {
        console.log(`\n${letters}\nYou guessed the word!\nYou survived!`);
        attemptsLeft = 0;
        break;
    }
    let letter = getLetter();
    if (!wordToGuess.includes(letter)) {
        console.log("That letter doesn't appear in the word.");
        attemptsLeft--;
    } else {
        if (letters.includes(letter)) {
            console.log("No improvements.");
            attemptsLeft--;
        }
        for (let index = 0; index < wordToGuess.length; index++) {
            if (letter === wordToGuess[index]) {
                letters = replaceCharacter(letters, index, letter);
            }
        }
    }
}
if (letters !== wordToGuess) {
    console.log("\nYou lost!");
}
