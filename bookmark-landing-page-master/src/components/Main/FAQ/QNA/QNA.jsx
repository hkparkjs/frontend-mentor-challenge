import React, { useState } from 'react';
import './QNA.scss';

function QNA({ qna }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`qna${open === true ? ' is-open' : ''}`}>
      <button
        className="question"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{qna.question}</span>
        <div>
          <i className="fa-sharp fa-solid fa-chevron-down fa-rotate-180 fa-xl"></i>
        </div>
      </button>
      <div className="answer">
        <span>{qna.answer}</span>
      </div>
    </li>
  );
}

export default QNA;
