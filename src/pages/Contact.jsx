import React from "react";
import "../assets/css/ContactUs.css";
import Image from "../assets/Image/Image";

const Contact = () => {
  return (
    <div className="contactbody">
      <div className="contactimg">
        <div className="bannerContent">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="get-in-touch-details">
        <h1>Get in touch</h1>

        <p>
        At Salon Dandy, we believe that beauty and confidence go hand in hand. Whether you're preparing for your special day with our Bridal Dressing services, looking for a refreshing Unisex Hair Cut, or transforming your look with professional Hair Coloring, we’re here to help you shine.
        </p>
        <p>
        Do you have questions about our services or want to schedule an appointment? We’d love to hear from you! Here's how you can reach us:
        </p>
      </div>

      <div className="contact-container">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7400900052176!2d79.91805077475588!3d6.801441393195965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24ff64820ee8f%3A0xfb07d1dc6118c32a!2s96%20Moratuwa%20-%20Piliyandala%20Rd%2C%20Piliyandala!5e0!3m2!1sen!2slk!4v1727517881058!5m2!1sen!2slk" width="600" height="450"  loading="lazy" ></iframe></div>

        <div className="container1">
        <a href="https://maps.app.goo.gl/PyC231KTZJMYE8RCA" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <div className="addres-icon">
              <img src={Image.map_icon} alt="Addres" width="54" height="54" />
            </div>
            <h3>Address</h3>
            <p>
            96 Moratuwa Road, Piliyandala, Sri Lanka
            </p>
          </div>
          </a>
          <a href="mailto:info@salondandy.com"  target="_blank"  rel="noopener noreferrer">
          <div className="card">
            <div className="email-icon">
              <img src={Image.email_icon} alt="Email" width="54" height="54" />
            </div>
            <h3>Mail us</h3>

            <p>info@salondandy.com</p>
          </div>
          </a>
          <a href="tel:+94113034889" rel="noopener noreferrer">
          <div className="card">
            <div className="contact-icon">
              <img
                src={Image.phone_icon}
                alt="Contact"
                width="54"
                height="54"
              />
            </div>
            <h3>Contact</h3>
            <p>Call : 0113 034 889</p>
          </div>
          </a>
          </div>
        </div>
        
     </div>
     
  );
};

export default Contact;
