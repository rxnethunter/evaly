// Not a ton of code, but hard to
const nav = document.querySelector('#main-header');
const navLinkList = document.querySelectorAll('.nav-link');

function fixNav() {
    if (window.scrollY >= 30) {
        nav.classList.add('fixed');
      
    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixNav);


// side menu toggle button

const toggle = document.getElementById('toggler-btn');
const sideMenuOverlay = document.querySelector(".side-menu-overlay");
const crossBtn = document.getElementById("times-icon");
const toggleMobile = document.querySelector(".mobile-nav-button");


toggle.addEventListener('click', () => {
    sideMenuOverlay.style.display = "block";
})

toggleMobile.addEventListener('click', () => {
    sideMenuOverlay.style.display = "block";
})

crossBtn.addEventListener('click', () =>{
    sideMenuOverlay.style.display = "none";
})