# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size ✔️
- See hover states for all interactive elements on the page ✔️
- Hide/Show the answer to a question when the question is clicked ✔️

### Screenshot

![](./screenshot/screenshot-desktop.png)
![](./screenshot/screenshot-desktop-active.png)
![](./screenshot/screenshot-mobile.png)
![](./screenshot/screenshot-mobile-active.png)

### Links

- Solution URL: [https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/faq-accordion-card-main](https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/faq-accordion-card-main)
- Live Site URL: [https://park-faq-accordion-card.netlify.app/](https://park-faq-accordion-card.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
- an ```img``` element should be in the div box.
- When setting a mobile layout, I took white square box container down instead of the picture.
- I used ```margin-left``` and ```margin-top``` property to set the location of the box image.
- To hide/show the answer, I used ```add()```/```remove()``` directly, not using ```.toggle()```
```javascript
  question[i].addEventListener("click", function () {
    if (question[i].classList.contains("active")) {
      this.classList.remove("active");
    } else {
      // When one answer is shown, the other answers need to be hided.
      for (let j=0; j<question.length; j++) {
        if (question[j].classList.contains("active")) {
          question[j].classList.remove("active");
        }
      }
      this.classList.add("active");
    }
  });
```

## Author

- Frontend Mentor - [@hkparkjs](https://www.frontendmentor.io/profile/hkparkjs)