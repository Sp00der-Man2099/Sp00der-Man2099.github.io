let zipElement = document.querySelector("#zipCode");
let cityElement = document.querySelector("#city");
let stateElement = document.querySelector("#state");
let latElement = document.querySelector("#lat");
let longElement = document.querySelector("#long");
let countryElement = document.querySelector("#countyCode");
let passwordElement = document.querySelector("#passwordInput");
let usernameElement = document.querySelector("#usernameInput");

zipElement.addEventListener("change", displayCity);
passwordElement.addEventListener("change", displayPassword);
usernameElement.addEventListener("change", displayUsername);


displayStates();
async function displayStates(){
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        for (let i of data){
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);

        }

        } catch (err) {
                if (err instanceof TypeError) {
                    alert("Error accessing API endpoint (network failure)");
                } else {
                    alert(err.message);
                }
        } //catch    
}
displayCounties();
async function displayCounties(){
    let url = "https://csumb.space/api/countyListAPI.php?state=" + stateElement.value;
}

async function displayCity(){
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if(data == false){
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
async function displayPassword(){
    //let password = passwordElement.value;
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    let response = await fetch(url);
    let data = await response.json();

    document.querySelector("#passwordMsg").textContent = "Suggested Password: " + data.password;

    let length = passwordInput.value.length;

    if(length < 6){
        document.querySelector("#passwordMsg").textContent = "Password must be at least 6 characters.";
        document.querySelector("#passwordMsg").style.color = "red";
    } else {
        document.querySelector("#passwordMsg").style.color = "black";
    }
}
async function displayUsername(){
    let url = "https://csumb.space/api/usernamesAPI.php?username=eeny"
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    let length = usernameElement.value.length;
    if(length < 6){
        document.querySelector("#userName").textContent = "Username must be at least 6 characters.";
        document.querySelector("#userName").style.color = "red";
    } else if (data.available){
        document.querySelector("#userName").textContent = "Username is available!";
        document.querySelector("#userName").style.color = "black";
    } else {
        document.querySelector("#userName").textContent = "Username is not available.";
        document.querySelector("#userName").style.color = "black";
    }

    
}