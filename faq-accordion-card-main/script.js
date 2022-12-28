'use strict';

const question = document.getElementsByClassName('question');
const faqItem = document.getElementsByClassName('faq-item');
    
for (let i=0; i<question.length; i++) {
  question[i].addEventListener("click", function () {
    if (faqItem[i].classList.contains("active")) {
      faqItem[i].classList.remove("active");
    } else {
      // When one answer is shown, the other answers need to be hided.
      for (let j=0; j<faqItem.length; j++) {
        if (faqItem[j].classList.contains("active")) {
          faqItem[j].classList.remove("active");
        }
      }
      faqItem[i].classList.add("active");
    }
  });
}