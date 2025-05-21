import React from 'react'
import '../style/ContactHeader.css'
import { FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
export const ContactHeader = () => {
  return (
  <div className='con'>
      <div className="con-header">
        <div className="con-overlay">
          <h1 className="con-title">Contact</h1>
          <p className="con-breadcrumb">
            Home &nbsp; - &nbsp; <span>Contact</span>
          </p>
        </div>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <p>27 Division St, New York,<br />NY 10002, USA</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p>+1 345 99 71 345<br />info@beshop.com</p>
        </div>

        <div className="contact-card">
          <FaClock className="contact-icon" />
          <p>Mon - Fri: 9 am - 6 pm<br />Sat - Sun: Holiday</p>
        </div>
      </div>
    </div>
  )
}
