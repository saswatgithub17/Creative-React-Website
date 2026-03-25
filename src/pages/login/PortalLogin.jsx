import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ROLES = [
  {
    id: 'student', label: 'Student', sub: 'Access results & records',
    icon: 'fa-graduation-cap',
    color: '#3b82f6', glow: 'rgba(59,130,246,0.6)',
    grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)',
    lightGrad: 'linear-gradient(135deg,#dbeafe,#eff6ff)',
    emoji: '🎓',
    idLabel: 'Student ID', passLabel: 'Date of Birth',
    idPlaceholder: 'Enter Student ID', passPH: '••••••••',
  },
  {
    id: 'staff', label: 'Staff', sub: 'Faculty portal & tools',
    icon: 'fa-user-tie',
    color: '#10b981', glow: 'rgba(16,185,129,0.6)',
    grad: 'linear-gradient(135deg,#064e3b,#10b981)',
    lightGrad: 'linear-gradient(135deg,#d1fae5,#ecfdf5)',
    emoji: '👨‍💼',
    idLabel: 'Staff Username', passLabel: 'Password',
    idPlaceholder: 'Enter Staff Username', passPH: '••••••••',
  },
  {
    id: 'admin', label: 'Admin', sub: 'System administration',
    icon: 'fa-shield-halved',
    color: '#8b5cf6', glow: 'rgba(139,92,246,0.6)',
    grad: 'linear-gradient(135deg,#2e1065,#8b5cf6)',
    lightGrad: 'linear-gradient(135deg,#ede9fe,#f5f3ff)',
    emoji: '🛡️',
    idLabel: 'Admin Username', passLabel: 'Password',
    idPlaceholder: 'Enter Admin Username', passPH: '••••••••',
  },
  {
    id: 'principal', label: 'Principal', sub: 'Institutional dashboard',
    icon: 'fa-crown',
    color: '#f59e0b', glow: 'rgba(245,158,11,0.6)',
    grad: 'linear-gradient(135deg,#78350f,#f59e0b)',
    lightGrad: 'linear-gradient(135deg,#fef3c7,#fffbeb)',
    emoji: '👑',
    idLabel: 'Principal Username', passLabel: 'Password',
    idPlaceholder: 'Enter Principal Username', passPH: '••••••••',
  },
  {
    id: 'admission', label: 'Admission', sub: 'Enrollment & applications',
    icon: 'fa-file-circle-check',
    color: '#ec4899', glow: 'rgba(236,72,153,0.6)',
    grad: 'linear-gradient(135deg,#831843,#ec4899)',
    lightGrad: 'linear-gradient(135deg,#fce7f3,#fdf2f8)',
    emoji: '📋',
    idLabel: 'Admission Username', passLabel: 'Password',
    idPlaceholder: 'Enter Admission Username', passPH: '••••••••',
  },
];

/* ── Aurora mesh background ── */
function AuroraBackground({ color }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {/* Deep base */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,#020817 0%,#0a0f1e 50%,#050b18 100%)' }} />
      {/* Aurora blobs */}
      <div style={{
        position: 'absolute', width: '70vw', height: '70vw', maxWidth: 700, maxHeight: 700,
        borderRadius: '50%', top: '-20%', left: '-10%',
        background: `radial-gradient(circle, ${color}22 0%, transparent 65%)`,
        filter: 'blur(40px)', transition: 'background 0.6s ease',
        animation: 'auroraMove1 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '60vw', height: '60vw', maxWidth: 600, maxHeight: 600,
        borderRadius: '50%', bottom: '-15%', right: '-10%',
        background: `radial-gradient(circle, ${color}18 0%, transparent 65%)`,
        filter: 'blur(50px)', transition: 'background 0.6s ease',
        animation: 'auroraMove2 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '40vw', height: '40vw', maxWidth: 400, maxHeight: 400,
        borderRadius: '50%', top: '30%', right: '20%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)',
        filter: 'blur(35px)',
        animation: 'auroraMove3 18s ease-in-out infinite',
      }} />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.8) 100%)',
      }} />
    </div>
  );
}

