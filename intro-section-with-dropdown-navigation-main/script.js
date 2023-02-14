'use strict';

const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger button');
const navigation = document.querySelector('nav');
const navBackground = document.querySelector('.nav-background');
const arrowIcon = document.querySelectorAll('.menu-arrow');
const expandableMenu = document.querySelectorAll('.expandable-menu button');
const menuDetail = document.querySelectorAll('.detail-menu');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
  if (navigation.classList.contains('active')) {
    navigation.classList.remove('active');
    navBackground.classList.remove('active');
    hamburger.classList.remove('close');
  } else {
    navigation.classList.add('active');
    navBackground.classList.add('active');
    hamburger.classList.add('close');
  }
});

expandableMenu.forEach((menu, idx) => {
  menu.addEventListener('click', e => {
    arrowIcon[idx].classList.toggle('up');
    arrowIcon[idx].classList.toggle('down');
    menuDetail[idx].classList.toggle('open');
  });

  container.addEventListener('mouseover', e => {
    if (menuDetail[idx].classList.contains('open')) {
          arrowIcon[idx].classList.remove('down');
          arrowIcon[idx].classList.add('up');
          menuDetail[idx].classList.remove('open'); 
        }
  });
});