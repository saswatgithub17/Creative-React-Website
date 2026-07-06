import { useState, useEffect } from 'react';

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
const MEMBERS = [
  { name: 'Mr. Manoj Kumar Das', role: 'Coordinator', icon: 'fa-user-tie' },
  { name: 'Mr. Krushnasish Mishra', role: 'Member', icon: 'fa-user' },
  { name: 'Mr. Bhabani Sankar Sahoo', role: 'Member', icon: 'fa-user' },
];

const TABS = [
  { id: 'about', label: 'About', icon: 'fa-circle-info' },
  { id: 'members', label: 'Members', icon: 'fa-users' },
];

const FUNCTIONS = [
  'Develop a system for conscious, consistent and catalytic action to improve academic and administrative performance.',
  'Channelize and systematize the efforts of an institution towards academic excellence.',
  'Promote measures for institutional functioning towards quality enhancement.',
  'Prepare the Annual Quality Assurance Report (AQAR) and submit to NAAC.',
  'Act as nodal agency for quality related activities of the institution.',
  'Organize workshops and seminars on quality-related themes.',
  'Document the various programmes / activities leading to quality improvement.',
  'Disseminate information on various quality parameters of higher education.',
  'Coordinate with other cells/committees to integrate quality enhancement initiatives.',
  'Facilitate creation of a learner-centric environment conducive to quality education.',
];

