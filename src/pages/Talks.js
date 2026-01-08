import React from 'react';
import './Talks.css';

function Talks() {
  return (
    <div className="archive personal-page">
      <div className="personal-content page-content">
        <h1 className="page__title">Personal</h1>
        <div className="personal-section">
          <p className="personal-lead">
            I run an off-road accessories brand{" "}
            <a
              className="personal-link"
              href="https://nowmadstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nowmad
            </a>{" "}
            where I design and develop every product myself.
          </p>
          <div className="personal-gallery personal-gallery--single">
            <figure className="personal-card personal-card--logo personal-card--no-caption">
              <img
                src={`${process.env.PUBLIC_URL}/Personal_img/personal_img_004.png`}
                alt="Nowmad off-road accessories"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
        <div className="personal-section">
          <p className="personal-lead">I enjoy road trips.</p>
          <div className="personal-gallery">
            <figure className="personal-card">
              <img
                src={`${process.env.PUBLIC_URL}/Personal_img/personal_img_003.png`}
                alt="My 2025 road trip route"
                loading="lazy"
              />
              <figcaption>My 2025 route (23343 miles)</figcaption>
            </figure>
            <figure className="personal-card">
              <img
                src={`${process.env.PUBLIC_URL}/Personal_img/personal_img_002.png`}
                alt="All-time driving map"
                loading="lazy"
              />
              <figcaption>My all-time driving map</figcaption>
            </figure>
          </div>
        </div>
        <div className="personal-section">
          <p className="personal-lead">I also enjoy snowboarding.</p>
          <div className="personal-gallery personal-gallery--single">
            <figure className="personal-card">
              <img
                src={`${process.env.PUBLIC_URL}/Personal_img/personal_img_001.png`}
                alt="Snowboarding in the mountains"
                loading="lazy"
              />
              <figcaption>Snowboarding</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talks;
