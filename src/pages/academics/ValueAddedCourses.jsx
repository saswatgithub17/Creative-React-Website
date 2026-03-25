import { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================
// Minimal, modern SVG icons (instead of FA)
// ============================================
const Icons = {
  Brain: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44v-10A2.5 2.5 0 0 1 7.5 4.5h2" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44v-10A2.5 2.5 0 0 0 16.5 4.5h-2" />
    </svg>
  ),
  Chart: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="m7 15 4-4 3 3 5-5" />
    </svg>
  ),
  Bullhorn: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M18 8A6 6 0 0 1 18 16M4 8h2l5-3v14l-5-3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
      <path d="M14 8v8" />
    </svg>
  ),
  Database: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="8" y2="8" />
    </svg>
  ),
  Link: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  PieChart: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10h10Z" />
    </svg>
  ),
  Store: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 9h18l-2 10H5L3 9Z" />
      <path d="M6 5h12l2 4" />
      <rect x="8" y="13" width="8" height="6" rx="1" />
    </svg>
  ),
  Robot: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="9" cy="16" r="1" fill="currentColor" />
      <circle cx="15" cy="16" r="1" fill="currentColor" />
      <path d="M8 5h8l2 6H6l2-6Z" />
      <line x1="12" x2="12" y1="5" y2="2" />
    </svg>
  ),
  FileText: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  Code: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Users: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Python: (props) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <ellipse cx="12" cy="7.5" rx="6" ry="3" />
      <path d="M6 10.5v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6" />
      <path d="M6 13.5v3" />
      <path d="M18 13.5v3" />
    </svg>
  ),
  // Advantages icons
  Rocket: (props) => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Coins: (props) => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 8c2.5-2 5.5-2 8 0" />
      <path d="M8 16c2.5 2 5.5 2 8 0" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  ),
  Target: (props) => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  Bolt: (props) => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
    </svg>
  ),
  // Generic check icon for checklist
  CheckCircle: (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  // Arrow right for buttons
  ArrowRight: (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Mail: (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  ),
  Clock: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Level: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M2 20h20" />
      <path d="M4 16l2-8 2 8" />
      <path d="M12 16l2-8 2 8" />
      <path d="M20 16l2-8 2 8" />
    </svg>
  ),
};

// ============================================
// Data (updated with icon names instead of FA)
// ============================================
const CURRENT_PROGRAMS = [
  {
    title: 'Machine Learning',
    link:'https://creativecollege.in/ML/Registration/index.html',
    desc: 'Learn algorithms that allow computers to learn from data without explicit programming. Build real ML models.',
    icon: 'Brain',
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    status: 'upcoming',
    duration: '45 Hours',
    level: 'Intermediate',
    tags: ['Python', 'Scikit-learn', 'TensorFlow'],
  },
  {
    title: 'Data Science',
    desc: 'Statistical and computational techniques to extract insights from data — cleaning, visualization, modeling and more.',
    icon: 'Chart',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    status: 'completed',
    duration: '50 Hours',
    level: 'Beginner to Advanced',
    tags: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Digital Marketing',
    desc: 'Promote brands to connect with customers using the internet — SEO, social media, email and web advertising.',
    icon: 'Bullhorn',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    status: 'completed',
    duration: '35 Hours',
    level: 'Beginner',
    tags: ['SEO', 'Google Ads', 'Meta Ads'],
  },
];

