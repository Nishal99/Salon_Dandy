import React, { useState, useEffect } from "react";
import "../assets/css/Carousel.css";
import assets from '../assets/Image/Image';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const slides = [
    { id: 1, image: assets.j3, title: "Unforgettable Bridal Elegance", subtitle: "At Salon Dandy, we specialize in creating breathtaking bridal hairstyles that make your wedding day truly unforgettable. From intricate updos to flowing waves, our bridal experts work with you to design the perfect style for your big day." },
    { id: 2, image: assets.j4, title: "Precision Grooming for Men", subtitle: "Our grooming services for men go beyond a simple haircut. We offer tailored grooming solutions that highlight your personality and give you a sharp, stylish appearance. Experience top-notch beard shaping, haircuts, and skincare treatments." },
    { id: 3, image: assets.j5, title: "Unisex Styles for Everyone", subtitle: "Whether you’re looking for a bold new haircut or a fresh color transformation, we cater to both men and women. Our unisex services offer the latest trends and techniques, customized to your unique style, making sure you leave the salon looking and feeling your best." },
    { id: 4, image: assets.j9, title: "Flawless Facial Treatments", subtitle: "Pamper your skin with our luxurious facial treatments. Whether it's a deep-cleansing facial, hydrating mask, or anti-aging treatment, our specialists tailor each session to rejuvenate your skin, leaving you with a glowing, refreshed complexion."},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = () => {
    navigate('/about'); // Navigate to the About Us page when the button is clicked
  };

  return (
    <div className="carousel-container">
      <div className="carousel-social-icons-container">
        <div className="carousel-social-icons">
          <a href="https://web.facebook.com/DANDYSALONPILIYANDALA" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={assets.facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/salon_dandy/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={assets.instagram} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@salondandy4401" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={assets.youtube} alt="YouTube" />
          </a>
          <a href="https://www.tiktok.com/@salondandy?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={assets.tiktok} alt="TikTok" />
          </a>
        </div>
      </div>
      
      <div className="carousel-slides">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slide ${slide.id === slides[currentSlide].id ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-caption">
              <h1>{slide.title}</h1>
              <h3>{slide.subtitle}</h3>
              <button className="btn" onClick={handleButtonClick}>See all features</button>
            </div>
          </div>
        ))}
      </div>

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
