import React from 'react';
import BackThisProject from '../BackThisProject/BackThisProject';
import './ButtonCard.css';

const ButtonCard = ({ title, price, description, left, onClick }) => {
  return (
    price > 0 ? (
    <div className={`button-card${left == 0 ? ' out-of-stock' : ''}`}>
      <div className="button-card-title">
        <span className="title">{title}</span>
        <span className="price">Pledge ${price} or more</span>
      </div>
      <p className="description">
        {description}
      </p>
      <div className="reward-area">
        <div className="money">
          <span>{left}</span>
          <span>left</span>
        </div>
        <button
          className="button-card-btn"
          disabled={left == 0 ? true : false}
          onClick={onClick}
        >
          {left > 0 ? 'Select Reward' : 'Out of Stock'}
        </button>
      </div>
    </div>
    ) : ''
  );
};

export default ButtonCard;