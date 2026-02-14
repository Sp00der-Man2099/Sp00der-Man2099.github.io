//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

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
    //updating attempt count
    let attemptCount = document.querySelector("#attemptCount");
    attemptCount.textContent = attempts + 1;
    console.log(("Playeer Guess: " + guess));
    if(guess < 1 || guess > 99){
        let feedback = document.querySelector("#feedback");
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "You guessed it! Your Win! 🏆";
        feedback.style.color = "green";
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7){
            feedback.textContent = "Sorry, you lose!😭 ";
            feedback.style.color = "red";
            gameOver();
        } else if(guess > randomNumber) {
            feedback.textContent = "Guess is too high!";
        
        
        } else {
            feedback.textContent = "Guess is too low!";
        }
    }
}
function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; //hides the button
    resetBtn.style.display = "inline"; //displays reeset button
}
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("Random number:" + randomNumber);

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing the Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //adding focus to textbox
    playerGuess.value = ""; //clearing the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; //clearing feedback

    let attemptCount = document.querySelector("#attemptCount");
    attemptCount.textContent = ""; //clearing attempt count

    //clearing previous guesses
    document.querySelector("#guesses").textContent = "";
}