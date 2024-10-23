import React, { useState } from 'react';
import axios from 'axios';
import '../styles/career.css'; 
import Join from '../assets/join.webp';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null,
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState(''); 

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file changes
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('mobile', formData.mobile);
    submitData.append('resume', formData.resume);
  
    try {
      const response = await axios.post('http://localhost:8000/submit/', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Check if response status indicates success
      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        console.log('Data received:', data); // Log received data
  
        // Update popup message based on received data
        setPopupMessage(data.message || 'Form submitted successfully!');
        setPopupType('success');
  
        // Reset form data
        setFormData({ name: '', email: '', mobile: '', resume: null });
      } else {
        // Handle unexpected response
        throw new Error('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      
      // Provide a more detailed error message
      const errorMessage = error.response?.data?.message || 'Form submission failed. Please try again.';
      setPopupMessage(errorMessage);
      setPopupType('error');
    } finally {
      setPopupVisible(true);
      
      // Automatically close popup after 3 seconds
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000);
    }
  };
  
  // Close popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='job-post'>
      <section className="openings-section">
        <h2 className="heading">Current Openings</h2>
        <p className="intro-text">
          Join us and be a part of a dynamic, fast-paced environment where innovation meets opportunity. We are looking for passionate and driven individuals ready to make an impact. Explore the current openings and apply now!
        </p>
        <div className="openings-list">
          {[
            { title: 'React Native Developer', level: '0-2 Years', className: 'bg-light-pink' },
            { title: 'Graphic Designer', level: '0-2 Years', className: 'bg-light-blue' },
            { title: 'Social Media Marketing', level: '0-2 Years', className: 'bg-light-yellow' },
            { title: 'Digital Marketing', level: '0-2 Years', className: 'bg-light-orange' },
            { title: 'AWS Cloud Engineer', level: '0-2 Years', className: 'bg-light-violet' },
            { title: 'React + Next.js Developer', level: '0-2 Years', className: 'bg-light-green' },
          ].map((opening, index) => (
            <div key={index} className={`opening-card ${opening.className}`}>
              <h3>{opening.title}</h3>
              <p className="experience-level">Experience Level: {opening.level}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="career-page">
        <div className="career-container">
          <section className="info-section">
            <div className="info-content">
              <h1 className="heading">Join Our Team</h1>
              <p>We are always looking for talented, passionate, and driven individuals to grow and succeed with us.</p>
            </div>
            <div className="career-image">
              <img src={Join} alt='Join Our Team' />
            </div>
          </section>

          <section className="form-section">
            <h2>Submit Your Resume</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="resume">Upload Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>

            {/* Popup for success/failure message */}
            {popupVisible && (
              <div className={`popup-message ${popupType}`}>
                <button className="close-popup" onClick={closePopup}>
                  ×
                </button>
                {popupMessage}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Career;
