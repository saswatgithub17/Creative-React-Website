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
    const D = Array.from({ length: 48 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
      a: Math.random() * 0.4 + 0.06,
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
        if (dist < 95) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${r},${0.055 * (1 - dist / 95)})`; ctx.lineWidth = 0.6; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [r]);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
}

/* ─── NAAC LOGIN (unchanged per user request) ─── */
function NaacLogin({ onSuccess }) {
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
    @keyframes naacFloat{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-16px) rotate(3deg);}}
    @keyframes naacSpin{to{transform:rotate(360deg);}}
    .naac-login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#060d1a 0%,#0c1f3d 55%,#0a1628 100%);padding:40px 20px;position:relative;overflow:hidden;}
    .naac-login-dots{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px;}
    .naac-login-blob{position:absolute;border-radius:50%;filter:blur(65px);pointer-events:none;}
    .naac-split-card{width:100%;max-width:860px;border-radius:28px;overflow:hidden;display:flex;flex-direction:row;box-shadow:0 32px 80px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.06);position:relative;z-index:2;opacity:0;transform:translateY(30px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .naac-split-card.show{opacity:1;transform:translateY(0);}
    .naac-left-panel{flex:1.1;background:linear-gradient(160deg,#f8fafc 0%,#e8eef7 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 40px;gap:20px;position:relative;overflow:hidden;}
    .naac-left-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 20%,rgba(45,125,210,0.1) 0%,transparent 60%);pointer-events:none;}
    .naac-panel-logo{width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 8px 20px rgba(0,0,0,0.15));transition:transform 0.35s ease;}
    .naac-panel-logo:hover{transform:scale(1.06);}
    .naac-panel-title{font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:800;color:#0a1628;text-align:center;letter-spacing:0.5px;text-transform:uppercase;line-height:1.5;}
    .naac-panel-title span{display:block;font-size:1.05rem;color:#2d7dd2;margin-top:4px;}
    .naac-panel-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:4px;}
    .naac-panel-badge{background:rgba(45,125,210,0.1);border:1px solid rgba(45,125,210,0.25);color:#1a4a8a;font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;}
    .naac-divider{width:48px;height:3px;border-radius:2px;background:linear-gradient(90deg,#2d7dd2,#00d4ff);margin:0 auto;}
    .naac-right-panel{flex:1;background:rgba(10,22,40,0.97);display:flex;flex-direction:column;justify-content:center;padding:52px 44px;gap:0;position:relative;}
    .naac-right-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 40% 0%,rgba(0,212,255,0.07) 0%,transparent 55%);pointer-events:none;}
    .naac-right-label{font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:800;color:rgba(0,212,255,0.7);letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;}
    .naac-right-heading{font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:900;color:#fff;margin-bottom:6px;line-height:1.15;letter-spacing:-0.3px;}
    .naac-right-heading span{color:#00d4ff;}
    .naac-right-sub{font-family:'Poppins',sans-serif;font-size:0.8rem;color:rgba(255,255,255,0.4);margin-bottom:28px;font-weight:500;}
    .naac-error{background:rgba(220,38,38,0.12);border:1px solid rgba(220,38,38,0.3);border-radius:12px;padding:11px 14px;margin-bottom:16px;display:flex;align-items:flex-start;gap:9px;font-family:'Poppins',sans-serif;font-size:0.78rem;color:#fca5a5;line-height:1.5;}
    .naac-field-label{font-family:'Poppins',sans-serif;font-size:0.7rem;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px;display:flex;align-items:center;gap:7px;}
    .naac-field-label i{color:#00d4ff;font-size:0.65rem;}
    .naac-input-wrap{display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.1);border-radius:13px;overflow:hidden;margin-bottom:18px;transition:border-color 0.22s,background 0.22s,box-shadow 0.22s;}
    .naac-input-wrap:focus-within{border-color:#00d4ff;background:rgba(0,212,255,0.06);box-shadow:0 0 0 3px rgba(0,212,255,0.12);}
    .naac-input-icon{width:44px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.3);font-size:0.85rem;flex-shrink:0;}
    .naac-input-wrap input{flex:1;border:none;background:transparent;padding:13px 12px 13px 0;font-family:'Inter',sans-serif;font-size:0.9rem;color:#fff;outline:none;}
    .naac-input-wrap input::placeholder{color:rgba(255,255,255,0.2);}
    .naac-eye-btn{width:42px;display:flex;align-items:center;justify-content:center;background:none;border:none;color:rgba(255,255,255,0.3);cursor:pointer;font-size:0.82rem;transition:color 0.2s;}
    .naac-eye-btn:hover{color:rgba(255,255,255,0.7);}
    .naac-submit-btn{width:100%;padding:14px;border:none;border-radius:13px;background:linear-gradient(135deg,#1a4a8a,#2d7dd2);color:#fff;font-family:'Poppins',sans-serif;font-size:0.92rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:4px;transition:transform 0.22s,box-shadow 0.22s;letter-spacing:0.3px;box-shadow:0 8px 24px rgba(45,125,210,0.35);position:relative;overflow:hidden;}
    .naac-submit-btn::after{content:'';position:absolute;top:-50%;left:-60%;width:200%;height:200%;background:rgba(255,255,255,0.1);transform:rotate(30deg);transition:0.45s;}
    .naac-submit-btn:hover::after{left:100%;}
    .naac-submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(45,125,210,0.45);}
    .naac-submit-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none;}
    .naac-spinner{width:17px;height:17px;border:2.5px solid rgba(255,255,255,0.25);border-top-color:#fff;border-radius:50%;animation:naacSpin 0.7s linear infinite;}
    .naac-secure-note{margin-top:18px;display:flex;align-items:center;justify-content:center;gap:6px;font-family:'Poppins',sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.22);}
    .naac-secure-note i{color:rgba(0,212,255,0.5);}
    @media(max-width:700px){.naac-split-card{flex-direction:column;max-width:420px;}.naac-left-panel{padding:36px 28px 28px;}.naac-panel-logo{width:100px;height:100px;}.naac-right-panel{padding:32px 28px 36px;}.naac-right-heading{font-size:1.5rem;}}
    @media(max-width:420px){.naac-right-panel{padding:28px 22px 32px;}.naac-left-panel{padding:28px 18px 22px;}}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="naac-login-page">
        <ParticleNet r="0,212,255" />
        <div className="naac-login-dots" />
        <div className="naac-login-blob" style={{ width: 480, height: 480, background: 'radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)', top: -160, right: -80, animation: 'naacFloat 9s ease-in-out infinite' }} />
        <div className="naac-login-blob" style={{ width: 340, height: 340, background: 'radial-gradient(circle,rgba(245,197,24,0.07) 0%,transparent 70%)', bottom: -100, left: -60, animation: 'naacFloat 11s ease-in-out infinite reverse' }} />
        <div className={`naac-split-card${mounted ? ' show' : ''}`}>
          <div className="naac-left-panel">
            <img className="naac-panel-logo" src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/naac-removebg-preview.png" alt="NAAC"
              onError={e => { e.target.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/NAAC_logo.png/200px-NAAC_logo.png'; }} />
            <div className="naac-divider" />
            <div className="naac-panel-title">National Assessment and<span>Accreditation Council</span></div>
            <div className="naac-panel-badges">
              <span className="naac-panel-badge">NAAC</span>
              <span className="naac-panel-badge">UGC Recognized</span>
              <span className="naac-panel-badge">7 Criteria</span>
            </div>
          </div>
          <div className="naac-right-panel">
            <p className="naac-right-label">Secure Access</p>
            <h1 className="naac-right-heading">NAAC <span>Portal</span></h1>
            <p className="naac-right-sub">Creative Techno College — Accreditation Dashboard</p>
            {error && <div className="naac-error"><i className="fa-solid fa-triangle-exclamation" style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div>}
            <form onSubmit={submit} noValidate>
              <label className="naac-field-label"><i className="fa-solid fa-user" /> Username</label>
              <div className="naac-input-wrap">
                <span className="naac-input-icon"><i className="fa-solid fa-id-card" /></span>
                <input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="Enter username" autoComplete="username" required />
              </div>
              <label className="naac-field-label"><i className="fa-solid fa-lock" /> Password</label>
              <div className="naac-input-wrap">
                <span className="naac-input-icon"><i className="fa-solid fa-key" /></span>
                <input type={showPass ? 'text' : 'password'} value={pass} onChange={e => setPass(e.target.value)} placeholder="Enter password" autoComplete="current-password" required />
                <button type="button" className="naac-eye-btn" onClick={() => setShowPass(p => !p)}><i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`} /></button>
              </div>
              <button type="submit" className="naac-submit-btn" disabled={loading}>
                {loading ? <><div className="naac-spinner" />Authenticating…</> : <><i className="fa-solid fa-right-to-bracket" />Access Dashboard</>}
              </button>
            </form>
            <div className="naac-secure-note"><i className="fa-solid fa-shield-check" />Protected portal — authorised personnel only</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── DATA ─── */
