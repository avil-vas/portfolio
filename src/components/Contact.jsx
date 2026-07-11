import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>Get In Touch</h2>
          <p>Have a project in mind, a job opportunity, or just want to say hello? Drop me a line!</p>
        </div>

        <div className="contact-grid grid-2">
          {/* Info Details Column */}
          <div className="contact-info animate-slide-up">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-subtitle">
              Feel free to reach out via email or phone. I'm always open to discussing new software development initiatives, full-stack architectures, or internships.
            </p>

            <div className="contact-cards-container">
              <div className="contact-detail-card glass">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Email Me</span>
                  <a href="mailto:avilvas63@gmail.com">avilvas63@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-card glass">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Call Me</span>
                  <a href="tel:+916366097156">+91 6366097156</a>
                </div>
              </div>

              <div className="contact-detail-card glass">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Location</span>
                  <p>Malebhav House, Navoor, Bantwal, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-container glass animate-slide-up">
            {isSuccess ? (
              <div className="contact-success-state animate-slide-up">
                <CheckCircle size={54} className="success-check-icon" />
                <h3>Thank You!</h3>
                <p>Your message has been successfully sent. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Tell me about your project or message..."
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
