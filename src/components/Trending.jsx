import React, { useState } from 'react';
import '../style/Trending.css';

import foundationImg from '../assets/foundation.jpg';
import lotionImg from '../assets/Lotion.jpg';
import tonyMaskImg from '../assets/TonyMask.jpg';
import spray from '../assets/Spray.jpg';
import Hydrogel from '../assets/Hydrogel.jpg';
import BodyCream from '../assets/BodyCream.jpg';
import spaOne from '../assets/spa-one.jpg';
import SpaTwo from '../assets/SpaTwo.jpg';
import SpaThree from '../assets/SpaThree.jpg';
import SpaFour from '../assets/SpaFour.jpg';
import perfumeOne from '../assets/perfumeOne.jpg';
import perfumeTwo from '../assets/perfumeTwo.jpg';
import perfumeThree from '../assets/perfumeThree.jpg';
import perfumeFour from '../assets/perfumeFour.jpg';
import MainLogoOne from '../assets/Main-logo-one.svg';
import MainLogoTwo from '../assets/Main-logo-two.svg';
import MainLogoThree from '../assets/Main-logo-three.svg';
import MainLogoFour from '../assets/Main-logo-four.svg';
import MainLogoFive from '../assets/Main-logo-five.svg';
const productData = [
  { id: 1, name: 'Foundation Beshop', price: '₹200.95', image: foundationImg, cat:["Make Up","SPA"] },
  { id: 2, name: 'Lotion For Cleansing', price: '₹100.90', image: lotionImg ,cat:["Make Up","SPA","Perfume",]},
  { id: 3, name: 'Tony Mask', price: '₹200.95', image: tonyMaskImg ,cat:["Make Up","SPA","Perfume","Nails"] },
  { id: 4, name: 'Spray Balm With Oat Extract', price: '₹200.95', image: spray,cat:["Make Up","SPA","Perfume","Nails" ]},
  { id: 5, name: 'Hydrogel', price: '₹120.00', image: Hydrogel ,cat:["Make Up","SPA","Perfume","Skin Care" ] },
  { id: 6, name: 'Detox Body Cream', price: '₹50.00', image: BodyCream ,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 7, name: 'Spa-daily', price: '₹100.90', image: spaOne ,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 8, name: 'Menicure', price: '₹100.90', image: SpaTwo,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 9, name: 'pedicure', price: '₹100.90', image: SpaThree,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 10, name: 'facial', price: '₹100.90', image: SpaFour,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 11, name: 'Dior', price: '₹100.90', image: perfumeOne ,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 12, name: 'Givency', price: '₹100.90', image: perfumeTwo,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 13, name: 'ysl', price: '₹100.90', image: perfumeThree,cat:["Make Up","SPA","Perfume","Hair Care" ]},
  {id: 14, name: 'beaut', price: '₹100.90', image: perfumeFour,cat:["Make Up","SPA","Perfume","Hair Care" ]},


];

/*const categoryFilters = {
  'Make Up': [1, 2,3,4,5,6,7,8,9,10,11,12,13,14],
  'SPA': [7,8,9,10],
  'Perfume': [11,12,13,14],
  'Nails': [3,2,9,8],
  'Skin Care': [2,1,6,5],
  'Hair Care': [1,10,9,7],
};*/
const Categories=["Make Up","SPA","Perfume","Nails","Skin Care","Hair Care"];

export const Trending = () => {
  const [activeCategory, setActiveCategory] = useState("Make Up");
  const [currentIndex, setCurrentIndex] = useState(0);

  const PRODUCTS_PER_PAGE = 4;

 const filteredProducts = productData.filter(product =>
  product.cat.includes(activeCategory)
);


  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
const start = currentIndex * PRODUCTS_PER_PAGE;
const end = start + PRODUCTS_PER_PAGE;
const visibleProducts = filteredProducts.slice(start, end);


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0); 
  };

const nextPage = () => {
  if ((currentIndex + 1) * PRODUCTS_PER_PAGE < filteredProducts.length) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setCurrentIndex(0);
  }
};

const prevPage = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  } else {
    const lastPage = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) - 1;
    setCurrentIndex(lastPage);
  }
};



  return (
    <div className="cosmetics-container">
      <h2 className="cosmetics-subtitle">Cosmetics</h2>
      <h1 className="cosmetics-title">Trending Products</h1>
      <p className="cosmetics-description">
        Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
      </p>

      <div className="cosmetics-buttons">
        {Categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevPage}>
          &lt;
        </button>

        <div className="product-slider">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={nextPage}>
          &gt;
        </button>
      </div>
      <div className="brand-logos-section">
  <div className="brand-logo">
    <img src={MainLogoOne }alt="Kitadel Hankes" />
  </div>
  <div className="brand-logo">
    <img src={MainLogoTwo} alt="Masama Abbott" />
  </div>
  <div className="brand-logo">
    <img src={MainLogoThree} alt="Phyllis Myers" />
  </div>
  <div className="brand-logo">
    <img src={MainLogoFour} alt="Roland Wilson" />
  </div>
  <div className="brand-logo">
    <img src={MainLogoFive} alt="Alban Walsh" />
  </div>
</div>

    </div>
  );
};
