import React from 'react';
import TwitterIcon from '../../../assets/icon-twitter.svg';
import FacebookIcon from '../../../assets/icon-facebook.svg';
import './NavBar.scss';

function NavBar({ menuOpened }) {
  return (
    <div className={`nav-bar${menuOpened ? ' open' : ''}`}>
      <div className="nav-bar-menu">
        <div className="menu-item">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
        </div>
        <button type="button">Login</button>
      </div>
      <div className="sns">
        <div className="sns-item">
          <a href="#">
            <img src={FacebookIcon} alt="share to facebook" />
          </a>
          <a href="#">
            <img src={TwitterIcon} alt="share to twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
