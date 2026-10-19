import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import './ContactSection.css';

const CONTACT_EMAIL = 'oabuhammoud@gmail.com';

type Status = 'success' | 'error' | null;

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(
        'service_iwfhpks',
        'template_aucymo8',
        formRef.current,
        { publicKey: '30xBIZxBQFPVLzsiM' }
      )
      .then(
        () => {
          setStatus('success');
          setIsSubmitting(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading">Contact Me</SectionHeading>

      <div className="contact-card">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="contact-field">
            <label htmlFor="user-name">Name</label>
            <input
              type="text"
              id="user-name"
              name="user_name"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              id="user-email"
              name="user_email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-field contact-field--full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What would you like to say?"
              required
            />
          </div>

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        <p
          className={`contact-status ${status ? `contact-status--${status}` : ''}`}
          role="status"
        >
          {status === 'success' && 'Message sent successfully!'}
          {status === 'error' && (
            <>
              Couldn’t send right now. You can email me directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
