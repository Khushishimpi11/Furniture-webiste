import React, { useState, useEffect } from "react";
import "./Navbar.css";

// Import your logo - adjust the path based on your project structure
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile/tablet on component mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    // For tablet (1024px and below) and mobile: use mobile slider
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
      // Close desktop menu if open
      setMenuOpen(false);
    } else {
      // For desktop (1025px and above): use original desktop behavior
      setMenuOpen(!menuOpen);
      // Close mobile menu if open
      setMobileMenuOpen(false);
    }
  };

  // Handle link clicks
  const handleLinkClick = (linkName) => {
    console.log(`Navigating to: ${linkName}`);
    // Add your navigation logic here
    
    // Close menus after click
    setMenuOpen(false);
    setMobileMenuOpen(false);
    // Ensure body scroll is restored
    document.body.classList.remove("nav-open");
  };

  // Close menu when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.overlay-navbar');
      const mobileNav = document.querySelector('.mobile-nav-slider');
      
      if (mobileMenuOpen && nav && !nav.contains(event.target) && mobileNav && !mobileNav.contains(event.target)) {
        setMobileMenuOpen(false);
        document.body.classList.remove("nav-open");
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="overlay-navbar">
        <div className="logo">
          <img src={logo} alt="MyBrand Logo" />
        </div>

        {/* Menu Icon - Changes to cross on tablet/mobile when open */}
        <div
          className={`menu-icon ${mobileMenuOpen ? "cross" : ""} ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>

        {/* Desktop Menu Links Centered - Only visible on desktop */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <span 
            style={{ transitionDelay: "0.1s" }}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </span>
          <span 
            style={{ transitionDelay: "0.2s" }}
            onClick={() => handleLinkClick("About Us")}
          >
            About Us
          </span>
          <span 
            style={{ transitionDelay: "0.3s" }}
            onClick={() => handleLinkClick("Collection")}
          >
            Collection
          </span>
          <span 
            style={{ transitionDelay: "0.4s" }}
            onClick={() => handleLinkClick("Services")}
          >
            Services
          </span>
          <span 
            style={{ transitionDelay: "0.5s" }}
            onClick={() => handleLinkClick("Contact Us")}
          >
            Contact Us
          </span>
        </div>
      </nav>

      {/* Mobile/Tab Slider Navigation - Visible on tablet and mobile */}
      <div className={`mobile-nav-slider ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            <span 
              style={{ transitionDelay: "0.1s" }}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </span>
            <span 
              style={{ transitionDelay: "0.2s" }}
              onClick={() => handleLinkClick("About Us")}
            >
              About Us
            </span>
            <span 
              style={{ transitionDelay: "0.3s" }}
              onClick={() => handleLinkClick("Services")}
            >
              Services
            </span>
            <span 
              style={{ transitionDelay: "0.4s" }}
              onClick={() => handleLinkClick("Our Process")}
            >
              Our Process
            </span>
            <span 
              style={{ transitionDelay: "0.5s" }}
              onClick={() => handleLinkClick("Contact Us")}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;