import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import assets from '../assets/Image/Image';
import '../assets/css/Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
    <div className="testimonial-container">
      <div className="title">
        <h2 className='test-h2'>Client Feedbacks</h2>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={assets.blockquote} alt="quote" />
          <img className="bottom-quote quote" src={assets.blockquote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
