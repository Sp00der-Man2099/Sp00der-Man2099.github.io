//record Start Time as soon as the file loads
const startTime = Date.now();

document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();

function shuffleQ1Choices() {
    let q1Choices = ["mew", "arceus", "bulbasaur"];
    q1Choices = _.shuffle(q1Choices);
    
    for (let i of q1Choices) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(radioElement);

        document.querySelector("#q1ChoicesDiv").append(labelElement);
    }
}

//reusable functions to show images and change background colors
function rightAnswer(index) {
    document.querySelector(`#q${index}Text`).style.backgroundColor = "lightgreen";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
}

function wrongAnswer(index) {
    document.querySelector(`#q${index}Text`).style.backgroundColor = "lightcoral";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
}

function gradeQuiz() {
    //reset validation message
    document.querySelector("#validationFdbk").innerHTML = "";

    //validate that the user actually selected something for Q1 and Q5
    let q1Checked = document.querySelector("input[name=q1]:checked");
    let q5Checked = document.querySelector("input[name=q5]:checked");
    let q2Value = document.querySelector("#q2").value;
    let q3Value = document.querySelector("#dragonWeakness").value;
    let q4Value = document.querySelector("#pokemonNum").value;

    if (!q1Checked || !q5Checked || q2Value === "" || q3Value === "" || q4Value === "") {
        document.querySelector("#validationFdbk").innerHTML = "Please answer all questions before submitting!";
        return; //stops the function here so it doesn't crash
    }

    //variables
    let score = 0;
    let userAnswer1 = q1Checked.value;
    let userAnswer2 = q2Value.toLowerCase(); // Convert to lowercase to make it easier to grade
    let userAnswer3 = q3Value;
    let userAnswer4 = q4Value;
    let userAnswer5 = q5Checked.value;

    //grading Q1
    if (userAnswer1 == "arceus") {
        rightAnswer(1);
        score += 20;
    } else {
        wrongAnswer(1);
    }

    //grading Q2 (Checking "kanto" since we converted the answer to lowercase)
    if (userAnswer2 == "kanto") {
        rightAnswer(2);
        score += 20;
    } else {
        wrongAnswer(2);
    }

    //grading Q3
    if (userAnswer3 == "Fairy") {
        rightAnswer(3);
        score += 20;
    } else {
        wrongAnswer(3);
    }

    //grading Q4
    if (userAnswer4 == 151) {
        rightAnswer(4);
        score += 20;
    } else {
        wrongAnswer(4);
    }

    //grading Q5
    if (userAnswer5 == "Charmander") {
        rightAnswer(5);
        score += 20;
    } else {
        wrongAnswer(5);
    }

    //display Final Score 
    document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;

    //calculate and display time taken
    const endTime = Date.now();
    let timeTakenInSeconds = (endTime - startTime) / 1000;
    document.querySelector("#timeTaken").innerHTML = `Time Taken: ${timeTakenInSeconds.toFixed(2)} seconds`;

    //display special message if the get a high score
    if(score >= 80){
        document.querySelector("#congrats").innerHTML = "Congratulations! You Know your Pokemon! 🏆";
    }

}