import React from 'react';
import '../style/Pictures.css';
import img1 from '../assets/massage.jpg';
import img2 from '../assets/hand.jpg';
import img3 from '../assets/foam.jpg'; 

export const Pictures = () => {
  return (
    <div className="pictures-section">
      <p className="section-subtitle">Popular Collections</p>
      <h2 className="section-title">Top Categories</h2>
      <p className="section-desc">
        Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
      </p>

      <div className="pictures-grid">
        <div className="picture-card">
          <img src={img1} alt="Spa" />
          <div className="overlay">
            <h3>Spa</h3>
            <p>Browse Products</p>
          </div>
        </div>

        <div className="picture-card">
          <img src={img2} alt="Nails" />
          <div className="overlay">
            <h3>Nails</h3>
            <p>Browse Products</p>
          </div>
        </div>

        <div className="picture-card">
          <img src={img3} alt="Perfume" />
          <div className="overlay">
            <h3>Perfume</h3>
            <p>Browse Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