const CRITERIA = [
  { num: 'I', roman: '01', title: 'Curricular Aspects', icon: 'fa-book-open', color: '#3b82f6', glow: '59,130,246', grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', score: 2.78, maxScore: 3.50, docs: 12, status: 'Submitted' },
  { num: 'II', roman: '02', title: 'Teaching-Learning & Evaluation', icon: 'fa-chalkboard-user', color: '#10b981', glow: '16,185,129', grad: 'linear-gradient(135deg,#064e3b,#10b981)', score: 3.12, maxScore: 3.50, docs: 18, status: 'Submitted' },
  { num: 'III', roman: '03', title: 'Research, Innovations & Extension', icon: 'fa-flask-conical', color: '#8b5cf6', glow: '139,92,246', grad: 'linear-gradient(135deg,#2e1065,#8b5cf6)', score: 1.85, maxScore: 3.50, docs: 9, status: 'Under Review' },
  { num: 'IV', roman: '04', title: 'Infrastructure & Learning Resources', icon: 'fa-building-columns', color: '#ef4444', glow: '239,68,68', grad: 'linear-gradient(135deg,#7f1d1d,#ef4444)', score: 2.94, maxScore: 3.50, docs: 14, status: 'Submitted' },
  { num: 'V', roman: '05', title: 'Student Support & Progression', icon: 'fa-users', color: '#f59e0b', glow: '245,158,11', grad: 'linear-gradient(135deg,#78350f,#f59e0b)', score: 3.05, maxScore: 3.50, docs: 16, status: 'Submitted' },
  { num: 'VI', roman: '06', title: 'Governance, Leadership & Management', icon: 'fa-sitemap', color: '#06b6d4', glow: '6,182,212', grad: 'linear-gradient(135deg,#164e63,#06b6d4)', score: 2.88, maxScore: 3.50, docs: 11, status: 'Submitted' },
  { num: 'VII', roman: '07', title: 'Institutional Values & Best Practices', icon: 'fa-star', color: '#ec4899', glow: '236,72,153', grad: 'linear-gradient(135deg,#831843,#ec4899)', score: 2.50, maxScore: 3.50, docs: 8, status: 'Submitted' },
];

/* Animated ring */
function ScoreRing({ score, color, label, delay = 0 }) {
  const [animated, setAnimated] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const t0 = performance.now();
      const dur = 1600;
      const step = now => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setAnimated(score * ease);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [score]);

  const r = 38, circ = 2 * Math.PI * r;
  const dash = circ * (1 - animated / 4);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: 96, height: 96 }}>
        <svg width={96} height={96} viewBox="0 0 96 96" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={48} cy={48} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={7} />
          <circle cx={48} cy={48} r={r} fill="none" stroke={color} strokeWidth={7}
            strokeDasharray={circ} strokeDashoffset={dash} strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '1.1rem', color: '#fff', lineHeight: 1 }}>
            {animated.toFixed(2)}
          </span>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.55rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>/4.00</span>
        </div>
      </div>
      <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.6px', textAlign: 'center', maxWidth: 90, lineHeight: 1.4 }}>
        {label}
      </span>
    </div>
  );
}

