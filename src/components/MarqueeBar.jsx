export default function MarqueeBar() {
    const text = `ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ | Creative Techno College, Angul — AICTE Approved & Affiliated to Utkal University | Admissions Open for 2026-27 | BBA | BCA | B.Sc (CS) | B.Sc (Data Science) | 100% Placement Assistance | Contact: +91 9778427170`;

    return (
        <div className="marquee-bar">
            <div className="marquee-track-wrap">
                <span className="marquee-item">{text}</span>
                <span className="marquee-item marquee-odia">ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |&nbsp;&nbsp;</span>
                <span className="marquee-item">{text}</span>
                <span className="marquee-item marquee-odia">ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |&nbsp;&nbsp;</span>
            </div>
        </div>
    );
}
