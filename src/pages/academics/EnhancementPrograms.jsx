import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ACTIVITIES = [
    {
        title: 'Soft Skills Development',
        short: 'Communication & Leadership',
        desc: 'Build strong communication skills, a magnetic personality, leadership qualities, and interpersonal abilities that employers look for.',
        icon: 'fa-solid fa-comments',
        color: '#2dd4bf',
        colorBg: 'linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)',
        points: ['Public Speaking & Presentation', 'Team Collaboration & Conflict Resolution', 'Professional Etiquette & Body Language'],
    },
    {
        title: 'Aptitude Training',
        short: 'Quantitative & Logical Reasoning',
        desc: 'Master quantitative aptitude, logical reasoning, and analytical skills for placement drives, competitive exams, and interviews.',
        icon: 'fa-solid fa-calculator',
        color: '#f59e0b',
        colorBg: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        points: ['Number Systems & Data Interpretation', 'Verbal & Non-Verbal Reasoning', 'Mock Tests & Placement Papers'],
    },
    {
        title: 'Technical Workshops',
        short: 'Hands-on Technology Sessions',
        desc: 'Deep-dive into the latest technologies through practical workshops, coding competitions, and real-world technical projects.',
        icon: 'fa-solid fa-screwdriver-wrench',
        color: '#8b5cf6',
        colorBg: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
        points: ['Hackathons & Coding Competitions', 'Open-Source Contributions', 'Industry-Standard Tool Training'],
    },
    {
        title: 'Industry Visits',
        short: 'Real-World Exposure',
        desc: 'Step into the real world with organised visits to IT companies, manufacturing plants, and leading industries.',
        icon: 'fa-solid fa-industry',
        color: '#ec4899',
        colorBg: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
        points: ['IT Company Visits', 'Interaction with Industry Leaders', 'Understanding Corporate Culture'],
    },
    {
        title: 'Guest Lectures',
        short: 'Learn from the Best',
        desc: 'Regular talks by industry professionals, renowned entrepreneurs, and academic experts to broaden your professional perspective.',
        icon: 'fa-solid fa-microphone-lines',
        color: '#14b8a6',
        colorBg: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
        points: ['Entrepreneur & CEO Talks', 'Academic Research Sessions', 'Career Guidance Panels'],
    },
    {
        title: 'Entrepreneurship Development',
        short: 'Start & Scale Your Ideas',
        desc: 'Learn to ideate, plan, and execute your own venture with training in business planning, startup fundamentals, and innovation.',
        icon: 'fa-solid fa-rocket',
        color: '#f97316',
        colorBg: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        points: ['Business Model Canvas', 'Startup Pitch & Funding Basics', 'Incubation & Mentorship Programs'],
    },
    {
        title: 'Community Service',
        short: 'Give Back, Grow Together',
        desc: 'Participate in meaningful social outreach programs, environmental campaigns, and CSR activities that build character.',
        icon: 'fa-solid fa-hand-holding-heart',
        color: '#10b981',
        colorBg: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
        points: ['Rural Outreach Programs', 'Environmental Awareness Drives', 'Blood Donation & Health Camps'],
    },
    {
        title: 'Sports & Fitness',
        short: 'Compete & Stay Fit',
        desc: 'Build teamwork, discipline, and a healthy body through annual sports events, fitness activities, and inter-college competitions.',
        icon: 'fa-solid fa-trophy',
        color: '#3b82f6',
        colorBg: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        points: ['Annual Sports Meet', 'Indoor & Outdoor Games', 'Fitness & Wellness Programs'],
    },
];

const SEMESTER_PLAN = [
    { sem: '2nd Sem', activity: 'Internship – Initial Exposure', color: '#2dd4bf' },
    { sem: '3rd Sem', activity: 'Online Courses Begin', color: '#8b5cf6' },
    { sem: '4th Sem', activity: 'Value Addition Activities', color: '#f97316' },
    { sem: '5th Sem', activity: 'Advanced Online Courses', color: '#ec4899' },
    { sem: '6th Sem', activity: 'Industry Internship', color: '#10b981' },
    { sem: '7th Sem', activity: 'Minor Projects', color: '#3b82f6' },
    { sem: '8th Sem', activity: 'Major Project (Capstone)', color: '#f59e0b' },
];

