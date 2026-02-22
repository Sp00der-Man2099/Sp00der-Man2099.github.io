document.querySelector("#chooseBtn").addEventListener("click", rpcGame);
// this will reset the game
document.querySelector("#tryAgainButton").addEventListener("click", resetGame);
//made a list of possible choices for the player.
let choices = ["rock", "paper", "scissors"];
//some fun secret choices
let secretChoice = ["gun"];
let pokimonChoice = ["scizor"];

function rpcGame() {
  let playerInput = document.querySelector("#playerChoice").value;
  let playerChoice = playerInput.toLowerCase().trim();
  //generate computer choice
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  //for debugging
  console.log("Player:", playerChoice, "| Computer:", computerChoice);

 //making sure the user types something usable
  if (
    !choices.includes(playerChoice) &&
    !secretChoice.includes(playerChoice) &&
    !pokimonChoice.includes(playerChoice)
  ) {
    //alert("🚨 INVALID CHOICE🚨 \nIt's only three choices, cmon");
    document.querySelector("#result").textContent = "Invalid choice, try again."
    document.querySelector("#chooseBtn").disabled = true;
    document.querySelector("#tryAgainButton").style.visibility = "visible";
    return;
  }

  //secret Choices
  if (secretChoice.includes(playerChoice)) {
    alert("Damn, I forgot about that option. Congratulations Cowboy, you win!");
    return;
  } else if (pokimonChoice.includes(playerChoice)) {
    alert("Scizor is a strong pokimon, but it's not a choice in this game. You lose");
    return; 
  }

  if (playerChoice === computerChoice) {
    alert("IT'S A TIE!");
    return;
  }

  //rock cases
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      alert("You win! Rock beats scissors");
    } else {
      alert("You lose! Paper beats rock");
    }
  }
  //paper cases
  else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      alert("You win! Paper beats rock");
    } else {
      alert("You lose! Scissors beats paper");
    }
  }
  //scissors cases
  else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      alert("You win! Scissors beats paper");
    } else {
      alert("You lose! Rock beats scissors");
    }
  }
}

function resetGame() {
  //resets the input field
  document.querySelector("#playerChoice").value = "";
  //resets the result text
  document.querySelector("#result").textContent = "";
  //hides the try again button
  document.querySelector("#tryAgainButton").style.visibility = "hidden";
  //enables the choose button
  document.querySelector("#chooseBtn").disabled = false;
}
