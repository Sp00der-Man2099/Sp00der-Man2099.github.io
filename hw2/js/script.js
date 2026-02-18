document.querySelector("#chooseBtn").addEventListener("click", rpcGame);
//made a list of possible choices for the player
let choices = ["rock", "Rock", "ROCK",
                "paper", "Paper", "PAPER",
                "scissors", "Scissors", "SCISSORS"]
//some fun secret choices
let secretChoice = ["gun", "Gun, GUN"]


function rpcGame(){
    let playerChoice = document.querySelector("#playerChoice").value;
    if(!choices.includes(playerChoice) && !secretChoice.includes(playerChoice)){
        alert("🚨 INVALID CHOICE🚨 Its only three choices, cmon")
        return;
    }

    //makes a random choice for the computer
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    //print it to console for testing
    console.log(computerChoice);
    if(secretChoice.includes(playerChoice)){
        alert(("Damn, I forgot about that option. Congratulations Cowboy, you win!"))
    }
    



}