function ActivityCard({ activity, index }) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`ep2-card${vis ? ' ep2-card--vis' : ''}`}
            style={{ '--c': activity.color, animationDelay: `${index * 0.08}s` }}
        >
            <div className="ep2-card-icon-bar" style={{ background: activity.colorBg }}>
                <i className={`${activity.icon} ep2-big-icon`} />
                <div className="ep2-card-header-text">
                    <h3>{activity.title}</h3>
                    <p>{activity.short}</p>
                </div>
            </div>
            <div className="ep2-card-body">
                <p>{activity.desc}</p>
                <button className="ep2-toggle-btn" onClick={() => setExpanded(v => !v)}>
                    {expanded ? 'Show Less' : 'See Details'}
                    <i className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`} />
                </button>
                {expanded && (
                    <ul className="ep2-points">
                        {activity.points.map((pt, i) => (
                            <li key={i}>
                                <i className="fa-solid fa-check-circle" />
                                {pt}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default function EnhancementPrograms() {
    return (
        <div className="ep2-page">
            <style>{`
                .ep2-page { background: #f8faff; }

                /* ── HERO ── */
                .ep2-hero {
                    background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
                    padding: 80px 5% 60px;
                    position: relative;
                    overflow: hidden;
                }

                /* New Flex Container for Left/Right Layout */
                .ep2-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center; /* Vertical Center */
                    justify-content: space-between;
                    gap: 40px;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .ep2-hero-left { flex: 1; min-width: 300px; text-align: left; }
                .ep2-hero-right { flex-shrink: 0; }

                /* ICC Style Badge */
                .ep2-hero-chip {
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

                .ep2-hero h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 18px;
                }

                .ep2-hero h1 em {
                    font-style: normal;
                    color: #ffcc00; /* Yellow instead of teal */
                }

                .ep2-hero p {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1rem;
                    max-width: 520px;
                    line-height: 1.8;
                }

                /* Right Side Badges Stack */
                .ep2-hero-badges {
                    display: flex;
                    flex-direction: column; /* Stacked on the right */
                    gap: 12px;
                }

                .ep2-hero-badge {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.7);
                    padding: 10px 20px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                /* ── SEMESTER TIMELINE ── */
                .ep2-timeline-section { background: #fff; padding: 80px 5%; }
                .ep2-section-heading { text-align: center; margin-bottom: 52px; }
                .ep2-section-pill {
                    display: inline-block; background: #ccfbf1; color: #0f766e;
                    border: 1px solid #99f6e4; border-radius: 20px; padding: 5px 16px;
                    font-size: 0.72rem; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;
                }
                .ep2-section-heading h2 {
                    font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 4vw, 2.5rem);
                    font-weight: 900; color: #0a1628; margin-bottom: 12px;
                }
                .ep2-section-heading h2 span {
                    background: linear-gradient(135deg, #0f766e, #2dd4bf);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
                }
                .ep2-section-heading p { color: #64748b; font-size: 0.95rem; max-width: 540px; margin: 0 auto; }
                .ep2-timeline {
                    max-width: 900px; margin: 0 auto;
                    display: flex; flex-direction: column; gap: 0;
                    position: relative;
                }
                .ep2-timeline::before {
                    content: ''; position: absolute; left: 48px; top: 24px; bottom: 24px;
                    width: 2px; background: linear-gradient(to bottom, #2dd4bf, #06b6d4);
                }
                .ep2-tl-row {
                    display: flex; align-items: center; gap: 24px; padding: 16px 0; position: relative;
                    animation: ep2TlIn 0.5s ease both;
                }
                @keyframes ep2TlIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
                .ep2-tl-dot {
                    width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0;
                    display: flex; align-items: center; justify-content: center;
                    font-family: 'Poppins', sans-serif; font-size: 0.65rem; font-weight: 800;
                    color: #fff; z-index: 1; box-shadow: 0 4px 16px rgba(0,0,0,0.15);
                }
                .ep2-tl-content {
                    flex: 1; background: #f8faff; border-radius: 14px; padding: 16px 20px;
                    border: 1px solid rgba(10,22,40,0.07);
                    display: flex; align-items: center; justify-content: space-between;
                    transition: box-shadow 0.2s, transform 0.2s;
                }
                .ep2-tl-content:hover { box-shadow: 0 8px 24px rgba(10,22,40,0.1); transform: translateX(4px); }
                .ep2-tl-sem {
                    font-family: 'Poppins', sans-serif; font-size: 0.72rem; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 4px;
                }
                .ep2-tl-act { font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 700; color: #0a1628; }
                .ep2-tl-arrow { color: #94a3b8; font-size: 0.75rem; }

                /* ── ACTIVITIES SECTION ── */
                .ep2-activities-section { background: #f8faff; padding: 80px 5%; }
                .ep2-grid {
                    max-width: 1200px; margin: 0 auto;
                    display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;
                }
                .ep2-card {
                    background: #fff; border-radius: 20px; overflow: hidden;
                    box-shadow: 0 4px 20px rgba(10,22,40,0.07);
                    border: 1px solid rgba(10,22,40,0.06);
                    border-top: 4px solid var(--c);
                    opacity: 0; transform: translateY(30px);
                    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s;
                }
                .ep2-card--vis { opacity: 1; transform: translateY(0); }
                .ep2-card:hover { box-shadow: 0 12px 40px rgba(10,22,40,0.13); }
                .ep2-card-icon-bar {
                    padding: 24px 22px; display: flex; align-items: center; gap: 16px;
                    position: relative; overflow: hidden;
                }
                .ep2-card-icon-bar::after {
                    content: ''; position: absolute; top: -20px; right: -20px;
                    width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.15);
                }
                .ep2-big-icon { font-size: 1.9rem; flex-shrink: 0; color: rgba(255,255,255,0.92); }
                .ep2-card-header-text h3 { font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 800; color: #fff; margin: 0 0 4px; }
                .ep2-card-header-text p { font-size: 0.75rem; color: rgba(255,255,255,0.75); margin: 0; font-weight: 500; }
                .ep2-card-body { padding: 20px 22px; }
                .ep2-card-body > p { font-size: 0.82rem; color: #475569; line-height: 1.8; margin: 0 0 14px; }
                .ep2-toggle-btn {
                    display: flex; align-items: center; gap: 8px; padding: 8px 0; border: none;
                    background: none; cursor: pointer; font-family: 'Poppins', sans-serif;
                    font-size: 0.78rem; font-weight: 700; color: var(--c); transition: opacity 0.2s;
                }
                .ep2-toggle-btn:hover { opacity: 0.8; }
                .ep2-points { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
                .ep2-points li {
                    display: flex; align-items: flex-start; gap: 8px;
                    font-size: 0.79rem; color: #334155; line-height: 1.5;
                }
                .ep2-points li i { color: var(--c); font-size: 0.7rem; flex-shrink: 0; margin-top: 3px; }

                /* ── PROGRAMS TABLE ── */
                .ep2-table-section { background: #fff; padding: 80px 5%; }
                .ep2-table-wrap { max-width: 1100px; margin: 0 auto; overflow-x: auto; }
                .ep2-table {
                    width: 100%; border-collapse: collapse; min-width: 700px;
                    background: #fff; border-radius: 16px; overflow: hidden;
                    box-shadow: 0 8px 32px rgba(10,22,40,0.1); border: 1px solid rgba(10,22,40,0.07);
                }
                .ep2-table th {
                    background: #0a1628; color: #fff;
                    font-family: 'Poppins', sans-serif; font-size: 0.8rem; font-weight: 700;
                    padding: 16px 18px; text-align: center;
                }
                .ep2-table th:first-child { text-align: left; }
                .ep2-table td {
                    padding: 14px 18px; border-bottom: 1px solid rgba(10,22,40,0.06);
                    font-family: 'Poppins', sans-serif; font-size: 0.82rem; text-align: center; color: #334155;
                }
                .ep2-table td:first-child { text-align: left; font-weight: 700; color: #0a1628; }
                .ep2-table tr:nth-child(even) td { background: rgba(45,212,191,0.03); }
                .ep2-table tr:hover td { background: rgba(45,212,191,0.06); }
                .ep2-sem-chip {
                    display: inline-block; border-radius: 20px; padding: 3px 12px;
                    font-size: 0.7rem; font-weight: 700; white-space: nowrap; margin: 2px;
                }

                /* ── CTA ── */
                .ep2-cta {
                    background: linear-gradient(135deg, #0f2027, #2dd4bf);
                    padding: 80px 5%; text-align: center; position: relative; overflow: hidden;
                }
                .ep2-cta::before {
                    content: ''; position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 60%);
                }
                .ep2-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 1; }
                .ep2-cta h2 { font-family: 'Poppins', sans-serif; font-size: 2.2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
                .ep2-cta p { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 32px; line-height: 1.7; }
                .ep2-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: #fff; color: #0f2027; padding: 16px 36px; border-radius: 50px;
                    font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 800;
                    text-decoration: none; transition: all 0.3s;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
                }
                .ep2-cta-btn:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }

                /* ── RESPONSIVE ── */
                @media (max-width: 768px) {
                    .ep2-grid { grid-template-columns: 1fr; }
                    .ep2-timeline::before { left: 24px; }
                    .ep2-tl-dot { width: 36px; height: 36px; font-size: 0.55rem; }
                }
                @media (max-width: 480px) {
                    .ep2-hero { padding-top: 64px; }
                    .ep2-cta h2 { font-size: 1.6rem; }
                }
            `}</style>

            {/* HERO */}
            <section className="ep2-hero">
                <div className="ep2-hero-orbs">
                    <div className="ep2-orb ep2-orb-1" />
                    <div className="ep2-orb ep2-orb-2" />
                </div>
                
                <div className="ep2-hero-content">
                    {/* LEFT SIDE: Text Content */}
                    <div className="ep2-hero-left">
                        <div className="ep2-hero-chip">
                            <i className="fa-solid fa-seedling" /> Holistic Development
                        </div>
                        <h1>Enhancement Programs for<br /><em>All-Round Excellence</em></h1>
                        <p>Beyond the classroom — structured programs that develop your personality, skills, and career readiness from Day 1 of graduation.</p>
                    </div>

                    {/* RIGHT SIDE: Badges */}
                    <div className="ep2-hero-right">
                        <div className="ep2-hero-badges">
                            {['Soft Skills', 'Aptitude Training', 'Industry Exposure', 'Entrepreneurship', 'Community Service'].map((b, i) => (
                                <span key={i} className="ep2-hero-badge">
                                    <i className="fa-solid fa-circle-check" style={{ color: '#ffcc00' }} /> {b}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEMESTER PLAN TIMELINE */}
            <section className="ep2-timeline-section">
                <div className="ep2-section-heading">
                    <div className="ep2-section-pill">📅 Structured Plan</div>
                    <h2>Semester-wise <span>Enhancement Roadmap</span></h2>
                    <p>Every semester at CTC is designed with intentional activities to build your capabilities progressively over 4 years.</p>
                </div>
                <div className="ep2-timeline">
                    {SEMESTER_PLAN.map((item, i) => (
                        <div key={i} className="ep2-tl-row" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="ep2-tl-dot" style={{ background: item.color }}>
                                {item.sem.split(' ')[0]}
                            </div>
                            <div className="ep2-tl-content">
                                <div>
                                    <div className="ep2-tl-sem">{item.sem}</div>
                                    <div className="ep2-tl-act">{item.activity}</div>
                                </div>
                                <i className="fa-solid fa-chevron-right ep2-tl-arrow" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ACTIVITIES CARDS */}
            <section className="ep2-activities-section">
                <div className="ep2-section-heading">
                    <div className="ep2-section-pill">🎯 Programs</div>
                    <h2>Our Enhancement <span>Activities</span></h2>
                    <p>Click on any card to see what skills you'll build through each program.</p>
                </div>
                <div className="ep2-grid">
                    {ACTIVITIES.map((a, i) => <ActivityCard key={i} activity={a} index={i} />)}
                </div>
            </section>

            {/* PROGRAM TABLE */}
            <section className="ep2-table-section">
                <div className="ep2-section-heading">
                    <div className="ep2-section-pill">📋 All Programs</div>
                    <h2>Program <span>Overview Table</span></h2>
                    <p>A snapshot of activities planned across all 4 degree programs at Creative Techno College.</p>
                </div>
                <div className="ep2-table-wrap">
                    <table className="ep2-table">
                        <thead>
                            <tr>
                                <th>Activity</th>
                                <th>BBA</th>
                                <th>BCA</th>
                                <th>B.Sc CS</th>
                                <th>B.Sc DS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { act: '🗒️ Minor Projects', sems: ['Every Sem', 'Every Sem', 'Every Sem', 'Every Sem'] },
                                { act: '📚 Online Courses', sems: ['3rd, 5th, 7th', '3rd, 5th, 7th', '3rd, 5th, 7th', '3rd, 5th, 7th'] },
                                { act: '💼 Internship', sems: ['2nd, 4th, 6th', '2nd, 4th, 6th', '2nd, 4th, 6th', '2nd, 4th, 6th'] },
                                { act: '🎓 Major Project', sems: ['8th Sem', '8th Sem', '8th Sem', '8th Sem'] },
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td>{row.act}</td>
                                    {row.sems.map((s, j) => (
                                        <td key={j}>
                                            <span className="ep2-sem-chip" style={{
                                                background: ['rgba(45,212,191,0.12)', 'rgba(139,92,246,0.12)', 'rgba(59,130,246,0.12)', 'rgba(245,158,11,0.12)'][j],
                                                color: ['#0f766e', '#7c3aed', '#1d4ed8', '#b45309'][j],
                                                border: `1px solid ${['rgba(45,212,191,0.3)', 'rgba(139,92,246,0.3)', 'rgba(59,130,246,0.3)', 'rgba(245,158,11,0.3)'][j]}`,
                                            }}>
                                                {s}
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}