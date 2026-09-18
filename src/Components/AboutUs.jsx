import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Left Side - Images */}
        <div className="image-section">
          <div className="main-image">
            <img 
              src="https://homessociety.com/blog/wp-content/uploads/2023/05/WhatsApp-Image-2023-04-18-at-12.29.45-6-1-768x1024.jpeg" 
              alt="Tanotrai Furnitech Interior Design"
              className="big-image"
            />
          </div>
        </div>  

        {/* Right Side - Text Content */}
        <div className="text-section">
           <span className="about-label">★ ABOUT US</span>
          <h1 className="company-title">Tanotrai Furnitech – Best Custom Furniture Brand in India</h1>
          
          <div className="description">
            <p>
              Tanotrai Furnitech is a multidisciplinary interior design and manufacturing company 
              specializing in commercial spaces and bespoke furniture solutions. We combine innovative 
              design, precision manufacturing, and turnkey project execution to create inspiring, 
              functional, and sustainable environments for offices, retail outlets, hospitality spaces, 
              and institutional interiors.
            </p>
            
            <p>
              With an integrated setup from concept development to in-house manufacturing and on-site 
              delivery, Tanotrai Furnitech ensures unmatched quality control, cost efficiency, and 
              timely completion for every project.
            </p>
            
            <div className="slogan">
              Crafting Spaces, Designing Experiences
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;