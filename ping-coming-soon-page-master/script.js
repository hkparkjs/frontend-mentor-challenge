'use strict';

const submitBtn = document.querySelector('.submit-btn');
const subscription = document.querySelector('.subscription');
const emailTxt = document.querySelector('.email-input input');
const errorMsg = document.querySelector('.error-msg');

function checkEmailAddress(email) {
  // 이메일주소가 유효하지 않으면 에러출력.
  // 입력값 없으면
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  // const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (email === '') {
    errorMsg.innerText = "Whoops! It looks like you forgot to add your email";
    return false;
  }
  if (!regex.test(email)) {
    errorMsg.innerText = "Please provide a valid email address";
    return false;
  }
  return true;
}

submitBtn.addEventListener('click', () => {
    if (!checkEmailAddress(emailTxt.value)) {
      if (!subscription.classList.contains("error")) {
        subscription.classList.add("error");
      }
    } else {
      if (subscription.classList.contains("error")) {
        subscription.classList.remove("error");
      }
    }
});