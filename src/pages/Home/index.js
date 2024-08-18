import React from 'react';
import LogoWV from '../../assests/images/WV-Horz-White.png'
import background from '../../assests/images/randomBackground.jpg'

import './index.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-block">
        <div className="content-img-box">
          <img src={LogoWV} alt="Logo" id="homePageLogo" />
        </div>
        <div className="content-text-box">
          <h1 className="slogan-text">
            <b>Empowering</b> <br />
            a Sustainable Tomorrow <b>Together</b>.
          </h1>
          <div className="hero-buttons">
            <a href="/" className="btn btn-primary">Contact us ➤</a>
            {/* <a href="/" className="btn btn-secondary">Download the app ➤</a> */}
          </div>
        </div>
      </div>
      <div className="content-block mission-block" style={{ backgroundColor: 'rgba(3, 3, 3, 1)', }}>
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            We aim to unite and empower organizations around the world, driving impactful change through sustainable practices and innovation. Our collective efforts are focused on building a greener, more inclusive future for all.
          </p>
        </div>
      </div>

      <div className="content-block mission-block" style={{ backgroundImage: `url('/path-to-your-image2.jpg')` }}>
        <div className="mission-text">
          <h2>Our Vision</h2>
          <p>
            To be the leading force in creating a world where sustainability is at the core of every business decision, ensuring the longevity and well-being of our planet for future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;