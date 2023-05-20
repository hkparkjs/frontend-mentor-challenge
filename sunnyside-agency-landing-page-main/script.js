'use strict';

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('activate');
  hamburger.classList.toggle('activate');
});