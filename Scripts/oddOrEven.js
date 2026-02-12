const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";

const inputNumber = document.getElementById("inputNumber");
const enterBtn = document.getElementById("enterBtn");
const displayResponse = document.getElementById("displayResponse");
const resetBtn = document.getElementById("resetBtn");

const getData = async (number) => {
    const response = await fetch(apiurl + `/api/${number}`);
    const data = response.text();
    return data;

}
enterBtn.addEventListener("click", async () => {
    let text = await getData(inputNumber.value);
    displayResponse.textContent = text;
})