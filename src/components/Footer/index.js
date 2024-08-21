import React from 'react';
import './index.scss'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Our contact</h4>
          <ul>
            <li><a href="/">Number: fill</a></li>
            <li><a href="/">Email: fill</a></li>
            <li><a href="/">Address: randome address <br/> here </a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Latest advancements</h4>
          <ul>
            <li><a href="/">Post 1</a></li>
            <li><a href="/">Post 2</a></li>
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
        <p>WorldviewVentures © 2024–2025</p>
        {/* <div className="footer-icons">
          <a href="/" className="footer-icon"><i className="fab fa-twitter"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-youtube"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-linkedin"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-github"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-instagram"></i></a>
          <a href="/" className="footer-icon"><i className="fab fa-tiktok"></i></a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
