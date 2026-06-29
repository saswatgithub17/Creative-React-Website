import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AngulPatternBg } from '../AngulPattern';

/* ── Angul Heritage Strip (GM-style cultural identity) ── */
export function AngulHeritageStrip() {
    return (
        <section className="angul-heritage-strip">
            <AngulPatternBg className="heritage-pattern" opacity={0.18} />
            <div className="heritage-inner reveal">
                <div className="heritage-odia-block">
                    <span className="heritage-odia-label">ଅଙ୍ଗୁଳ ର ଗୌରବ</span>
                    <h2 className="heritage-odia-title">ଜୟ ଜଗନ୍ନାଥ</h2>
                    <p className="heritage-odia-sub">Pride of Angul · Heart of Western Odisha</p>
                </div>
                <div className="heritage-divider" aria-hidden="true">
                    <span /><i className="fa-solid fa-microchip" /><span />
                </div>
                <div className="heritage-text-block">
                    <span className="section-label angul-label">ଅଙ୍ଗୁଳ · Angul Heritage</span>
                    <h3>Where <span>Tribal Roots</span> Meet <span>Technology</span></h3>
                    <p>
                        Nestled on the banks of the Mahanadi, Angul carries the rich legacy of Odia culture,
                        tribal artistry, and industrial spirit. At Creative Techno College, we honour this
                        heritage while shaping future-ready technocrats — blending local pride with global innovation.
                    </p>
                    <div className="heritage-tags">
                        <span><i className="fa-solid fa-mountain-sun" /> Mahanadi Valley</span>
                        <span><i className="fa-solid fa-palette" /> Tribal Art & Culture</span>
                        <span><i className="fa-solid fa-laptop-code" /> Tech Education Hub</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Quick Links (GM-style) ── */
const quickLinks = [
    { icon: 'fa-solid fa-graduation-cap', label: 'Admission', to: '/admission', color: 'gold' },
    { icon: 'fa-solid fa-book-open', label: 'Courses', to: '/academics/regular', color: 'cyan' },
    { icon: 'fa-solid fa-briefcase', label: 'Placement', to: '/placement/statistics', color: 'blue' },
    { icon: 'fa-solid fa-images', label: 'Gallery', to: '/gallery', color: 'gold' },
    { icon: 'fa-solid fa-phone', label: 'Contact', to: '/contacts', color: 'cyan' },
    { icon: 'fa-solid fa-paper-plane', label: 'Apply Now', to: '/admission/apply', color: 'blue' },
];

export function QuickLinksStrip() {
    return (
        <section className="quick-links-strip">
            <div className="quick-links-head">
                <span className="section-label angul-label">ଶୀଘ୍ର ଲିଙ୍କ · Quick Links</span>
                <h2>Navigate <span>CTC</span></h2>
            </div>
            <div className="quick-links-grid">
                {quickLinks.map((l, i) => (
                    <Link key={i} to={l.to} className={`quick-link-card ${l.color} reveal`} style={{ transitionDelay: `${i * 0.06}s` }}>
                        <div className="quick-link-icon"><i className={l.icon} /></div>
                        <span>{l.label}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}

/* ── Tabbed Updates Hub (GM-style Notice Board) ── */
const updatesTabs = [
    {
        id: 'notices',
        label: 'Notices',
        icon: 'fa-solid fa-bullhorn',
        items: [
            { date: '26 Jun 2026', title: 'Admissions Open for Academic Session 2026–27', tag: 'New' },
            { date: '20 Jun 2026', title: 'MBA & MCA PG Admissions — Seats Available', tag: 'Admission' },
            { date: '15 Jun 2026', title: '100% Placement Assistance for All Programs', tag: 'Placement' },
            { date: '10 Jun 2026', title: 'AICTE Approved & Utkal University Affiliated — Verified', tag: 'Important' },
            { date: '05 Jun 2026', title: 'World Environment Day Celebrations at CTC Campus', tag: 'Event' },
        ],
    },
    {
        id: 'admission',
        label: 'Admission',
        icon: 'fa-solid fa-user-graduate',
        items: [
            { date: '2026–27', title: 'UG Programs: BBA, BCA, B.Sc (CS), B.Sc (Data Science)', tag: 'UG' },
            { date: '2026–27', title: 'PG Programs: MBA (60 Seats) & MCA (60 Seats)', tag: 'PG' },
            { date: 'Eligibility', title: '10+2 pass with minimum 45% from recognised board', tag: 'Criteria' },
            { date: 'Apply', title: 'Online application at creativecollege.in or visit campus', tag: 'How To' },
            { date: 'Helpline', title: 'Call +91 9778427170 / 9668284222 for admission queries', tag: 'Contact' },
        ],
    },
    {
        id: 'events',
        label: 'Events',
        icon: 'fa-solid fa-calendar-days',
        items: [
            { date: 'Jan 2026', title: 'Saraswati Puja Celebrations — Goddess of Knowledge', tag: 'Cultural' },
            { date: 'Feb 2026', title: 'Fun Fest — Where Talent Takes the Stage', tag: 'Cultural' },
            { date: 'Mar 2026', title: 'Holi Celebrations — Festival of Colours & Joy', tag: 'Cultural' },
            { date: 'Ongoing', title: 'Technocrat Club — Tech Workshops & Hackathons', tag: 'Tech' },
            { date: 'Ongoing', title: 'Disha & CSR — Community Outreach Programs', tag: 'CSR' },
        ],
    },
    {
        id: 'downloads',
        label: 'Downloads',
        icon: 'fa-solid fa-download',
        items: [
            { date: 'PDF', title: 'AICTE LOA Report 2024–2025', tag: 'AICTE', href: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOA Report 2024-2025.PDF', external: true },
            { date: 'PDF', title: 'AICTE EOA Report 2025–26', tag: 'AICTE', href: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 2025-26.PDF', external: true },
            { date: 'Link', title: 'Placement Brochure & Statistics', tag: 'Placement', href: '/placement/brochure' },
            { date: 'Link', title: 'Regular Courses & Syllabus', tag: 'Academics', href: '/academics/regular' },
            { date: 'Link', title: 'Mandatory Disclosure Documents', tag: 'AICTE', href: '/aicte/mandatory-disclosure' },
        ],
    },
];

export function UpdatesHub() {
    const [tab, setTab] = useState('notices');
    const active = updatesTabs.find(t => t.id === tab);

    return (
        <section className="updates-hub">
            <AngulPatternBg className="updates-pattern" opacity={0.08} />
            <div className="updates-hub-inner">
                <div className="updates-hub-head reveal">
                    <span className="section-label angul-label">ସୂଚନା · Updates</span>
                    <h2 className="section-title">Latest <span>Announcements</span></h2>
                    <p className="section-subtitle">Stay informed with notices, admissions, events & downloads</p>
                </div>
                <div className="updates-hub-body reveal">
                    <div className="updates-tabs" role="tablist">
                        {updatesTabs.map(t => (
                            <button
                                key={t.id}
                                role="tab"
                                aria-selected={tab === t.id}
                                className={`updates-tab${tab === t.id ? ' active' : ''}`}
                                onClick={() => setTab(t.id)}
                            >
                                <i className={t.icon} />
                                <span>{t.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className="updates-panel" role="tabpanel">
                        <ul className="updates-list">
                            {active.items.map((item, i) => (
                                <li key={i} className="updates-item">
                                    <div className="updates-date-badge">
                                        <span className="updates-date-text">{item.date}</span>
                                    </div>
                                    <div className="updates-item-body">
                                        {item.href ? (
                                            item.external
                                                ? <a href={item.href} target="_blank" rel="noreferrer" className="updates-title">{item.title} <i className="fa-solid fa-arrow-up-right-from-square" /></a>
                                                : <Link to={item.href} className="updates-title">{item.title} <i className="fa-solid fa-arrow-right" /></Link>
                                        ) : (
                                            <span className="updates-title">{item.title}</span>
                                        )}
                                        <span className={`updates-tag tag-${item.tag.toLowerCase().replace(/\s/g, '-')}`}>{item.tag}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Link to="/admission" className="updates-view-all">
                            View All Updates <i className="fa-solid fa-chevron-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Alumni / Placement Network Carousel ── */
const alumniCards = [
    { icon: 'fa-solid fa-users', title: '5000+ Alumni', desc: 'A thriving network across India and beyond', stat: '5000+' },
    { icon: 'fa-solid fa-building', title: 'Wipro & TCS', desc: 'Our graduates lead at top IT giants', stat: '1500+' },
    { icon: 'fa-solid fa-chart-line', title: '95% Placement', desc: 'Consistent placement record year after year', stat: '95%' },
    { icon: 'fa-solid fa-globe', title: 'Global Corporates', desc: 'IBM, Accenture, Deloitte, Capgemini & more', stat: '100+' },
    { icon: 'fa-solid fa-rocket', title: 'Entrepreneurs', desc: 'Alumni building startups & enterprises', stat: '50+' },
    { icon: 'fa-solid fa-award', title: '₹4.5 LPA Highest', desc: 'Highest package achieved by CTC graduates', stat: '₹4.5L' },
];

export function AlumniCarousel() {
    const doubled = [...alumniCards, ...alumniCards];

    return (
        <section className="alumni-carousel-section">
            <div className="alumni-carousel-head reveal">
                <span className="section-label angul-label">ଆମ ଗୌରବ · Our Pride</span>
                <h2 className="section-title">Alumni <span>Success Network</span></h2>
                <p className="section-subtitle">Where CTC graduates shine — in industry, innovation & leadership</p>
            </div>
            <div className="alumni-track-wrap">
                <div className="alumni-track">
                    <div className="alumni-track-inner">
                        {doubled.map((c, i) => (
                            <div key={i} className="alumni-card">
                                <div className="alumni-card-stat">{c.stat}</div>
                                <div className="alumni-card-icon"><i className={c.icon} /></div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="alumni-carousel-cta reveal">
                <Link to="/placement/statistics" className="btn-primary">
                    <i className="fa-solid fa-chart-bar" /> View Placement Statistics
                </Link>
            </div>
        </section>
    );
}

/* ── Recent Activities Gallery ── */
const activities = [
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg', title: 'Saraswati Puja', date: 'Jan 2026', desc: 'Honouring the Goddess of Knowledge' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg', title: 'Fun Fest', date: 'Feb 2026', desc: 'Where Talent Takes the Stage' },
    { img: '/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg', title: 'Holi Celebrations', date: 'Mar 2026', desc: 'Festival of Colours & Joy' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/5.jpg', title: 'Campus Life', date: '2026', desc: 'Learn. Grow. Excel.' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/2.jpg', title: 'Placement Drive', date: '2026', desc: 'Industry Connect & Career Growth' },
    { img: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/4.jpg', title: 'Library & Learning', date: '2026', desc: 'Modern Resources for Students' },
];

export function ActivitiesGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="activities-gallery-section">
      <AngulPatternBg className="activities-pattern" opacity={0.06} />
      <div className="activities-inner">
        <div className="activities-head reveal">
          <span className="section-label angul-label">କାର୍ଯ୍ୟକଳାପ · Activities</span>
          <h2 className="section-title">Recent <span>Campus Activities</span></h2>
          <p className="section-subtitle">Cultural celebrations, tech events & vibrant student life at CTC Angul</p>
        </div>
        <div className="activities-showcase reveal">
          <div className="activities-feature">
            <img src={activities[active].img} alt={activities[active].title} />
            <div className="activities-feature-overlay">
              <span className="activities-feature-date">{activities[active].date}</span>
              <h3>{activities[active].title}</h3>
              <p>{activities[active].desc}</p>
            </div>
          </div>
          <div className="activities-thumbs">
            {activities.map((a, i) => (
              <button
                key={i}
                className={`activities-thumb${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={a.title}
              >
                <img src={a.img} alt={a.title} />
                <span>{a.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="activities-cta reveal">
          <Link to="/gallery" className="btn-outline-dark">
            <i className="fa-solid fa-images" /> View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
