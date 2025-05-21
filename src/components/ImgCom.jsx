import React from 'react'
import photo1 from '../assets/makeup19.jpg';
import '../style/ImgCom.css';
export const ImgCom = () => {
  return (
    <div className='background-img'>
      <img src={photo1} alt="photo1" className='img' />
      <div className="image-overlay">
        <p className="tagline">Professional</p>
        <h1 className="headline">Beauty & Care</h1>
        <p className="description">
          Nourish your skin with toxin-free cosmetic <br/>products. With the offers
          that you can't refuse.
        </p>
        <button className="shop-button">SHOP NOW</button>
      </div>
    </div>
  )
}

