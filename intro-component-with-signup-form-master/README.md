# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size ✔️
- See hover states for all interactive elements on the page ✔️
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"* ✔️
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"* ✔️

### Screenshot

![](./screenshot/screenshot-desktop.png)
![](./screenshot/screenshot-desktop-error.png)
![](./screenshot/screenshot-mobile.png)
![](./screenshot/screenshot-mobile-error.png)

### Links

- Solution URL: [https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/intro-component-with-signup-form-master](https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/intro-component-with-signup-form-master)
- Live Site URL: [https://park-intro-component-with-signup-form.netlify.app/](https://park-intro-component-with-signup-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

- how to submit form using submit event and handle the event
- how to use RegExp object correctly
- I learned about an invalid event offered by browser and came to know submit event is not occured when the invalid event is issued.

### Useful resources

- [Submit event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) - This helped me for understanding form submit event. 
- [HTML5 form validation](https://jeonghwan-kim.github.io/dev/2020/06/08/html5-form-validation.html) - This is an amazing article which helped me finally understand how to handle an invalid event.

## Author

- Frontend Mentor - [@hkparkjs](https://www.frontendmentor.io/profile/hkparkjs)
