import React from 'react';
import '../style/Home-fixed.css';
import { FcBusinesswoman } from "react-icons/fc";
import header from '../assets/header-logo.svg';



export const HomeFixed = () => {
  return (
    <div>
      <div className='Home-fixed'>
        <div className='envato'>
          <FcBusinesswoman style={{ marginRight: "8px", fontSize: "20px" }} />
          <p style={{ fontWeight: "bolder", fontSize: "20px", marginRight: "4px" }}>envato</p>
          <p style={{ fontSize: "19px" }}>master</p>
        </div>
        <button>Buy Now</button>
      </div>
     
      <div className="second-navbar">
      <div className="logo">
  <img src={header} alt="Logo" />
</div>
        <div className="nav-links">
          <a href="/" style={{paddingLeft:"6em"}}>HOME</a>

          <a href="#" style={{paddingLeft:"17px"}}>PAGES</a>
          <a href="/shop" style={{paddingLeft:"17px"}}>SHOP</a>
          <a href="/category" style={{paddingLeft:"17px"}}>CATEGORIES</a>
          <a href="/Blog" style={{paddingLeft:"17px"}}>BLOG</a>
          <a href="/contact" style={{marginLeft:"1em",}}>CONTACT</a>
        </div>
        <div className="icons">
          <a href ="#"><span role="img" aria-label="search" > 🔍</span></a>
          <a href ="#"><span role="img" aria-label="profile">👤</span></a>
          <a href ="/wishlist"><span role="img" aria-label="wishlist">❤️</span></a>
          <a href="/cart"><span role="img" aria-label="cart" style={{paddingRight:"11px"}}>🛒</span></a>
        </div>
      </div>
    </div>
  );
};
