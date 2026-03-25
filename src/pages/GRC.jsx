import { useEffect } from 'react';

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.grc-rv, .grc-rv-l, .grc-rv-r');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Committee members ─── */
const MEMBERS = [
  { no: 1, name: 'Mr. Manoj Kumar Das', role: 'Chairperson' },
  { no: 2, name: 'Mr. Satya S. S. Dehury', role: 'Member' },
  { no: 3, name: 'Mrs. Monika Sahu', role: 'Member' },
];

/* ─── Main GRC Page ─── */
export default function GRC() {
  useReveal();

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes grcFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes grcHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes grcShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes grcBlink{0%,100%{opacity:1;}50%{opacity:0.55;}}
    @keyframes grcScanLine{0%{top:0%;}100%{top:100%;}}

    .grc-rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .grc-rv.visible{opacity:1;transform:none;}
    .grc-rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .grc-rv-l.visible{opacity:1;transform:none;}
    .grc-rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .grc-rv-r.visible{opacity:1;transform:none;}

    .grc-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* ── HERO ── */
    .grc-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .grc-hero-glow{
      position:absolute;width:600px;height:600px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-180px;right:-100px;filter:blur(50px);pointer-events:none;
    }
    .grc-hero-glow2{
      position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(26,58,107,0.6) 0%,transparent 65%);
      bottom:-100px;left:5%;filter:blur(40px);pointer-events:none;
    }
    .grc-hero-content{
      position:relative;z-index:2;padding:72px 5% 56px;
      display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;
    }
    .grc-hero-left{flex:1;min-width:280px;}
    .grc-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:grcHeroIn 0.6s 0.1s ease both;
    }
    .grc-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:grcHeroIn 0.6s 0.2s ease both;
    }
    .grc-hero-title em{font-style:normal;color:#ffcc00;}
    .grc-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:grcHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .grc-hero-pills{display:flex;flex-wrap:wrap;gap:10px;animation:grcHeroIn 0.6s 0.4s ease both;}
    .grc-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }
    .grc-hero-right{flex:0 0 auto;animation:grcHeroIn 0.6s 0.35s ease both;}
    .grc-hero-logo img{height:140px;width:auto;opacity:0.9;filter:drop-shadow(0 4px 16px rgba(0,0,0,0.4));}

    /* Wave */
    .grc-wave{height:56px;margin-top:-1px;position:relative;}
    .grc-wave svg{width:100%;height:100%;display:block;}

    /* ── GRIEVANCE BUTTON ── */
    .grc-btn-strip{max-width:1200px;margin:-28px auto 0;padding:0 4%;position:relative;z-index:4;}
    .grc-btn{
      width:100%;padding:20px 32px;border:none;border-radius:18px;
      background:linear-gradient(135deg,#1e3a8a,#2563eb,#3b82f6);
      color:#fff;cursor:pointer;
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      box-shadow:0 12px 40px rgba(30,58,138,0.4);
      position:relative;overflow:hidden;
      transition:transform 0.25s,box-shadow 0.28s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .grc-btn:hover{transform:translateY(-3px);box-shadow:0 18px 50px rgba(30,58,138,0.5);}
    .grc-btn-shine{
      position:absolute;top:0;left:0;bottom:0;width:40%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
      animation:grcShimmer 3s ease-in-out infinite;pointer-events:none;
    }
    .grc-btn-left{display:flex;align-items:center;gap:16px;}
    .grc-btn-icon{
      width:52px;height:52px;border-radius:14px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1.3rem;flex-shrink:0;
      animation:grcBlink 2s ease-in-out infinite;
    }
    .grc-btn-title{font-size:1.05rem;font-weight:900;letter-spacing:-0.3px;text-align:left;}
    .grc-btn-sub{font-size:0.78rem;opacity:0.75;font-weight:500;text-align:left;margin-top:2px;}
    .grc-btn-arrow{
      width:44px;height:44px;border-radius:12px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1rem;flex-shrink:0;transition:transform 0.25s;
    }
    .grc-btn:hover .grc-btn-arrow{transform:translateX(4px);}

    /* ── MAIN CONTENT ── */
    .grc-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* Letter Card */
    .grc-letter-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;
    }
    .grc-letter-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .grc-letter-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .grc-letter-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .grc-letter-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .grc-letter-body{padding:40px 40px 36px;}

    /* Salutation */
    .grc-salutation{font-size:1rem;font-weight:700;color:#0c2340;margin-bottom:20px;}

    /* Letter text */
    .grc-letter-text{
      font-size:0.95rem;line-height:1.9;color:#334155;
      font-weight:500;margin-bottom:28px;
    }
    .grc-letter-text strong{color:#0c2340;}

    /* Members list */
    .grc-members-intro{
      font-size:0.95rem;font-weight:600;color:#0c2340;
      margin-bottom:16px;
    }
    .grc-members-list{display:flex;flex-direction:column;gap:10px;margin-bottom:36px;}
    .grc-member-item{
      display:flex;align-items:center;gap:14px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 18px;
      transition:all 0.22s;
    }
    .grc-member-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .grc-member-num{
      width:32px;height:32px;border-radius:9px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.75rem;font-weight:900;color:#ffcc00;
    }
    .grc-member-name{font-size:0.9rem;font-weight:700;color:#0c2340;}
    .grc-member-role{font-size:0.72rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* Image Container */
    .grc-image-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;
    }
    .grc-image-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:14px 20px;display:flex;align-items:center;gap:10px;
    }
    .grc-image-header i{color:#ffcc00;font-size:0.85rem;}
    .grc-image-header span{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.82rem;font-weight:800;color:#fff;letter-spacing:0.3px;}
    .grc-image-container{
      width:100%;min-height:300px;
      display:flex;align-items:center;justify-content:center;
      background:#f8fafc;position:relative;overflow:hidden;
    }
    .grc-image-container img{width:100%;height:auto;display:block;object-fit:contain;}
    .grc-image-placeholder{
      display:flex;flex-direction:column;align-items:center;gap:12px;
      padding:60px 40px;color:#94a3b8;text-align:center;
    }
    .grc-image-placeholder i{font-size:2.5rem;opacity:0.35;}
    .grc-image-placeholder p{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.88rem;font-weight:600;margin:0;opacity:0.6;}

    /* Info badges */
    .grc-info-badges{
      display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
      margin-top:28px;
    }
    .grc-info-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:16px;
      display:flex;align-items:center;gap:12px;
    }
    .grc-info-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .grc-info-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .grc-info-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    @media(max-width:768px){
      .grc-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .grc-hero-logo img{height:90px;}
      .grc-hero-title{font-size:1.9rem;letter-spacing:-1px;}
      .grc-letter-body{padding:28px 24px;}
      .grc-btn{padding:16px 20px;}
      .grc-btn-icon{width:42px;height:42px;font-size:1.1rem;}
      .grc-info-badges{grid-template-columns:1fr;}
    }
    @media(max-width:480px){
      .grc-info-badges{grid-template-columns:1fr;}
    }
  `;

  return (
    <>
      <style>{css}</style>

      <div className="grc-page">

        {/* ── HERO ── */}
        <div className="grc-hero">
          <div className="grc-hero-grid" />
          <div className="grc-hero-scan" />
          <div className="grc-hero-glow" />
          <div className="grc-hero-glow2" />

          <div className="grc-hero-content">
            <div className="grc-hero-left">
              <div className="grc-hero-badge">
                <i className="fa-solid fa-hands-holding-circle" /> GRC · AICTE Guidelines
              </div>
              <h1 className="grc-hero-title">
                Grievance<br /><em>Redressal</em><br />Committee
              </h1>
              <p className="grc-hero-sub">
                Committed to addressing and resolving grievances of students and staff in a fair, transparent and time-bound manner at Creative Techno College.
              </p>
              <div className="grc-hero-pills">
                {[
                  { icon: 'fa-scale-balanced', text: 'Fair & Transparent' },
                  { icon: 'fa-lock', text: 'Confidential Process' },
                  { icon: 'fa-clock', text: 'Time-Bound Resolution' },
                  { icon: 'fa-building-columns', text: 'AICTE Mandated' },
                ].map((p, i) => (
                  <span key={i} className="grc-hero-pill">
                    <i className={`fa-solid ${p.icon}`} style={{ color: '#ffcc00', fontSize: '0.65rem' }} />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="grc-hero-right">
              <div className="grc-hero-logo">
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
        <div className="grc-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* ── GRIEVANCE BUTTON ── */}
        <div className="grc-btn-strip grc-rv">
          <button className="grc-btn" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1Pcq1imy_OeOFSSbNucLUNQCVWzvi-J6kNVl5ihcX5N4LTw/viewform?usp=publish-editor', '_blank')}>
            <div className="grc-btn-shine" />
            <div className="grc-btn-left">
              <div className="grc-btn-icon">
                <i className="fa-solid fa-pen-to-square" />
              </div>
              <div>
                <div className="grc-btn-title">Submit Your Grievance Here</div>
                <div className="grc-btn-sub">Confidential · Secure · Protected — File online or download form</div>
              </div>
            </div>
            <div className="grc-btn-arrow">
              <i className="fa-solid fa-arrow-right" />
            </div>
          </button>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="grc-main">

          {/* Letter / Constitution Notice Card */}
          <div className="grc-letter-card grc-rv" style={{ transitionDelay: '0.1s' }}>
            <div className="grc-letter-header">
              <div className="grc-letter-header-title">Official Notice — GRC Constitution</div>
              <div className="grc-letter-header-sub">As per AICTE norms and guidelines · Creative Techno College</div>
            </div>

            <div className="grc-letter-body">
              {/* Salutation */}
              <div className="grc-salutation">Respected Sir/Madam,</div>

              {/* Body text */}
              <p className="grc-letter-text">
                I am pleased to inform you that our institution has formally constituted a{' '}
                <strong>Grievance Redressal Committee</strong> in accordance with the norms and
                guidelines prescribed by <strong>AICTE</strong>. The committee has been established
                to address and resolve grievances of students and staff in a{' '}
                <strong>fair, transparent and time-bound manner</strong>, thereby ensuring a healthy
                academic environment.
              </p>

              {/* Members heading */}
              <div className="grc-members-intro">
                The following members have been appointed to the Grievance Redressal Committee:
              </div>

              {/* Members list */}
              <div className="grc-members-list">
                {MEMBERS.map((m) => (
                  <div key={m.no} className="grc-member-item">
                    <div className="grc-member-num">{String(m.no).padStart(2, '0')}</div>
                    <div>
                      <div className="grc-member-name">{m.name}</div>
                      <div className="grc-member-role">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info badges row */}
              <div className="grc-info-badges">
                {[
                  { icon: 'fa-building-columns', label: 'AICTE Approved', sub: 'Constituted per AICTE norms & guidelines' },
                  { icon: 'fa-gavel', label: 'Natural Justice', sub: 'Inquiries based on principles of natural justice' },
                  { icon: 'fa-shield-halved', label: 'Healthy Environment', sub: 'Ensuring a positive academic atmosphere' },
                ].map((b, i) => (
                  <div key={i} className="grc-info-badge">
                    <div className="grc-info-badge-icon"><i className={`fa-solid ${b.icon}`} /></div>
                    <div>
                      <div className="grc-info-badge-text">{b.label}</div>
                      <div className="grc-info-badge-sub">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── IMAGE CONTAINER CARD ── */}
          <div className="grc-image-card grc-rv" style={{ transitionDelay: '0.2s' }}>
            <div className="grc-image-header">
              <i className="fa-solid fa-image" />
              <span>GRC — Official Document / Notice</span>
            </div>
            <div className="grc-image-container">
              <img
                src="/CTC NEW REACT WEBSITE/images/ICC/GRC.jpeg"
                alt="GRC Official Notice"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="grc-image-placeholder">
                      <i class="fa-solid fa-file-image"></i>
                      <p>GRC official notice / document image will appear here.<br/>Place the image at: images/GRC/grc-notice.png</p>
                    </div>`;
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
