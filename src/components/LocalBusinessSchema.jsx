import { Helmet } from 'react-helmet-async';

/**
 * JSON-LD Structured Data for Creative Techno College.
 * This tells Google exactly who we are → enables Knowledge Panel & rich results.
 * Include this component on the Home page.
 */
export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["EducationalOrganization", "CollegeOrUniversity", "LocalBusiness"],
                "@id": "https://www.creativecollege.in/#organization",
                "name": "Creative Techno College",
                "alternateName": ["CTC Angul", "Creative College Angul", "CTC"],
                "description": "Creative Techno College (CTC), Angul is an AICTE-approved, top professional and technical college in Angul, Odisha, affiliated to Utkal University. Established in 2010, CTC offers BBA, BCA, B.Sc Computer Science, and B.Sc Data Science programs with 100% placement assistance.",
                "url": "https://www.creativecollege.in",
                "logo": "https://www.creativecollege.in/images/HOMEPAGE/LOGO FINAL.png",
                "image": "https://www.creativecollege.in/images/HOMEPAGE/creative-campus.jpg",
                "telephone": ["+91-9778427170", "+91-9668844571", "+91-9668284222"],
                "email": "principal.creativecollege@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Baluakata, Saradhapur",
                    "addressLocality": "Angul",
                    "addressRegion": "Odisha",
                    "postalCode": "759143",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "20.788118",
                    "longitude": "85.086393"
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:00",
                        "closes": "17:00"
                    }
                ],
                "hasMap": "https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z",
                "foundingDate": "2010",
                "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "value": "50"
                },
                "areaServed": ["Angul", "Odisha", "India"],
                "keywords": "top college angul, best college angul, technical college angul, professional college angul, BCA college angul, BBA college angul, AICTE college angul, Utkal University college angul",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.5",
                    "reviewCount": "120",
                    "bestRating": "5"
                },
                "sameAs": [
                    "https://www.facebook.com/creativetechnocollege",
                    "https://www.instagram.com/creativetechnocollege"
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which is the best college in Angul?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Creative Techno College (CTC), Angul is widely regarded as one of the best and top colleges in Angul, Odisha. AICTE-approved and affiliated to Utkal University, CTC has been providing quality technical and professional education since 2010 with 95% placement rate."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Creative Techno College approved by AICTE?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Creative Techno College (CTC) Angul is approved by AICTE (All India Council for Technical Education) and permanently affiliated to Utkal University, recognized by the Government of Odisha, Dept. of Higher Education."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What courses are offered at Creative Techno College, Angul?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CTC Angul offers 4-year degree programs: BBA (Bachelor of Business Administration) with 120 seats, BCA (Bachelor of Computer Applications) with 120 seats, B.Sc Computer Science (Honours) with 128 seats, and B.Sc Data Science with 30 seats."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the placement record of CTC Angul?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Creative Techno College Angul has a 95% placement rate with over 1500+ students placed in top companies like Wipro, TCS, Infosys, HCL, Capgemini, IBM, Cognizant, Accenture, and more. The highest package offered is ₹4.5 LPA."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to apply for admission in Creative Techno College Angul?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Admission to CTC Angul requires 10+2 pass with minimum 45% marks. You can apply online through our website at creativecollege.in or visit our campus at Baluakata, Saradhapur, Angul. Call us at +91-9778427170 for more details."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Creative Techno College a top technical college in Angul?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Creative Techno College is the top technical and professional college in Angul, Odisha. It offers computer science and IT programs like BCA, B.Sc CS, and B.Sc Data Science, making it the best choice for technical education in Angul district."
                        }
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://www.creativecollege.in/#website",
                "url": "https://www.creativecollege.in",
                "name": "Creative Techno College, Angul",
                "description": "Official website of Creative Techno College – Top AICTE-approved college in Angul, Odisha",
                "publisher": {
                    "@id": "https://www.creativecollege.in/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.creativecollege.in/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema, null, 2)}
            </script>
        </Helmet>
    );
}
