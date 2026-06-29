import { useEffect, useState } from 'react';
import MarqueeBar from './MarqueeBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot/Chatbot';
import { AngulPatternBg, AngulBorderStrip } from './AngulPattern';

export default function Layout({ children }) {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <MarqueeBar />

            <header className="site-header angul-header">
                <AngulPatternBg className="header-pattern" opacity={0.15} />

                <div className="header-main">
                    <div className="header-brand">
                        <div className="header-logo-frame">
                            <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png" alt="CTC Logo" />
                        </div>
                        <div className="header-text">
                            <p className="header-odia-name">କ୍ରିଏଟିଭ ଟେକ୍ନୋ କଲେଜ, ଅନୁଗୋଳ</p>
                            <h1>Creative Techno College, Angul</h1>
                            <p className="sub">A Unit of Creative Knowledge Foundation</p>
                            <div className="badges">
                                <span className="badge gold"><i className="fa-solid fa-certificate" /> AICTE Approved</span>
                                <span className="badge"><i className="fa-solid fa-university" /> Utkal University</span>
                                <span className="badge angul-badge"><i className="fa-solid fa-location-dot" /> Angul, Odisha</span>
                            </div>
                        </div>
                    </div>

                    <div className="header-side-group">
                        <div className="header-affiliations">
                            <div className="header-logos">
                                <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/aicte.png" alt="AICTE" title="AICTE Approved" />
                                <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/utkal.png" alt="Utkal University" title="Utkal University Affiliated" />
                                <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/bput.png" alt="BPUT" title="Creative Knowledge Foundation" />
                                <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/ckf.png" alt="CKF" title="Creative Knowledge Foundation" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <AngulBorderStrip />

            <Navbar />

            <main>{children}</main>

            <Footer />

            <button
                className={`scroll-top-btn${showTop ? ' visible' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
            >
                <i className="fa-solid fa-chevron-up"></i>
            </button>

            <Chatbot />
        </>
    );
}
