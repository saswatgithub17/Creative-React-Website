import { useState } from 'react';
import { Link } from 'react-router-dom';

const CLUBS = [
  { name: 'Technocrat', color: '#3b82f6', colorDark: '#1d4ed8', bg: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)', desc: 'Technology, innovation, and entrepreneurship. Coding, hackathons, and robotics drive our mission.', to: '/gymkhana/technocrat', img: '/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png', tag: 'Innovation & Tech' },
  { name: 'Sports', color: '#10b981', colorDark: '#059669', bg: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', desc: 'Indoor & outdoor games, tournaments, and fitness — building discipline and sportsmanship.', to: '/gymkhana/sports', img: '/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png', tag: 'Athletics & Fitness' },
  { name: 'Cultural', color: '#f59e0b', colorDark: '#d97706', bg: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)', desc: 'Music, dance, drama, arts, and literary activities — a stage for creativity and expression.', to: '/gymkhana/cultural', img: '/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png', tag: 'Arts & Expression' },
  { name: 'Disha & CSR', color: '#ec4899', colorDark: '#db2777', bg: 'linear-gradient(135deg, #db2777 0%, #ec4899 100%)', desc: 'Career guidance and social responsibility — outreach programs that make a real difference.', to: '/gymkhana/disha-csr', img: '/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png', tag: 'Community & Growth' },
];
const OBJECTIVES = [
  'Provide a platform for students to engage in co-curricular and extracurricular activities.',
  'Encourage leadership, innovation, and organizational skills among students.',
  'Cultivate teamwork, collaboration, and a sense of responsibility.',
  'Complement academic learning with practical exposure and problem-solving experiences.',
  'Nurture creativity, sportsmanship, and social responsibility.',
];
const GOALS = [
  { icon: 'fa-solid fa-star', title: 'Skill Enhancement', desc: 'Building confidence, communication, and leadership abilities.' },
  { icon: 'fa-solid fa-seedling', title: 'Holistic Development', desc: 'Balancing academics with cultural, technical, and sports excellence.' },
  { icon: 'fa-solid fa-people-group', title: 'Community Engagement', desc: 'Promoting social awareness and CSR initiatives.' },
  { icon: 'fa-solid fa-crown', title: 'Student Leadership', desc: 'Empowering students to take charge through active roles in clubs and events.' },
  { icon: 'fa-solid fa-handshake', title: 'Collaboration', desc: 'Strengthening unity and coordination among diverse student groups.' },
];

export default function Gymkhana() {
  return (
    <div className="gym-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .gym-page { background:#f8faff; min-height:100vh; font-family:'Inter',sans-serif; }

        /* ── HERO ── */
        .gym-hero {
          background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
          padding:90px 5% 70px; position:relative; overflow:hidden;
        }
        .gym-hero-content { position:relative; z-index:2; display:flex; align-items:center; justify-content:space-between; gap:48px; flex-wrap:wrap; max-width:1200px; margin:0 auto; }
        .gym-hero-left { flex:1; min-width:300px; text-align:left; }
        .gym-hero-chip { display:inline-flex; align-items:center; gap:8px; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.28); color:#00d4ff; padding:6px 18px; border-radius:30px; font-size:0.68rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:20px; }
        .gym-hero h1 { font-family:'Poppins',sans-serif; font-size:clamp(2.6rem,6vw,4.2rem); font-weight:900; color:#fff; line-height:1.05; margin-bottom:16px; }
        .gym-hero h1 em { font-style:normal; background:linear-gradient(90deg,#f5c518,#ff8c00); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .gym-hero-sub { font-size:0.78rem; color:rgba(255,255,255,0.45); letter-spacing:3px; text-transform:uppercase; font-weight:700; margin-bottom:18px; }
        .gym-hero-left > p { color:rgba(255,255,255,0.55); font-size:1rem; max-width:500px; line-height:1.85; margin-bottom:0; }
        .gym-hero-right { flex-shrink:0; }
        .gym-hero-badges { display:flex; flex-direction:column; gap:12px; }
        .gym-hero-badge { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.75); padding:12px 22px; border-radius:14px; font-weight:600; font-size:0.88rem; display:flex; align-items:center; gap:12px; transition:background 0.2s,border-color 0.2s; }
        .gym-hero-badge:hover { background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.2); }
        .gym-hero-badge-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }

        /* ── STATS ── */
        .gym-stats-wrap { background:#fff; padding:0 5%; }
        .gym-stats-bar { max-width:940px; margin:-46px auto 0; display:grid; grid-template-columns:repeat(4,1fr); background:#fff; border-radius:20px; box-shadow:0 20px 60px rgba(10,22,40,0.14); overflow:hidden; border:1px solid rgba(10,22,40,0.08); position:relative; z-index:3; }
        .gym-stat { padding:28px 20px; text-align:center; }
        .gym-stat:not(:last-child) { border-right:1px solid rgba(10,22,40,0.07); }
        .gym-stat:nth-child(1) { border-top:4px solid #f5c518; }
        .gym-stat:nth-child(2) { border-top:4px solid #3b82f6; }
        .gym-stat:nth-child(3) { border-top:4px solid #10b981; }
        .gym-stat:nth-child(4) { border-top:4px solid #ec4899; }
        .gym-stat-num { display:block; font-family:'Poppins',sans-serif; font-size:2.3rem; font-weight:900; color:#0a1628; line-height:1; }
        .gym-stat-label { display:block; font-size:0.68rem; font-weight:700; color:#64748b; margin-top:6px; text-transform:uppercase; letter-spacing:0.8px; }

        /* ── PRESIDENT ── */
        .gym-president { background:#fff; padding:90px 5% 70px; }
        .gym-president-inner { max-width:1100px; margin:0 auto; background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%); border-radius:28px; padding:56px 60px; display:flex; gap:52px; align-items:center; box-shadow:0 24px 80px rgba(10,22,40,0.22); position:relative; overflow:hidden; }
        .gym-president-inner::before { content:''; position:absolute; top:-60px; right:-60px; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,rgba(0,212,255,0.1),transparent 70%); }
        .gym-president-img-wrap { position:relative; z-index:1; flex-shrink:0; }
        .gym-president-img-wrap img { width:200px; height:248px; object-fit:cover; border-radius:20px; border:3px solid rgba(245,197,24,0.4); box-shadow:0 16px 48px rgba(0,0,0,0.35); }
        .gym-president-text { position:relative; z-index:1; }
        .gym-president-pill { display:inline-block; background:rgba(245,197,24,0.15); color:#f5c518; border:1px solid rgba(245,197,24,0.3); border-radius:20px; padding:5px 16px; font-size:0.68rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:18px; }
        .gym-president-text h2 { font-family:'Poppins',sans-serif; font-size:1.75rem; font-weight:900; color:#fff; margin-bottom:20px; }
        .gym-president-text h2 span { color:#00d4ff; }
        .gym-president-text p { color:rgba(255,255,255,0.68); font-size:0.93rem; line-height:1.95; margin-bottom:14px; }
        .gym-president-sig { color:#f5c518!important; font-weight:700!important; font-size:0.95rem!important; }

        /* ── SECTION SHARED ── */
        .gym-section-heading { text-align:center; margin-bottom:52px; }
        .gym-section-pill { display:inline-block; background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:5px 16px; font-size:0.68rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:14px; }
        .gym-section-heading h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,4vw,2.5rem); font-weight:900; color:#0a1628; margin-bottom:12px; }
        .gym-section-heading h2 span { background:linear-gradient(135deg,#2563eb,#00d4ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .gym-section-heading p { color:#64748b; font-size:0.95rem; max-width:520px; margin:0 auto; }

        /* ── VICE PRESIDENTS ── */
        .gym-vps { background:#f0f4ff; padding:80px 5%; }
        .gym-vp-grid {
          display:flex; gap:36px; justify-content:center; align-items:stretch;
          flex-wrap:wrap; margin-top:48px;
        }
        .gym-vp-card {
          background:#fff; border-radius:24px; overflow:hidden;
          box-shadow:0 8px 36px rgba(10,22,40,0.1); border:1px solid rgba(10,22,40,0.07);
          transition:transform 0.32s,box-shadow 0.32s;
          width:280px; display:flex; flex-direction:column;
        }
        .gym-vp-card:hover { transform:translateY(-10px); box-shadow:0 24px 56px rgba(10,22,40,0.16); }
        .gym-vp-card-top {
          background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%);
          padding:36px 24px 28px; display:flex; flex-direction:column;
          align-items:center; position:relative; overflow:hidden; flex:1;
        }
        .gym-vp-card-top::before { content:''; position:absolute; top:-30px; right:-30px; width:120px; height:120px; border-radius:50%; background:radial-gradient(circle,rgba(0,212,255,0.15),transparent 70%); }
        .gym-vp-card-top::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#2563eb,#00d4ff,#2563eb); }
        .gym-vp-img-ring {
          position:relative; z-index:1;
          width:130px; height:130px; border-radius:50%;
          padding:3px; background:linear-gradient(135deg,#f5c518,#ff8c00);
          margin-bottom:18px; flex-shrink:0;
        }
        .gym-vp-img-ring img {
          width:100%; height:100%; object-fit:cover; object-position:top;
          border-radius:50%; border:3px solid #0a1628; display:block;
        }
        .gym-vp-card-top h4 { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:800; color:#fff; margin:0 0 4px; position:relative; z-index:1; text-align:center; }
        .gym-vp-card-top p { font-size:0.72rem; color:rgba(255,255,255,0.5); font-weight:600; margin:0; position:relative; z-index:1; text-align:center; }
        .gym-vp-card-bottom { padding:18px 22px; display:flex; align-items:center; justify-content:center; background:#fff; }
        .gym-vp-badge { display:inline-flex; align-items:center; gap:6px; background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:6px 16px; font-size:0.68rem; font-weight:800; letter-spacing:1px; text-transform:uppercase; }

        /* ── CLUB CARDS ── */
        .gym-clubs { background:#fff; padding:80px 5%; }
        .gym-clubs-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
        .gym-club-card { border-radius:22px; overflow:hidden; box-shadow:0 6px 28px rgba(10,22,40,0.09); transition:transform 0.32s,box-shadow 0.32s; text-decoration:none; display:flex; flex-direction:column; border:1px solid rgba(10,22,40,0.06); background:#fff; }
        .gym-club-card:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(10,22,40,0.17); }

        /* Image area with centered icon overlay */
        .gym-club-img-wrap { position:relative; width:100%; height:160px; overflow:hidden; }
        .gym-club-img-wrap img { width:100%; height:100%; object-fit:contain; display:block; transition:transform 0.4s; }
        .gym-club-card:hover .gym-club-img-wrap img { transform:scale(1.07); }
        .gym-club-img-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,22,40,0.78) 0%,rgba(10,22,40,0.25) 55%); }
        /* Big icon pinned center of image — always clearly visible */
        .gym-club-img-tag { position:absolute; bottom:10px; left:12px; background:rgba(255,255,255,0.15); backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.25); color:#fff; border-radius:20px; padding:3px 11px; font-size:0.62rem; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; }

        .gym-club-card-body { padding:20px 20px 22px; display:flex; flex-direction:column; flex:1; }
        .gym-club-card-body h3 { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:800; color:#0a1628; margin:0 0 8px; }
        .gym-club-card-body p { font-size:0.79rem; color:#64748b; line-height:1.75; margin:0 0 16px; flex:1; }
        .gym-club-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:12px; border-top:1px solid rgba(10,22,40,0.06); }
        .gym-club-card-link { display:inline-flex; align-items:center; gap:6px; font-size:0.76rem; font-weight:700; font-family:'Poppins',sans-serif; text-decoration:none; transition:gap 0.2s; }
        .gym-club-card:hover .gym-club-card-link { gap:10px; }
        .gym-club-card-arrow { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#fff; transition:transform 0.2s; }
        .gym-club-card:hover .gym-club-card-arrow { transform:translateX(3px); }

        /* ── OBJECTIVES ── */
        .gym-objectives { background:#f8faff; padding:80px 5%; }
        .gym-objectives-inner { max-width:1100px; margin:0 auto; display:flex; gap:64px; align-items:flex-start; flex-wrap:wrap; }
        .gym-obj-left { flex:1 1 280px; }
        .gym-obj-list { flex:1 1 420px; }
        .gym-obj-item { display:flex; align-items:flex-start; gap:16px; padding:18px 20px; background:#fff; border-radius:16px; margin-bottom:12px; box-shadow:0 4px 16px rgba(10,22,40,0.06); border:1px solid rgba(10,22,40,0.05); border-left:4px solid #2563eb; transition:transform 0.2s,box-shadow 0.2s; }
        .gym-obj-item:hover { transform:translateX(6px); box-shadow:0 8px 28px rgba(10,22,40,0.1); }
        .gym-obj-num { width:34px; height:34px; border-radius:10px; background:linear-gradient(135deg,#1a3a6b,#2563eb); color:#fff; font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:900; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .gym-obj-item p { margin:0; font-size:0.87rem; color:#334155; line-height:1.75; }

        /* ── GOALS ── */
        .gym-goals { background:#0a1628; padding:80px 5%; }
        .gym-goals-grid { max-width:1100px; margin:44px auto 0; display:grid; grid-template-columns:repeat(5,1fr); gap:20px; }
        .gym-goal-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09); border-radius:20px; padding:28px 18px; text-align:center; transition:background 0.25s,transform 0.25s,border-color 0.25s; }
        .gym-goal-card:hover { background:rgba(255,255,255,0.1); transform:translateY(-8px); border-color:rgba(245,197,24,0.3); }
        .gym-goal-icon { font-size:1.85rem; color:#f5c518; margin-bottom:14px; display:block; }
        .gym-goal-card h3 { font-family:'Poppins',sans-serif; font-size:0.88rem; font-weight:700; color:#fff; margin:0 0 8px; }
        .gym-goal-card p { font-size:0.74rem; color:rgba(255,255,255,0.48); line-height:1.75; margin:0; }

        /* ── STRUCTURE ── */
        .gym-structure { background:#fff; padding:80px 5%; }
        .gym-table-wrap { max-width:820px; margin:0 auto; border-radius:20px; overflow:hidden; box-shadow:0 12px 40px rgba(10,22,40,0.1); border:1px solid rgba(10,22,40,0.08); }
        .gym-table { width:100%; border-collapse:collapse; }
        .gym-table th { background:linear-gradient(90deg,#0a1628,#1a3a6b); color:#f5c518; padding:18px 26px; font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:800; letter-spacing:1px; text-transform:uppercase; text-align:left; }
        .gym-table td { padding:16px 26px; font-size:0.9rem; color:#334155; border-bottom:1px solid rgba(10,22,40,0.06); }
        .gym-table tr:last-child td { border-bottom:none; }
        .gym-table tr:hover td { background:#f0f4ff; }

        /* ── CTA ── */
        .gym-cta { background:linear-gradient(135deg,#1a3a6b,#2563eb); padding:80px 5%; text-align:center; position:relative; overflow:hidden; }
        .gym-cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 0%,rgba(0,212,255,0.18),transparent 60%); }
        .gym-cta-inner { max-width:580px; margin:0 auto; position:relative; z-index:1; }
        .gym-cta h2 { font-family:'Poppins',sans-serif; font-size:2.1rem; font-weight:900; color:#fff; margin-bottom:12px; }
        .gym-cta p { color:rgba(255,255,255,0.68); margin-bottom:34px; font-size:0.95rem; line-height:1.75; }
        .gym-cta-btn { display:inline-flex; align-items:center; gap:10px; background:#f5c518; color:#0a1628; padding:16px 38px; border-radius:50px; font-family:'Poppins',sans-serif; font-size:1rem; font-weight:800; text-decoration:none; transition:all 0.3s; box-shadow:0 8px 30px rgba(245,197,24,0.38); }
        .gym-cta-btn:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(245,197,24,0.55); }

        /* ── RESPONSIVE ── */
        @media(max-width:1100px){ .gym-clubs-grid { grid-template-columns:repeat(2,1fr); } .gym-goals-grid { grid-template-columns:repeat(3,1fr); } }
        @media(max-width:900px){ .gym-hero-content { flex-direction:column; gap:36px; } .gym-hero-left { text-align:center; } .gym-hero-left > p { margin:0 auto; } .gym-hero-badges { flex-direction:row; flex-wrap:wrap; justify-content:center; } }
        @media(max-width:768px){ .gym-stats-bar { grid-template-columns:repeat(2,1fr); margin-top:20px; } .gym-president-inner { flex-direction:column; padding:36px 28px; gap:28px; } .gym-clubs-grid { grid-template-columns:1fr 1fr; } .gym-goals-grid { grid-template-columns:repeat(2,1fr); } .gym-objectives-inner { gap:32px; } }
        @media(max-width:560px){ .gym-clubs-grid { grid-template-columns:1fr; } .gym-goals-grid { grid-template-columns:1fr 1fr; } .gym-vp-grid { flex-direction:column; align-items:center; } .gym-vp-card { width:100%; max-width:340px; } }
        @media(max-width:400px){ .gym-goals-grid { grid-template-columns:1fr; } }
      `}</style>

      {/* ── HERO ── */}
      <section className="gym-hero">
        <div className="gym-hero-content">
          <div className="gym-hero-left">
            <div className="gym-hero-chip"><i className="fa-solid fa-building-columns" /> Creative Techno College · Student Wing</div>
            <h1>GYM<em>KHANA</em></h1>
            <p className="gym-hero-sub">Technocrat · Sports · Cultural · Disha & CSR</p>
            <p>The vibrant hub of student life, leadership, and creativity at Creative Techno College, Angul. Four dynamic clubs empowering students to explore passions, showcase talents, and develop essential life skills beyond academics.</p>
          </div>
          <div className="gym-hero-right">
            <div className="gym-hero-badges">
              {CLUBS.map((c, i) => (
                <span key={i} className="gym-hero-badge">
                  <span className="gym-hero-badge-dot" style={{ background: c.color }} />
                  <i className={c.icon} style={{ color: c.color }} /> {c.name}
                </span>
              ))}
              <span className="gym-hero-badge">
                <span className="gym-hero-badge-dot" style={{ background: '#f5c518' }} />
                <i className="fa-solid fa-users" style={{ color: '#f5c518' }} /> 200+ Active Members
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="gym-stats-wrap">
        <div className="gym-stats-bar">
          {[['4', 'Active Clubs'], ['200+', 'Student Members'], ['50+', 'Events Yearly'], ['100%', 'Participation']].map(([n, l], i) => (
            <div key={i} className="gym-stat">
              <span className="gym-stat-num">{n}</span>
              <span className="gym-stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRESIDENT ── */}
      <section className="gym-president">
        <div className="gym-president-inner">
          <div className="gym-president-img-wrap">
            <img src="/CTC NEW REACT WEBSITE/images/GYMKHANA/Dean Sir.png" alt="Mr. Manoj Das" />
          </div>
          <div className="gym-president-text">
            <div className="gym-president-pill">Message from the President</div>
            <h2>A Message from Our <span>President</span></h2>
            <p>"At Creative Techno College, we believe education is not confined to classrooms. True learning happens when students step beyond books and engage in experiences that shape their personality, values, and leadership qualities.</p>
            <p>The Gymkhana embodies this spirit — through the four vibrant clubs — Technocrat, Sports, Cultural, and Disha+CSR — we nurture innovation, teamwork, cultural expression, and social responsibility."</p>
            <p className="gym-president-sig">— Mr. Manoj Das &nbsp;|&nbsp; Dean Academic & President, Gymkhana</p>
          </div>
        </div>
      </section>

      {/* ── VICE PRESIDENTS ── */}
      <section className="gym-vps">
        <div className="gym-section-heading">
          <div className="gym-section-pill"><i className="fa-solid fa-users" /> Leadership</div>
          <h2>Vice <span>Presidents</span></h2>
          <p>Student representatives who lead the Gymkhana alongside the President.</p>
        </div>
        <div className="gym-vp-grid">
          {[
            { name: 'Mr. Subham Nanda', role: 'Vice President', badge: 'Boy Representative', img: '/CTC NEW REACT WEBSITE/images/GYMKHANA/subham.jpeg', icon: 'fa-solid fa-mars' },
            { name: 'Ms. Bidusmita Mishra', role: 'Vice President', badge: 'Girl Representative', img: '/CTC NEW REACT WEBSITE/images/GYMKHANA/bidusmita.jpeg', icon: 'fa-solid fa-venus' },
          ].map((vp, i) => (
            <div key={i} className="gym-vp-card">
              <div className="gym-vp-card-top">
                <div className="gym-vp-img-ring">
                  <img src={vp.img} alt={vp.name} />
                </div>
                <h4>{vp.name}</h4>
                <p>{vp.role}</p>
              </div>
              <div className="gym-vp-card-bottom">
                <span className="gym-vp-badge"><i className={vp.icon} /> {vp.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLUB CARDS ── */}
      <section className="gym-clubs">
        <div className="gym-section-heading">
          <div className="gym-section-pill"><i className="fa-solid fa-layer-group" /> Our Clubs</div>
          <h2>Clubs Under <span>Gymkhana</span></h2>
          <p>Click any club to explore its activities, team, and achievements.</p>
        </div>
        <div className="gym-clubs-grid">
          {CLUBS.map((c, i) => (
            <Link key={i} to={c.to} className="gym-club-card">
              <div className="gym-club-img-wrap">
                <img src={c.img} alt={c.name} />
                <div className="gym-club-img-overlay" />
                {/* Icon centered and clearly visible over image */}
                <div className="gym-club-img-icon" style={{ background: c.bg }}>
                  <i className={c.icon} />
                </div>
                <span className="gym-club-img-tag">{c.tag}</span>
              </div>
              <div className="gym-club-card-body">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <div className="gym-club-card-footer">
                  <span className="gym-club-card-link" style={{ color: c.color }}>
                    Explore Club <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.68rem' }} />
                  </span>
                  <div className="gym-club-card-arrow" style={{ background: c.bg }}>
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── OBJECTIVES ── */}
      <section className="gym-objectives">
        <div className="gym-objectives-inner">
          <div className="gym-obj-left">
            <div className="gym-section-pill"><i className="fa-solid fa-bullseye" /> Purpose</div>
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 900, color: '#0a1628', margin: '14px 0 14px' }}>
              Objectives of{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Gymkhana</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.93rem', lineHeight: 1.8 }}>Our guiding principles that shape every event, club, and initiative we undertake.</p>
          </div>
          <div className="gym-obj-list">
            {OBJECTIVES.map((o, i) => (
              <div key={i} className="gym-obj-item">
                <div className="gym-obj-num">{i + 1}</div>
                <p>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOALS ── */}
      <section className="gym-goals">
        <div className="gym-section-heading">
          <div className="gym-section-pill" style={{ background: 'rgba(245,197,24,0.15)', color: '#f5c518', border: '1px solid rgba(245,197,24,0.3)' }}><i className="fa-solid fa-flag" /> Our Goals</div>
          <h2 style={{ color: '#fff', fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, margin: '0 0 12px' }}>What We <span style={{ color: '#f5c518' }}>Strive For</span></h2>
        </div>
        <div className="gym-goals-grid">
          {GOALS.map((g, i) => (
            <div key={i} className="gym-goal-card">
              <i className={`${g.icon} gym-goal-icon`} />
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRUCTURE ── */}
      <section className="gym-structure">
        <div className="gym-section-heading">
          <div className="gym-section-pill"><i className="fa-solid fa-sitemap" /> Organisation</div>
          <h2>Structure of <span>Gymkhana</span></h2>
        </div>
        <div className="gym-table-wrap">
          <table className="gym-table">
            <thead><tr><th>Role</th><th>Name / Description</th></tr></thead>
            <tbody>
              <tr><td><strong>President</strong></td><td>Mr. Manoj Das (Dean Academic)</td></tr>
              <tr><td><strong>Vice Presidents</strong></td><td>Mr. Subham Nanda (Boy) &amp; Ms. Bidusmita Mishra (Girl)</td></tr>
              <tr><td><strong>Club Secretaries</strong></td><td>One boy &amp; one girl student for each of the four clubs</td></tr>
              <tr><td><strong>Student Members</strong></td><td>Active participants across all academic programs</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}