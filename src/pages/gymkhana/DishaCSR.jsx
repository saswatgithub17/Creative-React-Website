import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────────────────────────── */
const TEAM = [
  { name: 'Sana Rao', batch: '2023', domain: 'HR' },
  { name: 'Saswat Patra', batch: '2023', domain: 'HR' },
  { name: 'Puja Kumari', batch: '2023', domain: 'HR' },
  { name: 'Santosh Sahu', batch: '2023', domain: 'HR' },
  { name: 'Sneha Kumari', batch: '2023', domain: 'HR' },
  { name: 'Chiranjib Pattanaik', batch: '2023', domain: 'HR' },
  { name: 'Supriya Mohanty', batch: '2023', domain: 'HR' },
  { name: 'Shankar Sahu', batch: '2023', domain: 'Marketing' },
  { name: 'Jitendra Karan Sahu', batch: '2023', domain: 'Marketing' },
  { name: 'Surendra Sahu', batch: '2023', domain: 'Marketing' },
  { name: 'Priyanka Sahu', batch: '2023', domain: 'Marketing' },
  { name: 'Priyadarshani Sahoo', batch: '2023', domain: 'Human Resource' },
  { name: 'Ipsita Samal', batch: '2023', domain: 'Human Resource' },
  { name: 'Manasmita Dehury', batch: '2023', domain: 'Human Resource' },
  { name: 'Lipsarani Das', batch: '2023', domain: 'Human Resource' },
  { name: 'Binit Kumar Sahu', batch: '2023', domain: 'Human Resource' },
  { name: 'Jiban Jyoti Jena', batch: '2023', domain: 'Human Resource' },
  { name: 'Bikash Behera', batch: '2023', domain: 'Human Resource & Marketing' },
  { name: 'Abhijit Sahoo', batch: '2023', domain: 'Human Resource' },
  { name: 'Sunita Behera', batch: '2023', domain: 'Human Resource' },
  { name: 'Jilu Das', batch: '2023', domain: 'Human Resource' },
  { name: 'Gajendra Behera', batch: '2023', domain: 'Human Resource' },
  { name: 'Kalpana Sahoo', batch: '2023', domain: 'Human Resource' },
];

const PROJECTS = [
  { name: 'Fave Station', members: 'Sibu, Chuman, Tusar, Prangya, Pritimayee, Prajolita, M.Anatha', year: '2023' },
  { name: 'Young Valet', members: 'Amit, Nensi, Rituprana, Monali, Sushree, Kasturi, Isha, Raju, Puja', year: '2023' },
  { name: 'Milk Mistry', members: 'Alok, Abhishek, Rahul, Chidatmika, Monalisa, Punam, Khusi, Titan', year: '2023' },
  { name: 'Be Safe', members: 'Ipshita, Lipsa, Rupali, Ankush, Jahir, Priti, Subhasmita, Sradhanjali', year: '2023' },
  { name: 'Multi Complex', members: 'Abhijeet, Rahul, Saswat, Bikash, Sneha, Puja, Ipsita, Snighdha, Santosh', year: '2023' },
  { name: 'Rope Way', members: 'Karan, Sana, Chiranjib, Soubhagya, Surendra, Priyanka, Lipsa, Arpita, Kalpana', year: '2023' },
  { name: 'Aqua Bliss', members: 'Jitendra Karan Sahu, Jiban Jyoti Jena, Rahul Biswal, Sanjay Manna, Santosh Sahu', year: '2024' },
  { name: 'Farm Fresh', members: 'Biswa, Suchismita Sahu, Swosti Swamsree Behera, Jyoti Sankar Das, Parimita Minz', year: '2024' },
  { name: 'Bio Bloom (A)', members: 'Jashmin Pradhan, Swagat Kumar Behera, Nafisha Parween, Nibedita Behera', year: '2024' },
  { name: 'Bio Bloom (B)', members: 'Binit, Lipsa, Kalpana, Supriya, Saswat, Arpita, Bikash, Jilu', year: '2024' },
];

