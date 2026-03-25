import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const COURSES = [
    {
        code: 'BBA',
        full: 'Bachelor of Business Administration',
        tagline: 'Lead. Manage. Innovate.',
        icon: 'fa-solid fa-briefcase',
        color: '#f59e0b',
        colorDark: '#d97706',
        colorLight: '#fef3c7',
        accent: '#92400e',
        tag: 'Management',
        seats: 120,
        duration: '4 Years · 8 Semesters',
        eligibility: '10+2 pass in any stream from a recognised board',
        overview: 'The BBA program provides a solid foundation in management, business principles, and entrepreneurship. It blends theoretical concepts with practical applications to prepare students for leadership roles in the corporate world.',
        highlights: [
            'Core subjects in Marketing, Finance, and Human Resource Management',
            'Case studies, business simulations, and industry projects',
            'Regular seminars, workshops, and industry visits',
            'Focus on communication, leadership, and decision-making skills',
        ],
        career: ['Business Manager', 'Marketing Executive', 'HR Specialist', 'Entrepreneur', 'MBA Studies'],
        syllabus: '/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BBA.pdf',
    },
    {
        code: 'BCA',
        full: 'Bachelor of Computer Applications',
        tagline: 'Code. Build. Deploy.',
        icon: 'fa-solid fa-laptop-code',
        color: '#3b82f6',
        colorDark: '#2563eb',
        colorLight: '#eff6ff',
        accent: '#1e3a8a',
        tag: 'Technology',
        seats: 120,
        duration: '4 Years · 8 Semesters',
        eligibility: '10+2 pass in any stream with Mathematics / Statistics as one subject',
        overview: 'BCA is an undergraduate program focused on computer applications and IT skills. It prepares students to work in the software industry with a strong foundation in programming, databases, and system design.',
        highlights: [
            'Programming in C, C++, Java, Python',
            'Database Management, Web Development & Software Engineering',
            'Exposure to cloud computing, networking & cybersecurity',
            'Hands-on training via projects, coding competitions & workshops',
        ],
        career: ['Software Developer', 'Web Designer', 'Database Admin', 'System Analyst', 'MCA Studies'],
        syllabus: '/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BCA.pdf',
    },
    {
        code: 'B.Sc CS',
        full: 'B.Sc. Computer Science (Honours)',
        tagline: 'Analyse. Compute. Discover.',
        icon: 'fa-solid fa-microchip',
        color: '#10b981',
        colorDark: '#059669',
        colorLight: '#ecfdf5',
        accent: '#064e3b',
        tag: 'Science',
        seats: 128,
        duration: '4 Years · 8 Semesters',
        eligibility: '10+2 pass with Science stream (compulsory)',
        overview: 'This program offers in-depth knowledge of computer science fundamentals and advanced concepts. It emphasises analytical skills, algorithmic thinking, and research-oriented study.',
        highlights: [
            'Data Structures, Algorithms & Operating Systems',
            'Computer Networks, AI, Compiler Design, Software Development',
            'Practical lab sessions and mini-projects every semester',
            'Research and innovation-driven learning environment',
        ],
        career: ['Software Engineer', 'System Admin', 'Research Associate', 'M.Sc./MCA Studies'],
        syllabus: '/CTC NEW REACT WEBSITE/images/REGULARCOURSES/Bsc.pdf',
    },
    {
        code: 'B.Sc DS',
        full: 'B.Sc. Computer Science (Data Science)',
        tagline: 'Predict. Analyse. Transform.',
        icon: 'fa-solid fa-chart-line',
        color: '#8b5cf6',
        colorDark: '#7c3aed',
        colorLight: '#f5f3ff',
        accent: '#4c1d95',
        tag: 'Data Science',
        seats: 30,
        duration: '4 Years · 8 Semesters',
        eligibility: '10+2 pass with Science stream — Mathematics is compulsory',
        overview: 'Designed for students aspiring to build a career in Data Science and AI. Focuses on data analytics, machine learning, and big data technologies for tech-driven industries.',
        highlights: [
            'Python, R, Statistics & Data Visualization',
            'Machine Learning, Deep Learning & Artificial Intelligence',
            'Big Data Analytics & Cloud Computing concepts',
            'Industry-based projects, internships & live case studies',
        ],
        career: ['Data Analyst', 'ML Engineer', 'BI Developer', 'AI Researcher', 'M.Sc. DS Studies'],
        syllabus: '/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BscDsc.pdf',
    },
];

