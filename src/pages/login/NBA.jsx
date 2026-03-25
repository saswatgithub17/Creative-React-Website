import { useState, useEffect, useRef } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv,.rv-l,.rv-r');
    const io = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function ParticleNet({ r = '0,212,255' }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); let raf;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const D = Array.from({ length: 44 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      a: Math.random() * 0.35 + 0.06,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      D.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > c.width) d.vx *= -1;
        if (d.y < 0 || d.y > c.height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${d.a})`; ctx.fill();
      });
      D.forEach((a, i) => D.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 90) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${r},${0.05 * (1 - dist / 90)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [r]);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
}

/* ─── NBA LOGIN ─── */
function NbaLogin({ onSuccess }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const submit = async (e) => {
    e.preventDefault(); setError('');
    if (!user || !pass) { setError('Please enter both username and password.'); return; }
    setLoading(true); await new Promise(r => setTimeout(r, 700)); setLoading(false);
    if (user === 'login' && pass === '1010') onSuccess();
    else setError('Invalid username or password. Please try again.');
  };

  const css = `
    @keyframes nbaFloat{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-18px) rotate(3deg);}}
    @keyframes nbaSpin{to{transform:rotate(360deg);}}
    .nba-login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#060d1a 0%,#0c1f3d 45%,#0a1628 100%);padding:40px 20px;position:relative;overflow:hidden;}
    .nba-login-dots{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px;}
    .nba-login-blob{position:absolute;border-radius:50%;filter:blur(65px);pointer-events:none;}
    .nba-split-card{width:100%;max-width:860px;border-radius:28px;overflow:hidden;display:flex;box-shadow:0 32px 80px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.06);position:relative;z-index:2;opacity:0;transform:translateY(30px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .nba-split-card.show{opacity:1;transform:translateY(0);}
    .nba-left-panel{flex:1.1;background:linear-gradient(160deg,#f8fafc 0%,#e8eef7 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 40px;gap:18px;position:relative;overflow:hidden;}
    .nba-left-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 20%,rgba(45,125,210,0.1) 0%,transparent 60%);pointer-events:none;}
    .nba-panel-logo{width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.15));transition:transform 0.35s ease;}
    .nba-panel-logo:hover{transform:scale(1.06);}
    .nba-panel-divider{width:48px;height:3px;border-radius:2px;background:linear-gradient(90deg,#2d7dd2,#00d4ff);}
    .nba-panel-title{font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:800;color:#0a1628;text-align:center;letter-spacing:0.5px;text-transform:uppercase;line-height:1.5;}
    .nba-panel-title span{display:block;font-size:1.05rem;color:#2d7dd2;margin-top:4px;}
    .nba-panel-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;}
    .nba-panel-badge{background:rgba(45,125,210,0.1);border:1px solid rgba(45,125,210,0.25);color:#1a4a8a;font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;}
    .nba-right-panel{flex:1;background:rgba(10,22,40,0.97);display:flex;flex-direction:column;justify-content:center;padding:52px 44px;position:relative;}
    .nba-right-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 40% 0%,rgba(0,212,255,0.07) 0%,transparent 55%);pointer-events:none;}
    .nba-right-label{font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:800;color:rgba(0,212,255,0.7);letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;}
    .nba-right-heading{font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:900;color:#fff;margin-bottom:6px;line-height:1.15;letter-spacing:-0.3px;}
    .nba-right-heading span{color:#00d4ff;}
    .nba-right-sub{font-family:'Poppins',sans-serif;font-size:0.8rem;color:rgba(255,255,255,0.35);margin-bottom:28px;font-weight:500;}
    .nba-error{background:rgba(220,38,38,0.12);border:1px solid rgba(220,38,38,0.3);border-radius:12px;padding:11px 14px;margin-bottom:16px;display:flex;align-items:flex-start;gap:9px;font-family:'Poppins',sans-serif;font-size:0.78rem;color:#fca5a5;line-height:1.5;}
    .nba-field-label{font-family:'Poppins',sans-serif;font-size:0.7rem;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px;display:flex;align-items:center;gap:7px;}
    .nba-field-label i{color:#00d4ff;font-size:0.65rem;}
    .nba-input-wrap{display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.1);border-radius:13px;overflow:hidden;margin-bottom:18px;transition:border-color 0.22s,background 0.22s,box-shadow 0.22s;}
    .nba-input-wrap:focus-within{border-color:#00d4ff;background:rgba(0,212,255,0.06);box-shadow:0 0 0 3px rgba(0,212,255,0.12);}
    .nba-input-icon{width:44px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.3);font-size:0.85rem;flex-shrink:0;}
    .nba-input-wrap input{flex:1;border:none;background:transparent;padding:13px 12px 13px 0;font-family:'Inter',sans-serif;font-size:0.9rem;color:#fff;outline:none;}
    .nba-input-wrap input::placeholder{color:rgba(255,255,255,0.2);}
    .nba-eye-btn{width:42px;display:flex;align-items:center;justify-content:center;background:none;border:none;color:rgba(255,255,255,0.3);cursor:pointer;font-size:0.82rem;transition:color 0.2s;}
    .nba-eye-btn:hover{color:rgba(255,255,255,0.7);}
    .nba-submit-btn{width:100%;padding:14px;border:none;border-radius:13px;background:linear-gradient(135deg,#1a4a8a,#2d7dd2);color:#fff;font-family:'Poppins',sans-serif;font-size:0.92rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:4px;transition:transform 0.22s,box-shadow 0.22s;letter-spacing:0.3px;box-shadow:0 8px 24px rgba(45,125,210,0.35);position:relative;overflow:hidden;}
    .nba-submit-btn::after{content:'';position:absolute;top:-50%;left:-60%;width:200%;height:200%;background:rgba(255,255,255,0.1);transform:rotate(30deg);transition:0.45s;}
    .nba-submit-btn:hover::after{left:100%;}
    .nba-submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(45,125,210,0.45);}
    .nba-submit-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none;}
    .nba-spinner{width:17px;height:17px;border:2.5px solid rgba(255,255,255,0.25);border-top-color:#fff;border-radius:50%;animation:nbaSpin 0.7s linear infinite;}
    .nba-secure-note{margin-top:18px;display:flex;align-items:center;justify-content:center;gap:6px;font-family:'Poppins',sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.22);}
    .nba-secure-note i{color:rgba(0,212,255,0.5);}
    @media(max-width:700px){.nba-split-card{flex-direction:column;max-width:420px;}.nba-left-panel{padding:36px 28px 28px;}.nba-panel-logo{width:100px;height:100px;}.nba-right-panel{padding:32px 28px 36px;}.nba-right-heading{font-size:1.5rem;}}
    @media(max-width:420px){.nba-right-panel{padding:28px 22px 32px;}.nba-left-panel{padding:28px 18px 22px;}}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="nba-login-page">
        <ParticleNet r="0,212,255" />
        <div className="nba-login-dots" />
        <div className="nba-login-blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)', top: -160, right: -80, animation: 'nbaFloat 9s ease-in-out infinite' }} />
        <div className="nba-login-blob" style={{ width: 340, height: 340, background: 'radial-gradient(circle,rgba(0,212,255,0.07) 0%,transparent 70%)', bottom: -100, left: -60, animation: 'nbaFloat 11s ease-in-out infinite reverse' }} />
        <div className={`nba-split-card${mounted ? ' show' : ''}`}>
          <div className="nba-left-panel">
            <img className="nba-panel-logo" src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/NBA-removebg-preview.png" alt="NBA"
              onError={e => { e.target.parentElement.innerHTML = '<span style="font-size:5rem">🏅</span>'; }} />
            <div className="nba-panel-divider" />
            <div className="nba-panel-title">National Board of<span>Accreditation</span></div>
            <div className="nba-panel-badges">
              <span className="nba-panel-badge">NBA</span>
              <span className="nba-panel-badge">AICTE Linked</span>
              <span className="nba-panel-badge">OBE Framework</span>
            </div>
          </div>
          <div className="nba-right-panel">
            <p className="nba-right-label">Secure Access</p>
            <h1 className="nba-right-heading">NBA <span>Portal</span></h1>
            <p className="nba-right-sub">Creative Techno College — Accreditation Dashboard</p>
            {error && <div className="nba-error"><i className="fa-solid fa-triangle-exclamation" style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div>}
            <form onSubmit={submit} noValidate>
              <label className="nba-field-label"><i className="fa-solid fa-user" />Username</label>
              <div className="nba-input-wrap">
                <span className="nba-input-icon"><i className="fa-solid fa-id-card" /></span>
                <input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="Enter username" autoComplete="username" required />
              </div>
              <label className="nba-field-label"><i className="fa-solid fa-lock" />Password</label>
              <div className="nba-input-wrap">
                <span className="nba-input-icon"><i className="fa-solid fa-key" /></span>
                <input type={showPass ? 'text' : 'password'} value={pass} onChange={e => setPass(e.target.value)} placeholder="Enter password" autoComplete="current-password" required />
                <button type="button" className="nba-eye-btn" onClick={() => setShowPass(p => !p)}><i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`} /></button>
              </div>
              <button type="submit" className="nba-submit-btn" disabled={loading}>
                {loading ? <><div className="nba-spinner" />Authenticating…</> : <><i className="fa-solid fa-right-to-bracket" />Access Dashboard</>}
              </button>
            </form>
            <div className="nba-secure-note"><i className="fa-solid fa-shield-check" />Protected portal — authorised personnel only</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── DATA ─── */
const CRITERIA = [
  { num: '1', title: 'Vision, Mission & Programme Educational Objectives', icon: 'fa-bullseye', color: '#f59e0b', glow: '245,158,11', grad: 'linear-gradient(135deg,#78350f,#f59e0b)', docs: 8 },
  { num: '2', title: 'Programme Curriculum & Teaching-Learning Processes', icon: 'fa-book-open', color: '#3b82f6', glow: '59,130,246', grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', docs: 14 },
  { num: '3', title: 'Course Outcomes & Programme Outcomes', icon: 'fa-chart-line', color: '#10b981', glow: '16,185,129', grad: 'linear-gradient(135deg,#064e3b,#10b981)', docs: 12 },
  { num: '4', title: 'Students\' Performance', icon: 'fa-user-graduate', color: '#8b5cf6', glow: '139,92,246', grad: 'linear-gradient(135deg,#2e1065,#8b5cf6)', docs: 10 },
  { num: '5', title: 'Faculty Information & Contributions', icon: 'fa-chalkboard-user', color: '#06b6d4', glow: '6,182,212', grad: 'linear-gradient(135deg,#164e63,#06b6d4)', docs: 16 },
  { num: '6', title: 'Facilities & Technical Support', icon: 'fa-building', color: '#ef4444', glow: '239,68,68', grad: 'linear-gradient(135deg,#7f1d1d,#ef4444)', docs: 9 },
  { num: '7', title: 'Continuous Improvement', icon: 'fa-arrows-rotate', color: '#ec4899', glow: '236,72,153', grad: 'linear-gradient(135deg,#831843,#ec4899)', docs: 7 },
];

const OBE_CHAIN = [
  { abbr: 'PEO', full: 'Programme Educational Objectives', icon: 'fa-bullseye', desc: 'Broad statements describing career and professional accomplishments graduates are expected to achieve within a few years after graduation.', color: '#3b82f6' },
  { abbr: 'PO', full: 'Programme Outcomes', icon: 'fa-graduation-cap', desc: 'Attributes and skills that students should possess at the time of graduation — knowledge, skills and attitudes.', color: '#00d4ff' },
  { abbr: 'PSO', full: 'Programme Specific Outcomes', icon: 'fa-star', desc: 'Domain-specific competencies expected of graduates of a particular programme, beyond the standard POs.', color: '#2d7dd2' },
  { abbr: 'CO', full: 'Course Outcomes', icon: 'fa-book', desc: 'Specific competencies students will demonstrate upon successful completion of each individual course.', color: '#1a4a8a' },
];

/* Horizontal bar stat */
function ProgramCard({ prog }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff', borderRadius: 18, padding: '20px 22px',
        border: '1px solid rgba(10,22,40,0.07)',
        boxShadow: hov ? '0 12px 36px rgba(10,22,40,0.13)' : '0 2px 12px rgba(10,22,40,0.06)',
        transform: hov ? 'translateY(-5px)' : 'none',
        transition: 'all 0.28s ease', cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#0a1628' }}>{prog.name}</div>
        <div style={{
          background: `${prog.color}18`, border: `1.5px solid ${prog.color}40`,
          color: prog.color, fontFamily: "'Outfit',sans-serif", fontSize: '0.65rem', fontWeight: 800,
          padding: '3px 10px', borderRadius: 20, letterSpacing: 0.5,
        }}>{prog.badge}</div>
      </div>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.75rem', color: '#4a6080', marginBottom: 14, fontWeight: 500 }}>{prog.dept}</div>
      {prog.metrics.map((m, i) => (
        <div key={i} style={{ marginBottom: i < prog.metrics.length - 1 ? 10 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#4a6080' }}>{m.label}</span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.7rem', fontWeight: 800, color: prog.color }}>{m.val}</span>
          </div>
          <div style={{ height: 5, background: `${prog.color}18`, borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: prog.color, borderRadius: 3,
              width: hov ? `${m.pct}%` : '0%',
              transition: `width ${0.8 + i * 0.15}s cubic-bezier(0.4,0,0.2,1)`,
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── NBA DASHBOARD ─── */
function NbaDashboard({ onLogout }) {
  useReveal();

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
    @keyframes dUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes heroIn{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
    @keyframes scanAnim{0%{top:-2px;}100%{top:100%;}}
    @keyframes chainArrow{0%,100%{transform:translateX(0);}50%{transform:translateX(6px);}}
    @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}

    .nb-page{background:#f0f4f8;min-height:100vh;font-family:'Outfit',sans-serif;}

    /* ─ HERO ─ */
    .nb-hero{
      background:linear-gradient(165deg,#010b18 0%,#051935 35%,#082242 65%,#010f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      padding:0;position:relative;overflow:hidden;
    }
    .nb-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px);
      background-size:44px 44px;
    }
    .nb-hero-scan{
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,rgba(0,212,255,0.5),transparent);
      animation:scanAnim 8s linear infinite;pointer-events:none;
    }
    .nb-hero-glow1{position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(45,125,210,0.2) 0%,transparent 60%);top:-200px;right:-150px;filter:blur(55px);pointer-events:none;}
    .nb-hero-glow2{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,212,255,0.1) 0%,transparent 65%);bottom:-100px;left:10%;filter:blur(45px);pointer-events:none;}
    .nb-hero-content{position:relative;z-index:2;padding:72px 5% 56px;}
    .nb-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.28);
      color:#00d4ff;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:heroIn 0.6s 0.1s ease both;
    }
    .nb-hero-h1{
      font-family:'Outfit',sans-serif;
      font-size:clamp(2.2rem,5.5vw,3.8rem);font-weight:900;
      color:#fff;line-height:1.05;letter-spacing:-2px;
      margin-bottom:14px;animation:heroIn 0.6s 0.2s ease both;
    }
    .nb-hero-h1 em{font-style:normal;color:#00d4ff;}
    .nb-hero-p{color:rgba(255,255,255,0.42);font-size:0.92rem;line-height:1.75;max-width:540px;margin-bottom:32px;animation:heroIn 0.6s 0.3s ease both;}
    .nb-hero-tags{display:flex;flex-wrap:wrap;gap:10px;animation:heroIn 0.6s 0.4s ease both;}
    .nb-hero-tag{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:40px;padding:7px 16px;
      font-size:0.74rem;font-weight:700;color:rgba(255,255,255,0.55);
    }
    .nb-logout{
      position:absolute;top:22px;right:5%;z-index:10;
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.12);
      color:rgba(255,255,255,0.55);font-family:'Outfit',sans-serif;
      font-size:0.76rem;font-weight:700;padding:9px 18px;border-radius:24px;cursor:pointer;transition:all 0.22s;
    }
    .nb-logout:hover{background:rgba(239,68,68,0.2);border-color:rgba(239,68,68,0.4);color:#fca5a5;}
    .nb-wave{height:60px;margin-top:-1px;position:relative;}
    .nb-wave svg{width:100%;height:100%;display:block;}

    /* ─ Stats ─ */
    .nb-stats-band{
      max-width:1240px;margin:-40px auto 0;padding:0 4%;
      display:grid;grid-template-columns:repeat(5,1fr);gap:16px;position:relative;z-index:4;
    }
    .nb-stat{
      background:#fff;border-radius:18px;padding:20px 18px;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);
      text-align:center;transition:transform 0.28s,box-shadow 0.28s;cursor:default;
    }
    .nb-stat:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(10,22,40,0.14);}
    .nb-stat-ico{
      width:48px;height:48px;border-radius:14px;margin:0 auto 12px;
      display:flex;align-items:center;justify-content:center;font-size:1.15rem;color:#fff;
    }
    .nb-stat-val{font-family:'Outfit',sans-serif;font-size:1.6rem;font-weight:900;color:#0a1628;line-height:1;}
    .nb-stat-lbl{font-size:0.7rem;font-weight:600;color:#4a6080;margin-top:3px;}

    /* ─ OBE Chain ─ */
    .nb-obe-sec{
      background:linear-gradient(165deg,#010b18 0%,#051935 50%,#010f1e 100%);
      padding:72px 5%;position:relative;overflow:hidden;margin-top:48px;
    }
    .nb-obe-sec::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(0,212,255,0.06) 0%,transparent 60%);pointer-events:none;}
    .nb-obe-chain{
      max-width:1100px;margin:52px auto 0;
      display:grid;grid-template-columns:repeat(4,1fr);gap:0;
      position:relative;
    }
    .nb-obe-chain::before{
      content:'';position:absolute;top:52px;left:12%;right:12%;height:2px;
      background:linear-gradient(90deg,#3b82f6,#00d4ff,#2d7dd2,#1a4a8a);
      border-radius:2px;pointer-events:none;
    }
    .nb-obe-node{
      display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 16px;
      position:relative;
    }
    .nb-obe-dot{
      width:106px;height:106px;border-radius:50%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;
      position:relative;z-index:1;margin-bottom:20px;
      border:3px solid rgba(255,255,255,0.12);
      transition:transform 0.3s ease,box-shadow 0.3s ease;cursor:default;
    }
    .nb-obe-dot:hover{transform:scale(1.08);}
    .nb-obe-abbr{font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:900;color:#fff;line-height:1;}
    .nb-obe-dot-icon{font-size:0.8rem;opacity:0.7;color:#fff;}
    .nb-obe-full{font-family:'Outfit',sans-serif;font-size:0.78rem;font-weight:800;color:#fff;margin-bottom:8px;line-height:1.3;}
    .nb-obe-desc{font-family:'Outfit',sans-serif;font-size:0.72rem;color:rgba(255,255,255,0.4);line-height:1.7;font-weight:500;}
    .nb-obe-arrow{
      position:absolute;top:44px;right:-12px;z-index:2;
      width:24px;height:24px;background:rgba(255,255,255,0.08);
      border:1px solid rgba(255,255,255,0.12);border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:0.55rem;color:rgba(255,255,255,0.4);
      animation:chainArrow 2s ease-in-out infinite;
    }

    /* ─ Criteria grid ─ */
    .nb-crit-sec{padding:32px 4% 72px;}
    .nb-crit-grid{
      max-width:1240px;margin:40px auto 0;
      display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px;
    }
    .nb-crit-card{
      background:#fff;border-radius:22px;overflow:hidden;
      border:1px solid rgba(10,22,40,0.07);
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      text-decoration:none;display:block;
      transition:transform 0.3s,box-shadow 0.3s;
    }
    .nb-crit-card:hover{transform:translateY(-9px);box-shadow:0 22px 56px rgba(10,22,40,0.16);}
    .nb-crit-top{padding:26px 22px 20px;position:relative;overflow:hidden;}
    .nb-crit-wm{
      position:absolute;right:-4px;top:-14px;
      font-family:'Outfit',sans-serif;font-weight:900;font-size:6rem;
      color:rgba(255,255,255,0.07);line-height:1;userSelect:none;
    }
    .nb-crit-title{font-family:'Outfit',sans-serif;font-weight:800;font-size:0.97rem;color:#fff;line-height:1.35;position:relative;z-index:1;margin-bottom:14px;}
    .nb-crit-footer{
      padding:14px 22px;background:#fff;
      display:flex;align-items:center;justify-content:space-between;
      border-top:1px solid rgba(10,22,40,0.06);
    }
    .nb-crit-docs{font-family:'Outfit',sans-serif;font-size:0.72rem;font-weight:700;color:#4a6080;display:flex;align-items:center;gap:6px;}
    .nb-crit-arrow{
      width:32px;height:32px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:0.72rem;color:#fff;
      transition:transform 0.25s,box-shadow 0.25s;
    }
    .nb-crit-card:hover .nb-crit-arrow{transform:translateX(6px);}

    /* ─ Programs ─ */
    .nb-prog-sec{background:#fff;padding:72px 5%;}
    .nb-prog-grid{
      max-width:1200px;margin:40px auto 0;
      display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;
    }

    /* ─ Bottom banner ─ */
    .nb-banner{
      background:linear-gradient(135deg,#010b18 0%,#051935 50%,#010f1e 100%);
      background-size:200% auto;animation:gradShift 6s ease infinite;
      padding:64px 5%;text-align:center;
    }

    @media(max-width:960px){.nb-stats-band{grid-template-columns:repeat(3,1fr);}.nb-obe-chain{grid-template-columns:repeat(2,1fr);gap:32px;}.nb-obe-chain::before{display:none;}.nb-obe-arrow{display:none;}}
    @media(max-width:640px){.nb-stats-band{grid-template-columns:repeat(2,1fr);padding:0 3%;}.nb-crit-grid{grid-template-columns:1fr 1fr;gap:14px;}.nb-hero-h1{font-size:2rem;letter-spacing:-1px;}}
    @media(max-width:400px){.nb-crit-grid{grid-template-columns:1fr;}.nb-stats-band{grid-template-columns:1fr 1fr;}}
  `;

  const STATS = [
    { val: '7', lbl: 'Criteria', icon: 'fa-layer-group', col: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
    { val: '4', lbl: 'Programs', icon: 'fa-graduation-cap', col: 'linear-gradient(135deg,#164e63,#06b6d4)' },
    { val: 'OBE', lbl: 'Framework', icon: 'fa-arrows-spin', col: 'linear-gradient(135deg,#064e3b,#10b981)' },
    { val: 'NBA', lbl: 'Accreditation', icon: 'fa-medal', col: 'linear-gradient(135deg,#2e1065,#8b5cf6)' },
    { val: 'A+', lbl: 'Target', icon: 'fa-star', col: 'linear-gradient(135deg,#0c1f3d,#2d7dd2)' },
  ];

  const PROGRAMS = [
    {
      name: 'B.Tech CSE', dept: 'Computer Science & Engineering', badge: 'Accredited', color: '#3b82f6',
      metrics: [{ label: 'PO Attainment', val: '78%', pct: 78 }, { label: 'CO Attainment', val: '83%', pct: 83 }, { label: 'Pass Rate', val: '91%', pct: 91 }]
    },
    {
      name: 'B.Tech ECE', dept: 'Electronics & Communication Engg.', badge: 'Accredited', color: '#10b981',
      metrics: [{ label: 'PO Attainment', val: '74%', pct: 74 }, { label: 'CO Attainment', val: '79%', pct: 79 }, { label: 'Pass Rate', val: '88%', pct: 88 }]
    },
    {
      name: 'B.Tech MECH', dept: 'Mechanical Engineering', badge: 'Applied', color: '#06b6d4',
      metrics: [{ label: 'PO Attainment', val: '71%', pct: 71 }, { label: 'CO Attainment', val: '76%', pct: 76 }, { label: 'Pass Rate', val: '85%', pct: 85 }]
    },
    {
      name: 'B.Tech CIVIL', dept: 'Civil Engineering', badge: 'Applied', color: '#8b5cf6',
      metrics: [{ label: 'PO Attainment', val: '69%', pct: 69 }, { label: 'CO Attainment', val: '74%', pct: 74 }, { label: 'Pass Rate', val: '87%', pct: 87 }]
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="nb-page">

        {/* HERO */}
        <div className="nb-hero">
          <div className="nb-hero-grid" />
          <div className="nb-hero-scan" />
          <div className="nb-hero-glow1" /><div className="nb-hero-glow2" />
          <ParticleNet r="0,212,255" />
          <button className="nb-logout" onClick={onLogout}><i className="fa-solid fa-right-from-bracket" />Logout</button>
          <div className="nb-hero-content">
            <div className="nb-hero-badge"><i className="fa-solid fa-medal" />NBA Accreditation Portal</div>
            <h1 className="nb-hero-h1">National Board<br />of <em>Accreditation</em></h1>
            <p className="nb-hero-p">Creative Techno College, Angul — Outcome-Based Education framework documentation, programme accreditation data and evidence for all 7 NBA criteria.</p>
            <div className="nb-hero-tags">
              {['AICTE Linked', 'OBE Framework', '4 Programs', 'Utkal University', 'BPUT Affiliated'].map((t, i) => (
                <span key={i} className="nb-hero-tag">
                  <i className="fa-solid fa-circle-check" style={{ color: '#00d4ff', fontSize: '0.65rem' }} />{t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="nb-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* STATS */}
        <div className="nb-stats-band">
          {STATS.map((s, i) => (
            <div key={i} className="nb-stat rv" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="nb-stat-ico" style={{ background: s.col }}><i className={`fa-solid ${s.icon}`} /></div>
              <div className="nb-stat-val">{s.val}</div>
              <div className="nb-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* OBE CHAIN */}
        <section className="nb-obe-sec">
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ color: 'rgba(0,212,255,0.7)' }}>Framework</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Outcome-Based <span style={{ color: '#00d4ff' }}>Education</span></h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)', margin: '0 auto' }}>
              The OBE chain ensures every course, programme and institutional goal is mapped to measurable outcomes.
            </p>
          </div>
          <div className="nb-obe-chain">
            {OBE_CHAIN.map((node, i) => (
              <div key={i} className="nb-obe-node rv" style={{ transitionDelay: `${i * 0.1}s` }}>
                {i < OBE_CHAIN.length - 1 && <div className="nb-obe-arrow"><i className="fa-solid fa-arrow-right" /></div>}
                <div
                  className="nb-obe-dot"
                  style={{
                    background: `linear-gradient(135deg,${node.color}cc,${node.color})`,
                    boxShadow: `0 8px 32px ${node.color}50`,
                  }}
                >
                  <div className="nb-obe-abbr">{node.abbr}</div>
                  <i className={`fa-solid ${node.icon} nb-obe-dot-icon`} />
                </div>
                <div className="nb-obe-full">{node.full}</div>
                <div className="nb-obe-desc">{node.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CRITERIA */}
        <section className="nb-crit-sec">
          <div style={{ maxWidth: 1240, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Documentation</span>
            <h2 className="section-title">Select a <span>Criterion</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Access complete documentation and evidence for each of the 7 NBA criteria.</p>
          </div>
          <div className="nb-crit-grid">
            {CRITERIA.map((c, i) => (
              <a key={i} href={`#crit-${i + 1}`} className="nb-crit-card rv" style={{ transitionDelay: `${i * 0.07}s`, textDecoration: 'none' }}>
                <div className="nb-crit-top" style={{ background: c.grad }}>
                  <div className="nb-crit-wm">{c.num.padStart(2, '0')}</div>
                  <div style={{
                    width: 50, height: 50, borderRadius: 14,
                    background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', color: '#fff', marginBottom: 14,
                    position: 'relative', zIndex: 1,
                  }}>
                    <i className={`fa-solid ${c.icon}`} />
                  </div>
                  <div className="nb-crit-title">Criterion {c.num}: {c.title}</div>
                </div>
                <div className="nb-crit-footer">
                  <div className="nb-crit-docs">
                    <i className="fa-solid fa-file-lines" style={{ color: c.color }} />
                    {c.docs} documents
                  </div>
                  <div className="nb-crit-arrow" style={{ background: c.grad, boxShadow: `0 4px 12px rgba(${c.glow},0.35)` }}>
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="nb-prog-sec">
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">OBE Attainment</span>
            <h2 className="section-title">Programme <span>Performance</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>PO, CO and overall pass rate attainment across all accredited programmes.</p>
          </div>
          <div className="nb-prog-grid">
            {PROGRAMS.map((p, i) => (
              <div key={i} className="rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                <ProgramCard prog={p} />
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM BANNER */}
        <div className="nb-banner">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.7rem', fontWeight: 800, color: 'rgba(0,212,255,0.7)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Our Goal</div>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: -1.5, marginBottom: 14, lineHeight: 1.1 }}>
              Achieving <span style={{ color: '#00d4ff' }}>NBA Accreditation</span><br />Across All 4 Programs
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Delivering outcome-based engineering education with measurable PO/CO attainment, continuous quality improvement and industry-aligned curriculum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function NBA() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) return <NbaLogin onSuccess={() => setLoggedIn(true)} />;
  return <NbaDashboard onLogout={() => setLoggedIn(false)} />;
}