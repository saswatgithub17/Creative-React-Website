import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─── Mission Data ─── */
const missionData = {
  'MISSION 1': ['MONALISA BEHERA','YASHITA SAHU','SUPRIYA MOHANTY','ELIN PATTANAYAK','DEBIPRASAD PRADHAN','DURGA PRASAD BEHERA','SASWAT PATRA','SUBHASMITA BEHERA','SIBASISH MISHRA','PRIYANSHU MOHARANA','BIDUSMITA MISHRA','JASMIN SAMAL','BINIT KUMAR SAHU','JILU DAS','SUDIPTA SURANJITA SAHOO','LIPA SAHU','IPSITA PATTANAIK','PRIYANKA BISWAL','RUDRA PRASAD SAHU','ALIVA DIPSIKHA GARNAIK','ABHISEK NANDA','SWASTIKA SAHU','LAXMIPRIYA NAYAK','AMIT SAHOO','KALPANA SAHOO','RATNAPRAVA DHAR','SRITAM BEHERA','PUJA KUMARI','SWAPNARANI DHAR','ALISHA DAS','SANA RAO','MANASMITA DEHURY','SURENDRA SAHU','ARPITA MALIK','SASWAT SUMAN DWIBEDY','SUBHAM BISWAL','CHINMAYEE P PRADHAN','MOMITA MISHRA','SANJIB SAHOO','V. VIBEK MUSKAN'],
  'MISSION 2': ['SASWAT SUMAN DWIBEDY','DEBIPRASAD PRADHAN','LIPA SAHU','ABANTI DEHURY','RATNAPRAVA DHAR','JITENDRA KARAN SAHU','DURGA PRASAD BEHERA','PRIYANSHU SAHU','BIDUSMITA MISHRA','RITISHNA MOHANTY','SUBHASMITA BEHERA','SIBASISH MISHRA','PAYAL PRADHAN','YASHITA SAHU','PRASNAJIT DEHURY','SHANKARA SAHU','CHINMAYEE PRIYADARSHINI','SNEHA SAHOO','RUDRAPRASAD SAHU C','JAYANTA SAHU','STHITA PRANGYA SAHOO','STHITIPRAJNA BEHERA','ANSHUMAN PRADHAN','SOMESH PRADHAN','AMARENDRA SAHOO','SWASTIKA NAYAK','SATYAJIT SAHOO','ABHISEK NANDA','RUDRAPRASAD SAHU A','SHASWAT PATRA','KALPANA SAHOO','PRABINA SAHOO','SUBHASMITA SAHOO','SRITAM BEHERA','MONALISA BEHERA','SRUTI SONALI BARAH','RUDRAPRASAD SAHU B','KANHA CHARAN PRADAHAN','ALISHA DAS','MANASMITA DEHURY'],
  'MISSION 3': ['DEBIPRASAD PRADHAN','YASHITA SAHU','SUDIPTA SURANJITA SAHOO','SIBASISH MISHRA','SUBHASMITA BEHERA','SASMITA DAS','DURGA PRASAD BEHERA','KANHA CHARAN PRADAHAN','ALIVA DIPSIKHA GARNAIK','ALISHA DAS','SUPRIYA MOHANTY','BIDUSMITA MISHRA','SNEHA KUMARI SINGH','PRIYANSHU BISWAL','DIBYANI DIBYASMITA','PRACHI PARASMITA PRADHAN','MOMITA MISHRA','SWASTIKA SAHU','RUDRAPRASAD SAHU B','SUBHAM BISWAL','PUJA KUMARI','SANJIB SAHOO','PRIYANSHU MOHARANA','ARPITA MALIK','CHINMAYEE PRIYADARSHINI','LIPA SAHU','SRITAM BEHERA','GAJENDRA BEHERA','MADHUMAY SAHU','SANA RAO','KALPANA SAHOO','ELIN PATTANAYAK','SUBHAM NANDA','SUSHREE LIKHA PRADHAN','SUBRAT KUMAR SAHOO','SUBHASHREE BEHERA','SWAPNARANI DHAR','SUBHASMITA PRADHAN','RATNAPRAVA SAHOO','IPSITA PATTANAIK'],
  'MISSION 4': ['SHANKARA SAHU','LAXMIPRIYA NAYAK','SUDIPTA SURANJITA SAHOO','DEBIPRASAD PRADHAN','JITENDRA KARAN SAHU','KALPANA SAHOO','MANASMITA DEHURY','PUJA KUMARI','SASWAT SUMAN DWIBEDY','RATNAPRAVA SAHOO','KANHA CHARAN PRADAHAN','PRIYANSHU SAHU','SUBHAM BISWAL','DURGA PRASAD BEHERA','PRACHI PARASMITA PRADHAN','JASMIN SAMAL','SNEHA KUMARI SINGH','ALIVA DIPSIKHA GARNAIK','LIPA SAHU','RUDRAPRASAD SAHU A','CHINMAYEE PRIYADARSHINI','MOMITA MISHRA','ARPITA MALIK','AMARENDRA SAHOO','RITISHNA MOHANTY','DIBYANI DIBYASMITA','SUBHASMITA PRADHAN','AISHA DEHURY','SASMITA DAS','ELIN PATTANAYAK','ALISHA DAS','RUDRAPRASAD SAHU C','ABHISEK NANDA','SWAPNARANI DHAR','STHITA PRANGYA SAHOO','SAMBIT PRADHAN','SUPRIYA MOHANTY','SUBHASMITA SAHOO','STHITIPRAJNA BEHERA','JILU DAS'],
  'MISSION 5': ['SASWAT SUMAN DWIBEDY','CHIRANJIB PATTANAIK','KANHA CHARAN PRADAHAN','SHANKARA SAHU','DEBIPRASAD PRADHAN','RUDRAPRASAD SAHU B','ALIVA DIPSIKHA GARNAIK','IPSITA PATTANAIK','LAXMIPRIYA NAYAK','SWASTIKA SAHU','CHINMAYEE PRIYADARSHINI','SRITAM BEHERA','MOMITA MISHRA','SUBHASMITA BEHERA','LIPA SAHU','ABHISEK NANDA','BIDUSMITA MISHRA','SIBASISH MISHRA','MADHUMAY SAHU','JAYANTA SAHU','DURGA PRASAD BEHERA','SOMESH PRADHAN','JILU DAS','SUBHAM BISWAL','ALISHA DAS','PRACHI PARASMITA PRADHAN','V VIBEK MUSKAN','SASMITA DAS','RUDRAPRASAD SAHU A','SASMITA SAHOO','ARPITA MALIK','AMIT SAHOO','SUDIPTA SURANJITA SAHOO','YASHITA SAHU','SANA RAO','PRIYANKA BISWAL','PRIYANSHU MOHARANA','SANJIB SAHOO','RATNAPRAVA DHAR','JITENDRA KARAN SAHU'],
  'MISSION 6': ['SHANKARA SAHU','SANGITA PRIYADARSHANI','YASHITA SAHU','SASWAT SUMAN DWIBEDY','SUBHASMITA BEHERA','DEBIPRASAD PRADHAN','SWAGATIKA SAHOO','KANHA CHARAN PRADAHAN','JITENDRA KARAN SAHU','LIPA SAHU','SRITAM BEHERA','RUDRAPRASAD SAHU B','RUDRAPRASAD SAHU A','ABHIJIT SAHOO','MADHUMAY SAHU','BIDUSMITA MISHRA','ARPITA MALIK','DIBYANI DIBYASMITA','MOMITA MISHRA','IPSITA PATTANAIK','SWASTIKA SAHU','JASMIN SAMAL','ELIN PATTANAYAK','LAXMIPRIYA NAYAK','SASMITA DAS','SUDHANSHU','RATNAPRAVA DHAR','CHINMAYEE PRIYADARSHINI','PRACHI PARASMITA PRADHAN','PRIYANSHU MOHARANA','AMIT SAHOO','PRIYADARSHINI BEHERA','SUBHASHREE BEHERA','RUDRAPRASAD SAHU C','ALIVA DIPSIKHA GARNAIK','DURGA PRASAD BEHERA','AUROBINDO NAYAK','BINIT KUMAR SAHU','V VIBEK MUSKAN','SURENDRA SAHU'],
};

