import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Scroll-reveal hook ── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        const io = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.08 }
        );
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);
}

/* ── Animated counter hook ── */
function useCounter(target, duration = 1800) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            let start = 0;
            const step = Math.ceil(target / (duration / 16));
            const tick = () => {
                start = Math.min(start + step, target);
                setCount(start);
                if (start < target) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, { threshold: 0.3 });
        io.observe(el);
        return () => io.disconnect();
    }, [target, duration]);
    return [count, ref];
}

/* ── SVG Ring component ── */
function Ring({ pct, color, label, seats, admitted }) {
    const r = 54, circ = 2 * Math.PI * r;
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.3 });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);
    const offset = visible ? circ * (1 - pct / 100) : circ;
    return (
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <div style={{ position: 'relative', width: '130px', height: '130px' }}>
                <svg width="130" height="130" viewBox="0 0 130 130">
                    <circle cx="65" cy="65" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                    <circle
                        cx="65" cy="65" r={r}
                        fill="none"
                        stroke={color}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={circ}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)', transformOrigin: '65px 65px', transform: 'rotate(-90deg)' }}
                    />
                </svg>
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: '1.4rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{pct}%</span>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>FILLED</span>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{label}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>
                    {admitted} / {seats} seats
                </div>
            </div>
        </div>
    );
}

/* ── Data ── */
const courses = [
    {
        abbr: 'BBA', full: 'Bachelor of Business Administration',
        seats: 120, duration: '4 Years', fee: '₹50,000/yr',
        icon: 'fa-solid fa-briefcase',
        tags: ['Marketing', 'Finance', 'HR', 'Entrepreneurship'],
        accent: '#f5c518',
    },
    {
        abbr: 'BCA', full: 'Bachelor of Computer Applications',
        seats: 120, duration: '4 Years', fee: '₹60,000/yr',
        icon: 'fa-solid fa-laptop-code',
        tags: ['Web Dev', 'Networking', 'Database', 'Java'],
        accent: '#00d4ff',
    },
    {
        abbr: 'B.Sc CS (H)', full: 'B.Sc Computer Science (Hons.)',
        seats: 128, duration: '4 Years', fee: '₹60,000/yr',
        icon: 'fa-solid fa-microchip',
        tags: ['AI / ML', 'Python', 'Algorithms', 'Cloud'],
        accent: '#7b61ff',
    },
    {
        abbr: 'B.Sc DS', full: 'B.Sc Data Science',
        seats: 30, duration: '4 Years', fee: '₹70,000/yr',
        icon: 'fa-solid fa-chart-pie',
        tags: ['Data Analytics', 'Statistics', 'ML', 'Tableau'],
        accent: '#ff6b6b',
    },
];

const steps = [
    { n: '01', icon: 'fa-solid fa-clipboard-check', title: 'Check Eligibility', body: '10+2 pass with min. 45% from any recognised board.' },
    { n: '02', icon: 'fa-solid fa-pen-to-square', title: 'Fill Application', body: 'Complete the online form or visit the college office.' },
    { n: '03', icon: 'fa-solid fa-file-arrow-up', title: 'Upload Documents', body: 'Upload scanned copies as per the document checklist.' },
    { n: '04', icon: 'fa-solid fa-credit-card', title: 'Pay Fee', body: 'Pay admission fee online or at the college counter.' },
    { n: '05', icon: 'fa-solid fa-circle-check', title: 'Enrolment', body: 'Receive confirmation and report on the specified date.' },
];

const docs = [
    { icon: 'fa-solid fa-file-signature', label: '10th Certificate & Mark Sheet' },
    { icon: 'fa-solid fa-file-lines', label: '+2 Certificate & Mark Sheet' },
    { icon: 'fa-solid fa-id-card', label: 'Aadhaar Card (Self & Parent)' },
    { icon: 'fa-solid fa-graduation-cap', label: 'Character / CLC Certificate' },
    { icon: 'fa-solid fa-passport', label: 'Migration Certificate' },
    { icon: 'fa-solid fa-camera', label: '4 Passport-Size Photographs' },
    { icon: 'fa-solid fa-shield-halved', label: 'Caste Certificate (if applicable)' },
    { icon: 'fa-solid fa-building-columns', label: 'Bank Account Details' },
];

