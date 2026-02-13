const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net"
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const enterBtn = document.getElementById('enterBtn');

const displaySum = document.getElementById("displaySum");

const resetBtn = document.getElementById("resetBtn");

const getSum = async (num1, num2) => {
    const response = await fetch(apiurl + `/api/addingtwonumber/${num1}/${num2}`);
    const data = await response.text();
    return data;
}

enterBtn.addEventListener("click", async () => {
    if(inputNum1.value == "" || inputNum2.value == "")
    {
        displaySum.textContent = "Error: Enter two numbers to proceed"
    }
    else{
        let sum = await getSum(inputNum1.value, inputNum2.value);  
        displaySum.textContent = sum;
    }
})
resetBtn.addEventListener("click", () => {
    inputNum1.value = "";
    inputNum2.value = "";
    displaySum.textContent ="";
})