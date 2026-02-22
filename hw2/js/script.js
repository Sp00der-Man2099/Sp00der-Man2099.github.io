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
    document.querySelector("#imgResult").innerHTML = `<img src="img/wrong.gif" alt="wrong">`;
      endstate();
    return;
  }

  //secret Choices
  if (secretChoice.includes(playerChoice)) {
    document.querySelector("#result").textContent = "Damn, I forgot about that option... Congratulations Cowboy, you win!";
    document.querySelector("#imgResult").innerHTML = `<img src="img/gun.png" alt="gun">`;
    endstate();
    return; 
  } else if (pokimonChoice.includes(playerChoice)) {
    document.querySelector("#result").textContent = "Scizor is a strong pokimon, but it's not a choice in this game. Try again.";
    document.querySelector("#imgResult").innerHTML = `<img src="img/scizor.jpg" alt="scizor">`;
    endstate();
    return; 
  }

  if (playerChoice === computerChoice) {
    document.querySelector("#result").textContent = "IT'S A TIE!";
    document.querySelector("#imgResult").innerHTML = `<img src="img/doubleKO.gif" alt="draw">`;
    endstate();
    return;
  }

  //rock cases
  if (playerChoice === "rock") {
    document.querySelector("#imgResult").innerHTML = `<img src="img/the-rock.webp" alt="rock">`;
    if (computerChoice === "scissors") {
      document.querySelector("#result").textContent = "You win! Rock beats scissors";
    } else {
      document.querySelector("#result").textContent = "You lose! Paper beats rock";
    }
    endstate();
  }
  //paper cases
  else if (playerChoice === "paper") {
    document.querySelector("#imgResult").innerHTML = `<img src="img/michael-scott.jpg" alt="paper">`;
    if (computerChoice === "rock") {
      document.querySelector("#result").textContent = "You win! Paper beats rock";
    } else {
      document.querySelector("#result").textContent = "You lose! Scissors beats paper";
    }
    endstate();
  }
  //scissors cases
  else if (playerChoice === "scissors") {
    document.querySelector("#imgResult").innerHTML = `<img src="img/scissor-hands.jpg" alt="scissor hands">`;
    if (computerChoice === "paper") {
      document.querySelector("#result").textContent = "You win! Scissors beats paper";
    } else {
      document.querySelector("#result").textContent = "You lose! Rock beats scissors";
    }
    endstate();
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
  //resets the image result
  document.querySelector("#imgResult").innerHTML = "";
}
// this makes the choose button unclickable and make the try again button visible
function endstate(){
  document.querySelector("#chooseBtn").disabled = true;
    document.querySelector("#tryAgainButton").style.visibility = "visible";
}
