
import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.jpeg'
import youtube from '../../assets/youtube.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt=""/>
        <img src={twitter} alt=""/>
        <img src={instagram} alt=""/>
        <img src={youtube} alt=""/>
      </div>
      <ul>
        <li>Audio and Subtitles</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Contect Us</li>
        <li>Cookie Preferences</li>
        <li>Legal notices</li>
        <p className='copyright_text'>@2024 Netflix, Inc.</p>
      </ul>
    </div>
  )
}

export default Footer;
