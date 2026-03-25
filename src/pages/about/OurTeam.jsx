import { useEffect, useState } from 'react';

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

/* All staff members */
const team = [
    { name: 'Mr. Manoj Kumar Das', designation: 'Dean (Academic)', qualification: '23 Years Experience', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg', email: 'dasmanojp@gmail.com', role: 'admin' },
    { name: 'Mr. Krishnashis Mishra', designation: 'Principal', qualification: 'M.Tech (CSE) · 15 Yrs', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg', email: 'principal.creativecollege@gmail.com', role: 'admin' },
    { name: 'Mr. Bhabani Sankar Sahoo', designation: 'Vice Principal', qualification: 'M.Tech (CSE) · 7 Yrs', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg', email: 'bhabaniwipro89@gmail.com', role: 'admin' },
    { name: 'Mr. Subhrajyoti Behera', designation: 'HOD — Management Faculty', qualification: 'MBA (Marketing)', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg', email: 'subhyrajyoticafpl@gmail.com', role: 'mgmt' },
    { name: 'Ms. Neha Solanki', designation: 'Management Faculty', qualification: 'M.Com', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Neha Mam.jpg', email: 'nehasolanki1411@gmail.com', role: 'mgmt' },
    { name: 'Ms. Pravati Pradhan', designation: 'Mathematics Faculty', qualification: 'MSc (Mathematics)', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Pravati Mam.jpg', email: '', role: 'math' },
    { name: 'Mr. Saumya Ranjan Pradhan', designation: 'IT Faculty', qualification: 'MCA', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Saumya Sir.jpg', email: '', role: 'it' },
    { name: 'Mr. Swastik Ranjan Sahoo', designation: 'IT Faculty', qualification: 'MCA', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Swastik Sir.jpg', email: 'sahooswastik406@gmail.com', role: 'it' },
    { name: 'Ms. Arghyarupa Behera', designation: 'IT Faculty', qualification: 'MSc (CS)', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Arghyarupa Mam.jpg', email: 'arghyarupabehera3@gmail.com', role: 'it' },
    { name: 'Ms. Itishree Nath', designation: 'IT Faculty', qualification: 'BCA', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/itishreemam.jpg', email: '', role: 'it' },
    { name: 'Mr. Satya S. S. Dehury', designation: 'Public Relationship Officer', qualification: 'MBA', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Satya Sir.jpg', email: 'sssdehury89@gmail.com', role: 'admin' },
    { name: 'Ms. Monika Sahu', designation: 'Librarian', qualification: 'BCA, B.Lib.I.Sc', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/monikamam.jpg', email: 'monika28sahu@gmail.com', role: 'lib' },
    { name: 'Mr. Abhishek Satpathy', designation: 'Accountant', qualification: 'B.Com (Acctg), MBA', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/abhiseksir.jpg', email: 'abhisheksathpathy020@gmail.com', role: 'admin' },
    { name: 'Mr. Sarat Chandra Sahu', designation: 'Campus Incharge', qualification: 'General +3', img: '/CTC NEW REACT WEBSITE/images/OURTEAM/Sarat Sir.jpg', email: 'saratmuna243@gmail.com', role: 'admin' },
];

export default function OurTeam() {
    useReveal();
    const [search, setSearch] = useState('');

    const filteredTeam = team.filter(m =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.designation.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Custom styles for this redesigned page */}
            <style>{`
                .team-page {
                    background: #f8faff;
                    font-family: 'Inter', sans-serif;
                }
                .page-hero {
                    background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
                    padding: 100px 5% 80px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .page-hero-dots {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(0,212,255,0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.3;
                }
                .section-label {
                    display: inline-block;
                    background: rgba(0,212,255,0.1);
                    border: 1px solid rgba(0,212,255,0.3);
                    color: #00d4ff;
                    padding: 5px 16px;
                    border-radius: 30px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }
                .page-hero h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2.6rem, 6vw, 4.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 16px;
                }
                .page-hero h1 span {
                    background: linear-gradient(90deg, #f5c518, #ff8c00);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .page-hero p {
                    color: rgba(255,255,255,0.65);
                    font-size: 1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .team-header {
                    text-align: center;
                    padding: 60px 5% 20px;
                }
                .team-header .section-label {
                    background: #eff6ff;
                    color: #2563eb;
                    border-color: #bfdbfe;
                }
                .team-header h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: #0a1628;
                    margin: 12px 0 14px;
                }
                .team-header h2 span {
                    background: linear-gradient(135deg, #2563eb, #00d4ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .team-header p {
                    color: #64748b;
                    font-size: 0.97rem;
                    max-width: 620px;
                    margin: 0 auto;
                }

                .search-bar {
                    max-width: 500px;
                    margin: 0 auto 40px;
                    padding: 0 5%;
                }
                .search-bar input {
                    width: 100%;
                    padding: 14px 22px;
                    border: 1px solid rgba(10,22,40,0.12);
                    border-radius: 60px;
                    font-size: 0.95rem;
                    background: #fff;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.02);
                    transition: all 0.2s;
                }
                .search-bar input:focus {
                    outline: none;
                    border-color: #2563eb;
                    box-shadow: 0 12px 28px rgba(37,99,235,0.1);
                }

                .team-grid {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 5% 80px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 28px;
                }

                .team-card {
                    background: #fff;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(10,22,40,0.08);
                    transition: transform 0.25s, box-shadow 0.25s;
                    border: 1px solid rgba(10,22,40,0.06);
                    display: flex;
                    flex-direction: column;
                }
                .team-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(10,22,40,0.15);
                }

                .team-card-img {
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: #0a1628;
                    position: relative;
                }
                .team-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    display: block;
                    transition: transform 0.4s;
                }
                .team-card:hover .team-card-img img {
                    transform: scale(1.05);
                }
                .team-card-img::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: linear-gradient(to top, rgba(10,22,40,0.6), transparent);
                    pointer-events: none;
                }

                .team-card-body {
                    padding: 20px 18px 24px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .team-card-body h3 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #0a1628;
                    margin: 0 0 6px;
                    line-height: 1.3;
                }
                .team-card-body .designation {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #2563eb;
                    margin-bottom: 10px;
                    letter-spacing: 0.3px;
                }
                .team-card-body .qualification {
                    font-size: 0.8rem;
                    color: #64748b;
                    background: #f1f5f9;
                    padding: 5px 10px;
                    border-radius: 30px;
                    display: inline-block;
                    margin-bottom: 14px;
                    font-weight: 500;
                }
                .team-card-body .email {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    color: #334155;
                    margin-top: auto;
                    word-break: break-all;
                    background: #f8fafc;
                    padding: 8px 12px;
                    border-radius: 30px;
                    border: 1px solid #e2e8f0;
                }
                .team-card-body .email i {
                    color: #2563eb;
                    width: 16px;
                }
                .team-card-body .email a {
                    color: #0a1628;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .team-card-body .email a:hover {
                    color: #2563eb;
                    text-decoration: underline;
                }
                .team-card-body .email span {
                    color: #94a3b8;
                    font-style: italic;
                }

                .cta-section {
                    background: linear-gradient(135deg, #1a3a6b, #2563eb);
                    padding: 70px 5%;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .cta-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15), transparent 60%);
                }
                .cta-content {
                    max-width: 600px;
                    margin: 0 auto;
                    position: relative;
                }
                .cta-content .section-label {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.3);
                    color: #f5c518;
                }
                .cta-content h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2rem;
                    font-weight: 800;
                    color: #fff;
                    margin: 15px 0 12px;
                }
                .cta-content h2 span {
                    color: #f5c518;
                }
                .cta-content p {
                    color: rgba(255,255,255,0.7);
                    font-size: 0.98rem;
                    margin-bottom: 32px;
                }
                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #f5c518;
                    color: #0a1628;
                    padding: 15px 38px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: all 0.25s;
                    box-shadow: 0 10px 25px rgba(245,197,24,0.4);
                }
                .cta-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 18px 35px rgba(245,197,24,0.6);
                }

                /* Responsive */
                @media (max-width: 1100px) {
                    .team-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 800px) {
                    .team-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 500px) {
                    .team-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            {/* Hero */}
            <div className="page-hero">
                <div className="page-hero-dots" />
                <span className="section-label">Meet The People</span>
                <h1>Our <span>Team</span></h1>
                <p>Dedicated educators and professionals shaping the future of our students</p>
            </div>

            {/* Team header with search */}
            <div className="team-header">
                <span className="section-label">Faculty & Staff</span>
                <h2>The <span>Minds</span> Behind CTC</h2>
                <p>Our team of experienced educators, industry professionals, and dedicated staff work together to provide an exceptional learning experience.</p>
            </div>

            {/* Search bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by name or designation..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Team grid */}
            <div className="team-grid">
                {filteredTeam.map((member, i) => (
                    <div key={member.name} className="team-card reveal" style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                        <div className="team-card-img">
                            <img
                                src={member.img}
                                alt={member.name}
                                onError={(e) => { e.target.src = '/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg'; }}
                            />
                        </div>
                        <div className="team-card-body">
                            <h3>{member.name}</h3>
                            <div className="designation">{member.designation}</div>
                            <div className="qualification">
                                <i className="fa-solid fa-certificate" style={{ marginRight: '5px', color: '#f5c518' }}></i>
                                {member.qualification}
                            </div>
                            <div className="email">
                                <i className="fa-solid fa-envelope"></i>
                                {member.email ? (
                                    <a href={`mailto:${member.email}`}>{member.email}</a>
                                ) : (
                                    <span>Email not available</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}