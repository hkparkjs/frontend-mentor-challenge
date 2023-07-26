import React from 'react';
import Logo from '../../assets/logo-bookmark-footer.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <a
          href="#"
          className="footer-logo"
          aria-label="Footer logo link for going home"
        >
          <img src={Logo} alt="footer logo" />
        </a>
        <div className="menu-item">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
        </div>
      </div>
      <div className="sns">
        <div className="sns-item">
          <a href="#">
            <i class="ic-facebook" title="share to facebook"></i>
          </a>
          <a href="#">
            <i class="ic-twitter" title="share to twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