const top14 = [
  { rank: 1, name: 'LIPA SAHU', frequency: 6 },
  { rank: 2, name: 'DURGA PRASAD BEHERA', frequency: 6 },
  { rank: 3, name: 'DEBIPRASAD PRADHAN', frequency: 6 },
  { rank: 4, name: 'KANHA CHARAN PRADAHAN', frequency: 5 },
  { rank: 5, name: 'SASWAT SUMAN DWIBEDY', frequency: 5 },
  { rank: 6, name: 'SHANKARA SAHU', frequency: 4 },
  { rank: 7, name: 'SUBHASMITA BEHERA', frequency: 4 },
  { rank: 8, name: 'YASHITA SAHU', frequency: 4 },
  { rank: 9, name: 'SIBASISH MISHRA', frequency: 4 },
  { rank: 10, name: 'BIDUSMITA MISHRA', frequency: 4 },
  { rank: 11, name: 'SUDIPTA SURANJITA SAHOO', frequency: 4 },
  { rank: 12, name: 'ALIVA DIPSIKHA GARNAIK', frequency: 4 },
  { rank: 13, name: 'IPSITA PATTANAIK', frequency: 4 },
  { rank: 14, name: 'JITENDRA KARAN SAHU', frequency: 4 },
];

const OBJECTIVES = [
  { icon: '🎓', title: 'Bridge the Skill Gap', desc: 'Connect classroom knowledge with real corporate expectations through focused training and assessment.' },
  { icon: '🧠', title: 'Develop Key Skills', desc: 'Improve aptitude, reasoning, technical knowledge, English communication, and interview handling.' },
  { icon: '📈', title: 'Track Performance', desc: 'Measure consistency across multiple missions and identify high-potential students using real results.' },
  { icon: '🏢', title: 'Placement Readiness', desc: 'Prepare candidates for companies like TCS, Wipro, Accenture, Cognizant, Infosys, and Tech Mahindra.' },
];

const PHASES = [
  { num: 1, title: 'Assessment & Selection', desc: 'Students are evaluated through aptitude, English, technical skills, and personality-based screening. The top 40 are shortlisted for the program.' },
  { num: 2, title: 'Team Formation', desc: 'The selected students are divided into groups such as Mission 40 A, B, C, and D, each guided by faculty mentors for continuous tracking.' },
  { num: 3, title: 'Structured Training', desc: 'The 10-week plan includes aptitude, technical practice, GD-PI training, mock interviews, profile building, and company-specific preparation.' },
];

