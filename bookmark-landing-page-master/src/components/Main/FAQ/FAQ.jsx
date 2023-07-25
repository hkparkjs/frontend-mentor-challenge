import React, { useState } from 'react';
import './FAQ.scss';

import QNA from './QNA/QNA';

function FAQ() {
  const qnas = [
    {
      question: 'What is Bookmark?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      question: 'How can I request a new browser?',
      answer:
        'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <ul className="faq-list">
        {qnas.map((qna, idx) => (
          <QNA qna={qna} key={`qna-${idx}`} />
        ))}
      </ul>
      <button className="btn-blue">More Info</button>
    </div>
  );
}

export default FAQ;
