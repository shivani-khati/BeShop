import React from 'react'
import photo2 from '../assets/makeup20.jpg'
import { MdHeight } from 'react-icons/md'
import '../style/DiscountSection.css'
export const DiscountSection = () => {
  return (
       <div className='background-img-two'>
          <img src={photo2} alt="photo1" className='img-two' style={{width:"60%",height:"50em"}}/>
          <div className="image-overlay-two">
            <p className="tagline-two">Discount</p>
            <h1 className="headline-two">Get Your<span className='fifty'> 50% </span>Off</h1>
            <p className="description-two">
              Nourish your skin with toxin-free cosmetic <br/>products. With the offers
              that you can't refuse.
            </p>
            <button className="get-now">GET-NOW!</button>
          </div>
        </div>
  )
}
