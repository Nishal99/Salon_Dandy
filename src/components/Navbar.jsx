import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/Image/Image";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Change background on scroll
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header className={`header ${navbarBackground ? "scrolled" : ""}`}>
      <NavLink to="/" className="logo">
        <img src={Image.GoldLogo} alt="Logo" />
      </NavLink>

      <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </div>

      <nav className={`navbar ${isMobileMenuOpen ? "show-menu" : ""}`}>
        <NavLink to="/" className="navbar-link hover-underline" onClick={handleMenuToggle}>
          <div className="separator"></div>
          <span className="span">Home</span>
        </NavLink>
        <NavLink to="/about" className="navbar-link hover-underline" onClick={handleMenuToggle}>
          <div className="separator"></div>
          <span className="span">ABOUT</span>
        </NavLink>
        <NavLink to="/services" className="navbar-link hover-underline" onClick={handleMenuToggle}>
          <div className="separator"></div>
          <span className="span">SERVICES</span>
        </NavLink>
        <NavLink to="/gallery" className="navbar-link hover-underline" onClick={handleMenuToggle}>
          <div className="separator"></div>
          <span className="span">GALLERY</span>
        </NavLink>
        <NavLink to="/contact" className="navbar-link hover-underline" onClick={handleMenuToggle}>
          <div className="separator"></div>
          <span className="span">CONTACT US</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
