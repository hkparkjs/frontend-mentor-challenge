import React from 'react';
import BackThisProject from '../BackThisProject/BackThisProject';
import './ButtonCard.css';

const ButtonCard = ({ title, price, description, left, onClick }) => {
  return (
    price > 0 ? (
    <div className={`button-card${left == 0 ? ' out-of-stock' : ''}`}>
      <span className="title">{title}</span>
      <span className="price">Pledge ${price} or more</span>
      <p className="description">
        {description}
      </p>
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
    ) : ''
  );
};

export default ButtonCard;