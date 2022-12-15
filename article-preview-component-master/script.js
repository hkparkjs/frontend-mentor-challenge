const popup = document.querySelector('.popup-share-box');
const shareBtn = document.querySelector('.share');
const popupShareBtn = document.querySelector('.article-footer button');
console.log()
let isShow = false;

function adjustPopupLocation() {
  popup.style.top = `${shareBtn.getBoundingClientRect().top - 85}px`;
  popup.style.left = `${shareBtn.getBoundingClientRect().left - 105}px`;
}
popup.addEventListener('toggle', () => {
  console.log("togg")
});
shareBtn.addEventListener('click', () => {
  if (!isShow) {
    popup.style.display = "flex";
    isShow = true;

    if (screen.width >= 768) {
      adjustPopupLocation();
      popupShareBtn.classList.add('share-dark');
      popupShareBtn.classList.remove('share-light');
    }    
  } else {
    popup.style.display = "none";
    isShow = false;
    popupShareBtn.classList.add('share-light');
    popupShareBtn.classList.remove('share-dark');
  }
});

window.addEventListener('resize', () => {
  if (isShow && screen.width >= 768) {
    adjustPopupLocation();
  }
});

