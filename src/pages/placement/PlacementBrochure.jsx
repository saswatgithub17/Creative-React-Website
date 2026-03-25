import { useState } from 'react';

export default function PlacementBrochure() {
  const [loaded, setLoaded] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const PDF_SRC = '/CTC NEW REACT WEBSITE/images/PlacementBrochure/PLACEMENT BROUCHURE.pdf';

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes pbIn{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes pbPulse{0%,100%{opacity:0.5;transform:scale(1);}50%{opacity:1;transform:scale(1.05);}}
    @keyframes pbShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes spin{to{transform:rotate(360deg);}}

    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#f0f4f8;}

    .pb-page{min-height:100vh;background:#f0f4f8;font-family:'Plus Jakarta Sans',sans-serif;}

    /* ── HERO ── */
    .pb-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      min-height:280px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;
    }
    .pb-hero-content{
      position:relative;z-index:2;padding:56px 5% 48px;
      display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;
    }
    .pb-hero-left{flex:1;min-width:260px;}
    .pb-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:16px;
    }
    .pb-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,4.5vw,3.2rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;margin-bottom:12px;
    }
    .pb-hero-title em{font-style:normal;color:#ffcc00;}
    .pb-hero-sub{color:rgba(255,255,255,0.42);font-size:0.86rem;line-height:1.75;max-width:480px;}
    .pb-hero-right{display:flex;flex-direction:column;gap:10px;flex-shrink:0;}
    .pb-hero-btn{
      display:inline-flex;align-items:center;gap:9px;
      padding:12px 22px;border-radius:13px;border:none;cursor:pointer;
      font-family:'Plus Jakarta Sans',sans-serif;font-size:0.82rem;font-weight:800;
      transition:all 0.25s;position:relative;overflow:hidden;
      white-space:nowrap;
    }
    .pb-hero-btn.primary{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 8px 24px rgba(12,35,64,0.4);
    }
    .pb-hero-btn.primary:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(12,35,64,0.5);}
    .pb-hero-btn.secondary{
      background:rgba(255,255,255,0.08);border:1.5px solid rgba(255,255,255,0.18);
      color:rgba(255,255,255,0.75);
    }
    .pb-hero-btn.secondary:hover{background:rgba(255,255,255,0.14);color:#fff;}

    /* ── WAVE ── */
    .pb-wave{height:56px;margin-top:-1px;}
    .pb-wave svg{width:100%;height:100%;display:block;}

    /* ── MAIN ── */
    .pb-main{max-width:1100px;margin:-20px auto 60px;padding:0 4%;}

    /* Quick info strip */
    .pb-info-strip{
      display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;
      margin-bottom:28px;
    }
    .pb-info-chip{
      background:#fff;border-radius:16px;padding:18px 20px;
      border:1px solid rgba(12,35,64,0.07);
      box-shadow:0 3px 16px rgba(12,35,64,0.07);
      display:flex;align-items:center;gap:14px;
      animation:pbIn 0.5s ease both;
    }
    .pb-info-chip-icon{
      width:44px;height:44px;border-radius:12px;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;
    }
    .pb-info-chip-val{font-family:'Plus Jakarta Sans',sans-serif;font-size:1rem;font-weight:900;color:#0c2340;line-height:1;}
    .pb-info-chip-lbl{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.68rem;font-weight:600;color:#4a6080;margin-top:3px;}

    /* ── PDF VIEWER CARD ── */
    .pb-viewer-card{
      background:#fff;border-radius:24px;overflow:hidden;
      box-shadow:0 8px 40px rgba(12,35,64,0.13);
      border:1px solid rgba(12,35,64,0.07);
    }

    /* Toolbar */
    .pb-toolbar{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:16px 24px;
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      flex-wrap:wrap;
      position:relative;overflow:hidden;
    }
    .pb-toolbar::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.1) 0%,transparent 55%);
      pointer-events:none;
    }
    .pb-toolbar-left{display:flex;align-items:center;gap:12px;position:relative;z-index:1;}
    .pb-toolbar-icon{
      width:40px;height:40px;border-radius:10px;background:rgba(255,204,0,0.15);
      display:flex;align-items:center;justify-content:center;font-size:1rem;color:#ffcc00;flex-shrink:0;
    }
    .pb-toolbar-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:0.92rem;color:#fff;}
    .pb-toolbar-sub{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.45);margin-top:2px;}
    .pb-toolbar-actions{display:flex;gap:8px;position:relative;z-index:1;flex-wrap:wrap;}
    .pb-tool-btn{
      display:inline-flex;align-items:center;gap:7px;
      padding:8px 16px;border-radius:10px;border:none;cursor:pointer;
      font-family:'Plus Jakarta Sans',sans-serif;font-size:0.74rem;font-weight:800;
      transition:all 0.22s;white-space:nowrap;
    }
    .pb-tool-btn.gold{background:rgba(255,204,0,0.18);color:#ffcc00;border:1.5px solid rgba(255,204,0,0.3);}
    .pb-tool-btn.gold:hover{background:rgba(255,204,0,0.3);transform:translateY(-1px);}
    .pb-tool-btn.white{background:rgba(255,255,255,0.1);color:#fff;border:1.5px solid rgba(255,255,255,0.15);}
    .pb-tool-btn.white:hover{background:rgba(255,255,255,0.18);}

    /* Loader */
    .pb-loader{
      height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;
      background:linear-gradient(135deg,#f8fafc,#f0f4f8);
    }
    .pb-loader-ring{
      width:52px;height:52px;border-radius:50%;
      border:4px solid rgba(12,35,64,0.1);border-top-color:#0c2340;
      animation:spin 0.8s linear infinite;
    }
    .pb-loader-text{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.85rem;font-weight:600;color:#4a6080;}

    /* iframe wrapper */
    .pb-iframe-wrap{
      position:relative;width:100%;
      height:680px;
      background:#525659;
    }
    .pb-iframe-wrap.fullscreen-mode{
      height:92vh;
    }
    .pb-iframe-wrap iframe{
      width:100%;height:100%;border:none;display:block;
    }

    /* Fullscreen toggle */
    .pb-fullscreen-hint{
      padding:14px 24px;background:#f8fafc;border-top:1px solid rgba(12,35,64,0.07);
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;
    }
    .pb-hint-text{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.76rem;color:#4a6080;font-weight:500;display:flex;align-items:center;gap:7px;}
    .pb-hint-text i{color:#0c2340;opacity:0.5;}
    .pb-mobile-notice{
      background:#fff8e1;border:1.5px solid #fde68a;border-radius:12px;
      padding:14px 18px;margin-top:20px;
      display:flex;gap:12px;align-items:flex-start;
    }
    .pb-mobile-notice i{color:#d97706;margin-top:2px;flex-shrink:0;}
    .pb-mobile-notice p{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.8rem;color:#92400e;line-height:1.65;margin:0;font-weight:500;}
    .pb-mobile-dl-btn{
      width:100%;margin-top:14px;padding:15px;border:none;border-radius:13px;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);color:#ffcc00;
      font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;font-weight:800;
      cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;
      box-shadow:0 8px 24px rgba(12,35,64,0.3);transition:transform 0.22s,box-shadow 0.22s;
    }
    .pb-mobile-dl-btn:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(12,35,64,0.4);}

    /* Bottom cards */
    .pb-bottom-grid{
      display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
      gap:18px;margin-top:28px;
    }
    .pb-bottom-card{
      background:#fff;border-radius:18px;padding:24px;
      border:1px solid rgba(12,35,64,0.07);
      box-shadow:0 3px 16px rgba(12,35,64,0.07);
      transition:all 0.28s;
    }
    .pb-bottom-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(12,35,64,0.13);}
    .pb-bottom-card-icon{
      width:48px;height:48px;border-radius:14px;
      display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;
      margin-bottom:14px;
    }
    .pb-bottom-card-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:0.92rem;color:#0c2340;margin-bottom:5px;}
    .pb-bottom-card-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;color:#4a6080;line-height:1.7;font-weight:500;}

    @media(max-width:700px){
      .pb-hero-right{flex-direction:row;flex-wrap:wrap;}
      .pb-iframe-wrap{height:480px;}
      .pb-toolbar-actions{gap:6px;}
      .pb-tool-btn{font-size:0.68rem;padding:7px 12px;}
    }
    @media(max-width:480px){
      .pb-iframe-wrap{height:380px;}
      .pb-hero-title{font-size:2rem;letter-spacing:-1px;}
      .pb-hero-content{padding:44px 4% 36px;}
    }
  `;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = PDF_SRC;
    a.download = 'CTC_Placement_Brochure.pdf';
    a.click();
  };

  const handlePrint = () => {
    window.open(PDF_SRC, '_blank');
  };

  const INFO_CHIPS = [
    { icon: 'fa-building', label: 'Top Recruiters', val: '7+', col: 'linear-gradient(135deg,#0c2340,#1a3a6b)' },
    { icon: 'fa-users', label: 'Students Placed', val: '250+', col: 'linear-gradient(135deg,#1a3a6b,#2d5a8e)' },
    { icon: 'fa-calendar', label: 'Years of Data', val: '2020–25', col: 'linear-gradient(135deg,#2d5a8e,#3d7ab5)' },
    { icon: 'fa-file-pdf', label: 'Format', val: 'PDF', col: 'linear-gradient(135deg,#c0392b,#e74c3c)' },
  ];

  const BOTTOM_CARDS = [
    {
      icon: 'fa-building-columns', col: 'linear-gradient(135deg,#0c2340,#1a3a6b)',
      title: 'About CTC Placements',
      desc: 'Creative Techno College has been consistently placing students in top MNCs including TCS, Wipro, LTI Mindtree, Cognizant and Deloitte since 2020.',
    },
    {
      icon: 'fa-phone', col: 'linear-gradient(135deg,#064e3b,#10b981)',
      title: 'Contact Placement Cell',
      desc: 'For campus recruitment partnerships and placement enquiries, reach the CTC Placement Cell at placements@creativecollege.in',
    },
    {
      icon: 'fa-briefcase', col: 'linear-gradient(135deg,#78350f,#d97706)',
      title: 'Recruit From CTC',
      desc: 'Partner with us for campus drives, internship programs and direct hiring. We offer BCA, B.Sc. CS and BBA graduates trained in industry-relevant skills.',
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="pb-page">

        {/* ── HERO ── */}
        <div className="pb-hero">
          <div className="pb-hero-content">
            <div className="pb-hero-left">
              <div className="pb-hero-badge">
                <i className="fa-solid fa-file-pdf" /> Placement Brochure · CTC
              </div>
              <h1 className="pb-hero-title">
                Our <em>Placement</em><br />Brochure
              </h1>
              <p className="pb-hero-sub">
                Complete placement brochure of Creative Techno College — featuring top recruiters, student profiles, infrastructure and placement process for campus partners.
              </p>
            </div>
            <div className="pb-hero-right">
              <button className="pb-hero-btn primary" onClick={handleDownload}>
                <i className="fa-solid fa-file-arrow-down" /> Download PDF
              </button>
              <button className="pb-hero-btn secondary" onClick={handlePrint}>
                <i className="fa-solid fa-arrow-up-right-from-square" /> Open in New Tab
              </button>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="pb-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* ── MAIN ── */}
        <div className="pb-main">

          {/* Info strip */}
          <div className="pb-info-strip">
            {INFO_CHIPS.map((c, i) => (
              <div key={i} className="pb-info-chip" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="pb-info-chip-icon" style={{ background: c.col }}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <div>
                  <div className="pb-info-chip-val">{c.val}</div>
                  <div className="pb-info-chip-lbl">{c.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* PDF viewer card */}
          <div className="pb-viewer-card">

            {/* Toolbar */}
            <div className="pb-toolbar">
              <div className="pb-toolbar-left">
                <div className="pb-toolbar-icon"><i className="fa-solid fa-file-pdf" /></div>
                <div>
                  <div className="pb-toolbar-title">CTC Placement Brochure</div>
                  <div className="pb-toolbar-sub">Creative Techno College · Official Document</div>
                </div>
              </div>
              <div className="pb-toolbar-actions">
                <button className="pb-tool-btn gold" onClick={handleDownload}>
                  <i className="fa-solid fa-download" /> Download
                </button>
                <button className="pb-tool-btn white" onClick={handlePrint}>
                  <i className="fa-solid fa-arrow-up-right-from-square" /> New Tab
                </button>
                <button
                  className="pb-tool-btn white"
                  onClick={() => setFullscreen(f => !f)}
                >
                  <i className={`fa-solid ${fullscreen ? 'fa-compress' : 'fa-expand'}`} />
                  {fullscreen ? 'Exit' : 'Expand'}
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className={`pb-iframe-wrap${fullscreen ? ' fullscreen-mode' : ''}`}>
              {!loaded && (
                <div className="pb-loader">
                  <div className="pb-loader-ring" />
                  <div className="pb-loader-text">Loading placement brochure…</div>
                </div>
              )}
              <iframe
                src={`${PDF_SRC}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                title="CTC Placement Brochure"
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s' }}
              />
            </div>

            {/* Hint bar */}
            <div className="pb-fullscreen-hint">
              <div className="pb-hint-text">
                <i className="fa-solid fa-circle-info" />
                Use the toolbar above to download or open in a new tab for the best viewing experience.
              </div>
              <button className="pb-tool-btn gold" onClick={handleDownload}
                style={{ background: 'rgba(12,35,64,0.07)', color: '#0c2340', border: '1.5px solid rgba(12,35,64,0.12)' }}>
                <i className="fa-solid fa-file-arrow-down" /> Save Brochure
              </button>
            </div>
          </div>

          {/* Mobile fallback notice */}
          <div className="pb-mobile-notice" style={{ display: 'none' }} id="pb-mobile-fallback">
            <i className="fa-solid fa-mobile-screen" />
            <div>
              <p>
                <strong>On mobile?</strong> PDF viewing may be limited on some devices.
                Download the brochure to your device for the best experience.
              </p>
              <button className="pb-mobile-dl-btn" onClick={handleDownload}>
                <i className="fa-solid fa-file-arrow-down" /> Download Placement Brochure
              </button>
            </div>
          </div>

          {/* Bottom info cards */}
          <div className="pb-bottom-grid">
            {BOTTOM_CARDS.map((c, i) => (
              <div key={i} className="pb-bottom-card">
                <div className="pb-bottom-card-icon" style={{ background: c.col }}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <div className="pb-bottom-card-title">{c.title}</div>
                <div className="pb-bottom-card-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile detection */}
      <script dangerouslySetInnerHTML={{
        __html: `
        (function(){
          var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          var el = document.getElementById('pb-mobile-fallback');
          if(isMobile && el) el.style.display = 'flex';
        })();
      `}} />
    </>
  );
}