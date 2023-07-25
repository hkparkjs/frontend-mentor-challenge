import React from 'react';

function ButtonCard({ browser }) {
  return (
    <div className="browser-list-card">
      <div className="browser-list-card-img">
        <img src={browser.icon} alt={`${browser.name} logo`} />
      </div>
      <h3>Add to {browser.name}</h3>
      <p>Minimum version {browser.version}</p>
      <div className="division"></div>
      <button className="btn-blue">Add & Install Extension</button>
    </div>
  );
}

export default ButtonCard;
