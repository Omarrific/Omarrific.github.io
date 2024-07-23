import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isStatusVisible, setIsStatusVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iwfhpks', 'template_aucymo8', e.target, '30xBIZxBQFPVLzsiM')
      .then((result) => {
        setStatus('Message sent successfully!');
        setIsStatusVisible(true);
        setFormData({ email: '', subject: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
        setIsStatusVisible(true);
      });
  };

  useEffect(() => {
    if (isStatusVisible) {
      const fadeOut = () => setIsStatusVisible(false); 
      window.addEventListener('scroll', fadeOut, true);

      return () => {
        window.removeEventListener('scroll', fadeOut, true);
      };
    }
  }, [isStatusVisible]);

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
      {status && (
        <p className={`status ${isStatusVisible ? 'fade-in' : 'fade-out'}`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
