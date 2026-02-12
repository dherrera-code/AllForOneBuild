const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net"

const inputQuestion = document.getElementById("inputQuestion")

const enterBtn = document.getElementById("enterBtn")
const resetBtn = document.getElementById("resetBtn")

const displayResponse = document.getElementById("displayResponse");

const getResponse = async (question) => {
    const response = await fetch(apiurl + `/askAQuestion/${question}`)
    const data = await response.text();
    return data;
}

enterBtn.addEventListener("click", async () => {
    //insert input validation here ; also for ?
    if(!inputQuestion.value.includes("?"))
        displayResponse.textContent = "Enter a valid question with question mark!"
    else{
        let magicResponse = await getResponse(inputQuestion.value);
        displayResponse.textContent = magicResponse;
    }
});
resetBtn.addEventListener("click", () => {
    displayResponse.textContent = "";
    inputQuestion.value = "";
})