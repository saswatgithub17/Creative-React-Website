import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Data ─── */
const TEAM = [
  { name: 'Mr. Bhabani Shankar Sahoo', role: 'Placement Head', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg', icon: 'fa-briefcase', color: '#0c2340' },
  { name: 'Mr. Subhrajyoti Behera', role: 'Activity Head', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg', icon: 'fa-calendar-check', color: '#1a3a6b' },
];

const RECRUITERS = [
  { name: 'Wipro', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png', color: '#8b2be2' },
  { name: 'TCS', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg', color: '#0a2472' },
  { name: 'LTI Mindtree', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png', color: '#00aa44' },
  { name: 'Cognizant', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png', color: '#0066cc' },
  { name: 'Infosys', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png', color: '#007acc' },
  { name: 'Capgemini', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png', color: '#0070ad' },
  { name: 'Deloitte', logo: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg', color: '#86bc25' },
];

const OBJECTIVES = [
  { icon: 'fa-rocket', title: 'Enhance Employability', desc: 'Equip students with the necessary knowledge and skills to secure employment in leading companies.' },
  { icon: 'fa-people-group', title: 'Holistic Development', desc: 'Foster both technical and soft skills to prepare students for every stage of the recruitment process.' },
  { icon: 'fa-industry', title: 'Industry Readiness', desc: 'Align training modules with current market demands and industry expectations.' },
  { icon: 'fa-door-open', title: 'Inclusive Opportunities', desc: 'Provide placement opportunities across a diverse range of companies, including MNCs and local firms.' },
  { icon: 'fa-arrows-rotate', title: 'Continuous Improvement', desc: 'Regularly update and refine the training program based on feedback and evolving market trends.' },
];

const ACTIVITIES = [
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Workshop.jpg', title: 'Workshops', desc: 'Hands-on sessions for skill building.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Internship.jpg', title: 'Internships', desc: 'Real-world work experience for students.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/LiveProject.jpg', title: 'Live Projects', desc: 'Authentic projects to apply knowledge.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Webinar.jpg', title: 'Webinars', desc: 'Virtual expert sessions on trending topics.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/QuantPreparation.jpg', title: 'Quants Prep', desc: 'Sharpen analytical & numerical skills.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/MockInterview.jpg', title: 'Mock Interviews', desc: 'Simulated interviews for confidence.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/ProgrammingSession.jpg', title: 'Programming Session', desc: 'Dedicated sessions for coding clarity.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/SoftSkill.jpg', title: 'Soft Skills', desc: 'Training in communication & teamwork.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Grooming.jpg', title: 'Grooming', desc: 'Personality & etiquette improvement.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Seminar.jpg', title: 'Seminar', desc: 'Develop stage confidence.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Presentation.jpg', title: 'Presentation', desc: 'Learn impactful presentation skills.' },
  { img: '/CTC NEW REACT WEBSITE/images/DevelopmentProgram/GroupDiscussion.jpg', title: 'Group Discussion', desc: 'Improve teamwork & critical thinking.' },
];

const MODULES = [
  {
    num: '01', title: 'Aptitude & Reasoning', icon: 'fa-brain',
    desc: 'Regular practice sessions and mock tests to strengthen problem-solving and analytical skills.',
    tags: ['Quantitative', 'Logical Reasoning', 'Mock Tests'],
    color: '#0c2340',
  },
  {
    num: '02', title: 'Technical Skills', icon: 'fa-code',
    desc: 'Intensive workshops and hands-on projects for BCA and B.Sc. (CS) students to enhance practical knowledge.',
    tags: ['Programming', 'Hands-on Projects', 'DSA'],
    color: '#1a3a6b',
  },
  {
    num: '03', title: 'Soft Skills & Interview Prep', icon: 'fa-comments',
    desc: 'Role-playing exercises, group discussions, and interview simulations to improve communication and confidence.',
    tags: ['Communication', 'Group Discussion', 'Mock Interview'],
    color: '#2d5a8e',
  },
];

const PROGRAMS = [
  { title: 'JOB-A-THON 2022', icon: 'fa-trophy', sub: 'First edition — campus hiring drive', link: null },
  { title: 'JOB-A-THON 2023', icon: 'fa-medal', sub: 'Expanded to 15+ companies', link: null },
  { title: 'JOB-A-THON 2024', icon: 'fa-star', sub: 'Record placements — 60+ students', link: null },
  { title: 'MISSION — 40', icon: 'fa-bullseye', sub: '2025 drive — 40 MNC targets', link: '/placement/mission40' },
];

const INTERNSHIP_GOALS = [
  {
    title: 'Enhance Technical Skills',
    icon: 'fa-laptop-code',
    points: [
      'Equip students with the latest technological skills and tools currently in demand.',
      'Provide practical, hands-on experience with real-world projects and software development.',
    ],
  },
  {
    title: 'Bridge Academia & Industry',
    icon: 'fa-building-columns',
    points: [
      'Offer exposure to industry standards, methodologies, and professional work environments.',
      'Facilitate the transition from academic learning to professional application.',
    ],
  },
  {
    title: 'Promote Collaboration',
    icon: 'fa-handshake',
    points: [
      'Establish and strengthen partnerships with local software companies for mutual growth.',
      'Provide students with networking opportunities and potential job placements.',
    ],
  },
  {
    title: 'Improve Employability',
    icon: 'fa-briefcase',
    points: [
      'Enhance employability by providing relevant, marketable skills and experiences.',
      'Prepare students for careers in tech by improving problem-solving abilities.',
    ],
  },
];

const VALUE_OBJECTIVES = [
  { icon: 'fa-chart-line', title: 'Skill Enhancement', desc: 'Provide students with advanced skills that complement their primary coursework.' },
  { icon: 'fa-hammer', title: 'Practical Application', desc: 'Offer hands-on projects that allow students to apply theoretical knowledge in real-world scenarios.' },
  { icon: 'fa-industry', title: 'Industry Readiness', desc: 'Equip students with industry-relevant skills, making them more competitive in the job market.' },
  { icon: 'fa-book-open', title: 'Comprehensive Learning', desc: 'Broaden the learning experience with courses covering emerging technologies and advanced topics.' },
  { icon: 'fa-certificate', title: 'Certification', desc: 'Validate the additional skills acquired by students through a certification process.' },
];

/* ─── Activity card ─── */
function ActivityCard({ item, idx }) {
  const [h, setH] = useState(false);
  return (
    <div
      className="rv"
      style={{
        borderRadius: 18, overflow: 'hidden', background: '#fff',
        border: '1px solid rgba(12,35,64,0.07)',
        boxShadow: h ? '0 16px 48px rgba(12,35,64,0.18)' : '0 4px 18px rgba(12,35,64,0.08)',
        transform: h ? 'translateY(-8px)' : 'none',
        transition: 'all 0.3s ease',
        transitionDelay: `${(idx % 4) * 0.06}s`,
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: 180 }}>
        <img
          src={item.img} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: h ? 'scale(1.06)' : 'scale(1)' }}
          onError={e => {
            e.target.parentElement.style.background = 'linear-gradient(135deg,#0c2340,#2d5a8e)';
            e.target.style.display = 'none';
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: h ? 'rgba(12,35,64,0.3)' : 'rgba(12,35,64,0)',
          transition: 'background 0.3s',
        }} />
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: '0.9rem', color: '#0c2340', marginBottom: 4 }}>{item.title}</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.75rem', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</div>
      </div>
    </div>
  );
}

/* ─── Program card ─── */
function ProgramCard({ p, idx }) {
  const [h, setH] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (p.link) navigate(p.link);
  };

  return (
    <div
      className="rv"
      style={{
        background: h ? 'linear-gradient(135deg,#0c2340,#1a3a6b)' : '#fff',
        border: '2px solid',
        borderColor: h ? '#0c2340' : 'rgba(12,35,64,0.15)',
        borderRadius: 22, padding: '36px 28px', textAlign: 'center',
        cursor: p.link ? 'pointer' : 'default',
        boxShadow: h ? '0 20px 60px rgba(12,35,64,0.35)' : '0 4px 20px rgba(12,35,64,0.08)',
        transform: h ? 'translateY(-10px) scale(1.03)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transitionDelay: `${idx * 0.07}s`,
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      onClick={handleClick}
    >
      {h && (
        <div style={{
          position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}
      {/* "New" badge for Mission 40 */}
      {p.link && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: h ? 'rgba(255,204,0,0.25)' : 'rgba(12,35,64,0.07)',
          border: '1px solid',
          borderColor: h ? 'rgba(255,204,0,0.45)' : 'rgba(12,35,64,0.15)',
          color: h ? '#ffcc00' : '#0c2340',
          borderRadius: 20, padding: '3px 10px',
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.62rem', fontWeight: 800,
          letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.3s',
        }}>View Details</div>
      )}
      <div style={{
        width: 64, height: 64, borderRadius: '50%', margin: '0 auto 16px',
        background: h ? 'rgba(255,204,0,0.15)' : 'rgba(12,35,64,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', color: h ? '#ffcc00' : '#0c2340',
        transition: 'all 0.3s',
      }}>
        <i className={`fa-solid ${p.icon}`} />
      </div>
      <div style={{
        fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: '1.15rem',
        color: h ? '#ffcc00' : '#0c2340', marginBottom: 8, letterSpacing: '-0.3px',
      }}>{p.title}</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.76rem', color: h ? 'rgba(255,255,255,0.55)' : '#64748b', fontWeight: 500 }}>{p.sub}</div>
      {p.link && (
        <div style={{
          marginTop: 16,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.75rem', fontWeight: 800,
          color: h ? '#ffcc00' : '#0c2340',
          transition: 'all 0.3s',
        }}>
          Explore Program <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem', transform: h ? 'translateX(4px)' : 'none', transition: 'transform 0.25s' }} />
        </div>
      )}
    </div>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ badge, title, highlight, sub }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 48 }}>
      {badge && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(12,35,64,0.07)', border: '1px solid rgba(12,35,64,0.12)',
          color: '#0c2340', fontSize: '0.68rem', fontWeight: 800, padding: '6px 16px',
          borderRadius: 30, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14,
        }}>
          <i className="fa-solid fa-circle-dot" style={{ color: '#ffcc00' }} />{badge}
        </span>
      )}
      <h2 style={{
        fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(1.7rem,3.5vw,2.4rem)',
        fontWeight: 900, color: '#0c2340', letterSpacing: '-1px', margin: '0 0 12px', lineHeight: 1.1,
      }}>
        {title} {highlight && <span style={{ color: '#1a3a6b' }}>{highlight}</span>}
      </h2>
      {sub && <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.9rem', color: '#64748b', fontWeight: 500, maxWidth: 560, margin: '0 auto' }}>{sub}</p>}
    </div>
  );
}

/* ─── Main ─── */
export default function DevelopmentPrograms() {
  useReveal();

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    @keyframes dpIn{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes dpShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes logoFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
    .rv{opacity:0;transform:translateY(24px);transition:opacity 0.5s ease,transform 0.5s ease;}
    .rv.visible{opacity:1;transform:none;}
    *{box-sizing:border-box;}
    .dp-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}
    .dp-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;
    }
    .dp-hero-content{position:relative;z-index:2;padding:68px 5% 52px;}
    .dp-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:18px;}
    .dp-hero-h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(2rem,5vw,3.4rem);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-1.5px;margin-bottom:14px;}
    .dp-hero-h1 em{font-style:normal;color:#ffcc00;}
    .dp-hero-sub{color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;max-width:520px;margin-bottom:28px;}
    .dp-wave{height:56px;margin-top:-1px;}
    .dp-wave svg{width:100%;height:100%;display:block;}
    .dp-section{padding:72px 5%;}
    .dp-section-alt{background:#fff;}
    .dp-inner{max-width:1200px;margin:0 auto;}
    .dp-recruiter-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:48px;}
    .dp-recruiter-card{
      background:#fff;border-radius:18px;padding:20px 24px;
      box-shadow:0 4px 18px rgba(12,35,64,0.09);border:1.5px solid rgba(12,35,64,0.07);
      display:flex;flex-direction:column;align-items:center;gap:12px;
      width:160px;transition:all 0.28s;cursor:default;
    }
    .dp-recruiter-card:hover{transform:translateY(-8px);box-shadow:0 16px 40px rgba(12,35,64,0.18);}
    .dp-recruiter-logo{width:90px;height:70px;object-fit:contain;}
    .dp-recruiter-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;font-weight:800;color:#0c2340;text-align:center;}
    .dp-obj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;margin-top:0;}
    .dp-obj-card{
      background:#fff;border-radius:18px;padding:24px 22px;
      border:1.5px solid rgba(12,35,64,0.07);
      box-shadow:0 4px 18px rgba(12,35,64,0.07);
      transition:all 0.28s;
    }
    .dp-obj-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(12,35,64,0.13);}
    .dp-obj-icon{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#0c2340,#2d5a8e);display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#ffcc00;margin-bottom:14px;}
    .dp-obj-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:0.9rem;color:#0c2340;margin-bottom:6px;}
    .dp-obj-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;color:#64748b;line-height:1.7;}
    .dp-activities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:20px;}
    .dp-modules-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;margin-top:0;}
    .dp-module-card{
      background:#fff;border-radius:22px;padding:32px 28px;
      border:1.5px solid rgba(12,35,64,0.08);
      box-shadow:0 4px 20px rgba(12,35,64,0.08);
      transition:all 0.3s;
    }
    .dp-module-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(12,35,64,0.15);}
    .dp-module-num{font-family:'Plus Jakarta Sans',sans-serif;font-size:3.5rem;font-weight:900;color:rgba(12,35,64,0.06);line-height:1;margin-bottom:-8px;}
    .dp-module-icon{width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#fff;margin-bottom:16px;}
    .dp-module-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:1rem;color:#0c2340;margin-bottom:8px;}
    .dp-module-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.8rem;color:#64748b;line-height:1.75;margin-bottom:16px;}
    .dp-module-tags{display:flex;flex-wrap:wrap;gap:6px;}
    .dp-tag{background:rgba(12,35,64,0.06);border:1px solid rgba(12,35,64,0.1);color:#0c2340;border-radius:20px;padding:3px 10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:0.67rem;font-weight:700;}
    .dp-programs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;}
    .dp-internship-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-top:0;}
    .dp-int-card{
      background:#fff;border-radius:20px;padding:26px 24px;
      border:1.5px solid rgba(12,35,64,0.07);
      box-shadow:0 4px 18px rgba(12,35,64,0.07);
      transition:all 0.28s;
    }
    .dp-int-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(12,35,64,0.13);}
    .dp-int-icon{width:50px;height:50px;border-radius:15px;background:linear-gradient(135deg,#0c2340,#2d5a8e);display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#ffcc00;margin-bottom:14px;}
    .dp-int-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:0.9rem;color:#0c2340;margin-bottom:12px;}
    .dp-int-point{display:flex;gap:9px;margin-bottom:8px;align-items:flex-start;}
    .dp-int-bullet{width:18px;height:18px;border-radius:50%;background:rgba(12,35,64,0.07);flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;}
    .dp-int-bullet i{font-size:0.5rem;color:#0c2340;}
    .dp-int-text{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;color:#475569;line-height:1.65;}
    .dp-value-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
    .dp-val-card{
      background:#fff;border-radius:16px;padding:22px 20px;text-align:center;
      border:1.5px solid rgba(12,35,64,0.07);box-shadow:0 3px 14px rgba(12,35,64,0.07);
      transition:all 0.25s;
    }
    .dp-val-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(12,35,64,0.12);}
    .dp-val-icon{width:50px;height:50px;border-radius:14px;background:linear-gradient(135deg,#0c2340,#1a3a6b);display:flex;align-items:center;justify-content:center;font-size:1.05rem;color:#ffcc00;margin:0 auto 14px;}
    .dp-val-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:0.85rem;color:#0c2340;margin-bottom:6px;}
    .dp-val-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.74rem;color:#64748b;line-height:1.65;}
    .dp-team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px;margin-top:0;}
    .dp-team-card{
      background:#fff;border-radius:22px;overflow:hidden;
      border:1.5px solid rgba(12,35,64,0.07);box-shadow:0 4px 20px rgba(12,35,64,0.08);
      transition:all 0.3s;
    }
    .dp-team-card:hover{transform:translateY(-8px);box-shadow:0 18px 52px rgba(12,35,64,0.16);}
    .dp-msg-card{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      border-radius:22px;padding:36px 40px;
      box-shadow:0 12px 40px rgba(12,35,64,0.3);
      position:relative;overflow:hidden;
    }
    .dp-msg-card::before{content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:rgba(255,204,0,0.07);pointer-events:none;}
    @media(max-width:900px){.dp-recruiter-card{width:130px;}.dp-activities-grid{grid-template-columns:repeat(2,1fr);}}
    @media(max-width:600px){
      .dp-hero-content{padding:48px 4% 36px;}
      .dp-hero-h1{font-size:2rem;letter-spacing:-1px;}
      .dp-section{padding:52px 4%;}
      .dp-activities-grid{grid-template-columns:repeat(2,1fr);gap:12px;}
      .dp-recruiter-card{width:110px;}
    }
    @media(max-width:400px){
      .dp-activities-grid{grid-template-columns:1fr 1fr;}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="dp-page">

        {/* ─ HERO ─ */}
        <div className="dp-hero">
          <div className="dp-hero-content">
            <div className="dp-hero-badge"><i className="fa-solid fa-graduation-cap" />Placement Cell · CTC</div>
            <h1 className="dp-hero-h1">Student <em>Development</em><br />&amp; Placement Programs</h1>
            <p className="dp-hero-sub">
              Comprehensive training and placement initiatives designed to enhance employability for BCA, B.Sc. (CS) and BBA students — bridging campus to career.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[{ val: '7+', lbl: 'Top Recruiters' }, { val: '12', lbl: 'Activities' }, { val: '3', lbl: 'Training Modules' }, { val: '4', lbl: 'JOB-A-THON Drives' }].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.6rem', fontWeight: 900, color: '#ffcc00', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.67rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="dp-wave"><svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" /></svg></div>

        {/* ─ INTRODUCTION & TEAM ─ */}
        <div className="dp-section">
          <div className="dp-inner">
            <SectionHeading badge="Introduction" title="Our Placement" highlight="Team" sub="Dedicated professionals driving student success through structured placement programs and industry partnerships." />
            <div className="dp-team-grid">
              {TEAM.map((m, i) => (
                <div key={i} className="dp-team-card rv" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={m.img} alt={m.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                      onError={e => {
                        e.target.parentElement.style.background = `linear-gradient(135deg,${m.color},#2d5a8e)`;
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">👤</div>`;
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)' }} />
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      background: 'rgba(12,35,64,0.07)', borderRadius: 20, padding: '4px 12px',
                      marginBottom: 10,
                    }}>
                      <i className={`fa-solid ${m.icon}`} style={{ fontSize: '0.65rem', color: '#0c2340' }} />
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.68rem', fontWeight: 800, color: '#0c2340', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{m.role}</span>
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: '1rem', color: '#0c2340' }}>{m.name}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Intro text */}
            <div className="rv" style={{ marginTop: 48, background: '#fff', borderRadius: 20, padding: '32px 36px', border: '1.5px solid rgba(12,35,64,0.08)', boxShadow: '0 4px 20px rgba(12,35,64,0.07)' }}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.95rem', color: '#334155', lineHeight: 1.9, margin: 0 }}>
                These programs outline the objectives, plans, and implementation strategies of our institution's <strong style={{ color: '#0c2340' }}>Off-Campus Drive and Student Readiness Program</strong>. This initiative is designed to enhance the employability of our students by providing them with comprehensive training and placement opportunities, with a focus on both multinational corporations (MNCs) and local companies. Our program is tailored for students enrolled in <strong style={{ color: '#0c2340' }}>BCA, B.Sc. (Computer Science), and BBA</strong> courses.
              </p>
            </div>
          </div>
        </div>

        {/* ─ TOP RECRUITERS ─ */}
        <div className="dp-section dp-section-alt">
          <div className="dp-inner">
            <SectionHeading badge="Partners" title="Our Major" highlight="Top Recruiters" sub="Leading MNCs who regularly recruit from Creative Techno College across all batches." />
            <div className="dp-recruiter-grid">
              {RECRUITERS.map((r, i) => (
                <div key={i} className="dp-recruiter-card rv" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <img
                    src={r.logo} alt={r.name} className="dp-recruiter-logo"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = `linear-gradient(135deg,${r.color}22,${r.color}44)`;
                      const d = document.createElement('div');
                      d.style.cssText = `width:90px;height:70px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:900;color:${r.color};`;
                      d.textContent = r.name.slice(0, 3);
                      e.target.parentElement.insertBefore(d, e.target);
                    }}
                  />
                  <div className="dp-recruiter-name">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─ OBJECTIVES ─ */}
        <div className="dp-section">
          <div className="dp-inner">
            <SectionHeading badge="Goals" title="Program" highlight="Objectives" sub="Five pillars that guide our comprehensive placement and development initiative." />
            <div className="dp-obj-grid">
              {OBJECTIVES.map((o, i) => (
                <div key={i} className="dp-obj-card rv" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="dp-obj-icon"><i className={`fa-solid ${o.icon}`} /></div>
                  <div className="dp-obj-title">{o.title}</div>
                  <div className="dp-obj-desc">{o.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─ PLACEMENT ACTIVITIES ─ */}
        <div className="dp-section dp-section-alt">
          <div className="dp-inner">
            <SectionHeading badge="Activities" title="Placement" highlight="Activity Hub" sub="12 structured activities that prepare students for every phase of the recruitment process." />
            <div className="dp-activities-grid">
              {ACTIVITIES.map((a, i) => <ActivityCard key={i} item={a} idx={i} />)}
            </div>
          </div>
        </div>

        {/* ─ MODULE-BASED TRAINING ─ */}
        <div className="dp-section">
          <div className="dp-inner">
            <SectionHeading badge="Training" title="Module-Based" highlight="Training Program" sub="Three structured modules covering aptitude, technical depth, and soft skills for complete placement readiness." />
            <div className="dp-modules-grid">
              {MODULES.map((m, i) => (
                <div key={i} className="dp-module-card rv" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="dp-module-num">{m.num}</div>
                  <div className="dp-module-icon" style={{ background: `linear-gradient(135deg,${m.color},#2d5a8e)` }}>
                    <i className={`fa-solid ${m.icon}`} style={{ color: '#ffcc00' }} />
                  </div>
                  <div className="dp-module-title">{m.title}</div>
                  <div className="dp-module-desc">{m.desc}</div>
                  <div className="dp-module-tags">
                    {m.tags.map((t, j) => <span key={j} className="dp-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─ PLACEMENT PROGRAMS ─ */}
        <div className="dp-section dp-section-alt">
          <div className="dp-inner">
            <SectionHeading badge="Flagship Programs" title="JOB-A-THON &" highlight="Placement Drives" sub="Annual flagship placement programs that connect students directly with top recruiters." />
            <div className="dp-programs-grid">
              {PROGRAMS.map((p, i) => <ProgramCard key={i} p={p} idx={i} />)}
            </div>
          </div>
        </div>

        {/* ─ INTERNSHIPS ─ */}
        <div className="dp-section">
          <div className="dp-inner">
            <SectionHeading badge="Internships" title="Industry" highlight="Internship Program" sub="Structured internship goals bridging academic learning with professional industry exposure." />
            <div className="dp-internship-grid">
              {INTERNSHIP_GOALS.map((g, i) => (
                <div key={i} className="dp-int-card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="dp-int-icon"><i className={`fa-solid ${g.icon}`} /></div>
                  <div className="dp-int-title">{g.title}</div>
                  {g.points.map((pt, j) => (
                    <div key={j} className="dp-int-point">
                      <div className="dp-int-bullet"><i className="fa-solid fa-check" /></div>
                      <div className="dp-int-text">{pt}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─ VALUE ADDED COURSES ─ */}
        <div className="dp-section dp-section-alt">
          <div className="dp-inner">
            <SectionHeading badge="Value Added" title="Value Added" highlight="Courses" sub="Additional certifications and courses designed to make students stand out in the competitive job market." />
            <div className="dp-value-grid">
              {VALUE_OBJECTIVES.map((v, i) => (
                <div key={i} className="dp-val-card rv" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="dp-val-icon"><i className={`fa-solid ${v.icon}`} /></div>
                  <div className="dp-val-title">{v.title}</div>
                  <div className="dp-val-desc">{v.desc}</div>
                </div>
              ))}
            </div>

            {/* Message from Placement Head */}
            <div className="dp-msg-card rv" style={{ marginTop: 36 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
                <div style={{
                  width: 54, height: 54, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(255,204,0,0.15)', border: '2px solid rgba(255,204,0,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', color: '#ffcc00',
                }}>
                  <i className="fa-solid fa-quote-left" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.68rem', fontWeight: 800, color: 'rgba(255,204,0,0.7)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
                    From the Placement Head
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, fontStyle: 'italic' }}>
                    "Our institution's Off-Campus Drive and Student Readiness Program is a comprehensive initiative aimed at enhancing the employability of our students. By focusing on pre-placement activities, structured assessment rounds, and targeted training modules, we are committed to preparing our students for successful careers. Our continuous efforts to update and improve the program reflect our dedication to student success and align with the high standards set by the National Board of Accreditation."
                  </div>
                  <div style={{ marginTop: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: '0.88rem', color: '#ffcc00' }}>
                    Mr. Bhabani Shankar Sahoo
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.74rem', color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>
                    Placement Head · Creative Techno College
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}