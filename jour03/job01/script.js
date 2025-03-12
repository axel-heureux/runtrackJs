const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const quote = document.getElementById("quote");

showButton.addEventListener("click", () => {
    quote.style.display = "block";
});

hideButton.addEventListener("click", () => {
    quote.style.display = "none";
});