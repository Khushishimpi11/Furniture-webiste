import React, { useEffect, useRef, useState } from "react";
import "./GallerySection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  const [popupOpen, setPopupOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // ALL IMAGES FOR POPUP GRID
  const allImages = [
    "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-9.jpg",
    "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-12.jpg",
    "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-10-1536x1080.jpg",
    "https://www.urbanconcepts.ph/wp/wp-content/uploads/2024/07/Top-7-Sustainable-Furniture-Materials-for-Your-Home.jpg",
    "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9.jpg",
    "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-8.jpg",
    "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11.jpg",
    "https://images.bergerpaints.com/s3fs-public/2024-04/beautiful-painted-furniture-1024x536_0.jpg?VersionId=RkdM5s0Sqhi1ZhRJc.DiBwHX1fzF7LLE&format=webp&width=3840&quality=75"
  ];

  useEffect(() => {
    gsap.to(topRowRef.current, {
      x: 300,
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(bottomRowRef.current, {
      x: -300,
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <section className="gallery-section">
        <h1 className="gallery-watermark">gallery</h1>

        <div className="gallery-wrapper">
          {/* TOP ROW */}
          <div className="image-row top" ref={topRowRef}>
            <img
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-9.jpg"
              className="img medium"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
            <img
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-12.jpg"
              className="img big"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
            <img
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-10-1536x1080.jpg"
              className="img small"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
            <img
              src="https://www.urbanconcepts.ph/wp/wp-content/uploads/2024/07/Top-7-Sustainable-Furniture-Materials-for-Your-Home.jpg"
              className="img big"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
          </div>

          {/* BOTTOM ROW */}
          <div className="image-row bottom" ref={bottomRowRef}>
            <img
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9.jpg"
              className="img big"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
            <img
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-8.jpg"
              className="img medium"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
            <img
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11.jpg"
              className="img small"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
            <img
              src="https://images.bergerpaints.com/s3fs-public/2024-04/beautiful-painted-furniture-1024x536_0.jpg?VersionId=RkdM5s0Sqhi1ZhRJc.DiBwHX1fzF7LLE&format=webp&width=3840&quality=75"
              className="img big"
              onClick={(e) => {
                setActiveImage(e.target.src);
                setPopupOpen(true);
              }}
              alt="Gallery image"
            />
          </div>
        </div>
      </section>

      {/* POPUP */}
      {popupOpen && (
        <div className="popup-overlay">
          <button className="close-btn" onClick={() => setPopupOpen(false)}>
            ✕
          </button>

          <div className="popup-content">
            <div className="popup-left">
              <img src={activeImage} className="popup-main-img" alt="Enlarged view" />
            </div>

            <div className="popup-right">
              {allImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="popup-thumb"
                  onClick={() => setActiveImage(img)}
                  alt="Thumbnail"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}