import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './FurnitureBanner.css';

const FurnitureBanner = () => {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const titleRef = useRef(null);
  const circlesContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animations for circles
      gsap.to(circle1Ref.current, {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(circle2Ref.current, {
        y: -40,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      gsap.to(circle3Ref.current, {
        y: -25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8
      });

      // Fade in animation for circles
      gsap.fromTo([circle1Ref.current, circle2Ref.current, circle3Ref.current], 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, stagger: 0.3 }
      );

      // Content animations
      gsap.fromTo('.text-content', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5 }
      );

      gsap.fromTo('.subtitle', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.2 }
      );

      gsap.fromTo('.phone-info', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.4 }
      );
    }, circlesContainerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="banner-container">
      {/* Background Image */}
      <div className="banner-bg"></div>
      
      {/* Floating Circles */}
      <div className="circles-container" ref={circlesContainerRef}>
        <div 
          className="circle circle-1"
          ref={circle1Ref}
        >
          <div className="circle-image img-1"></div>
          <div className="circle-outline"></div>
        </div>
        
        <div 
          className="circle circle-2"
          ref={circle2Ref}
        >
          <div className="circle-image img-2"></div>
          <div className="circle-outline"></div>
        </div>
        
        <div 
          className="circle circle-3"
          ref={circle3Ref}
        >
          <div className="circle-image img-3"></div>
          <div className="circle-outline"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="text-content">
          <div className="premium-badge">
            <span>PREMIUM COLLECTION</span>
          </div>
          
          <h1 ref={titleRef} className="serif-heading">
           Furnitech — Redefining Modern Furniture & Interiors.
          </h1>
          
          <p className="subtitle">
            "From concept to creation, we deliver design-driven, sustainable, and functional interiors."
          </p>
          
          <div className="phone-info">
            <div className="phone-number">
              <i className="fas fa-phone"></i>
              <span>Call: 4523697450</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureBanner;