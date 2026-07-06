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
  { name: 'Mr. Satya Shiva Sundar Dehury', role: 'Member', icon: 'fa-user' },
  { name: 'Mrs. Monika Sahu', role: 'Member', icon: 'fa-user' },
];

const TABS = [
  { id: 'about', label: 'About', icon: 'fa-circle-info' },
  { id: 'members', label: 'Members', icon: 'fa-users' },
];

const OBJECTIVES = [
  'Promote equal opportunity for all students and staff regardless of background.',
  'Implement and monitor facilities for differently-abled (Divyangjan) persons.',
  'Ensure accessibility of physical infrastructure and digital resources.',
  'Facilitate awareness programs on equal opportunity and inclusion.',
  'Address grievances related to discrimination or lack of equal opportunity.',
  'Coordinate with administration to implement government EO policies.',
  'Monitor implementation of reservation and welfare schemes.',
  'Create an inclusive environment that celebrates diversity and equity.',
];

/* ─── Main Page ─── */
export default function EQFC() {
  useReveal();
  const [activeTab, setActiveTab] = useState('about');

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes eqfcFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes eqfcHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes eqfcTabIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}
    .rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-r.visible{opacity:1;transform:none;}

    .eqfc-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* HERO */
    .eqfc-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:340px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .eqfc-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(255,204,0,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,204,0,0.04) 1px,transparent 1px);
      background-size:48px 48px;
    }
    .eqfc-hero-glow{
      position:absolute;width:500px;height:500px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-150px;right:-80px;filter:blur(50px);pointer-events:none;
    }
    .eqfc-hero-content{
      position:relative;z-index:2;
      padding:72px 5% 56px;
      display:flex;align-items:center;justify-content:space-between;
      gap:32px;flex-wrap:wrap;
    }
    .eqfc-hero-left{flex:1;min-width:280px;}
    .eqfc-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:eqfcHeroIn 0.6s 0.1s ease both;
    }
    .eqfc-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:eqfcHeroIn 0.6s 0.2s ease both;
    }
    .eqfc-hero-title em{font-style:normal;color:#ffcc00;}
    .eqfc-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:eqfcHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .eqfc-hero-pills{display:flex;flex-wrap:wrap;gap:10px;animation:eqfcHeroIn 0.6s 0.4s ease both;}
    .eqfc-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }

    /* Wave */
    .eqfc-wave{height:56px;margin-top:-1px;position:relative;}
    .eqfc-wave svg{width:100%;height:100%;display:block;}

    /* MAIN */
    .eqfc-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* TAB BAR */
    .eqfc-tab-bar{
      display:flex;gap:6px;background:#fff;
      border-radius:18px;padding:6px;
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;flex-wrap:wrap;
    }
    .eqfc-tab{
      flex:1;min-width:0;
      display:flex;align-items:center;justify-content:center;gap:7px;
      padding:12px 14px;border:none;border-radius:12px;
      cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.8rem;font-weight:700;letter-spacing:0.2px;
      transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
      background:transparent;color:#4a6080;white-space:nowrap;
    }
    .eqfc-tab i{font-size:0.75rem;transition:transform 0.25s;}
    .eqfc-tab.active{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 6px 20px rgba(12,35,64,0.3);
    }
    .eqfc-tab.active i{transform:scale(1.15);}
    .eqfc-tab:not(.active):hover{background:#f0f4f8;color:#0c2340;}

    /* CONTENT CARD */
    .eqfc-content-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
    }
    .eqfc-content-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .eqfc-content-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .eqfc-content-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .eqfc-content-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .eqfc-content-body{padding:36px;}

    /* ABOUT */
    .eqfc-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px;}
    .eqfc-about-text{font-size:0.92rem;line-height:1.85;color:#334155;font-weight:500;}
    .eqfc-about-text strong{color:#0c2340;}
    .eqfc-legal-badges{display:flex;flex-direction:column;gap:10px;}
    .eqfc-legal-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      display:flex;align-items:center;gap:12px;
    }
    .eqfc-legal-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .eqfc-legal-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .eqfc-legal-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* OBJECTIVES */
    .eqfc-obj-section{margin-top:32px;}
    .eqfc-obj-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .eqfc-obj-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#ffcc00;
    }
    .eqfc-obj-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .eqfc-obj-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .eqfc-obj-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .eqfc-obj-item{
      display:flex;align-items:flex-start;gap:12px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;transition:all 0.22s;
    }
    .eqfc-obj-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .eqfc-obj-num{
      width:28px;height:28px;border-radius:8px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.65rem;font-weight:900;color:#ffcc00;margin-top:1px;
    }
    .eqfc-obj-text{font-size:0.8rem;font-weight:600;color:#0c2340;line-height:1.55;}

    /* MEMBERS */
    .eqfc-members-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;}
    .eqfc-member-card{
      background:#f8fafc;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:18px;padding:24px 20px;
      display:flex;flex-direction:column;align-items:center;text-align:center;
      transition:all 0.25s;
    }
    .eqfc-member-card:hover{background:#f0f6ff;transform:translateY(-4px);box-shadow:0 12px 30px rgba(12,35,64,0.12);}
    .eqfc-member-avatar{
      width:72px;height:72px;border-radius:50%;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.5rem;color:#ffcc00;margin-bottom:16px;
      box-shadow:0 8px 20px rgba(12,35,64,0.25);
    }
    .eqfc-member-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.95rem;font-weight:800;color:#0c2340;margin-bottom:6px;line-height:1.3;}
    .eqfc-member-role{
      display:inline-block;background:rgba(12,35,64,0.08);
      border-radius:20px;padding:4px 14px;
      font-size:0.72rem;font-weight:700;color:#1a3a6b;
      border:1px solid rgba(12,35,64,0.12);
    }
    .eqfc-member-card:first-child .eqfc-member-role{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;border-color:transparent;
    }

    @media(max-width:900px){
      .eqfc-about-grid{grid-template-columns:1fr;}
      .eqfc-obj-grid{grid-template-columns:1fr;}
    }
    @media(max-width:600px){
      .eqfc-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .eqfc-content-body{padding:24px 20px;}
    }
  `;

  const TAB_META = {
    about: { title: 'About EQFC', sub: 'Equal Opportunity Facilities Cell · Creative Techno College' },
    members: { title: 'Cell Members', sub: 'Constituted as per UGC & Government of India guidelines' },
  };

  return (
    <>
      <style>{css}</style>
      <div className="eqfc-page">

        {/* HERO */}
        <div className="eqfc-hero">
          <div className="eqfc-hero-grid" />
          <div className="eqfc-hero-glow" />
          <div className="eqfc-hero-content">
            <div className="eqfc-hero-left">
              <div className="eqfc-hero-badge">
                <i className="fa-solid fa-handshake-angle" /> EQFC · Equal Opportunity Cell
              </div>
              <h1 className="eqfc-hero-title">
                Equal Opportunity<br /><em>Facilities</em><br />Cell
              </h1>
              <p className="eqfc-hero-sub">
                Ensuring equal access, inclusive facilities, and equitable opportunities for every student and staff member at Creative Techno College.
              </p>
              <div className="eqfc-hero-pills">
                {[
                  { icon: 'fa-universal-access', text: 'Accessibility' },
                  { icon: 'fa-hands-holding-circle', text: 'Inclusive Campus' },
                  { icon: 'fa-scale-balanced', text: 'Equal Rights' },
                  { icon: 'fa-building-columns', text: 'UGC Mandated' },
                ].map((p, i) => (
                  <span key={i} className="eqfc-hero-pill">
                    <i className={`fa-solid ${p.icon}`} style={{ color: '#ffcc00', fontSize: '0.65rem' }} />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="eqfc-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* MAIN */}
        <div className="eqfc-main">

          {/* Tab bar */}
          <div className="eqfc-tab-bar rv">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`eqfc-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content card */}
          <div className="eqfc-content-card rv" style={{ transitionDelay: '0.1s' }}>
            <div className="eqfc-content-header">
              <div className="eqfc-content-header-title">{TAB_META[activeTab].title}</div>
              <div className="eqfc-content-header-sub">{TAB_META[activeTab].sub}</div>
            </div>

            <div className="eqfc-content-body">

              {/* ABOUT */}
              {activeTab === 'about' && (
                <div style={{ animation: 'eqfcTabIn 0.4s ease both' }}>
                  <div className="eqfc-about-grid">
                    <div className="eqfc-about-text">
                      <p>
                        The <strong>Equal Opportunity Facilities Cell (EQFC)</strong> at Creative Techno College is established in accordance with the guidelines of the <strong>University Grants Commission (UGC)</strong> to ensure equal opportunity and inclusive access for all students and staff, with special focus on marginalised and differently-abled (Divyangjan) individuals.
                      </p>
                      <p style={{ marginTop: 16 }}>
                        The cell works to create a <strong>barrier-free, accessible environment</strong> within the institution and ensures that all government-mandated equal opportunity provisions are implemented effectively. It acts as a liaison between students, staff, and administration to resolve issues of access and equity.
                      </p>
                      <p style={{ marginTop: 16 }}>
                        The EQFC is committed to promoting a culture of <strong>diversity, dignity and inclusion</strong> — ensuring that no member of the college community faces discrimination or is denied access to institutional facilities and opportunities.
                      </p>
                    </div>
                    <div className="eqfc-legal-badges">
                      {[
                        { icon: 'fa-universal-access', label: 'Rights of Persons with Disabilities', sub: 'RPwD Act 2016 — Accessible education and infrastructure' },
                        { icon: 'fa-scroll', label: 'UGC Equal Opportunity Guidelines', sub: 'Establishment of Equal Opportunity Cells in HEIs' },
                        { icon: 'fa-landmark', label: 'Government of India', sub: 'National Policy on Education — Equity & inclusion mandate' },
                        { icon: 'fa-book-open', label: 'AICTE Policy', sub: 'Equal access and inclusive facilities in technical institutions' },
                      ].map((b, i) => (
                        <div key={i} className="eqfc-legal-badge">
                          <div className="eqfc-legal-badge-icon"><i className={`fa-solid ${b.icon}`} /></div>
                          <div>
                            <div className="eqfc-legal-badge-text">{b.label}</div>
                            <div className="eqfc-legal-badge-sub">{b.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="eqfc-obj-section">
                    <div className="eqfc-obj-header">
                      <div className="eqfc-obj-icon-wrap"><i className="fa-solid fa-sitemap" /></div>
                      <div>
                        <div className="eqfc-obj-title">Objectives & Responsibilities</div>
                        <div className="eqfc-obj-sub">Core mandates of the Equal Opportunity Facilities Cell</div>
                      </div>
                    </div>
                    <div className="eqfc-obj-grid">
                      {OBJECTIVES.map((obj, i) => (
                        <div key={i} className="eqfc-obj-item">
                          <div className="eqfc-obj-num">{String(i + 1).padStart(2, '0')}</div>
                          <div className="eqfc-obj-text">{obj}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MEMBERS */}
              {activeTab === 'members' && (
                <div style={{ animation: 'eqfcTabIn 0.4s ease both' }}>
                  <div className="eqfc-members-grid">
                    {MEMBERS.map((m, i) => (
                      <div key={i} className="eqfc-member-card">
                        <div className="eqfc-member-avatar">
                          <i className={`fa-solid ${m.icon}`} />
                        </div>
                        <div className="eqfc-member-name">{m.name}</div>
                        <span className="eqfc-member-role">{m.role}</span>
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
                title: 'Contact EQFC', sub: 'eqfc@creativecollege.in',
                desc: 'Reach out to the EQFC for queries about equal opportunity, accessibility, or to report any discrimination.',
              },
              {
                icon: 'fa-universal-access', bg: 'linear-gradient(135deg,#78350f,#d97706)', color: '#d97706',
                title: 'Accessibility Support', sub: 'For Differently-Abled',
                desc: 'The cell ensures accessible infrastructure and special provisions for differently-abled students and staff.',
              },
              {
                icon: 'fa-shield-halved', bg: 'linear-gradient(135deg,#064e3b,#059669)', color: '#059669',
                title: 'Confidential Process', sub: '100% Protected',
                desc: 'All grievances and complaints are handled with complete confidentiality and respect for dignity.',
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
