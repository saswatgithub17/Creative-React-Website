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
  { name: 'Mr. Subhrajyoti Behera', role: 'Chairperson', icon: 'fa-user-tie' },
  { name: 'Mrs. Kumudini Dei', role: 'Member', icon: 'fa-user' },
  { name: 'Ms. Ambika Behera', role: 'Member', icon: 'fa-user' },
  { name: 'Ms. Arghyarupa Behera', role: 'Member', icon: 'fa-user' },
  { name: 'Mr. Swastik Ranjan Sahoo', role: 'Member', icon: 'fa-user' },
];

const TABS = [
  { id: 'about', label: 'About', icon: 'fa-circle-info' },
  { id: 'members', label: 'Members', icon: 'fa-users' },
];

const OBJECTIVES = [
  'Safeguard the rights and interests of SC/ST students and staff.',
  'Prevent discrimination and ensure equal opportunity in all academic activities.',
  'Address grievances of SC/ST community members promptly and fairly.',
  'Promote inclusive environment free from caste-based bias.',
  'Facilitate government scholarship and welfare scheme awareness.',
  'Coordinate with administration for special provisions and reservations.',
  'Organize sensitization programs to foster respect and inclusion.',
  'Monitor and report on implementation of SC/ST policy guidelines.',
];

/* ─── Main Page ─── */
export default function SCST() {
  useReveal();
  const [activeTab, setActiveTab] = useState('about');

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes scstFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes scstHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes scstTabIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
    @keyframes scstShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}
    .rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-r.visible{opacity:1;transform:none;}

    .scst-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* HERO */
    .scst-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:340px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .scst-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(255,204,0,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,204,0,0.04) 1px,transparent 1px);
      background-size:48px 48px;
    }
    .scst-hero-glow{
      position:absolute;width:500px;height:500px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-150px;right:-80px;filter:blur(50px);pointer-events:none;
    }
    .scst-hero-content{
      position:relative;z-index:2;
      padding:72px 5% 56px;
      display:flex;align-items:center;justify-content:space-between;
      gap:32px;flex-wrap:wrap;
    }
    .scst-hero-left{flex:1;min-width:280px;}
    .scst-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:scstHeroIn 0.6s 0.1s ease both;
    }
    .scst-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:scstHeroIn 0.6s 0.2s ease both;
    }
    .scst-hero-title em{font-style:normal;color:#ffcc00;}
    .scst-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:scstHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .scst-hero-pills{display:flex;flex-wrap:wrap;gap:10px;animation:scstHeroIn 0.6s 0.4s ease both;}
    .scst-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }

    /* Wave */
    .scst-wave{height:56px;margin-top:-1px;position:relative;}
    .scst-wave svg{width:100%;height:100%;display:block;}

    /* MAIN */
    .scst-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* TAB BAR */
    .scst-tab-bar{
      display:flex;gap:6px;background:#fff;
      border-radius:18px;padding:6px;
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;flex-wrap:wrap;
    }
    .scst-tab{
      flex:1;min-width:0;
      display:flex;align-items:center;justify-content:center;gap:7px;
      padding:12px 14px;border:none;border-radius:12px;
      cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.8rem;font-weight:700;letter-spacing:0.2px;
      transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
      background:transparent;color:#4a6080;white-space:nowrap;
    }
    .scst-tab i{font-size:0.75rem;transition:transform 0.25s;}
    .scst-tab.active{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 6px 20px rgba(12,35,64,0.3);
    }
    .scst-tab.active i{transform:scale(1.15);}
    .scst-tab:not(.active):hover{background:#f0f4f8;color:#0c2340;}

    /* CONTENT CARD */
    .scst-content-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
    }
    .scst-content-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .scst-content-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .scst-content-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .scst-content-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .scst-content-body{padding:36px;}

    /* ABOUT */
    .scst-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px;}
    .scst-about-text{font-size:0.92rem;line-height:1.85;color:#334155;font-weight:500;}
    .scst-about-text strong{color:#0c2340;}
    .scst-legal-badges{display:flex;flex-direction:column;gap:10px;}
    .scst-legal-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      display:flex;align-items:center;gap:12px;
    }
    .scst-legal-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .scst-legal-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .scst-legal-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* OBJECTIVES */
    .scst-obj-section{margin-top:32px;}
    .scst-obj-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .scst-obj-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#ffcc00;
    }
    .scst-obj-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .scst-obj-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .scst-obj-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .scst-obj-item{
      display:flex;align-items:flex-start;gap:12px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;transition:all 0.22s;
    }
    .scst-obj-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .scst-obj-num{
      width:28px;height:28px;border-radius:8px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.65rem;font-weight:900;color:#ffcc00;margin-top:1px;
    }
    .scst-obj-text{font-size:0.8rem;font-weight:600;color:#0c2340;line-height:1.55;}

    /* MEMBERS */
    .scst-members-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;}
    .scst-member-card{
      background:#f8fafc;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:18px;padding:24px 20px;
      display:flex;flex-direction:column;align-items:center;text-align:center;
      transition:all 0.25s;
    }
    .scst-member-card:hover{background:#f0f6ff;transform:translateY(-4px);box-shadow:0 12px 30px rgba(12,35,64,0.12);}
    .scst-member-avatar{
      width:72px;height:72px;border-radius:50%;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.5rem;color:#ffcc00;margin-bottom:16px;
      box-shadow:0 8px 20px rgba(12,35,64,0.25);
    }
    .scst-member-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.95rem;font-weight:800;color:#0c2340;margin-bottom:6px;line-height:1.3;}
    .scst-member-role{
      display:inline-block;background:rgba(12,35,64,0.08);
      border-radius:20px;padding:4px 14px;
      font-size:0.72rem;font-weight:700;color:#1a3a6b;
      border:1px solid rgba(12,35,64,0.12);
    }
    .scst-member-card:first-child .scst-member-role{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;border-color:transparent;
    }

    @media(max-width:900px){
      .scst-about-grid{grid-template-columns:1fr;}
      .scst-obj-grid{grid-template-columns:1fr;}
    }
    @media(max-width:600px){
      .scst-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .scst-content-body{padding:24px 20px;}
    }
  `;

  const TAB_META = {
    about: { title: 'About the SC/ST Committee', sub: 'Mandate, objectives & scope · Creative Techno College' },
    members: { title: 'Committee Members', sub: 'Constituted as per UGC & Government guidelines' },
  };

  return (
    <>
      <style>{css}</style>
      <div className="scst-page">

        {/* HERO */}
        <div className="scst-hero">
          <div className="scst-hero-grid" />
          <div className="scst-hero-glow" />
          <div className="scst-hero-content">
            <div className="scst-hero-left">
              <div className="scst-hero-badge">
                <i className="fa-solid fa-people-group" /> SC/ST Committee · CTC
              </div>
              <h1 className="scst-hero-title">
                SC/ST<br /><em>Welfare</em><br />Committee
              </h1>
              <p className="scst-hero-sub">
                Dedicated to protecting the rights, welfare, and equal opportunity for SC/ST students and staff at Creative Techno College.
              </p>
              <div className="scst-hero-pills">
                {[
                  { icon: 'fa-scale-balanced', text: 'Equal Opportunity' },
                  { icon: 'fa-shield-halved', text: 'Anti-Discrimination' },
                  { icon: 'fa-hands-holding-circle', text: 'Inclusive Campus' },
                  { icon: 'fa-building-columns', text: 'UGC Mandated' },
                ].map((p, i) => (
                  <span key={i} className="scst-hero-pill">
                    <i className={`fa-solid ${p.icon}`} style={{ color: '#ffcc00', fontSize: '0.65rem' }} />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="scst-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* MAIN */}
        <div className="scst-main">

          {/* Tab bar */}
          <div className="scst-tab-bar rv">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`scst-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content card */}
          <div className="scst-content-card rv" style={{ transitionDelay: '0.1s' }}>
            <div className="scst-content-header">
              <div className="scst-content-header-title">{TAB_META[activeTab].title}</div>
              <div className="scst-content-header-sub">{TAB_META[activeTab].sub}</div>
            </div>

            <div className="scst-content-body">

              {/* ABOUT */}
              {activeTab === 'about' && (
                <div style={{ animation: 'scstTabIn 0.4s ease both' }}>
                  <div className="scst-about-grid">
                    <div className="scst-about-text">
                      <p>
                        The <strong>SC/ST Welfare Committee</strong> at Creative Techno College is constituted in accordance with the directives of the <strong>University Grants Commission (UGC)</strong> and the Government of India to ensure the welfare and equal opportunity for students and staff belonging to Scheduled Castes (SC) and Scheduled Tribes (ST).
                      </p>
                      <p style={{ marginTop: 16 }}>
                        The committee ensures that all SC/ST community members are provided a <strong>bias-free, inclusive academic environment</strong> and that their constitutional rights are upheld within the institution. It acts as a bridge between the administration and the SC/ST community, facilitating grievance redressal and policy implementation.
                      </p>
                      <p style={{ marginTop: 16 }}>
                        The committee actively promotes <strong>awareness of government welfare schemes</strong>, scholarships, and reservation policies to ensure maximum benefit reaches the eligible beneficiaries.
                      </p>
                    </div>
                    <div className="scst-legal-badges">
                      {[
                        { icon: 'fa-building-columns', label: 'Constitutional Mandate', sub: 'Articles 15, 16, 46 — Rights of SC/ST communities' },
                        { icon: 'fa-scroll', label: 'UGC Guidelines', sub: 'Establishment of SC/ST cells in Higher Education Institutions' },
                        { icon: 'fa-landmark', label: 'Government of India', sub: 'Ministry of Social Justice & Empowerment directives' },
                        { icon: 'fa-book-open', label: 'AICTE Policy', sub: 'Equal opportunity & anti-discrimination in technical institutions' },
                      ].map((b, i) => (
                        <div key={i} className="scst-legal-badge">
                          <div className="scst-legal-badge-icon"><i className={`fa-solid ${b.icon}`} /></div>
                          <div>
                            <div className="scst-legal-badge-text">{b.label}</div>
                            <div className="scst-legal-badge-sub">{b.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="scst-obj-section">
                    <div className="scst-obj-header">
                      <div className="scst-obj-icon-wrap"><i className="fa-solid fa-sitemap" /></div>
                      <div>
                        <div className="scst-obj-title">Objectives & Responsibilities</div>
                        <div className="scst-obj-sub">Core mandates of the SC/ST Welfare Committee</div>
                      </div>
                    </div>
                    <div className="scst-obj-grid">
                      {OBJECTIVES.map((obj, i) => (
                        <div key={i} className="scst-obj-item">
                          <div className="scst-obj-num">{String(i + 1).padStart(2, '0')}</div>
                          <div className="scst-obj-text">{obj}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MEMBERS */}
              {activeTab === 'members' && (
                <div style={{ animation: 'scstTabIn 0.4s ease both' }}>
                  <div className="scst-members-grid">
                    {MEMBERS.map((m, i) => (
                      <div key={i} className="scst-member-card">
                        <div className="scst-member-avatar">
                          <i className={`fa-solid ${m.icon}`} />
                        </div>
                        <div className="scst-member-name">{m.name}</div>
                        <span className="scst-member-role">{m.role}</span>
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
                title: 'Contact Committee', sub: 'ctc@creativecollege.in',
                desc: 'Reach out to the SC/ST Welfare Committee directly for guidance, grievance redressal, or support.',
              },
              {
                icon: 'fa-graduation-cap', bg: 'linear-gradient(135deg,#78350f,#d97706)', color: '#d97706',
                title: 'Scholarship Support', sub: 'Government Welfare Schemes',
                desc: 'The committee helps students navigate and access government scholarships and welfare benefits.',
              },
              {
                icon: 'fa-shield-halved', bg: 'linear-gradient(135deg,#064e3b,#059669)', color: '#059669',
                title: 'Zero Discrimination', sub: '100% Confidential',
                desc: 'All complaints and grievances are handled with complete confidentiality and sensitivity.',
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
