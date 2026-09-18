import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  const statsData = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <div className="stats-section">
      <div className="parallax-image"></div>
      <div className="stats-overlay">
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;