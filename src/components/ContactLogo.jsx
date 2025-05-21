import React from 'react'
import '../style/ContactLogo.css'
import MainLogoOne from '../assets/Main-logo-one.svg';
import MainLogoTwo from '../assets/Main-logo-two.svg';
import MainLogoThree from '../assets/Main-logo-three.svg';
import MainLogoFour from '../assets/Main-logo-four.svg';
import MainLogoFive from '../assets/Main-logo-five.svg';
export const ContactLogo = () => {
  return (
    <div>    
         <div className="brand-logos-section">
      <div className="brand-logo">
        <img src={MainLogoOne }alt="Kitadel Hankes" />
      </div>
      <div className="brand-logo">
        <img src={MainLogoTwo} alt="Masama Abbott" />
      </div>
      <div className="brand-logo">
        <img src={MainLogoThree} alt="Phyllis Myers" />
      </div>
      <div className="brand-logo">
        <img src={MainLogoFour} alt="Roland Wilson" />
      </div>
      <div className="brand-logo">
        <img src={MainLogoFive} alt="Alban Walsh" />
      </div>
      </div>
      </div>
  )
}
