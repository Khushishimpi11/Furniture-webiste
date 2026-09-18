import React from "react";
import "./Footer.css";
import logo from "../assets/logo1.png"; 

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faFacebookF, faInstagram, faYoutube, faTwitter, faPhone, faEnvelope, faMapMarkerAlt);

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-wrapper">

        {/* LEFT — Logo & Intro */}
        <div className="footer-col">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-intro">
            We transform your vision into beautifully crafted spaces with
            premium designs, elegance, and craftsmanship.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

       {/* ADDRESS + CONTACT */}
<div className="footer-col">
  <h3 className="footer-title">Contact</h3>
  <div className="contact-item">
    <div className="contact-icon-container">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
    </div>
    <span className="contact-text">
      5609 E Sprague Ave,<br/>Spokane Valley, WA 99212, USA
    </span>
  </div>
  <div className="contact-item">
    <div className="contact-icon-container">
      <FontAwesomeIcon icon={faPhone} className="contact-icon" />
    </div>
    <span className="contact-text">+1 (123) 456-7890</span>
  </div>
  <div className="contact-item">
    <div className="contact-icon-container">
      <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
    </div>
    <span className="contact-text">support@example.com</span>
  </div>
</div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3 className="footer-title">Newsletter</h3>
          <p>Subscribe for updates and offers.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

      </div>

      {/* TOP DIVIDER */}
      <div className="footer-divider-top"></div>

      {/* BOTTOM FOOTER TEXT */}
      <div className="footer-bottom">
        © 2025 Tanitrai Furnitech. All Rights Reserved.
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="footer-bottom-line"></div>

      {/* WATERMARK */}
      <div className="footer-watermark">Tanotrai Furnitech</div>

    </footer>
  );
};

export default Footer;
