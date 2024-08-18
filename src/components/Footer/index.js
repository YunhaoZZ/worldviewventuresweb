import React from 'react';
import './index.scss'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Our research</h4>
          <ul>
            <li><a href="/">Overview</a></li>
            <li><a href="/">Index</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Latest advancements</h4>
          <ul>
            <li><a href="/">GPT-4</a></li>
            <li><a href="/">GPT-4o mini</a></li>
            <li><a href="/">DALL·E 3</a></li>
            <li><a href="/">Sora</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>ChatGPT</h4>
          <ul>
            <li><a href="/">For Everyone</a></li>
            <li><a href="/">For Teams</a></li>
            <li><a href="/">For Enterprises</a></li>
            <li><a href="/">ChatGPT login ↗</a></li>
            <li><a href="/">Download</a></li>
          </ul>
          <h4>API</h4>
          <ul>
            <li><a href="/">Platform overview</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Documentation ↗</a></li>
            <li><a href="/">API login ↗</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Safety overview</h4>
          <ul>
            <li><a href="/">Safety overview</a></li>
            <li><a href="/">Safety standards</a></li>
          </ul>
          <h4>Teams</h4>
          <ul>
            <li><a href="/">Safety Systems</a></li>
            <li><a href="/">Preparedness</a></li>
            <li><a href="/">Superalignment</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Our Charter</a></li>
            <li><a href="/">Security</a></li>
            <li><a href="/">Residency</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Terms & policies</h4>
          <ul>
            <li><a href="/">Terms of use</a></li>
            <li><a href="/">Privacy policy</a></li>
            <li><a href="/">Brand guidelines</a></li>
            <li><a href="/">Other policies</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>OpenAI © 2015–2024</p>
        <div className="footer-icons">
          <a href="/" className="footer-icon"><i className="fab fa-twitter"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-youtube"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-linkedin"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-github"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-instagram"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
