'use strict';

const barItem = document.getElementsByClassName('data');
const days = document.getElementsByClassName('day');
const tooltip = document.getElementsByClassName('tooltip');

const today = new Date().getDay() - 1;

async function init() {
  const res = await fetch('data.json');
  const data = await res.json();
  for (let i=0; i<data.length; i++) {
    days[i].innerText = data[i].day;
    barItem[i].style.height = `${data[i].amount * 3}px`;
    tooltip[i].children[0].innerText = `$${data[i].amount}`;
  }
  barItem[today].classList.add('today'); 
}

init();