/* Criteria card */
function CritCard({ c, i }) {
  const [h, setH] = useState(false);
  const pct = (c.score / 4) * 100;
  const statusColor = c.status === 'Submitted' ? '#10b981' : '#f59e0b';

  return (
    <a
      href={`#crit-${i + 1}`}
      className="rv"
      style={{
        display: 'block', textDecoration: 'none',
        background: '#fff', borderRadius: 22, overflow: 'hidden',
        border: '1px solid rgba(10,22,40,0.07)',
        boxShadow: h ? `0 20px 56px rgba(${c.glow},0.18)` : '0 4px 20px rgba(10,22,40,0.07)',
        transform: h ? 'translateY(-10px) scale(1.01)' : 'none',
        transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
        animationDelay: `${i * 0.07}s`,
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {/* Top gradient block */}
      <div style={{ background: c.grad, padding: '26px 22px 20px', position: 'relative', overflow: 'hidden' }}>
        {/* Watermark number */}
        <div style={{
          position: 'absolute', right: -4, top: -14,
          fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '6rem',
          color: 'rgba(255,255,255,0.07)', lineHeight: 1, userSelect: 'none',
          transform: h ? 'scale(1.1) translateX(-6px)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}>{c.roman}</div>

        {/* Icon */}
        <div style={{
          width: 50, height: 50, borderRadius: 14,
          background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', color: '#fff', marginBottom: 14,
          transform: h ? 'scale(1.12) rotate(-6deg)' : 'none',
          transition: 'transform 0.3s ease',
          position: 'relative', zIndex: 1,
        }}>
          <i className={`fa-solid ${c.icon}`} />
        </div>

        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '0.98rem', color: '#fff', lineHeight: 1.35, marginBottom: 16, position: 'relative', zIndex: 1 }}>
          Criterion {c.num}: {c.title}
        </div>

        {/* Score bar */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Score</span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>{c.score} / 4.00</span>
          </div>
          <div style={{ height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: 'rgba(255,255,255,0.85)', borderRadius: 3, width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Bottom white row */}
      <div style={{ padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(10,22,40,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: statusColor,
            boxShadow: `0 0 8px ${statusColor}80`,
          }} />
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#4a6080' }}>{c.status}</span>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.7rem', color: '#94a3b8' }}>·</span>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>{c.docs} docs</span>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: c.grad,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.7rem', color: '#fff',
          transform: h ? 'translateX(6px)' : 'none',
          transition: 'transform 0.25s ease',
          boxShadow: h ? `0 4px 14px rgba(${c.glow},0.5)` : 'none',
        }}>
          <i className="fa-solid fa-arrow-right" />
        </div>
      </div>
    </a>
  );
}

/* ─── NAAC DASHBOARD ─── */
function NaacDashboard({ onLogout }) {
  useReveal();
  const avg = (CRITERIA.reduce((a, c) => a + c.score, 0) / CRITERIA.length).toFixed(2);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
    @keyframes dUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes heroIn{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
    @keyframes scan{0%{top:0%;}100%{top:100%;}}
    @keyframes counterUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
    @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}

    .nd-page{background:#f0f4f8;min-height:100vh;font-family:'Outfit',sans-serif;}

    /* ─ Hero ─ */
    .nd-hero{
      background:linear-gradient(165deg,#010b18 0%,#051935 35%,#082242 65%,#010f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      padding:0;position:relative;overflow:hidden;
    }
    .nd-hero-bg-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px);
      background-size:44px 44px;
    }
    .nd-hero-scan{
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,rgba(0,212,255,0.5),transparent);
      animation:scan 7s linear infinite;pointer-events:none;
    }
    .nd-hero-glow1{
      position:absolute;width:700px;height:700px;border-radius:50%;
      background:radial-gradient(circle,rgba(45,125,210,0.2) 0%,transparent 60%);
      top:-200px;right:-150px;filter:blur(50px);pointer-events:none;
    }
    .nd-hero-glow2{
      position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(0,212,255,0.1) 0%,transparent 65%);
      bottom:-100px;left:10%;filter:blur(40px);pointer-events:none;
    }
    .nd-hero-content{position:relative;z-index:2;padding:72px 5% 56px;}
    .nd-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.28);
      color:#00d4ff;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:heroIn 0.6s 0.1s ease both;
    }
    .nd-hero-h1{
      font-family:'Outfit',sans-serif;
      font-size:clamp(2.2rem,5.5vw,3.8rem);font-weight:900;
      color:#fff;line-height:1.05;letter-spacing:-2px;
      margin-bottom:14px;animation:heroIn 0.6s 0.2s ease both;
    }
    .nd-hero-h1 em{font-style:normal;color:#f5c518;}
    .nd-hero-p{color:rgba(255,255,255,0.42);font-size:0.92rem;line-height:1.75;max-width:540px;margin-bottom:32px;animation:heroIn 0.6s 0.3s ease both;}
    .nd-hero-tags{display:flex;flex-wrap:wrap;gap:10px;animation:heroIn 0.6s 0.4s ease both;}
    .nd-hero-tag{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:40px;padding:7px 16px;
      font-size:0.74rem;font-weight:700;color:rgba(255,255,255,0.55);
    }
    .nd-logout{
      position:absolute;top:22px;right:5%;z-index:10;
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.12);
      color:rgba(255,255,255,0.55);font-family:'Outfit',sans-serif;
      font-size:0.76rem;font-weight:700;padding:9px 18px;border-radius:24px;
      cursor:pointer;transition:all 0.22s;
    }
    .nd-logout:hover{background:rgba(239,68,68,0.2);border-color:rgba(239,68,68,0.4);color:#fca5a5;}
    .nd-wave{height:60px;margin-top:-1px;position:relative;}
    .nd-wave svg{width:100%;height:100%;display:block;}

    /* ─ Stats band ─ */
    .nd-stats-band{
      max-width:1240px;margin:-40px auto 0;
      padding:0 4%;
      display:grid;grid-template-columns:repeat(4,1fr);gap:18px;
      position:relative;z-index:4;
    }
    .nd-stat-card{
      background:#fff;border-radius:20px;padding:22px 20px;
      box-shadow:0 4px 28px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);
      display:flex;align-items:center;gap:16px;
      transition:transform 0.28s,box-shadow 0.28s;cursor:default;
    }
    .nd-stat-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(10,22,40,0.14);}
    .nd-stat-ico{
      width:54px;height:54px;border-radius:15px;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#fff;
    }
    .nd-stat-num{font-family:'Outfit',sans-serif;font-size:1.85rem;font-weight:900;color:#0a1628;line-height:1;}
    .nd-stat-lbl{font-size:0.73rem;font-weight:600;color:#4a6080;margin-top:3px;}

    /* ─ Score rings ─ */
    .nd-rings-sec{
      background:linear-gradient(165deg,#010b18 0%,#051935 50%,#010f1e 100%);
      padding:72px 5%;position:relative;overflow:hidden;margin-top:48px;
    }
    .nd-rings-sec::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 50% 50%,rgba(0,212,255,0.06) 0%,transparent 65%);
      pointer-events:none;
    }
    .nd-rings-grid{
      max-width:1100px;margin:48px auto 0;
      display:grid;grid-template-columns:repeat(7,1fr);gap:20px;
    }
    .nd-cgpa-box{
      max-width:400px;margin:52px auto 0;
      background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);
      border-radius:20px;padding:28px 32px;text-align:center;
      backdrop-filter:blur(12px);
    }
    .nd-cgpa-val{
      font-family:'Outfit',sans-serif;font-size:4rem;font-weight:900;
      background:linear-gradient(135deg,#f5c518,#00d4ff,#f5c518);
      background-size:200% auto;
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      animation:gradShift 4s ease infinite;line-height:1;
    }

    /* ─ Criteria grid ─ */
    .nd-crit-sec{padding:32px 4% 80px;}
    .nd-crit-grid{
      max-width:1240px;margin:40px auto 0;
      display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px;
    }

    /* ─ Timeline SSR ─ */
    .nd-ssr-sec{background:#fff;padding:72px 5%;}
    .nd-timeline{max-width:900px;margin:40px auto 0;position:relative;}
    .nd-timeline::before{
      content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;
      background:linear-gradient(180deg,#3b82f6,#10b981,#8b5cf6,#ec4899);
      border-radius:2px;
    }
    .nd-tl-item{
      display:flex;align-items:flex-start;gap:24px;
      padding:0 0 28px 0;margin-left:0;
      transition:all 0.3s;
    }
    .nd-tl-dot{
      width:46px;height:46px;border-radius:50%;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#fff;
      box-shadow:0 4px 14px rgba(0,0,0,0.2);
      position:relative;z-index:1;border:3px solid #fff;
    }
    .nd-tl-body{
      flex:1;background:#f8fafc;border:1px solid rgba(10,22,40,0.07);
      border-radius:14px;padding:16px 20px;
      display:flex;align-items:center;justify-content:space-between;gap:12px;
      transition:all 0.28s;cursor:pointer;
    }
    .nd-tl-body:hover{background:#fff;box-shadow:0 6px 24px rgba(10,22,40,0.1);transform:translateX(6px);}
    .nd-tl-title{font-family:'Outfit',sans-serif;font-size:0.86rem;font-weight:800;color:#0a1628;margin-bottom:3px;}
    .nd-tl-meta{font-size:0.72rem;font-weight:600;color:#94a3b8;}
    .nd-tl-badge{
      display:inline-flex;align-items:center;gap:5px;
      border-radius:20px;padding:5px 12px;font-size:0.68rem;font-weight:800;
      white-space:nowrap;flex-shrink:0;
    }

    /* ─ Grade target banner ─ */
    .nd-grade-banner{
      background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 50%,#0a1628 100%);
      background-size:200% auto;animation:gradShift 6s ease infinite;
      padding:56px 5%;text-align:center;
    }

    @media(max-width:960px){.nd-stats-band{grid-template-columns:1fr 1fr;}.nd-rings-grid{grid-template-columns:repeat(4,1fr);}}
    @media(max-width:600px){.nd-stats-band{grid-template-columns:1fr 1fr;padding:0 3%;}.nd-crit-grid{grid-template-columns:1fr 1fr;gap:14px;}.nd-rings-grid{grid-template-columns:repeat(3,1fr);}.nd-hero-h1{font-size:2rem;letter-spacing:-1px;}.nd-timeline::before{left:18px;}.nd-tl-dot{width:38px;height:38px;}}
    @media(max-width:400px){.nd-crit-grid{grid-template-columns:1fr;}.nd-rings-grid{grid-template-columns:repeat(2,1fr);}.nd-stats-band{grid-template-columns:1fr;}}
  `;

  const STAT_DATA = [
    { val: '7', lbl: 'Criteria Covered', icon: 'fa-layer-group', col: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
    { val: avg, lbl: 'Avg. CGPA', icon: 'fa-chart-line', col: 'linear-gradient(135deg,#064e3b,#10b981)' },
    { val: '88+', lbl: 'Documents Filed', icon: 'fa-file-shield', col: 'linear-gradient(135deg,#2e1065,#8b5cf6)' },
    { val: 'A', lbl: 'Target Grade', icon: 'fa-medal', col: 'linear-gradient(135deg,#78350f,#f59e0b)' },
  ];

  const TL_ITEMS = [
    { title: 'Executive Summary', meta: 'SSR Part A · 12 pages', col: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', status: 'Approved', statusCol: '#10b981' },
    ...CRITERIA.map((c, i) => ({
      title: `Criterion ${c.num} — ${c.title}`,
      meta: `${c.docs} documents · Score ${c.score}/4.00`,
      col: c.grad, status: c.status,
      statusCol: c.status === 'Submitted' ? '#10b981' : '#f59e0b',
    })),
    { title: 'Evaluative Report', meta: 'SSR Part C · Departmental', col: 'linear-gradient(135deg,#164e63,#06b6d4)', status: 'Submitted', statusCol: '#10b981' },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="nd-page">

        {/* ─ HERO ─ */}
        <div className="nd-hero">
          <div className="nd-hero-bg-grid" />
          <div className="nd-hero-scan" />
          <div className="nd-hero-glow1" /><div className="nd-hero-glow2" />
          <ParticleNet r="0,212,255" />

          <button className="nd-logout" onClick={onLogout}>
            <i className="fa-solid fa-right-from-bracket" />Logout
          </button>

          <div className="nd-hero-content">
            <div className="nd-hero-badge">
              <i className="fa-solid fa-shield-halved" />NAAC Accreditation 2024–25
            </div>
            <h1 className="nd-hero-h1">
              National Assessment<br />&amp; <em>Accreditation</em>
            </h1>
            <p className="nd-hero-p">
              Creative Techno College, Angul, Odisha — Self Study Report comprising all 7 criteria, evidence documents and institutional data for NAAC Grade A certification.
            </p>
            <div className="nd-hero-tags">
              {['UGC Recognized', 'AICTE Approved', 'Utkal University', 'Est. 2010', 'ISO Certified'].map((t, i) => (
                <span key={i} className="nd-hero-tag">
                  <i className="fa-solid fa-circle-check" style={{ color: '#00d4ff', fontSize: '0.65rem' }} />{t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="nd-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#f0f4f8" />
          </svg>
        </div>

        {/* ─ STATS BAND ─ */}
        <div className="nd-stats-band">
          {STAT_DATA.map((s, i) => (
            <div key={i} className="nd-stat-card rv" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="nd-stat-ico" style={{ background: s.col }}><i className={`fa-solid ${s.icon}`} /></div>
              <div><div className="nd-stat-num">{s.val}</div><div className="nd-stat-lbl">{s.lbl}</div></div>
            </div>
          ))}
        </div>

        {/* ─ SCORE RINGS ─ */}
        <section className="nd-rings-sec">
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ color: 'rgba(0,212,255,0.7)' }}>Performance Overview</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Criteria-wise <span style={{ color: '#f5c518' }}>Scores</span></h2>
          </div>
          <div className="nd-rings-grid">
            {CRITERIA.map((c, i) => (
              <div key={i} className="rv" style={{ transitionDelay: `${i * 0.07}s` }}>
                <ScoreRing score={c.score} color={c.color} label={`Criterion ${c.num}`} />
              </div>
            ))}
          </div>
          <div className="nd-cgpa-box rv" style={{ transitionDelay: '0.5s' }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', fontWeight: 800, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 2.5, marginBottom: 8 }}>Overall CGPA</div>
            <div className="nd-cgpa-val">{avg}</div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>Out of 4.00 — Target: Grade A</div>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 16 }}>
              {['C', 'B', 'B+', 'A', 'A+'].map((g, i) => {
                const thresholds = [1.51, 2.01, 2.51, 3.01, 3.51];
                const isReached = parseFloat(avg) >= thresholds[i];
                return (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isReached ? (g === 'A' ? 'linear-gradient(135deg,#f5c518,#f59e0b)' : 'rgba(255,255,255,0.12)') : 'rgba(255,255,255,0.04)',
                      border: `2px solid ${isReached ? (g === 'A' ? '#f5c518' : 'rgba(255,255,255,0.2)') : 'rgba(255,255,255,0.07)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '0.9rem',
                      color: isReached ? '#fff' : 'rgba(255,255,255,0.15)',
                    }}>{g}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─ CRITERIA CARDS ─ */}
        <section className="nd-crit-sec">
          <div style={{ maxWidth: 1240, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Documentation</span>
            <h2 className="section-title">Select a <span>Criterion</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Click any criterion to access its complete SSR documentation, supporting data and evidence files.
            </p>
          </div>
          <div className="nd-crit-grid">
            {CRITERIA.map((c, i) => <CritCard key={i} c={c} i={i} />)}
          </div>
        </section>

        {/* ─ SSR TIMELINE ─ */}
        <section className="nd-ssr-sec">
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Self Study Report</span>
            <h2 className="section-title">Document <span>Timeline</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Complete SSR document trail — all submissions and their current status.</p>
          </div>
          <div className="nd-timeline">
            {TL_ITEMS.map((item, i) => (
              <div key={i} className="nd-tl-item rv" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="nd-tl-dot" style={{ background: item.col }}>
                  <i className="fa-solid fa-file-lines" />
                </div>
                <div className="nd-tl-body">
                  <div>
                    <div className="nd-tl-title">{item.title}</div>
                    <div className="nd-tl-meta">{item.meta}</div>
                  </div>
                  <div className="nd-tl-badge" style={{
                    background: `${item.statusCol}18`,
                    border: `1.5px solid ${item.statusCol}40`,
                    color: item.statusCol,
                  }}>
                    <i className="fa-solid fa-circle-check" />{item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─ GRADE BANNER ─ */}
        <div className="nd-grade-banner">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.7rem', fontWeight: 800, color: 'rgba(245,197,24,0.7)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
              Our Goal
            </div>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: -1.5, marginBottom: 14, lineHeight: 1.1 }}>
              Targeting <span style={{ color: '#f5c518' }}>NAAC Grade A</span><br />for Creative Techno College
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Committed to academic excellence, institutional growth and quality assurance across all 7 criteria of the NAAC Self Study Report framework.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function NAAC() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) return <NaacLogin onSuccess={() => setLoggedIn(true)} />;
  return <NaacDashboard onLogout={() => setLoggedIn(false)} />;
}