document.querySelector("#guessButton").addEventListener("click", guess);
// this will reset the game
document.querySelector("#tryAgainButton").addEventListener("click", resetGame);
//global variables
//this makes the random b=nmber between 1 & 99
let randomNumber = Math.floor(Math.random() * 99) + 1;
let guessCount = 0;
let numberOfWins = 0;
let numberOfLosses = 0;

//shows the random numer in the console for testing purposes
console.log(randomNumber);

//sets the score text invisible
document.querySelector("#scoreboard").style.visibility = "hidden";

function guess() {
  //makes the score visible after the first game
  if (numberOfLosses > 0 || numberOfWins > 0) {
    document.querySelector("#scoreboard").style.visibility = "visible";
  }
  // "value" is ONLY for input elements
  let userGuess = document.querySelector("#userGuess").value;
  //alert(userGuess);
  //if the number is too big or too small it will exit the function
  if (userGuess < 1 || userGuess > 99) {
    alert("🚨INVALID NUMBER🚨");
    return;
  }
  //document.querySelector("#userGuesses").textContent += userGuess + " ";
  document.querySelector("#userGuesses").textContent += `${userGuess} `;
  document.querySelector("#userGuesses").style.color = "red";
  //if the user guess is too high
  if (userGuess > randomNumber) {
    document.querySelector("#result").textContent = "Too High";
    document.querySelector("#result").style.color = "orange";
    //if the user guess is too low
  } else if (userGuess < randomNumber) {
    document.querySelector("#result").textContent = "Too Low";
    document.querySelector("#result").style.color = "blue";
    //if the user got it within 7 trys
  } else if (userGuess == randomNumber && guessCount <= 7) {
    document.querySelector("#result").textContent = "Correct";
    document.querySelector("#result").style.color = "green";
    alert("You guessed within 7 trys Congrats! 🎉\nYou Win! 🏆");
    //makes the button unclickable
    document.querySelector("#guessButton").disabled = true;
    numberOfWins++;
    document.querySelector("#winsCount").textContent = numberOfWins;
    document.querySelector("#tryAgainButton").style.visibility = "visible";
  }
  guessCount++;

  if (guessCount === 7 && userGuess != randomNumber) {
    document.querySelector("#result").textContent = `You Lost 😭 The Number Was  ${randomNumber}`;
    document.querySelector("#result").style.color = "red";
    document.querySelector("#guessButton").disabled = true;
    numberOfLosses++;
    document.querySelector("#lossesCount").textContent = numberOfLosses;
    // makes the try again button visible
    document.querySelector("#tryAgainButton").style.visibility = "visible";
  }
  
}

function resetGame() {
  //resets the random number
  randomNumber = Math.floor(Math.random() * 99) + 1;
  //for testing purposes
  console.log(randomNumber);
  //reesets the guess count
  guessCount = 0;
  //resets the text content of the previous guesses and result
  document.querySelector("#userGuesses").textContent = "";
  document.querySelector("#result").textContent = "";
  //makes the guess button clickable again
  document.querySelector("#guessButton").disabled = false;
  //hides the try again button again
  document.querySelector("#tryAgainButton").style.visibility = "hidden";
}