function useCountUp(target, duration = 1500, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

const stats = [
    { value: 4, label: 'Programs', suffix: '' },
    { value: 240, label: 'Total Seats', suffix: '+' },
    { value: 4, label: 'Year Duration', suffix: '' },
    { value: 100, label: 'Placement Assist', suffix: '%' },
];

function StatsRow() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className="rc2-stats-row">
            {stats.map((s, i) => {
                const c = useCountUp(s.value, 1400, visible);
                return (
                    <div key={i} className="rc2-stat" style={{ animationDelay: `${i * 0.1}s` }}>
                        <span className="rc2-stat-num">{c}{s.suffix}</span>
                        <span className="rc2-stat-label">{s.label}</span>
                    </div>
                );
            })}
        </div>
    );
}

function CourseCard({ course, index }) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`rc2-card${visible ? ' rc2-card--visible' : ''}`}
            style={{ '--card-color': course.color, '--card-dark': course.colorDark, '--card-light': course.colorLight, animationDelay: `${index * 0.1}s` }}
        >
            {/* Top colorful header */}
            <div className="rc2-card-header" style={{ background: `linear-gradient(135deg, ${course.colorDark} 0%, ${course.color} 100%)` }}>
                <div className="rc2-card-header-bg" />
                <div className="rc2-card-tag">{course.tag}</div>
                <i className={`${course.icon} rc2-card-icon`} />
                <h3 className="rc2-card-code">{course.code}</h3>
                <p className="rc2-card-full">{course.full}</p>
                <p className="rc2-card-tagline">{course.tagline}</p>
                <div className="rc2-card-pills">
                    <span><i className="fa-regular fa-clock" /> {course.duration}</span>
                    <span><i className="fa-solid fa-users" /> {course.seats} Seats</span>
                </div>
            </div>

            {/* Quick info bar */}
            <div className="rc2-card-quick">
                <div className="rc2-card-quick-item">
                    <i className="fa-solid fa-check-circle" style={{ color: course.color }} />
                    <span>{course.eligibility}</span>
                </div>
            </div>

            {/* Toggle button */}
            <button
                className="rc2-card-toggle"
                style={{ '--btn-color': course.color }}
                onClick={() => setExpanded(v => !v)}
            >
                <span>{expanded ? 'Show Less' : 'Explore Course'}</span>
                <i className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`} />
            </button>

            {/* Expandable body */}
            <div className={`rc2-card-body${expanded ? ' rc2-card-body--open' : ''}`}>
                <div className="rc2-card-body-inner">
                    {/* Overview */}
                    <div className="rc2-section">
                        <h4><i className="fa-solid fa-circle-info" style={{ color: course.color }} /> Overview</h4>
                        <p>{course.overview}</p>
                    </div>

                    {/* Highlights */}
                    <div className="rc2-section">
                        <h4><i className="fa-solid fa-star" style={{ color: course.color }} /> Program Highlights</h4>
                        <ul className="rc2-highlights">
                            {course.highlights.map((h, i) => (
                                <li key={i}>
                                    <span className="rc2-bullet" style={{ background: course.color }} />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Career paths */}
                    <div className="rc2-section">
                        <h4><i className="fa-solid fa-rocket" style={{ color: course.color }} /> Career Paths</h4>
                        <div className="rc2-career-tags">
                            {course.career.map((c, i) => (
                                <span key={i} className="rc2-career-tag" style={{ '--tc': course.color, '--tl': course.colorLight }}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Download */}
                    <a href={course.syllabus} download className="rc2-syllabus-btn" style={{ background: `linear-gradient(135deg, ${course.colorDark}, ${course.color})` }}>
                        <i className="fa-solid fa-file-pdf" />
                        Download Syllabus
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function RegularCourses() {
    return (
        <div className="rc2-page">
            <style>{`
                .rc2-page { background: #f8faff; min-height: 100vh; }

                /* ── HERO ── */
                .rc2-hero {
                    background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
                    padding: 80px 5% 0;
                    position: relative;
                    overflow: hidden;
                }

                /* New Flex Container for Left/Right Split */
                .rc2-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center; /* Vertical Center */
                    justify-content: space-between;
                    gap: 40px;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: left; /* Reset text to left */
                    padding-bottom: 60px;
                }

                .rc2-hero-left { flex: 1; min-width: 300px; }
                .rc2-hero-right { flex-shrink: 0; }

                /* Yellow Accent Chip */
                .rc2-hero-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 204, 0, 0.1);
                    border: 1px solid rgba(255, 204, 0, 0.28);
                    color: #ffcc00; /* Yellow */
                    padding: 6px 16px;
                    border-radius: 30px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }

                .rc2-hero h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.4rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 20px;
                }

                .rc2-hero h1 em {
                    font-style: normal;
                    color: #ffcc00; /* Yellow instead of gradient */
                }

                .rc2-hero p {
                    color: rgba(255, 255, 255, 0.5); /* Muted descriptive text */
                    font-size: 1.05rem;
                    line-height: 1.8;
                    max-width: 580px;
                    margin: 0; /* Remove auto centering */
                }

                /* Stacked Buttons on the Right */
                .rc2-hero-btns {
                    display: flex;
                    flex-direction: column; /* Stacks the CTA and Explore buttons */
                    gap: 16px;
                    min-width: 250px;
                }

                .rc2-btn-primary {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: #ffcc00; /* Solid Yellow */
                    color: #020c1b;
                    padding: 16px 32px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s;
                    box-shadow: 0 8px 25px rgba(255, 204, 0, 0.2);
                }

                .rc2-btn-outline {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #fff;
                    padding: 14px 32px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s;
                }

                /* ── STATS ── */
                .rc2-stats-wrap { background: #fff; padding: 0 5% 10px; }
                .rc2-stats-row {
                    max-width: 900px; margin: -40px auto 0;
                    display: grid; grid-template-columns: repeat(4, 1fr);
                    background: #fff; border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(10,22,40,0.15);
                    overflow: hidden; border: 1px solid rgba(10,22,40,0.08);
                    position: relative; z-index: 2;
                }
                .rc2-stat {
                    padding: 28px 20px; text-align: center; position: relative;
                    animation: rc2StatIn 0.6s ease both;
                }
                .rc2-stat:not(:last-child) { border-right: 1px solid rgba(10,22,40,0.07); }
                .rc2-stat:nth-child(1) { border-top: 4px solid #f5c518; }
                .rc2-stat:nth-child(2) { border-top: 4px solid #3b82f6; }
                .rc2-stat:nth-child(3) { border-top: 4px solid #10b981; }
                .rc2-stat:nth-child(4) { border-top: 4px solid #8b5cf6; }
                @keyframes rc2StatIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
                .rc2-stat-num {
                    display: block; font-family: 'Poppins', sans-serif;
                    font-size: 2.4rem; font-weight: 900; color: #0a1628; line-height: 1;
                }
                .rc2-stat-label { display: block; font-size: 0.72rem; font-weight: 600; color: #64748b; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px; }

                /* ── INTRO ── */
                .rc2-intro { background: #fff; padding: 80px 5% 60px; }
                .rc2-intro-inner {
                    max-width: 1000px; margin: 0 auto;
                    background: linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%);
                    border-radius: 28px; padding: 56px; text-align: center;
                    position: relative; overflow: hidden;
                    box-shadow: 0 24px 80px rgba(10,22,40,0.25);
                }
                .rc2-intro-inner::before {
                    content: '';
                    position: absolute; top: 0; right: 0;
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%);
                }
                .rc2-intro-icon {
                    width: 72px; height: 72px; background: rgba(245,197,24,0.15);
                    border: 2px solid rgba(245,197,24,0.35); border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 1.8rem; margin: 0 auto 20px; position: relative; z-index: 1;
                }
                .rc2-intro-inner h2 {
                    font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 900;
                    color: #f5c518; margin-bottom: 14px; position: relative; z-index: 1;
                }
                .rc2-intro-inner p {
                    font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.9;
                    max-width: 720px; margin: 0 auto; position: relative; z-index: 1;
                }

                /* ── SECTION HEADING ── */
                .rc2-section-heading { text-align: center; margin-bottom: 56px; padding: 0 5%; }
                .rc2-section-pill {
                    display: inline-block; background: #eff6ff; color: #2563eb;
                    border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px;
                    font-size: 0.72rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px;
                }
                .rc2-section-heading h2 {
                    font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 4vw, 2.6rem);
                    font-weight: 900; color: #0a1628; margin-bottom: 12px;
                }
                .rc2-section-heading h2 span {
                    background: linear-gradient(135deg, #2563eb, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
                }
                .rc2-section-heading p { color: #64748b; font-size: 0.95rem; max-width: 540px; margin: 0 auto; }

                /* ── COURSES GRID ── */
                .rc2-courses-section { background: #f8faff; padding: 80px 5%; }
                .rc2-courses-grid {
                    max-width: 1400px; margin: 0 auto;
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
                }

                /* ── COURSE CARD ── */
                .rc2-card {
                    background: #fff; border-radius: 24px;
                    box-shadow: 0 4px 24px rgba(10,22,40,0.08);
                    border: 1px solid rgba(10,22,40,0.07);
                    overflow: hidden;
                    opacity: 0; transform: translateY(40px);
                    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s;
                }
                .rc2-card--visible { opacity: 1; transform: translateY(0); }
                .rc2-card:hover { box-shadow: 0 16px 48px rgba(10,22,40,0.15); }
                .rc2-card-header {
                    padding: 32px 28px 28px; position: relative; overflow: hidden; cursor: default;
                }
                .rc2-card-header-bg {
                    position: absolute; top: -50%; right: -30%;
                    width: 240px; height: 240px; border-radius: 50%;
                    background: rgba(255,255,255,0.1); pointer-events: none;
                }
                .rc2-card-tag {
                    display: inline-block; background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3); color: #fff;
                    padding: 3px 12px; border-radius: 20px;
                    font-size: 0.62rem; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;
                }
                .rc2-card-icon { font-size: 2rem; margin-bottom: 10px; display: block; color: rgba(255,255,255,0.9); }
                .rc2-card-code {
                    font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 900;
                    color: #fff; margin: 0 0 6px; line-height: 1;
                }
                .rc2-card-full { font-size: 0.82rem; color: rgba(255,255,255,0.75); margin: 0 0 8px; font-weight: 500; }
                .rc2-card-tagline { font-size: 0.88rem; color: rgba(255,255,255,0.9); margin: 0 0 18px; font-weight: 600; font-style: italic; }
                .rc2-card-pills { display: flex; gap: 12px; flex-wrap: wrap; }
                .rc2-card-pills span { font-size: 0.74rem; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 6px; font-weight: 600; }

                .rc2-card-quick { padding: 16px 24px; background: var(--card-light); border-bottom: 1px solid rgba(10,22,40,0.06); }
                .rc2-card-quick-item { display: flex; align-items: flex-start; gap: 8px; font-size: 0.78rem; color: #475569; line-height: 1.5; }
                .rc2-card-quick-item i { flex-shrink: 0; margin-top: 2px; font-size: 0.72rem; }

                .rc2-card-toggle {
                    width: 100%; padding: 14px 24px; border: none; cursor: pointer;
                    background: #fff; display: flex; align-items: center; justify-content: space-between;
                    font-family: 'Poppins', sans-serif; font-size: 0.85rem; font-weight: 700;
                    color: var(--btn-color); transition: background 0.2s;
                }
                .rc2-card-toggle:hover { background: var(--card-light, #f8faff); }
                .rc2-card-toggle i { font-size: 0.75rem; transition: transform 0.3s; }

                .rc2-card-body { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1); }
                .rc2-card-body--open { max-height: 900px; }
                .rc2-card-body-inner { padding: 24px; background: #fafbff; border-top: 1px solid rgba(10,22,40,0.07); }

                .rc2-section { margin-bottom: 20px; }
                .rc2-section h4 {
                    display: flex; align-items: center; gap: 8px;
                    font-family: 'Poppins', sans-serif; font-size: 0.78rem; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 0.8px; color: #0a1628; margin: 0 0 10px;
                }
                .rc2-section p { font-size: 0.82rem; color: #475569; line-height: 1.8; margin: 0; }
                .rc2-highlights { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
                .rc2-highlights li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.8rem; color: #475569; line-height: 1.5; }
                .rc2-bullet { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
                .rc2-career-tags { display: flex; flex-wrap: wrap; gap: 8px; }
                .rc2-career-tag {
                    background: var(--tl); color: var(--tc); border: 1px solid var(--tc);
                    opacity: 0.7; padding: 4px 12px; border-radius: 20px;
                    font-size: 0.72rem; font-weight: 700; font-family: 'Poppins', sans-serif;
                    filter: saturate(0.7);
                }
                .rc2-syllabus-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 12px 22px; border-radius: 30px; color: #fff;
                    font-family: 'Poppins', sans-serif; font-size: 0.82rem; font-weight: 700;
                    text-decoration: none; transition: all 0.3s; margin-top: 4px;
                }
                .rc2-syllabus-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); opacity: 0.9; }

                /* ── FEATURES STRIP ── */
                .rc2-features { background: #0a1628; padding: 72px 5%; }
                .rc2-features-inner { max-width: 1100px; margin: 0 auto; }
                .rc2-features-title {
                    text-align: center; font-family: 'Poppins', sans-serif; font-size: 1.8rem;
                    font-weight: 900; color: #fff; margin-bottom: 48px;
                }
                .rc2-features-title span { color: #f5c518; }
                .rc2-features-grid {
                    display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;
                }
                .rc2-feature {
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 18px; padding: 28px 22px; text-align: center;
                    transition: background 0.2s, transform 0.2s;
                }
                .rc2-feature:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
                .rc2-feature-icon {
                    font-size: 1.9rem; margin-bottom: 14px; display: block; color: #f5c518;
                }
                .rc2-feature h3 { font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 700; color: #fff; margin: 0 0 8px; }
                .rc2-feature p { font-size: 0.78rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin: 0; }

                /* ── CTA ── */
                .rc2-cta {
                    background: linear-gradient(135deg, #1a3a6b, #2563eb);
                    padding: 72px 5%; text-align: center; position: relative; overflow: hidden;
                }
                .rc2-cta::before {
                    content: ''; position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15) 0%, transparent 60%);
                }
                .rc2-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 1; }
                .rc2-cta h2 { font-family: 'Poppins', sans-serif; font-size: 2.2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
                .rc2-cta p { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 32px; line-height: 1.7; }
                .rc2-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: #f5c518; color: #0a1628; padding: 16px 36px; border-radius: 50px;
                    font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 800;
                    text-decoration: none; transition: all 0.3s;
                    box-shadow: 0 8px 30px rgba(245,197,24,0.4);
                }
                .rc2-cta-btn:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(245,197,24,0.55); }

                /* ── RESPONSIVE ── */
                @media (max-width: 1100px) {
                    .rc2-courses-grid { grid-template-columns: repeat(2, 1fr); }
                    .rc2-features-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 768px) {
                    .rc2-stats-row { grid-template-columns: repeat(2, 1fr); margin-top: 20px; }
                    .rc2-intro-inner { padding: 36px 24px; }
                    .rc2-courses-grid { grid-template-columns: 1fr; }
                    .rc2-features-grid { grid-template-columns: 1fr 1fr; }
                    .rc2-hero { padding-top: 64px; }
                }
                @media (max-width: 480px) {
                    .rc2-stats-row { grid-template-columns: repeat(2,1fr); }
                    .rc2-features-grid { grid-template-columns: 1fr; }
                    .rc2-cta h2 { font-size: 1.6rem; }
                }
            `}</style>

            {/* HERO */}
            <section className="rc2-hero">
                <div className="rc2-hero-orb rc2-hero-orb-1" />
                <div className="rc2-hero-orb rc2-hero-orb-2" />

                <div className="rc2-hero-content">
                    {/* LEFT SIDE: Heading and Description */}
                    <div className="rc2-hero-left">
                        <div className="rc2-hero-chip">
                            <i className="fa-solid fa-graduation-cap" />
                            Academics · Regular Programs
                        </div>
                        <h1>Shape Your Future with<br /><em>World-Class Degrees</em></h1>
                        <p>Industry-aligned 4-year undergraduate programs crafted to equip you with knowledge, real-world skills, and the confidence to lead tomorrow's challenges.</p>
                    </div>

                    {/* RIGHT SIDE: Action Buttons */}
                    <div className="rc2-hero-right">
                        <div className="rc2-hero-btns">
                            <Link to="/admission/apply" className="rc2-btn-primary">
                                <i className="fa-solid fa-paper-plane" /> Apply for 2026–27
                            </Link>
                            <a href="#courses" className="rc2-btn-outline">
                                <i className="fa-solid fa-magnifying-glass" /> Explore Courses
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <div className="rc2-stats-wrap">
                <StatsRow />
            </div>

            {/* INTRO */}
            <section className="rc2-intro">
                <div className="rc2-intro-inner">
                    <div className="rc2-intro-icon">🎓</div>
                    <h2>Our Academic Excellence</h2>
                    <p>At Creative Techno College, Angul, we offer career-oriented undergraduate programs designed to equip students with the right blend of knowledge, skills, and industry exposure. Our courses focus on academic excellence, practical learning, and holistic development to prepare graduates for the future.</p>
                </div>
            </section>

            {/* COURSES */}
            <section className="rc2-courses-section" id="courses">
                <div className="rc2-section-heading">
                    <div className="rc2-section-pill">🎯 Our Programs</div>
                    <h2>Courses <span>Offered</span></h2>
                    <p>Click on any course card to explore eligibility, highlights, career paths and download the full syllabus.</p>
                </div>
                <div className="rc2-courses-grid">
                    {COURSES.map((course, i) => <CourseCard key={course.code} course={course} index={i} />)}
                </div>
            </section>

            {/* WHY CTC FEATURES */}
            <section className="rc2-features">
                <div className="rc2-features-inner">
                    <h2 className="rc2-features-title">Why choose <span>Creative Techno College?</span></h2>
                    <div className="rc2-features-grid">
                        {[
                            { icon: 'fa-solid fa-building-columns', title: 'AICTE Approved', desc: 'Nationally recognised by All India Council for Technical Education.' },
                            { icon: 'fa-solid fa-graduation-cap', title: 'Utkal University', desc: 'Affiliated to the prestigious Utkal University, Odisha.' },
                            { icon: 'fa-solid fa-handshake', title: '100% Placement Assist', desc: 'Dedicated placement cell with 100+ recruiting partners.' },
                            { icon: 'fa-solid fa-flask', title: 'Practical Learning', desc: 'State-of-the-art labs, live projects and industry internships.' },
                            { icon: 'fa-solid fa-globe', title: 'Industry Connect', desc: 'Regular seminars, workshops and expert guest lectures.' },
                        ].map((f, i) => (
                            <div key={i} className="rc2-feature">
                                <i className={`${f.icon} rc2-feature-icon`} />
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}