/** Decorative Saora-inspired tribal geometric pattern for Angul heritage theme */
export function AngulPatternBg({ className = '', opacity = 0.12 }) {
    return (
        <svg
            className={`angul-pattern-svg ${className}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <defs>
                <pattern id="angul-diamond" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M24 4 L44 24 L24 44 L4 24 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.5" />
                    <path d="M24 12 L36 24 L24 36 L12 24 Z" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
                </pattern>
                <pattern id="angul-weave" width="32" height="32" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                    <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.35" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#angul-diamond)" />
            <rect width="100%" height="100%" fill="url(#angul-weave)" opacity="0.5" />
        </svg>
    );
}

export function AngulBorderStrip() {
    return (
        <div className="angul-border-strip" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span /><span />
        </div>
    );
}