const ADDITIONAL_COURSES = [
  { title: 'Data Science', icon: 'Database', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', status: 'completed', duration: '50 hrs' },
  { title: 'Affiliate Marketing', icon: 'Link', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', status: 'completed', duration: '25 hrs' },
  { title: 'Power BI', icon: 'PieChart', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', status: 'completed', duration: '30 hrs' },
  { title: 'Retail Marketing', icon: 'Store', gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', status: 'upcoming', duration: '28 hrs' },
  { title: 'Artificial Intelligence', icon: 'Robot', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', status: 'upcoming', duration: '55 hrs' },
  { title: 'Digital Marketing', icon: 'Bullhorn', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', status: 'completed', duration: '35 hrs' },
  { title: 'HR Documentation', icon: 'FileText', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', status: 'upcoming', duration: '22 hrs' },
  { title: 'Advance Java', icon: 'Code', gradient: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)', status: 'upcoming', duration: '60 hrs' },
  { title: 'HR Professionals', icon: 'Users', gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)', status: 'upcoming', duration: '30 hrs' },
  { title: 'Full Stack Python', icon: 'Python', gradient: 'linear-gradient(135deg, #30cfd0 0%, #667eea 100%)', status: 'upcoming', duration: '75 hrs' },
];

const ADVANTAGES = [
  { icon: 'Rocket', title: 'Expand Career Horizons', desc: 'Gain in-demand skills that complement your degree and open new career opportunities.' },
  { icon: 'Coins', title: 'Cost-Effective Learning', desc: 'More affordable than traditional courses while delivering equivalent or better outcomes.' },
  { icon: 'Target', title: 'Industry-Relevant Skills', desc: 'Curriculum designed in sync with current industry needs and employer demands.' },
  { icon: 'Bolt', title: 'Flexible Schedule', desc: 'Programs are designed to fit alongside your regular coursework seamlessly.' },
];

// ============================================
// Helper Components
// ============================================
const StatusBadge = ({ status }) => {
  const isCompleted = status === 'completed';
  return (
    <span className={`status-badge ${isCompleted ? 'completed' : 'upcoming'}`}>
      <span className="status-dot" />
      {isCompleted ? 'Completed' : 'Coming Soon'}
    </span>
  );
};

const Icon = ({ name, className = '', ...props }) => {
  const Component = Icons[name];
  return Component ? <Component className={`icon-svg ${className}`} {...props} /> : null;
};

// ============================================
// Main Component
// ============================================
export default function ValueAddedCourses() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? ADDITIONAL_COURSES
    : ADDITIONAL_COURSES.filter(c => c.status === activeFilter);

  return (
    <div className="vac-page">
      <style>{`
        /* ----- GLOBAL & RESETS ----- */
        .vac-page {
          --primary: #1a3a6b;
          --primary-light: #2563eb;
          --primary-dark: #0a1628;
          --accent: #f5c518;
          --gray-50: #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-600: #475569;
          --gray-700: #334155;
          --gray-900: #0f172a;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--gray-50);
          line-height: 1.5;
          color: var(--gray-900);
        }
        .vac-page * {
          box-sizing: border-box;
        }

        /* icons */
        .icon-svg {
          width: 1em;
          height: 1em;
          display: inline-block;
          vertical-align: middle;
          stroke: currentColor;
          fill: none;
        }

        /* section containers */
        .vac-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* section spacing */
        .vac-section {
          padding: 80px 0;
        }
        .vac-section-dark {
          background: linear-gradient(145deg, var(--primary-dark) 0%, #1e3a5f 100%);
          color: #fff;
        }
        .vac-section-light {
          background: #fff;
        }

        /* headings */
        .vac-heading {
          text-align: center;
          margin-bottom: 56px;
        }
        .vac-heading .pill {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 40px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          background: rgba(37, 99, 235, 0.08);
          color: var(--primary-light);
          border: 1px solid rgba(37, 99, 235, 0.2);
          margin-bottom: 16px;
        }
        .vac-heading h2 {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 16px;
          color: var(--gray-900);
        }
        .vac-section-dark .vac-heading h2 {
          color: #fff;
        }
        .vac-heading h2 .gradient-text {
          background: linear-gradient(135deg, var(--primary-light), #00c6fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vac-heading p {
          max-width: 560px;
          margin: 0 auto;
          color: var(--gray-600);
          font-size: 1rem;
        }
        .vac-section-dark .vac-heading p {
          color: rgba(255,255,255,0.7);
        }

        /* ----- HERO ----- */
        .vac-hero {
          background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
          padding: 80px 5% 0;
          position: relative;
          overflow: hidden;
        }

        /* Flex Container for Left/Right Split */
        .vac-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center; /* Vertical Center */
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          text-align: left; /* Reset text to left */
          padding-bottom: 60px;
        }

        .vac-hero-left { flex: 1; min-width: 300px; }
        .vac-hero-right { flex-shrink: 0; }

        /* Yellow Accent Chip */
        .vac-hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 204, 0, 0.1);
          border: 1px solid rgba(255, 204, 0, 0.28);
          color: #ffcc00; /* Yellow */
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .vac-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 18px;
        }

        .vac-hero h1 em {
          font-style: normal;
          color: #ffcc00; /* Yellow Highlight */
        }

        .vac-hero p {
          color: rgba(255, 255, 255, 0.5); /* Muted gray-white */
          font-size: 1.05rem;
          max-width: 520px;
          margin: 0 0 32px;
        }

        /* Vertical Checklist on the Right */
        .vac-hero-stats {
          display: flex;
          flex-direction: column; /* Stacks items vertically */
          gap: 12px;
        }

        .vac-hero-stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 20px;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          min-width: 240px;
        }

        .vac-hero-stat-item .check {
          color: #ffcc00; /* Yellow Check */
        }

        /* ----- CURRENT PROGRAMS CARDS (featured) ----- */
        .vac-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .vac-card-featured {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .vac-card-featured:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 45px -12px rgba(0,0,0,0.2);
        }
        .vac-card-media {
          padding: 32px 28px 24px;
          position: relative;
          color: #fff;
        }
        .vac-card-media .icon-large {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          opacity: 0.2;
          color: #fff;
          stroke-width: 1;
        }
        .vac-card-media .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 30px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          margin-bottom: 24px;
        }
        .vac-card-media .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
        }
        .vac-card-media .status-badge.completed .status-dot {
          background: #10b981;
        }
        .vac-card-media .status-badge.upcoming .status-dot {
          background: #f59e0b;
        }
        .vac-card-media h3 {
          font-size: 1.9rem;
          font-weight: 800;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .vac-card-media p {
          font-size: 0.85rem;
          opacity: 0.9;
          margin: 0 0 16px;
          max-width: 85%;
        }
        .vac-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .vac-tag {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 30px;
          padding: 3px 10px;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: #fff;
        }
        .vac-card-footer {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
        }
        .vac-meta {
          display: flex;
          gap: 18px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--gray-600);
        }
        .vac-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .vac-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid var(--primary);
          color: var(--primary);
          padding: 8px 18px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.8rem;
          transition: all 0.2s;
          text-decoration: none;
        }
        .vac-btn-outline:hover {
          background: var(--primary);
          color: #fff;
        }

        /* ----- ADDITIONAL COURSES (small cards) ----- */
        .vac-filter-bar {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .vac-filter-btn {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.7);
          padding: 8px 22px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .vac-filter-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
        .vac-filter-btn.active {
          background: #fff;
          color: var(--primary-dark);
          border-color: #fff;
          font-weight: 700;
        }
        .vac-grid-mini {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vac-card-mini {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 18px rgba(0,0,0,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .vac-card-mini:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 28px rgba(0,0,0,0.1);
        }
        .vac-mini-top {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          position: relative;
        }
        .vac-mini-top .icon-svg {
          width: 40px;
          height: 40px;
          stroke-width: 1.5;
          z-index: 2;
          position: relative;
        }
        .vac-mini-top::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.1);
        }
        .vac-mini-body {
          padding: 14px 16px;
        }
        .vac-mini-body h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin: 0 0 8px;
          color: var(--gray-900);
        }
        .vac-mini-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .vac-mini-duration {
          font-size: 0.7rem;
          color: var(--gray-600);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .vac-mini-duration .icon-svg {
          width: 14px;
          height: 14px;
        }
        .status-badge.small {
          padding: 2px 8px;
          font-size: 0.55rem;
          font-weight: 700;
        }

        /* ----- VIDEO + ADVANTAGES SECTION ----- */
        .vac-split {
          display: flex;
          gap: 60px;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vac-split-text {
          flex: 1 1 360px;
        }
        .vac-split-text h2 {
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 16px;
          color: var(--gray-900);
        }
        .vac-split-text h2 .gradient-text {
          background: linear-gradient(135deg, var(--primary-light), #00c6fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .vac-split-text p {
          color: var(--gray-600);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .vac-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .vac-checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-weight: 500;
          color: var(--gray-700);
        }
        .vac-checklist .icon-svg {
          color: var(--primary-light);
          flex-shrink: 0;
        }
        .vac-video-embed {
          flex: 1 1 420px;
          border-radius: 24px;
          overflow: hidden;
          height: 280px;
          box-shadow: 0 20px 35px -8px rgba(0,0,0,0.2);
          background: #000;
        }
        .vac-video-embed iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ----- ADVANTAGES GRID (dark) ----- */
        .vac-grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vac-adv-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 30px 24px;
          transition: 0.2s;
        }
        .vac-adv-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
        }
        .vac-adv-card .icon-svg {
          width: 40px;
          height: 40px;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .vac-adv-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 10px;
          color: #fff;
        }
        .vac-adv-card p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin: 0;
        }

        /* ----- CTA ----- */
        .vac-cta {
          background: linear-gradient(145deg, var(--primary), #1e4b8a);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .vac-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(255,215,0,0.15) 0%, transparent 60%);
        }
        .vac-cta-inner {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }
        .vac-cta h2 {
          font-size: 2.4rem;
          font-weight: 900;
          color: #fff;
          margin: 0 0 16px;
        }
        .vac-cta p {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          margin-bottom: 28px;
        }
        .vac-btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: var(--primary-dark);
          padding: 14px 34px;
          border-radius: 60px;
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 25px rgba(245,197,24,0.4);
        }
        .vac-btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 35px rgba(245,197,24,0.5);
        }

        @media (max-width: 640px) {
          .vac-grid-mini { grid-template-columns: repeat(2,1fr); }
          .vac-grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="vac-hero">
        <div className="vac-hero-content">
          
          {/* LEFT SIDE: Heading and Description */}
          <div className="vac-hero-left">
            <div className="vac-hero-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z"/></svg>
              Learning Management System
            </div>
            <h1>Supercharge Your Skills with<br /><em>Value‑Added Courses</em></h1>
            <p>Industry‑relevant programs designed to enhance your career prospects and make you stand out in today's competitive job market.</p>
          </div>

          {/* RIGHT SIDE: Vertical Feature List */}
          <div className="vac-hero-right">
            <div className="vac-hero-stats">
              {['10+ Courses', 'Certificate Programs', 'Industry Experts', 'Live Projects'].map((text, idx) => (
                <div key={idx} className="vac-hero-stat-item">
                  <Icon name="CheckCircle" className="check" width={18} height={18} />
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* <div className="vac-wave">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,40 C360,80 900,0 1200,50 C1350,75 1420,30 1440,20 L1440,70 L0,70Z" fill="#f8fafc" />
          </svg>
        </div> */}
      </section>

      {/* CURRENT PROGRAMS */}
      <section className="vac-section vac-section-light">
        <div className="vac-heading">
          <span className="pill">🔥 Featured Programs</span>
          <h2>Our Current <span className="gradient-text">Programs</span></h2>
          <p>Flagship value‑added programs with real industry outcomes and hands‑on learning.</p>
        </div>
        <div className="vac-grid-3">
          {CURRENT_PROGRAMS.map((prog, i) => (
            <div key={i} className="vac-card-featured">
              <div className="vac-card-media" style={{ background: prog.gradient }}>
                <Icon name={prog.icon} className="icon-large" />
                <StatusBadge status={prog.status} />
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
                <div className="vac-tags">
                  {prog.tags.map((tag, j) => <span key={j} className="vac-tag">{tag}</span>)}
                </div>
              </div>
              <div className="vac-card-footer">
                <div className="vac-meta">
                  <span><Icon name="Clock" /> {prog.duration}</span>
                  <span><Icon name="Level" /> {prog.level}</span>
                </div>
                {prog.link ? (
                  <a href={prog.link} target="_blank" rel="noopener noreferrer" className="vac-btn-outline">
                    {prog.status === 'completed' ? 'View Details' : 'Register'} <Icon name="ArrowRight" />
                  </a>
                ) : (
                  <Link to="/contacts" className="vac-btn-outline">
                    {prog.status === 'completed' ? 'View Details' : 'Register'} <Icon name="ArrowRight" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL COURSES (dark) */}
      <section className="vac-section vac-section-dark">
        <div className="vac-heading">
          <span className="pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>📚 More Courses</span>
          <h2>Additional <span className="gradient-text">Learning Paths</span></h2>
          <p>Browse our full catalog of skill‑building courses across technology, business, and management.</p>
        </div>

        {/* Filter */}
        <div className="vac-filter-bar">
          {[['all', 'All Courses'], ['completed', 'Completed'], ['upcoming', 'Upcoming']].map(([val, lbl]) => (
            <button
              key={val}
              className={`vac-filter-btn ${activeFilter === val ? 'active' : ''}`}
              onClick={() => setActiveFilter(val)}
            >
              {lbl}
            </button>
          ))}
        </div>

        <div className="vac-grid-mini">
          {filtered.map((course, idx) => (
            <div key={idx} className="vac-card-mini">
              <div className="vac-mini-top" style={{ background: course.gradient }}>
                <Icon name={course.icon} />
              </div>
              <div className="vac-mini-body">
                <h4>{course.title}</h4>
                <div className="vac-mini-row">
                  <span className="vac-mini-duration"><Icon name="Clock" /> {course.duration}</span>
                  <StatusBadge status={course.status} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO + ADVANTAGES (split) */}
      <section className="vac-section vac-section-light">
        <div className="vac-split">
          <div className="vac-split-text">
            <span className="pill">💡 Why Join?</span>
            <h2>Advantages of Learning <span className="gradient-text">Extra Skills</span> During Graduation</h2>
            <p>Build skills that open new doors, make you more employable, and give you a competitive edge in the professional world.</p>
            <ul className="vac-checklist">
              {[
                'Increased job prospects and wider career horizons',
                'Learn industry tools, techniques & in‑demand languages',
                'More cost‑effective than traditional certification schools',
                'Keep polishing existing skills alongside your degree',
              ].map((item, i) => (
                <li key={i}><Icon name="CheckCircle" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="vac-video-embed">
            <iframe
              src="https://www.youtube.com/embed/gUulJAxFuVg?autoplay=0"
              title="Value Added Courses"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ADVANTAGES DARK GRID */}
      <section className="vac-section vac-section-dark">
        <div className="vac-heading">
          <h2>What You'll <span className="gradient-text">Gain</span></h2>
        </div>
        <div className="vac-grid-4">
          {ADVANTAGES.map((adv, i) => (
            <div key={i} className="vac-adv-card">
              <Icon name={adv.icon} />
              <h3>{adv.title}</h3>
              <p>{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}