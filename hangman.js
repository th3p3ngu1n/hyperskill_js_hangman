// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const hangman = ["H", "A", "N", "G", "M", "A", "N"];
console.log(hangman.join(" "));
console.log("The game will be available soon.");
const wordToGuess = "python";
const survivedMessage = "You survived!";
const lostMessage = "You lost!"
guess = input("Guess the word: ")
console.log(guess === wordToGuess ? survivedMessage : lostMessage);
