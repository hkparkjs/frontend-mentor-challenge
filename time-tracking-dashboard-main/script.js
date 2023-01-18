'use strict';

const title = document.getElementsByClassName('title');
const current = document.getElementsByClassName('current');
const last = document.getElementsByClassName('last');
const buttons = document.querySelectorAll('.timeframes li button');
const dailyBtn = document.querySelector('.daily');
const weeklyBtn = document.querySelector('.weekly');
const monthlyBtn = document.querySelector('.monthly');

function clearCheckedButton() {
  buttons.forEach(button => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    }
  });
}

async function init() {
  const res = await fetch('./data.json');
  const data = await res.json();
  
  // initialization
  data.forEach((data, idx) => {
    title[idx].innerText = data.title;
    current[idx].innerText = `${data.timeframes.weekly.current}hrs`;
    last[idx].innerText = `Last Week - ${data.timeframes.weekly.previous}hrs`;
    weeklyBtn.classList.add('active');
  });

  dailyBtn.addEventListener('click', function () {
    if (this.classList.contains('active') === false) {
      clearCheckedButton();
      this.classList.add('active');
      data.forEach((data, idx) => {
        current[idx].innerText = `${data.timeframes.daily.current}hrs`;
        last[idx].innerText = `Last Week - ${data.timeframes.daily.previous}hrs`;
      });
    }
  });

  weeklyBtn.addEventListener('click', function () {
    if (this.classList.contains('active') === false) {
      clearCheckedButton();
      this.classList.add('active');
      data.forEach((data, idx) => {
        current[idx].innerText = `${data.timeframes.weekly.current}hrs`;
        last[idx].innerText = `Last Week - ${data.timeframes.weekly.previous}hrs`;
      });
    }
  });

  monthlyBtn.addEventListener('click', function () {
    if (this.classList.contains('active') === false) {
      clearCheckedButton();
      this.classList.add('active');
      data.forEach((data, idx) => {
        current[idx].innerText = `${data.timeframes.monthly.current}hrs`;
        last[idx].innerText = `Last Week - ${data.timeframes.monthly.previous}hrs`;
      });
    }
  });
}

init();