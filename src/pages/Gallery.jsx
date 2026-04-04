import { useState, useEffect, useCallback } from 'react';
import SEO from '../components/SEO';

/* ─── Data ─── */
const CATEGORIES = [
    { key: 'all', label: 'All Photos', icon: 'fa-solid fa-images' },
    { key: 'campus', label: 'Campus', icon: 'fa-solid fa-building-columns' },
    { key: 'events', label: 'Events', icon: 'fa-solid fa-calendar-star' },
    { key: 'alumni', label: 'Alumni', icon: 'fa-solid fa-graduation-cap' },
    { key: 'workshop', label: 'Workshop', icon: 'fa-solid fa-wrench' },
    { key: 'activities', label: 'Activities', icon: 'fa-solid fa-person-running' },
    { key: 'tour', label: 'Tour', icon: 'fa-solid fa-plane-departure' },
];

const RAW = [
    ...['campus1', 'campus2', 'campus3', 'campus4', 'campus5', 'campus6'].map(
        (f, i) => ({ src: `/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${f}.jpg`, cat: 'campus', alt: `Campus ${i + 1}`, caption: 'CTC Campus' })),
    ...['event1', 'event2', 'event3', 'event4', 'event5', 'event6'].map(
        (f, i) => ({ src: `/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${f}.jpg`, cat: 'events', alt: `Event ${i + 1}`, caption: 'College Events' })),
    ...['alumni1', 'alumni2', 'alumni3', 'alumni4', 'alumni5', 'alumni6'].map(
        (f, i) => ({ src: `/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${f}.jpg`, cat: 'alumni', alt: `Alumni ${i + 1}`, caption: 'Alumni Meet' })),
    ...['workshop1', 'workshop2', 'workshop3', 'workshop4', 'workshop5', 'workshop6'].map(
        (f, i) => ({ src: `/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${f}.jpg`, cat: 'workshop', alt: `Workshop ${i + 1}`, caption: 'Skill Workshops' })),
    ...['Activity1', 'Activity2', 'Activity3', 'Activity4', 'Activity5', 'Activity6'].map(
        (f, i) => ({ src: `/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${f}.jpg`, cat: 'activities', alt: `Activity ${i + 1}`, caption: 'Student Activities' })),
    ...['tour1', 'tour2', 'tour3', 'tour4', 'tour5', 'tour6'].map(
        (f, i) => ({ src: `/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${f}.jpg`, cat: 'tour', alt: `Tour ${i + 1}`, caption: 'Educational Tours' })),
];

/* give each image a rough "size" slot for masonry-like variety */
const SIZES = ['tall', 'wide', 'normal', 'normal', 'tall', 'normal',
    'wide', 'normal', 'normal', 'tall', 'normal', 'wide'];

const IMAGES = RAW.map((img, i) => ({ ...img, size: SIZES[i % SIZES.length] }));

