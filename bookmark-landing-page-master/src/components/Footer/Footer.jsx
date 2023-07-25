import React from 'react';
import Logo from '../../assets/logo-bookmark-footer.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        <img src={Logo} alt="" />
      </a>
      <div className="menu-item">
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Contact</a>
      </div>
      <div className="sns">
        <div className="sns-item">
          <a href="#">
            <i class="ic-facebook" aria-label="share to facebook"></i>
          </a>
          <a href="#">
            <i class="ic-twitter" aria-label="share to twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
