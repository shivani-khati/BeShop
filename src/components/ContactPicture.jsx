import React from 'react'
import photo from '../assets/makeup20.png'
import '../style/ContactPicture.css'

export const ContactPicture = () => {
  return (
    <div className="contact-overlay-container"><div className='image-div'>
      <img src={photo} alt="contact" className="background-image" />
      </div>
      <div className="contact-form-overlay">
        <h1>Leave A Message</h1>
        <p>Write to us if you have any questions, we will definitely contact you and find a solution.</p>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Enter your message" rows="5"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  )
}
