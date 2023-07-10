const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");


//on click toggle the class "open" on the menu-btn
button.addEventListener("click", () => {
    button.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
});