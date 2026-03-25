import { useState, useEffect, useRef } from 'react';

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv, .rv-l, .rv-r');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Data ─── */
const ICC_DATA = {
  resolution: [
    { date: '04-10-2024', pdf: '/CTC NEW REACT WEBSITE/images/ICC/1.pdf', label: 'ICC Resolution — October 2024' },
  ],
  committee: [
    { date: '01-05-2025', pdf: '/CTC NEW REACT WEBSITE/images/ICC/8.pdf', label: 'Committee Members — May 2025' },
    { date: '18-03-2025', pdf: '/CTC NEW REACT WEBSITE/images/ICC/7.pdf', label: 'Committee Members — March 2025' },
    { date: '05-12-2024', pdf: '/CTC NEW REACT WEBSITE/images/ICC/6.pdf', label: 'Committee Members — December 2024' },
    { date: '05-10-2024', pdf: '/CTC NEW REACT WEBSITE/images/ICC/2.pdf', label: 'Committee Members — October 2024' },
  ],
  events: [
    { date: '05-12-2024', pdf: '/CTC NEW REACT WEBSITE/images/ICC/4.pdf', label: 'Awareness Program — December 2024' },
    { date: '25-11-2024', pdf: '/CTC NEW REACT WEBSITE/images/ICC/5.pdf', label: 'Gender Sensitization — November 2024' },
  ],
  vision: [
    { date: '05-10-2024', pdf: '/CTC NEW REACT WEBSITE/images/ICC/3.pdf', label: 'ICC Vision Document — October 2024' },
  ],
};

const HARASSMENT_TYPES = [
  { icon: 'fa-hand', text: 'Physical contact and advances' },
  { icon: 'fa-comment-slash', text: 'Sexually colored remarks' },
  { icon: 'fa-user-lock', text: 'Request for sexual favors' },
  { icon: 'fa-eye-slash', text: 'Showing pornography' },
  { icon: 'fa-triangle-exclamation', text: 'Other unwelcome sexual conduct' },
];

const RESPONSIBILITIES = [
  'Ensure safe work and academic environment for staff and students.',
  'Deliver impartial justice in sexual harassment cases.',
  'Promote gender equity policies across the institution.',
  'Organize awareness and sensitization programs.',
  'Display institutional policies publicly.',
  'Publish ICC members list and contact details.',
  'Develop transparent complaint mechanism.',
  'Conduct inquiries based on principles of natural justice.',
  'Recommend corrective and preventive action.',
  'Monitor implementation and follow-ups.',
  'Provide emotional and psychological support to complainants.',
];

const TABS = [
  { id: 'about', label: 'About', icon: 'fa-circle-info' },
  { id: 'resolution', label: 'Resolution', icon: 'fa-gavel' },
  { id: 'committee', label: 'Committee', icon: 'fa-users' },
  { id: 'events', label: 'Events', icon: 'fa-calendar-days' },
  { id: 'vision', label: 'Vision', icon: 'fa-eye' },
];

