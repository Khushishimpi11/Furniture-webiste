import React, { useEffect } from "react";
import "./WhyChooseUs.css";
import sofamockup from '../assets/sofamockup.png'

const WhyChooseUs = () => {
  // Floating motion with cursor
  useEffect(() => {
    const sofa = document.querySelector(".why-sofa-mockup");
    if (!sofa) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // horizontal movement
      const y = (e.clientY / innerHeight - 0.5) * 20; // vertical movement
      sofa.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
    };

    const resetTransform = () => {
      sofa.style.transform = "translate(0, 0) scale(1)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    sofa.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      sofa.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section className="why-choose-section">
      {/* Decorative Sofa Mockup */}
      <img
        src={sofamockup}
        alt="Sofa Mockup"
        className="why-sofa-mockup"
      />

      <div className="why-choose-top">
        <span className="why-label">★ WHY CHOOSE US</span>
        <h2 className="why-title">
          Crafting with <span>Purpose, Precision</span>
          <br /> & Excellence
        </h2>
        <p className="why-description">
          From concept to completion, Tanotrai Furnitech brings together creativity,
          craftsmanship, and quality to shape spaces and furniture that truly reflect
          your identity and vision.
        </p>
      </div>

      <div className="why-choose-steps">
        <div className="why-step step-1">
          <img
            src="https://hub2.dealerwebadmin.com/wp-content/uploads/sites/477/2015/10/15-0008039.jpg?w=1152&h=638&zc=1&a=m&q=92"
            alt="Integrated Design"
          />
          <h3>Integrated Design + Manufacturing Capability</h3>
          <div className="divider-line"></div>
          <p>
            End-to-end control from concept to completion ensuring precision and perfection.
          </p>
        </div>

        <div className="why-step step-2">
          <img
            src="https://img.freepik.com/premium-photo/modern-factory-with-equipment-production-furniture-modern-technologies-industrial-production-furniture_554439-367.jpg"
            alt="Production Facility"
          />
          <h3>State-of-the-art Production Facility</h3>
          <div className="divider-line"></div>
          <p>
            Ensuring consistent quality through advanced equipment and processes.
          </p>
        </div>

        <div className="why-step step-3">
          <img
            src="https://foyr.com/learn/wp-content/uploads/2022/05/how-to-build-an-interior-design-team.jpg"
            alt="Expert Team"
          />
          <h3>Experienced Design & Execution Team</h3>
          <div className="divider-line"></div>
          <p>
            Professionals with diverse expertise delivering excellence across sectors.
          </p>
        </div>

        <div className="why-step step-4">
          <img
            src="https://mromirstudio.com/wp-content/uploads/2024/08/custome-furniture-Copy.jpg"
            alt="Customization"
          />
          <h3>Customization at Scale</h3>
          <div className="divider-line"></div>
          <p>
            Bespoke solutions tailored to both aesthetics and functionality.
          </p>
        </div>

        <div className="why-step step-5">
          <img
            src="https://customerattuned.com/wp-content/uploads/2019/05/shutterstock_1150617275-2-704x321.jpg"
            alt="Client Satisfaction"
          />
          <h3>Commitment to Client Satisfaction</h3>
          <div className="divider-line"></div>
          <p>
            Delivering reliability, trust, and innovation in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;