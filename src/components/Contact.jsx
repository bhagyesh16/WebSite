import React, { useState } from 'react';
import styles from '../styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = () => {
    const { name, email, message } = formData;
    const subject = encodeURIComponent("CONTACT TO IITS");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:bhagyeshtrivedi1602@gmail.com?subject=${subject}&body=${body}`;
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-primary py-12">
     <div className="service-card container mx-auto px-4 rounded-lg border-2 border-white shadow-lg shadow-purple-50  ">
        <h2 className={styles.heading2}>Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-white">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary-dark"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-white">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary-dark"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-white">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary-dark"
            ></textarea>
          </div>
          <button 
            type="button" 
            onClick={handleContactSubmit} 
            className={`py-4 px-6 mb-2
             bg-blue-gradient font-poppins font-medium
            text-[18px] rounded-md text-primary outline-none ${styles}`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
