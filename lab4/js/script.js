let zipElement = document.querySelector("#zipCode");
let cityElement = document.querySelector("#city");
let stateElement = document.querySelector("#state");
let latElement = document.querySelector("#lat");
let longElement = document.querySelector("#long");
let countyElement = document.querySelector("#countyCode");
let passwordElement = document.querySelector("#passwordInput");
let passwordComfirmElement = document.querySelector("#passwordComfirm")
let usernameElement = document.querySelector("#usernameInput");
let submitBtnElement = document.querySelector("#submit")

zipElement.addEventListener("change", displayCity);
usernameElement.addEventListener("change", displayUsername);
stateElement.addEventListener("change", displayCounties);
submitBtnElement.addEventListener("click", displaySubmit);
//focus shows the suggest password the moment they click the box
passwordElement.addEventListener("focus", displayPassword);
passwordComfirmElement.addEventListener("focus", displayPasswordComfirm)
//real time validation thanks to input
// passwordElement.addEventListener("input", displayPassword);
// passwordComfirmElement.addEventListener("input", displayPasswordComfirm);

displayStates();
async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);

        }
        //that way it loads counties after loading states
        displayCounties();

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch    
}
displayCounties();
async function displayCounties() {
    let selectedState = stateElement.value;
    //safty check
    if (!selectedState) return;

    let url = "https://csumb.space/api/countyListAPI.php?state=" + selectedState;
    try {
        //fetch the data from the api
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        let data = await response.json();

        console.log("County Data: ", data)

        let countySelector = document.querySelector("#countySelector");

        //clears the dropdown menu from before
        countySelector.innerHTML = "";

        //loop through the returned data and creat county options
        for (let i of data) {
            let optionEl = document.createElement("option");

            optionEl.textContent = i.county;
            optionEl.value = i.county;

            countySelector.append(optionEl);
        }
    } catch (err) {
        console.error("ERROR fetching counties: ", err);
    }
}

async function displayCity() {
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if (data == false) {
        document.querySelector("#zipMsg").textContent = "INVALID ZIP CODE";
    } else {
        document.querySelector("#zipMsg").textContent = "";
    }
    //alert(data.city);
    document.querySelector("#city").textContent = data.city;

    cityElement.textContent = data.city;
    latElement.textContent = data.latitude;
    longElement.textContent = data.longitude;
}
async function displayPassword() {
    //let password = passwordElement.value;
    let passwordValue = passwordElement.value;
    let passwordMsg = document.querySelector("#passwordMsg");

    if (passwordValue.length === 0) {
        //gives a suggeste password of length 8
        let url = "https://csumb.space/api/suggestedPassword.php?length=8";
        let response = await fetch(url);
        let data = await response.json();

        passwordMsg.textContent = "Suggested Password: " + data.password;
        passwordMsg.style.color = "black";
    }
    else if (passwordValue.length >= 8) {
        passwordMsg.textContent = "Password length is great!";
        passwordMsg.style.color = "blue";
    }
    else if (passwordValue.length < 6) {
        passwordMsg.textContent = "Password must be at least 6 characters.";
        passwordMsg.style.color = "red";
    } else {
        passwordMsg.textContent = "Password length is good!";
        passwordMsg.style.color = "green";
    }
}
async function displayPasswordComfirm() {
    let firstEntry = passwordElement.value;
    let secondEntry = passwordComfirmElement.value;
    //runs if the user hasn't typed anything
    if (secondEntry.length === 0) {
        document.querySelector("#pwComfirmResponse").textContent = "";
        return; 
    }
    if (firstEntry === secondEntry) {
        document.querySelector("#pwComfirmResponse").textContent = "They Match!"
        document.querySelector("#pwComfirmResponse").style.color = "black";
    } else {
        document.querySelector("#pwComfirmResponse").textContent = "Passwords don't match"
        document.querySelector("#pwComfirmResponse").style.color = "red";
    }
}
async function displayUsername() {
    //fetches the data from api + the username
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + usernameElement.value;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    //checks username length
    let length = usernameElement.value.length;
    if (length < 3) {
        document.querySelector("#userName").textContent = "Username must be at least 3 characters.";
        document.querySelector("#userName").style.color = "red";
    } else if (data.available) {//checks to see if the name is available
        document.querySelector("#userName").textContent = "Username is available!";
        document.querySelector("#userName").style.color = "black";
    } else {
        document.querySelector("#userName").textContent = "Username is not available.";
        document.querySelector("#userName").style.color = "red";
    }


}
async function displaySubmit() {
    displayUsername()
    displayPassword()
    displayPasswordComfirm()
}