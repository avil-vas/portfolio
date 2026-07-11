import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to NoSQL Databases',
      issuer: 'Infosys Springboard',
      date: 'Sep 2025',
      verifyUrl: 'https://verify.onwingspan.com'
    },
    {
      title: 'Advanced Data Structures & Algorithms in Java: Sorting & Searching Algorithms',
      issuer: 'Infosys Springboard',
      date: 'Feb 2025',
      verifyUrl: 'https://verify.onwingspan.com'
    },
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL, IIIT Hyderabad',
      date: 'Oct 2025',
      verifyUrl: null
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>Certifications</h2>
          <p>Professional courses and academic credentials verified by leading training platforms and institutions.</p>
        </div>

        <div className="certifications-grid grid-3">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass glass-hover animate-slide-up">
              <div className="cert-badge-icon">
                <Award size={26} />
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                
                <div className="cert-meta">
                  <span className="cert-date">
                    <Calendar size={13} />
                    {cert.date}
                  </span>
                </div>
              </div>
              
              {cert.verifyUrl && (
                <div className="cert-footer">
                  <a 
                    href={cert.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-verify-link"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
