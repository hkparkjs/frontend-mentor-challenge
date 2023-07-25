import React, { useState } from 'react';
import './Header.scss';
import NavBar from './NavBar/NavBar';
import LogoImg from '../../assets/logo-bookmark.svg';
import LogoMonoImg from '../../assets/logo-bookmark-mono.svg';
import CloseBtn from '../../assets/icon-close.svg';
import HamburgerBtn from '../../assets/icon-hamburger.svg';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header>
      <a href="#" className="logo">
        <img src={menuOpened ? LogoMonoImg : LogoImg} alt="logo image" />
      </a>
      <button
        className="close-btn"
        onClick={() => {
          setMenuOpened(!menuOpened);
          if (menuOpened === false) {
            document.body.style = 'overflow: hidden;';
          } else {
            document.body.style = '';
          }
        }}
      >
        <img src={menuOpened ? CloseBtn : HamburgerBtn} alt="" />
      </button>
      <NavBar menuOpened={menuOpened} />
    </header>
  );
}

export default Header;
