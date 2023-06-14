import React, { useState } from 'react';
import BookmarkBtn from '../../assets/icon-bookmark.svg';
import ButtonCard from '../ButtonCard/ButtonCard';
import { stands } from '../../data/stands.json';
import './Main.css';
import '../BackThisProject/BackThisProject.jsx';
import BackThisProject from '../BackThisProject/BackThisProject.jsx';

const Main = () => {
  const [selectedStand, setSelectedStand] = useState('');
  const [bookmarked, setBookmarked] = useState(false);
  const [backers, setBackers] = useState(5007);
  const [money, setMoney] = useState(89914);

  const showModal = () => {
    const modal = document.querySelector('.modal-area');
    if (!modal.classList.contains('open')) {
      modal.classList.add('open');
    }
  };

  return (
    <>
      <div className="container">
        <div className="main-title">
          <div className="main-title-text-area">
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          </div>
          <div className="main-title-button-area">
            <button
              className="main-title-button"
              onClick={() => {
                setSelectedStand('');
                showModal();
              }}
            >
              Back this project
            </button>
            <button
              className={`bookmark-btn${bookmarked ? ' bookmarked' : ''}`}
              onClick={() => setBookmarked(!bookmarked)}
            >
              <div className="bookmark-btn-icon"></div>
              {/* <img src={BookmarkBtn} alt="" aria-label="Bookmark Button" /> */}
              <div className="bookmark-btn-text mobile-hidden">
                { bookmarked === true ? 'Bookmarked' : 'Bookmark' }
              </div>
            </button>
          </div>  
        </div>
        <div className="performance">
          <div className="performance-report">
            <div className="performance-report-item">
              <span className="num">${money.toLocaleString('en')}</span>
              <span className="label">of $100,000 backed</span>
            </div>
            <div className="line"></div>
            <div className="performance-report-item">
              <span className="num">{backers.toLocaleString('en')}</span>
              <span className="label">total backers</span>
            </div>
            <div className="line"></div>
            <div className="performance-report-item">
              <span className="num">56</span>
              <span className="label">days left</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="about">
          <div className="about-txt-area">
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
              to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
              your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
              to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
          </div>
          <div className="about-button-card-area">
            {stands.map((stand, idx) => (
              <ButtonCard
                key={idx}
                onClick={() => {
                  setSelectedStand(stand.title);
                  showModal();
                  window.scrollTo({ top: 262 + 186* idx, behavior: 'smooth' });
                }}
                {...stand}
              />
            ))}
          </div>
        </div>
      </div>
      <BackThisProject
        selectedStand={selectedStand}
        onSelected={stand => setSelectedStand(stand)}
        onChangeBackers={() => setBackers(backers + 1)}
        onChangeMoney={value => setMoney(value + money)}
      />
    </>
  );
};

export default Main;