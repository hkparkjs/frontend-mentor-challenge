import React, { useState } from 'react';
import './RadioCard.css';

const RadioCard = ({ title, price, description, left, selected, selectedStand, onSelected, isActive, onChangeBackers, onChangeMoney }) => {
  let money = 0;
  const [standLeft, setStandLeft] = useState(Number(left));

  const showThankYouAlert = () => {
    const thankYouAlert = document.querySelector('.thank-you-alert-area');
    const modal = document.querySelector('.modal-area');
    if (modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
    if (!thankYouAlert.classList.contains('open')) {
      thankYouAlert.classList.add('open');
      document.getElementsByTagName('body')[0].classList.add('open-alert');
      window.scrollTo({ top: 0 });
    }
  };

  const onChangeValue = () => {
    money = Number(document.getElementById(`moneyFor${price}`).value);
  };

  return (
    <div className={`radio-card${left == 0 ? ' out-of-stock' : ''}${selectedStand === title ? ' selected' : ''}`}>
      <div className="radio-card-title">
        <div className="radio-button-container">
          <input
            type="radio"
            id={price}
            name="stand"
            value={title}
            checked={title === selectedStand}
            disabled={ standLeft == 0 ? true : false }
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
      { standLeft >= 0 ?
        <div className="money">
          <span>{standLeft}</span>
          <span>left</span>
        </div> : ''
      }
      { (standLeft > 0 && isActive === true) ?
        <div className="radio-card-input">
          <div className="radio-card-label">
            <label htmlFor="name">Enter your pledge</label>
          </div>
          <div className="radio-card-input-area">
            <label htmlFor="name">$</label>
            <input type="text" id={'moneyFor'+ price} name="name" required
                  minLength="1" maxLength="8" size="10" onChange={onChangeValue}></input>
            <button
              onClick={() => {
                showThankYouAlert();
                onSelected('');
                onChangeMoney(money);
                onChangeBackers();
                setStandLeft(standLeft - 1);
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