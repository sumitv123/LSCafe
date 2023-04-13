import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">178/6 14th main road, 20th, 50th Main Rd, Kumaraswamy Layout, Bengaluru, Karnataka 560078</p>
        <p className="p__opensans">+91-1234599999</p>
        <p className="p__opensans">+91-7657690090 </p>
      </div>
      <div className="app__footer-links_logo">
        
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="footer_spoon" />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/"><FiFacebook /></a>
          <a href="https://twitter.com/i/flow/signup"><FiTwitter /></a>
          <a href="https://www.instagram.com/"><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work" >
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
      {new Date().getFullYear()} LS Cafe. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
