'use strict';

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('active')) {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
  } else {
    menuBtn.classList.add('active');
    nav.classList.add('active');
  }
});