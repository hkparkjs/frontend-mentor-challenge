import CheckBtn from '../../assets/icon-check.svg';
import './ThankYouAlert.css';

const ThankYouAlert = () => {
  const hideThankYouAlert = () => {
    const thankYouAlert = document.querySelector('.thank-you-alert-area');
    if (thankYouAlert.classList.contains('open')) {
      thankYouAlert.classList.remove('open');
      document.getElementsByTagName('body')[0].classList.remove('open-alert');
    }
  };

  return (
    <div className="thank-you-alert-area">
      <div className="thank-you-alert-background"></div>
      <div className="thank-you-alert-container">
        <div className="check-img">
          <img src={CheckBtn} alt="" aria-hidden="true"/>
        </div>
        <h3>Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
          an email once our campaign is completed.
        </p>
        <button
          className="alert-btn"
          onClick={() => hideThankYouAlert()}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ThankYouAlert;