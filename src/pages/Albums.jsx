import React, { useState } from "react";
import '../assets/css/Gallery.css';
import assets from '../assets/Image/Image';

const Albums = () => { 
  const [showAlbums, setShowAlbums] = useState(true);

  return (
    <div className="gallery-container">
      <div className="gal-banner">
        <div className="gal-banner-container">
          <h1>Albums</h1>
        </div>
      </div>

      <div className="gal-container">
        {/* Only show the albums section */}
        {showAlbums && (
          <div className="album-grid">
            {/* Add your new images here */}
            <a href="https://online.flippingbook.com/view/756855976/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k1} width='200px' alt="Album Image 1" />
            </a>
            <a href="https://online.flippingbook.com/view/756724009/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k2} width='200px' alt="Album Image 2" />
            </a>
            <a href="https://online.flippingbook.com/view/756385508/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k3} width='200px' alt="Album Image 3" />
            </a>
            <a href="https://online.flippingbook.com/view/756713767/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k4} width='200px' alt="Album Image 4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Albums;
