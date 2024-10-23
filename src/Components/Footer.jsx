import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-section">
            <h3>Office Address</h3>
            <p>Shanthi Nagar, behind Sanjay Steel Bazar,</p> 
            <p>Lalitha Nagar, Dilsukhnagar, </p>
            <p>Hyderabad, Telangana 500060</p>
            <p>📞 9133718103</p>
            <p>✉️ info.vindus@gmail.com</p>
            <div className="social-icons">
              <span className="social-icon"><FaFacebook /></span>
              <span className="social-icon"><FaLinkedin /></span>
              <span className="social-icon"><FaTwitter /></span>
              <span className="social-icon"><FaInstagram /></span>
              <span className="social-icon"><FaYoutube /></span>
            </div>
        </div>
      <div className="footer-section">
        <h3>Main Info</h3>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/howitworks">How it Works</Link>
        </li>
        <li>
          <Link to="/whychoose">Why Choose Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li>Our own SEO Tool for better website Ranking</li>
          <li>Digital Marketing & SEO</li>
          <li>Web Design & Development</li>
          <li>Dot Net Application Development</li>
          <li>PHP Development</li>
          <li>Android Application Development</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
