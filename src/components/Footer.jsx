import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-logo" onClick={handleScrollToTop}>
            AVIL<span>VAS</span>
          </a>
          
          <div className="footer-socials">
            <a href="https://github.com/avil-vas" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/avil-vas-895761296" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:avilvas63@gmail.com" className="footer-social-link" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Avil Vas. All Rights Reserved.</p>
          
          <button onClick={handleScrollToTop} className="scroll-to-top-btn" aria-label="Scroll to top of page">
            <span>Scroll to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
