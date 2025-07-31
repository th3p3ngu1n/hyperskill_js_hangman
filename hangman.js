// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const hangman = ["H", "A", "N", "G", "M", "A", "N"];
const survivedMessage = "You survived!";
const lostMessage = "You lost!"
const wordsToGuess = ["python", "java", "swift", "javascript"];
const wordToGuess = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

console.log(hangman.join(" "));

let guess = () => input("Guess the word: ");
let checkGuess = (guess) => guess === wordToGuess ? survivedMessage : lostMessage;
console.log(checkGuess(guess()));
