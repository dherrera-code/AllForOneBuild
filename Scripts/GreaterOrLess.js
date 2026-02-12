const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net"
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const enterBtn = document.getElementById('enterBtn');

const displayResult = document.getElementById("displayComparison");

const resetBtn = document.getElementById("resetBtn");

const getData =  async (num1, num2) => {
    const response = await fetch(apiurl + `/${num1}/${num2}`)
    const data = await response.text()
    return data;
}

enterBtn.addEventListener("click", async () => {
    if(inputNum1.value == "" || inputNum2.value == "")
    {
        displayResult.textContent = "Please input a number for both values!"
    }
    else{
        let greaterLess = await getData(inputNum1.value, inputNum2.value)
        displayResult.textContent = greaterLess;
    }
})
resetBtn.addEventListener("click", () => {
    inputNum1.value = "";
    inputNum2.value = "";
    displayResult.textContent = "";
})