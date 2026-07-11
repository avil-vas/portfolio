import React, { useState } from 'react';
import { ExternalLink, Folder, ChevronDown, ChevronUp } from 'lucide-react';
import { Github } from './SocialIcons';
import './Projects.css';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Campus Complaint Tracker',
      category: 'Full Stack / AI',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'JWT'],
      brief: 'Full-stack application streamlining student complaints routing using Google Gemini for automated ticket classification.',
      github: 'https://github.com/avil-vas/campus-complaint-tracker',
      bullets: [
        'Built a full-stack web application to streamline student complaint submission, routing, and management across departments.',
        'Integrated Google Gemini 2.5 Flash API to automatically classify complaints by category, department, priority, and sentiment with a local keyword-based fallback system.',
        'Implemented three-tier role-based access control (Student, Department Admin, Super Admin) with JWT authentication and protected routing.',
        'Designed department-specific dashboards with real-time status tracking (Pending, In Progress, Resolved) and super admin oversight for all complaints system-wide.'
      ]
    },
    {
      id: 2,
      title: 'Wanderlust Listing Platform',
      category: 'Full Stack MERN',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox GL', 'Cloudinary'],
      brief: 'Accommodation marketplace featuring interactive geolocation mapping and secure role-based listing ownership.',
      github: 'https://github.com/avil-vas/wanderlust',
      bullets: [
        'Developed a full-stack accommodation listing application inspired by travel rental platforms, supporting CRUD operations for listings and reviews.',
        'Integrated Mapbox GL JS for geolocation and interactive map display of listings, and Cloudinary for cloud-based image upload and storage via Multer.',
        'Implemented secure authentication using Passport.js with session management, Joi-based validation, and role-based ownership checks for listing management.',
        'Initiated a React/Vite frontend conversion of the EJS-rendered application, reproducing all views as functional React components.'
      ]
    },
    {
      id: 3,
      title: 'Network Event Scheduler & Dashboard',
      category: 'Full Stack MERN',
      tags: ['React', 'Vite', 'Tailwind CSS v4', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
      brief: 'Infrastructure planning dashboard with secure OTP validation, dynamic scheduling blocks, and network health widgets.',
      github: 'https://github.com/avil-vas/network-event-scheduler',
      bullets: [
        'Built a MERN application for IT admins to manage client networks, schedule maintenance events, and monitor device loads across distributed infrastructure.',
        'Implemented secure authentication with Bcrypt password hashing, JWT-based HTTP-only cookies, OTP email verification via Nodemailer/Brevo SMTP, and forgot-password recovery.',
        'Developed a dynamic event scheduler preventing past bookings, with real-time dashboards showing active, upcoming, and historical network events with live KPI metrics.',
        'Engineered protected routing using React Router DOM and Context API for global session management, with safeguards preventing network deletion when pending events exist.'
      ]
    }
  ];

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>My Projects</h2>
          <p>A selection of recent MERN and AI integrated applications, demonstrating backend API architectures and dynamic frontends.</p>
        </div>

        <div className="projects-grid grid-3">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div 
                key={project.id} 
                className={`project-card glass glass-hover animate-slide-up ${isExpanded ? 'project-card-expanded' : ''}`}
              >
                <div className="project-card-decor">
                  <Folder size={36} className="project-folder-icon" />
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-icon"
                      aria-label={`GitHub Repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-brief">{project.brief}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Achievements Timeline */}
                  {isExpanded && (
                    <div className="project-details animate-slide-up">
                      <h4 className="details-header">Key Contributions:</h4>
                      <ul className="details-list">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="details-item">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="project-footer">
                  <button 
                    className="project-expand-btn" 
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Achievements'}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
