# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot-desktop.png)
![](./screenshot-mobile.png)

### Links

- Solution URL: [https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/nft-preview-card-component-main](https://github.com/hkparkjs/frontend-mentor-challenge/tree/main/nft-preview-card-component-main)
- Live Site URL: [https://park-nft-preview-card-component.netlify.app/](https://park-nft-preview-card-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- How to set background color and image when user over the mouse on image
```css
.info-image-link:hover {
  background-color: var(--cyan);
  background-image: url('./images/icon-view.svg');
  background-repeat: no-repeat;
  background-position: center;
}
  
.info-image-link:hover img {
  opacity: 15%;
}
  ```

- How to set transition on link
```css
.info-title-link, .author a {
  transition: color 0.5s ease-out; /* set transition */
}

.info-title-link:hover, .author a:hover {
  color: var(--cyan);
}
```

### Useful resources

- [MDN - Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - This helped me for setting smoothly transition effect when user over the mouse on links.
- [MDN - Transition timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) - This is an article which helped me understand transition easing functions.

## Author

- Frontend Mentor - [@hkparkjs](https://www.frontendmentor.io/profile/hkparkjs)
