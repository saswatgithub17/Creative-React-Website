import { useState, useMemo, useCallback, useEffect } from 'react';

const OBJECTIVES = [
  { icon: 'fa-solid fa-palette', text: 'Encourage students to showcase and develop their artistic and creative abilities.' },
  { icon: 'fa-solid fa-earth-asia', text: 'Provide a platform for cultural exchange, inclusivity, and diversity.' },
  { icon: 'fa-solid fa-crown', text: 'Promote leadership, teamwork, and organizational skills through cultural events.' },
  { icon: 'fa-solid fa-microphone', text: 'Enhance students\' confidence, communication, and presentation skills.' },
  { icon: 'fa-solid fa-music', text: 'Make the campus a hub of cultural vibrancy and student engagement.' },
];

const ACTIVITIES = [
  { name: 'Inter-College Fest', members: 'Ravi Kumar, Sonal Sharma', date: 'March 2024', icon: 'fa-solid fa-flag', color: '#3b82f6' },
  { name: 'Drama Night', members: 'Ananya Gupta', date: 'December 2023', icon: 'fa-solid fa-masks-theater', color: '#8b5cf6' },
  { name: 'Folk Dance Fiesta', members: 'Team Cultural', date: 'August 2024', icon: 'fa-solid fa-music', color: '#ec4899' },
];

const GALLERY = [
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg', alt: 'Fun Fest 1' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f2.jpeg', alt: 'Fun Fest 2' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f3.jpeg', alt: 'Fun Fest 3' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f4.jpeg', alt: 'Fun Fest 4' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f5.jpeg', alt: 'Fun Fest 5' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f6.jpeg', alt: 'Fun Fest 6' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f7.jpeg', alt: 'Fun Fest 7' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg', alt: 'Holi 1' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h2.jpeg', alt: 'Holi 2' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h3.jpeg', alt: 'Holi 3' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h4.jpeg', alt: 'Holi 4' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h5.jpeg', alt: 'Holi 5' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg', alt: 'Saraswati Puja 1' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp2.jpeg', alt: 'Saraswati Puja 2' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp3.jpeg', alt: 'Saraswati Puja 3' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp4.jpeg', alt: 'Saraswati Puja 4' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp5.jpeg', alt: 'Saraswati Puja 5' },
  { src: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp6.jpeg', alt: 'Saraswati Puja 6' },
];

const MASONRY_SIZES = ['normal', 'tall', 'wide', 'normal', 'normal', 'wide', 'tall', 'normal', 'normal', 'tall', 'wide', 'normal', 'normal', 'wide', 'tall', 'normal', 'normal', 'normal'];

/* Pagination component */
function Pagination({ page, totalPages, total, label, onPage }) {
  if (totalPages <= 1) return null;
  const nums = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) nums.push(i);
  } else if (page <= 4) {
    for (let i = 1; i <= 7; i++) nums.push(i);
  } else if (page >= totalPages - 3) {
    for (let i = totalPages - 6; i <= totalPages; i++) nums.push(i);
  } else {
    for (let i = page - 3; i <= page + 3; i++) nums.push(i);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
      <button
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
        style={{
          background: page === 1 ? '#f0f4f8' : '#0c2340',
          color: page === 1 ? '#94a3b8' : '#ffcc00',
          border: 'none',
          borderRadius: 10,
          padding: '8px 16px',
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontSize: '0.8rem',
          fontWeight: 700,
          cursor: page === 1 ? 'default' : 'pointer',
        }}
      >
        ← Prev
      </button>
      {nums.map((n) => (
        <button
          key={n}
          onClick={() => onPage(n)}
          style={{
            background: page === n ? '#0c2340' : '#fff',
            color: page === n ? '#ffcc00' : '#0c2340',
            border: `1.5px solid ${page === n ? '#0c2340' : 'rgba(12,35,64,0.15)'}`,
            borderRadius: 10,
            padding: '8px 14px',
            minWidth: 38,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        style={{
          background: page === totalPages ? '#f0f4f8' : '#0c2340',
          color: page === totalPages ? '#94a3b8' : '#ffcc00',
          border: 'none',
          borderRadius: 10,
          padding: '8px 16px',
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontSize: '0.8rem',
          fontWeight: 700,
          cursor: page === totalPages ? 'default' : 'pointer',
        }}
      >
        Next →
      </button>
      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
        Page {page} of {totalPages} · {total} {label || 'members'}
      </span>
    </div>
  );
}

export default function Cultural() {
  const [lbIdx, setLbIdx] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const allPhotos = useMemo(
    () =>
      GALLERY.map((item, i) => ({
        ...item,
        size: MASONRY_SIZES[i % MASONRY_SIZES.length],
      })),
    []
  );
  const visiblePhotos = showFullGallery ? allPhotos : allPhotos.slice(0, 10);

  const handleKey = useCallback(
    (e) => {
      if (lbIdx === null) return;
      if (e.key === 'ArrowRight') setLbIdx((prev) => (prev + 1) % visiblePhotos.length);
      if (e.key === 'ArrowLeft')
        setLbIdx((prev) => (prev - 1 + visiblePhotos.length) % visiblePhotos.length);
      if (e.key === 'Escape') setLbIdx(null);
    },
    [lbIdx, visiblePhotos.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const lbImg = lbIdx !== null ? visiblePhotos[lbIdx] : null;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }

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

    .tc-hero-wave { height: 56px; margin-top: -1px; }
    .tc-hero-wave svg { width: 100%; height: 100%; display: block; }

    .tc-page { background: #f0f4f8; min-height: 100vh; font-family: 'Plus Jakarta Sans',sans-serif; }
    .tc-main { max-width: 1200px; margin: 0 auto; padding: 0 4% 80px; }
    .tc-pill-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
    .tc-section-head { text-align: center; margin-bottom: 40px; }
    .tc-section-head h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,4vw,2.3rem); font-weight: 900; color: #0a1628; margin-bottom: 10px; }
    .tc-section-head h2 span { background: linear-gradient(135deg,#0c2340,#2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .tc-section-head p { color: #64748b; font-size: 0.88rem; max-width: 480px; margin: 0 auto; }

    .tc-leaders-wrap { padding: 72px 4%; }
    .tc-leaders-grid { max-width: 820px; margin: 0 auto; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; }
    .tc-leader-card { background: #fff; border-radius: 22px; overflow: hidden; box-shadow: 0 8px 30px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.07); transition: transform 0.3s,box-shadow 0.3s; width: 220px; }
    .tc-leader-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(10,22,40,0.14); }
    .tc-leader-img { width: 100%; height: 200px; overflow: hidden; background: linear-gradient(135deg,#0a1628,#1a3a6b); }
    .tc-leader-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
    .tc-leader-body { padding: 16px 18px 20px; text-align: center; }
    .tc-leader-body h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.8rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px; }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    .tc-obj-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .tc-obj-card { background: #fff; border-radius: 16px; padding: 22px 24px; display: flex; align-items: flex-start; gap: 16px; border: 1px solid rgba(10,22,40,0.07); box-shadow: 0 4px 16px rgba(10,22,40,0.06); transition: transform 0.2s; }
    .tc-obj-card:hover { transform: translateX(6px); }
    .tc-obj-icon { width: 42px; height: 42px; background: linear-gradient(135deg,#d97706,#f59e0b); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1rem; flex-shrink: 0; }
    .tc-obj-card p { margin: 0; color: #334155; font-size: 0.88rem; line-height: 1.7; }

    .tc-proj-wrap { padding: 72px 4%; background: #fff; border-radius: 22px; margin: 40px 0; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
    .tc-proj-sub { font-size: 0.73rem; color: #64748b; margin-top: 2px; }
    .tc-proj-date { font-size: 0.73rem; color: #0c2340; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

    .tc-gallery-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-gallery-grid {
      max-width: 1200px; margin: 40px auto 0;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-rows: 220px; grid-auto-flow: dense; gap: 20px;
    }
    .tc-gallery-item {
      position: relative; border-radius: 16px; overflow: hidden; cursor: pointer;
      border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;
    }
    .tc-gallery-item:hover { transform: scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .tc-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
    .tc-gallery-item:hover img { transform: scale(1.1); }
    .tc-gallery-overlay {
      position: absolute; inset: 0; background: rgba(10,22,40,0.5);
      display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;
    }
    .tc-gallery-item:hover .tc-gallery-overlay { opacity: 1; }
    .tc-gallery-overlay i { color: #ffcc00; font-size: 2rem; transform: scale(0.5); transition: 0.3s; }
    .tc-gallery-item:hover .tc-gallery-overlay i { transform: scale(1); }
    .tc-item-tall { grid-row: span 2; }
    .tc-item-wide { grid-column: span 2; }

    .tc-btn-full {
      display: block; margin: 60px auto 0; background: transparent; border: 2px solid #ffcc00;
      color: #ffcc00; padding: 18px 60px; border-radius: 50px; font-weight: 800; cursor: pointer;
      transition: 0.3s; font-family:'Plus Jakarta Sans',sans-serif; letter-spacing: 2px;
    }
    .tc-btn-full:hover { background: #ffcc00; color: #020c1b; box-shadow: 0 10px 40px rgba(255,204,0,0.3); }

    .gl-lightbox {
      position: fixed; inset: 0; background: rgba(1, 7, 17, 0.99); z-index: 2000;
      display: flex; align-items: center; justify-content: center; padding: 40px;
      backdrop-filter: blur(15px);
    }
    .gl-close {
      position: absolute; top: 40px; right: 40px; background: rgba(255,255,255,0.05);
      border: none; color: #fff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer;
      font-size: 1.8rem; transition: 0.3s; z-index: 2300;
    }
    .gl-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.05); border: none; color: #fff; width: 70px; height: 70px;
      border-radius: 50%; cursor: pointer; transition: 0.3s; z-index: 2200; font-size: 1.5rem;
    }
    .gl-nav:hover { background: #ffcc00; color: #000; }
    .gl-panel { max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
    .gl-img { max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 16px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
    .gl-thumbs { display: flex; gap: 10px; margin-top: 30px; flex-wrap: wrap; justify-content: center; }
    .gl-thumb { width: 60px; height: 60px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: 0.2s; }
    .gl-thumb.active { border-color: #ffcc00; transform: scale(1.1); }
    .gl-thumb img { width: 100%; height: 100%; object-fit: cover; }

    .tc-mission-static {
      background: #0a1628; padding: 60px 4%; border-radius: 22px; margin: 40px 0;
    }
    .tc-mission-card {
      max-width: 1100px; margin: 0 auto; position: relative; border-radius: 22px; overflow: hidden; height: 370px; box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    }
    .tc-mission-img { width: 100%; height: 100%; object-fit: cover; }
    .tc-mission-overlay {
      position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.85),rgba(10,22,40,0.2) 60%);
      display: flex; flex-direction: column; justify-content: flex-end; padding: 36px;
    }
    .tc-mission-overlay h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.9rem; font-weight: 900; color: #fff; margin: 0 0 5px; }
    .tc-mission-overlay p { color: rgba(255,255,255,0.65); margin: 0; max-width: 500px; }

    .cu-cta {
      background: linear-gradient(135deg,#1a3a6b,#2563eb); padding: 72px 5%; text-align:center; border-radius:30px; margin:40px 4%;
    }
    .cu-cta h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.9rem; font-weight:900; color:#fff; margin-bottom:12px; }
    .cu-cta p { color:rgba(255,255,255,0.7); margin-bottom:28px; font-size:0.95rem; line-height:1.7; }
    .cu-cta-btn { display:inline-flex; align-items:center; gap:10px; background:#f5c518; color:#0a1628; padding:15px 34px; border-radius:50px; font-family:'Plus Jakarta Sans',sans-serif; font-size:0.95rem; font-weight:800; text-decoration:none; transition:all 0.3s; box-shadow:0 8px 30px rgba(245,197,24,0.35); }
    .cu-cta-btn:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(245,197,24,0.5); }

    @media(max-width:900px) {
      .tc-hero-inner { flex-direction: column; gap: 36px; }
      .tc-obj-grid { grid-template-columns: 1fr; }
      .tc-gallery-grid { grid-template-columns: repeat(2,1fr); }
    }
    @media(max-width:600px) {
      .tc-gallery-grid { grid-template-columns: 1fr; }
    }
  `;

  return (
    <div className="tc-page">
      <style>{css}</style>

      {/* HERO */}
      <div className="tc-hero">
        <div className="tc-hero-inner">
          <div className="tc-hero-left">
            <div className="tc-hero-badge">
              <i className="fa-solid fa-masks-theater" /> Gymkhana · Cultural Club
            </div>
            <h1 className="tc-hero-h1">
              CULTURAL <em>CLUB</em>
            </h1>
            <p className="tc-hero-sub">
              Celebrating creativity, expression, and diversity through art, music, dance, and drama —
              providing students a vibrant stage to explore their artistic potential and cultural heritage.
            </p>
            <div className="tc-hero-stats">
              {[
                { val: '5+', label: 'Art Forms' },
                { val: 'Annual', label: 'Cultural Fest' },
                { val: '50+', label: 'Participants' },
                { val: 'All Year', label: 'Activities' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="tc-hero-stat-val">{s.val}</div>
                  <div className="tc-hero-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="tc-hero-right">
            <div className="tc-hero-pills">
              {[
                { dot: '#3b82f6', icon: 'fa-solid fa-music', label: 'Music' },
                { dot: '#10b981', icon: "fa-solid fa-child", label: 'Dance' },
                { dot: '#ffcc00', icon: 'fa-solid fa-masks-theater', label: 'Drama' },
                { dot: '#ec4899', icon: 'fa-solid fa-palette', label: 'Fine Arts' },
                { dot: '#00d4ff', icon: 'fa-solid fa-pen-nib', label: 'Literary' },
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
        <div className="tc-hero-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>
      </div>

      <div className="tc-main">
        {/* LEADERS */}
        <div className="tc-leaders-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-users" /> Our Leadership</div>
            <h2>Club Incharge & <span>Secretaries</span></h2>
          </div>
          <div className="tc-leaders-grid">
            {[
              {
                role: 'Club Incharge',
                name: 'Mr. Krishnasis Mishra',
                img: '/CTC NEW REACT WEBSITE/images/CULTURAL/Principal Sir.jpg',
                tag: 'Faculty Lead'
              },
              {
                role: 'Club Secretary (Boy)',
                name: 'Mr. Bikash Behera',
                img: '/CTC NEW REACT WEBSITE/images/CULTURAL/bikash.jpeg',
                tag: 'Student Rep'
              },
              {
                role: 'Club Secretary (Girl)',
                name: 'Ms. Ipsita Pattanaik',
                img: '/CTC NEW REACT WEBSITE/images/CULTURAL/ipsita.jpg',
                tag: 'Student Rep'
              },
            ].map((l, i) => (
              <div key={i} className="tc-leader-card">
                <div className="tc-leader-img"><img src={l.img} alt={l.role} /></div>
                <div className="tc-leader-body">
                  <h4>{l.role}</h4>
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

        {/* OBJECTIVES */}
        <div style={{ padding: '72px 4%' }}>
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-bullseye" /> Mission</div>
            <h2>Our <span>Objectives</span></h2>
            <p>The principles that shape every cultural event, workshop, and performance we create.</p>
          </div>
          <div className="tc-obj-grid">
            {OBJECTIVES.map((obj, i) => (
              <div key={i} className="tc-obj-card">
                <div className="tc-obj-icon"><i className={obj.icon} /></div>
                <p>{obj.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITIES (as project rows) */}
        <div className="tc-proj-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-calendar-check" /> Events</div>
            <h2>Our <span>Activities</span></h2>
            <p>Cultural events that bring creativity, celebration, and student talent to the spotlight.</p>
          </div>
          <div className="tc-proj-inner">
            {ACTIVITIES.map((act, i) => (
              <div key={i} className="tc-proj-row">
                <div className="tc-proj-num">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1 }}>
                  <div className="tc-proj-name">
                    <i className={act.icon} style={{ marginRight: 8, color: act.color }} />
                    {act.name}
                  </div>
                  <div className="tc-proj-sub">
                    <i className="fa-solid fa-users" style={{ fontSize: '0.6rem', marginRight: 4 }} />
                    {act.members}
                  </div>
                </div>
                <div className="tc-proj-date">
                  <i className="fa-regular fa-calendar" style={{ marginRight: 5 }} />
                  {act.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNER (mission static card) */}
        <div className="tc-mission-static">
          <div className="tc-mission-card">
            <img src="/CTC NEW REACT WEBSITE/images/CULTURAL/banner.jpg" alt="Cultural Club Banner" className="tc-mission-img" />
            <div className="tc-mission-overlay">
              <h3>Where Art Meets Identity</h3>
              <p>Our annual cultural fest showcases the rich heritage and creative spirit of our students.</p>
            </div>
          </div>
        </div>
      </div> {/* /tc-main */}

      {/* GALLERY */}
      <div className="tc-gallery-wrap">
        <div className="tc-section-head">
          <div
            className="tc-pill-tag"
            style={{ background: 'rgba(255,204,0,0.15)', color: '#ffcc00', border: '1px solid rgba(255,204,0,0.3)' }}
          >
            <i className="fa-solid fa-images" /> Gallery
          </div>
          <h2 style={{ color: '#fff' }}>Event <span style={{ color: '#ffcc00' }}>Gallery</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)' }}>
            Vivid memories from our cultural events, performances, and festive celebrations.
          </p>
        </div>
        <div className="tc-gallery-grid">
          {visiblePhotos.map((img, i) => (
            <div
              key={i}
              className={`tc-gallery-item ${img.size === 'tall' ? 'tc-item-tall' : ''} ${img.size === 'wide' ? 'tc-item-wide' : ''
                }`}
              onClick={() => setLbIdx(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="tc-gallery-overlay">
                <i className="fa-solid fa-expand" />
              </div>
            </div>
          ))}
        </div>
        {!showFullGallery && allPhotos.length > 10 && (
          <button className="tc-btn-full" onClick={() => setShowFullGallery(true)}>
            EXPLORE FULL ARCHIVE ({allPhotos.length} IMAGES)
          </button>
        )}
      </div>

      {/* LIGHTBOX */}
      {lbImg && (
        <div className="gl-lightbox" onClick={(e) => e.target === e.currentTarget && setLbIdx(null)}>
          <button className="gl-close" onClick={() => setLbIdx(null)}>
            ✕
          </button>
          <button
            className="gl-nav"
            style={{ left: '40px' }}
            onClick={() => setLbIdx((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length)}
          >
            ←
          </button>
          <div className="gl-panel">
            <img className="gl-img" src={lbImg.src} alt="View" />
            <div style={{ color: '#ffcc00', fontWeight: 900, marginTop: '25px', fontSize: '1.2rem' }}>
              CULTURAL CLUB ARCHIVES
            </div>
            <div className="gl-thumbs">
              {visiblePhotos.map((img, i) => (
                <div
                  key={i}
                  className={`gl-thumb ${lbIdx === i ? 'active' : ''}`}
                  onClick={() => setLbIdx(i)}
                >
                  <img src={img.src} alt="thumb" />
                </div>
              ))}
            </div>
          </div>
          <button
            className="gl-nav"
            style={{ right: '40px' }}
            onClick={() => setLbIdx((i) => (i + 1) % visiblePhotos.length)}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}