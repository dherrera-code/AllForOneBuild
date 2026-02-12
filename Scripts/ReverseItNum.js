const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";
const inputNumber = document.getElementById("inputNumber")

const enterBtn = document.getElementById("enterBtn")
const resetBtn = document.getElementById("resetBtn")
const displayResponse = document.getElementById("displayResponse")

const getData = async (number) => {
 const response = await fetch(apiurl + `/numbersOnly/${number}`);
 const data = await response.text();
 return data;
}

inputNumber.addEventListener("keypress", async (event) => {
    if(event.key === "Enter"){
        if(inputNumber.value !== ""){
            let reversed = await getData(inputNumber.value)
            displayResponse.textContent = reversed;
        }
    }
})

enterBtn.addEventListener("click", async () => {
    if(inputNumber.value !== ""){
            let reversed = await getData(inputNumber.value)
            displayResponse.textContent = reversed;
        }
})

resetBtn.addEventListener("click" ,() => {
    inputNumber.value = "";
    displayResponse.textContent = ""
})
