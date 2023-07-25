import React, { useState } from 'react';
import './Subscribe.scss';
import ErrorIcon from '../../../assets/icon-error.svg';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const validate = (email) => {
    // RFC-5322
    const regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (regex.test(email) == false) {
      setIsError(true);
    } else {
      setIsError(false);
      setEmail('');
    }
  };

  return (
    <div className="subscribe">
      <span>35,000+ already joined</span>
      <h2>Stay up-to-date with what we’re doing</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validate(email);
        }}
      >
        <div
          className={`email-input-area${isError === true ? ' is-error' : ''}`}
        >
          <input
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="err-icon">
            <img src={ErrorIcon} alt="" />
          </div>
          <div className="err-msg">
            <span>Whoops, make sure it's an email</span>
          </div>
        </div>
        <button type="submit" className="btn-red">
          Contact Us
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
