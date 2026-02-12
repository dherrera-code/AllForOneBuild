const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";

const inputNumber = document.getElementById("inputNumber");
const enterBtn = document.getElementById("enterBtn");
const displayResponse = document.getElementById("displayResponse");
const resetBtn = document.getElementById("resetBtn");

const getData = async (number) => {
    const response = await fetch(apiurl + `/api/OddOrEven/${number}`);
    const data = response.text();
    return data;

}
enterBtn.addEventListener("click", async () => {
    if (inputNumber.value === "")
        displayResponse.textContent = "Input a valid number!";
    else {
        let output = await getData(inputNumber.value);
        displayResponse.textContent = output;
    }
})
inputNumber.addEventListener("keypress", async (event) => {

    if (event.key === "Enter") {

        if (inputNumber.value === "")
            displayResponse.textContent = "Input a valid number!";
        else {
            let output = await getData(inputNumber.value);
            displayResponse.textContent = output;
        }
    }
})