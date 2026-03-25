import { useEffect } from 'react';

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        const io = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);
}

const milestones = [
    { year: '1995', label: 'Founded', desc: 'Journey began with computer education as a franchise of APTECH Computer Education.' },
    { year: '2010', label: 'CTC Established', desc: 'Creative Techno College officially launched, offering BBA & BCA under Utkal University.' },
    { year: '2017', label: '1st Permanent Approved', desc: 'Became the 1st Permanently Approved College of Angul in Central Odisha.' },
    { year: '2024', label: 'AICTE Approved', desc: 'Received AICTE approval, marking adherence to the highest national educational standards.' },
];

const values = [
    { icon: 'fa-solid fa-graduation-cap', title: 'Educational Excellence', desc: 'Committed to the highest standards of academic quality and student achievement across all programs.' },
    { icon: 'fa-solid fa-hands-helping', title: 'Community Service', desc: 'Dedicated to serving the region through education, outreach, and deep social responsibility.' },
    { icon: 'fa-solid fa-lightbulb', title: 'Innovation', desc: 'Fostering a culture of creativity, critical thinking, and continuous improvement in everything we do.' },
    { icon: 'fa-solid fa-seedling', title: 'Holistic Development', desc: 'Nurturing not just academic excellence but also character, values, and leadership in every student.' },
];

const skills = ['Spoken English', 'Tally ERP', 'Web Development', 'Digital Marketing', 'Data Analytics', 'Soft Skills'];

export default function AboutTrust() {
    useReveal();

    return (
        <>
            {/* ── Hero — text left, CKF timeline image right ── */}
            <div className="ckf-hero" style={{ textAlign: 'left' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    {/* Left: text */}
                    <div style={{ flex: '1 1 320px' }}>
                        <span className="section-label" style={{ color: 'var(--cyan)' }}>Our Foundation</span>
                        <h1 className="section-title" style={{ color: '#fff', margin: '12px 0 16px', textAlign: 'left' }}>
                            About <span style={{ color: 'var(--gold)' }}>Creative Knowledge Foundation</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '480px' }}>
                            The trust behind Creative Techno College, Angul — empowering education since 1995
                        </p>
                    </div>
                    {/* Right: only the CKF logo (2nd image from original hero) */}
                    <div className="reveal-right" style={{ flex: '0 0 auto' }}>
                        <div style={{
                            background: '#fff',
                            padding: '20px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            width: '180px',
                            height: '180px'
                        }}>
                            <img
                                src="/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg1.png"
                                alt="CKF Logo"
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '120px', // Keeps logo from touching edges
                                    opacity: 1
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Milestone Cards — forced single row of 4 ── */}
            <section style={{ background: 'var(--page-bg)', padding: '60px 5%' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {milestones.map((m, i) => (
                        <div key={i} className="milestone-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="milestone-year">{m.year}</div>
                            <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--navy)', marginBottom: '10px', fontSize: '0.93rem' }}>{m.label}</h3>
                            <p>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CKF History ── */}
            <section style={{ background: '#fff' }}>
                <div className="ckf-history">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">The <span>CKF Journey</span></h2>
                    </div>

                    {/* Restored timeline image in the journey section */}
                    <img
                        src="/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg2.png"
                        alt="CKF Timeline"
                        className="ckf-timeline-img reveal"
                    />

                    <div className="ckf-history-text reveal">
                        <p>
                            CREATIVE KNOWLEDGE FOUNDATION with Regd. Office at Tamrit Colony, Angul, Odisha is running
                            CREATIVE TECHNO COLLEGE since 2010 situated at Baluakata, Sharadhapur, Angul.
                        </p>
                        <p>
                            However the journey was started at Institutional level in year 1995 with computer education as a
                            franchise of APTECH COMPUTER EDUCATION (APTECH Ltd.) upto 2007 and run distance education
                            BBA, BCA, MBA and MCA courses between 2001–2015.
                        </p>
                        <p>
                            Since 2010 CREATIVE TECHNO COLLEGE is offering BBA and BCA undergraduate courses in computer
                            application and management recognized by Government of Odisha, Department of Higher Education
                            and Affiliated to Utkal University. In 2018 another course B.Sc. in Computer Science has been added
                            under this umbrella. The founder of the college Mr. Gyanendra Sahu has dedicatedly worked hard to
                            make the college the <strong>1st Permanent Approved College of Angul</strong> in Central Odisha in 2017.
                        </p>
                        <p>
                            In 2019 our college has been awarded as <strong>Best Professional College by Odisha Education Award 2019</strong>.
                            We received AICTE approval in 2024, which ensures the college is adhering to strict standards
                            in terms of infrastructure, faculty, teaching methodology, and overall educational excellence.
                        </p>
                        <p>
                            In Skill Development area of IT education and training: in 2009 we trained 300 trainees
                            in association with OCAC; in 2011–12 we trained 150 trainees in association with DTET Odisha; in 2014
                            we worked with OKCL (Odisha Knowledge Corporation Ltd.); and in 2018 we trained 120 trainees under
                            NALCO CSR fund in association with AISECT Bhopal.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Values Grid — forced single row of 4 ── */}
            <section style={{ background: 'var(--page-bg)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 5% 0', textAlign: 'center' }}>
                    <span className="section-label">What We Stand For</span>
                    <h2 className="section-title">Our Core <span>Values</span></h2>
                </div>
                <div style={{ maxWidth: '1100px', margin: '24px auto 0', padding: '0 5% 72px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {values.map((v, i) => (
                        <div key={i} className="ckf-value-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="ckf-value-icon">
                                <i className={v.icon}></i>
                            </div>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CKF Skills Banner ── */}
            <section style={{ background: '#fff', padding: '72px 5%' }}>
                <div className="ckf-skills-banner reveal" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <span className="section-label" style={{ color: 'var(--cyan)' }}>Vocational Wing</span>
                        <h2>CKF Skills</h2>
                        <p>
                            CKF Skills is the vocational and skill development wing of Creative Knowledge Foundation,
                            offering industry-relevant training programs to bridge the skill gap and enhance employability
                            among youth in Odisha.
                        </p>
                    </div>
                    <div style={{ flex: '1 1 260px' }}>
                        <div className="ckf-skill-tags">
                            {skills.map((s, i) => <span key={i}>{s}</span>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
