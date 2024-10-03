import React from "react";
import Carousel from "../components/Carousel";
import "../assets/css/Home.css";
import assets from "../assets/Image/Image";
import CounterWrapper from "../components/CounterWrapper";
import TrendingSlider from "../components/TrendingSlider";
import Testimonials from "../components/Testimonials";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleButtonClick1 = () => {
    navigate('/about'); // Navigate to the About Us page when the button is clicked
  };
  

  return (
    <div className="main-div">
      <Carousel />
      <section
        className="section about text-center"
        aria-labelledby="about-label"
        id="about"
      >
        <div className="container">
          <div className="about-content">
            <h2 className="headline-1 section-title para-color">
              Why you choose us?
            </h2>

            <p className="section-text para-color">
            At Salon Dandy, we take pride in offering a unique blend of expertise, innovation, and personalized care. Specializing in bridal dressing, groom dressing, and unisex hair and many more, our highly skilled stylists are dedicated to crafting looks that make every client feel confident and radiant.<br/><br/>

Whether you're preparing for a special occasion or looking for a fresh, everyday style, our team ensures that each service is tailored to your individual needs. From sophisticated bridal styles to trendsetting cuts and vibrant colors, we blend artistry with the latest techniques to deliver stunning results every time.<br/><br/>

Our salon is more than just a place to get a haircut—it's a sanctuary where you can unwind, rejuvenate, and leave looking and feeling your best. Choose Salon Dandy for an experience where attention to detail, top-quality products, and a luxurious ambiance come together to celebrate your beauty.
            </p>

            <a onClick={handleButtonClick1} className="btn btn-primary">
              <span className="text text-1">More About Us</span>
            </a>
          </div>
          <div className="figure-about">
  <figure className="about-banner">
    <div className="abs-img abs-img-1">
      <img
        src={assets.b1}
        width="285"
        height="285"
        loading="lazy"
        alt=""
      />
    </div>
    <div className="abs-img abs-img-2">
      <img
        src={assets.b2}
        width="285"
        height="285"
        loading="lazy"
        alt="about banner"
      />
    </div>
    <div className="abs-img abs-img-3">
      <img
        src={assets.b3}
        width="285"
        height="285"
        loading="lazy"
        alt=""
      />
    </div>
   
  </figure>
</div>

        </div>
      </section>
      {/** Little things*/}
      <section
        className="section features text-center special-section"
        aria-label="features"
      >
        <h2 className="headline-1 feature-title para-color">
          Little Things
          <br />
          Matter Most
        </h2>
        <div className="container special-container">
          <ul className="grid-list">
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d1}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Expert Stylists</h3>

                <p className="label-1 card-text">
                  Our team consists of highly trained professionals with years
                  of experience, specializing in the latest trends and
                  techniques.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d2}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Customized Services</h3>

                <p className="label-1 card-text">
                  We believe in personalizing each service, ensuring that every
                  client gets a look that perfectly suits their unique style and
                  personality.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d3}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Luxurious Ambience</h3>

                <p className="label-1 card-text">
                  Enjoy a serene and elegant atmosphere, designed to make your
                  visit as relaxing and rejuvenating as possible.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d4}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">High-Quality Products</h3>

                <p className="label-1 card-text">
                  We use premium, eco-friendly products that not only enhance
                  your beauty but also care for your hair’s health.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d5}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Cutting-Edge Techniques</h3>

                <p className="label-1 card-text">
                  Salon Dandy stays ahead of the curve, offering the newest and
                  most innovative hair treatments and styles.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d6}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Comprehensive Services</h3>

                <p className="label-1 card-text">
                  From haircuts to color treatments, bridal styling to grooming,
                  we offer a full range of services tailored for everyone.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d7}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Attention to Detail</h3>

                <p className="label-1 card-text">
                  Every service is meticulously carried out, ensuring precision
                  and perfection in every cut, style, or treatment.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img
                    src={assets.d8}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 className="title-2 card-title">Client-Centered Approach</h3>

                <p className="label-1 card-text">
                  Your satisfaction is our top priority. We listen, understand,
                  and deliver exactly what you desire, creating an experience
                  that exceeds expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="App counter-app">
          <CounterWrapper />
        </div>
      </section>
      <TrendingSlider />
      <Testimonials />
    </div>
  );
};

export default Home;
