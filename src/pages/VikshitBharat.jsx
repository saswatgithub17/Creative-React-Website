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

const initiatives = [
    {
        title: 'Digital Literacy Drive',
        icon: 'fa-laptop',
        color: '#2d7dd2',
        desc: 'Empowering rural youth with digital skills, computer literacy, and internet access to bridge the digital divide.',
        impact: '500+ Students Trained',
    },
    {
        title: 'Skill India Alignment',
        icon: 'fa-tools',
        color: '#16a34a',
        desc: 'Aligning curriculum with Skill India mission to produce industry-ready graduates with practical competencies.',
        impact: '4 Programs Aligned',
    },
    {
        title: 'Entrepreneurship Development',
        icon: 'fa-lightbulb',
        color: '#f59e0b',
        desc: 'Fostering startup culture through incubation support, mentorship, and entrepreneurship development programs.',
        impact: '10+ Startups Supported',
    },
    {
        title: 'Green Campus Initiative',
        icon: 'fa-leaf',
        color: '#16a34a',
        desc: 'Promoting sustainable practices, solar energy adoption, and eco-friendly campus operations.',
        impact: 'Carbon Neutral Goal 2030',
    },
    {
        title: 'Women Empowerment',
        icon: 'fa-venus',
        color: '#7c3aed',
        desc: 'Special scholarships, mentorship programs, and leadership opportunities for women students.',
        impact: '60%+ Women Enrollment',
    },
    {
        title: 'Community Outreach',
        icon: 'fa-hands-helping',
        color: '#dc2626',
        desc: 'Regular community service activities, health camps, and awareness programs in surrounding villages.',
        impact: '20+ Villages Reached',
    },
];

const pillars = [
    { icon: 'fa-graduation-cap', title: 'Quality Education', desc: 'Ensuring accessible, affordable, and high-quality education for all' },
    { icon: 'fa-industry', title: 'Industry Connect', desc: 'Bridging academia and industry for better employment outcomes' },
    { icon: 'fa-globe', title: 'Digital India', desc: 'Contributing to India\'s digital transformation through tech education' },
    { icon: 'fa-seedling', title: 'Sustainable Growth', desc: 'Promoting sustainable development in education and campus operations' },
];

export default function VikshitBharat() {
    useReveal();
    return (
        <>
            <div className="page-hero">
                <div className="page-hero-dots" />
                <span className="section-label">National Initiative</span>
                <h1>Vikshit <span>Bharat</span></h1>
                <p>Creative Techno College's contribution to building a Developed India by 2047</p>
            </div>

            {/* About */}
            <section style={{ padding: '60px 5%', background: '#fff' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="reveal tech-card" style={{ padding: '36px 40px' }}>
                        <span className="section-label">Vision</span>
                        <h2 className="section-title">Vikshit Bharat <span>@2047</span></h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1rem' }}>
                            Vikshit Bharat (Developed India) is Prime Minister Narendra Modi's vision to transform India into a fully developed nation by 2047,
                            the centenary of India's independence. Creative Techno College is proud to contribute to this national mission through quality education,
                            skill development, and community empowerment.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1rem', marginTop: '14px' }}>
                            Our institution actively participates in government initiatives like Skill India, Digital India, Startup India, and Swachh Bharat,
                            aligning our academic programs and campus activities with the national development agenda.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 Pillars */}
            <section className="tech-grid-bg" style={{ padding: '60px 5%' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="section-label">Foundation</span>
                        <h2 className="section-title">Our <span>Pillars</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
                        {pillars.map((p, i) => (
                            <div key={i} className="reveal tech-card" style={{ padding: '28px', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue-light), var(--cyan))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                    <i className={`fa-solid ${p.icon}`} style={{ color: '#fff', fontSize: '1.3rem' }} />
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px', fontSize: '1rem' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section style={{ padding: '60px 5%', background: '#fff' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="section-label">Action</span>
                        <h2 className="section-title">Our <span>Initiatives</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                        {initiatives.map((init, i) => (
                            <div key={i} className="reveal tech-card" style={{ padding: '28px', transitionDelay: `${i * 0.08}s` }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${init.color}22`, border: `2px solid ${init.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className={`fa-solid ${init.icon}`} style={{ color: init.color, fontSize: '1.1rem' }} />
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--navy)', fontSize: '0.95rem' }}>{init.title}</h3>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '12px' }}>{init.desc}</p>
                                <span className="status-badge completed">{init.impact}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="tech-grid-bg" style={{ padding: '60px 5%' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="section-label">Impact</span>
                        <h2 className="section-title">Our <span>Contribution</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                        {[
                            { num: '1500+', label: 'Students Empowered', icon: 'fa-users' },
                            { num: '100+', label: 'Companies Partnered', icon: 'fa-handshake' },
                            { num: '20+', label: 'Villages Reached', icon: 'fa-map-marker-alt' },
                            { num: '10+', label: 'Startups Incubated', icon: 'fa-rocket' },
                            { num: '15+', label: 'Years of Excellence', icon: 'fa-award' },
                        ].map((s, i) => (
                            <div key={i} className="reveal tech-card gold-accent" style={{ padding: '28px', textAlign: 'center', transitionDelay: `${i * 0.08}s` }}>
                                <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.6rem', color: 'var(--gold)', marginBottom: '12px', display: 'block' }} />
                                <div style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-head)', color: 'var(--navy)', lineHeight: 1 }}>{s.num}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '6px', fontWeight: 600 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
