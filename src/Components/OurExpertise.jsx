import React, { useState } from "react";
import "./OurExpertise.css";
import bgImg from "../assets/services.png";

const OurExpertise = () => {
  const [active, setActive] = useState(0);

  const expertiseData = [
    {
      id: 0,
      number: "01",
      title: "Commercial Interior Design",
      image: "https://cdn.prod.website-files.com/66a08e07fa6352714fc1d6da/66a0af622f7fa20370ca6482_HAM_3112-copy-scaled.webp",
      description: (
        <ul>
          <li>Space Planning & Concept Development</li>
          <li>3D Visualization & Design Presentation</li>
          <li>Material Selection & Brand Integration</li>
          <li>Turnkey Interior Fit-outs (Flooring, Ceilings, Partitions, MEP Coordination)</li>
          <li>On-site Supervision & Project Management</li>
        </ul>
      ),
    },
    {
      id: 1,
      number: "02",
      title: "Furniture Manufacturing",
      image: "https://www.fusionfurnitureinc.com/wp-content/uploads/2021/01/110-720x480.jpg",
      description: (
        <ul>
          <li>In-house production unit with modern woodworking & metal fabrication</li>
          <li>Custom and modular furniture for offices, retail, hospitality, and institutions</li>
          <li>Ergonomic and design-driven furniture solutions</li>
          <li>Quality assurance at every stage — from detailing to finish</li>
          <li>Handles both large-scale and custom one-off pieces</li>
        </ul>
      ),
    },
    {
      id: 2,
      number: "03",
      title: "Turnkey Solutions",
      image: "https://petroserveint.com/wp-content/uploads/2020/01/tk-1024x683.jpg",
      description: (
        <p>
         At Tanotrai Furnitech, we follow a Design–Build–Deliver model that blends timeless creativity with modern craftsmanship. From concept development and material selection to precision manufacturing and flawless installation, every stage is executed with meticulous attention to detail — ensuring elegance, durability, and seamless delivery from vision to reality.
        </p>
      ),
    },
  ];

  return (
    <section
      className="our-expertise-section"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      <div className="expertise-container">
        <div className="expertise-header">
          <span className="expertise-label">★ OUR EXPERTISE</span>
          <h2 className="expertise-title">
            Experience premium furniture <br /> craftsmanship by Tanotrai Furnitech
          </h2>
          <p className="expertise-subtext">
            At Tanotrai Furnitech, every piece of furniture is designed to define spaces and inspire comfort.
            We combine creativity, precision, and superior materials to deliver furniture that brings elegance
            and purpose to modern interiors.
          </p>
        </div>

        {/* Swapped sides: text left, image right */}
        <div className="expertise-content">
          <div className="expertise-left">
            {expertiseData.map((item, index) => (
              <div
                key={item.id}
                className={`expertise-item ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <div className="expertise-heading">
                  <span className="expertise-number">{item.number}</span>
                  <h3>{item.title}</h3>
                </div>
                {active === index && (
                  <div className="expertise-desc">{item.description}</div>
                )}
              </div>
            ))}
          </div>

          <div className="expertise-right">
            <div className="expertise-image">
              <img
                src={expertiseData[active].image}
                alt={expertiseData[active].title}
              />
              <div className="expertise-image-title">
                {expertiseData[active].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
