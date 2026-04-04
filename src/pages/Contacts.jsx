import { useState } from 'react';
import SEO from '../components/SEO';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const QUICK = [
    { icon: 'fa-solid fa-phone-volume', label: 'Admissions Helpline', val: '+91 9778427170', href: 'tel:+919778427170', color: '#00d4ff' },
    { icon: 'fa-solid fa-envelope-open-text', label: 'Principal Email', val: 'principal.creativecollege@gmail.com', href: 'mailto:principal.creativecollege@gmail.com', color: '#f5c518' },
    { icon: 'fa-solid fa-location-dot', label: 'Campus Address', val: 'Baluakata, Saradhapur, Angul – 759143', href: 'https://maps.google.com/?q=Creative+Techno+College+Angul', color: '#7b61ff' },
    { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', val: '+91 9668844571', href: 'https://wa.me/919668844571', color: '#25d366' },
];

const DEPARTMENTS = [
    {
        key: 'academic',
        icon: 'fa-solid fa-book-open',
        title: 'Academic & Student Support',
        color: '#0d7ff5',
        cards: [
            { title: 'Academic Support', icon: 'fa-solid fa-chalkboard-user', people: [{ name: 'Mr. Bhabani Sankar Sahoo', phone: ['+91 9668844571'], email: 'bhabaniwipro89@gmail.com' }] },
            { title: 'Examination & Certificates', icon: 'fa-solid fa-file-certificate', people: [{ name: 'Mr. Krishnasis Mishra', phone: ['+91 8249090003'], email: 'principal.creativecollege@gmail.com' }] },
            { title: 'Counselling & Wellness', icon: 'fa-solid fa-heart-pulse', people: [{ name: 'Respective Batch Mentor' }] },
        ],
    },
    {
        key: 'career',
        icon: 'fa-solid fa-briefcase',
        title: 'Training & Career Development',
        color: '#f5c518',
        cards: [
            { title: 'Training & Placement', icon: 'fa-solid fa-briefcase', people: [{ name: 'Mr. Bhabani S. Sahoo', phone: ['+91 9668844571'], email: 'bhabaniwipro89@gmail.com' }, { name: 'Mr. Subhrajyoti Behera', phone: ['+91 9861071840'], email: 'subhyrajyoticafpl@gmail.com' }] },
            { title: 'DISHA', icon: 'fa-solid fa-hands-holding-child', people: [{ name: 'Mr. Subhrajyoti Behera', phone: ['+91 9861071840'], email: 'subhyrajyoticafpl@gmail.com' }, { name: 'Ms. Neha Solanki', phone: [''], email: 'nehasolanki1411@gmail.com' }] },
            { title: 'Technocrat Club', icon: 'fa-solid fa-microchip', people: [{ name: 'Mr. Bhabani S. Sahoo', phone: ['+91 9668844571'] }, { name: 'Mr. Swastik R. Sahoo', phone: ['+91 6372877833'], email: 'sahooswastik406@gmail.com' }] },
            { title: 'Alumni', icon: 'fa-solid fa-graduation-cap', people: [{ name: 'Mr. Krishnasis Mishra', phone: ['+91 8249090003'], email: 'principal.creativecollege@gmail.com' }] },
        ],
    },
    {
        key: 'hostel',
        icon: 'fa-solid fa-house-user',
        title: 'Hostel & Transport',
        color: '#7b61ff',
        cards: [
            { title: 'Transport Services', icon: 'fa-solid fa-bus-simple', people: [{ name: 'Mr. Satya S. S. Dehury', phone: ['+91 9439137384'], email: 'sssdehury89@gmail.com' }, { name: 'Mr. Sarat C. Sahu', phone: ['+91 9853167581'], email: 'saratmuna243@gmail.com' }] },
            { title: 'Hostel (Boys)', icon: 'fa-solid fa-bed', people: [{ name: 'Mr. Satya S. S. Dehury', phone: ['+91 9439137384'] }, { name: 'Mr. Raghunath Behera', phone: ['+91 8984949923'] }] },
            { title: 'Hostel (Girls)', icon: 'fa-solid fa-bed', people: [{ name: 'Ms. Nibedita Patra', phone: ['+91 7606878160'], email: 'nibedita.patra2903@gmail.com' }, { name: 'Ms. Arghyarupa Behera', phone: ['+91 9827465376'], email: 'arghyarupabehera3@gmail.com' }] },
        ],
    },
    {
        key: 'admin',
        icon: 'fa-solid fa-landmark',
        title: 'Administration & Finance',
        color: '#ff6b6b',
        cards: [
            { title: 'General Administration', icon: 'fa-solid fa-building', people: [{ name: 'Mr. Manoj Kumar Das', phone: ['+91 9338233303', '+91 7008574320'], email: 'dasmanojp@gmail.com' }] },
            { title: 'Scholarship & Financial Aid', icon: 'fa-solid fa-hand-holding-dollar', people: [{ name: 'Mr. Subhrajyoti Behera', phone: ['+91 9861071840'], email: 'subhyrajyoticafpl@gmail.com' }] },
            { title: 'Fees & Payments', icon: 'fa-solid fa-receipt', people: [{ name: 'Mr. Abhisek Satpathy', phone: ['+91 8260077588'], email: 'abhisheksathpathy020@gmail.com' }] },
            { title: 'Admissions Front Office', icon: 'fa-solid fa-door-open', people: [{ name: 'Front Office', phone: ['+91 9778427170', '+91 9668284222', '+91 9668332555'] }] },
        ],
    },
    {
        key: 'services',
        icon: 'fa-solid fa-building-columns',
        title: 'Other Services',
        color: '#25d366',
        cards: [
            { title: 'Library', icon: 'fa-solid fa-book', people: [{ name: 'Ms. Monika Sahu', phone: ['+91 9668284222'], email: 'monika28sahu@gmail.com' }] },
            { title: 'Canteen', icon: 'fa-solid fa-utensils', people: [{ name: 'Mr. Sarat C. Sahu', phone: ['+91 9853167581'], email: 'saratmuna243@gmail.com' }, { name: 'Mr. Ranjan Das', phone: ['+91 8917466271'] }] },
            { title: 'CSR & Sports', icon: 'fa-solid fa-trophy', people: [{ name: 'Mr. Satya S. S. Dehury', phone: ['+91 9439137384'], email: 'sssdehury89@gmail.com' }] },
        ],
    },
];

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */
function PersonBlock({ name, phone, email }) {
    return (
        <div className="ct-person">
            {name && <p><i className="fa-solid fa-user"></i><strong>{name}</strong></p>}
            {phone?.map((ph, i) => (
                <p key={i}><i className="fa-solid fa-phone"></i>
                    <a href={`tel:${ph.replace(/\s/g, '')}`}>{ph}</a>
                </p>
            ))}
            {email && (
                <p><i className="fa-solid fa-envelope"></i>
                    <a href={`mailto:${email}`} style={{ wordBreak: 'break-all' }}>{email}</a>
                </p>
            )}
        </div>
    );
}

function DeptCard({ title, icon, people }) {
    return (
        <div className="ct-card">
            <div className="ct-card-title">
                <i className={icon}></i>
                {title}
            </div>
            {people.map((p, i) => <PersonBlock key={i} {...p} />)}
        </div>
    );
}

function EnquiryForm() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', dept: '', msg: '' });
    const [sent, setSent] = useState(false);
    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    function handleSubmit(e) {
        e.preventDefault();
        const text = `*CTC Enquiry*\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || '—'}\nDept: ${form.dept || '—'}\nMessage: ${form.msg}`;
        window.open(`https://wa.me/919668844571?text=${encodeURIComponent(text)}`, '_blank');
        setSent(true);
    }

    if (sent) return (
        <div className="ct-form-success">
            <i className="fa-solid fa-circle-check"></i>
            <h3>Message Sent!</h3>
            <p>Your enquiry has been forwarded via WhatsApp. We'll get back to you shortly.</p>
            <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
        </div>
    );

    return (
        <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-form-row">
                <div className="ct-form-field">
                    <label>Full Name *</label>
                    <input required placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div className="ct-form-field">
                    <label>Mobile Number *</label>
                    <input required type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
            </div>
            <div className="ct-form-row">
                <div className="ct-form-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="Optional" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div className="ct-form-field">
                    <label>Department</label>
                    <select value={form.dept} onChange={e => set('dept', e.target.value)}>
                        <option value="">Select Department</option>
                        {DEPARTMENTS.map(d => <option key={d.key}>{d.title}</option>)}
                        <option>Admissions</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>
            <div className="ct-form-field">
                <label>Your Message *</label>
                <textarea required rows={4} placeholder="Write your query or message here…" value={form.msg} onChange={e => set('msg', e.target.value)} />
            </div>
            <button type="submit" className="ct-form-submit">
                <i className="fa-brands fa-whatsapp"></i> Send via WhatsApp
            </button>
        </form>
    );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Contacts() {
    const [search, setSearch] = useState('');
    const [activeDept, setActiveDept] = useState('all');

    /* filter cards by search text */
    const filteredDepts = DEPARTMENTS
        .filter(d => activeDept === 'all' || d.key === activeDept)
        .map(d => ({
            ...d,
            cards: d.cards.filter(c => {
                if (!search.trim()) return true;
                const q = search.toLowerCase();
                return (
                    c.title.toLowerCase().includes(q) ||
                    c.people.some(p =>
                        p.name?.toLowerCase().includes(q) ||
                        p.phone?.some(ph => ph.includes(q)) ||
                        p.email?.toLowerCase().includes(q)
                    )
                );
            }),
        }))
        .filter(d => d.cards.length > 0);

    return (
        <>
            <SEO
                title="Contact Creative Techno College – Angul, Odisha | Phone, Address & Map"
                description="Contact Creative Techno College (CTC), Angul. Campus address: Baluakata, Saradhapur, Angul 759143. Admissions helpline: +91-9778427170. Email: principal.creativecollege@gmail.com. Open Mon–Sat, 9AM–5PM."
                keywords="creative techno college contact, CTC angul phone number, CTC angul address, college in angul contact, creative college angul helpline"
                canonical="/contacts"
            />

            {/* ══ HERO ══ */}
            <div className="ct-hero">
                <div className="ct-hero-glow" />
                <div className="ct-hero-inner">
                    <span className="section-label" style={{ color: 'var(--cyan)' }}>Reach Out</span>
                    <h1>
                        Helpline <span style={{ color: 'var(--gold)' }}>Contacts</span>
                    </h1>
                    <p>Find the right person for your query — our team is here to help.</p>
                    {/* search */}
                    <div className="ct-search-wrap">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            className="ct-search"
                            type="text"
                            placeholder="Search by name, department, phone…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        {search && (
                            <button className="ct-search-clear" onClick={() => setSearch('')}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        )}
                    </div>
                </div>
                <div className="ct-hero-wave">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--page-bg)" />
                    </svg>
                </div>
            </div>

            {/* ══ QUICK CONTACT CARDS ══ */}
            <div className="ct-quick-wrap">
                <div className="ct-quick-grid">
                    {QUICK.map((q, i) => (
                        <a key={i} href={q.href} className="ct-quick-card" target={q.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                            <div className="ct-quick-icon" style={{ background: `${q.color}18`, border: `1.5px solid ${q.color}44` }}>
                                <i className={q.icon} style={{ color: q.color }}></i>
                            </div>
                            <div>
                                <p className="ct-quick-label">{q.label}</p>
                                <p className="ct-quick-val">{q.val}</p>
                            </div>
                            <i className="fa-solid fa-arrow-up-right-from-square ct-quick-ext"></i>
                        </a>
                    ))}
                </div>
            </div>

            {/* ══ DEPT FILTER TABS ══ */}
            <div className="ct-tabs-wrap">
                <div className="ct-tabs">
                    <button className={`ct-tab${activeDept === 'all' ? ' active' : ''}`} onClick={() => setActiveDept('all')}>
                        <i className="fa-solid fa-grip"></i> All Departments
                    </button>
                    {DEPARTMENTS.map(d => (
                        <button key={d.key} className={`ct-tab${activeDept === d.key ? ' active' : ''}`} onClick={() => setActiveDept(d.key)}>
                            <i className={d.icon}></i> {d.title.split(' ')[0]}
                        </button>
                    ))}
                </div>
            </div>

            {/* ══ DEPARTMENT SECTIONS ══ */}
            <div className="ct-body">
                {filteredDepts.length === 0 ? (
                    <div className="ct-no-results">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p>No contacts found for "<strong>{search}</strong>"</p>
                        <button className="btn-outline" onClick={() => setSearch('')}>Clear Search</button>
                    </div>
                ) : (
                    filteredDepts.map(dept => (
                        <div key={dept.key} className="ct-dept">
                            <div className="ct-dept-header" style={{ '--dc': dept.color }}>
                                <div className="ct-dept-icon">
                                    <i className={dept.icon}></i>
                                </div>
                                <h2>{dept.title}</h2>
                                <span className="ct-dept-count">{dept.cards.length} contact{dept.cards.length !== 1 ? 's' : ''}</span>
                            </div>
                            <div className="ct-cards-grid">
                                {dept.cards.map((card, j) => (
                                    <DeptCard key={j} {...card} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* ══ MAP + ENQUIRY FORM ══ */}
            <section className="ct-map-section">
                <div className="ct-map-inner">
                    {/* Map */}
                    <div className="ct-map-box">
                        <div className="ct-map-header">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h3>Find Us</h3>
                                <p>Creative Techno College, Angul</p>
                            </div>
                        </div>
                        <div className="ct-map-embed">
                            <iframe
                                title="CTC Campus Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4!2d85.0964!3d20.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f3c6f2bd7d01%3A0x9b7694f44f8e2b1c!2sCreative+Techno+College!5e0!3m2!1sen!2sin!4v1"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="ct-address-list">
                            <div className="ct-addr-row"><i className="fa-solid fa-building-columns"></i><span><strong>Campus:</strong> Baluakata, Saradhapur, Angul, Odisha – 759143</span></div>
                            <div className="ct-addr-row"><i className="fa-solid fa-city"></i><span><strong>City Office:</strong> Tamrit Colony, Angul</span></div>
                            <div className="ct-addr-row"><i className="fa-solid fa-clock"></i><span><strong>Office Hours:</strong> Mon – Sat, 9:00 AM – 5:00 PM</span></div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="ct-form-box">
                        <div className="ct-form-header">
                            <i className="fa-brands fa-whatsapp"></i>
                            <div>
                                <h3>Send an Enquiry</h3>
                                <p>We'll respond via WhatsApp within 24 hours</p>
                            </div>
                        </div>
                        <EnquiryForm />
                    </div>
                </div>
            </section>
        </>
    );
}