const coordinators = [
    { course: 'BBA', name: 'Mr. Subhrajyoti Behera', email: 'subhrajyoticafpl@gmail.com', phone: '+91 9861071840', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg', accent: '#f5c518' },
    { course: 'BCA', name: 'Mr. Manoj Kumar Das', email: 'dasmanojp@gmail.com', phone: '+91 9338233303', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg', accent: '#00d4ff' },
    { course: 'B.Sc CS(H)', name: 'Mr. Krishnashis Mishra', email: 'principal.creativecollege@gmail.com', phone: '+91 9853325903', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg', accent: '#7b61ff' },
    { course: 'B.Sc DS', name: 'Mr. Bhabani Sankar Sahoo', email: 'bhabaniwipro89@gmail.com', phone: '+91 9668844571', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg', accent: '#ff6b6b' },
];

/* seats filled in 2024 */
const rings = [
    { label: 'BBA', pct: 100, color: '#f5c518', seats: 120, admitted: 120 },
    { label: 'BCA', pct: 50, color: '#00d4ff', seats: 120, admitted: 60 },
    { label: 'B.Sc CS(H)', pct: 53, color: '#7b61ff', seats: 128, admitted: 68 },
    { label: 'B.Sc DS', pct: 83, color: '#ff6b6b', seats: 36, admitted: 30 },
];

/* yearly totals */
const yearly = [
    { year: '2020', total: 119, bba: 16, bca: 53, bsccs: 50 },
    { year: '2021', total: 154, bba: 30, bca: 60, bsccs: 64 },
    { year: '2022', total: 155, bba: 30, bca: 60, bsccs: 65 },
    { year: '2023', total: 157, bba: 30, bca: 60, bsccs: 67 },
    { year: '2024', total: 158, bba: 30, bca: 60, bsccs: 68 },
];
const maxY = 200;

function StatCounter({ target, suffix = '' }) {
    const [c, ref] = useCounter(target);
    return <span ref={ref}>{c}{suffix}</span>;
}

export default function Admission() {
    useReveal();
    return (
        <>
            {/* ══════════════════════════════════════════
                HERO
            ══════════════════════════════════════════ */}
            <div className="adm2-hero">
                <div className="adm2-hero-glow" />
                <div className="adm2-hero-content">
                    <span className="section-label" style={{ color: 'var(--cyan)' }}>Admissions Open</span>
                    <h1>
                        Shape Your <span style={{ color: 'var(--gold)' }}>Future</span>
                        <br />at Creative Techno College
                    </h1>
                    <p>AICTE Approved · Utkal University Affiliated · Angul, Odisha</p>
                    <div className="adm2-hero-btns">
                        <Link to="/admission/apply" className="btn-primary">
                            <i className="fa-solid fa-pen-to-square"></i> Apply Online
                        </Link>
                        <a href="/pdfs/brochure.pdf" download className="btn-outline">
                            <i className="fa-solid fa-file-arrow-down"></i> Download Brochure
                        </a>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="adm2-hero-stats">
                    {[
                        { icon: 'fa-solid fa-users', val: 398, suf: '+', label: 'Total Seats' },
                        { icon: 'fa-solid fa-graduation-cap', val: 1500, suf: '+', label: 'Alumni' },
                        { icon: 'fa-solid fa-trophy', val: 95, suf: '%', label: 'Placement Rate' },
                        { icon: 'fa-solid fa-calendar-days', val: 15, suf: '+', label: 'Years of Excellence' },
                    ].map((s, i) => (
                        <div key={i} className="adm2-qstat">
                            <i className={s.icon}></i>
                            <div className="adm2-qstat-val"><StatCounter target={s.val} suffix={s.suf} /></div>
                            <div className="adm2-qstat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════════════
                COURSES
            ══════════════════════════════════════════ */}
            <section className="adm2-section" style={{ background: 'var(--page-bg)' }}>
                <div className="adm2-wrap">
                    <div className="adm2-heading reveal">
                        <span className="section-label">Academic Programs</span>
                        <h2 className="section-title">Courses <span>Offered</span></h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Government recognised · Utkal University affiliated · Industry-focused curriculum
                        </p>
                    </div>
                    <div className="adm2-courses">
                        {courses.map((c, i) => (
                            <div key={i} className="adm2-course reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                {/* accent top border */}
                                <div style={{ height: '4px', background: c.accent, borderRadius: '20px 20px 0 0', margin: '-28px -28px 24px', flexShrink: 0 }} />
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ background: `${c.accent}1a`, border: `1px solid ${c.accent}44`, borderRadius: '14px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', color: c.accent, flexShrink: 0 }}>
                                        <i className={c.icon}></i>
                                    </div>
                                    <div style={{ background: 'var(--page-bg)', borderRadius: '20px', padding: '4px 13px', fontSize: '0.75rem', fontFamily: 'var(--font-head)', fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>
                                        {c.seats} seats
                                    </div>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--navy)', marginBottom: '4px' }}>{c.abbr}</h3>
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>{c.full}</p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                    {c.tags.map((t, j) => (
                                        <span key={j} style={{ background: `${c.accent}16`, color: c.accent, border: `1px solid ${c.accent}30`, borderRadius: '10px', padding: '3px 10px', fontSize: '0.69rem', fontFamily: 'var(--font-head)', fontWeight: 600 }}>{t}</span>
                                    ))}
                                </div>
                                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(10,22,40,0.07)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-head)', fontWeight: 600 }}>
                                        <i className="fa-regular fa-clock" style={{ marginRight: '5px' }}></i>{c.duration} · {c.fee}
                                    </span>
                                    <Link to="/admission/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: c.accent, color: c.accent === '#f5c518' ? '#0a1628' : '#fff', padding: '7px 16px', borderRadius: '20px', fontSize: '0.76rem', fontFamily: 'var(--font-head)', fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.2s' }}>
                                        Apply <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                ADMISSION STATISTICS — beautiful data viz
            ══════════════════════════════════════════ */}
            <section className="adm2-section" style={{ background: 'linear-gradient(160deg, #060d1a 0%, #0a1f3d 50%, #091828 100%)', position: 'relative', overflow: 'hidden' }}>
                {/* decorative blobs */}
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="adm2-wrap" style={{ position: 'relative' }}>
                    <div className="adm2-heading reveal">
                        <span className="section-label" style={{ color: 'var(--cyan)' }}>Data Insights</span>
                        <h2 className="section-title" style={{ color: '#fff' }}>Admission <span style={{ color: 'var(--gold)' }}>Statistics</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginTop: '6px' }}>Academic Year 2024-25 seat utilisation &amp; year-over-year enrollment trends</p>
                    </div>

                    {/* ─── Seat Fill Rings ─── */}
                    <div className="adm2-rings-row">
                        {rings.map((r, i) => <Ring key={i} {...r} />)}
                    </div>

                    {/* ─── Divider ─── */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '56px 0' }} />

                    {/* ─── Year-over-Year horizontal bars ─── */}
                    <div className="adm2-heading reveal" style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Year-over-Year Enrollment (2020–2024)</h3>
                    </div>

                    <div className="adm2-yoy reveal">
                        {yearly.map((y, i) => (
                            <div key={i} className="adm2-yoy-row">
                                <div className="adm2-yoy-year">{y.year}</div>
                                <div className="adm2-yoy-bars">
                                    {/* BBA */}
                                    <div className="adm2-yoy-track" title={`BBA: ${y.bba}`}>
                                        <div className="adm2-yoy-fill" style={{ width: `${(y.bba / maxY) * 100}%`, background: '#f5c518' }} />
                                        <span className="adm2-yoy-tip">{y.bba}</span>
                                    </div>
                                    {/* BCA */}
                                    <div className="adm2-yoy-track" title={`BCA: ${y.bca}`}>
                                        <div className="adm2-yoy-fill" style={{ width: `${(y.bca / maxY) * 100}%`, background: '#00d4ff' }} />
                                        <span className="adm2-yoy-tip">{y.bca}</span>
                                    </div>
                                    {/* BSc CS */}
                                    <div className="adm2-yoy-track" title={`B.Sc CS: ${y.bsccs}`}>
                                        <div className="adm2-yoy-fill" style={{ width: `${(y.bsccs / maxY) * 100}%`, background: '#7b61ff' }} />
                                        <span className="adm2-yoy-tip">{y.bsccs}</span>
                                    </div>
                                </div>
                                <div className="adm2-yoy-total">
                                    <span style={{ fontFamily: 'var(--font-head)', fontWeight: 900, color: 'var(--gold)', fontSize: '1.3rem' }}>{y.total}</span>
                                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', display: 'block', marginTop: '2px' }}>total</span>
                                </div>
                            </div>
                        ))}
                        {/* Legend */}
                        <div className="adm2-yoy-legend">
                            {[['#f5c518', 'BBA'], ['#00d4ff', 'BCA'], ['#7b61ff', 'B.Sc CS(H)']].map(([c, l]) => (
                                <span key={l}><span style={{ background: c }}></span>{l}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                HOW TO APPLY — horizontal stepper
            ══════════════════════════════════════════ */}
            <section className="adm2-section" style={{ background: '#fff' }}>
                <div className="adm2-wrap">
                    <div className="adm2-heading reveal">
                        <span className="section-label">Simple Process</span>
                        <h2 className="section-title">How to <span>Apply</span></h2>
                    </div>
                    <div className="adm2-steps reveal">
                        {steps.map((s, i) => (
                            <div key={i} className="adm2-step">
                                {i < steps.length - 1 && <div className="adm2-step-line" />}
                                <div className="adm2-step-circle">
                                    <i className={s.icon}></i>
                                </div>
                                <div className="adm2-step-num">{s.n}</div>
                                <h3>{s.title}</h3>
                                <p>{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                DOCS + COORDINATORS
            ══════════════════════════════════════════ */}
            <section className="adm2-section" style={{ background: 'var(--page-bg)' }}>
                <div className="adm2-wrap adm2-doc-coord">

                    {/* Documents */}
                    <div className="reveal-left" style={{ flex: '1 1 300px' }}>
                        <span className="section-label">Checklist</span>
                        <h2 className="section-title" style={{ marginBottom: '24px' }}>Documents <span>Required</span></h2>
                        <div className="adm2-docgrid">
                            {docs.map((d, i) => (
                                <div key={i} className="adm2-docitem">
                                    <i className={d.icon}></i>
                                    <span>{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coordinators */}
                    <div className="reveal-right" style={{ flex: '1 1 340px' }}>
                        <span className="section-label">Get in Touch</span>
                        <h2 className="section-title" style={{ marginBottom: '24px' }}>Coordinators</h2>
                        <div className="adm2-coords">
                            {coordinators.map((c, i) => (
                                <div key={i} className="adm2-coord">
                                    <img src={c.img} alt={c.name} className="adm2-coord-img" onError={e => e.target.style.display = 'none'} style={{ borderColor: c.accent }} />
                                    <div>
                                        <span className="adm2-coord-badge" style={{ background: `${c.accent}22`, color: c.accent, border: `1px solid ${c.accent}44` }}>{c.course}</span>
                                        <p className="adm2-coord-name">{c.name}</p>
                                        <p className="adm2-coord-info"><i className="fa-solid fa-phone"></i>{c.phone}</p>
                                        <p className="adm2-coord-info"><i className="fa-solid fa-envelope"></i>{c.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                BROCHURE
            ══════════════════════════════════════════ */}
            <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #0f2a4e 100%)', padding: '80px 5%', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>
                    <div className="reveal-left" style={{ flex: '1 1 300px' }}>
                        <span className="section-label" style={{ color: 'var(--cyan)' }}>Official Publication</span>
                        <h2 className="section-title" style={{ color: '#fff', marginBottom: '18px' }}>College <span style={{ color: 'var(--gold)' }}>Brochure</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: '0.9rem' }}>
                            Creative Techno College, Angul — permanently recognised by the Government of Odisha, Dept. of Higher Education and affiliated to Utkal University.
                            A pioneer in IT and Management education in Central Odisha since 2010.
                        </p>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                                <i className="fa-solid fa-location-dot" style={{ color: 'var(--cyan)', marginRight: '8px' }}></i>
                                Baluakata, Saradhapur, Angul, Odisha
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                                <i className="fa-solid fa-building" style={{ color: 'var(--cyan)', marginRight: '8px' }}></i>
                                City Office: Tamrit Colony, Angul
                            </p>
                        </div>
                        <a href="/pdfs/brochure.pdf" download className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
                            <i className="fa-solid fa-file-arrow-down"></i> Download Brochure
                        </a>
                    </div>
                    <div className="reveal-right" style={{ flex: '1 1 280px', maxWidth: '460px' }}>
                        <img
                            src="/CTC NEW REACT WEBSITE/images/Admission/banner.png"
                            alt="CTC Brochure"
                            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
                            onError={e => e.target.style.display = 'none'}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
