import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

/* ── Admission Banner Popup ── */
const bannerSlides = [
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/1.jpg', caption: 'Admissions Open 2026–27', sub: 'BBA • BCA • B.Sc CS • B.Sc Data Science' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/2.jpg', caption: '100% Placement Assistance', sub: 'Top Recruiters • Industry-Ready Programs' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/4.jpg', caption: 'World-Class Campus & Library', sub: 'Modern Infrastructure • Expert Faculty' },
];

function AdmissionBanner({ onClose }) {
    const [idx, setIdx] = useState(0);
    const navigate = useNavigate();
    const timer = useRef(null);

    useEffect(() => {
        timer.current = setInterval(() => setIdx(i => (i + 1) % bannerSlides.length), 3500);
        return () => clearInterval(timer.current);
    }, []);

    const goTo = (n) => setIdx((n + bannerSlides.length) % bannerSlides.length);

    return (
        <div className="adm-banner-overlay" onClick={onClose}>
            <div className="adm-banner-box" onClick={e => e.stopPropagation()}>
                {/* Close button */}
                <button className="adm-banner-close" onClick={onClose} aria-label="Close banner">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {/* Image slider */}
                <div className="adm-banner-slider">
                    {bannerSlides.map((s, i) => (
                        <div
                            key={i}
                            className={`adm-banner-slide ${i === idx ? 'active' : ''}`}
                        >
                            <img src={s.img} alt={s.caption} className="adm-banner-slide-img" />
                            <div className="adm-banner-slide-overlay" />
                            <div className="adm-banner-slide-text">
                                <p className="adm-banner-eyebrow"><i className="fa-solid fa-graduation-cap"></i> Creative Techno College</p>
                                <h2>{s.caption}</h2>
                                <p>{s.sub}</p>
                            </div>
                        </div>
                    ))}

                    {/* Dots */}
                    <div className="adm-banner-dots">
                        {bannerSlides.map((_, i) => (
                            <button key={i} className={`adm-banner-dot ${i === idx ? 'active' : ''}`} onClick={() => goTo(i)} />
                        ))}
                    </div>

                    {/* Arrows */}
                    <button className="adm-banner-arrow left" onClick={() => goTo(idx - 1)}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="adm-banner-arrow right" onClick={() => goTo(idx + 1)}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                {/* CTA */}
                <div className="adm-banner-footer">
                    <div className="adm-banner-footer-text">
                        <span className="adm-banner-tag">🎓 Admission 2026–27 Open Now!</span>
                        <p>Seats are filling fast. Secure your future today.</p>
                    </div>
                    <button
                        className="adm-banner-apply-btn"
                        onClick={() => { onClose(); navigate('/admission/apply'); }}
                    >
                        <i className="fa-solid fa-paper-plane"></i> Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ── Scroll Reveal Hook ── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        const io = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.12 }
        );
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);
}

/* ── Hero Slider ── */
const slides = [
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/creative-campus.jpg', eyebrow: 'Welcome to Excellence', title: 'Shaping Leaders of Tomorrow', sub: 'AICTE Approved • Utkal University Affiliated • Est. 2010' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/7.jpg', eyebrow: 'Beautiful Campus', title: 'Green & Student-Friendly Environment', sub: 'Sprawling campus of knowledge and growth' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/4.jpg', eyebrow: 'Modern Library', title: 'Resources to Empower Learning', sub: 'Thousands of books, journals & digital resources' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/1.jpg', eyebrow: 'World-Class Education', title: 'Where Innovation Meets Tradition', sub: 'BBA • BCA • B.Sc (CS) • B.Sc (Data Science)' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/2.jpg', eyebrow: '100% Placement Assistance', title: 'Your Future Starts Here', sub: '1500+ Students Placed • 100+ Recruiting Companies' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/5.jpg', eyebrow: 'Vibrant Campus Life', title: 'Learn. Grow. Excel.', sub: 'Sports • Cultural • Technocrat • Disha & CSR' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg', eyebrow: 'Saraswati Puja Celebrations', title: 'Honouring the Goddess of Knowledge', sub: 'Faith • Culture • Togetherness' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg', eyebrow: 'Fun Fest', title: 'Where Talent Takes the Stage', sub: 'Energy • Creativity • Unforgettable Moments' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg', eyebrow: 'Holi Celebrations', title: 'A Festival of Colours & Joy', sub: 'Vibrant • Festive • Full of Life' },
];

