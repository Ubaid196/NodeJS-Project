import randomInteger from "random-int"; // we use it for random input if user is Computer
import prompSync from "prompt-sync";

//The available choices
let choices = ["rock", "paper", "scissors"];

//messages shown to user
let userPrompt = "0 for rock, 1 for paper, or 2 for scissors";
let outcome = "ready to play.";

//computer chooses randomly //thats y installed randomInt package
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

//prompt for user input
const prompt = prompSync();
let userInput = prompt(userPrompt);
let userChoice = choices[userInput];

if (computerChoice === userChoice) {
  outcome = "Draw";
} else if (computerChoice === "rock" && userChoice === "paper") {
  outcome = "Player Wins";
} else if (computerChoice === "rock" && userChoice === "scissors") {
  outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === "rock") {
  outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === "scissors") {
  outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoice === "rock") {
  outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoice === "paper") {
  outcome = "Computer Wins";
} else {
  outcome = "Invalid entry. Please try again."
}

console.log("Computer choses " + computerChoice);
console.log("Player choses " + userChoice);
console.log(outcome);
