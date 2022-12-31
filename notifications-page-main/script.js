'use strict';

const notificationsItem = document.getElementsByClassName("notifications-item");
const unreadNotiNum = document.querySelector(".number");
const markBtn = document.querySelector(".mark-btn");

function calculateUnreadNoti() {
  let num = 0;
  for (let i=0; i<notificationsItem.length; i++) {
    if (notificationsItem[i].classList.contains("unread")) {
      num++;
    }
  }
  unreadNotiNum.innerHTML = num;
}

calculateUnreadNoti();

markBtn.addEventListener("click", function () {
  for (let i=0; i<notificationsItem.length; i++) {
    if (notificationsItem[i].classList.contains("unread")) {
      notificationsItem[i].classList.remove("unread");
    }
  }
  calculateUnreadNoti();
});