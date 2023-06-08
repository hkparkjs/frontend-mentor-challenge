import React from 'react';
import './BackThisProject.css';
import CloseBtn from '../../assets/icon-close-modal.svg';
import { stands } from '../../data/stands.json';
import RadioCard from '../RadioCard/RadioCard';

const BackThisProject = ({ selectedStand, onSelected }) => {
  return (
    <div className="modal-area">
      <div className="modal-background">
      </div>
      <div className="modal-container">
        <div className="title">
          <h2>Back This Project</h2>
          <button
            className="close-btn"
            onClick={() => {
              const modal = document.querySelector('.modal-area');
              if (modal.classList.contains('open')) {
                modal.classList.remove('open');
              }
            }}
          >
            <img src={CloseBtn} alt="" aria-label="Modal Close Button" />
          </button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <div className="radio-card-area">
          {stands.map((stand, idx) => (
            <RadioCard
              key={idx}
              onSelected={stand => onSelected(stand)}
              isActive={selectedStand === stand.title} 
              selectedStand={selectedStand}
              {...stand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackThisProject;