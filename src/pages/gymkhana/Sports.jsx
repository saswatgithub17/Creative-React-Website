import { useState, useMemo, useCallback, useEffect } from 'react';

const SPORTS_ACTIVITIES = [
  { name: '100m Running', month: 'December', icon: 'fa-person-running' },
  { name: '200m Running', month: 'December', icon: 'fa-person-running' },
  { name: 'Long Jump', month: 'December', icon: 'fa-arrow-right-long' },
  { name: 'High Jump', month: 'December', icon: 'fa-up-long' },
  { name: 'Discus Throw', month: 'December', icon: 'fa-circle' },
  { name: 'Shotput', month: 'December', icon: 'fa-baseball' },
  { name: 'Javelin Throw', month: 'December', icon: 'fa-location-arrow' },
  { name: 'Relay Race', month: 'December', icon: 'fa-people-arrows' },
  { name: 'Badminton', month: 'December', icon: 'fa-table-tennis-paddle-ball' },
  { name: 'Chess', month: 'December', icon: 'fa-chess' },
  { name: 'Carrom', month: 'December', icon: 'fa-chess-board' },
];

const OBJECTIVES = [
  { icon: 'fa-solid fa-handshake', text: 'To develop the spirit of sportsmanship and healthy competition.' },
  { icon: 'fa-solid fa-heart-pulse', text: 'To maintain physical and mental fitness through regular sports activities.' },
  { icon: 'fa-solid fa-star', text: 'To identify and nurture sporting talent among students.' },
  { icon: 'fa-solid fa-people-group', text: 'To promote teamwork, discipline, and time management skills.' },
  { icon: 'fa-solid fa-scale-balanced', text: 'To provide a balance between academics and extracurricular excellence.' },
];

const GALLERY = Array.from({ length: 12 }, (_, i) => ({
  src: `/CTC%20NEW%20REACT%20WEBSITE/images/SPORTS/image${i + 1}.jpeg`,
  alt: `Sports Event ${i + 1}`,
}));

const MASONRY_SIZES = ['normal', 'tall', 'wide', 'normal', 'normal', 'wide', 'tall', 'normal'];

export default function Sports() {
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
    .tc-obj-icon { width: 42px; height: 42px; background: linear-gradient(135deg,#059669,#10b981); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1rem; flex-shrink: 0; }
    .tc-obj-card p { margin: 0; color: #334155; font-size: 0.88rem; line-height: 1.7; }

    .tc-proj-wrap { padding: 72px 4%; background: #fff; border-radius: 22px; margin: 40px 0; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
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

    @media(max-width:900px) {
      .tc-hero-inner { flex-direction: column; gap: 36px; }
      .tc-obj-grid { grid-template-columns: 1fr; }
      .tc-gallery-grid { grid-template-columns: repeat(2,1fr); }
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
              <i className="fa-solid fa-trophy" /> Gymkhana · Sports Club
            </div>
            <h1 className="tc-hero-h1">
              SPORTS <em>CLUB</em>
            </h1>
            <p className="tc-hero-sub">
              Dedicated to promoting physical fitness, discipline, teamwork, and sportsmanship —
              building resilience, leadership, and a healthy lifestyle among students.
            </p>
            <div className="tc-hero-stats">
              {[
                { val: `${SPORTS_ACTIVITIES.length}+`, label: 'Sports Events' },
                { val: 'Annual', label: 'Sports Meet' },
                { val: '100%', label: 'Participation' },
                { val: 'Dec', label: 'Season' },
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
                { dot: '#3b82f6', icon: 'fa-solid fa-person-running', label: 'Track & Field' },
                { dot: '#10b981', icon: 'fa-solid fa-futbol', label: 'Team Sports' },
                { dot: '#ffcc00', icon: 'fa-solid fa-chess', label: 'Indoor Games' },
                { dot: '#ec4899', icon: 'fa-solid fa-dumbbell', label: 'Fitness Workshops' },
                { dot: '#00d4ff', icon: 'fa-solid fa-trophy', label: 'Tournaments' },
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
        {/* LEADERS SECTION */}
        <div className="tc-leaders-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-users" /> Our Leadership</div>
            <h2>Club Incharge & <span>Secretaries</span></h2>
          </div>
          <div className="tc-leaders-grid">
            {[
              {
                role: 'Club Incharge',
                name: 'Mr. Satya S. S. Dehury',
                img: '/CTC NEW REACT WEBSITE/images/SPORTS/Satya Sir.jpg',
                tag: 'Faculty Lead'
              },
              {
                role: 'Club Secretary (Boy)',
                name: ' Mr. Chiranjib Pattnaik',
                img: '/CTC NEW REACT WEBSITE/images/SPORTS/gulu.jpeg',
                tag: 'Student Rep'
              },
              {
                role: 'Club Secretary (Girl)',
                name: 'Monalisha Behera',
                img: '/CTC NEW REACT WEBSITE/images/SPORTS/monalisha.jpeg',
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
            <p>Core principles guiding every tournament, session, and activity we organize.</p>
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

        {/* ACTIVITIES */}
        <div className="tc-proj-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-list" /> Events</div>
            <h2>Our <span>Activities</span></h2>
            <p>Annual sports events organized every December during the Sports Meet.</p>
          </div>
          <div className="tc-proj-inner">
            {SPORTS_ACTIVITIES.map((act, i) => (
              <div key={i} className="tc-proj-row">
                <div className="tc-proj-num">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1 }}>
                  <div className="tc-proj-name">
                    <i className={`fa-solid ${act.icon}`} style={{ marginRight: 8, color: '#2563eb' }} />
                    {act.name}
                  </div>
                </div>
                <div className="tc-proj-date">
                  <i className="fa-regular fa-calendar" style={{ marginRight: 5 }} />
                  {act.month}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNER */}
        <div className="tc-mission-static">
          <div className="tc-mission-card">
            <img src="/CTC NEW REACT WEBSITE/images/SPORTS/banner.jpeg" alt="Sports Club Banner" className="tc-mission-img" />
            <div className="tc-mission-overlay">
              <h3>Annual Sports Meet</h3>
              <p>Where champions are made — track, field, and team sports bring out the best in every participant.</p>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="tc-gallery-wrap">
        <div className="tc-section-head">
          <div className="tc-pill-tag" style={{ background: 'rgba(255,204,0,0.15)', color: '#ffcc00', border: '1px solid rgba(255,204,0,0.3)' }}>
            <i className="fa-solid fa-images" /> Gallery
          </div>
          <h2 style={{ color: '#fff' }}>Annual Sports <span style={{ color: '#ffcc00' }}>Highlights</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)' }}>
            Moments of triumph, teamwork, and sportsmanship from our annual sports meets.
          </p>
        </div>
        <div className="tc-gallery-grid">
          {visiblePhotos.map((img, i) => (
            <div
              key={i}
              className={`tc-gallery-item ${img.size === 'tall' ? 'tc-item-tall' : ''} ${img.size === 'wide' ? 'tc-item-wide' : ''}`}
              onClick={() => setLbIdx(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="tc-gallery-overlay">
                <i className="fa-solid fa-expand" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lbImg && (
        <div className="gl-lightbox" onClick={(e) => e.target === e.currentTarget && setLbIdx(null)}>
          <button className="gl-close" onClick={() => setLbIdx(null)}>✕</button>
          <button className="gl-nav" style={{ left: '40px' }} onClick={() => setLbIdx((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length)}>←</button>
          <div className="gl-panel">
            <img className="gl-img" src={lbImg.src} alt="View" />
            <div style={{ color: '#ffcc00', fontWeight: 900, marginTop: '25px', fontSize: '1.2rem' }}>SPORTS CLUB ARCHIVES</div>
          </div>
          <button className="gl-nav" style={{ right: '40px' }} onClick={() => setLbIdx((i) => (i + 1) % visiblePhotos.length)}>→</button>
        </div>
      )}
    </div>
  );
}