import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-grid">
                {/* Brand */}
                <div className="footer-brand">
                    <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png" alt="CTC Logo" />
                    <p>
                        Creative Techno College, Angul is a premier institution committed to academic excellence,
                        innovation, and holistic development. AICTE approved & affiliated to Utkal University.
                    </p>
                    <div className="footer-social">
                        {[
                            { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/creativetechnocollege.angul' },
                            { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/creative_techno_college_angul' },
                            { icon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@creativetechnocollegeiangu9750' },
                            { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/creative-techno-college-angul/' },
                            { icon: 'fa-brands fa-twitter', href: 'https://x.com/creative__1998?lang=en' },
                        ].map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer">
                                <i className={s.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    {[
                        { label: 'Home', to: '/' },
                        { label: 'About CTC', to: '/about/ctc' },
                        { label: 'About Trust', to: '/about/trust' },
                        { label: 'Our Team', to: '/about/team' },
                        { label: 'Admission', to: '/admission' },
                        { label: 'Gallery', to: '/gallery' },
                        { label: 'Contacts', to: '/contacts' },
                        { label: 'ICC', to: '/icc' },
                    ].map((l, i) => <Link key={i} to={l.to}>{l.label}</Link>)}
                </div>

                {/* College Services */}
                <div className="footer-col">
                    <h4>College Services</h4>
                    {[
                        { label: 'Academics', to: '/academics/regular' },
                        { label: 'Placement', to: '/placement/statistics' },
                        { label: 'Gymkhana', to: '/gymkhana' },
                        { label: 'Technocrat', to: '/gymkhana/technocrat' },
                        { label: 'Disha & CSR', to: '/gymkhana/disha-csr' },
                        { label: 'Sports', to: '/gymkhana/sports' },
                        { label: 'Cultural', to: '/gymkhana/cultural' },
                        { label: 'Portal Login', to: '/login' },
                    ].map((l, i) => <Link key={i} to={l.to}>{l.label}</Link>)}
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="footer-contact-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Creative Techno College, Angul, Odisha – 759122</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fa-solid fa-phone"></i>
                        <span>+91 9778427170 / 9668284222</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fa-solid fa-envelope"></i>
                        <span>principal.creativecollege@gmail.com</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fa-solid fa-clock"></i>
                        <span>Mon – Sat: 9:00 AM – 5:00 PM</span>
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
