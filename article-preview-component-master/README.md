# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot/screenshot-desktop.png)
![](./screenshot/screenshot-desktop-active.png)
![](./screenshot/screenshot-mobile.png)
![](./screenshot/screenshot-mobile-active.png)

### Links

- Solution URL: [https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/article-preview-component-master](https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/article-preview-component-master)
- Live Site URL: [https://park-article-preview-component.netlify.app](https://park-article-preview-component.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

- At first, I used javascript ```getBoundingClientRect()``` and ```resize``` event to locate popup on mobile and desktop but I learned that I should use media queries to adjust screen size.
- I used visibility and opacity property to show/hide popup.
- I used z-index property to bring the share button on top.
- In case of desktop, I used border-radius property on picture instead of using overflow hidden. 

## Author

- Frontend Mentor - [@hkparkjs](https://www.frontendmentor.io/profile/hkparkjs)