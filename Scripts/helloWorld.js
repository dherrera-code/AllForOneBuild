const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net";
const displayHello = document.getElementById("displayHelloUser");
const inputName = document.getElementById("inputName")
const enterBtn = document.getElementById("enterBtn")
const resetBtn = document.getElementById("resetBtn");


const getHelloData = async (name) => {
    const response = await fetch( apiurl +`/api/helloworld/hello/${name}`);
    const data = await response.text();
    console.log(data)
    // return data;
    displayHello.textContent = data;
}


inputName.addEventListener("keydown", (event) => {
    console.log(event);
    if(event.key === "Enter"){
        if(inputName.value === "")
        {
            displayHello.textContent = "Input a valid name!"
        }
        else{
            getHelloData(inputName.value);
        }
    }
})
enterBtn.addEventListener("click", ()=> {
    if(inputName.value === "")
        {
            displayHello.textContent = "Input a valid name!"
        }
        else{
            getHelloData(inputName.value);
        }
})

//add btn event listeners!
resetBtn.addEventListener("click", () => {
    inputName.value = "";
    displayHello.textContent = "";
})