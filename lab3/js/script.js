document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();
function shuffleQ1Choices(){
    let q1Choices = ["font-Color", "Color", "text-Color"];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);
    for(let i of q1Choices){
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);

    document.querySelector("#q1ChoicesDiv").append(labelElement);
    console.log(radioElement);
    }
}

function gradeQuiz(){
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    alert("Grading Quiz..." + userAnswer1)

    if(userAnswer1 == "Color"){
        //display CORRECT
    } else{
        //display WRONG
    }
}   