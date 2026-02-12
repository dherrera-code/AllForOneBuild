const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net"

// DOM input values
const inputName = document.getElementById("inputName");
const inputLocation = document.getElementById("inputLocation");
const inputAdj = document.getElementById("inputAdj");
const inputCreature = document.getElementById("inputCreature");
const inputMood = document.getElementById("inputMood");

const resetBtn = document.getElementById("resetBtn");

const playBtn = document.getElementById("enterBtn");
const displayStory = document.getElementById("displayStory")

const getStory = async (name, location, adjective, creature, mood) => {
    const response = await fetch(apiurl + `/api/MadLibShort/${name}/${location}/${adjective}/${creature}/${mood}`);
    const data = await response.text();
    return data;
}

playBtn.addEventListener("click", async () => {
    if(inputName.value == "" || inputLocation.value == "" || inputMood.value == "" || inputAdj.value == "" || inputCreature.value == "")
    {
        displayStory.textContent = "Error, Please fill out all inputs before pressing play!"
    }
    else{
        let story = await getStory(inputName.value, inputLocation.value, inputAdj.value,inputCreature.value, inputMood.value);
        displayStory.textContent = story;

    }

});

resetBtn.addEventListener("click", () => {
    displayStory.textContent = "";
    inputAdj.value = ""
    inputCreature.value =""
    inputName.value =""
    inputLocation.value = ""
    inputMood.value = ""
})