//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);

//Global variables
let randomNumber;
let attempts = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
  
   //adding focus to textbox
   document.querySelector("#playerGuess").focus();
}
function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log(("Playeer Guess: " + guess));
    if(guess < 1 || guess > 99){
        let feedback = document.querySelector("#feedback");
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
}