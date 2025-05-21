import React, { useState } from 'react';
import '../style/VideoPhoto.css';
import productImg from '../assets/beshopProduct.jpg'; 
import makeupVideo from '../assets/makeupvideo.mp4';     
import videoThumbnail from '../assets/makeup5.jpg'; 

export const VideoPhoto = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-photo-wrapper">
      

      <section className="promo-section">
        <div className="promo-left">
          <img src={productImg} alt="Product" />
        </div>
        <div className="promo-right">
          <p className="highlight-text">Check This Out</p>
          <h2 className="headline">New Collection<br />For Delicate Skin</h2>
          <p className="subtext">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
          </p>
          <p className="description">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua
            aliqua sit do do. Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim.
          </p>
          <button className="shop-button">SHOP NOW</button>
        </div>
      </section>

     
      <section className="about-section">
        <div className="about-left">
          <p className="highlight-text">About Us</p>
          <h2 className="headline">Who We Are</h2>
          <p className="subtext">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
          </p>
          <p className="description">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua
            aliqua sit do do. Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim.
          </p>
          <div className="watch-video">
            <span className="video-icon">📹</span>
            <span>WATCH VIDEO ABOUT US</span>
            <span className="arrow">→</span>
          </div>
        </div>

    
        <div className="about-right">
          {!isPlaying ? (
            <>
              <img src={videoThumbnail} alt="Video Thumbnail" className="video-img" />
              <button className="play-button" onClick={handlePlay}>▶</button>
            </>
          ) : (
            <video className="video-player" controls autoPlay>
              <source src={makeupVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>
    </div>
  );
};