const ROADMAP = [
  { week: 'Week 1', title: 'Orientation', desc: 'Program introduction, expectations, and goal setting.' },
  { week: 'Week 2–3', title: 'Aptitude Mastery', desc: 'Reasoning, quantitative aptitude, and logical problem solving.' },
  { week: 'Week 4–5', title: 'Technical Grooming', desc: 'Stream-wise technical strengthening and practice sessions.' },
  { week: 'Week 6–7', title: 'Communication & Profile', desc: 'GD, spoken communication, resume, LinkedIn, and email etiquette.' },
  { week: 'Week 8–10', title: 'Company Prep & Mock', desc: 'Company-specific modules, mock interviews, and final revision drills.' },
];

const OUTCOMES = [
  { title: 'Industry-Ready Students', desc: 'Students become better prepared for aptitude rounds, technical interviews, and HR interaction.' },
  { title: 'Better Placement Results', desc: 'Improved shortlisting and stronger recruitment performance in top companies.' },
  { title: 'Stronger Professional Profiles', desc: 'Enhanced resumes, LinkedIn presence, communication style, and corporate behavior.' },
  { title: 'Benchmark Academic Initiative', desc: 'A repeatable model that can inspire future batches and strengthen the placement cell\'s reputation.' },
];

const GALLERY_IMAGES = [
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img1.jpeg', alt: 'Mission 40 - Session 1' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img2.jpeg', alt: 'Mission 40 - Session 2' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img3.jpeg', alt: 'Mission 40 - Session 3' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img4.jpeg', alt: 'Mission 40 - Session 4' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img5.jpeg', alt: 'Mission 40 - Session 5' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img6.jpeg', alt: 'Mission 40 - Session 6' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img7.jpeg', alt: 'Mission 40 - Session 7' },
  { src: '/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img8.jpeg', alt: 'Mission 40 - Session 8' },
];

function consistencyStatus(freq) {
  if (freq >= 6) return 'Excellent';
  if (freq === 5) return 'Very Strong';
  return 'Strong';
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv-in'); }),
      { threshold: 0.05 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Badge pill ─── */
function Badge({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'rgba(12,35,64,0.06)', border: '1px solid rgba(12,35,64,0.11)',
      color: '#0c2340', fontSize: '0.67rem', fontWeight: 800,
      padding: '5px 14px', borderRadius: 30, letterSpacing: '2px',
      textTransform: 'uppercase', marginBottom: 12,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffcc00', display: 'inline-block' }} />
      {children}
    </span>
  );
}

/* ─── Section Heading ─── */
function SectionHeading({ badge, title, highlight, sub }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      {badge && <Badge>{badge}</Badge>}
      <h2 style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)',
        fontWeight: 800, color: '#0c2340',
        letterSpacing: '-0.8px', margin: '0 0 14px', lineHeight: 1.15,
      }}>
        {title} {highlight && <span style={{ color: '#1a4080' }}>{highlight}</span>}
      </h2>
      {sub && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.92rem', color: '#64748b',
          fontWeight: 400, maxWidth: 560, margin: '0 auto', lineHeight: 1.8,
        }}>{sub}</p>
      )}
    </div>
  );
}

