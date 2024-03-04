// Script File
let hamburgerBtn = document.querySelector('.hamburger-btn');
let sideBar = document.querySelector('.side-bar');

hamburgerBtn.addEventListener('click', sidebarToggle);

function sidebarToggle () {
    sideBar.classList.toggle('active');
}

// Code for Light/Dark Mode Toggle
let modeSwitcher = document.querySelector('.mode-switch i');
let body = document.querySelector('body');

modeSwitcher.addEventListener('click', modeSwitch);

function modeSwitch() {
    body.classList.toggle('active');
}