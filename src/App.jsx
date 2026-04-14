import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutTrust from './pages/about/AboutTrust';
import AboutUs from './pages/about/AboutUs';
import OurTeam from './pages/about/OurTeam';
import Admission from './pages/Admission';
import AdmissionApply from './pages/AdmissionApply';

import RegularCourses from './pages/academics/RegularCourses';
import ValueAddedCourses from './pages/academics/ValueAddedCourses';
import EnhancementPrograms from './pages/academics/EnhancementPrograms';

import DevelopmentPrograms from './pages/placement/DevelopmentPrograms';
import PlacementBrochure from './pages/placement/PlacementBrochure';
import PlacementStatistics from './pages/placement/PlacementStatistics';
import Mission40 from './pages/placement/Mission40';
import Gymkhana from './pages/Gymkhana';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import ICC from './pages/ICC';
import GRC from './pages/GRC';

// New Gymkhana pages
import Technocrat from './pages/gymkhana/Technocrat';
import Sports from './pages/gymkhana/Sports';
import Cultural from './pages/gymkhana/Cultural';
import DishaCSR from './pages/gymkhana/DishaCSR';
import { TechFest1, TechFest2, TechFest3 } from './pages/gymkhana/Techfest';


import NAAC from './pages/login/NAAC';
import NBA from './pages/login/NBA';
import VikshitBharat from './pages/VikshitBharat';
import PortalLogin from './pages/login/PortalLogin';

// Simple stub pages
const Stub = ({ title }) => (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ color: '#0c2340', fontSize: '2.5rem' }}>{title}</h1>
        <p style={{ color: '#666', marginTop: '20px', fontSize: '1.1rem' }}>This page is coming soon.</p>
    </div>
);

export default function App() {
    return (
        <BrowserRouter basename="/CTC%20NEW%20REACT%20WEBSITE">
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* About */}
                    <Route path="/about/trust" element={<AboutTrust />} />
                    <Route path="/about/ctc" element={<AboutUs />} />
                    <Route path="/about/team" element={<OurTeam />} />

                    {/* Admission */}
                    <Route path="/admission" element={<Admission />} />
                    <Route path="/admission/apply" element={<AdmissionApply />} />

                    {/* Academics */}
                    <Route path="/academics/regular" element={<RegularCourses />} />
                    <Route path="/academics/value-added" element={<ValueAddedCourses />} />
                    <Route path="/academics/enhancement" element={<EnhancementPrograms />} />

                    {/* Placement */}
                    <Route path="/placement" element={<PlacementStatistics />} />
                    <Route path="/placement/programs" element={<DevelopmentPrograms />} />
                    <Route path="/placement/statistics" element={<PlacementStatistics />} />
                    <Route path="/placement/brochure" element={<PlacementBrochure />} />
                    <Route path="/placement/mission40" element={<Mission40 />} />

                    {/* Gymkhana */}
                    <Route path="/gymkhana" element={<Gymkhana />} />
                    <Route path="/gymkhana/cultural" element={<Cultural />} />
                    <Route path="/gymkhana/sports" element={<Sports />} />
                    <Route path="/gymkhana/technocrat" element={<Technocrat />} />
                    <Route path="/gymkhana/disha-csr" element={<DishaCSR />} />
                    <Route path="/gymkhana/techfest/1" element={<TechFest1 />} />
                    <Route path="/gymkhana/techfest/2" element={<TechFest2 />} />
                    <Route path="/gymkhana/techfest/3" element={<TechFest3 />} />
                    {/* Legacy routes */}
                    <Route path="/gymkhana/techfest-1" element={<TechFest1 />} />
                    <Route path="/gymkhana/techfest-2" element={<TechFest2 />} />
                    <Route path="/gymkhana/techfest-3" element={<TechFest3 />} />

                    {/* Gallery */}
                    <Route path="/gallery" element={<Gallery />} />

                    {/* IQAC */}
                    <Route path="/iqac" element={<Stub title="IQAC" />} />
                    <Route path="/iqac/item1" element={<Stub title="IQAC — Item 1" />} />
                    <Route path="/iqac/item2" element={<Stub title="IQAC — Item 2" />} />
                    <Route path="/iqac/item3" element={<Stub title="IQAC — Item 3" />} />
                    <Route path="/iqac/item4" element={<Stub title="IQAC — Item 4" />} />

                    {/* AICTE */}
                    <Route path="/aicte" element={<Stub title="AICTE" />} />
                    <Route path="/aicte/documents" element={<Stub title="AICTE — Documents" />} />
                    <Route path="/aicte/mandatory-disclosure" element={<Stub title="AICTE — Mandatory Disclosure" />} />

                    {/* CKF Skills */}
                    <Route path="/ckf-skills" element={<Stub title="CKF Skills" />} />

                    {/* Contacts */}
                    <Route path="/contacts" element={<Contacts />} />

                    {/* ICC */}
                    <Route path="/icc" element={<ICC />} />

                    {/* GRC */}
                    <Route path="/grc" element={<GRC />} />

                    {/* NBA / NAAC / Vikshit Bharat */}
                    <Route path="/naac" element={<NAAC />} />
                    <Route path="/nba" element={<NBA />} />
                    <Route path="/vikshit-bharat" element={<VikshitBharat />} />

                    {/* Login */}
                    <Route path="/login" element={<PortalLogin />} />
                    <Route path="/login/student" element={<PortalLogin />} />
                    <Route path="/login/staff" element={<PortalLogin />} />
                    <Route path="/login/admin" element={<PortalLogin />} />
                    <Route path="/login/principal" element={<PortalLogin />} />
                    <Route path="/login/admission" element={<PortalLogin />} />

                    {/* 404 */}
                    <Route path="*" element={<Stub title="Page Not Found" />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
