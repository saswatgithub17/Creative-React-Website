export default function MarqueeBar() {
    const items = [
        { type: 'en', text: 'Creative Techno College, Angul — AICTE Approved & Utkal University Affiliated' },
        { type: 'odia', text: 'ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ' },
        { type: 'en', text: 'Admissions Open 2026–27 | BBA | BCA | B.Sc (CS) | B.Sc (Data Science) | MBA | MCA' },
        { type: 'odia', text: 'ଜୟ ଜଗନ୍ନାଥ · ଅନୁଗୋଳ ର ଗୌରବ' },
        { type: 'en', text: '100% Placement Assistance | Contact: +91 9778427170' },
    ];

    const track = [...items, ...items];

    return (
        <div className="marquee-bar angul-marquee">
            <div className="marquee-odia-pill" aria-label="Education, Technology, Employment">
                <i className="fa-solid fa-dharmachakra" aria-hidden="true" />
                <span>ଶିକ୍ଷା · ପ୍ରଯୁକ୍ତି · ନିଯୁକ୍ତି</span>
            </div>
            <div className="marquee-scroll-area">
                <div className="marquee-track-wrap">
                    {track.map((item, i) => (
                        <span key={i} className={`marquee-item${item.type === 'odia' ? ' marquee-odia' : ''}`}>
                            {item.type === 'odia' && <span className="marquee-dot" aria-hidden="true">✦</span>}
                            {item.text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