/* ─── Complaint Modal ─── */
function ComplaintModal({ onClose }) {
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdrop = e => { if (e.target === backdropRef.current) onClose(); };

  const downloadForm = () => {
    const a = document.createElement('a');
    a.href = '/CTC NEW REACT WEBSITE/images/ICC/form.pdf';
    a.download = 'ICC_Complaint_Form.pdf';
    a.click();
  };

  const css = `
    @keyframes modalIn{from{opacity:0;transform:scale(0.92) translateY(20px);}to{opacity:1;transform:none;}}
    .icc-backdrop{position:fixed;inset:0;background:rgba(5,15,35,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
    .icc-modal{background:#fff;border-radius:24px;width:100%;max-width:460px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,0.35);animation:modalIn 0.35s cubic-bezier(0.4,0,0.2,1) both;}
    .icc-modal-header{background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);padding:28px 32px;position:relative;}
    .icc-modal-header::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 60%);pointer-events:none;}
    .icc-modal-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.25rem;font-weight:800;color:#fff;margin-bottom:4px;}
    .icc-modal-sub{font-size:0.8rem;color:rgba(255,255,255,0.45);font-weight:500;}
    .icc-modal-close{position:absolute;top:20px;right:20px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.8rem;transition:all 0.2s;}
    .icc-modal-close:hover{background:rgba(255,255,255,0.2);color:#fff;}
    .icc-modal-body{padding:32px;}
    .icc-modal-note{background:#fef3c7;border:1px solid #fcd34d;border-radius:12px;padding:14px 16px;margin-bottom:24px;display:flex;gap:10px;align-items:flex-start;}
    .icc-modal-note i{color:#d97706;margin-top:2px;flex-shrink:0;}
    .icc-modal-note p{font-size:0.8rem;color:#92400e;line-height:1.6;margin:0;font-weight:500;}
    .icc-modal-options{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
    .icc-modal-opt{border:none;border-radius:14px;padding:18px 14px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:10px;transition:all 0.25s;font-family:'Plus Jakarta Sans',sans-serif;}
    .icc-modal-opt.primary{background:linear-gradient(135deg,#0c2340,#1a3a6b);color:#fff;box-shadow:0 8px 24px rgba(12,35,64,0.3);}
    .icc-modal-opt.primary:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(12,35,64,0.4);}
    .icc-modal-opt.secondary{background:#f0f4f8;color:#0c2340;border:1.5px solid rgba(12,35,64,0.12);}
    .icc-modal-opt.secondary:hover{background:#e2eaf5;transform:translateY(-3px);}
    .icc-modal-opt-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;}
    .icc-modal-opt.primary .icc-modal-opt-icon{background:rgba(255,255,255,0.15);}
    .icc-modal-opt.secondary .icc-modal-opt-icon{background:rgba(12,35,64,0.08);}
    .icc-modal-opt-label{font-size:0.8rem;font-weight:800;text-align:center;line-height:1.3;}
    .icc-modal-opt-sub{font-size:0.68rem;opacity:0.6;text-align:center;}
    .icc-modal-footer{padding:0 32px 24px;text-align:center;}
    .icc-modal-footer p{font-size:0.75rem;color:#94a3b8;line-height:1.6;}
    .icc-modal-footer strong{color:#0c2340;}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="icc-backdrop" ref={backdropRef} onClick={handleBackdrop}>
        <div className="icc-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Header */}
          <div className="icc-modal-header">
            <button className="icc-modal-close" onClick={onClose} aria-label="Close"><i className="fa-solid fa-xmark" /></button>
            <div className="icc-modal-title" id="modal-title">Submit Your Complaint</div>
            <div className="icc-modal-sub">Internal Complaints Committee · CTC</div>
          </div>

          {/* Body */}
          <div className="icc-modal-body">
            <div className="icc-modal-options">
              <button
                className="icc-modal-opt primary"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeXE1THmrO8-fPHCyvU1L2dzc45Na9Qy6vVijfNHzWxUhJRrQ/viewform', '_blank')}
              >
                <div className="icc-modal-opt-icon"><i className="fa-solid fa-laptop" /></div>
                <div>
                  <div className="icc-modal-opt-label">Apply Online</div>
                  <div className="icc-modal-opt-sub">Google Form</div>
                </div>
              </button>
              <button className="icc-modal-opt secondary" onClick={downloadForm}>
                <div className="icc-modal-opt-icon"><i className="fa-solid fa-file-arrow-down" /></div>
                <div>
                  <div className="icc-modal-opt-label">Download Form</div>
                  <div className="icc-modal-opt-sub">PDF Format</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Document Table ─── */
function DocTable({ section }) {
  const data = ICC_DATA[section] || [];
  const [hoveredRow, setHoveredRow] = useState(null);

  if (data.length === 0) return (
    <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8' }}>
      <i className="fa-solid fa-folder-open" style={{ fontSize: '2rem', marginBottom: 12, display: 'block', opacity: 0.4 }} />
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.88rem', fontWeight: 600, margin: 0 }}>No documents available yet.</p>
    </div>
  );

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        <thead>
          <tr>
            {['#', 'Date', 'Document', 'Action'].map((h, i) => (
              <th key={i} style={{
                padding: '14px 18px', textAlign: 'left',
                background: 'linear-gradient(135deg,#0c2340,#1a3a6b)',
                color: '#ffcc00', fontSize: '0.75rem', fontWeight: 800,
                letterSpacing: '0.8px', textTransform: 'uppercase',
                borderBottom: '2px solid rgba(255,204,0,0.2)',
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                background: hoveredRow === i ? '#f0f6ff' : i % 2 === 0 ? '#fff' : '#f8fafc',
                transition: 'background 0.2s',
              }}
            >
              <td style={{ padding: '14px 18px', color: '#94a3b8', fontWeight: 700, fontSize: '0.82rem', width: 48 }}>
                {String(i + 1).padStart(2, '0')}
              </td>
              <td style={{ padding: '14px 18px', fontSize: '0.85rem', fontWeight: 600, color: '#4a6080', whiteSpace: 'nowrap' }}>
                <i className="fa-regular fa-calendar" style={{ marginRight: 8, color: '#0c2340', opacity: 0.5 }} />
                {item.date}
              </td>
              <td style={{ padding: '14px 18px', fontSize: '0.85rem', fontWeight: 600, color: '#0c2340' }}>
                {item.label}
              </td>
              <td style={{ padding: '14px 18px' }}>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'linear-gradient(135deg,#0c2340,#1a3a6b)',
                    color: '#ffcc00', textDecoration: 'none',
                    padding: '7px 14px', borderRadius: 8,
                    fontSize: '0.72rem', fontWeight: 800,
                    letterSpacing: '0.4px', textTransform: 'uppercase',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 12px rgba(12,35,64,0.2)',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(12,35,64,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(12,35,64,0.2)'; }}
                >
                  <i className="fa-solid fa-file-pdf" /> View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Main ICC Page ─── */
export default function ICC() {
  useReveal();
  const [activeTab, setActiveTab] = useState('about');
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');

    @keyframes iccFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes iccHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes iccBlink{0%,100%{opacity:1;}50%{opacity:0.55;}}
    @keyframes iccShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes iccTabIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}
    .rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-r.visible{opacity:1;transform:none;}

    .icc-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* ── HERO ── */
    .icc-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .icc-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(255,204,0,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,204,0,0.04) 1px,transparent 1px);
      background-size:48px 48px;
    }
    .icc-hero-scan{
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,rgba(255,204,0,0.4),transparent);
      animation:iccScanLine 9s linear infinite;pointer-events:none;
    }
    .icc-hero-glow{
      position:absolute;width:600px;height:600px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-180px;right:-100px;filter:blur(50px);pointer-events:none;
    }
    .icc-hero-glow2{
      position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(26,58,107,0.6) 0%,transparent 65%);
      bottom:-100px;left:5%;filter:blur(40px);pointer-events:none;
    }
    .icc-hero-content {
        position: relative;
        z-index: 2;
        padding: 72px 5% 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        flex-wrap: wrap;
    }
    .icc-hero-left{flex:1;min-width:280px;}
    .icc-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:iccHeroIn 0.6s 0.1s ease both;
    }
    .icc-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:iccHeroIn 0.6s 0.2s ease both;
    }
    .icc-hero-title em{font-style:normal;color:#ffcc00;}
    .icc-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:iccHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .icc-hero-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        animation: iccHeroIn 0.6s 0.4s ease both;
    }
    .icc-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }
    .icc-hero-pill i{font-size:0.65rem;}
    .icc-hero-right{animation:iccHeroIn 0.6s 0.35s ease both;flex-shrink:0;}
    .icc-hero-logo {
        flex: 0 0 auto;
        animation: iccHeroIn 0.6s 0.35s ease both;
    }

    .icc-hero-logo img {
        height: 140px; /* Matches AboutTrust height */
        width: auto;
        opacity: 0.9;
        margin:0 auto;
        filter: drop-shadow(0 4px 16px rgba(0,0,0,0.4));
    }

    /* Wave */
    .icc-wave{height:56px;margin-top:-1px;position:relative;}
    .icc-wave svg{width:100%;height:100%;display:block;}

    /* ── COMPLAINT BUTTON ── */
    .icc-complaint-strip{
      max-width:1200px;margin:-28px auto 0;padding:0 4%;
      position:relative;z-index:4;
    }
    .icc-complaint-btn{
      width:100%;padding:20px 32px;border:none;border-radius:18px;
      background:linear-gradient(135deg,#b91c1c,#dc2626,#ef4444);
      color:#fff;cursor:pointer;
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      box-shadow:0 12px 40px rgba(185,28,28,0.4);
      position:relative;overflow:hidden;
      transition:transform 0.25s,box-shadow 0.28s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .icc-complaint-btn:hover{transform:translateY(-3px);box-shadow:0 18px 50px rgba(185,28,28,0.5);}
    .icc-complaint-btn-shine{
      position:absolute;top:0;left:0;bottom:0;width:40%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
      animation:iccShimmer 3s ease-in-out infinite;pointer-events:none;
    }
    .icc-complaint-btn-left{display:flex;align-items:center;gap:16px;}
    .icc-complaint-icon{
      width:52px;height:52px;border-radius:14px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1.3rem;flex-shrink:0;
      animation:iccBlink 2s ease-in-out infinite;
    }
    .icc-complaint-title{font-size:1.05rem;font-weight:900;letter-spacing:-0.3px;text-align:left;}
    .icc-complaint-sub{font-size:0.78rem;opacity:0.75;font-weight:500;text-align:left;margin-top:2px;}
    .icc-complaint-arrow{
      width:44px;height:44px;border-radius:12px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1rem;flex-shrink:0;
      transition:transform 0.25s;
    }
    .icc-complaint-btn:hover .icc-complaint-arrow{transform:translateX(4px);}

    /* ── MAIN CONTENT AREA ── */
    .icc-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* TAB BAR */
    .icc-tab-bar{
      display:flex;gap:6px;background:#fff;
      border-radius:18px;padding:6px;
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;flex-wrap:wrap;
    }
    .icc-tab{
      flex:1;min-width:0;
      display:flex;align-items:center;justify-content:center;gap:7px;
      padding:12px 14px;border:none;border-radius:12px;
      cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.8rem;font-weight:700;letter-spacing:0.2px;
      transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
      background:transparent;color:#4a6080;white-space:nowrap;
    }
    .icc-tab i{font-size:0.75rem;transition:transform 0.25s;}
    .icc-tab.active{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 6px 20px rgba(12,35,64,0.3);
    }
    .icc-tab.active i{transform:scale(1.15);}
    .icc-tab:not(.active):hover{background:#f0f4f8;color:#0c2340;}

    /* CONTENT CARD */
    .icc-content-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
    }
    .icc-content-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .icc-content-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .icc-content-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .icc-content-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .icc-content-body{padding:36px;}

    /* ABOUT TAB */
    .icc-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px;}
    .icc-about-text{
      font-size:0.92rem;line-height:1.85;color:#334155;
      font-weight:500;
    }
    .icc-about-text strong{color:#0c2340;}
    .icc-legal-badges{display:flex;flex-direction:column;gap:10px;}
    .icc-legal-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      display:flex;align-items:center;gap:12px;
    }
    .icc-legal-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .icc-legal-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .icc-legal-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* HARASSMENT SECTION */
    .icc-harassment-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .icc-harassment-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#b91c1c,#ef4444);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#fff;
    }
    .icc-harassment-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .icc-harassment-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .icc-harassment-text{font-size:0.88rem;line-height:1.8;color:#475569;margin-bottom:20px;}
    .icc-harassment-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .icc-harassment-item{
      display:flex;align-items:center;gap:12px;
      background:#fef2f2;border:1.5px solid #fecaca;
      border-radius:12px;padding:13px 16px;
      transition:all 0.22s;
    }
    .icc-harassment-item:hover{background:#fee2e2;transform:translateX(4px);}
    .icc-harassment-item-icon{
      width:34px;height:34px;border-radius:9px;flex-shrink:0;
      background:linear-gradient(135deg,#b91c1c,#ef4444);
      display:flex;align-items:center;justify-content:center;
      font-size:0.8rem;color:#fff;
    }
    .icc-harassment-item-text{font-size:0.8rem;font-weight:700;color:#7f1d1d;line-height:1.35;}

    /* RESPONSIBILITIES */
    .icc-responsibilities-section{margin-top:32px;}
    .icc-resp-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .icc-resp-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#ffcc00;
    }
    .icc-resp-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .icc-resp-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .icc-resp-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .icc-resp-item{
      display:flex;align-items:flex-start;gap:12px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      transition:all 0.22s;
    }
    .icc-resp-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .icc-resp-num{
      width:28px;height:28px;border-radius:8px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.65rem;font-weight:900;color:#ffcc00;margin-top:1px;
    }
    .icc-resp-text{font-size:0.8rem;font-weight:600;color:#0c2340;line-height:1.55;}

    /* MECHANISM IMAGE */
    .icc-mechanism{
      margin-top:32px;border-radius:16px;overflow:hidden;
      border:1.5px solid rgba(12,35,64,0.1);
    }
    .icc-mechanism-header{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      padding:14px 20px;display:flex;align-items:center;gap:10px;
    }
    .icc-mechanism-header i{color:#ffcc00;font-size:0.85rem;}
    .icc-mechanism-header span{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.82rem;font-weight:800;color:#fff;letter-spacing:0.3px;}
    .icc-mechanism img{width:100%;height:auto;display:block;}

    /* DOC TABS — Resolution/Committee/Events/Vision */
    .icc-doc-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;}
    .icc-doc-stat{
      background:#f8fafc;border:1px solid rgba(10,22,40,0.07);border-radius:14px;
      padding:18px 20px;text-align:center;
    }
    .icc-doc-stat-val{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.6rem;font-weight:900;color:#0c2340;line-height:1;}
    .icc-doc-stat-lbl{font-size:0.72rem;font-weight:600;color:#4a6080;margin-top:4px;}
    .icc-table-wrap{
      border:1.5px solid rgba(10,22,40,0.08);border-radius:14px;
      overflow:hidden;
    }

    @media(max-width:900px){
      .icc-about-grid{grid-template-columns:1fr;}
      .icc-harassment-list{grid-template-columns:1fr;}
      .icc-resp-grid{grid-template-columns:1fr;}
      .icc-tab{flex:1 1 calc(50% - 6px);}
    }
    @media(max-width:600px){
      .icc-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .icc-hero-logo{width:80px;height:80px;}
      .icc-hero-title{font-size:1.9rem;letter-spacing:-1px;}
      .icc-content-body{padding:24px 20px;}
      .icc-complaint-btn{padding:16px 20px;}
      .icc-complaint-icon{width:42px;height:42px;font-size:1.1rem;}
      .icc-tab{padding:10px 10px;font-size:0.74rem;}
      .icc-doc-stats{grid-template-columns:1fr 1fr;}
    }
    @media(max-width:400px){
      .icc-tab{flex:1 1 100%;}
      .icc-doc-stats{grid-template-columns:1fr;}
    }
  `;

  /* Tab content builders */
  const TAB_META = {
    about: { title: 'About the ICC', sub: 'Background, mandate & scope · Creative Techno College' },
    resolution: { title: 'ICC Resolutions', sub: 'Formal resolutions and policy decisions' },
    committee: { title: 'Committee Members', sub: 'Constituted as per POSH Act 2013' },
    events: { title: 'Events & Programmes', sub: 'Awareness, sensitization and outreach activities' },
    vision: { title: 'ICC Vision', sub: 'Mission, objectives and institutional commitment' },
  };

  const renderDocStats = (section) => {
    const data = ICC_DATA[section] || [];
    const years = [...new Set(data.map(d => d.date.split('-')[2]))];
    return (
      <div className="icc-doc-stats">
        <div className="icc-doc-stat">
          <div className="icc-doc-stat-val">{data.length}</div>
          <div className="icc-doc-stat-lbl">Documents</div>
        </div>
        <div className="icc-doc-stat">
          <div className="icc-doc-stat-val">{years.length}</div>
          <div className="icc-doc-stat-lbl">Academic Years</div>
        </div>
        <div className="icc-doc-stat">
          <div className="icc-doc-stat-val">PDF</div>
          <div className="icc-doc-stat-lbl">Format</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{css}</style>
      {showModal && <ComplaintModal onClose={() => setShowModal(false)} />}

      <div className="icc-page">

        {/* ── HERO ── */}
        <div className="icc-hero">

          <div className="icc-hero-content">
            <div className="icc-hero-left">
              <div className="icc-hero-badge">
                <i className="fa-solid fa-shield-halved" /> ICC · POSH Act 2013
              </div>
              <h1 className="icc-hero-title">
                Internal<br /><em>Complaints</em><br />Committee
              </h1>
              <p className="icc-hero-sub">
                Committed to maintaining a safe, respectful and equitable working and academic environment for all women at Creative Techno College.
              </p>
              <div className="icc-hero-pills">
                {[
                  { icon: 'fa-scale-balanced', text: 'Zero Tolerance Policy' },
                  { icon: 'fa-lock', text: 'Confidential Process' },
                  { icon: 'fa-gavel', text: 'Natural Justice' },
                  { icon: 'fa-building-columns', text: 'UGC Mandated' },
                ].map((p, i) => (
                  <span key={i} className="icc-hero-pill">
                    <i className={`fa-solid ${p.icon}`} style={{ color: '#ffcc00', fontSize: '0.65rem' }} />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="icc-hero-right">
              <div className="icc-hero-logo">
                <img
                  src="/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png"
                  alt="Creative Techno College"
                  onError={e => { e.target.parentElement.innerHTML = '<span style="font-size:2.5rem">🏫</span>'; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="icc-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* ── COMPLAINT BUTTON ── */}
        <div className="icc-complaint-strip rv">
          <button className="icc-complaint-btn" onClick={() => setShowModal(true)}>
            <div className="icc-complaint-btn-shine" />
            <div className="icc-complaint-btn-left">
              <div className="icc-complaint-icon">
                <i className="fa-solid fa-pen-to-square" />
              </div>
              <div>
                <div className="icc-complaint-title">Write Your Complaint Here</div>
                <div className="icc-complaint-sub">Confidential · Secure · Protected — File online or download form</div>
              </div>
            </div>
            <div className="icc-complaint-arrow">
              <i className="fa-solid fa-arrow-right" />
            </div>
          </button>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="icc-main">

          {/* Tab bar */}
          <div className="icc-tab-bar rv" style={{ transitionDelay: '0.1s' }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`icc-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content card */}
          <div className="icc-content-card rv" style={{ transitionDelay: '0.15s' }} ref={contentRef}>
            <div className="icc-content-header">
              <div className="icc-content-header-title">{TAB_META[activeTab].title}</div>
              <div className="icc-content-header-sub">{TAB_META[activeTab].sub}</div>
            </div>

            <div className="icc-content-body">

              {/* ── ABOUT TAB ── */}
              {activeTab === 'about' && (
                <div style={{ animation: 'iccTabIn 0.4s ease both' }}>
                  {/* About + Legal badges */}
                  <div className="icc-about-grid">
                    <div className="icc-about-text">
                      <p>
                        As per the guidelines of the <strong>Supreme Court of India</strong>, UGC, <strong>Section 4 SHW Act 2013</strong> and AICTE Regulations, 2016 vide No. F. AICTE/WH/2016/01 dated 10th June, 2016 — <em>Gender Sensitization, Prevention and Prohibition of Sexual Harassment of Women Employees and Students and Redressal of Grievances in Technical Institutions</em> — <strong>Creative Techno College</strong> has constituted an Internal Complaints Committee (ICC).
                      </p>
                      <p style={{ marginTop: 16 }}>
                        The ICC of Creative Techno College facilitates <strong>safe and secure educational and working environments</strong> for both female students and staff. The Institute follows a strict policy of <strong>zero tolerance</strong> towards human rights violations. The Committee addresses issues regarding prevention, prohibition and redressal of sexual harassment of women at the workplace.
                      </p>
                    </div>
                    <div className="icc-legal-badges">
                      {[
                        { icon: 'fa-building-columns', label: 'Supreme Court Guidelines', sub: 'Vishakha Guidelines & subsequent orders' },
                        { icon: 'fa-scroll', label: 'POSH Act 2013', sub: 'Sexual Harassment of Women at Workplace Act' },
                        { icon: 'fa-landmark', label: 'AICTE Regulations 2016', sub: 'No. F.AICTE/WH/2016/01 — June 2016' },
                        { icon: 'fa-book-open', label: 'UGC Policy Framework', sub: 'Gender sensitization mandate for HEIs' },
                      ].map((b, i) => (
                        <div key={i} className="icc-legal-badge">
                          <div className="icc-legal-badge-icon"><i className={`fa-solid ${b.icon}`} /></div>
                          <div>
                            <div className="icc-legal-badge-text">{b.label}</div>
                            <div className="icc-legal-badge-sub">{b.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sexual Harassment */}
                  <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: 18, padding: 28, marginBottom: 28 }}>
                    <div className="icc-harassment-header">
                      <div className="icc-harassment-icon-wrap"><i className="fa-solid fa-triangle-exclamation" /></div>
                      <div>
                        <div className="icc-harassment-title">What Constitutes Sexual Harassment?</div>
                        <div className="icc-harassment-sub">As defined under Sexual Harassment of Women at Workplace Act, 2013</div>
                      </div>
                    </div>
                    <p className="icc-harassment-text">
                      Any inappropriate advances towards a person in a sexual manner that could directly or indirectly affect their job, salary, or career constitute sexual harassment. The Act provides a broad and inclusive definition to ensure comprehensive protection.
                    </p>
                    <div className="icc-harassment-list">
                      {HARASSMENT_TYPES.map((item, i) => (
                        <div key={i} className="icc-harassment-item">
                          <div className="icc-harassment-item-icon"><i className={`fa-solid ${item.icon}`} /></div>
                          <div className="icc-harassment-item-text">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Roles & Responsibilities */}
                  <div className="icc-responsibilities-section">
                    <div className="icc-resp-header">
                      <div className="icc-resp-icon-wrap"><i className="fa-solid fa-sitemap" /></div>
                      <div>
                        <div className="icc-resp-title">Roles & Responsibilities of ICC</div>
                        <div className="icc-resp-sub">11 core mandates of the Internal Complaints Committee</div>
                      </div>
                    </div>
                    <div className="icc-resp-grid">
                      {RESPONSIBILITIES.map((resp, i) => (
                        <div key={i} className="icc-resp-item">
                          <div className="icc-resp-num">{String(i + 1).padStart(2, '0')}</div>
                          <div className="icc-resp-text">{resp}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mechanism image */}
                  <div className="icc-mechanism">
                    <div className="icc-mechanism-header">
                      <i className="fa-solid fa-diagram-project" />
                      <span>ICC Complaint & Redressal Mechanism</span>
                    </div>
                    <img
                      src="/CTC NEW REACT WEBSITE/images/ICC/mechanism.png"
                      alt="ICC Complaint Mechanism"
                      onError={e => {
                        e.target.parentElement.style.cssText += 'background:#f8fafc;min-height:120px;display:flex;align-items:center;justify-content:center;';
                        e.target.outerHTML = '<div style="padding:40px;text-align:center;color:#94a3b8;font-family:Plus Jakarta Sans,sans-serif;font-size:0.85rem;">Mechanism diagram will appear here</div>';
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ── RESOLUTION / COMMITTEE / EVENTS / VISION TABS ── */}
              {['resolution', 'committee', 'events', 'vision'].includes(activeTab) && (
                <div style={{ animation: 'iccTabIn 0.4s ease both' }}>
                  {renderDocStats(activeTab)}
                  <div className="icc-table-wrap">
                    <DocTable section={activeTab} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── BOTTOM INFO CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 18, marginTop: 28 }}>
            {[
              {
                icon: 'fa-envelope', color: '#0c2340', bg: 'linear-gradient(135deg,#0c2340,#1a3a6b)',
                title: 'Contact ICC', sub: 'icc@creativecollege.in',
                desc: 'Reach out to the committee directly for guidance before filing a formal complaint.',
              },
              {
                icon: 'fa-clock', color: '#d97706', bg: 'linear-gradient(135deg,#78350f,#d97706)',
                title: 'Filing Window', sub: '90 Days from Incident',
                desc: 'Complaints must be filed within 90 days of the last incident as per POSH Act provisions.',
              },
              {
                icon: 'fa-shield-halved', color: '#059669', bg: 'linear-gradient(135deg,#064e3b,#059669)',
                title: 'Confidentiality', sub: '100% Protected',
                desc: 'All complaints, proceedings and outcomes are treated with strict confidentiality.',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rv"
                style={{
                  background: '#fff', borderRadius: 18, padding: '24px',
                  border: '1px solid rgba(10,22,40,0.07)',
                  boxShadow: '0 4px 20px rgba(10,22,40,0.07)',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div style={{
                  width: 50, height: 50, borderRadius: 14,
                  background: c.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.1rem', color: '#fff',
                  marginBottom: 16,
                }}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: '0.95rem', color: '#0c2340', marginBottom: 3 }}>{c.title}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: c.color, marginBottom: 10 }}>{c.sub}</div>
                <div style={{ fontSize: '0.8rem', color: '#4a6080', lineHeight: 1.7, fontWeight: 500 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}