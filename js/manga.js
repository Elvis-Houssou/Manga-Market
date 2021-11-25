//BARRE MENU RESPONSIVE
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "initial";
  mainMenu.style.right = "0";
  mainMenu.style.transition = "1s";
}

function close() {
  mainMenu.style.right = "-150%";
  mainMenu.style.transition = "1s";
}
