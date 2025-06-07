import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatusMessage('');

    emailjs
      .sendForm(
        'service_iwfhpks',  
        'template_aucymo8',
        formRef.current,
        '30xBIZxBQFPVLzsiM'      
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSubmitting(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatusMessage('Failed to send. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id='contact' className="contact-section">
      <h2 className="contact-title">
        Contact Me
        <div className="contact-underline" />
      </h2>

      <div className="contact-card">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user-name">Name</label>
          <input
            type="text"
            id="user-name"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            name="user_email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What would you like to say?"
            required
          />

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {statusMessage && <p className="contact-status">{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
}
