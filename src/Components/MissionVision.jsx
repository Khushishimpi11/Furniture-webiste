import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';
import "./MissionVision.css";

const MissionVisionContent = () => {
  return (
    <section className="mission-vision-section">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-content">
          <h2>Our mission and vision statement</h2>
          <p>
            Our mission and vision define who we are — blending craftsmanship, creativity, and comfort to shape the future of furniture design.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="cards-container">
          {/* Vision Card */}
          <div className="card">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faEye} className="fa-icon" />
            </div>
            <div className="card-inner">
              <h3 className="card-title">Vision</h3>
              <p className="card-text">
                To be a nationally recognized leader in commercial interior design and furniture manufacturing, known for our commitment to design excellence, craftsmanship, customer satisfaction, and sustainable innovation.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="card">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faBullseye} className="fa-icon" />
            </div>
            <div className="card-inner">
              <h3 className="card-title">Mission</h3>
              <p className="card-text">
                To deliver high-quality, innovative, and sustainable interior and furniture solutions that not only enhance the functionality and aesthetics of every space but also reflect our clients' vision and brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionContent;