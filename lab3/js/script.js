document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();
function shuffleQ1Choices(){
    let q1Choices = ["mew", "arceus", "bulbasaur"];
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
    let userAnswer2 = document.querySelector("#q2").value
    let userAnswer3 = document.querySelector("#dragonWeakness").value
    let userAnswer4 = document.querySelector("#pokemonNum").value
    let userAnswer5 = document.querySelector("input[name=q5]:checked").value
    let score = 0;
    //alert("Grading Quiz...")

    if(userAnswer1 == "arceus"){
        document.querySelector("#q1Text").style.backgroundColor = "lightgreen";
        score+=20;
    }else{
        document.querySelector("#q1Text").style.backgroundColor = "lightcoral";
    }

    if(userAnswer2 == "Kanto"){
        document.querySelector("#q2Text").style.backgroundColor = "lightgreen";
        score+=20;
    }else{
        document.querySelector("#q2Text").style.backgroundColor = "lightcoral";
    }

    if(userAnswer3 == "Fairy"){
        document.querySelector("#q3Text").style.backgroundColor = "lightgreen";
        score+=20;
    }else{
        document.querySelector("#q3Text").style.backgroundColor = "lightcoral";
    }

    if(userAnswer4 == 151){
        document.querySelector("#q4Text").style.backgroundColor = "lightgreen";
         score+=20;
    }else{
        document.querySelector("#q4Text").style.backgroundColor = "lightcoral";
    }

    if(userAnswer5 == "Charmander"){
        document.querySelector("#q5Text").style.backgroundColor = "lightgreen";
         score+=20;
    }else{
        document.querySelector("#q5Text").style.backgroundColor = "lightcoral";
    }

     if(userAnswer1 == "arceus" && userAnswer2 == "Kanto" && userAnswer3 == "Fairy" && userAnswer4 == 151 && userAnswer5 == "Charmander"){
        alert("Correct! Your score is " + score);
    } else{
        
        alert("wrong! Your score is " + score);
    }
}   