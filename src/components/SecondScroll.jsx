import React, { useRef } from 'react';
import '../style/SecondScroll.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';

export const SecondScroll = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  const products = [
    {
      img: product1,
      name: 'Tony Mask',
      priceOld: '₹549.95',
      priceNew: '₹200.95',
      isNew: true,
      isSale: false,
    },
    {
      img: product2,
      name: 'Detox Body Cream',
      priceOld: '₹249.95',
      priceNew: '₹200.95',
      isNew: true,
      isSale: true,
    },
    {
      img: product3,
      name: 'Spray Balm With Oat Extract',
      priceOld: '₹249.95',
      priceNew: '₹200.95',
      isNew: true,
      isSale: false,
    },
    {
      img: product4,
      name: 'Hydrogel Patches',
      priceOld: '₹249.95',
      priceNew: '₹200.95',
      isNew: true,
      isSale: false,
    },
     {
      img: product5,
      name: 'Body Cream',
      priceOld: '₹300.95',
      priceNew: '₹200.95',
      isNew: true,
      isSale: true,
    },
     {
      img: product6,
      name: 'Foundation',
      priceOld: '₹290.95',
      priceNew: '₹200.95',
      isNew: true,
      isSale: true,
    },
  ];

  return (
    <div className="second-scroll">
      <h4 className="subtitle">Cosmetics</h4>
      <h2 className="title">New Arrivals</h2>
      <p className="desc">
        Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
      </p>

      <div className="slider-container-second">
        <button className="arrow left" onClick={scrollLeft}>&lt;</button>

        <div className="product-slider-second" ref={sliderRef}>
          {products.map((product, index) => (
            <div key={index} className="product-card-2">
              <div className="tags-2">
                {product.isNew && <span className="tag new-2">NEW</span>}
                {product.isSale && <span className="tag sale-2">SALE</span>}
              </div>
              <img src={product.img} alt={product.name} />
              <h4 className="product-name-2">{product.name}</h4>
              <div className="price-2">
                <span className="old-price-2">{product.priceOld}</span>
                <span className="new-price-2">{product.priceNew}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

