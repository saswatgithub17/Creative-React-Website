import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', to: '/' },
    {
        label: 'About',
        children: [
            { label: 'About Trust', to: '/about/trust' },
            { label: 'About CTC', to: '/about/ctc' },
            { label: 'Our Team', to: '/about/team' },
        ],
    },
    { label: 'Admission', to: '/admission' },
    {
        label: 'Academics',
        children: [
            {
                label: 'Courses',
                children: [
                    { label: 'Regular Courses', to: '/academics/regular' },
                    { label: 'Value Added Courses', to: '/academics/value-added' },
                ],
            },
            { label: 'Enhancement Programs', to: '/academics/enhancement' },
        ],
    },
    {
        label: 'Placement',
        children: [
            { label: 'Development Program', to: '/placement/programs' },
            { label: 'Placement Statistics', to: '/placement/statistics' },
            { label: 'Placement Brochure', to: '/placement/brochure' },
        ],
    },
    { label: 'Gymkhana', to: '/gymkhana' },
    { label: 'Gallery', to: '/gallery' },
    {
        label: 'IQAC',
        children: [
            { label: 'IQAC Item 1', to: '/iqac/item1' },
            { label: 'IQAC Item 2', to: '/iqac/item2' },
            { label: 'IQAC Item 3', to: '/iqac/item3' },
            { label: 'IQAC Item 4', to: '/iqac/item4' },
        ],
    },
    {
        label: 'AICTE',
        children: [
            { label: 'LOA 2024-25', to: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOA Report 2024-2025.PDF', external: true, newTab: true },
            { label: 'EOA 2025-26', to: '/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 2025-26.PDF', external: true, newTab: true },
            { label: 'Documents', to: '/aicte/documents' },
            { label: 'Mandatory Disclosure', to: '/aicte/mandatory-disclosure' },
        ],
    },
    { label: 'CKF Skills', to: '/ckf-skills' },
    { label: 'Contacts', to: '/contacts' },
    { label: 'ICC', to: '/icc' },
    { label: 'GRC', to: '/grc' },
    {
        label: 'Logins',
        children: [
            { label: 'Portal Login', to: '/login' },
            { label: 'NBA', to: '/nba' },
            { label: 'NAAC', to: '/naac' },
        ],
    },
];

// Inline styles — 100% React-driven, zero CSS-file dependency for show/hide
const DROPDOWN_BG = '#0a1628';
const DROPDOWN_HOVER = '#2563eb';
const DROPDOWN_TEXT = '#e8f0fe';

const S = {
    dropdown: {
        position: 'absolute', top: '100%', left: 0, minWidth: 210,
        background: DROPDOWN_BG, borderRadius: 10,
        boxShadow: '0 8px 32px rgba(10,22,40,0.35)',
        listStyle: 'none', padding: '6px 0', margin: 0, zIndex: 9999,
        border: '1px solid rgba(255,255,255,0.1)',
    },
    subDropdown: {
        position: 'absolute', top: 0, left: '100%', minWidth: 210,
        background: DROPDOWN_BG, borderRadius: 10,
        boxShadow: '0 8px 32px rgba(10,22,40,0.35)',
        listStyle: 'none', padding: '6px 0', margin: 0, zIndex: 9999,
        border: '1px solid rgba(255,255,255,0.1)',
    },
    mobileNested: {
        position: 'static', boxShadow: 'none', borderRadius: 0,
        paddingLeft: 18, background: 'rgba(0,0,0,0.2)',
        listStyle: 'none', margin: 0,
        border: 'none',
    },
    li: { position: 'relative' },
    link: {
        display: 'block', padding: '9px 20px', color: DROPDOWN_TEXT,
        textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600,
        whiteSpace: 'nowrap',
    },
    trigger: {
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '9px 20px', color: DROPDOWN_TEXT,
        fontSize: '0.88rem', fontWeight: 600,
        whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none',
    },
};

