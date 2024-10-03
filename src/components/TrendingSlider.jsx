import React from "react";
import "../assets/css/TrendingSlider.css";
import assets from "../assets/Image/Image";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TrendingSlider = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  
  const handleButtonClick2 = () => {
    navigate('/Services'); // Navigate to the About Us page when the button is clicked
  };
  return (
    <section
      className="card-section card-service bg-black-10 card-text-center"
      aria-label="service"
    >
      <div className="card-container">

        <h2 className="card-headline-1 card-section-title">What We Offer</h2>

        <p className="card-section-text">
        We specialize in professional bridal dressing, expert grooming services, stylish haircuts, and vibrant hair coloring for both men and women and many more. Let us bring your beauty vision to life!
        </p>

        <ul className="card-grid-list">
          <li className="card-main-services">
            <div className="card-service-card">
              <a onClick={handleButtonClick2} className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285px", "--height": "336px" }}
                >
                  <img
                    src={assets.e1}
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Breakfast"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">Bridal Dressing</a>
                </h3>

                <a onClick={handleButtonClick2} className="btn-text hover-underline label-2">
                  View More
                </a>
              </div>
            </div>
          </li>

          <li className="card-main-services">
            <div className="card-service-card">
              <a onClick={handleButtonClick2} className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285px", "--height": "336px" }}
                >
                  <img
                    src={assets.e2}
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Breakfast"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a >Groom Dressing</a>
                </h3>

                <a onClick={handleButtonClick2} className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>

          <li className="card-main-services">
            <div className="card-service-card">
              <a onClick={handleButtonClick2} className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285px", "--height": "336px" }}
                >
                  <img
                    src={assets.e3}
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Breakfast"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a>Unisex Hair</a>
                </h3>

                <a onClick={handleButtonClick2} className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>

          <li className="card-main-services">
            <div className="card-service-card">
              <a onClick={handleButtonClick2} className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285px", "--height": "336px" }}
                >
                  <img
                    src={assets.e4}
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Breakfast"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a >Piercing</a>
                </h3>

                <a onClick={handleButtonClick2} className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>
        </ul>
        <a onClick={handleButtonClick2} className="btn btn-primary x-11">
              <span className="text text-1">See More Services</span>
            </a>
      </div>
    </section>
  );
};

export default TrendingSlider;
