import React from "react";
import { motion } from "framer-motion";
import "./CoreValues.css";

const CoreValues = () => {
  const coreValues = [
    "Innovation",
    "Integrity",
    "Quality",
    "Sustainability",
    "Timely Delivery",
    "Customer Focus",
  ];

  const starVariants = {
    animate: {
      scale: [0.8, 1.4, 0.8],
      rotate: [0, 180, 360],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="core-marquee">
      <div className="core-track">
        {[...Array(3)].map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {coreValues.map((value, index) => (
              <span key={`${repeatIndex}-${index}`} className="core-item">
                {value}
                <motion.span
                  className="core-star"
                  variants={starVariants}
                  animate="animate"
                >
                  ✦
                </motion.span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
