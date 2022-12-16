"use strict";

const popup = document.querySelector('.popup-share-box');
const shareBtn = document.querySelector('.share');

shareBtn.addEventListener("click", () => {
  popup.classList.toggle("show");
  shareBtn.classList.toggle("active");
});