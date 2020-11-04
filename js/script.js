const menuBtn = document.querySelector('.header__menu-btn');
const menuBtnIcon = document.querySelector('.menu-btn-icon');
const headerNav = document.querySelector('.header__nav');

function updateMenuIcon() {
    if (menuBtnIcon.getAttribute('src') === 'img/icon-hamburger.svg') {
        menuBtnIcon.src = 'img/icon-close.svg';
    } else {
        menuBtnIcon.src = 'img/icon-hamburger.svg';
    }
}

function showMobileNav() {
    headerNav.classList.toggle('header__nav--active');
}

function toggleMobileNav() {
    updateMenuIcon();
    showMobileNav();
}

menuBtn.addEventListener('click', toggleMobileNav);