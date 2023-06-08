import React from 'react';
import './RadioCard.css';

const RadioCard = ({ title, price, description, left, selected, selectedStand, onSelected, isActive }) => {
  const showThankYouAlert = () => {
    const thankYouAlert = document.querySelector('.thank-you-alert-area');
    const modal = document.querySelector('.modal-area');
    if (modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
    if (!thankYouAlert.classList.contains('open')) {
      thankYouAlert.classList.add('open');
      document.getElementsByTagName('body')[0].classList.add('open-alert');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`radio-card${left == 0 ? ' out-of-stock' : ''}${selected === "true" ? ' selected' : ''}`}>
      <div className="radio-card-title">
        <div className="radio-button-container">
          <input
            type="radio"
            id={price}
            name="stand"
            value={title}
            checked={title === selectedStand}
            disabled={ left == 0 ? true : false }
            onChange={e => onSelected(e.target.value)}
          ></input>
        </div>
        <label htmlFor={price}>
          <span className="title">{title}</span>
          <span className="price">
            {price > 0 ? `Pledge ${price} or more` : ''}
          </span>
        </label>
      </div>
      <p className="description">
        {description}
      </p>
      { left >= 0 ?
        <div className="money">
          <span>{left}</span>
          <span>left</span>
        </div> : ''
      }
      { (left > 0 && isActive === true) ?
        <div className="radio-card-input">
          <div className="radio-card-label">
            <label htmlFor="name">Enter your pledge</label>
          </div>
          <div className="radio-card-input-area">
            <label htmlFor="name">$</label>
            <input type="text" id={price} name="name" required
                  minLength="1" maxLength="8" size="10"></input>
            <button
              onClick={() => {
                showThankYouAlert();
                onSelected('');
              }}
            >
              Continue
            </button>
          </div>
        </div> : ''}
    </div>
  );
};

export default RadioCard;