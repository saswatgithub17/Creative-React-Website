import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

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

const facilities = [
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/StrongAcademic.png', title: 'Strong Academics', desc: 'Comprehensive programs delivered by experienced faculty to boost academic excellence and career readiness.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/PrePlacementActivity.jpg', title: 'Pre-Placement Training', desc: 'Mock interviews, aptitude tests, and resume workshops to prepare students for campus placements.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/LiveProjects.png', title: 'Skill Development', desc: 'Hands-on live projects and internship programs to bridge the gap between academics and industry.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/Hostel.jpg', title: 'Hostel Facilities', desc: 'Comfortable, secure, and well-maintained separate hostels for boys and girls with 24/7 security.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/transportation.png', title: 'Buses & Transportation', desc: 'Safe and timely college bus services covering major routes across Angul and surrounding areas.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/Playground.png', title: 'Play Ground & Sports', desc: 'Dedicated outdoor sports facilities to promote physical fitness, teamwork, and competitive spirit.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/Canteen_Caffeteria.jpg', title: 'Canteen & Cafeteria', desc: 'Hygienic and affordable canteen offering nutritious meals and refreshments throughout the day.' },
    { img: '/CTC NEW REACT WEBSITE/images/AboutUs/GreenCampus.png', title: 'Green Campus', desc: 'Lush eco-friendly campus with beautiful surroundings promoting a healthy and inspiring environment.' },
];

export default function AboutUs() {
    useReveal();

    return (
        <>
            <SEO
                title="About Creative Techno College | Top Educational Institution in Odisha"
                description="Learn about Creative Techno College (CTC), the top engineering and degree college in Angul, dedicated to modern education, skill development, and student success."
                keywords="about creative techno college angul, CTC angul about, best college angul odisha, top educational institution odisha, best residential college angul, modern education odisha"
                canonical="/about/ctc"
            />

            {/* ── Hero ── */}
            <div className="page-hero">
                <div className="page-hero-dots" />
                <span className="section-label">Know Us Better</span>
                <h1>About <span>Creative Techno College: A Legacy of Excellence</span></h1>
                <p>Top Educational Institution in Odisha — Angul</p>
            </div>

            {/* ── About CTC ── */}
            <section style={{ padding: '80px 5%', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {/* Text column */}
                    <div className="reveal-left" style={{ flex: '1 1 380px' }}>
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">Our Vision as the <span>Top College in Odisha</span></h2>
                        <p style={{ color: '#4a6080', lineHeight: 1.9, marginBottom: '16px' }}>
                            Established with a vision to redefine higher education, Creative Techno College has grown into the <strong>top college in Odisha</strong> for technology and management studies. Our mission goes beyond textbooks; we focus on holistic, career-oriented learning that transforms students into industry leaders.
                        </p>
                        <p style={{ color: '#4a6080', lineHeight: 1.9, marginBottom: '16px' }}>
                            Recognized widely as the <strong>top educational institution in Odisha</strong>, we offer a secure and dynamic environment, making us the <strong>best residential college in Angul</strong>. Our dedicated faculty, modern education methodologies, and robust infrastructure ensure that whether you are pursuing our <strong>top Data Science course in Angul</strong> or seeking a foundation in business administration, you receive an education that meets global standards.
                        </p>
                        <p style={{ color: '#4a6080', lineHeight: 1.9, marginBottom: '28px' }}>
                            With a dedicated placement cell, experienced faculty, and vibrant campus life through Gymkhana
                            activities, CTC provides a holistic educational experience that fosters innovation and modern education.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <Link to="/admission" className="btn-primary">
                                <i className="fa-solid fa-graduation-cap"></i> Apply Now
                            </Link>
                        </div>
                    </div>

                    {/* Image + mini stats column */}
                    <div className="reveal-right" style={{ flex: '1 1 340px' }}>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
                            <img
                                src="/CTC NEW REACT WEBSITE/images/AboutUs/creative-campus.jpg"
                                alt="CTC Campus"
                                style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)', pointerEvents: 'none' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                            {[
                                { val: '15+', label: 'Years' },
                                { val: '1500+', label: 'Alumni' },
                                { val: '398', label: 'Seats' },
                                { val: '95%', label: 'Placement' },
                            ].map((s, i) => (
                                <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s`, background: 'linear-gradient(135deg, var(--navy), var(--blue))', borderRadius: '12px', padding: '20px', textAlign: 'center', color: '#fff' }}>
                                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--gold)' }}>{s.val}</div>
                                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginTop: '4px' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Placement Highlight ── */}
            <section style={{ padding: '80px 5%', background: 'linear-gradient(135deg, var(--navy) 0%, #0d2550 50%, var(--blue) 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="section-label" style={{ color: 'var(--cyan)' }}>Career Success</span>
                        <h2 className="section-title" style={{ color: '#fff' }}>Best Placement Provider <span style={{ color: 'var(--gold)' }}>in Odisha</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.9, fontSize: '0.97rem' }}>
                            Education is not just about subjects learned in college. Becoming educated is a lifelong exercise
                            that can be unbelievably exciting if one jumps into the train of experience and takes a trip to
                            every conceivable place on earth.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { val: '1500+', label: 'Students Placed', icon: 'fa-solid fa-user-tie' },
                            { val: '100+', label: 'Companies', icon: 'fa-solid fa-building' },
                            { val: '₹4.5 LPA', label: 'Highest Package', icon: 'fa-solid fa-indian-rupee-sign' },
                            { val: '95%', label: 'Placement Rate', icon: 'fa-solid fa-chart-line' },
                        ].map((s, i) => (
                            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s`, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                                <i className={s.icon} style={{ color: 'var(--cyan)', fontSize: '1.6rem', marginBottom: '12px', display: 'block' }}></i>
                                <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--gold)', marginBottom: '4px' }}>{s.val}</div>
                                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/placement" className="btn-primary">
                            <i className="fa-solid fa-briefcase"></i> View Placement Details
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Facilities — REAL PHOTOS ── */}
            <section style={{ padding: '80px 5%', background: 'var(--page-bg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                        <span className="section-label">Campus Life</span>
                        <h2 className="section-title">World-Class <span>Facilities</span></h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Everything you need for a complete and enriching college experience.
                        </p>
                    </div>
                    <div className="facility-grid">
                        {facilities.map((f, i) => (
                            <div key={i} className="facility-card reveal" style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                                <div className="facility-img-wrap">
                                    <img src={f.img} alt={f.title} />
                                    <div className="facility-img-overlay" />
                                </div>
                                <div className="facility-info">
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
