import React from "react";
import "./ClientsMarquee.css";

// Default imports
import logo1 from "../assets/client1.svg";
import logo2 from "../assets/client2.svg";
import logo3 from "../assets/client3.svg";
import logo4 from "../assets/client4.svg";
import logo5 from "../assets/client5.svg";

export default function ClientsMarquee({ logos }) {
  const defaultLogos = [logo1, logo2, logo3, logo4, logo5];
  const items = logos && logos.length ? logos : defaultLogos;

  return (
    <div className="clients-marquee" aria-label="Clients we have worked with">
      <div className="clients-track">
        {/* CoreValues की तरह 3 sets for perfect continuous loop */}
        {[...Array(3)].map((_, repeatIndex) =>
          items.map((src, index) => (
            <div 
              className="clients-item" 
              role="listitem" 
              key={`${repeatIndex}-${index}`}
            >
              <img src={src} alt={`Client ${index + 1}`} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}