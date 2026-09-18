import React, { useState } from 'react';
import './ContactSection.css';
import cimg from '../assets/c3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faGlobe, 
  faPaperPlane, 
  faTimes,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faPinterest 
} from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <section className="contact-section">
      {!showContactForm ? (
        // Initial View - Image left, text right with Contact Us button
        <div className="contact-initial">
          <div className="contact-container">
            <div className="contact-image">
              <img 
                src={cimg}
                alt="Furniture Showroom"
              />
            </div>
            <div className="contact-content">
              <span className="contact-label">
                <FontAwesomeIcon icon={faStar} /> GET IN TOUCH WITH US
              </span>
              <h2>Let's Build Your Dream Space</h2>
              <p>
                We'd love to hear from you! Whether you're looking for custom furniture, 
                have questions about our products, or need assistance with your order, 
                our team is here to help you create the perfect space.
              </p>
              <p>
                Our expert craftsmen and designers are ready to bring your vision to life 
                with quality furniture that lasts for generations.
              </p>
              <button className="contact-btn" onClick={toggleContactForm}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Detailed Contact View - Map left, form right
        <div className="contact-detailed">
          <div className="contact-detailed-top-space"></div>
          
          {/* Title and Intro Section */}
          <div className="contact-detailed-header">
            <span className="contact-detailed-label">
              <FontAwesomeIcon icon={faStar} /> CONTACT US
            </span>
            <h2>Get In Touch With Our Team</h2>
            <p className="contact-detailed-intro">
              We're here to help you create the perfect space. Whether you have questions about our products, 
              need custom furniture solutions, or want to visit our showroom, our team is ready to assist you. 
              Reach out to us through any of the following methods.
            </p>
          </div>
          
          <div className="contact-detailed-container">
            <div className="contact-map">
              <div className="map-placeholder">
                <h3>Our Showroom Location</h3>
                <p>123 Furniture Street, Design District</p>
                <p>New York, NY 10001</p>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.99870892401757!3d40.728755471389295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c338f691d%3A0x6e0e8a5a157b3e4a!2sFurniture%20District%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin" 
                    width="100%" 
                    height="400" 
                    style={{border:0, borderRadius: '8px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Store Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="contact-form-section">
              <h3>Send us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Select Inquiry Type</option>
                    <option value="custom">Custom Furniture</option>
                    <option value="existing">Existing Products</option>
                    <option value="repair">Repair Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <div className="form-buttons">
                  <button type="submit" className="submit-btn">
                    <FontAwesomeIcon icon={faPaperPlane} /> Submit Message
                  </button>
                  <button type="button" className="hide-btn" onClick={toggleContactForm}>
                    <FontAwesomeIcon icon={faTimes} /> Hide Form
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info Cards */}
          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
              <span className="card-timing">Mon-Fri: 9AM-6PM</span>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h4>Email</h4>
              <p>info@furniturestore.com</p>
              <span className="card-timing">Response within 24 hours</span>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h4>Address</h4>
              <p>123 Furniture St, NY 10001</p>
              <span className="card-timing">Showroom: 10AM-8PM</span>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
              </div>
              <span className="card-timing">Connect with us</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;