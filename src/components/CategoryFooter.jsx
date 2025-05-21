import React from 'react'
import '../style/CategoryFooter.css'
import photo1 from '../assets/subscribe-img.png';
import photo2 from '../assets/insta-photo1.jpg';
import photo3 from '../assets/insta-photo2.jpg';
import photo4 from '../assets/insta-photo3.jpg';
import photo5 from '../assets/insta-photo4.jpg';
import photo6 from '../assets/insta-photo5.jpg';
import photo7 from '../assets/insta-photo6.jpg';
export const CategoryFooter = () => {
  return (
    <div><section className="photo-gallery">
      <img src={photo2} alt="Instagram 1" />
      <img src={photo3} alt="Instagram 2" />
      <img src={photo4} alt="Instagram 3" />
      <img src={photo5} alt="Instagram 4" />
      <img src={photo6} alt="Instagram 5" />
      <img src={photo7} alt="Instagram 6" />
    </section></div>
  )
}
