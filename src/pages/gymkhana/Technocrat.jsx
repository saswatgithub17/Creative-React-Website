import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ─── */
const TEAM_MEMBERS = [
  { name: 'Abhisek Nanda', batch: '2023', domain: 'Web' },
  { name: 'Aliva Dipsikha Garnaik', batch: '2023', domain: 'Web, Android' },
  { name: 'Ipsita Pattanaik', batch: '2023', domain: 'Web' },
  { name: 'Bidusmita Mishra', batch: '2023', domain: 'Web, Flutter, Backend' },
  { name: 'Chinmayee Priyadarshini', batch: '2023', domain: 'Web, Android' },
  { name: 'Elin Pattanayak', batch: '2023', domain: 'Web, Flutter' },
  { name: 'Jasmin Samal', batch: '2023', domain: 'Web, Flutter' },
  { name: 'Monalisha Behera', batch: '2023', domain: 'Web, Flutter' },
  { name: 'Priyanka Pradhan', batch: '2023', domain: 'Web, Android' },
  { name: 'Ratnaprava Dhar', batch: '2023', domain: 'Web, Flutter' },
  { name: 'Rudra Prasad Sahu', batch: '2023', domain: 'Web, Android, Backend' },
  { name: 'Saswat Suman Dwibedy', batch: '2023', domain: 'Web, Flutter, Backend' },
  { name: 'Sudipta Suranjita Sahoo', batch: '2023', domain: 'Web, Android' },
  { name: 'Swatika Sahu', batch: '2023', domain: 'Web' },
  { name: 'Yashita Sahu', batch: '2023', domain: 'Web, Android' },
  { name: 'Abhipsa Jena', batch: '2024', domain: 'Web, Android' },
  { name: 'Bhagyalaxmi', batch: '2024', domain: 'Web, Android' },
  { name: 'Kajal Pradhan', batch: '2024', domain: 'Web, Android' },
  { name: 'Krishna Swain', batch: '2024', domain: 'Web, Android' },
  { name: 'Rimjhim Sahoo', batch: '2024', domain: 'Web, Android' },
  { name: 'Sasmita', batch: '2024', domain: 'Web, Android' },
  { name: 'Selina Sahu', batch: '2024', domain: 'Web, Android' },
  { name: 'Subham Sahu', batch: '2024', domain: 'Web' },
  { name: 'Supriyanjali Sahu', batch: '2024', domain: 'Web, Android' },
  { name: 'Tanmay Pradhan', batch: '2024', domain: 'Web, Flutter' },
  { name: 'Trishna Tamna', batch: '2024', domain: 'Web, Android' },
  { name: 'Yash Sahu', batch: '2024', domain: 'Web' },
  { name: 'Amit Pradhan', batch: '2024', domain: 'Web' },
  { name: 'Jasman Das', batch: '2024', domain: 'Web' },
  { name: 'Pratyush Patra', batch: '2024', domain: 'Web' },
  { name: 'Elina Biswal', batch: '2024', domain: 'Web' },
  { name: 'Prabhanjan Behera', batch: '2024', domain: 'Web' },
  { name: 'Happy Behera', batch: '2024', domain: 'Web' },
  { name: 'Anshuman Mishra', batch: '2025', domain: 'Web, Android' },
  { name: 'Priyadarsan Muduli', batch: '2025', domain: 'Web, Android' },
  { name: 'Biswajit Nayak', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Omm Prakash Niyary', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Ananta Swain', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Dattatreya Khilar', batch: '2025', domain: 'Web, Android' },
  { name: 'Priyanka Mahanta', batch: '2025', domain: 'Web, Android' },
  { name: 'Ladly Sahoo', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Arpita Sahu', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Priyani Patra', batch: '2025', domain: 'Web, Android' },
  { name: 'Subhalaxmi Priyadarshini', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Pradyumna Das', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Satyabrata Pradhan', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Sudhansu Pattanaik', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Soumya Ranjan Sahu', batch: '2025', domain: 'Web, Flutter' },
  { name: 'Ankita Priyadarshini', batch: '2025', domain: 'Web, Android' },
];

const PROJECTS = [
  { name: 'Attendance Management System', team: 'Team Technocrat', date: 'March 2023' },
  { name: 'Lesson Planner', team: 'Team Technocrat', date: 'July 2024' },
  { name: 'Notes and Assignment Tracker', team: 'Team Technocrat', date: 'October 2023' },
  { name: 'Library Management System', team: 'Team Technocrat', date: 'March 2024' },
  { name: 'Learning Management System (LMS)', team: 'Team Technocrat', date: 'July 2023' },
  { name: 'Staff Management System', team: 'Team Technocrat', date: 'October 2024' },
  { name: 'Student Database Management System', team: 'Team Technocrat', date: 'March 2024' },
  { name: 'Result Management System', team: 'Team Technocrat', date: 'July 2025' },
];

const EX_LEADERS = [
  { name: 'Rakesh Senapati', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Rakesh Ku. Senapati.jpg' },
  { name: 'Shankar Chaitan Jena', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Shankar Chaitan Jena.png' },
  { name: 'Priyadarshan Pradhan', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Priyadarshan Pradhan.png' },
  { name: 'Abhijit Jena', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Abhijit Jena.png' },
  { name: 'Asutosh Sahu', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/asutosh sahu.jpg' },
  { name: 'Chandra Kant Muduli', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandrakant Muduli.png' },
  { name: 'Anish Asutosh', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Anish Asutosh Nayak.png' },
  { name: 'Chandan Swain', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandan Swain.png' },
  { name: 'Debasish Pradhan', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Debasis Pradhan.jpg' },
  { name: 'Anata Kishor Swain', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Ananta Kishore Swain.png' },
  { name: 'Nikhil Nath', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Nikhil Nath.png' },
  { name: 'SK Akil', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/SK Akil.png' },
];

const TECHFESTS = [
  { version: '1.0', year: '2023', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg', to: '/gymkhana/techfest/1', desc: 'First edition — AI, IoT, Robotics & ML innovations by college students.', projects: 8 },
  { version: '2.0', year: '2024', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg', to: '/gymkhana/techfest/2', desc: 'Second edition — 19 cutting-edge projects in automation, safety, and smart systems.', projects: 19 },
  { version: '3.0', year: '2025', img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg', to: '/gymkhana/techfest/3', desc: 'Viksit Bharat edition — schools join for the first time in this historic tech showcase.', projects: 10 },
];

const SLIDES = [
  { img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic1.png', title: 'Team Technocrat', sub: 'Empowering Innovation' },
  { img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic2.png', title: 'Skill Development', sub: 'Shaping Future Leaders' },
  { img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic3.png', title: 'Career Excellence', sub: 'Connecting Academia & Industry' },
];

const BATCH_COLORS = {
  '2023': { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  '2024': { bg: '#ecfdf5', color: '#059669', border: '#a7f3d0' },
  '2025': { bg: '#fef3c7', color: '#d97706', border: '#fde68a' },
};

const PAGE_SIZE = 12;

/* ─── PS-style Pagination ─── */
function Pagination({ page, totalPages, total, label, onPage }) {
  if (totalPages <= 1) return null;
  const nums = [];
  if (totalPages <= 7) { for (let i = 1; i <= totalPages; i++) nums.push(i); }
  else if (page <= 4) { for (let i = 1; i <= 7; i++) nums.push(i); }
  else if (page >= totalPages - 3) { for (let i = totalPages - 6; i <= totalPages; i++) nums.push(i); }
  else { for (let i = page - 3; i <= page + 3; i++) nums.push(i); }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
      <button onClick={() => onPage(Math.max(1, page - 1))} disabled={page === 1}
        style={{ background: page === 1 ? '#f0f4f8' : '#0c2340', color: page === 1 ? '#94a3b8' : '#ffcc00', border: 'none', borderRadius: 10, padding: '8px 16px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: page === 1 ? 'default' : 'pointer' }}>
        ← Prev
      </button>
      {nums.map(n => (
        <button key={n} onClick={() => onPage(n)}
          style={{ background: page === n ? '#0c2340' : '#fff', color: page === n ? '#ffcc00' : '#0c2340', border: `1.5px solid ${page === n ? '#0c2340' : 'rgba(12,35,64,0.15)'}`, borderRadius: 10, padding: '8px 14px', minWidth: 38, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
          {n}
        </button>
      ))}
      <button onClick={() => onPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}
        style={{ background: page === totalPages ? '#f0f4f8' : '#0c2340', color: page === totalPages ? '#94a3b8' : '#ffcc00', border: 'none', borderRadius: 10, padding: '8px 16px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: page === totalPages ? 'default' : 'pointer' }}>
        Next →
      </button>
      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
        Page {page} of {totalPages} · {total} {label || 'members'}
      </span>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Technocrat() {
  const [slide, setSlide] = useState(0);
  const [activeBatch, setActiveBatch] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = activeBatch === 'all' ? TEAM_MEMBERS : TEAM_MEMBERS.filter(m => m.batch === activeBatch);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const handleBatch = (b) => { setActiveBatch(b); setPage(1); };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }

    /* ══ HERO — exact PS style ══ */
    .tc-hero {
      background: linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      position: relative; overflow: hidden;
    }
    .tc-hero-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 72px 5% 56px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 48px; flex-wrap: wrap;
    }
    /* LEFT */
    .tc-hero-left { flex: 1; min-width: 280px; }
    .tc-hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.1); border: 1px solid rgba(255,204,0,0.28);
      color: #ffcc00; font-size: 0.68rem; font-weight: 800;
      padding: 6px 16px; border-radius: 30px; letter-spacing: 2.5px;
      text-transform: uppercase; margin-bottom: 18px;
    }
    .tc-hero-h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.2rem,5vw,3.6rem); font-weight: 900;
      color: #fff; line-height: 1.08; letter-spacing: -1px; margin-bottom: 14px;
    }
    .tc-hero-h1 em { font-style: normal; color: #ffcc00; }
    .tc-hero-sub { color: rgba(255,255,255,0.42); font-size: 0.88rem; line-height: 1.75; max-width: 480px; margin-bottom: 28px; }
    .tc-hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
    .tc-hero-stat-val { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.6rem; font-weight: 900; color: #ffcc00; line-height: 1; }
    .tc-hero-stat-lbl { font-size: 0.66rem; color: rgba(255,255,255,0.4); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; }

    /* RIGHT */
    .tc-hero-right { flex-shrink: 0; }
    .tc-hero-pills { display: flex; flex-direction: column; gap: 10px; }
    .tc-hero-pill {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.75); padding: 11px 20px; border-radius: 14px;
      font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 600; font-size: 0.86rem;
      transition: background 0.2s;
    }
    .tc-hero-pill:hover { background: rgba(255,255,255,0.1); }
    .tc-hero-pill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    /* WAVE */
    .tc-hero-wave { height: 56px; margin-top: -1px; }
    .tc-hero-wave svg { width: 100%; height: 100%; display: block; }

    /* ══ SHARED ══ */
    .tc-page { background: #f0f4f8; min-height: 100vh; font-family: 'Plus Jakarta Sans',sans-serif; }
    .tc-main { max-width: 1200px; margin: 0 auto; padding: 0 4% 80px; }
    .tc-pill-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
    .tc-section-head { text-align: center; margin-bottom: 40px; }
    .tc-section-head h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,4vw,2.3rem); font-weight: 900; color: #0a1628; margin-bottom: 10px; }
    .tc-section-head h2 span { background: linear-gradient(135deg,#0c2340,#2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .tc-section-head p { color: #64748b; font-size: 0.88rem; max-width: 480px; margin: 0 auto; }
    .tc-card { background: #fff; border-radius: 22px; box-shadow: 0 4px 24px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.06); }

    /* ══ LEADERS ══ */
    .tc-leaders-wrap { padding: 72px 4%; }
    .tc-leaders-grid { max-width: 820px; margin: 0 auto; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; }
    .tc-leader-card { background: #fff; border-radius: 22px; overflow: hidden; box-shadow: 0 8px 30px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.07); transition: transform 0.3s,box-shadow 0.3s; width: 220px; }
    .tc-leader-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(10,22,40,0.14); }
    .tc-leader-img { width: 100%; height: 200px; overflow: hidden; background: linear-gradient(135deg,#0a1628,#1a3a6b); }
    .tc-leader-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
   .tc-leader-body { 
        padding: 16px 14px 20px; /* Reduced side padding slightly */
        text-align: center; 
    }

    .tc-leader-body h4 { 
        font-family: 'Plus Jakarta Sans',sans-serif; 
        font-size: 0.75rem; /* Made role slightly smaller to emphasize name */
        font-weight: 600; 
        color: #64748b; /* Made role a softer color */
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 0 0 4px; 
    }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    /* ══ SLIDER ══ */
    .tc-slider-wrap { background: #0a1628; padding: 60px 4%; }
    .tc-slider { max-width: 1100px; margin: 28px auto 0; position: relative; border-radius: 22px; overflow: hidden; height: 370px; box-shadow: 0 24px 80px rgba(0,0,0,0.4); }
    .tc-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.5s; }
    .tc-slide.active { opacity: 1; }
    .tc-slide img { width: 100%; height: 100%; object-fit: cover; }
    .tc-slide-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.85),rgba(10,22,40,0.2) 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 36px; }
    .tc-slide-overlay h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.9rem; font-weight: 900; color: #fff; margin: 0 0 5px; }
    .tc-slide-overlay p { color: rgba(255,255,255,0.65); margin: 0; }
    .tc-slider-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; font-size: 0.85rem; transition: background 0.2s; }
    .tc-slider-arrow:hover { background: rgba(255,255,255,0.3); }
    .tc-slider-dots { display: flex; gap: 9px; justify-content: center; margin-top: 20px; }
    .tc-slider-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.3); border: none; cursor: pointer; padding: 0; transition: background 0.2s, transform 0.2s; }
    .tc-slider-dot.active { background: #ffcc00; transform: scale(1.3); }

    /* ══ TECHFEST CARDS ══ */
    .tc-techfest-wrap { padding: 72px 4%; background: #fff; }
    .tc-fest-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,1fr); gap: 26px; }
    .tc-fest-card { border-radius: 20px; overflow: hidden; box-shadow: 0 6px 28px rgba(10,22,40,0.1); transition: transform 0.3s,box-shadow 0.3s; text-decoration: none; display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(10,22,40,0.06); }
    .tc-fest-card:hover { transform: translateY(-10px); box-shadow: 0 24px 60px rgba(10,22,40,0.18); }
    .tc-fest-img { position: relative; height: 185px; overflow: hidden; }
    .tc-fest-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
    .tc-fest-card:hover .tc-fest-img img { transform: scale(1.08); }
    .tc-fest-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.7),transparent); }
    .tc-fest-ver { position: absolute; top: 12px; right: 12px; background: linear-gradient(135deg,#ffcc00,#ff8c00); color: #0a1628; padding: 4px 12px; border-radius: 20px; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.75rem; font-weight: 900; }
    .tc-fest-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
    .tc-fest-body h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.1rem; font-weight: 900; color: #0a1628; margin: 0 0 7px; }
    .tc-fest-body p { font-size: 0.8rem; color: #64748b; line-height: 1.7; margin: 0 0 12px; flex: 1; }
    .tc-fest-meta { display: flex; gap: 14px; }
    .tc-fest-meta span { font-size: 0.72rem; color: #475569; display: flex; align-items: center; gap: 5px; font-weight: 600; }
    .tc-fest-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 12px; color: #2563eb; font-size: 0.78rem; font-weight: 700; font-family: 'Plus Jakarta Sans',sans-serif; }

    /* ══ TEAM TABLE ══ */
    .tc-team-wrap { padding: 72px 4%; }
    .tc-filter-bar { display: flex; gap: 9px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
    .tc-filter-btn { padding: 8px 20px; border-radius: 30px; border: 1.5px solid rgba(10,22,40,0.15); background: #fff; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.8rem; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.2s; }
    .tc-filter-btn:hover { border-color: #0c2340; color: #0c2340; }
    .tc-filter-btn.active { background: #0c2340; border-color: #0c2340; color: #ffcc00; }
    .tc-table-wrap { max-width: 1000px; margin: 0 auto; border-radius: 18px; overflow: hidden; box-shadow: 0 4px 24px rgba(10,22,40,0.09); border: 1.5px solid rgba(10,22,40,0.07); }
    .tc-table { width: 100%; border-collapse: collapse; }
    .tc-table thead tr { background: linear-gradient(90deg,#0c2340,#1a3a6b); }
    .tc-table th { padding: 15px 20px; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 800; color: #ffcc00; letter-spacing: 1px; text-transform: uppercase; text-align: left; }
    .tc-table td { padding: 13px 20px; font-size: 0.85rem; color: #334155; border-bottom: 1px solid rgba(10,22,40,0.06); background: #fff; }
    .tc-table tbody tr:nth-child(even) td { background: #f8fafc; }
    .tc-table tbody tr:hover td { background: #f0f4ff; }
    .tc-batch-pill { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 800; }
    .tc-domain-label { font-size: 0.78rem; color: #2563eb; font-weight: 600; }

    /* ══ PROJECTS ══ */
    .tc-proj-wrap { padding: 72px 4%; background: #fff; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
    .tc-proj-sub { font-size: 0.73rem; color: #64748b; margin-top: 2px; }
    .tc-proj-date { font-size: 0.73rem; color: #0c2340; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

    /* ══ EX-LEADERS ══ */
    .tc-ex-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-ex-grid { max-width: 1100px; margin: 32px auto 0; display: grid; grid-template-columns: repeat(6,1fr); gap: 18px; }
    .tc-ex-card { text-align: center; }
    .tc-ex-img { width: 100%; aspect-ratio: 3/4; overflow: hidden; border-radius: 14px; border: 2px solid rgba(255,204,0,0.25); background: rgba(255,255,255,0.05); transition: border-color 0.3s; }
    .tc-ex-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; transition: transform 0.3s; }
    .tc-ex-card:hover .tc-ex-img { border-color: #ffcc00; }
    .tc-ex-card:hover .tc-ex-img img { transform: scale(1.05); }
    .tc-ex-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.72rem; color: rgba(255,255,255,0.65); font-weight: 600; margin: 8px 0 0; line-height: 1.4; }

    /* ══ RESPONSIVE ══ */
    @media(max-width:900px) {
      .tc-hero-inner { flex-direction: column; gap: 36px; }
      .tc-hero-left .tc-hero-sub { max-width: 100%; }
    }
    @media(max-width:768px) {
      .tc-fest-grid { grid-template-columns: 1fr; }
      .tc-leaders-grid { flex-direction: column; align-items: center; }
      .tc-leader-card { width: 100%; max-width: 320px; }
      .tc-ex-grid { grid-template-columns: repeat(3,1fr); }
    }
    @media(max-width:480px) { .tc-ex-grid { grid-template-columns: repeat(2,1fr); } }
  `;

  return (
    <div className="tc-page">
      <style>{css}</style>

      {/* ════ HERO (exact PS structure) ════ */}
      <div className="tc-hero">
        <div className="tc-hero-inner">

          {/* LEFT — badge, h1, sub, stats */}
          <div className="tc-hero-left">
            <div className="tc-hero-badge">
              <i className="fa-solid fa-microchip" /> Gymkhana · Technical Club
            </div>
            <h1 className="tc-hero-h1">
              Team <em>Technocrat</em>
            </h1>
            <p className="tc-hero-sub">
              Empowering students with essential skills for today's competitive job market — bridging the gap between academic learning and industry demands through real-world projects and technical excellence.
            </p>
            <div className="tc-hero-stats">
              {[
                { val: `${TEAM_MEMBERS.length}+`, label: 'Active Members' },
                { val: '8+', label: 'Projects Built' },
                { val: '3', label: 'TechFest Editions' },
                { val: '3', label: 'Batches' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="tc-hero-stat-val">{s.val}</div>
                  <div className="tc-hero-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — feature pills */}
          <div className="tc-hero-right">
            <div className="tc-hero-pills">
              {[
                { dot: '#3b82f6', icon: 'fa-solid fa-code', label: 'Web Development' },
                { dot: '#10b981', icon: 'fa-solid fa-mobile-alt', label: 'Android & Flutter' },
                { dot: '#ffcc00', icon: 'fa-solid fa-server', label: 'Backend Systems' },
                { dot: '#ec4899', icon: 'fa-solid fa-rocket', label: 'TechFest Series' },
                { dot: '#00d4ff', icon: 'fa-solid fa-diagram-project', label: '8+ Projects Deployed' },
              ].map((p, i) => (
                <div key={i} className="tc-hero-pill">
                  <span className="tc-hero-pill-dot" style={{ background: p.dot }} />
                  <i className={p.icon} style={{ color: p.dot, width: 16, textAlign: 'center' }} />
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave — identical to PS */}
        <div className="tc-hero-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>
      </div>

      <div className="tc-main">

        {/* ════ LEADERS ════ */}
        <div className="tc-leaders-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-users" /> Our Leadership</div>
            <h2>Club Incharge & <span>Secretaries</span></h2>
          </div>
          <div className="tc-leaders-grid">
            {[
              {
                role: 'Club Incharge',
                name: 'Mr. Bhabani Sankar Sahoo', // Replace with actual name
                img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TeamIncharge.jpg',
                tag: 'Faculty Lead'
              },
              {
                role: 'Club Secretary (Boy)',
                name: 'Mr. Saswat Suman Dwibedy', // Replace with actual name
                img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/boySecretary.jpg',
                tag: 'Student Rep'
              },
              {
                role: 'Club Secretary (Girl)',
                name: 'Ms. Sudipta Suranjita Sahoo', // Replace with actual name
                img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/girlSecretary.jpg',
                tag: 'Student Rep'
              },
            ].map((l, i) => (
              <div key={i} className="tc-leader-card">
                <div className="tc-leader-img"><img src={l.img} alt={l.role} /></div>
                <div className="tc-leader-body">
                  <h4>{l.role}</h4>
                  {/* ADD THE NAME LINE HERE */}
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '8px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    {l.name}
                  </div>
                  <span className="tc-leader-tag">{l.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════ SLIDER ════ */}
        <div className="tc-slider-wrap" style={{ borderRadius: 22, marginBottom: 0 }}>
          <div className="tc-section-head" style={{ marginBottom: 0 }}>
            <div className="tc-pill-tag" style={{ background: 'rgba(255,204,0,0.15)', color: '#ffcc00', border: '1px solid rgba(255,204,0,0.3)' }}>Team Gallery</div>
            <h2 style={{ color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Team <span style={{ color: '#ffcc00', WebkitTextFillColor: '#ffcc00' }}>in Action</span></h2>
          </div>
          <div className="tc-slider">
            {SLIDES.map((s, i) => (
              <div key={i} className={`tc-slide${slide === i ? ' active' : ''}`}>
                <img src={s.img} alt={s.title} />
                <div className="tc-slide-overlay"><h3>{s.title}</h3><p>{s.sub}</p></div>
              </div>
            ))}
            <button className="tc-slider-arrow" style={{ left: 14 }} onClick={() => setSlide((slide - 1 + SLIDES.length) % SLIDES.length)}><i className="fa-solid fa-chevron-left" /></button>
            <button className="tc-slider-arrow" style={{ right: 14 }} onClick={() => setSlide((slide + 1) % SLIDES.length)}><i className="fa-solid fa-chevron-right" /></button>
          </div>
          <div className="tc-slider-dots">
            {SLIDES.map((_, i) => <button key={i} className={`tc-slider-dot${slide === i ? ' active' : ''}`} onClick={() => setSlide(i)} />)}
          </div>
        </div>

        {/* ════ TECHFEST ════ */}
        <div className="tc-techfest-wrap" style={{ borderRadius: 22, marginTop: 0 }}>
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-rocket" /> Mega Event</div>
            <h2>Tech<span>Fest</span> Series</h2>
            <p>Our annual flagship event where innovation meets excellence — three editions, each bigger and bolder.</p>
          </div>
          <div className="tc-fest-grid">
            {TECHFESTS.map((t, i) => (
              <Link key={i} to={t.to} className="tc-fest-card">
                <div className="tc-fest-img">
                  <img src={t.img} alt={`TechFest ${t.version}`} />
                  <div className="tc-fest-img-overlay" />
                  <span className="tc-fest-ver">TechFest {t.version}</span>
                </div>
                <div className="tc-fest-body">
                  <h3>TechFest {t.version}</h3>
                  <p>{t.desc}</p>
                  <div className="tc-fest-meta">
                    <span><i className="fa-regular fa-calendar" /> {t.year}</span>
                    <span><i className="fa-solid fa-diagram-project" /> {t.projects} Projects</span>
                  </div>
                  <div className="tc-fest-link">Explore <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ════ TEAM TABLE with PS-style pagination ════ */}
        <div className="tc-team-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-code" /> Our Team</div>
            <h2>Meet the <span>Technocrats</span></h2>
            <p>{TEAM_MEMBERS.length} talented members across 3 batches — building, innovating, and growing together.</p>
          </div>

          {/* Batch filter */}
          <div className="tc-filter-bar">
            {['all', '2023', '2024', '2025'].map(b => (
              <button key={b} className={`tc-filter-btn${activeBatch === b ? ' active' : ''}`} onClick={() => handleBatch(b)}>
                {b === 'all' ? 'All Batches' : `Batch ${b}`}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="tc-table-wrap">
            <table className="tc-table">
              <thead>
                <tr>
                  <th style={{ width: 48 }}>#</th>
                  <th>Name</th>
                  <th style={{ width: 100 }}>Batch</th>
                  <th>Domain</th>
                </tr>
              </thead>
              <tbody>
                {paged.map((m, i) => {
                  const bc = BATCH_COLORS[m.batch];
                  return (
                    <tr key={i}>
                      <td style={{ color: '#94a3b8', fontWeight: 700 }}>{(page - 1) * PAGE_SIZE + i + 1}</td>
                      <td style={{ fontWeight: 700 }}>{m.name}</td>
                      <td>
                        <span className="tc-batch-pill" style={{ background: bc.bg, color: bc.color, border: `1px solid ${bc.border}` }}>{m.batch}</span>
                      </td>
                      <td><span className="tc-domain-label">{m.domain}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* PS-style pagination */}
          <Pagination page={page} totalPages={totalPages} total={filtered.length} label="members" onPage={setPage} />
        </div>

        {/* ════ PROJECTS ════ */}
        <div className="tc-proj-wrap" style={{ borderRadius: 22 }}>
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-diagram-project" /> Work</div>
            <h2>Our <span>Projects</span></h2>
            <p>Real-world software systems built by Team Technocrat for the college community.</p>
          </div>
          <div className="tc-proj-inner">
            {PROJECTS.map((p, i) => (
              <div key={i} className="tc-proj-row">
                <div className="tc-proj-num">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1 }}>
                  <div className="tc-proj-name">{p.name}</div>
                  <div className="tc-proj-sub"><i className="fa-solid fa-users" style={{ fontSize: '0.6rem', marginRight: 4 }} />{p.team}</div>
                </div>
                <div className="tc-proj-date"><i className="fa-regular fa-calendar" style={{ marginRight: 5 }} />{p.date}</div>
              </div>
            ))}
          </div>
        </div>

      </div>{/* /tc-main */}

      {/* ════ EX-LEADERS (full-bleed dark) ════ */}
      <div className="tc-ex-wrap">
        <div className="tc-section-head">
          <div className="tc-pill-tag" style={{ background: 'rgba(255,204,0,0.15)', color: '#ffcc00', border: '1px solid rgba(255,204,0,0.3)' }}>Alumni</div>
          <h2 style={{ color: '#fff', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Excellent <span style={{ color: '#ffcc00', WebkitTextFillColor: '#ffcc00' }}>Ex-Leaders</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', maxWidth: 480, margin: '0 auto' }}>
            Leaders who shaped Technocrat and went on to make their mark in the industry.
          </p>
        </div>
        <div className="tc-ex-grid">
          {EX_LEADERS.map((l, i) => (
            <div key={i} className="tc-ex-card">
              <div className="tc-ex-img"><img src={l.img} alt={l.name} /></div>
              <p className="tc-ex-name">{l.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}