import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ShopSecondSection.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

export const ShopSecondSection = () => {
  const [activeTags, setActiveTags] = useState({ SALE: false, NEW: false });
  const [priceRange, setPriceRange] = useState([0, 500]);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Hydrogel Patches",
      image: product1,
      price: 200.95,
      oldPrice: 249.95,
      rating: 4,
      ratingCount: 24,
      tags: ["SALE"]
    },
    {
      id: 2,
      title: "Spray Balm With Oat Extract",
      image: product2,
      price: 200.95,
      oldPrice: 249.95,
      rating: 5,
      ratingCount: 32,
      tags: ["NEW"]
    },
    {
      id: 3,
      title: "Detox Body Cream",
      image: product3,
      price: 200.95,
      oldPrice: 249.95,
      rating: 4,
      ratingCount: 18,
      tags: []
    },
    {
      id: 4,
      title: "Revitalizing Face Serum",
      image: product4,
      price: 180.95,
      rating: 4,
      ratingCount: 12,
      tags: []
    },
    {
      id: 5,
      title: "Hydrating Face Mask",
      image: product5,
      price: 150.95,
      oldPrice: 175.95,
      rating: 5,
      ratingCount: 28,
      tags: ["NEW"]
    },
    {
      id: 6,
      title: "Anti-Aging Eye Cream",
      image: product6,
      price: 220.95,
      oldPrice: 275.95,
      rating: 4,
      ratingCount: 19,
      tags: ["SALE"]
    }
  ];

  const toggleTag = (tag) => {
    setActiveTags(prev => ({ ...prev, [tag]: !prev[tag] }));
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  };

const handleAddToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = existingCart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    existingCart[index].quantity += 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  navigate('/cart');
};

const handleAddToWishlist = (product) => {
  const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const isAlreadyInWishlist = existingWishlist.find(item => item.id === product.id);
  if (!isAlreadyInWishlist) {
    existingWishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
  }
};


  const filteredProducts = products.filter(product => {
    const priceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];

    let tagMatch = true;
    if (activeTags.SALE || activeTags.NEW) {
      tagMatch = false;
      if (activeTags.SALE && product.tags.includes("SALE")) tagMatch = true;
      if (activeTags.NEW && product.tags.includes("NEW")) tagMatch = true;
    }

    return priceInRange && tagMatch;
  });

  return (
    <div className="shop-container">
      <div className="shop-content">
        <div className="shop-sidebar">
          <div className="sidebar-widget">
            <h4>Categories</h4>
            <ul className="category-list">
              <li><a href="#">Makeup <span>(57)</span></a></li>
              <li><a href="#">SPA <span>(145)</span></a></li>
              <li><a href="#">Perfume <span>(155)</span></a></li>
              <li><a href="#">Nails <span>(86)</span></a></li>
              <li><a href="#">Skincare <span>(48)</span></a></li>
              <li><a href="#">Hair care <span>(54)</span></a></li>
            </ul>
          </div>

          <div className="sidebar-widget">
            <h4>Price</h4>
            <div className="price-filter">
              <div className="price-inputs">
                <span>₹{priceRange[0].toFixed(2)}</span>
                <span>₹{priceRange[1].toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="price-slider"
              />
              <p>From expensive to cheap</p>
            </div>
          </div>

          <div className="sidebar-widget">
            <h4>Tags</h4>
            <div className="tags-container">
              <div>
                <input 
                  type="checkbox" 
                  id="sale-tag" 
                  className="tag-checkbox"
                  checked={activeTags.SALE}
                  onChange={() => toggleTag('SALE')}
                />
                <label htmlFor="sale-tag" className="tag-label">SALE</label>
              </div>
              <div>
                <input 
                  type="checkbox" 
                  id="new-tag" 
                  className="tag-checkbox"
                  checked={activeTags.NEW}
                  onChange={() => toggleTag('NEW')}
                />
                <label htmlFor="new-tag" className="tag-label">NEW</label>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-products">
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                {product.tags.includes("SALE") && <div className="product-badge">SALE</div>}
                {product.tags.includes("NEW") && <div className="product-badge new">NEW</div>}
                
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => product.id === 1 && navigate(`/product/${product.id}`)}
                    style={{ cursor: product.id === 1 ? 'pointer' : 'default' }}
                  />

                  <div className="product-icons">
                 <button
                      className="icon-btn heart-btn"
                        title="Add to Wishlist"
                          onClick={() =>{alert("item is added to your wishlist");  handleAddToWishlist(product)}}
                          >
                           <FaHeart />
                        </button>

                    <button 
                      className="icon-btn cart-btn" 
                      title="Add to Cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      <GiShoppingCart />
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-price">
                    <span className="current-price">₹{product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="old-price">₹{product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="product-rating">
                    {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    <span className="rating-count">({product.ratingCount})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
