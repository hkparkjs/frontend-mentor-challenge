import React from 'react';

import './Main.scss';
import Features from './Features/Features';
import Title from './Title/Title';
import DownloadExtensions from './DownloadExtensions/DownloadExtensions';
import FAQ from './FAQ/FAQ';
import Subscribe from './Subscribe/Subscribe';

function Main() {
  return (
    <main className="container">
      <Title />
      <Features />
      <DownloadExtensions />
      <FAQ />
      <Subscribe />
    </main>
  );
}

export default Main;
