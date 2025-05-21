import React from 'react';
import '../style/Email.css';
import photo1 from '../assets/subscribe-img.png';
import photo2 from '../assets/insta-photo1.jpg';
import photo3 from '../assets/insta-photo2.jpg';
import photo4 from '../assets/insta-photo3.jpg';
import photo5 from '../assets/insta-photo4.jpg';
import photo6 from '../assets/insta-photo5.jpg';
import photo7 from '../assets/insta-photo6.jpg';
export const Email = () => {
  return (<div>
  <section className='section-one'>
    <div className="outer-container">
      <div className="inner-container">
        <div className="img-left">
          <img src={photo1} alt="Stay in Touch Promo" />
        </div>
        <div className="content-right">
          <h2 className="email-heading">Stay In Touch</h2>
          <p className="email-subtext">
            Nourish your skin with toxin-free cosmetic products.
          </p>
          <form className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            
            />
            <button onClick="#" className="subscribe-button">
              SUBSCRIBE
            </button>
          </form>
        </div></div>
      </div></section>
     {/*all photos*/}
  
<section className="photo-gallery">
  <img src={photo2} alt="Instagram 1" />
  <img src={photo3} alt="Instagram 2" />
  <img src={photo4} alt="Instagram 3" />
  <img src={photo5} alt="Instagram 4" />
  <img src={photo6} alt="Instagram 5" />
  <img src={photo7} alt="Instagram 6" />
</section>

    </div>
   
  );
};
