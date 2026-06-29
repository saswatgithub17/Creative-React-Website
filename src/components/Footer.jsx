import { Link } from 'react-router-dom';
import { AngulPatternBg } from './AngulPattern';

const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About CTC', to: '/about/ctc' },
    { label: 'About Trust', to: '/about/trust' },
    { label: 'Our Team', to: '/about/team' },
    { label: 'Admission', to: '/admission' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contacts', to: '/contacts' },
    { label: 'ICC', to: '/icc' },
];

const services = [
    { label: 'Academics', to: '/academics/regular' },
    { label: 'Placement', to: '/placement/statistics' },
    { label: 'Gymkhana', to: '/gymkhana' },
    { label: 'Technocrat', to: '/gymkhana/technocrat' },
    { label: 'Disha & CSR', to: '/gymkhana/disha-csr' },
    { label: 'Sports', to: '/gymkhana/sports' },
    { label: 'Cultural', to: '/gymkhana/cultural' },
    { label: 'Portal Login', to: '/login' },
];

const socials = [
    { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/creativetechnocollege.angul', label: 'Facebook' },
    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/creative_techno_college_angul', label: 'Instagram' },
    { icon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@creativetechnocollegeiangu9750', label: 'YouTube' },
    { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/creative-techno-college-angul/', label: 'LinkedIn' },
    { icon: 'fa-brands fa-twitter', href: 'https://x.com/creative__1998?lang=en', label: 'Twitter' },
];

export default function Footer() {
    return (
        <footer className="site-footer angul-footer">
            <AngulPatternBg className="footer-pattern" opacity={0.15} />

            <div className="footer-top-bar">
                <div className="footer-top-odia">
                    <span className="footer-odia-script">ଅନୁଗୋଳ ର ଗୌରବ</span>
                    <span className="footer-top-divider" aria-hidden="true" />
                    <span className="footer-top-en">Pride of Angul · Technology Education Since 2010</span>
                </div>
                <div className="footer-top-badges">
                    <span><i className="fa-solid fa-certificate" /> AICTE Approved</span>
                    <span><i className="fa-solid fa-university" /> Utkal University</span>
                    <span><i className="fa-solid fa-award" /> Est. 2010</span>
                </div>
            </div>

            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="footer-brand-header">
                        <div className="footer-logo-wrap">
                            <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png" alt="CTC Logo" />
                        </div>
                        <div className="footer-brand-titles">
                            <h3 className="footer-brand-name">Creative Techno College</h3>
                            <p className="footer-brand-odia">କ୍ରିଏଟିଭ ଟେକ୍ନୋ କଲେଜ, ଅନୁଗୋଳ</p>
                            <p className="footer-brand-location">Angul, Odisha – 759122</p>
                        </div>
                    </div>
                    <p className="footer-brand-desc">
                        A premier institution committed to academic excellence, innovation, and holistic development.
                        AICTE approved & affiliated to Utkal University.
                    </p>
                    <div className="footer-social">
                        {socials.map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                                <i className={s.icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-col">
                    <h4><i className="fa-solid fa-link" aria-hidden="true" /> Quick Links</h4>
                    <nav className="footer-links" aria-label="Quick links">
                        {quickLinks.map((l, i) => <Link key={i} to={l.to}>{l.label}</Link>)}
                    </nav>
                </div>

                <div className="footer-col">
                    <h4><i className="fa-solid fa-graduation-cap" aria-hidden="true" /> College Services</h4>
                    <nav className="footer-links" aria-label="College services">
                        {services.map((l, i) => <Link key={i} to={l.to}>{l.label}</Link>)}
                    </nav>
                </div>

                <div className="footer-col footer-contact-col">
                    <h4><i className="fa-solid fa-headset" aria-hidden="true" /> Contact Us</h4>
                    <div className="footer-contact-list">
                        <div className="footer-contact-item">
                            <span className="footer-contact-icon"><i className="fa-solid fa-location-dot" /></span>
                            <span>Creative Techno College, Angul, Odisha – 759122</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="footer-contact-icon"><i className="fa-solid fa-phone" /></span>
                            <span>+91 9778427170 / 9668284222</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="footer-contact-icon"><i className="fa-solid fa-envelope" /></span>
                            <span>principal.creativecollege@gmail.com</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="footer-contact-icon"><i className="fa-solid fa-clock" /></span>
                            <span>Mon – Sat: 9:00 AM – 5:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2010 – 2025 <span>Creative Techno College</span>. All Rights Reserved.</p>
                <p>A Unit of <span>Creative Knowledge Foundation</span></p>
                <p>Developed by <span>Technocrat Club</span></p>
            </div>
        </footer>
    );
}
