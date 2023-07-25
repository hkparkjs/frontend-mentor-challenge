import React from 'react';
import TitleImg from '../../../assets/illustration-hero.svg';
import './Title.scss';

function Title() {
  return (
    <div className="title">
      <div className="title-image">
        <div className="title-image-container">
          <img src={TitleImg} alt="" />
        </div>
      </div>
      <div className="title-desc">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="btn-get">
          <button type="button" className="btn-blue">
            Get it on Chrome
          </button>
          <button type="button" className="btn-gray">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;
