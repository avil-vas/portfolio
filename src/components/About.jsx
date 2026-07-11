import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './About.css';

export default function About() {
  const education = [
    {
      institution: 'St. Joseph Engineering College, Mangaluru',
      period: 'Nov 2023 – Jun 2027',
      degree: 'B.E in Computer Science & Engineering',
      metricLabel: 'CGPA',
      metricValue: '9.27 / 10',
      description: 'Acquiring deep foundational knowledge in computer engineering, data structures, algorithm design, software engineering practices, and database management systems.'
    },
    {
      institution: 'Carmel Composite PU College, Modankap, Bantwal',
      period: '2021 – 2023',
      degree: 'Pre-University Course (PUC)',
      metricLabel: 'Percentage',
      metricValue: '93.3%',
      description: 'Completed secondary education majoring in Physics, Chemistry, Mathematics, and Computer Science.'
    },
    {
      institution: 'Deepika High School, Modankap, Bantwal',
      period: 'Completed 2021',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      metricLabel: 'Percentage',
      metricValue: '97.76%',
      description: 'Acquired foundational science and math credentials with top-tier academic honors.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>About Me</h2>
          <p>My academic path, core background, and driving technical interests.</p>
        </div>

        <div className="about-grid grid-2">
          {/* Bio Column */}
          <div className="about-bio glass animate-slide-up">
            <h3 className="about-bio-title">My Journey</h3>
            <p className="about-bio-text">
              I am a dedicated Computer Science Engineering student with an intense passion for building innovative, high-performance software solutions. Through academic studies and hands-on projects, I have developed solid capabilities in full-stack development, backend databases, and secure authentication models.
            </p>
            <p className="about-bio-text">
              I enjoy solving logic puzzles, optimization problems, and converting design templates into pixel-perfect React pages. I am a quick learner who believes in continuous skill enhancement and staying curious about modern development practices.
            </p>
            
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-num text-gradient">9.27</div>
                <div className="stat-label">Engineering CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-num text-gradient">3+</div>
                <div className="stat-label">Full Stack Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num text-gradient">3</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>

          {/* Education Timeline Column */}
          <div className="about-education-timeline animate-slide-up">
            <h3 className="timeline-section-title">Education</h3>
            
            <div className="timeline-container">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-badge-node">
                    <GraduationCap size={16} />
                  </div>
                  
                  <div className="timeline-card glass glass-hover">
                    <div className="timeline-card-header">
                      <h4 className="institution-title">{edu.institution}</h4>
                      <span className="timeline-period">
                        <Calendar size={13} />
                        {edu.period}
                      </span>
                    </div>
                    <p className="degree-name">{edu.degree}</p>
                    
                    <div className="academic-performance-badge">
                      <Award size={14} />
                      <span>{edu.metricLabel}: <strong>{edu.metricValue}</strong></span>
                    </div>
                    
                    <p className="academic-details">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
