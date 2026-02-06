document.querySelector("#guessButton").addEventListener("click", guess);

//global variables
let randomNumber = Math.floor(Math.random() * 99) + 1;
let guessCount = 0;

function guess() {
  // "value" is ONLY for input elements
  let userGuess = document.querySelector("#userGuess").value;
  //alert(userGuess);
  //document.querySelector("#userGuesses").textContent += userGuess + " ";
  document.querySelector("#userGuesses").textContent += `${userGuess} `;
  document.querySelector("#userGuesses").style.color = "red";
 
  if(userGuess > randomNumber){
    document.querySelector("#result").textContent = "Too High";
    document.querySelector("#result").style.color = "blue";
  } else if(userGuess < randomNumber) {
    document.querySelector("#result").textContent = "Too Low";
    document.querySelector("#result").style.color = "yellow";
  } else {
    document.querySelector("#result").textContent = "Correct";
    document.querySelector("#result").style.color = "green";
    if( guessCount < 7){
      alert("You guessed within 7 trys");
    } else {
      alert("you dumb");
    }
  }
  guessCount++;
}