/* ─── Main Page ─── */
export default function IQAC() {
  useReveal();
  const [activeTab, setActiveTab] = useState('about');

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes iqacFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes iqacHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes iqacTabIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}
    .rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-r.visible{opacity:1;transform:none;}

    .iqac-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* HERO */
    .iqac-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:340px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .iqac-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(255,204,0,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,204,0,0.04) 1px,transparent 1px);
      background-size:48px 48px;
    }
    .iqac-hero-glow{
      position:absolute;width:500px;height:500px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-150px;right:-80px;filter:blur(50px);pointer-events:none;
    }
    .iqac-hero-content{
      position:relative;z-index:2;
      padding:72px 5% 56px;
      display:flex;align-items:center;justify-content:space-between;
      gap:32px;flex-wrap:wrap;
    }
    .iqac-hero-left{flex:1;min-width:280px;}
    .iqac-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:iqacHeroIn 0.6s 0.1s ease both;
    }
    .iqac-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:iqacHeroIn 0.6s 0.2s ease both;
    }
    .iqac-hero-title em{font-style:normal;color:#ffcc00;}
    .iqac-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:iqacHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .iqac-hero-pills{display:flex;flex-wrap:wrap;gap:10px;animation:iqacHeroIn 0.6s 0.4s ease both;}
    .iqac-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }

    /* Wave */
    .iqac-wave{height:56px;margin-top:-1px;position:relative;}
    .iqac-wave svg{width:100%;height:100%;display:block;}

    /* MAIN */
    .iqac-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* TAB BAR */
    .iqac-tab-bar{
      display:flex;gap:6px;background:#fff;
      border-radius:18px;padding:6px;
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;flex-wrap:wrap;
    }
    .iqac-tab{
      flex:1;min-width:0;
      display:flex;align-items:center;justify-content:center;gap:7px;
      padding:12px 14px;border:none;border-radius:12px;
      cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.8rem;font-weight:700;letter-spacing:0.2px;
      transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
      background:transparent;color:#4a6080;white-space:nowrap;
    }
    .iqac-tab i{font-size:0.75rem;transition:transform 0.25s;}
    .iqac-tab.active{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 6px 20px rgba(12,35,64,0.3);
    }
    .iqac-tab.active i{transform:scale(1.15);}
    .iqac-tab:not(.active):hover{background:#f0f4f8;color:#0c2340;}

    /* CONTENT CARD */
    .iqac-content-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
    }
    .iqac-content-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .iqac-content-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .iqac-content-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .iqac-content-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .iqac-content-body{padding:36px;}

    /* ABOUT */
    .iqac-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px;}
    .iqac-about-text{font-size:0.92rem;line-height:1.85;color:#334155;font-weight:500;}
    .iqac-about-text strong{color:#0c2340;}
    .iqac-legal-badges{display:flex;flex-direction:column;gap:10px;}
    .iqac-legal-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      display:flex;align-items:center;gap:12px;
    }
    .iqac-legal-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .iqac-legal-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .iqac-legal-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* FUNCTIONS */
    .iqac-fn-section{margin-top:32px;}
    .iqac-fn-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .iqac-fn-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#ffcc00;
    }
    .iqac-fn-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .iqac-fn-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .iqac-fn-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .iqac-fn-item{
      display:flex;align-items:flex-start;gap:12px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;transition:all 0.22s;
    }
    .iqac-fn-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .iqac-fn-num{
      width:28px;height:28px;border-radius:8px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.65rem;font-weight:900;color:#ffcc00;margin-top:1px;
    }
    .iqac-fn-text{font-size:0.8rem;font-weight:600;color:#0c2340;line-height:1.55;}

    /* MEMBERS */
    .iqac-members-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;}
    .iqac-member-card{
      background:#f8fafc;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:18px;padding:24px 20px;
      display:flex;flex-direction:column;align-items:center;text-align:center;
      transition:all 0.25s;
    }
    .iqac-member-card:hover{background:#f0f6ff;transform:translateY(-4px);box-shadow:0 12px 30px rgba(12,35,64,0.12);}
    .iqac-member-avatar{
      width:72px;height:72px;border-radius:50%;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.5rem;color:#ffcc00;margin-bottom:16px;
      box-shadow:0 8px 20px rgba(12,35,64,0.25);
    }
    .iqac-member-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.95rem;font-weight:800;color:#0c2340;margin-bottom:6px;line-height:1.3;}
    .iqac-member-role{
      display:inline-block;background:rgba(12,35,64,0.08);
      border-radius:20px;padding:4px 14px;
      font-size:0.72rem;font-weight:700;color:#1a3a6b;
      border:1px solid rgba(12,35,64,0.12);
    }
    .iqac-member-card:first-child .iqac-member-role{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;border-color:transparent;
    }

    @media(max-width:900px){
      .iqac-about-grid{grid-template-columns:1fr;}
      .iqac-fn-grid{grid-template-columns:1fr;}
    }
    @media(max-width:600px){
      .iqac-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .iqac-content-body{padding:24px 20px;}
    }
  `;

  const TAB_META = {
    about: { title: 'About IQAC', sub: 'Internal Quality Assurance Cell · Creative Techno College' },
    members: { title: 'Cell Members', sub: 'Constituted as per NAAC & UGC guidelines' },
  };

  return (
    <>
      <style>{css}</style>
      <div className="iqac-page">

        {/* HERO */}
        <div className="iqac-hero">
          <div className="iqac-hero-grid" />
          <div className="iqac-hero-glow" />
          <div className="iqac-hero-content">
            <div className="iqac-hero-left">
              <div className="iqac-hero-badge">
                <i className="fa-solid fa-star" /> IQAC · NAAC Framework
              </div>
              <h1 className="iqac-hero-title">
                Internal Quality<br /><em>Assurance</em><br />Cell
              </h1>
              <p className="iqac-hero-sub">
                Driving continuous quality enhancement and institutional excellence at Creative Techno College through systematic quality assurance mechanisms.
              </p>
              <div className="iqac-hero-pills">
                {[
                  { icon: 'fa-chart-line', text: 'Quality Enhancement' },
                  { icon: 'fa-file-lines', text: 'AQAR Reporting' },
                  { icon: 'fa-graduation-cap', text: 'NAAC Compliant' },
                  { icon: 'fa-building-columns', text: 'UGC Mandated' },
                ].map((p, i) => (
                  <span key={i} className="iqac-hero-pill">
                    <i className={`fa-solid ${p.icon}`} style={{ color: '#ffcc00', fontSize: '0.65rem' }} />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="iqac-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* MAIN */}
        <div className="iqac-main">

          {/* Tab bar */}
          <div className="iqac-tab-bar rv">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`iqac-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content card */}
          <div className="iqac-content-card rv" style={{ transitionDelay: '0.1s' }}>
            <div className="iqac-content-header">
              <div className="iqac-content-header-title">{TAB_META[activeTab].title}</div>
              <div className="iqac-content-header-sub">{TAB_META[activeTab].sub}</div>
            </div>

            <div className="iqac-content-body">

              {/* ABOUT */}
              {activeTab === 'about' && (
                <div style={{ animation: 'iqacTabIn 0.4s ease both' }}>
                  <div className="iqac-about-grid">
                    <div className="iqac-about-text">
                      <p>
                        The <strong>Internal Quality Assurance Cell (IQAC)</strong> is a quality sustenance measure established in <strong>Creative Techno College</strong> as per the guidelines of the <strong>National Assessment and Accreditation Council (NAAC)</strong> and the University Grants Commission (UGC).
                      </p>
                      <p style={{ marginTop: 16 }}>
                        Since quality enhancement is a continuous process, IQAC becomes a driving force for ushering in quality by working out intervention strategies, monitoring their implementation and periodically reviewing the quality of the academic processes in the institution. IQAC shall channel and systematize the efforts of an institution towards academic excellence.
                      </p>
                      <p style={{ marginTop: 16 }}>
                        The cell is responsible for preparing the <strong>Annual Quality Assurance Report (AQAR)</strong> and submitting it to NAAC, thereby ensuring that the institution continually benchmarks its performance against national standards.
                      </p>
                    </div>
                    <div className="iqac-legal-badges">
                      {[
                        { icon: 'fa-star', label: 'NAAC Framework', sub: 'Quality assurance in Higher Education Institutions' },
                        { icon: 'fa-scroll', label: 'UGC Guidelines', sub: 'Establishment of IQAC in colleges and universities' },
                        { icon: 'fa-file-lines', label: 'AQAR Submission', sub: 'Annual Quality Assurance Report to NAAC' },
                        { icon: 'fa-chart-line', label: 'Continuous Improvement', sub: 'Systematic enhancement of academic and administrative quality' },
                      ].map((b, i) => (
                        <div key={i} className="iqac-legal-badge">
                          <div className="iqac-legal-badge-icon"><i className={`fa-solid ${b.icon}`} /></div>
                          <div>
                            <div className="iqac-legal-badge-text">{b.label}</div>
                            <div className="iqac-legal-badge-sub">{b.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Functions */}
                  <div className="iqac-fn-section">
                    <div className="iqac-fn-header">
                      <div className="iqac-fn-icon-wrap"><i className="fa-solid fa-sitemap" /></div>
                      <div>
                        <div className="iqac-fn-title">Functions & Responsibilities</div>
                        <div className="iqac-fn-sub">Core mandates of the Internal Quality Assurance Cell</div>
                      </div>
                    </div>
                    <div className="iqac-fn-grid">
                      {FUNCTIONS.map((fn, i) => (
                        <div key={i} className="iqac-fn-item">
                          <div className="iqac-fn-num">{String(i + 1).padStart(2, '0')}</div>
                          <div className="iqac-fn-text">{fn}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MEMBERS */}
              {activeTab === 'members' && (
                <div style={{ animation: 'iqacTabIn 0.4s ease both' }}>
                  <div className="iqac-members-grid">
                    {MEMBERS.map((m, i) => (
                      <div key={i} className="iqac-member-card">
                        <div className="iqac-member-avatar">
                          <i className={`fa-solid ${m.icon}`} />
                        </div>
                        <div className="iqac-member-name">{m.name}</div>
                        <span className="iqac-member-role">{m.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 18, marginTop: 28 }}>
            {[
              {
                icon: 'fa-envelope', bg: 'linear-gradient(135deg,#0c2340,#1a3a6b)', color: '#0c2340',
                title: 'Contact IQAC', sub: 'iqac@creativecollege.in',
                desc: 'Reach out to the IQAC team for quality-related queries, suggestions, or feedback on institutional processes.',
              },
              {
                icon: 'fa-file-lines', bg: 'linear-gradient(135deg,#78350f,#d97706)', color: '#d97706',
                title: 'AQAR Reports', sub: 'Annual Submissions',
                desc: 'Annual Quality Assurance Reports are prepared and submitted to NAAC on a regular basis as mandated.',
              },
              {
                icon: 'fa-chart-line', bg: 'linear-gradient(135deg,#064e3b,#059669)', color: '#059669',
                title: 'Quality Benchmarks', sub: 'NAAC Standards',
                desc: 'All academic and administrative processes are benchmarked against NAAC quality parameters.',
              },
            ].map((c, i) => (
              <div key={i} className="rv" style={{
                background: '#fff', borderRadius: 18, padding: '24px',
                border: '1px solid rgba(10,22,40,0.07)',
                boxShadow: '0 4px 20px rgba(10,22,40,0.07)',
                transitionDelay: `${i * 0.08}s`,
              }}>
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
