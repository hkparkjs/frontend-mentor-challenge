import React from 'react';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="menu-background"></div>
      <div className="header">
        <div className="header-bar">
          <a className="logo" href="#">
            <img src={logo} alt="" aria-label="Main logo" />
          </a>
          <button
            className="hamburger desktop-hidden"
            onClick={() => {
              const menu = document.querySelector('.menu');
              const menuBg = document.querySelector('.menu-background');
              const hamburger = document.querySelector('.hamburger');
              if (hamburger.classList.contains('open')) {
                hamburger.classList.remove('open');
                document.getElementsByTagName('body')[0].classList.remove('open-modal');
              } else {
                hamburger.classList.add('open');
                document.getElementsByTagName('body')[0].classList.add('open-modal');
              }
              menu.classList.toggle('open');
              menuBg.classList.toggle('open');
            }}
          >
            {/* <img src={hamburger} alt="" aria-label="Menu button" /> */}
          </button>
        </div>
      </div>
      <div className="menu mobile-hidden">
        <div className="menu-item">
          <a href="#">About</a>
        </div> 
        <div className="menu-item">
          <a href="#">Discover</a>
        </div>
        <div className="menu-item">
          <a href="#">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Header;