// ── Recursive item (handles both leaf and nested sub-menus) ──────────────────
function DropdownItem({ item, isMobile, onClose }) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(v => !v);
    const hoverOn = () => setOpen(true);
    const hoverOff = () => setOpen(false);

    if (!item.children) {
        const linkEl = item.external
            ? <a href={item.to} target={item.newTab ? '_blank' : '_self'} rel="noreferrer"
                style={S.link} onClick={onClose}>{item.label}</a>
            : <Link to={item.to} style={S.link} onClick={onClose}>{item.label}</Link>;
        return (
            <li style={S.li}
                onMouseEnter={e => e.currentTarget.querySelector('a,span')?.style && (e.currentTarget.style.background = '#2563eb')}
                onMouseLeave={e => (e.currentTarget.style.background = '')}
            >{linkEl}</li>
        );
    }

    const nestedListStyle = isMobile ? S.mobileNested : S.subDropdown;

    return (
        <li style={S.li}
            onMouseEnter={!isMobile ? hoverOn : undefined}
            onMouseLeave={!isMobile ? hoverOff : undefined}
        >
            <div style={{ ...S.trigger, background: open ? '#2563eb' : '' }}
                onClick={isMobile ? toggle : undefined}
            >
                {item.label}
                <i className="fa-solid fa-chevron-right"
                    style={{
                        fontSize: '0.5rem', marginLeft: 'auto',
                        transform: open ? 'rotate(90deg)' : 'none',
                        transition: 'transform 0.22s'
                    }} />
            </div>
            {open && (
                <ul style={nestedListStyle}>
                    {item.children.map((child, i) => (
                        <DropdownItem key={i} item={child} isMobile={isMobile} onClose={onClose} />
                    ))}
                </ul>
            )}
        </li>
    );
}

// ── Top-level nav item with its first-level dropdown ─────────────────────────
function TopLevelItem({ item, isMobile, onClose, isActive }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => { setOpen(false); }, [location]);

    const hoverOn = () => { if (!isMobile) setOpen(true); };
    const hoverOff = () => { if (!isMobile) setOpen(false); };
    const toggle = () => { if (isMobile) setOpen(v => !v); };

    return (
        <li className="nav-item" style={{ position: 'relative' }}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        >
            <span className={`nav-trigger${isActive ? ' active' : ''}`} onClick={toggle}>
                {item.label}
                <i className="fa-solid fa-chevron-down nav-arrow"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.22s' }} />
            </span>

            {open && (
                <ul style={isMobile
                    ? { ...S.dropdown, position: 'static', boxShadow: 'none', background: 'rgba(0,0,0,0.2)', border: 'none' }
                    : S.dropdown}
                >
                    {item.children.map((child, i) => (
                        <DropdownItem key={i} item={child} isMobile={isMobile}
                            onClose={() => { setOpen(false); onClose(); }} />
                    ))}
                </ul>
            )}
        </li>
    );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => { setMenuOpen(false); }, [location]);

    useEffect(() => {
        const fn = (e) => { if (!e.target.closest('.navbar')) setMenuOpen(false); };
        document.addEventListener('mousedown', fn);
        return () => document.removeEventListener('mousedown', fn);
    }, []);

    return (
        <nav className="navbar">
            <ul className={`nav-list${menuOpen ? ' open' : ''}`}>
                {navItems.map((item, i) => {
                    if (!item.children) {
                        return (
                            <li key={i} className="nav-item">
                                <Link to={item.to}
                                    className={`nav-link${location.pathname === item.to ? ' active' : ''}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    }
                    return (
                        <TopLevelItem key={i} item={item}
                            isMobile={menuOpen}
                            onClose={() => setMenuOpen(false)}
                            isActive={location.pathname.startsWith('/' + item.label.toLowerCase())}
                        />
                    );
                })}
            </ul>
            <button className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(p => !p)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>
        </nav>
    );
}