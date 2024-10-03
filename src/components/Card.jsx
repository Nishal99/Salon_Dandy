import React from 'react';
import '../assets/css/Card.css';
import assets from '../assets/Image/Image';



const Cards = () => {
  

  return (
    <div className='body'>
  <main>
  <div className = "cards">
    <img src={assets.e1} alt=""/>
    <div className="card-content">
      <h2>
       Bridal Dressing
      </h2>
      <p>
      <span>Kandyan</span>
      <span>Indian</span>
      <span>Traditional Indian</span>
      <span>Tamil</span>
      <span>Muslim</span>
      <span>Engagment</span>
      <span>Normal Dressing</span>
      </p>
      
    </div>
  </div>


  <div className = "cards">
    <img src={assets.e2} alt=""/>
    <div className="card-content">
      <h2>
       Groom
      </h2>
      <p>
      <span>Hair cut & Beard Shaping</span>
      <span>Light Make up</span>
      </p>
      
    </div>
  </div>


  <div className = "cards">
    <img src={assets.e3} alt=""/>
    <div className="card-content">
      <h2>
       Hair
      </h2>
      <p>
      <span>Hair Colour </span>
      <span>Hair Cut & Setting ( Ladies & Gents & Kids )</span>
      <span>Re bonding</span>
      <span>Re bonding</span>
      <span>Kerating Treatments</span>
      <span>Protein Treatments</span>
      <span>Collagen Treatments</span>
      <span>Dandruff treatment</span>
      <span>Blow dry hair setting</span>
      <span>Hair fall treatment</span>   
      </p>
      
    </div>
  </div>
  <div className = "cards">
    <img src={assets.e5} alt=""/>
    <div className="card-content">
      <h2>
       Hair Extension
      </h2>
      <p>
      <span>V light Extension</span>
      <span>Brazillion knot extension</span>
      <span>Micro link extension</span>
      <span>Brazillion Knot </span>
      <span>Semi paramanat extension</span>
      <span>Tape extension</span>
      <span>Clip in extension</span>
      <span>Microtubes extension</span>
      <span>Wighair extension</span>
      <span>Nano extension</span>
      <span>Mini microring extension</span>
      </p>
      
    </div>
  </div>
  <div className = "cards">
    <img src={assets.e6} alt=""/>
    <div className="card-content">
      <h2>
      Hair Braiding
      </h2>
      <p>
      <span>Scalp Braiding</span>
      <span>Box Braid</span>
      <span>French braid</span>
      <span>Tutorial braid</span>
      <span>Scalp braid</span>
      <span>Twist braid</span>
      <span>Scalp twist braid</span>
      <span>Box twist braid </span>
      <span>Hair extension braid</span>
      </p>
      
    </div>
  </div>
  <div className = "cards">
    <img src={assets.Wax} alt=""/>
    <div className="card-content">
      <h2>
      Facials 
      </h2>
      <p>
      <span>Hydrafacial</span>
      <span>Gold Facials</span>
      <span>Pearl Facials</span>
      <span>Normal Facials</span>
      <span>Clean Up</span>
      <span>Acne Facial</span>
      <span>Pigmentation Facial</span>
      </p>
      
    </div>
  </div>
  <div className = "cards">
    <img src={assets.e7} alt=""/>
    <div className="card-content">
      <h2>
      Wax
      </h2>
      <p>
      <span>Hot Wax</span>
      <span>Could Wax</span>
      <span>Full Body Wax</span>
      </p>
      
    </div>
  </div>
  <div className = "cards">
    <img src={assets.e4} alt=""/>
    <div className="card-content">
      <h2>
      Piercing 
      </h2>
      <p>
      <span>Belly Piercing</span>
      <span>Nose Piercing</span>
      <span>Ear Piercing</span>
      </p>
      
    </div>
  </div>
  <div className = "cards">
    <img src={assets.e8} alt=""/>
    <div className="card-content">
      <h2>
       Nails
      </h2>
      <p>
      <span>Jel Nails</span>
      <span>Acrylic Nails</span>
      <span>Dip Nails</span>
      <span>Manicure</span>
      <span>Pedicure</span>
      <span>Nail arts</span>
      </p>
      
    </div>
  </div>


  
</main>
</div>
  );
};

export default Cards;
