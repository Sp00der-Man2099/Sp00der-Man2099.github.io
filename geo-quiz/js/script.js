document.querySelector("button").addEventListener("click", gradeQuiz);

var score = 0;
var attempts = localStorage.getItem("total_attempts");

function dispalyQ4Choices() {
  let q4ChoicesArray = ["Main", "Rhode Island", "Maryland", "Delaware"];
  q4ChoicesArray = _.shuffle(q4ChoicesArray);
  for (let i = 0; i < q4ChoicesArray.length; i++) {
    document.querySelector("#q4Choices").innerHTML +=
      ` <input type="radio" name="q4" id= "${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`;
  }
}
dispalyQ4Choices();

function isFormValid() {
  let isValid = true;
  if (document.querySelector("#q1").value == "") {
    isValid = false;
    document.querySelector("#validationFdbk").innerHTML =
      "Question 1 was not answered";
  }
  return isValid;
}
function rightAnswer(index) {
  document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
  document.querySelector(`#q${index}Feedback`).className =
    "bg-success text-white";
  document.querySelector(`#markImg${index}`).innerHTML =
    "<img src='img/checkmark.png' alt='Checkmark'>";
  score += 20;
}
function wrongAnswer(index) {
  document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
  document.querySelector(`#q${index}Feedback`).className =
    "bg-warning text-white";
  document.querySelector(`#markImg${index}`).innerHTML =
    "<img src='img/xmark.png' alt='xmark'>";
}

function gradeQuiz() {
  //console.log("Grading quiz…");
  //reset valiation feedback
  document.querySelector("#validationFdbk").innerHTML = "";
  if (!isFormValid()) {
    return;
  }
  //variables
  score = 0;
  let q1Response = document.querySelector("#q1").value.toLowerCase();
  let q2Response = document.querySelector("#q2").value;
  let q4Response = document.querySelector("input[name=q4]:checked").value;

  console.log(q1Response);
  console.log(q2Response);
  console.log(q4Response);

  //grading question 1
  if (q1Response == "sacramento") {
    rightAnswer(1);
  } else {
    wrongAnswer(1);
  }
  //grading question 2
  if (q2Response == "mo") {
    rightAnswer(2);
  } else {
    wrongAnswer(2);
  }
  //grading question 3
  if (
    document.querySelector("#Jefferson").checked &&
    document.querySelector("#Roosevelt").checked &&
    !document.querySelector("#Jackson").checked &&
    !document.querySelector("#Franklin").checked
  ) {
    rightAnswer(3);
  } else {
    wrongAnswer(3);
  }

  //grading question 4
  if (q4Response == "Rhode Island") {
    rightAnswer(4);
  } else {
    wrongAnswer(4);
  }

  document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
  document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
  localStorage.setItem("total_attempts", attempts);
  if(score >= 80){
    document.querySelector("#congrats").innerHTML = "Well Done! 🏆";
  } else {
    //makes the score red if the score is less than 80
    document.querySelector("#totalScore").className = "text-danger";
  }
}
