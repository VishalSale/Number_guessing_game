var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = 0;

function checkGuess() {
var guess = document.getElementById("guess").value;
var message = document.getElementById("message");

if (guess < 1 || guess > 100) {
  message.innerText = "Please enter a number between 1 and 100.";
  return;
}

guesses++;

if (guess == randomNumber) {
  message.innerText = "Congratulations! You guessed the number in " + guesses + " guesses.";
  disableInput();
} else if (guess < randomNumber) {
  message.innerText = "Too low! Guess higher.";
} else {
  message.innerText = "Too high! Guess lower.";
}
}

function newGame() {
randomNumber = Math.floor(Math.random() * 100) + 1;
guesses = 0;
document.getElementById("message").innerText = "";
document.getElementById("guess").value = "";
document.getElementById("guess").disabled = false;
}

function disableInput() {
document.getElementById("guess").disabled = true;
}