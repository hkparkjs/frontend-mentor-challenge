'use strict';

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('active')) {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    body.style.overflow = "visible";
  } else {
    menuBtn.classList.add('active');
    nav.classList.add('active');
    body.style.overflow = "hidden";
  }
});