
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector("nav ul");
const openIcon = document.querySelector(".nav-toggler #openIcon");
const closeIcon = document.querySelector(".nav-toggler #closeIcon");

navToggler.addEventListener("click", () => {
    if (navMenu.classList.contains("translate-x-0")) {

        navMenu.classList.add("translate-x-full");
        navMenu.classList.remove("translate-x-0");
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        navMenu.classList.remove("translate-x-full");
        navMenu.classList.add("translate-x-0");
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
    }
});