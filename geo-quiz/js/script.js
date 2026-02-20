document.querySelector("button").addEventListener("click", gradeQuiz);

function isFormValid(){
    let isValid = true;
    if(document.querySelector("#q1").value == ""){
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
    }
    return isValid;
}

function gradeQuiz(){
 console.log("Grading quiz…");
 //reset valiation feedback
 document.querySelector("#validationFdbk").innerHTML = "";
if(!isFormValid()){
    return;
}
//variables
let score = 0;
 let q1Response = document.querySelector("#q1").value.toLowerCase();
 console.log(q1Response);


 //grading question 
 if(q1Response == "sacramento"){
    document.querySelector("#q1Feedback").innerHTML = "Correct!";
    document.querySelector("#q1Feedback").className = "bg-success text-white";
    document.querySelector("#markImg1").innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
    score += 20;
 } else {
    document.querySelector("#q1Feedback").innerHTML = "Incorrect!";
    document.querySelector("#q1Feedback").className = "bg-warning text-white";
    document.querySelector("#markImg1").innerHTML = "<img src='img/xmark.png' alt='xmark'>";
 }
 document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;

}
