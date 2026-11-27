import React from 'react';
import { ExternalLink } from 'lucide-react';
import { siLeetcode } from 'simple-icons';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-title animate-slide-up">
          <h2>Achievements</h2>
          <p>Consistent practice building problem-solving skills.</p>
        </div>

        <a
          href="https://leetcode.com/u/BoRiNg--CoDeR/"
          target="_blank"
          rel="noopener noreferrer"
          className="achievement-card glass glass-hover animate-slide-up"
          aria-label="View LeetCode profile with 275 plus DSA problems solved"
        >
          <svg
            className="achievement-logo"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={siLeetcode.path} />
          </svg>
          <span className="achievement-copy">
            <strong className="achievement-count">275+</strong>
            <span className="achievement-title">DSA Problems Solved</span>
            <span className="achievement-description">LeetCode · Problem-solving practice</span>
          </span>
          <ExternalLink className="achievement-link-icon" size={20} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