function HeroSlider() {
    const [idx, setIdx] = useState(0);
    const timer = useRef(null);

    const go = (n) => setIdx((n + slides.length) % slides.length);

    useEffect(() => {
        timer.current = setInterval(() => go(idx + 1), 5000);
        return () => clearInterval(timer.current);
    }, [idx]);

    return (
        <section className="hero-section">
            <div className="hero-slides-wrap" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {slides.map((s, i) => (
                    <div key={i} className="hero-slide">
                        <img src={s.img} alt={s.title} loading={i === 0 ? 'eager' : 'lazy'} />
                        <div className="hero-overlay" />
                        <div className="hero-content">
                            <p className="hero-eyebrow">{s.eyebrow}</p>
                            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: s.title.replace(/([A-Z][a-z]+)/, '<span>$1</span>') }} />
                            <p className="hero-sub">{s.sub}</p>
                            <div className="hero-actions">
                                <Link to="/admission" className="btn-primary">
                                    <i className="fa-solid fa-graduation-cap"></i> Apply Now
                                </Link>
                                <Link to="/about/ctc" className="btn-outline">
                                    Explore More <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="hero-arrow left" onClick={() => go(idx - 1)} aria-label="Previous">
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="hero-arrow right" onClick={() => go(idx + 1)} aria-label="Next">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="hero-dots">
                {slides.map((_, i) => (
                    <div key={i} className={`hero-dot${i === idx ? ' active' : ''}`} onClick={() => go(i)} />
                ))}
            </div>
        </section>
    );
}

/* ── Stats Counter ── */
const statsData = [
    { end: 5000, suffix: '+', label: 'Alumni' },
    { end: 500, suffix: '+', label: 'Students' },
    { end: 200, suffix: '+', label: 'Academic Events' },
    { end: 1500, suffix: '+', label: 'Placement' },
    { end: 4, suffix: '', label: 'Clubs' },
];

function StatsSection() {
    const [counts, setCounts] = useState(statsData.map(() => 0));
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !started.current) {
                started.current = true;
                statsData.forEach((s, i) => {
                    const dur = 1800;
                    const step = s.end / (dur / 16);
                    let cur = 0;
                    const t = setInterval(() => {
                        cur = Math.min(cur + step, s.end);
                        setCounts(prev => { const n = [...prev]; n[i] = Math.floor(cur); return n; });
                        if (cur >= s.end) clearInterval(t);
                    }, 16);
                });
            }
        }, { threshold: 0.3 });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <section className="stats-section" ref={ref}>
            <div style={{ textAlign: 'center', marginBottom: '16px', position: 'relative' }}>
                <span className="section-label" style={{ color: 'rgba(0,212,255,0.8)' }}>By The Numbers</span>
                <h2 className="section-title" style={{ color: '#fff' }}>Our <span style={{ color: 'var(--gold)' }}>Impact</span></h2>
            </div>
            <div className="stats-grid">
                {statsData.map((s, i) => (
                    <div key={i} className="stat-card reveal">
                        <div className="stat-number">{counts[i]}{s.suffix}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ── Courses ── */
const courses = [
    { abbr: 'BBA', full: 'Bachelor of Business Administration', seats: 120, icon: '💼', desc: 'Management, Marketing, Finance & Entrepreneurship' },
    { abbr: 'BCA', full: 'Bachelor of Computer Applications', seats: 120, icon: '💻', desc: 'Programming, Databases & Software Development' },
    { abbr: 'B.Sc (CS)', full: 'Bachelor of Science in Computer Science', seats: 128, icon: '🖥️', desc: 'Algorithms, Theory & Practical Programming' },
    { abbr: 'B.Sc (DS)', full: 'Bachelor of Science in Data Science', seats: 30, icon: '📊', desc: 'Machine Learning, Statistics & Data Analytics' },
];

/* ── Admin ── */
const admins = [
    { name: 'Mr. Gyanendra Kumar Sahu', role: 'Chairman', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg' },
    { name: 'Er. Manoj Kumar Das', role: 'Dean Academic', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/Dean Sir.jpg' },
    { name: 'Mr. Krishnasis Mishra', role: 'Principal', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/Principal Sir.jpg' },
    { name: 'Mr. Bhabani Shankar Sahoo', role: 'Vice Principal', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/Bhabani Sir.jpg' },
    { name: 'Mr. Subhrajyoti Behera', role: 'Management HOD', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/Subhrajyoti Sir.jpg' },
];

/* ── Recruiters ── */
const recruiters = [
    { name: 'Wipro', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png' },
    { name: 'TCS', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg' },
    { name: 'LTI Mindtree', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png' },
    { name: 'Infosys', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png' },
    { name: 'HCL', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/hcl.png' },
    { name: 'Capgemini', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png' },
    { name: 'Cisco', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/cisco.png' },
    { name: 'Tech Mahindra', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/tech.jpg' },
    { name: 'IBM', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/ibm.jpeg.jpg' },
    { name: 'Cognizant', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png' },
    { name: 'Accenture', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/acenture.png' },
    { name: 'Deloitte', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg' },
    { name: 'Airtel', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/airtel.png' },
    { name: 'Corpnizer', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/corpnizers.jpeg' },
    { name: 'DXC', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/dxc.png' },
    { name: 'Zoho', img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/zoho.jpg' },
];

/* ── FAQ Section ── */
const faqs = [
    { q: 'Which is the best college in Angul?', a: 'Creative Techno College (CTC), Angul is the top-ranked professional and technical college in Angul, Odisha. AICTE-approved, affiliated to Utkal University, and established in 2010, CTC has consistently delivered quality education with a 95% placement rate.' },
    { q: 'Is CTC Angul approved by AICTE?', a: 'Yes! CTC is approved by AICTE (All India Council for Technical Education) and permanently affiliated to Utkal University. It is also recognized by the Government of Odisha, Department of Higher Education.' },
    { q: 'What courses are offered at Creative Techno College, Angul?', a: 'CTC offers 4-year degree programs: BBA (Business Administration) – 120 seats, BCA (Computer Applications) – 120 seats, B.Sc Computer Science (Honours) – 128 seats, and B.Sc Data Science – 30 seats.' },
    { q: 'What is the placement record of Creative Techno College?', a: '1500+ students have been successfully placed in top companies like Wipro, TCS, Infosys, HCL, Capgemini, IBM, Cognizant, Accenture, and more. The highest package is ₹4.5 LPA with a 95% overall placement rate.' },
    { q: 'How to apply for admission in CTC Angul 2026-27?', a: 'Eligibility: 10+2 pass with minimum 45% marks from any recognised board. Apply online at creativecollege.in or visit the campus at Baluakata, Saradhapur, Angul. Call +91-9778427170 for help.' },
    { q: 'Does CTC Angul have hostel facilities?', a: 'Yes, CTC provides separate, secure hostel facilities for boys and girls with 24/7 security, comfortable rooms, and all essential amenities at affordable rates.' },
];

function FAQSection() {
    const [open, setOpen] = useState(null);
    return (
        <section className="faq-section">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span className="section-label">Got Questions?</span>
                <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    Everything you need to know about Creative Techno College, Angul.
                </p>
            </div>
            <div className="faq-list">
                {faqs.map((f, i) => (
                    <div key={i} className={`faq-item${open === i ? ' faq-open' : ''}`}>
                        <button
                            id={`faq-q-${i}`}
                            className="faq-question"
                            onClick={() => setOpen(open === i ? null : i)}
                            aria-expanded={open === i}
                            aria-controls={`faq-a-${i}`}
                        >
                            <span>{f.q}</span>
                            <i className={`fa-solid fa-chevron-down faq-icon${open === i ? ' rotated' : ''}`}></i>
                        </button>
                        <div
                            id={`faq-a-${i}`}
                            className="faq-answer"
                            role="region"
                            aria-labelledby={`faq-q-${i}`}
                        >
                            <p>{f.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function Home() {
    useReveal();
    const [showBanner, setShowBanner] = useState(true);

    return (
        <>
            {/* ── Per-page SEO ── */}
            <SEO
                title="Creative Techno College, Angul"
                noSuffix
                description="Creative Techno College (CTC) is the top AICTE-approved college in Angul, Odisha. Offering BBA, BCA, B.Sc Computer Science & Data Science with 95% placement record. Affiliated to Utkal University. Admission open 2026-27."
                keywords="top college in angul, best college angul, top technical college angul, top professional college angul, BCA college angul, BBA college angul, AICTE college angul, creative techno college angul, college in angul odisha"
                canonical="/"
            />
            {/* ── Structured Data (JSON-LD for Google Knowledge Panel) ── */}
            <LocalBusinessSchema />

            {/* Admission Popup Banner */}
            {showBanner && <AdmissionBanner onClose={() => setShowBanner(false)} />}

            {/* Blinking Admission Button (floating) */}
            <Link to="/admission/apply" className="adm-float-btn">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>Admission Open – Apply Now</span>
                <span className="adm-float-ping" />
            </Link>

            <HeroSlider />

            {/* About */}
            <section className="home-about">
                <div className="home-about-text reveal-left">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">Empowering Minds at <span>Creative Techno College</span></h2>
                    <p>
                        Creative Techno College (CTC), Angul – the <strong>top professional and technical college in Angul, Odisha</strong> –
                        is established under the aegis of Creative Knowledge Foundation. AICTE-approved and permanently affiliated
                        to Utkal University, CTC has been a beacon of quality education in Angul district since 2010.
                    </p>
                    <p>
                        Located at Baluakata, Saradhapur, Angul, we proudly serve students from across Angul, Dhenkanal,
                        Sambalpur, Cuttack, and all of Odisha. We offer industry-aligned programs in BBA, BCA,
                        B.Sc (Computer Science), and B.Sc (Data Science) — equipping students with skills
                        to thrive in the modern corporate world.
                    </p>
                    <p>
                        With state-of-the-art infrastructure, experienced faculty, and strong industry connections,
                        CTC provides a world-class education with <strong>95% placement assistance</strong> and
                        partnerships with 100+ top recruiting companies.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '28px' }}>
                        <Link to="/about/ctc" className="btn-primary">
                            <i className="fa-solid fa-circle-info"></i> Learn More
                        </Link>
                    </div>
                </div>

                <div className="director-spotlight reveal-right">
                    <img className="director-photo" src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg" alt="Director" />
                    <h3>Mr. Gyanendra Kumar Sahu</h3>
                    <p className="role">Director</p>
                    <blockquote>
                        "We strongly support inter disciplinary education and training for the benefit of student, industry and society.
                        Our vision is to create future leaders who manage, create powerful organization in the emerging corporate landscape.
                        Our management and IT development programs are exclusively industry focused so as to equip the students with latest techniques
                        in the ever dynamic context of domestic and international business environment.
                        It is an opportunity for you to avail the best course with best college in your locality.
                        Come, be a part of our Creative family. Enjoy flexible and unlimited training programs."
                    </blockquote>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mv-section">
                <div style={{ textAlign: 'center', position: 'relative' }}>
                    <span className="section-label">Our Foundation</span>
                    <h2 className="section-title" style={{ color: '#fff' }}>Mission, Vision & <span style={{ color: 'var(--gold)' }}>Values</span></h2>
                </div>
                <div className="mv-grid">
                    {[
                        {
                            icon: <i className="fa-solid fa-bullseye"></i>,
                            title: 'Our Mission',
                            content: 'To provide quality education that empowers students with knowledge, skills, and values to excel in their careers and contribute positively to society.',
                            type: 'text'
                        },
                        {
                            icon: <i className="fa-solid fa-eye"></i>,
                            title: 'Our Vision',
                            content: 'To be a globally recognized institution that nurtures innovative thinkers, ethical leaders, and responsible citizens.',
                            type: 'text'
                        },
                        {
                            icon: <i className="fa-solid fa-gem"></i>,
                            title: 'Core Values',
                            items: ['Excellence in Education', 'Innovation & Creativity', 'Integrity & Ethics', 'Inclusivity & Diversity', 'Social Responsibility'],
                            type: 'list'
                        },
                        {
                            icon: <i className="fa-solid fa-shield-halved"></i>,
                            title: 'Quality Policy',
                            content: 'We are committed to continuous improvement in academic standards, student outcomes, and institutional effectiveness through systematic planning and evaluation.',
                            type: 'text'
                        },
                    ].map((c, i) => (
                        <div key={i} className="mv-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="mv-card-icon">{c.icon}</div>
                            <h3>{c.title}</h3>
                            {c.type === 'text' ? <p>{c.content}</p> : (
                                <ul>{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Courses */}
            <section className="courses-section">
                <div style={{ textAlign: 'center' }}>
                    <span className="section-label">Academic Programs</span>
                    <h2 className="section-title">Courses <span>Offered</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Industry-aligned programs designed to prepare you for the careers of tomorrow.
                    </p>
                </div>
                <div className="courses-grid">
                    {courses.map((c, i) => (
                        <div key={i} className="course-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="course-abbr-banner">
                                <h3>{c.abbr}</h3>
                                <span className="course-type-tag">4-Year Degree</span>
                            </div>
                            <div className="course-body">
                                <p className="course-full">{c.full}</p>
                                <p className="course-desc">{c.desc}</p>
                                <div className="course-seats-badge">
                                    <i className="fa-solid fa-users"></i> {c.seats} Seats
                                </div>
                                <Link to="/admission" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px', color: 'var(--blue-light)', fontWeight: 700, fontSize: '0.85rem', fontFamily: 'var(--font-head)' }}>
                                    Apply Now <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.72rem' }}></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <StatsSection />

            {/* Administration */}
            <section className="admin-section">
                <div style={{ textAlign: 'center' }}>
                    <span className="section-label">Leadership</span>
                    <h2 className="section-title">Our <span>Administration</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Guided by experienced educators and visionary leaders committed to excellence.
                    </p>
                </div>
                <div className="admin-grid">
                    {admins.map((a, i) => (
                        <div key={i} className="admin-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="admin-img-wrap">
                                <img src={a.img} alt={a.name} />
                                <div className="admin-img-overlay" />
                            </div>
                            <div className="admin-info">
                                <h4>{a.name}</h4>
                                <span>{a.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recruiters */}
            <section className="recruiters-section">
                <div style={{ textAlign: 'center' }}>
                    <span className="section-label">Industry Partners</span>
                    <h2 className="section-title">Our Top <span>Recruiters</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Leading companies trust CTC graduates for their talent, skills, and work ethic.
                    </p>
                </div>
                <div className="recruiters-grid">
                    {recruiters.map((r, i) => (
                        <div key={i} className="recruiter-logo reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                            <img src={r.img} alt={r.name} />
                            <span>{r.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <FAQSection />

            {/* Maps */}
            <section className="maps-section">
                <div style={{ textAlign: 'center' }}>
                    <span className="section-label">Find Us</span>
                    <h2 className="section-title">Our <span>Locations</span></h2>
                </div>
                <div className="maps-grid">
                    {[
                        { title: 'Creative Techno College, Angul', icon: 'fa-solid fa-building-columns', src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.0783340113476!2d85.08639287509837!3d20.788118580801687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18a5b9850815f5%3A0xa7f8a31afad931b7!2sCreative%20Techno%20College!5e0!3m2!1sen!2sin!4v1758728395827!5m2!1sen!2sin', link: 'https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z' },
                        { title: 'Creative Knowledge Foundation Office', icon: 'fa-solid fa-house', src: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.8844998564623!2d85.10675499999999!3d20.836369999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m1!2zMjDCsDUwJzEwLjkiTiA4NcKwMDYnMjQuMyJF!5e0!3m2!1sen!2sin!4v1759905943185!5m2!1sen!2sin', link: 'https://www.google.com/maps/place/Creative+CT+Office/@20.750000,85.000000,17z' },
                    ].map((m, i) => (
                        <div key={i} className="map-card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="map-card-header">
                                <i className={m.icon}></i>
                                <h3>{m.title}</h3>
                            </div>
                            <iframe src={m.src} title={m.title} allowFullScreen loading="lazy" />
                            <div className="map-card-footer">
                                <a href={m.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '8px 20px' }}>
                                    <i className="fa-solid fa-map-location-dot"></i> Open in Maps
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}