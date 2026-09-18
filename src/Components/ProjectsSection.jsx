import React, { useRef, useState, useEffect } from "react";
import "./ProjectsSection.css";
import projectmockup from '../assets/projectmockup.png';

const projectsData = [
  {
    id: 1,
    title: "Nordic Minimalist Loft",
    label: "Residence",
    location: "Berlin, Germany",
    year: "2025",
    image:
      "https://talatiandpartners.com/wp-content/uploads/2022/12/Niyati710X850-copy.webp",
  },
  {
    id: 2,
    title: "Industrial Elegance Condo",
    label: "Single Home",
    location: "Berlin, Germany",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Serene Space Studio",
    label: "Apartment",
    location: "Germany",
    year: "2025",
    image:
      "https://resourcefurniture.com/cdn/shop/files/lgm-rotating-wall-bed-desk-bookshelf-modern-home-office.jpg?v=1744300388&width=640",
  },
  {
    id: 4,
    title: "Modern Urban Apartment",
    label: "Home",
    location: "Hamburg, Germany",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Contemporary Living Space",
    label: "Villa",
    location: "Munich, Germany",
    year: "2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFqONY8jxiUvxWEcRBQjHTuthKn5TYvlUZA&s",
  },
  {
    id: 6,
    title: "Minimalist Family Home",
    label: "Residence",
    location: "Frankfurt, Germany",
    year: "2024",
    image:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);

  // Handle infinite scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainer;
      
      // If we're at the end, jump to the beginning without animation
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollLeft = 0;
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = 'smooth';
        }, 50);
      }
      
      // If we're at the start, jump to the end without animation
      if (scrollLeft <= 10 && !isAtStart) {
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollLeft = scrollWidth - clientWidth;
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = 'smooth';
        }, 50);
      }
      
      setIsAtStart(scrollLeft <= 10);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isAtStart]);

  // Initialize with cards taking full width
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Set initial scroll position to show first card
      scrollContainer.scrollLeft = 0;
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle cursor movement on project images
  const handleImageMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ 
      x: e.clientX, 
      y: e.clientY 
    });
  };

  return (
    <section className="projects-section">
       {/* Mockup Image */}
      <img 
        src={projectmockup}
        alt="Design Mockup"
        className="projects-mockup"
      />
      <div className="projects-header">
        <span className="projects-label">★ OUR PROJECTS</span>
        <h2 className="projects-title">
          Discover Our <span>Latest Furniture</span>
          <br /> Design Projects
       
        </h2>
        <p className="projects-subtext">
          Explore our portfolio of beautifully crafted spaces that showcase our
          commitment to excellence, innovation, and detail in every project.
        </p>
      </div>

      <div
        className="projects-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[...projectsData, ...projectsData].map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className={`project-card ${
              index % 2 === 0 ? "up-card" : "down-card"
            }`}
          >
            <div
              className="project-image-container"
              onMouseMove={handleImageMouseMove}
              onMouseEnter={() => setShowCursor(true)}
              onMouseLeave={() => setShowCursor(false)}
            >
              <span className="project-label">{project.label}</span>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-city">{project.location}</p>
              <p className="project-year">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Floating "View" Cursor */}
      {showCursor && (
        <div
          className="view-cursor"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <span>View</span>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;