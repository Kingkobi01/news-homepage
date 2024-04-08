
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector("nav ul");
const togglerIcon = document.querySelector(".nav-toggler img");

navToggler.addEventListener("click", () => {
    console.log(togglerIcon.src);
    if (navMenu.classList.contains("translate-x-0")) {

        navMenu.classList.add("translate-x-full");
        navMenu.classList.remove("translate-x-0");
        togglerIcon.src = "/assets/images/icon-menu.svg";
    } else {
        navMenu.classList.remove("translate-x-full");
        navMenu.classList.add("translate-x-0");
        togglerIcon.src = "/assets/images/icon-menu-close.svg";
    }
});