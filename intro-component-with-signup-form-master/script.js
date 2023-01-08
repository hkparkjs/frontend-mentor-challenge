'use strict';
const inputField = document.getElementsByClassName('input-field');
const inputItem = document.getElementsByClassName('input-item');
const errorMsg = document.getElementsByClassName('error-msg');
const form = document.getElementsByClassName('signup-form');

function checkEmailAddress(email) {
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  if (!regex.test(email)) {
    return false;
  } else if (email === '') {
    return false;
  }
  return true;
}

function handleSubmit(event) {
  event.preventDefault();
  let err = false;
  for (let i=0; i<inputField.length; i++) {
    if (inputItem[i].classList.contains('error')) {
      inputItem[i].classList.remove('error');
    }
    if (inputField[i].children[1].value === '') {
      err = true;
      let field = inputField[i].children[1].placeholder;
      errorMsg[i].children[0].innerText = `${field} cannot be empty`;
      inputItem[i].classList.add("error");
    }

    let email = document.getElementById("email"); 

    if (email.value && !checkEmailAddress(email.value)) {
      err = true;
      errorMsg[2].children[0].innerText = 'Looks like this is not an email';
      inputItem[2].classList.add("error");
    }
  }

  if (err == false) {
    alert("claim finished!");
    for (let i=0; i<inputField.length; i++) {
      if (inputField[i].children[1].value !== '') {
        inputField[i].children[1].value = "";
      }
    }
  }
}

form[0].addEventListener('submit', handleSubmit);

for(let i=0; i<inputField.length; i++) {
  inputField[i].children[1].addEventListener('click', function () {
    if (inputItem[i].classList.contains('error')) {
      inputItem[i].classList.remove('error');
    }
  });
}