import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import BackThisProject from '../components/BackThisProject/BackThisProject';
import ThankYouAlert from '../components/ThankYouAlert/ThankYouAlert';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <ThankYouAlert />
    </>
  );
};
export default Home;