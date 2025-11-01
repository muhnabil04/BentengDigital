const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
    menu.classList.remove("max-md:w-0");
    menu.classList.add("max-md:w-full");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("max-md:w-full");
    menu.classList.add("max-md:w-0");
});
