import React from 'react'
import '../style/CategoryPicture.css'
import img1 from '../assets/massage.jpg';
import img2 from '../assets/hand.jpg';
import img3 from '../assets/foam.jpg'; 
import img4 from '../assets/top-categories-img4.jpg'
import img5 from '../assets/top-categories-img5.jpg'
import img6 from '../assets/top-categories-img6.jpg'
export const CategoryPicture = () => {
  return (<div className='picture-4'>
   <div className="pictures-grid-4">
         <div className="picture-card-4">
           <img src={img1} alt="Spa-4" />
           <div className="overlay-4" >
            <div className='text-box-4'>
             <h3 >Spa</h3>
             <p>Browse Products</p>
             </div>
           </div>
         </div>
 
         <div className="picture-card-4">
           <img src={img2} alt="Nails-4" />
           <div className="overlay-4">
            <div className='text-box-4'>
             <h3>Nails</h3>
             <p>Browse Products</p>
             </div>
           </div>
         </div>
 
         <div className="picture-card-4">
           <img src={img3} alt="Perfume-4" />
           <div className="overlay-4">
            <div className='text-box-4'>
             <h3>Perfume</h3>
             <p>Browse Products</p>
             </div>
           </div>
         </div>
       
          <div className="pictures-grid-4">
         <div className="picture-card-4">
           <img src={img4} alt="Spa-4" />
           <div className="overlay-4">
            <div className='text-box-4'>
             <h3>Spa</h3>
             <p>Browse Products</p>
             </div>
           </div>
         </div>
 
         <div className="picture-card-4">
           <img src={img5} alt="Nails-4" />
           <div className="overlay-4">
            <div className='text-box-4'>
             <h3>Nails</h3>
             <p>Browse Products</p>
             </div>
           </div>
         </div>
 
         <div className="picture-card-4">
           <img src={img6} alt="Perfume-4" />
           <div className="overlay-4">
            <div className='text-box-4'>
             <h3>Perfume</h3>
             <p>Browse Products</p>
             </div>
           </div>
         </div>
       </div>
       </div>
       </div>
  )
}
