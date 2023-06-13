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
            {/* <img src={CloseBtn} alt="" aria-label="Modal Close Button" /> */}
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=""/></svg>
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