const EX_LEADERS = [
  { name: 'Abhishek Sahu', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Abhishek Sahu.jpg' },
  { name: 'Alok Kumar Sahoo', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Alok Kumar Sahoo.jpg' },
  { name: 'Chidatmika Pradhan', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Chidatmika Pradhan.jpg' },
  { name: 'Chuman Sahoo', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Chuman Sahoo.jpg' },
  { name: 'Khusi Bilas', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Khusi Bilas.jpg' },
  { name: 'M. Anata Laxmi', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/M. Anata Laxmi.jpg' },
  { name: 'Monalisha Pradhan', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Monalisha Pradhan.jpg' },
  { name: 'Nibedita Dehury', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Nibedita Dehury.jpg' },
  { name: 'Poonam Priyadarshini Panda', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Poonam priyadarshini Panda.jpg' },
  { name: 'Pradyuda Sahoo', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Pradyuda Sahoo.jpg' },
  { name: 'Prajolita Dehury', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Prajolita Dehury.jpg' },
  { name: 'Prangyaparasmita Sahu', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Prangyaparasmita Sahu.jpg' },
  { name: 'Pritimayee Biswal', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Pritimayee Biswal.jpg' },
  { name: 'Rahul Kumar Sahu', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Rahul kumar Sahu.jpg' },
  { name: 'Sibuprasad Nayak', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Sibuprasad.jpg' },
  { name: 'Titan Ku Prusty', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Titan ku Prusty.jpg' },
  { name: 'Tusar Raman Naik', img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/Tusar Raman Naik.jpg' },
];

const MAGAZINES = [
  { label: 'MAGAZINE 1', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Published by  Management Students (1).pdf' },
  { label: 'MAGAZINE 2', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha (Episode 2) .pdf' },
  { label: 'MAGAZINE 3', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/The children of today will make the India of tomorrow. 3.pdf' },
  { label: 'MAGAZINE 4', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-4.pdf' },
  { label: 'MAGAZINE 5', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha episode-5.pdf' },
  { label: 'MAGAZINE 6', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-6.pdf' },
  { label: 'MAGAZINE 7', src: '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha ep-07.pdf' },
];

const GALLERY_FILES = [
  ...Array.from({ length: 3 }, (_, i) => `/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im${[1, 2, 3][i]}.jpg`),
  '/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im5.jpg',
  ...Array.from({ length: 24 }, (_, i) => `/images/Disha & CSR/photo${i + 1}.jpg`),
];

const MASONRY_SIZES = ['normal', 'tall', 'wide', 'normal', 'normal', 'wide', 'tall', 'normal'];

const BATCH_COLORS = {
  '2023': { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  '2024': { bg: '#ecfdf5', color: '#059669', border: '#a7f3d0' },
  '2025': { bg: '#fef3c7', color: '#d97706', border: '#fde68a' },
};

const PAGE_SIZE = 12;

/* ─── PAGINATION (exact copy from Technocrat) ─────────────────────────── */
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

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────── */
export default function DishaCSR() {
  const [lbIdx, setLbIdx] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [page, setPage] = useState(1);
  const [activeBatch, setActiveBatch] = useState('all');

  // Filter and paginate team
  const filteredTeam = useMemo(
    () => (activeBatch === 'all' ? TEAM : TEAM.filter((m) => m.batch === activeBatch)),
    [activeBatch]
  );
  const totalPages = Math.ceil(filteredTeam.length / PAGE_SIZE);
  const pagedTeam = useMemo(
    () => filteredTeam.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filteredTeam, page]
  );

  const handleBatch = (b) => {
    setActiveBatch(b);
    setPage(1);
  };

  // Gallery data with masonry sizes
  const allPhotos = useMemo(
    () =>
      GALLERY_FILES.map((src, i) => ({
        src,
        size: MASONRY_SIZES[i % MASONRY_SIZES.length],
        alt: `Disha Impact Shot ${i + 1}`,
      })),
    []
  );
  const visiblePhotos = showFullGallery ? allPhotos : allPhotos.slice(0, 10);

  // Lightbox keyboard navigation
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

  // CSS (exact copy from Technocrat + custom magazine/gallery styles)
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
    .tc-leader-body { padding: 16px 18px 20px; text-align: center; }
    .tc-leader-body h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.85rem; font-weight: 800; color: #0a1628; margin: 0 0 6px; }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    /* ══ MISSION STATIC SLIDE (like slider but static) ══ */
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

    /* ══ MAGAZINE CARDS (identical to TechFest cards) ══ */
    .tc-mag-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 26px; }
    .tc-mag-card { border-radius: 20px; overflow: hidden; box-shadow: 0 6px 28px rgba(10,22,40,0.1); transition: transform 0.3s,box-shadow 0.3s; text-decoration: none; display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(10,22,40,0.06); cursor: pointer; }
    .tc-mag-card:hover { transform: translateY(-10px); box-shadow: 0 24px 60px rgba(10,22,40,0.18); }
    .tc-mag-img { position: relative; height: 185px; overflow: hidden; background: #0a1628; }
    .tc-mag-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; opacity: 0.6; }
    .tc-mag-card:hover .tc-mag-img img { transform: scale(1.08); opacity: 0.8; }
    .tc-mag-overlay-icon { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; font-size: 3rem; color: #ffcc00; text-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .tc-mag-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
    .tc-mag-body h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.1rem; font-weight: 900; color: #0a1628; margin: 0 0 7px; }
    .tc-mag-tag { background: #f5c518; color: #0c2340; padding: 4px 12px; border-radius: 12px; font-size: 0.7rem; font-weight: 900; align-self: flex-start; margin-bottom: 12px; }
    .tc-mag-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 12px; color: #2563eb; font-size: 0.78rem; font-weight: 700; font-family: 'Plus Jakarta Sans',sans-serif; }

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
    .tc-proj-wrap { padding: 72px 4%; background: #fff; border-radius: 22px; margin: 40px 0; }
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

    /* ══ GALLERY (masonry with lightbox) ══ */
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

    /* ══ LIGHTBOX (exact from original) ══ */
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

    /* ══ CTA ══ */
    .tc-cta {
      background: #0c2340; padding: 80px 5%; text-align: center; color: #fff;
      border-radius: 30px; margin: 40px 4%;
    }
    .tc-cta h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 15px; }
    .tc-cta p { color: rgba(255,255,255,0.6); max-width: 500px; margin: 0 auto 25px; }
    .tc-cta-btn {
      display: inline-block; background: #ffcc00; color: #0c2340; padding: 14px 50px;
      border-radius: 40px; font-weight: 800; text-decoration: none; transition: 0.3s;
    }
    .tc-cta-btn:hover { background: #fff; transform: translateY(-3px); }

    @media(max-width:992px) {
      .tc-mag-grid { grid-template-columns: repeat(2,1fr); }
      .tc-ex-grid { grid-template-columns: repeat(3,1fr); }
      .tc-gallery-grid { grid-template-columns: repeat(2,1fr); }
    }
    @media(max-width:600px) {
      .tc-mag-grid { grid-template-columns: 1fr; }
      .tc-ex-grid { grid-template-columns: repeat(2,1fr); }
    }
  `;

  return (
    <div className="tc-page">
      <style>{css}</style>

      {/* ════ HERO ════ */}
      <div className="tc-hero">
        <div className="tc-hero-inner">
          <div className="tc-hero-left">
            <div className="tc-hero-badge">
              <i className="fa-solid fa-hand-holding-heart" /> Gymkhana · Social Wing
            </div>
            <h1 className="tc-hero-h1">
              DISHA <em>&</em> CSR
            </h1>
            <p className="tc-hero-sub">
              Advocating for the visually impaired and serving the less fortunate. We transform college life into a mission of compassion and professional responsibility.
            </p>
            <div className="tc-hero-stats">
              {[
                { val: `${TEAM.length}+`, label: 'Active Members' },
                { val: `${PROJECTS.length}+`, label: 'Projects' },
                { val: `${MAGAZINES.length}`, label: 'Magazines' },
                { val: `${GALLERY_FILES.length}`, label: 'Impact Shots' },
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
                { dot: '#3b82f6', icon: 'fa-solid fa-eye', label: 'Visually Impaired Advocacy' },
                { dot: '#10b981', icon: 'fa-solid fa-bowl-food', label: 'Community Kitchen' },
                { dot: '#ffcc00', icon: 'fa-solid fa-book-open', label: 'Magazine Publications' },
                { dot: '#ec4899', icon: 'fa-solid fa-hand-holding-heart', label: 'Sewa Projects' },
                { dot: '#00d4ff', icon: 'fa-solid fa-children', label: 'Child Welfare' },
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
        {/* ════ LEADERSHIP ════ */}
        <div className="tc-leaders-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-users" /> Our Leadership</div>
            <h2>Club Incharge & <span>Secretaries</span></h2>
          </div>
          <div className="tc-leaders-grid">
            {[
              {
                role: 'Club Incharge',
                name: 'Mr. Subhrajyoti Behera',
                img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg',
                tag: 'Faculty Lead'
              },
              {
                role: 'Secretary (Boy)',
                name: 'Mr. Abinash Behera', // Updated Name
                img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_boy.jpg',
                tag: 'Student Rep'
              },
              {
                role: 'Secretary (Girl)',
                name: 'Ms. Sana Rao', // Updated Name
                img: '/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_girl.jpg',
                tag: 'Student Rep'
              },
            ].map((l, i) => (
              <div key={i} className="tc-leader-card">
                <div className="tc-leader-img"><img src={l.img} alt={l.role} /></div>
                <div className="tc-leader-body">
                  <h4>{l.role}</h4>

                  {/* ─── ADD THIS NAME BLOCK ─── */}
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

        {/* ════ MISSION (static card like slider) ════ */}
        <div className="tc-mission-static">
          <div className="tc-mission-card">
            <img src="/CTC NEW REACT WEBSITE/images/Disha & CSR/d1.jpg" alt="Mission" className="tc-mission-img" />
            <div className="tc-mission-overlay">
              <h3>Objective of Disha & CSR</h3>
              <p>
                Team Disha is a dedicated collective focused on making a sustainable impact on the lives of the less fortunate, with a specialized focus on the visually impaired community. Our mission is anchored in the spirit of "Sewa"—selfless service.
              </p>
            </div>
          </div>
        </div>

        {/* ════ MAGAZINES ════ */}
        <div className="tc-techfest-wrap" style={{ background: '#fff', borderRadius: 22, margin: '40px 0' }}>
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-book-open" /> Publications</div>
            <h2>Published <span>Magazines</span></h2>
            <p>Episodes of Disha magazine capturing our journey and impact.</p>
          </div>
          <div className="tc-mag-grid">
            {MAGAZINES.map((mag, i) => (
              <div
                key={i}
                className="tc-mag-card"
                onClick={() => window.open(mag.src, '_blank')}
              >
                <div className="tc-mag-img">
                  <img src={`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/photo${(i % 5) + 1}.jpg`} alt="preview" />
                  <div className="tc-mag-overlay-icon">
                    <i className="fa-solid fa-file-pdf" />
                  </div>
                </div>
                <div className="tc-mag-body">
                  <h3>{mag.label}</h3>
                  <span className="tc-mag-tag">EPISODE {i + 1}</span>
                  <span className="tc-mag-link">
                    VIEW PDF <i className="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════ TEAM DIRECTORY ════ */}
        <div className="tc-team-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-hand-holding-heart" /> Our Team</div>
            <h2>Active <span>Changemakers</span></h2>
            <p>{TEAM.length} dedicated members working towards social impact.</p>
          </div>

          {/* Batch filter – only 2023 exists, but we keep the mechanism */}
          <div className="tc-filter-bar">
            {['all', '2023', '2024', '2025'].map((b) => {
              // hide batches with no members
              const count = b === 'all' ? TEAM.length : TEAM.filter((m) => m.batch === b).length;
              if (count === 0 && b !== 'all') return null;
              return (
                <button
                  key={b}
                  className={`tc-filter-btn${activeBatch === b ? ' active' : ''}`}
                  onClick={() => handleBatch(b)}
                >
                  {b === 'all' ? 'All Batches' : `Batch ${b}`}
                </button>
              );
            })}
          </div>

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
                {pagedTeam.map((m, i) => {
                  const bc = BATCH_COLORS[m.batch] || BATCH_COLORS['2023'];
                  return (
                    <tr key={i}>
                      <td style={{ color: '#94a3b8', fontWeight: 700 }}>
                        {(page - 1) * PAGE_SIZE + i + 1}
                      </td>
                      <td style={{ fontWeight: 700 }}>{m.name}</td>
                      <td>
                        <span
                          className="tc-batch-pill"
                          style={{ background: bc.bg, color: bc.color, border: `1px solid ${bc.border}` }}
                        >
                          {m.batch}
                        </span>
                      </td>
                      <td>
                        <span className="tc-domain-label">{m.domain}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            total={filteredTeam.length}
            label="members"
            onPage={setPage}
          />
        </div>

        {/* ════ PROJECTS ════ */}
        <div className="tc-proj-wrap">
          <div className="tc-section-head">
            <div className="tc-pill-tag"><i className="fa-solid fa-diagram-project" /> Impact</div>
            <h2>Social <span>Case Studies</span></h2>
            <p>Community projects executed by Team Disha & CSR.</p>
          </div>
          <div className="tc-proj-inner">
            {PROJECTS.map((p, i) => (
              <div key={i} className="tc-proj-row">
                <div className="tc-proj-num">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1 }}>
                  <div className="tc-proj-name">{p.name}</div>
                  <div className="tc-proj-sub">
                    <i className="fa-solid fa-users" style={{ fontSize: '0.6rem', marginRight: 4 }} />
                    {p.members}
                  </div>
                </div>
                <div className="tc-proj-date">
                  <i className="fa-regular fa-calendar" style={{ marginRight: 5 }} />
                  {p.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> {/* /tc-main */}

      {/* ════ GALLERY (full‑bleed dark) ════ */}
      <div className="tc-gallery-wrap">
        <div className="tc-section-head">
          <div
            className="tc-pill-tag"
            style={{ background: 'rgba(255,204,0,0.15)', color: '#ffcc00', border: '1px solid rgba(255,204,0,0.3)' }}
          >
            <i className="fa-solid fa-images" /> Gallery
          </div>
          <h2 style={{ color: '#fff' }}>Visual <span style={{ color: '#ffcc00' }}>Highlights</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)' }}>Captured moments of community outreach and selfless service.</p>
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

      {/* ════ EX‑LEADERS ════ */}
      <div className="tc-ex-wrap">
        <div className="tc-section-head">
          <div
            className="tc-pill-tag"
            style={{ background: 'rgba(255,204,0,0.15)', color: '#ffcc00', border: '1px solid rgba(255,204,0,0.3)' }}
          >
            Legacy
          </div>
          <h2 style={{ color: '#fff' }}>Compassionate <span style={{ color: '#ffcc00' }}>Alumni</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)' }}>Former leaders who carried the torch of service.</p>
        </div>
        <div className="tc-ex-grid">
          {EX_LEADERS.map((l, i) => (
            <div key={i} className="tc-ex-card">
              <div className="tc-ex-img">
                <img src={l.img} alt={l.name} />
              </div>
              <p className="tc-ex-name">{l.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ════ LIGHTBOX ════ */}
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
              DISHA & CSR ARCHIVES
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