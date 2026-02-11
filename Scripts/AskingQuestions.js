const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";

const inputName = document.getElementById("inputName");
const inputTime = document.getElementById("inputTime");
const enterBtn = document.getElementById("enterBtn");
const displayResponse = document.getElementById("displayResponse");
const resetBtn = document.getElementById("resetBtn");

const getData = async (name, time) => {
    const response = await fetch(apiurl + `/api/AskingQuestions/enternameandtime/${name}/${time}`);
    const data = await response.text();
    return data;
}

enterBtn.addEventListener("click", async () => {
    console.log("btn is clicked")
    let response = await getData(inputName.value, inputTime.value);
    displayResponse.textContent = response;
})
resetBtn.addEventListener("click", () => {
    displayResponse.textContent = "";
    inputName.value = "";
    inputTime.value = "";
})