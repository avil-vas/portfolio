import React from 'react';
import { Code, Cpu, Wrench } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      color: 'var(--primary)',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Databases',
      icon: <Cpu size={24} />,
      color: 'var(--secondary)',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} />,
      color: 'var(--accent)',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Kubernetes', level: 60 },
        { name: 'Vercel', level: 85 },
        { name: 'Postman', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>My Skills</h2>
          <p>Technical proficiencies categorized by programming language, development frameworks, and DevOps tools.</p>
        </div>

        <div className="skills-grid grid-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-card glass glass-hover animate-slide-up">
              <div className="skills-card-header">
                <div className="skills-icon-wrapper" style={{ color: category.color, borderColor: `${category.color}33` }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill" 
                        style={{ 
                          width: `${skill.level}%`, 
                          background: `linear-gradient(to right, ${category.color}, var(--secondary))` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