/* ─── Mission Results Table ─── */
function MissionResultsTable() {
  const missions = Object.keys(missionData);
  const [currentMission, setCurrentMission] = useState(missions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const rows = missionData[currentMission] || [];
  const totalPages = Math.ceil(rows.length / perPage);
  const start = (currentPage - 1) * perPage;
  const pageRows = rows.slice(start, start + perPage);

  const handleMissionChange = (m) => { setCurrentMission(m); setCurrentPage(1); };

  return (
    <div style={{
      background: '#fff',
      border: '1.5px solid rgba(12,35,64,0.09)',
      borderRadius: 20, overflow: 'hidden',
      boxShadow: '0 6px 32px rgba(12,35,64,0.09)',
    }}>
      {/* Header */}
      <div style={{
        padding: '22px 24px 18px',
        borderBottom: '1px solid rgba(12,35,64,0.07)',
        background: '#fafcff',
      }}>
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '0.92rem', color: '#0c2340', margin: '0 0 3px' }}>
            Mission-wise Top 40 Students
          </p>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
            {currentMission} &nbsp;·&nbsp; 40 students &nbsp;·&nbsp; Batch 2023–26
          </p>
        </div>
        {/* Mission tabs — scrollable on mobile */}
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {missions.map(m => (
            <button
              key={m}
              onClick={() => handleMissionChange(m)}
              style={{
                border: '1.5px solid',
                borderColor: currentMission === m ? 'transparent' : 'rgba(12,35,64,0.13)',
                background: currentMission === m
                  ? 'linear-gradient(135deg,#0c2340 0%,#1a4080 100%)'
                  : '#f1f5f9',
                color: currentMission === m ? '#fff' : '#475569',
                borderRadius: 10, padding: '8px 14px',
                fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '0.75rem',
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: currentMission === m ? '0 4px 14px rgba(12,35,64,0.22)' : 'none',
              }}
            >{m}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {['Sl. No.', 'Student Name', 'Mission', 'Status'].map(h => (
                <th key={h} style={{
                  padding: '12px 18px', textAlign: 'left',
                  fontFamily: "'Sora',sans-serif", fontSize: '0.68rem',
                  color: '#94a3b8', textTransform: 'uppercase',
                  letterSpacing: '0.07em', fontWeight: 700,
                  borderBottom: '1px solid rgba(12,35,64,0.07)',
                  whiteSpace: 'nowrap',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.map((name, idx) => (
              <tr
                key={idx}
                style={{ transition: 'background 0.12s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f9ff'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '13px 18px', borderBottom: '1px solid rgba(12,35,64,0.04)', fontFamily: "'DM Sans',sans-serif", color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem', width: 70 }}>
                  {start + idx + 1}
                </td>
                <td style={{ padding: '13px 18px', borderBottom: '1px solid rgba(12,35,64,0.04)', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: '#0f172a', fontSize: '0.87rem' }}>
                  {name}
                </td>
                <td style={{ padding: '13px 18px', borderBottom: '1px solid rgba(12,35,64,0.04)', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, color: '#475569', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                  {currentMission}
                </td>
                <td style={{ padding: '13px 18px', borderBottom: '1px solid rgba(12,35,64,0.04)' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '4px 12px', borderRadius: 999,
                    background: '#eef2ff', color: '#3730a3',
                    fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '0.7rem',
                    whiteSpace: 'nowrap',
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
                    Top 40 Selected
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12, padding: '16px 24px 20px',
        borderTop: '1px solid rgba(12,35,64,0.06)', background: '#fafcff',
      }}>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.8rem', color: '#94a3b8' }}>
          Showing {start + 1}–{Math.min(start + perPage, rows.length)} of {rows.length}
        </span>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}
            style={{ width: 34, height: 34, borderRadius: 8, border: '1.5px solid rgba(12,35,64,0.12)', background: '#fff', fontWeight: 700, cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.35 : 1, fontFamily: "'Sora',sans-serif", fontSize: '0.9rem', color: '#0c2340' }}
          >‹</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p} onClick={() => setCurrentPage(p)}
              style={{
                width: 34, height: 34, borderRadius: 8,
                border: '1.5px solid',
                borderColor: p === currentPage ? '#0c2340' : 'rgba(12,35,64,0.12)',
                background: p === currentPage ? '#0c2340' : '#fff',
                color: p === currentPage ? '#fff' : '#0c2340',
                fontWeight: 700, cursor: 'pointer',
                fontFamily: "'Sora',sans-serif", fontSize: '0.82rem',
                transition: 'all 0.15s',
              }}
            >{p}</button>
          ))}
          <button
            onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}
            style={{ width: 34, height: 34, borderRadius: 8, border: '1.5px solid rgba(12,35,64,0.12)', background: '#fff', fontWeight: 700, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.35 : 1, fontFamily: "'Sora',sans-serif", fontSize: '0.9rem', color: '#0c2340' }}
          >›</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Gallery Card ─── */
function GalleryCard({ img, idx }) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  return (
    <div
      className="rv"
      style={{
        borderRadius: 14, overflow: 'hidden',
        background: '#1a3a6b',
        boxShadow: hovered ? '0 16px 44px rgba(12,35,64,0.28)' : '0 3px 14px rgba(12,35,64,0.1)',
        transform: hovered ? 'translateY(-6px) scale(1.018)' : 'none',
        transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
        transitionDelay: `${(idx % 4) * 0.06}s`,
        cursor: 'pointer', aspectRatio: '4/3', position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {errored ? (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#0c2340,#1a3a6b)', color: 'rgba(255,255,255,0.4)', gap: 8 }}>
          <span style={{ fontSize: '2rem' }}>📸</span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.72rem', fontWeight: 600 }}>Photo {idx + 1}</span>
        </div>
      ) : (
        <>
          {!loaded && (
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#0c2340,#1a3a6b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', border: '3px solid rgba(255,204,0,0.25)', borderTopColor: '#ffcc00', animation: 'spin 0.8s linear infinite' }} />
            </div>
          )}
          <img src={img.src} alt={img.alt} onLoad={() => setLoaded(true)} onError={() => setErrored(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.42s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)', display: loaded ? 'block' : 'none' }} />
        </>
      )}
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'linear-gradient(to top,rgba(12,35,64,0.6) 0%,transparent 55%)' : 'linear-gradient(to top,rgba(12,35,64,0.15) 0%,transparent 55%)', transition: 'background 0.32s' }} />
      {hovered && (
        <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: '0.78rem', color: '#fff', margin: 0 }}>{img.alt}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main Component ─── */
export default function Mission40() {
  useReveal();

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes heroFadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
    @keyframes pulseGold { 0%,100%{opacity:0.6;} 50%{opacity:1;} }

    .rv { opacity:0; transform:translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .rv-in { opacity:1; transform:none; }

    .m40 {
      background: #f0f4f8;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── HERO ── */
    .m40-hero {
      background: linear-gradient(160deg, #020d1e 0%, #0c2340 45%, #0d2a4e 75%, #030e20 100%);
      position: relative;
      overflow: hidden;
      padding: 88px 0 0;
    }
    .m40-hero__orb {
      position: absolute; border-radius: 50%; pointer-events: none;
    }
    .m40-hero__orb--1 {
      top: -100px; right: -60px; width: 360px; height: 360px;
      background: radial-gradient(circle, rgba(255,204,0,0.10) 0%, transparent 65%);
    }
    .m40-hero__orb--2 {
      bottom: -80px; left: -40px; width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(44,103,242,0.12) 0%, transparent 65%);
    }
    .m40-hero__orb--3 {
      top: 30%; right: 20%; width: 180px; height: 180px;
      background: radial-gradient(circle, rgba(255,204,0,0.05) 0%, transparent 65%);
    }
    .m40-hero__inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 5% 64px;
      position: relative; z-index: 2;
      animation: heroFadeUp 0.8s ease both;
    }
    .m40-hero__eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.09); border: 1px solid rgba(255,204,0,0.25);
      color: #ffcc00; font-size: 0.65rem; font-weight: 700;
      padding: 6px 14px; border-radius: 30px;
      letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 22px;
    }
    .m40-hero__eyebrow-dot {
      width: 6px; height: 6px; border-radius: 50%; background: #ffcc00;
      animation: pulseGold 1.6s ease infinite;
    }
    .m40-hero__h1 {
      font-family: 'Sora', sans-serif;
      font-size: clamp(2.4rem, 5.5vw, 4rem);
      font-weight: 800; color: #fff;
      line-height: 1.05; letter-spacing: -1.5px;
      margin-bottom: 18px;
    }
    .m40-hero__h1 em { font-style: normal; color: #ffcc00; }
    .m40-hero__sub {
      color: rgba(255,255,255,0.42);
      font-size: clamp(0.85rem, 1.5vw, 0.97rem);
      line-height: 1.85; max-width: 540px; margin-bottom: 36px;
    }
    .m40-hero__sub strong { color: rgba(255,255,255,0.7); font-weight: 600; }

    /* ── HERO STATS ── */
    .m40-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      max-width: 640px;
    }
    .m40-stat {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px; padding: 18px 16px;
      text-align: center; backdrop-filter: blur(6px);
    }
    .m40-stat__val {
      font-family: 'Sora', sans-serif;
      font-size: clamp(1.6rem, 3vw, 2.1rem);
      font-weight: 800; color: #ffcc00; line-height: 1;
    }
    .m40-stat__lbl {
      font-size: 0.62rem; color: rgba(255,255,255,0.38);
      font-weight: 600; margin-top: 5px;
      text-transform: uppercase; letter-spacing: 0.4px;
      line-height: 1.45;
    }

    /* ── WAVE ── */
    .m40-wave { height: 56px; margin-top: -1px; }
    .m40-wave svg { width: 100%; height: 100%; display: block; }

    /* ── SECTIONS ── */
    .m40-sec {
      padding: 80px 5%;
    }
    .m40-sec--alt { background: #fff; }
    .m40-inner { max-width: 1200px; margin: 0 auto; }

    /* ── ABOUT CARDS ── */
    .m40-about-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
    }
    .m40-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.08);
      border-radius: 20px; padding: 28px 26px;
      box-shadow: 0 4px 20px rgba(12,35,64,0.07);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 36px rgba(12,35,64,0.12);
    }
    .m40-card__head {
      display: flex; align-items: center; gap: 10px;
      margin-bottom: 20px;
    }
    .m40-card__icon {
      width: 36px; height: 36px; border-radius: 10px;
      background: linear-gradient(135deg,#0c2340,#1a4080);
      display: flex; align-items: center; justify-content: center;
      color: #ffcc00; font-size: 0.85rem; flex-shrink: 0;
    }
    .m40-card__title {
      font-family: 'Sora', sans-serif;
      font-weight: 800; font-size: 0.9rem; color: #0c2340;
    }

    /* ── OBJECTIVES ── */
    .m40-obj-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }
    .m40-obj-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 20px; padding: 24px 20px;
      box-shadow: 0 3px 14px rgba(12,35,64,0.06);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-obj-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 36px rgba(12,35,64,0.13);
    }
    .m40-obj-icon {
      width: 50px; height: 50px; border-radius: 14px;
      background: linear-gradient(135deg,#dbeafe,#eef2ff);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem; margin-bottom: 14px;
    }
    .m40-obj-title {
      font-family: 'Sora', sans-serif;
      font-weight: 800; font-size: 0.9rem; color: #0c2340; margin-bottom: 8px;
    }
    .m40-obj-desc {
      font-size: 0.79rem; color: #64748b; line-height: 1.7;
    }

    /* ── PHASES ── */
    .m40-phase-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .m40-phase-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 20px; padding: 28px 24px;
      box-shadow: 0 3px 16px rgba(12,35,64,0.07);
      transition: transform 0.28s, box-shadow 0.28s;
    }
    .m40-phase-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 14px 42px rgba(12,35,64,0.13);
    }
    .m40-phase-num {
      width: 42px; height: 42px; border-radius: 13px;
      background: linear-gradient(135deg,#0c2340,#1a4080);
      color: #ffcc00; display: flex; align-items: center; justify-content: center;
      font-family: 'Sora', sans-serif; font-weight: 800; font-size: 1.05rem;
      margin-bottom: 16px;
    }

    /* ── ROADMAP ── */
    .m40-roadmap {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
    }
    .m40-road-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 18px; padding: 22px 18px;
      box-shadow: 0 3px 14px rgba(12,35,64,0.06);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-road-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 32px rgba(12,35,64,0.12);
    }
    .m40-week-badge {
      display: inline-block; padding: 4px 10px; border-radius: 999px;
      background: #e0f2fe; color: #0369a1;
      font-size: 0.71rem; font-weight: 700;
      font-family: 'Sora', sans-serif;
      margin-bottom: 10px;
    }

    /* ── OUTCOMES ── */
    .m40-outcomes-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }
    .m40-outcome-card {
      display: flex; gap: 13px; align-items: flex-start;
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 20px; padding: 22px 20px;
      box-shadow: 0 3px 14px rgba(12,35,64,0.06);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-outcome-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(12,35,64,0.12);
    }
    .m40-check {
      width: 34px; height: 34px; border-radius: 11px;
      background: #dcfce7; color: #16a34a;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; flex-shrink: 0; font-size: 0.9rem;
    }

    /* ── GALLERY ── */
    .m40-gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    /* ── CONSISTENCY LAYOUT ── */
    .m40-consistency-grid {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 24px;
      align-items: start;
    }

    /* ── RANK CHIPS ── */
    .rank-gold   { background: linear-gradient(135deg,#fff3c4,#ffd86b); }
    .rank-silver { background: linear-gradient(135deg,#f1f5f9,#dbe4f2); }
    .rank-bronze { background: linear-gradient(135deg,#ffe5d2,#f6b17a); }

    /* ── FOOTER CTA ── */
    .m40-footer-cta {
      background: linear-gradient(160deg,#020d1e 0%,#0c2340 50%,#030e20 100%);
      padding: 64px 5%;
      text-align: center;
    }

    /* ── SHARED TEXT ── */
    .h3 {
      font-family: 'Sora', sans-serif;
      font-weight: 800; font-size: 0.96rem; color: #0c2340;
      margin: 0 0 9px;
    }
    .body-sm { font-size: 0.82rem; color: #64748b; line-height: 1.75; margin: 0; }
    .body-xs { font-size: 0.79rem; color: #64748b; line-height: 1.7; margin: 0; }

    /* ── DETAIL LIST ── */
    .m40-detail-list { list-style: none; }
    .m40-detail-list li {
      display: flex; gap: 12px;
      padding-bottom: 11px; margin-bottom: 11px;
      border-bottom: 1px solid rgba(12,35,64,0.05);
      font-size: 0.84rem; line-height: 1.6;
    }
    .m40-detail-list li:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .m40-detail-list .lbl {
      font-family: 'Sora', sans-serif;
      font-weight: 700; color: #0c2340; min-width: 128px; flex-shrink: 0;
    }
    .m40-detail-list .val { color: #334155; font-weight: 500; }

    /* ── WHY LIST ── */
    .m40-why-list { list-style: none; }
    .m40-why-list li {
      display: flex; gap: 10px; align-items: flex-start;
      margin-bottom: 13px; font-size: 0.84rem; color: #334155; line-height: 1.65;
    }
    .m40-why-check {
      width: 20px; height: 20px; border-radius: 7px;
      background: linear-gradient(135deg,#dcfce7,#bbf7d0);
      color: #16a34a; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; font-weight: 900; font-size: 0.6rem; margin-top: 2px;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 1100px) {
      .m40-obj-grid { grid-template-columns: repeat(2, 1fr); }
      .m40-outcomes-grid { grid-template-columns: repeat(2, 1fr); }
      .m40-roadmap { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 900px) {
      .m40-stats { grid-template-columns: repeat(2, 1fr); max-width: 380px; }
      .m40-about-grid { grid-template-columns: 1fr; }
      .m40-phase-grid { grid-template-columns: 1fr; }
      .m40-consistency-grid { grid-template-columns: 1fr; }
      .m40-gallery-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      .m40-sec { padding: 60px 4%; }
      .m40-hero__inner { padding: 0 4% 52px; }
      .m40-obj-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
      .m40-outcomes-grid { grid-template-columns: 1fr; }
      .m40-roadmap { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .m40-stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .m40-obj-grid { grid-template-columns: 1fr; }
      .m40-roadmap { grid-template-columns: 1fr 1fr; }
      .m40-gallery-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="m40">

        {/* ── HERO ── */}
        <div className="m40-hero">
          <div className="m40-hero__orb m40-hero__orb--1" />
          <div className="m40-hero__orb m40-hero__orb--2" />
          <div className="m40-hero__orb m40-hero__orb--3" />
          <div className="m40-hero__inner">
            <div className="m40-hero__eyebrow">
              <span className="m40-hero__eyebrow-dot" />
              Placement Excellence Initiative
            </div>
            <h1 className="m40-hero__h1">
              <em>Mission 40</em><br />Placement Power
            </h1>
            <p className="m40-hero__sub">
              A structured training and placement readiness initiative by{' '}
              <strong>Creative Techno College, Angul</strong> designed to identify, mentor, and prepare
              high-potential students from the <strong>2023–26 batch</strong> for success in corporate recruitment.
            </p>
            <div className="m40-stats">
              {[
                { val: '6', lbl: 'Mission Exams Conducted' },
                { val: '40', lbl: 'Selected Students Per Mission' },
                { val: '14', lbl: 'Top Consistent Performers' },
                { val: '10', lbl: 'Weeks Training Roadmap' },
              ].map((s, i) => (
                <div key={i} className="m40-stat">
                  <div className="m40-stat__val">{s.val}</div>
                  <div className="m40-stat__lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="m40-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,36 C360,56 1080,0 1440,36 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* ── ABOUT ── */}
        <div className="m40-sec">
          <div className="m40-inner">
            <SectionHeading
              badge="About the Program"
              title="What is"
              highlight="Mission 40?"
              sub="Mission 40 is a focused training and mentoring initiative launched by the Training & Placement Cell to bridge the gap between academic learning and industry expectations."
            />
            <div className="m40-about-grid">
              {/* Official Details */}
              <div className="m40-card rv">
                <div className="m40-card__head">
                  <div className="m40-card__icon"><i className="fa-solid fa-circle-info" /></div>
                  <span className="m40-card__title">Official Details</span>
                </div>
                <ul className="m40-detail-list">
                  {[
                    ['Event', 'Mission 40'],
                    ['Date', '26 June 2025'],
                    ['College', 'Creative Techno College, Angul'],
                    ['Target Group', 'BCA, BBA and BSc CS students'],
                    ['Displayed Result Batch', '2023–26'],
                    ['Resource Person', 'Bhabani Sankar Sahoo, Vice Principal'],
                  ].map(([label, value]) => (
                    <li key={label}>
                      <span className="lbl">{label}:</span>
                      <span className="val">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Mission 40 */}
              <div className="m40-card rv" style={{ transitionDelay: '0.1s' }}>
                <div className="m40-card__head">
                  <div className="m40-card__icon"><i className="fa-solid fa-lightbulb" /></div>
                  <span className="m40-card__title">Why Mission 40?</span>
                </div>
                <ul className="m40-why-list">
                  {[
                    'To identify top-performing and placement-ready students early.',
                    'To improve aptitude, technical, communication, and interview skills.',
                    'To create a benchmark group with strong corporate readiness.',
                    'To build confidence, consistency, and professional discipline.',
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="m40-why-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── OBJECTIVES ── */}
        <div className="m40-sec m40-sec--alt">
          <div className="m40-inner">
            <SectionHeading
              badge="Objectives"
              title="Core"
              highlight="Objectives"
              sub="Every section of this initiative is aligned with the Mission 40 vision of grooming students for strong placement outcomes."
            />
            <div className="m40-obj-grid">
              {OBJECTIVES.map((o, i) => (
                <div key={i} className="m40-obj-card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="m40-obj-icon">{o.icon}</div>
                  <div className="m40-obj-title">{o.title}</div>
                  <p className="m40-obj-desc">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROGRAM PHASES ── */}
        <div className="m40-sec">
          <div className="m40-inner">
            <SectionHeading
              badge="Process"
              title="Program"
              highlight="Phases"
              sub="The Mission 40 model follows a structured process from selection to final grooming."
            />
            <div className="m40-phase-grid">
              {PHASES.map((ph, i) => (
                <div key={i} className="m40-phase-card rv" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="m40-phase-num">{ph.num}</div>
                  <h3 className="h3">{ph.title}</h3>
                  <p className="body-sm">{ph.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MISSION RESULTS ── */}
        <div className="m40-sec m40-sec--alt">
          <div className="m40-inner">
            <SectionHeading
              badge="Results"
              title="Mission 40"
              highlight="Exam Results"
              sub="Below are the mission-wise results for the Batch 2023–26. Each table is paginated with 10 students per page."
            />
            <div className="rv">
              <MissionResultsTable />
            </div>
          </div>
        </div>

        {/* ── TOP 14 CONSISTENT PERFORMERS ── */}
        <div className="m40-sec">
          <div className="m40-inner">
            <SectionHeading
              badge="Consistency"
              title="Top 14 Consistent"
              highlight="Performers"
              sub="These students are highlighted based on their consistency across the six Mission 40 exams."
            />
            <div className="m40-consistency-grid">
              {/* Full table */}
              <div className="rv" style={{
                background: '#fff', border: '1.5px solid rgba(12,35,64,0.08)',
                borderRadius: 20, boxShadow: '0 6px 32px rgba(12,35,64,0.09)', overflow: 'hidden',
              }}>
                <div style={{ padding: '20px 22px 14px', borderBottom: '1px solid rgba(12,35,64,0.07)', background: '#fafcff' }}>
                  <p style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#0c2340', margin: '0 0 3px' }}>Consistency Ranking</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>Frequency calculated out of 6 missions</p>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
                    <thead>
                      <tr style={{ background: '#f8fafc' }}>
                        {['Rank', 'Student Name', 'Frequency', 'Status'].map(h => (
                          <th key={h} style={{
                            padding: '11px 16px', textAlign: 'left',
                            fontFamily: "'Sora',sans-serif", fontSize: '0.67rem',
                            color: '#94a3b8', textTransform: 'uppercase',
                            letterSpacing: '0.07em', fontWeight: 700,
                            borderBottom: '1px solid rgba(12,35,64,0.07)',
                            whiteSpace: 'nowrap',
                          }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {top14.map((s) => (
                        <tr key={s.rank}
                          style={{ transition: 'background 0.12s' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#f5f9ff'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <td style={{ padding: '11px 16px', borderBottom: '1px solid rgba(12,35,64,0.04)', fontFamily: "'Sora',sans-serif", fontWeight: 700, color: '#0c2340', fontSize: '0.83rem', width: 56 }}>
                            {s.rank}
                          </td>
                          <td style={{ padding: '11px 16px', borderBottom: '1px solid rgba(12,35,64,0.04)', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: '#0f172a', fontSize: '0.85rem' }}>
                            {s.name}
                          </td>
                          <td style={{ padding: '11px 16px', borderBottom: '1px solid rgba(12,35,64,0.04)', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: '#475569', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                            {s.frequency}/6
                          </td>
                          <td style={{ padding: '11px 16px', borderBottom: '1px solid rgba(12,35,64,0.04)' }}>
                            <span style={{
                              display: 'inline-flex', alignItems: 'center', gap: 5,
                              padding: '4px 10px', borderRadius: 999,
                              background: s.frequency >= 6 ? '#dcfce7' : s.frequency === 5 ? '#e0f2fe' : '#eef2ff',
                              color: s.frequency >= 6 ? '#166534' : s.frequency === 5 ? '#075985' : '#3730a3',
                              fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '0.7rem',
                              whiteSpace: 'nowrap',
                            }}>
                              {consistencyStatus(s.frequency)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ height: 16 }} />
              </div>

              {/* Top 3 highlights */}
              <div className="rv" style={{ transitionDelay: '0.12s' }}>
                <div style={{
                  background: '#fff', border: '1.5px solid rgba(12,35,64,0.08)',
                  borderRadius: 20, padding: '26px 22px',
                  boxShadow: '0 4px 20px rgba(12,35,64,0.08)',
                }}>
                  <p style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: '0.9rem', color: '#0c2340', margin: '0 0 5px' }}>Top 3 Highlights</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 20px' }}>
                    Strongest repeated performance across all mission examinations.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {top14.slice(0, 3).map((s, i) => (
                      <div key={i}
                        className={`rank-${['gold','silver','bronze'][i]}`}
                        style={{ borderRadius: 16, padding: '18px 20px', boxShadow: '0 3px 14px rgba(12,35,64,0.09)' }}
                      >
                        <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, opacity: 0.65, fontFamily: "'Sora',sans-serif" }}>
                          {s.rank} {['🥇','🥈','🥉'][i]}
                        </span>
                        <strong style={{ display: 'block', fontSize: '0.97rem', marginTop: 6, fontFamily: "'Sora',sans-serif", fontWeight: 800, color: '#0f172a' }}>
                          {s.name}
                        </strong>
                        <small style={{ display: 'block', marginTop: 4, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", fontSize: '0.77rem', color: '#334155' }}>
                          {s.frequency}/6 Missions
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 10-WEEK ROADMAP ── */}
        <div className="m40-sec m40-sec--alt">
          <div className="m40-inner">
            <SectionHeading
              badge="Training Plan"
              title="10-Week Training"
              highlight="Roadmap"
              sub="The training plan is designed to move students from orientation to final interview readiness in a structured way."
            />
            <div className="m40-roadmap">
              {ROADMAP.map((step, i) => (
                <div key={i} className="m40-road-card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="m40-week-badge">{step.week}</span>
                  <h4 className="h3" style={{ fontSize: '0.9rem' }}>{step.title}</h4>
                  <p className="body-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── EXPECTED OUTCOMES ── */}
        <div className="m40-sec">
          <div className="m40-inner">
            <SectionHeading
              badge="Outcomes"
              title="Expected"
              highlight="Outcomes"
              sub="Mission 40 aims to produce students who are not just shortlisted, but genuinely ready for placement success."
            />
            <div className="m40-outcomes-grid">
              {OUTCOMES.map((o, i) => (
                <div key={i} className="m40-outcome-card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="m40-check">✓</div>
                  <div>
                    <h4 className="h3" style={{ fontSize: '0.9rem' }}>{o.title}</h4>
                    <p className="body-xs">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PHOTO GALLERY ── */}
        <div className="m40-sec m40-sec--alt">
          <div className="m40-inner">
            <SectionHeading
              badge="Gallery"
              title="Mission 40"
              highlight="Photo Gallery"
              sub="Moments captured from Mission 40 sessions, assessments, and training activities at Creative Techno College."
            />
            <div className="m40-gallery-grid">
              {GALLERY_IMAGES.map((img, i) => (
                <GalleryCard key={i} img={img} idx={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER CTA ── */}
        <div className="m40-footer-cta">
          <div className="m40-inner">
            <p style={{ fontFamily: "'Sora',sans-serif", fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,204,0,0.6)', letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 14px' }}>
              Creative Techno College, Angul
            </p>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.4rem,2.8vw,2.1rem)', fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
              Mission 40 &nbsp;·&nbsp; Placement Readiness Program
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.87rem', color: 'rgba(255,255,255,0.38)', margin: '0 0 30px' }}>
              Training &amp; Placement Cell &nbsp;·&nbsp; Vice Principal / Placement Team &nbsp;·&nbsp; Batch 2023–26
            </p>
            <Link
              to="/placement/programs"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                padding: '13px 26px', borderRadius: 13,
                background: 'rgba(255,204,0,0.1)', border: '1.5px solid rgba(255,204,0,0.28)',
                color: '#ffcc00', fontFamily: "'Sora',sans-serif", fontWeight: 700,
                fontSize: '0.86rem', textDecoration: 'none', transition: 'all 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,204,0,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,204,0,0.1)'; e.currentTarget.style.transform = 'none'; }}
            >
              <i className="fa-solid fa-arrow-left" /> Back to Development Programs
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}