export default function Gallery() {
    const [filter, setFilter] = useState('all');
    const [lbIdx, setLbIdx] = useState(null);   // null = closed
    const [loaded, setLoaded] = useState({});

    const filtered = filter === 'all' ? IMAGES : IMAGES.filter(m => m.cat === filter);

    /* keyboard navigation */
    const handleKey = useCallback((e) => {
        if (lbIdx === null) return;
        if (e.key === 'ArrowRight') setLbIdx(i => (i + 1) % filtered.length);
        if (e.key === 'ArrowLeft') setLbIdx(i => (i - 1 + filtered.length) % filtered.length);
        if (e.key === 'Escape') setLbIdx(null);
    }, [lbIdx, filtered.length]);

    useEffect(() => {
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [handleKey]);

    /* lock body scroll when lightbox is open */
    useEffect(() => {
        document.body.style.overflow = lbIdx !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lbIdx]);

    const lbImg = lbIdx !== null ? filtered[lbIdx] : null;

    return (
        <>
            <SEO
                title="Campus Gallery – CTC Angul | Campus Life, Events & Achievements"
                description="Explore the vibrant campus life at Creative Techno College, Angul through our photo gallery. Events, sports, cultural programs, workshops, alumni meets and more."
                keywords="CTC angul gallery, creative techno college campus, college life angul, CTC events photos"
                canonical="/gallery"
            />
            {/* ══ HERO ══ */}
            <div className="gl-hero">
                <div className="gl-hero-glow" />
                <div className="gl-hero-inner">
                    <span className="section-label" style={{ color: 'var(--cyan)' }}>Visual Showcase</span>
                    <h1>
                        Our <span style={{ color: 'var(--gold)' }}>Gallery</span>
                    </h1>
                    <p>Moments that define the Creative Techno College experience — campus life, events, achievements &amp; beyond.</p>
                    {/* stat pills */}
                    <div className="gl-hero-pills">
                        <span className="gl-pill"><i className="fa-solid fa-images"></i> {IMAGES.length} Photos</span>
                        <span className="gl-pill"><i className="fa-solid fa-folder-open"></i> {CATEGORIES.length - 1} Categories</span>
                        <span className="gl-pill"><i className="fa-solid fa-calendar-days"></i> 2018 – 2024</span>
                    </div>
                </div>
                {/* wave bottom */}
                <div className="gl-hero-wave">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--page-bg)" />
                    </svg>
                </div>
            </div>

            {/* ══ FILTER PILLS ══ */}
            <div className="gl-filters-wrap">
                <div className="gl-filters">
                    {CATEGORIES.map(c => (
                        <button
                            key={c.key}
                            className={`gl-filter-btn${filter === c.key ? ' active' : ''}`}
                            onClick={() => { setFilter(c.key); setLbIdx(null); }}
                        >
                            <i className={c.icon}></i>
                            {c.label}
                            {filter === c.key && (
                                <span className="gl-filter-count">
                                    {c.key === 'all' ? IMAGES.length : IMAGES.filter(m => m.cat === c.key).length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                <p className="gl-count-label">
                    Showing <strong>{filtered.length}</strong> of <strong>{IMAGES.length}</strong> photos
                </p>
            </div>

            {/* ══ MASONRY GRID ══ */}
            <div className="gl-grid-wrap">
                <div className="gl-grid" key={filter /* re-mount on filter change */}>
                    {filtered.map((img, i) => (
                        <div
                            key={`${img.cat}-${i}`}
                            className={`gl-item gl-item-${img.size}`}
                            onClick={() => setLbIdx(i)}
                            style={{ animationDelay: `${(i % 12) * 0.04}s` }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                onLoad={() => setLoaded(p => ({ ...p, [img.src]: true }))}
                                onError={e => { e.target.closest('.gl-item').style.display = 'none'; }}
                            />
                            <div className="gl-item-overlay">
                                <div className="gl-item-overlay-inner">
                                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                                    <span>{img.caption}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══ LIGHTBOX ══ */}
            {lbImg && (
                <div
                    className="gl-lightbox"
                    onClick={e => { if (e.target === e.currentTarget) setLbIdx(null); }}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Close */}
                    <button className="gl-lb-close" onClick={() => setLbIdx(null)} aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {/* Prev */}
                    <button
                        className="gl-lb-nav gl-lb-prev"
                        onClick={() => setLbIdx(i => (i - 1 + filtered.length) % filtered.length)}
                        aria-label="Previous"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {/* Image panel */}
                    <div className="gl-lb-panel">
                        <img
                            key={lbImg.src}
                            className="gl-lb-img"
                            src={lbImg.src}
                            alt={lbImg.alt}
                        />
                        <div className="gl-lb-caption">
                            <span className="gl-lb-cat">{CATEGORIES.find(c => c.key === lbImg.cat)?.label}</span>
                            <span className="gl-lb-count">{lbIdx + 1} / {filtered.length}</span>
                        </div>
                        {/* Thumbnail strip */}
                        <div className="gl-lb-thumbs">
                            {filtered.map((img, i) => (
                                <div
                                    key={i}
                                    className={`gl-lb-thumb${lbIdx === i ? ' active' : ''}`}
                                    onClick={() => setLbIdx(i)}
                                >
                                    <img src={img.src} alt="" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        className="gl-lb-nav gl-lb-next"
                        onClick={() => setLbIdx(i => (i + 1) % filtered.length)}
                        aria-label="Next"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </>
    );
}
