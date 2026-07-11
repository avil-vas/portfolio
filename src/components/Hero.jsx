import React from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import heroImg from '../assets/hero.png';
import './Hero.css';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="blob-container">
        <div className="blob blob-primary"></div>
        <div className="blob blob-secondary"></div>
      </div>
      
      <div className="container hero-container grid-2">
        <div className="hero-content animate-slide-up">
          <span className="hero-greeting-badge">Welcome to my space</span>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="name-gradient">Avil Vas</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science & Engineering Student &amp; Full Stack Developer.
          </p>
          <p className="hero-description">
            Passionate about building highly interactive web applications, secure architectures, and integrating AI to build future-ready solutions. Currently pursuing B.E at St. Joseph Engineering College.
          </p>
          
          <div className="hero-actions">
            <a href="/Avil_Vas_Resume.pdf" download="Avil_Vas_Resume.pdf" className="btn btn-primary">
              <Download size={18} />
              Download CV
            </a>
            <a href="#projects" onClick={handleScrollToProjects} className="btn btn-secondary">
              View Work
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/avil-vas" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/avil-vas-895761296" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
              <Linkedin size={22} />
            </a>
            <a href="mailto:avilvas63@gmail.com" className="social-icon" aria-label="Email Me">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-slide-up">
          <div className="avatar-wrapper">
            <div className="glowing-ring ring-1"></div>
            <div className="glowing-ring ring-2"></div>
            <div className="avatar-container glass">
              <img src={heroImg} alt="Avil Vas" className="avatar-photo" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <a href="#about" aria-label="Scroll to About Section">
          <span className="scroll-mouse">
            <span className="scroll-wheel"></span>
          </span>
          <ArrowDown size={18} className="scroll-arrow" />
        </a>
      </div>
    </section>
  );
}
