import React from 'react';
import { Code, Cpu, Wrench } from 'lucide-react';
import {
  siExpress,
  siGit,
  siGithub,
  siJavascript,
  siMongodb,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPostman,
  siPython,
  siReact,
  siTailwindcss,
  siVercel
} from 'simple-icons';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      color: 'var(--primary)',
      skills: [
        { name: 'JavaScript', logos: [siJavascript] },
        { name: 'Python', logos: [siPython] },
        { name: 'Java', logos: [siOpenjdk] }
      ]
    },
    {
      title: 'Frameworks & Databases',
      icon: <Cpu size={24} />,
      color: 'var(--secondary)',
      skills: [
        { name: 'React.js', logos: [siReact] },
        { name: 'Next.js', logos: [siNextdotjs] },
        { name: 'Express.js', logos: [siExpress] },
        { name: 'Tailwind CSS', logos: [siTailwindcss] },
        { name: 'MongoDB', logos: [siMongodb] },
        { name: 'MySQL', logos: [siMysql] }
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench size={24} />,
      color: 'var(--accent)',
      skills: [
        { name: 'Git & GitHub', logos: [siGit, siGithub] },
        { name: 'Vercel', logos: [siVercel] },
        { name: 'Postman', logos: [siPostman] }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>My Skills</h2>
          <p>Technical proficiencies categorized by programming language, development frameworks, and tools.</p>
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
                    <span className="skill-logos" aria-hidden="true">
                      {skill.logos.map((logo) => (
                        <svg
                          key={logo.title}
                          className="skill-logo"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{
                            color: ['000000', '0A0A0A', '181717'].includes(logo.hex)
                              ? 'var(--text-primary)'
                              : `#${logo.hex}`
                          }}
                        >
                          <path d={logo.path} />
                        </svg>
                      ))}
                    </span>
                    <span className="skill-name">{skill.name}</span>
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
