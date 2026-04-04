import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Creative Techno College, Angul';
const BASE_URL = 'https://www.creativecollege.in';
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.jpg`;

/**
 * Reusable SEO component - adds per-page <title>, <meta>, and social tags.
 *
 * Props:
 *   title        – page title
 *   noSuffix     – if true, use title exactly as-is (no '| Site Name' appended)
 *   description  – meta description (max ~160 chars recommended)
 *   keywords     – comma-separated keyword string
 *   canonical    – canonical path, e.g. "/about/ctc"
 *   ogImage      – absolute URL to OG image (falls back to DEFAULT_IMAGE)
 *   ogType       – "website" (default) or "article"
 */
export default function SEO({
    title,
    noSuffix = false,
    description,
    keywords = '',
    canonical = '/',
    ogImage = DEFAULT_IMAGE,
    ogType = 'website',
}) {
    const fullTitle = title
        ? (noSuffix ? title : `${title} | ${SITE_NAME}`)
        : SITE_NAME;

    const canonicalUrl = `${BASE_URL}${canonical}`;

    return (
        <Helmet>
            {/* ── Primary Meta ── */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* ── Robots ── */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* ── Geo / Local ── */}
            <meta name="geo.region" content="IN-OR" />
            <meta name="geo.placename" content="Angul, Odisha, India" />
            <meta name="geo.position" content="20.788118;85.086393" />
            <meta name="ICBM" content="20.788118, 85.086393" />

            {/* ── Open Graph ── */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            {/* ── Twitter Card ── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}
