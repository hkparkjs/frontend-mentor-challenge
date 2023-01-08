'use strict';
const inputField = document.getElementsByClassName('input-field');
const inputItem = document.getElementsByClassName('input-item');
const errorMsg = document.getElementsByClassName('error-msg');
const form = document.getElementsByClassName('signup-form');

function checkEmailAddress(email) {
  // http://emailregex.com/
  let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  let result = false;
  if (regex.test(email)) {
    result = true;
  } else if (email === '') {
    result = false;
  }
  return result;
}

function handleSubmit(event) {
  event.preventDefault();
  let err = false;
  for (let i=0; i<inputField.length; i++) {
    // initialization
    if (inputItem[i].classList.contains('error')) {
      inputItem[i].classList.remove('error');
    }

    if (inputField[i].children[1].value === '') {
      err = true;
      let field = inputField[i].children[1].placeholder;
      errorMsg[i].children[0].innerText = `${field} cannot be empty`;
      inputItem[i].classList.add("error");
    }

    // email validation
    let email = document.getElementById("email");
    if (email.value && !checkEmailAddress(email.value)) {
      err = true;
      errorMsg[2].children[0].innerText = 'Looks like this is not an email';
      inputItem[2].classList.add("error");
    }
  }

  // claim submit action and clear
  if (err == false) {
    alert("claim finished!");
    for (let i=0; i<inputField.length; i++) {
      if (inputField[i].children[1].value !== '') {
        inputField[i].children[1].value = "";
      }
    }
  }
}

/* form submit event */
form[0].addEventListener('submit', handleSubmit);

// handling invalid event (browser default event)
inputField[2].children[1].addEventListener('invalid', e => {
  e.preventDefault();
  errorMsg[2].children[0].innerText = 'Looks like this is not an email';
  inputItem[2].classList.add("error");
  // call for UI because the submit event isn't occured when the invalid event is issued
  handleSubmit(e);
});

// remove err style when user click input field again after error or input field is changed
for(let i=0; i<inputField.length; i++) {
  inputField[i].children[1].addEventListener('click', function () {
    if (inputItem[i].classList.contains('error')) {
      inputItem[i].classList.remove('error');
    }
  });
  inputField[i].children[1].addEventListener('change', function () {
    if (inputItem[i].classList.contains('error')) {
      inputItem[i].classList.remove('error');
    }
  });
}