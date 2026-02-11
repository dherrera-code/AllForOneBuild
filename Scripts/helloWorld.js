// alert("Plase work!");
const displayHello = document.getElementById("displayHelloUser");

const inputName = document.getElementById("inputName")
const enterBtn = document.getElementById("enterBtn")
const resetBtn = document.getElementById("resetBtn");


const getHelloData = async (name) => {
    const response = await fetch(`https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net/api/helloworld/hello/${name}`);
    const data = await response.text();
    console.log(data)
    return data;
}


//add btn event listeners!
resetBtn.addEventListener("click", () => {
    inputName.value = "";
    displayHello.textContent = "";
})