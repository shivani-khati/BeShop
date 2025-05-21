import React from 'react';
import '../style/LastSection.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import photo1 from '../assets/payment4.png'
import header from '../assets/header-logo.svg';

export const LastSection = () => {
  return (
    <footer className="footer"><div className='inner-footer'>
      <div className="footer-top">
        <div className="social-section">
          <p>Find us here:</p>
          <div className="social-icons">
            <button><FaFacebookF /></button>
            <button><FaTwitter /></button>
            <button><FaInstagram /></button>
            <button><FaLinkedinIn /></button>
          </div>
        </div>

        <div className="logo-center">
          <img src={header} alt="Logo"  />
          <div className="payment-icons">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="MasterCard" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
            <img src={photo1} alt="Payoneer" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>Categories</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Make up</li>
            <li>SPA</li>
            <li>Perfume</li>
            <li>Nails</li>
            <li>Skin care</li>
            <li>Hair care</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Support</li>
            <li>Shipping details</li>
            <li>Information</li>
          </ul>
        </div>
        <div className="footer-column contact-info">
          <h4>Contact</h4>
          <p>📍 27 Division St, New York, NY 10002, USA</p>
          <p>📞 +1 345 99 71 345<br />+1 345 74 64 975</p>
          <p>✉️ info@beshop.com</p>
        </div>
      </div>

      <div className="footer-copy">
        <p>© All rights reserved. BeShop 2020</p>
      </div>
      </div>
    </footer>
  );
};

