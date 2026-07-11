import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ isLightTheme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Navbar glow on scroll
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(target);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          AVIL<span>VAS</span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-menu-desktop">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={`nav-link ${activeSection === item.target ? 'nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, item.target)}
            >
              {item.label}
            </a>
          ))}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle visual theme"
          >
            {isLightTheme ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="navbar-mobile-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle visual theme"
          >
            {isLightTheme ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-menu-mobile ${isOpen ? 'mobile-open' : ''}`}>
        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={`mobile-nav-link ${activeSection === item.target ? 'mobile-nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, item.target)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
