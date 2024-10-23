import React from 'react';
import '../styles/about.css';
import missionImage from '../assets/mission.png'; 
import visionImage from '../assets/vision.webp';
import valuesImage from '../assets/values.png';

const About = () => {
  return (
    <div className="about-us">
      <section className="about-container">
        <div className="about-background"></div>
        <h1 className='about-title'>About Vindus Environment</h1>
        <p className="about-description">
          Vindus Environment Private Limited is a dynamic software company 
          dedicated to providing cutting-edge B2B services, SEO tool testing, 
          and digital solutions. Our goal is to empower businesses to thrive in 
          the digital landscape by delivering innovative and effective tools tailored 
          to their needs.
        </p>
      </section>

      <section className="section mission-section">
       
        <div className="content">
          <div className="text">
          <h2>Our Mission</h2>
            <p>
              We aim to be the leading provider of comprehensive digital services 
              that enhance business growth. Our mission is to create valuable digital 
              solutions for enterprises through advanced software development, 
              expert SEO services, and continuous innovation.
            </p>
          </div>
          <div className="image-container">
            <img src={missionImage} alt="Our Mission" />
          </div>
        </div>
      </section>

      <section className="section vision-section">
       
        <div className="content">
       
          <div className="text">
          <h2>Our Vision</h2>
            <p>
              To create a future where businesses of all sizes have access to the best 
              tools and technologies to compete and succeed in an ever-evolving 
              digital economy.
            </p>
          </div>
          <div className="image-container">
            <img src={visionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="section values-section">
       
        <div className="content">
          <div className="image-container">
            <img src={valuesImage} alt="Our Values" />
          </div>
          <div className="text">
          <h2>Our Values</h2>
            <ul>
              <li>Innovation: Driving progress through creative solutions.</li>
              <li>Integrity: Delivering on our promises with transparency.</li>
              <li>Collaboration: Working closely with our clients to achieve success.</li>
              <li>Excellence: Striving for the highest quality in everything we do.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
