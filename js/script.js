const menu = document.querySelector(".menu");
const menuOptions = document.querySelector(".menu-options");
const hamburguer = document.querySelector("#hamburguer-img");
const closeImg = document.querySelector("#close-img");

menu.addEventListener("click", () => {
  if (hamburguer.style.display == "block" && closeImg.style.display == "none") {
    hamburguer.style.display = "none";
    closeImg.style.display = "block";
    menuOptions.classList.add("visible");
  } else {
    hamburguer.style.display = "block";
    closeImg.style.display = "none";
    menuOptions.classList.remove("visible");
  }
});
