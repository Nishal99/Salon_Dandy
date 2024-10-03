import React from "react";
import assets from "../assets/Image/Image";
import "../assets/css/Footer.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleButtonClick = () => {
    navigate('/services'); // Navigate to the About Us page when the button is clicked
  };

  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <img className="logo-foot" src={assets.GoldLogo} alt="Logo" />
          <p className="para-left">We are committed to delivering exceptional bridal dressing, expert grooming, <br/>and personalized haircuts and coloring, ensuring you leave feeling confident, <br/>stylish, and refreshed.</p>
          <h3 className="share-head">Share with Us</h3>
          <a target="_blank" href="https://web.facebook.com/DANDYSALONPILIYANDALA">
            <img className="social-icons" src={assets.facebook} alt="Facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/salon_dandy/">
            <img
              className="social-icons"
              src={assets.instagram}
              alt="Istagram"
            />
          </a>
          <a target="_blank" href="https://www.youtube.com/@salondandy4401">
            <img className="social-icons" src={assets.youtube} alt="Youtube" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@salondandy">
            <img className="social-icons" src={assets.tiktok} alt="Tiktok" />
          </a>
        </div>
        <div className="footer-col">
          <h3>Working Time</h3>
          <ul className="flex flex-col gap-1 text-gray-600 working-days">
            <li>Monday............................8.30AM - 6.30PM</li>
            <li>Tuesday............................8.30AM - 6.30PM</li>
            <li>Wednesday....................8.30AM - 6.30PM</li>
            <li>Thursday.........................8.30AM - 6.30PM</li>
            <li>Friday................................8.30AM - 6.30PM</li>
            <li>Saturday..........................8.30AM - 7.00PM</li>
            <li>Sunday.............................8.30AM - 7.00PM</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Services</h3>
          <ul className="flex flex-col gap-1 text-gray-600 working-days">
            <li onClick={handleButtonClick}>&#9826; &nbsp;Bridal Dressing</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Groom Dressing</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Hair Cutting & Coloring</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Hydra Facial & Facial</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Hair Extension</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Hair Braiding</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Nails</li>
            <li onClick={handleButtonClick}>&#9826; &nbsp;Piercing</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a target="_blank" href="https://maps.app.goo.gl/PyC231KTZJMYE8RCA" className="a-social">
                <img
                  className="social-icons-x"
                  src={assets.map_icon}
                  alt="Facebook"
                />
              </a>
              <div className="cont-det">
              <a target="_blank" href="https://maps.app.goo.gl/PyC231KTZJMYE8RCA">96 Moratuwa Road, Piliyandala, Sri Lanka</a>
              </div>
            </li>
            <li>
              <a href="tel:0113034889" className="a-social">
                <img
                  className="social-icons-x"
                  src={assets.phone_icon}
                  alt="Facebook"
                />
              </a>
              <div className="cont-det"><a href="tel:0113034889">0113 034 889</a> / <a href="tel:0776668788">077 666 8788</a></div>
            </li>
            <li>
              <a href="mailto:dandybeautysalon@gmail.com" className="a-social">
                <img
                  className="social-icons-x"
                  src={assets.email_icon}
                  alt="Facebook"
                />
              </a>
              <div className="cont-det">
              <a href="mailto:info@salondandy.com">info@salondandy.com</a></div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="hr-line"/>
        <p className="text-sm text-center foot-copyright">
          Copyright 2024 @<a target="_blank" href="https://web.facebook.com/blarestechnologies">BLARES Innovations</a> - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
