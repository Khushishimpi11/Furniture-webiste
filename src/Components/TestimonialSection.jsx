import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./TestimonialSection.css";

const testimonials = [
  {
    id: 1,
    text: "Tanitrai Furnitect completely transformed our living room. The custom furniture, clean modern lines, and warm tones created a space that feels both luxurious and incredibly comfortable. Their attention to detail is unmatched!",
    name: "Riya Sharma",
    role: "Homeowner",
  },
  {
    id: 2,
    text: "The team understood my requirements perfectly and delivered custom-made furniture that fits my apartment flawlessly. Quality is top-notch and the finish is beautiful.",
    name: "Karan Mehta",
    role: "IT Professional",
  },
  {
    id: 3,
    text: "From design to installation, Tanitrai Furnitect was extremely professional and creative. They transformed my office into a modern and productive environment.",
    name: "Neha Verma",
    role: "Entrepreneur",
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  // ❗ Start from index 1 (because 0 = cloned last slide)
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // ➜ Create infinite loop structure
  const loopSlides = [
    testimonials[testimonials.length - 1], // clone last
    ...testimonials,
    testimonials[0], // clone first
  ];

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
    setTransition(true);
  };

  // AUTO SLIDE (LEFT → RIGHT)
  useEffect(() => {
    const auto = setInterval(prevSlide, 4000);
    return () => clearInterval(auto);
  }, []);

  // HANDLE JUMP WHEN REACH CLONE
  useEffect(() => {
    if (index === loopSlides.length - 1) {
      // reached clone of first
      setTimeout(() => {
        setTransition(false);
        setIndex(1); // jump to actual first
      }, 600);
    }

    if (index === 0) {
      // reached clone of last
      setTimeout(() => {
        setTransition(false);
        setIndex(testimonials.length);
      }, 600);
    }
  }, [index]);

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">

        <div className="testimonial-left">
          <img
            src="https://bestofexports.com/wp-content/uploads/2021/02/Wooden-Furniture-Manufacturer-1024x683.jpg"
            className="testimonial-image"
            alt="Interior"
          />
        </div>

        <div className="testimonial-right">
         <span className="why-label">★ TESTIMONIAL</span>
          <h2 className="testimonial-title">
            Here’s What <span>Warm Words</span><br />
            Our Clients Say
          </h2>

          {/* RATING SECTION */}
          <div className="rating-row">
            <h1 className="rating">4.80</h1>

            <div className="stars">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>2,688 reviews</p>
            </div>

            <div className="rating-text">
              From Concept To Craftsmanship, Tanitrai Furnitect transformed my space beautifully.
            </div>

            <div className="arrows">
              <button onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          {/* INFINITE SLIDER */}
          <div className="slider-box">
            <div
              ref={sliderRef}
              className="slide-inner"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: transition ? "transform 0.6s ease" : "none",
              }}
            >
              {loopSlides.map((item, i) => (
                <div key={i} className="single-slide">
                  <p className="testimonial-text">“{item.text}”</p>

                  <div className="client-info">
                    <FontAwesomeIcon icon={faUserCircle} className="client-icon" />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
           
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;
