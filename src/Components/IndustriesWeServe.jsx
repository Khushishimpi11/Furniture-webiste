import React from "react";
import "./IndustriesWeServe.css";

// Import your local icons
import OfficeIcon from "../assets/office.png";
import RetailIcon from "../assets/retail.png";
import HotelIcon from "../assets/hospital.png";
import InstitutionIcon from "../assets/institution.png";
import GovernmentIcon from "../assets/government.png";

const industries = [
  { icon: OfficeIcon, name: "Offices" },
  { icon: RetailIcon, name: "Retail" },
  { icon: HotelIcon, name: "Hospitality" },
  { icon: InstitutionIcon, name: "Institutions" },
  { icon: GovernmentIcon, name: "Government" },
];

const IndustriesWeServe = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index}>
            <div className="icon-wrapper">
              <span className="icon-bg"></span>
              <img src={item.icon} alt={item.name} className="icon-img" />
            </div>
            <p className="industry-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
