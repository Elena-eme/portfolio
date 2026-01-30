const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
}

const editorialPanel = document.getElementById("editorialPanel");

let lastScrollY = window.scrollY;
let panelActive = false;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const triggerPoint = window.innerHeight * 0.2;

    // Scroll hacia abajo → mostrar panel
    if (currentScroll > lastScrollY && currentScroll > triggerPoint) {
        if (!panelActive) {
            editorialPanel.classList.add("active");
            panelActive = true;
        }
    }

    // Scroll hacia arriba → volver a home
    if (currentScroll < lastScrollY && currentScroll < triggerPoint) {
        if (panelActive) {
            editorialPanel.classList.remove("active");
            panelActive = false;
        }
    }

    lastScrollY = currentScroll;
});
if (panelActive) {
    document.body.style.overflow = "hidden";
} else {
    document.body.style.overflow = "auto";
}

const dice = document.getElementById("colorDice");

const colors = [
    "##d9e6ff", // amarillo original
    "#ffd7e3", // rosa pastel
    "#fff0c4"  // amarillo pastel alternativo
];

let currentColor = 0;

dice.addEventListener("click", () => {
    currentColor = (currentColor + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColor];
});
localStorage.setItem("bgColor", colors[currentColor]);
const savedColor = localStorage.getItem("bgColor");
if (savedColor) document.body.style.backgroundColor = savedColor;