/* ── Role selector card ── */
function RoleCard({ role, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 1 0', minWidth: 0,
        background: isActive
          ? role.grad
          : hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
        border: isActive
          ? `2px solid ${role.color}`
          : `2px solid ${hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 16,
        padding: '14px 8px 12px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        transform: isActive ? 'translateY(-4px) scale(1.03)' : hovered ? 'translateY(-2px)' : 'none',
        boxShadow: isActive ? `0 12px 32px ${role.glow}` : hovered ? '0 4px 16px rgba(0,0,0,0.3)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {isActive && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 14,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      )}
      <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{role.emoji}</span>
      <span style={{
        fontFamily: "'Poppins',sans-serif", fontSize: '0.68rem', fontWeight: 700,
        color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
        textTransform: 'uppercase', letterSpacing: '0.5px',
        transition: 'color 0.3s',
      }}>
        {role.label}
      </span>
      {isActive && (
        <div style={{
          position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
          width: 20, height: 3, borderRadius: 2, background: '#fff',
        }} />
      )}
    </button>
  );
}

export default function PortalLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathType = location.pathname.split('/').pop();
  const initRole = ROLES.find(r => r.id === pathType) || ROLES[0];

  const [active, setActive] = useState(initRole);
  const [userId, setUserId] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const switchRole = (role) => {
    setActive(role);
    setError('');
    setUserId('');
    setPass('');
    navigate(`/login/${role.id}`, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId.trim() || !pass.trim()) {
      setError('Both fields are required.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('id', userId);
      formData.append('pass', pass);
      formData.append('login_type', active.id);

      const response = await fetch(
        'https://creativecollege.in/CTC%20NEW%20REACT%20WEBSITE/api_login.php',
        {
          method: 'POST',
          body: formData,
          credentials: 'include',
        }
      );

      const result = await response.json();

      if (result.status === 'success') {
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          // ✅ Open tab HERE — still works because setTimeout is treated as user-trusted in most browsers
          // BUT the real fix: use location.href instead of a new tab, OR use the anchor trick below
          const a = document.createElement('a');
          a.href = result.redirect;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          setUserId('');
          setPass('');
          setShowPass(false);
          setError('');
          setSuccess(false);
          setLoading(false);
        }, 1500);

      } else {
        setLoading(false);
        setError(result.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      setLoading(false);
      setError('Network error. Please try again later.');
    }
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

    @keyframes auroraMove1 {
      0%,100%{transform:translate(0,0) scale(1);}
      33%{transform:translate(40px,-30px) scale(1.08);}
      66%{transform:translate(-20px,40px) scale(0.95);}
    }
    @keyframes auroraMove2 {
      0%,100%{transform:translate(0,0) scale(1);}
      33%{transform:translate(-50px,30px) scale(1.1);}
      66%{transform:translate(30px,-40px) scale(0.92);}
    }
    @keyframes auroraMove3 {
      0%,100%{transform:translate(0,0);}
      50%{transform:translate(-30px,50px);}
    }
    @keyframes portalIn {
      from{opacity:0;transform:translateY(40px) scale(0.97);}
      to{opacity:1;transform:translateY(0) scale(1);}
    }
    @keyframes portalSpin { to{transform:rotate(360deg);} }
    @keyframes portalShimmer {
      0%{background-position:-200% center;}
      100%{background-position:200% center;}
    }
    @keyframes successPop {
      0%{transform:scale(0.8);opacity:0;}
      60%{transform:scale(1.15);}
      100%{transform:scale(1);opacity:1;}
    }
    @keyframes floatBadge {
      0%,100%{transform:translateY(0);}
      50%{transform:translateY(-6px);}
    }
    @keyframes glowPulse {
      0%,100%{opacity:0.6;}
      50%{opacity:1;}
    }

    .portal-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 16px;
      position: relative;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .portal-main {
      width: 100%;
      max-width: 500px;
      position: relative;
      z-index: 2;
      opacity: 0;
      transform: translateY(40px) scale(0.97);
      transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
    }
    .portal-main.visible { opacity: 1; transform: translateY(0) scale(1); }

    /* Top logo area */
    .portal-logo-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 28px;
      gap: 12px;
    }
    .portal-logo-ring {
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      border: 2px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: center;
      position: relative;
      transition: border-color 0.4s, box-shadow 0.4s;
    }
    .portal-logo-ring img {
      width: 62px; height: 62px;
      border-radius: 50%; object-fit: contain;
    }
    .portal-logo-ring-glow {
      position: absolute; inset: -4px;
      border-radius: 50%;
      border: 2px solid transparent;
      animation: glowPulse 2s ease-in-out infinite;
      pointer-events: none;
      transition: border-color 0.4s;
    }
    .portal-wordmark {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800; font-size: 1.15rem;
      color: #fff; letter-spacing: -0.3px; text-align: center;
    }
    .portal-wordmark span {
      background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .portal-tagline {
      font-size: 0.72rem; color: rgba(255,255,255,0.35); font-weight: 500; letter-spacing: 2px;
      text-transform: uppercase;
    }

    /* Card */
    .portal-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 28px;
      padding: 32px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.5);
      position: relative;
      overflow: hidden;
    }
    .portal-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    }

    /* Role grid */
    .portal-role-grid {
      display: flex;
      gap: 8px;
      margin-bottom: 28px;
    }

    /* Divider */
    .portal-divider {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 24px;
    }
    .portal-divider-line {
      flex: 1; height: 1px;
      background: rgba(255,255,255,0.07);
    }
    .portal-divider-text {
      font-size: 0.7rem; font-weight: 600;
      color: rgba(255,255,255,0.25);
      letter-spacing: 1.5px; text-transform: uppercase;
      white-space: nowrap;
    }

    /* Heading */
    .portal-heading {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem; font-weight: 800;
      color: #fff; margin-bottom: 4px; letter-spacing: -0.5px;
    }
    .portal-subhead {
      font-size: 0.8rem; color: rgba(255,255,255,0.38);
      font-weight: 500; margin-bottom: 24px;
    }

    /* Error */
    .portal-error {
      background: rgba(239,68,68,0.1);
      border: 1px solid rgba(239,68,68,0.2);
      border-radius: 12px; padding: 10px 14px;
      display: flex; align-items: center; gap: 8px;
      font-size: 0.8rem; color: #fca5a5; margin-bottom: 16px;
    }

    /* Field */
    .portal-field { margin-bottom: 16px; }
    .portal-field-label {
      font-size: 0.72rem; font-weight: 700;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase; letter-spacing: 1.2px;
      margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
    }
    .portal-input-wrap {
      position: relative;
      border-radius: 14px;
      border: 1.5px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      display: flex; align-items: center;
      transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
      overflow: hidden;
    }
    .portal-input-wrap:focus-within {
      background: rgba(255,255,255,0.08);
    }
    .portal-input-icon {
      width: 46px; display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.25); font-size: 0.88rem; flex-shrink: 0;
      transition: color 0.25s;
    }
    .portal-input-wrap:focus-within .portal-input-icon { color: rgba(255,255,255,0.6); }
    .portal-input-wrap input {
      flex: 1; border: none; background: transparent;
      padding: 14px 12px 14px 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.9rem; color: #fff; outline: none;
    }
    .portal-input-wrap input::placeholder { color: rgba(255,255,255,0.18); }
    .portal-eye-btn {
      width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
      background: none; border: none;
      color: rgba(255,255,255,0.25); cursor: pointer;
      font-size: 0.82rem; transition: color 0.2s; flex-shrink: 0;
    }
    .portal-eye-btn:hover { color: rgba(255,255,255,0.7); }
    /* Focus ring strip */
    .portal-input-focus-bar {
      position: absolute; bottom: 0; left: 0; right: 0;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      border-radius: 0 0 14px 14px;
    }
    .portal-input-wrap:focus-within .portal-input-focus-bar { transform: scaleX(1); }

    /* Submit */
    .portal-submit {
      width: 100%; margin-top: 8px;
      padding: 16px;
      border: none; border-radius: 14px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.95rem; font-weight: 800;
      color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      position: relative; overflow: hidden;
      transition: transform 0.2s, box-shadow 0.3s;
      letter-spacing: 0.2px;
    }
    .portal-submit:hover:not(:disabled) {
      transform: translateY(-2px);
    }
    .portal-submit:disabled { opacity: 0.65; cursor: not-allowed; }
    .portal-submit-shimmer {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
      background-size: 200% 100%;
      animation: portalShimmer 2s linear infinite;
    }
    .portal-spinner {
      width: 18px; height: 18px;
      border: 2.5px solid rgba(255,255,255,0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: portalSpin 0.65s linear infinite;
    }

    /* Success overlay */
    .portal-success-overlay {
      position: absolute; inset: 0;
      background: rgba(2,8,23,0.92);
      backdrop-filter: blur(10px);
      border-radius: 28px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 12px; z-index: 10;
      animation: successPop 0.4s cubic-bezier(0.4,0,0.2,1) both;
    }
    .portal-success-icon {
      width: 64px; height: 64px; border-radius: 50%;
      background: linear-gradient(135deg,#10b981,#34d399);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.6rem; color: #fff;
      box-shadow: 0 0 40px rgba(16,185,129,0.5);
    }

    /* Bottom trust strip */
    .portal-trust-strip {
      margin-top: 20px;
      display: flex; align-items: center; justify-content: center; gap: 6px;
      flex-wrap: wrap;
    }
    .portal-trust-badge {
      display: inline-flex; align-items: center; gap: 5px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px; padding: 5px 12px;
      font-size: 0.68rem; font-weight: 600;
      color: rgba(255,255,255,0.3);
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .portal-trust-badge i { font-size: 0.6rem; }

    @media(max-width:480px){
      .portal-card { padding: 24px 20px; }
      .portal-role-grid { gap: 6px; }
      .portal-heading { font-size: 1.3rem; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="portal-page">
        <AuroraBackground color={active.color} />

        <div className={`portal-main${mounted ? ' visible' : ''}`}>

          {/* Logo area */}
          <div className="portal-logo-area">
            <div
              className="portal-logo-ring"
              style={{ borderColor: `${active.color}40`, boxShadow: `0 0 32px ${active.glow}` }}
            >
              <div className="portal-logo-ring-glow" style={{ borderColor: active.color }} />
              <img src="https://creativecollege.in/Admission_Dashboard/images/CTC%20logo.png" alt="CTC" />
            </div>
            <div>
              <div className="portal-wordmark">Creative Techno <span>College</span></div>
              <div className="portal-tagline">Unified Portal · Angul, Odisha</div>
            </div>
          </div>

          {/* Main card */}
          <div className="portal-card">
            {/* Success overlay */}
            {success && (
              <div className="portal-success-overlay">
                <div className="portal-success-icon"><i className="fa-solid fa-check" /></div>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Login Successful!</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>Redirecting you…</span>
              </div>
            )}

            {/* Role selector */}
            <div className="portal-role-grid">
              {ROLES.map(role => (
                <RoleCard
                  key={role.id}
                  role={role}
                  isActive={active.id === role.id}
                  onClick={() => switchRole(role)}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="portal-divider">
              <div className="portal-divider-line" />
              <span className="portal-divider-text">Sign in as {active.label}</span>
              <div className="portal-divider-line" />
            </div>

            {/* Heading */}
            <h2 className="portal-heading" style={{ color: active.color }}>
              {active.emoji} {active.label} Login
            </h2>
            <p className="portal-subhead">{active.sub}</p>

            {/* Error */}
            {error && (
              <div className="portal-error">
                <i className="fa-solid fa-circle-exclamation" />
                {error}
              </div>
            )}

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* ID */}
              <div className="portal-field">
                <label className="portal-field-label">
                  <i className="fa-solid fa-id-badge" style={{ color: active.color }} />
                  {active.idLabel}
                </label>
                <div className="portal-input-wrap" style={{ '--ac': active.color }}>
                  <span className="portal-input-icon"><i className="fa-solid fa-user" /></span>
                  <input
                    type="text" value={userId}
                    onChange={e => setUserId(e.target.value)}
                    placeholder={active.idPlaceholder}
                    autoComplete="username"
                  />
                  <div className="portal-input-focus-bar" style={{ background: active.color }} />
                </div>
              </div>

              {/* Password */}
              <div className="portal-field">
                <label className="portal-field-label">
                  <i className="fa-solid fa-lock" style={{ color: active.color }} />
                  {active.passLabel}
                </label>
                <div className="portal-input-wrap">
                  <span className="portal-input-icon"><i className="fa-solid fa-key" /></span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    placeholder={active.passPH}
                    autoComplete="current-password"
                  />
                  <button type="button" className="portal-eye-btn" onClick={() => setShowPass(p => !p)}>
                    <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`} />
                  </button>
                  <div className="portal-input-focus-bar" style={{ background: active.color }} />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="portal-submit"
                disabled={loading}
                style={{
                  background: active.grad,
                  boxShadow: `0 8px 32px ${active.glow}`,
                }}
              >
                {!loading && <div className="portal-submit-shimmer" />}
                {loading
                  ? <><div className="portal-spinner" /> Authenticating…</>
                  : <><i className="fa-solid fa-right-to-bracket" /> Sign In to Portal</>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}