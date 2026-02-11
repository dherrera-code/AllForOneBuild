// alert("Plase work!");
const displayHello = document.getElementById("displayHelloUser");

const inputName = document.getElementById("inputName")
const enterBtn = document.getElementById("enterBtn")
const resetBtn = document.getElementById("resetBtn");





//add btn event listeners!
resetBtn.addEventListener("click", () => {
    inputName.value = "";
    displayHello.textContent = "";
})