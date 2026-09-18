import React, { useState, useRef, useEffect } from "react";
import "./OurProcess.css";
import bgImg from "../assets/process1.png"; // Add your background image path
import mockupImage from "../assets/mockprocess.png"; // Import your mockup image
// import mockupImage2 from "../assets/process2.png"; 
const OurProcess = () => {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('right');
  const [descHeights, setDescHeights] = useState({});
  const descRefs = useRef([]);

  const processData = [
    {
      id: 0,
      number: "01",
      title: "Client Briefing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Understanding your requirements, goals, and design vision through detailed discussions and analysis.",
    },
    {
      id: 1,
      number: "02",
      title: "Concept Design",
      image: "https://thumbs.dreamstime.com/b/designer-sketching-chair-design-armchair-sketch-interior-furniture-prototype-draft-development-product-plan-studio-concept-385715561.jpg",
      description: "Creating layouts, themes, and initial design concepts that align with your vision and requirements.",
    },
    {
      id: 2,
      number: "03",
      title: "Design Finalization",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
      description: "Refining designs with materials, colors, and detailed drawings to perfect every aspect of the project.",
    },
    {
      id: 3,
      number: "04",
      title: "Manufacturing",
      image: "https://www.interioworks.com/wp-content/uploads/2024/03/iWorks-blog-image-meblarstwo-1200x800.webp",
      description: "In-house production with precision and quality control to ensure every piece meets our high standards.",
    },
    {
      id: 4,
      number: "05",
      title: "Execution",
      image: "https://www.decorpot.com/images/1190879271Interior-designers-Main-Image.jpg",
      description: "On-site installation and interior finishing by expert teams to bring the design to life.",
    },
    {
      id: 5,
      number: "06",
      title: "Handover",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Final inspection and delivery — ready for use! Ensuring complete satisfaction with the finished project.",
    },
  ];

  useEffect(() => {
    // Calculate heights for each description
    const heights = {};
    descRefs.current.forEach((ref, index) => {
      if (ref) {
        heights[index] = ref.scrollHeight;
      }
    });
    setDescHeights(heights);
  }, []);

  const handleItemHover = (index) => {
    if (index !== active) {
      setPrevActive(active);
      setAnimationDirection(index > active ? 'right' : 'left');
      setActive(index);
    }
  };

  const getImageAnimationClass = (index) => {
    if (index === active) {
      return animationDirection === 'right' ? 'sliding-in-right' : 'sliding-in-left';
    }
    if (index === prevActive) {
      return animationDirection === 'right' ? 'sliding-out-left' : 'sliding-out-right';
    }
    return '';
  };

  return (
    <section 
      className="our-process-section"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      
      {/* First Mockup Image - TOP RIGHT CORNER */}
      <div className="process-mockup process-mockup-top">
        <img src={mockupImage} alt="Design Mockup" />
      </div>
      
      {/* Second Mockup Image - BOTTOM LEFT CORNER */}
      {/* <div className="process-mockup process-mockup-bottom">
        <img src={mockupImage2} alt="Design Mockup 2" />
      </div>
       */}
      <div className="process-container">
        <div className="process-header">
          <span className="process-label">★ OUR PROCESS</span>
          <h2 className="process-title">
            Our streamlined approach to <br /> bringing your vision to life
          </h2>
          <p className="process-subtext">
            From initial consultation to final handover, we follow a meticulous process 
            that ensures quality, precision, and complete satisfaction at every stage.
          </p>
        </div>

        <div className="process-content">
          {/* Image on left side */}
          <div className="process-left">
            <div className="process-image">
              <div className="process-image-container">
                {processData.map((item, index) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`process-main-image ${index === active ? 'active' : ''} ${getImageAnimationClass(index)}`}
                  />
                ))}
              </div>
              <div className="process-image-title">
                {processData[active].title}
              </div>
            </div>
          </div>

          {/* Text items on right side */}
          <div className="process-right">
            {processData.map((item, index) => (
              <div
                key={item.id}
                className={`process-item ${active === index ? "active" : ""}`}
                onMouseEnter={() => handleItemHover(index)}
                onClick={() => handleItemHover(index)}
              >
                <div className="process-heading">
                  <span className="process-number">{item.number}</span>
                  <h3>{item.title}</h3>
                </div>
                <div 
                  ref={el => descRefs.current[index] = el}
                  className="process-desc"
                  style={{
                    maxHeight: active === index ? `${descHeights[index]}px` : '0px'
                  }}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;