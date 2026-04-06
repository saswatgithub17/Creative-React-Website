import { useEffect, useState } from 'react';
import MarqueeBar from './MarqueeBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot/Chatbot';

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

            {/* Premium Header */}
            <header className="site-header">
                <div className="header-brand">
                    <div className="header-logo-wrap">
                        <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png" alt="CTC Logo" />
                    </div>
                    <div className="header-text">
                        <h1>Creative Techno College, Angul</h1>
                        <p className="sub">A Unit of Creative Knowledge Foundation</p>
                        <div className="badges">
                            <span className="badge gold">AICTE Approved</span>
                            <span className="badge">Utkal University Affiliated</span>
                            <span className="badge">Est. 2010</span>
                        </div>
                    </div>
                </div>
                <div className="header-logos">
                    <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/aicte.png" alt="AICTE" title="AICTE Approved" />
                    <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/utkal.png" alt="Utkal University" title="Utkal University Affiliated" />
                    <img src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/ckf.png" alt="CKF" title="Creative Knowledge Foundation" />
                </div>
                <div className="header-clubs">
                    <img src="/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png" alt="Technocrat" title="Technocrat Club" />
                    <img src="/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png" alt="Cultural" title="Cultural Club" />
                    <img src="/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png" alt="Sports" title="Sports Club" />
                    <img src="/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png" alt="Disha CSR" title="Disha & CSR Club" />
                </div>
            </header>

            <Navbar />

            <main>{children}</main>

            <Footer />

            {/* Scroll to top */}
            <button
                className={`scroll-top-btn${showTop ? ' visible' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
            >
                <i className="fa-solid fa-chevron-up"></i>
            </button>

            {/* CTC AI Chatbot — global across all pages */}
            <Chatbot />
        </>
    );
}
