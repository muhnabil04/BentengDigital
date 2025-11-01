const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

// Buka menu mobile
openMenu.addEventListener("click", () => {
    menu.classList.remove("w-0", "overflow-hidden");
    menu.classList.add("w-full");
});

// Tutup menu mobile
closeMenu.addEventListener("click", () => {
    menu.classList.remove("w-full");
    menu.classList.add("w-0", "overflow-hidden");
});
