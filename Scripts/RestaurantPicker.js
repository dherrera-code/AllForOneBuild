const apiurl = "https://allforoneapidh-h2cygwchdcbbcsce.westus3-01.azurewebsites.net"

const burgerBtn = document.getElementById("burgerBtn");
const pizzaBtn = document.getElementById("pizzaBtn");
const miscBtn = document.getElementById("miscBtn");
const resetBtn = document.getElementById("resetBtn")

const displayResult = document.getElementById("displayResult");


const getResult = async (choice) => {
    const response = await fetch(apiurl + `/burgerPizzaMisc/${choice}`);
    const data = await response.text();
    return data;
}

burgerBtn.addEventListener("click", async () => {
    let restaurant = await getResult("burger");
    displayResult.textContent = restaurant;
})
pizzaBtn.addEventListener("click", async () => {
    let restaurant = await getResult("pizza");
    displayResult.textContent = restaurant;
})
miscBtn.addEventListener("click", async () => {
    let restaurant = await getResult("misc");
    displayResult.textContent = restaurant;
})
resetBtn.addEventListener("click", () => {
    displayResult.textContent = "";
})