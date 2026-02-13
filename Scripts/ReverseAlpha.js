const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";
const inputString = document.getElementById("inputString")

const enterBtn = document.getElementById("enterBtn")
const resetBtn = document.getElementById("resetBtn")
const displayResponse = document.getElementById("displayResponse")

const getData = async (string) => {
 const response = await fetch(apiurl + `/api/reverseitalpha/${string}`);
 const data = await response.text();
 return data;
}

inputString.addEventListener("keypress", async (event) => {
    if(event.key === "Enter"){
        if(inputString.value !== ""){
            let reversed = await getData(inputString.value)
            displayResponse.textContent = reversed;
        }
        else{
            displayResponse.value = "Error: Please Input a sequence of characters!";
        }
    }
})

enterBtn.addEventListener("click", async () => {
        if(inputString.value !== ""){
            let reversed = await getData(inputString.value)
            displayResponse.textContent = reversed;
        }
        else{
            displayResponse.value = "Error: Please Input a sequence of characters!";
        }
})

resetBtn.addEventListener("click" ,() => {
    inputString.value = "";
    displayResponse.textContent = ""
})
