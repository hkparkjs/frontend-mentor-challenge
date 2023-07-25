import React, { useState } from 'react';
import FirstFeatureImg from '../../../assets/illustration-features-tab-1.svg';
import SecondFeatureImg from '../../../assets/illustration-features-tab-2.svg';
import ThirdFeatureImg from '../../../assets/illustration-features-tab-3.svg';
import './Features.scss';

function Features() {
  const [selected, setSelected] = useState(0);
  const featuresTitle = [
    'Simple Bookmarking',
    'Speedy Searching',
    'Easy Sharing',
  ];
  const featuresDesc = [
    {
      title: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      image: FirstFeatureImg,
    },
    {
      title: 'Intelligent search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      image: SecondFeatureImg,
    },
    {
      title: 'Share your bookmarks',
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      image: ThirdFeatureImg,
    },
  ];

  return (
    <div className="features">
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="features-list" role="tablist" aria-label="Feature Tabs">
        {featuresTitle.map((title, idx) => (
          <button
            key={`btn-${idx}`}
            type="button"
            role="tab"
            aria-selected={selected === idx ? true : false}
            aria-controls={`panel-${idx + 1}`}
            tabIndex={selected === idx ? -1 : 0}
            id={`tab-${idx + 1}`}
            className={`features-list-item${
              selected === idx ? ' is-active' : ''
            }`}
            onClick={() => {
              setSelected(idx);
            }}
          >
            {title}
          </button>
        ))}
      </div>
      {featuresDesc.map((feature, idx) => (
        <div
          key={`tabpanel-${idx}`}
          className="features-desc"
          id={`panel-${idx + 1}`}
          role="tabpanel"
          tabIndex="0"
          aria-labelledby={`tab-${idx + 1}`}
          aria-expanded={selected === idx ? true : false}
          hidden={selected !== idx ? true : false}
        >
          <div className="features-desc-image">
            <div className="features-desc-image-container">
              <img src={feature.image} alt="" />
            </div>
          </div>
          <div className="features-desc-text">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <button className="btn-blue">More Info</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
