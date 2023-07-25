import React from 'react';
import ChromeImg from '../../../assets/logo-chrome.svg';
import FirefoxImg from '../../../assets/logo-firefox.svg';
import OperaImg from '../../../assets/logo-opera.svg';
import './DownloadExtensions.scss';
import ButtonCard from './ButtonCard/ButtonCard';

function DownloadExtensions() {
  const browserInfo = [
    { name: 'Chrome', version: '62', icon: ChromeImg },
    { name: 'Firefox', version: '55', icon: FirefoxImg },
    { name: 'Opera', version: '46', icon: OperaImg },
  ];

  return (
    <div className="download">
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="browser-list">
        {browserInfo.map((browser, idx) => (
          <ButtonCard browser={browser} key={idx} cardIdx={`btn-card-${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default DownloadExtensions;
