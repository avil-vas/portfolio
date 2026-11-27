import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>Get In Touch</h2>
          <p>Have a project in mind, a job opportunity, or just want to say hello? Drop me a line!</p>
        </div>

        <div className="contact-grid">
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
        </div>
      </div>
    </section>
  );
}
