import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA OBJECTS (Extracted from your HTML) ─── */
const FEST_DATA = {
  1: {
    version: '1.0', year: '2023', theme: 'Innovation & Technology',
    color: '#3b82f6', colorDark: '#0c2340',
    img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg',
    about: [
      'TechFest 1.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.',
      'Participants engaged in workshops, competitions, and seminars covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 1.0 encourages collaboration, networking, and knowledge sharing among young innovators.',
      'The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 1.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth.'
    ],
    projects: [
      { name: 'Human-Motion Detection', members: 'Subham, Gyanaranjan, Chandanswain, Anata, Susree, Swarnalaxmi', year: '2023' },
      { name: 'Eye Motion Detection', members: 'Subasis, Abhijit, Satyadev, Subham, SK Akil', year: '2023' },
      { name: 'Age Detection', members: 'Tushar, Subodh', year: '2023' },
      { name: 'Smart Home', members: 'Shankar, Priyadarshan, Ashis, Sourav, Asutosh, Chandra, Suryakanta', year: '2023' },
      { name: 'Gesture Control', members: 'Sourav, Shankar, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong', year: '2023' },
      { name: 'Student Attendance System', members: 'Sneha, Priti Prangya, Sandhyarani, Smrutisikha', year: '2023' },
      { name: 'Blind Person Assistant', members: 'Priyadarshan, Satyabrata Ojha, Satyabrata Sahu, Sangita, Ananya, Anish, Subham', year: '2023' },
      { name: 'LMS in Django', members: 'Ashutosh, Chandra, Suryakanta, SK Akhil, Subham, Satyadev, Chandan, Anata, Susree, Swarnalaxmi, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong, Sneha, Priti Prangya, Sandhyarani, Smrutisikha, Sangita, Ananya, Anish, Subham', year: '2023' },
    ],
    gallery: [26, 27, 28, 29, 30, 31, 33, 34, 36, 35].map(n => `/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${n}.jpg`),
    galleryRest: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66].map(n => `/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${n}.jpg`),
  },
  2: {
    version: '2.0', year: '2024', theme: 'Smart Systems & Automation',
    color: '#10b981', colorDark: '#0c2340',
    img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg',
    about: [
      'TechFest 2.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.',
      'Participants will engage in workshops, competitions, and seminars, covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 2.0 encourages collaboration, networking, and knowledge sharing among young innovators.',
      'The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 2.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth.'
    ],
    projects: [
      { name: 'Automated Car', members: 'Rakesh, Asutosh, Suryakant, Chandra', year: '2024' },
      { name: 'Smart Parking System', members: 'Priyadarshan, Rudraprasad, Sritam, Saswat', year: '2024' },
      { name: 'Fire Detection & Prevention', members: 'Sk, Nikhil', year: '2024' },
      { name: 'Face To Aadhar', members: 'Soumya, Aliva, Chinmayee', year: '2024' },
      { name: 'Railway Track Accident Prevention', members: 'Chandra, Ratnaprava, Monalisha', year: '2024' },
      { name: 'IV Bag Monitoring System', members: 'Anish, Debashis, Asutosh', year: '2024' },
      { name: 'Plant Disease Detection By Leaf', members: 'Rudra, Chandra', year: '2024' },
      { name: 'Smart Traffic Control', members: 'Asutosh, Yashita, Rudraprasad, Abhisek', year: '2024' },
      { name: 'Smart Label Crossing System', members: 'Anish, Swastika, Nikhil', year: '2024' },
      { name: 'Automated Plant Watering System', members: 'Chandan, Monalisha, Priyanka', year: '2024' },
      { name: 'Women Safety', members: 'Ananta, Elin, Bidusmita', year: '2024' },
      { name: 'Product Failure Management System', members: 'Priti', year: '2024' },
      { name: 'Wildlife Detection', members: 'Debasish, Archita, Sudipta', year: '2024' },
      { name: 'Smart Reminder For Municipality', members: 'Sangita, Jasmin, Saswat, Sritam', year: '2024' },
      { name: 'Smart Home Security', members: 'Smrutisikha, Arpita, Pramod', year: '2024' },
      { name: 'Gas Level Monitoring System', members: 'Sandhya, Sangita', year: '2024' },
      { name: 'AI Mock Interview', members: 'Sandhya, Sangita', year: '2024' },
      { name: 'Drone For Delivery', members: 'Abhijit, Asutosh, Suryakant', year: '2024' },
      { name: 'Smart Restaurant Management System', members: 'Anish, Sandhya, Sangita', year: '2024' },
    ],
    gallery: [12, 16, 18, 21, 22, 25, 26, 29, 30, 33].map(n => `/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${n}.jpg`),
    galleryRest: [34, 37, 38, 40, 42, 45, 46, 49, 53, 54, 57, 58, 61, 62].map(n => `/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${n}.jpg`)
      .concat([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42].map(n => `/images/TECHNOCRAT/techfest 2.0/img${n}.jpg`)),
  },
  3: {
    version: '3.0', year: '2025', theme: 'Viksit Bharat — Multi-Institution',
    color: '#f59e0b', colorDark: '#0c2340',
    img: '/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg',
    about: [
      'TechFest 3.0 is a vibrant celebration of innovation, creativity, and the spirit of Viksit Bharat. This edition brings a transformative platform where technology meets vision, empowering young minds to build solutions that contribute to a developed and progressive India.',
      'Building on the success of TechFest 1.0 and 2.0—where only college students showcased their projects—TechFest 3.0 marks a historic moment as schools from outside the campus also participate, bringing their innovative projects and ideas to this grand stage.',
      'This edition also features keynote sessions by industry experts, mentorship opportunities, and a dedicated arena for startup and research idea presentations. TechFest 3.0 is designed to inspire, challenge, and recognize emerging talent while fostering a culture of innovation that aligns with the vision of Viksit Bharat.'
    ],
    projects: [
      { name: 'Emergency Fuel Delivery', members: 'Aliva, Priyanka, Soumyaranjan, Sudhanshu', year: '2025' },
      { name: 'Hostel Management System', members: 'Aliva, Priyanka, Sudipta, Chinmayee, Ankita, Tulasi', year: '2025' },
      { name: 'C & W Education Sponsorship Portal', members: 'Yashita, Swastika, Pradyumna, Satyabrata', year: '2025' },
      { name: 'Eco Re-Use', members: 'Yashita, Swastika, Dattatreya, Om Prakash', year: '2025' },
      { name: 'Line Up', members: 'Abhisek, Rudraprasad, Ladly, Biswajit', year: '2025' },
      { name: 'Skill Hub', members: 'Krishna, Abhipsa, Trishna, Supriyanjali, Sasmita, Monalisha, Abhisek, Swastika, Priyadarshan, Arpita', year: '2025' },
      { name: 'Food Waste Management System', members: 'Saswat, Sudipta, Anshuman, Subhalaxmi', year: '2025' },
      { name: 'Bus Tracking & Booking System', members: 'Jasmin, Ratnaprava, Monalisha, Ananta, Priyanka, Priyani', year: '2025' },
      { name: 'E-Jeevan Dan', members: 'Bhagyalaxmi, Rimjhim, Selina, kajal, Bidusmita, Elin, Ipsita, Elina', year: '2025' },
      { name: 'Smart Helmet', members: 'Yash, Tanmay, Subham', year: '2025' },
    ],
    gallery: Array.from({ length: 10 }, (_, i) => `/images/TECHNOCRAT/techfest 3.0/${i + 1}.jpg`),
    galleryRest: Array.from({ length: 37 }, (_, i) => `/images/TECHNOCRAT/techfest 3.0/${i + 11}.jpg`),
  },
};

const MASONRY_SIZES = ['normal', 'tall', 'wide', 'normal', 'normal', 'wide', 'tall', 'normal', 'normal', 'normal'];

function TechFestPage({ version }) {
  const [lbIdx, setLbIdx] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const d = FEST_DATA[version];

  const allPhotos = [...d.gallery, ...d.galleryRest].map((src, i) => ({
    src,
    size: MASONRY_SIZES[i % MASONRY_SIZES.length],
    alt: `TechFest ${version}.0 - Photo ${i + 1}`
  }));

  const visiblePhotos = showFull ? allPhotos : allPhotos.slice(0, 10);

  const handleKey = useCallback((e) => {
    if (lbIdx === null) return;
    if (e.key === 'ArrowRight') setLbIdx(i => (i + 1) % visiblePhotos.length);
    if (e.key === 'ArrowLeft') setLbIdx(i => (i - 1 + visiblePhotos.length) % visiblePhotos.length);
    if (e.key === 'Escape') setLbIdx(null);
  }, [lbIdx, visiblePhotos.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const lbImg = lbIdx !== null ? visiblePhotos[lbIdx] : null;

  return (
    <div className="tf-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Poppins:wght@400;600;700;900&display=swap');
        
        .tf-page { background:#f8faff; min-height:100vh; font-family:'Plus Jakarta Sans',sans-serif; }

        /* ── SENIOR HERO ── */
        .tf-hero {
          background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #06101e 100%);
          padding: 120px 5% 100px; position: relative; overflow: hidden;
        }
        .tf-hero-content {
          position: relative; z-index: 2; display: flex; align-items: center; 
          justify-content: space-between; gap: 60px; flex-wrap: wrap; 
          max-width: 1200px; margin: 0 auto;
        }
        .tf-hero-left { flex: 1; min-width: 350px; text-align: left; }
        .tf-hero-right { flex-shrink: 0; align-self: flex-end; }

        .tf-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255, 204, 0, 0.12); border: 1px solid rgba(255, 204, 0, 0.3);
          color: #ffcc00; padding: 8px 20px; border-radius: 40px;
          font-size: 0.75rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 25px;
        }
        .tf-hero h1 {
          font-family:'Poppins',sans-serif; font-size:clamp(3rem, 7vw, 4.8rem);
          font-weight:900; color:#fff; line-height:0.95; margin-bottom:18px; letter-spacing: -3px;
        }
        .tf-hero h1 em { font-style:normal; color:#ffcc00; text-shadow: 0 0 30px rgba(255,204,0,0.2); }

        .tf-theme-box {
          display: inline-block; padding: 10px 24px; border-radius: 14px;
          font-size: 0.95rem; font-weight: 800; color: #fff; margin-bottom: 25px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        .tf-hero-left p { color: rgba(255,255,255,0.6); font-size: 1.1rem; max-width: 550px; line-height: 1.8; }

        .tf-hero-stat-card {
          background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px); padding: 18px 30px; border-radius: 20px;
          display: flex; align-items: center; gap: 20px; width: 260px; margin-bottom: 15px;
        }

        .tf-wave-sep { position: relative; height: 80px; margin-top: -1px; }
        .tf-wave-sep svg { width: 100%; height: 100%; display: block; fill: #fff; }

        /* ── ABOUT SECTION (PROFESSIONAL SPLIT) ── */
        .tf-about { background:#fff; padding:120px 5%; }
        .tf-about-inner { max-width:1200px; margin:0 auto; display:flex; gap:100px; align-items:center; flex-wrap:wrap; }
        .tf-about-left { flex: 1.2; min-width: 350px; }
        .tf-about-right { flex: 0.8; min-width: 350px; }
        
        .tf-section-pill { display:inline-block; background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:6px 18px; font-size:0.75rem; font-weight:800; letter-spacing:1px; text-transform:uppercase; margin-bottom:20px; }
        .tf-about-left h2 { font-family:'Poppins',sans-serif; font-size:2.8rem; font-weight:900; color:#0c2340; margin-bottom:28px; line-height:1.1; }
        .tf-about-left p { color:#475569; line-height:1.9; font-size:1.05rem; margin-bottom:22px; text-align: justify; }
        
        .tf-about-img-container { 
          position: relative; border-radius: 35px; overflow: hidden; 
          box-shadow: 0 40px 80px rgba(12,35,64,0.15); border: 10px solid #f8fafc;
        }
        .tf-about-img-container img { width:100%; height:auto; display:block; transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .tf-about-img-container:hover img { transform: scale(1.08); }

        /* ── PROJECTS TABLE ── */
        .tf-projects { background:#f8faff; padding:120px 5%; }
        .tf-projects-header { text-align:center; margin-bottom:60px; }
        .tf-projects-header .tf-pill { background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; }
        .tf-projects-header h2 { font-family:'Poppins',sans-serif; font-size:2.8rem; font-weight:900; color:#0c2340; margin-bottom:20px; }
        .tf-projects-header p { color:#475569; font-size:1.05rem; }

        .tf-table-container { 
            max-width:1200px; margin:0 auto; border-radius:24px; overflow:hidden; 
            box-shadow:0 20px 50px rgba(10,22,40,0.1); border: 1px solid #e2e8f0;
        }
        .tf-table { width:100%; border-collapse:collapse; background: #fff; }
        .tf-table th { 
            background: #0c2340; padding:22px 25px; font-family:'Poppins',sans-serif; 
            font-size:0.9rem; font-weight:800; color:#ffcc00; text-align:left;
            text-transform: uppercase; letter-spacing: 1px;
        }
        .tf-table td { 
            padding:20px 25px; font-size:0.95rem; color:#334155; 
            border-bottom:1px solid #f1f5f9; vertical-align: middle;
        }
        .tf-table tr:hover td { background: #f8fafc; }
        .tf-proj-id { font-weight: 900; color: #cbd5e1; font-size: 1.1rem; width: 60px; }
        .tf-proj-title { font-weight: 800; color: #0c2340; font-size: 1.05rem; }
        .tf-member-list { font-size: 0.88rem; color: #64748b; line-height: 1.6; }

        .tf-footer-nav {
  background: #fff;
  padding: 60px 5%;
  border-top: 1px solid #eef2f6;
  position: relative;
}

.tf-footer-nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.tf-nav-group {
  display: flex;
  gap: 15px;
  align-items: center;
}

.tf-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
}

/* Secondary Button Styles */
.tf-nav-btn-secondary {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  color: #475569;
}

.tf-nav-btn-secondary:hover {
  background: #fff;
  border-color: #0c2340;
  color: #0c2340;
  transform: translateY(-2px);
}

/* Primary Button Styles */
.tf-nav-btn-primary {
  background: #0c2340;
  color: #ffcc00;
  border: 1.5px solid #0c2340;
  box-shadow: 0 10px 25px rgba(12, 35, 64, 0.15);
}

.tf-nav-btn-primary:hover {
  background: #1a3a6b;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(12, 35, 64, 0.25);
}

        /* ── MASONRY GALLERY ── */
        .tf-gallery-section { background:#020c1b; padding:120px 5%; }
        .tf-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 240px; grid-auto-flow: dense; gap: 20px; max-width: 1300px; margin: 50px auto 0;
        }
        .tf-item { position: relative; border-radius: 20px; overflow: hidden; background: #0c2340; cursor: pointer; border: 1px solid rgba(255,255,255,0.05); }
        .tf-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .tf-item:hover img { transform: scale(1.1); filter: brightness(1.1); }
        
        .tf-item-tall { grid-row: span 2; }
        .tf-item-wide { grid-column: span 2; }
        
        .tf-overlay { position: absolute; inset: 0; background: rgba(12, 35, 64, 0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; }
        .tf-item:hover .tf-overlay { opacity: 1; }
        .tf-overlay i { color: #ffcc00; font-size: 2.2rem; }

        .tf-see-all-btn {
          display: block; margin: 60px auto 0; background: transparent; 
          border: 2px solid #ffcc00; color: #ffcc00; 
          padding: 16px 50px; border-radius: 50px; font-weight: 800; 
          cursor: pointer; transition: 0.3s; font-family: 'Poppins';
          text-transform: uppercase; letter-spacing: 2px;
        }
        .tf-see-all-btn:hover { background: #ffcc00; color: #020c1b; box-shadow: 0 10px 30px rgba(255,204,0,0.3); }

        /* ── LIGHTBOX ── */
        .gl-lightbox { position: fixed; inset: 0; background: rgba(1, 7, 17, 0.99); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 40px; backdrop-filter: blur(10px); }
        .gl-lb-close { position: absolute; top: 40px; right: 40px; background: rgba(255,255,255,0.05); border: none; color: #fff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; font-size: 1.8rem; transition: 0.3s; z-index: 2300; }
        .gl-lb-close:hover { background: #ff4444; transform: rotate(90deg); }
        .gl-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.05); border: none; color: #fff; width: 70px; height: 70px; border-radius: 50%; cursor: pointer; transition: 0.3s; z-index: 2200; font-size: 1.5rem; }
        .gl-lb-nav:hover { background: #ffcc00; color: #000; }
        .gl-lb-prev { left: 40px; }
        .gl-lb-next { right: 40px; }
        .gl-lb-panel { max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
        .gl-lb-img { max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 16px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
        .gl-lb-thumbs { margin-top: 40px; display: flex; gap: 12px; overflow-x: auto; padding: 15px; max-width: 100%; scrollbar-width: none; }
        .gl-lb-thumb { width: 80px; height: 60px; flex-shrink: 0; border-radius: 10px; overflow: hidden; opacity: 0.3; cursor: pointer; border: 2px solid transparent; transition: 0.3s; }
        .gl-lb-thumb.active { opacity: 1; border-color: #ffcc00; transform: translateY(-8px) scale(1.1); }
        .gl-lb-thumb img { width: 100%; height: 100%; object-fit: contain; }

        @media(max-width:992px){
          .tf-hero-content { flex-direction: column; text-align: center; }
          .tf-hero-left { text-align: center; }
          .tf-about-inner { flex-direction: column; text-align: center; gap: 50px; }
          .tf-about-left { order: 1; }
          .tf-about-right { order: 2; width: 100%; }
          .tf-grid { grid-template-columns: repeat(2, 1fr); }
          .tf-item-wide { grid-column: span 1; }
          .gl-lb-nav { width: 50px; height: 50px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="tf-hero">
        <div className="tf-hero-content">
          <div className="tf-hero-left">
            <div className="tf-hero-badge"><i className="fa-solid fa-bolt" /> Official Technocrat Mega-Event</div>
            <h1>TECH<em style={{ color: d.color }}>FEST</em> {d.version}</h1>
            <div className="tf-theme-box">
              Theme: {d.theme}
            </div>
            <p>Where code meets creativity. A grand stage for the next generation of engineers to present disruptive solutions and technological breakthroughs.</p>
          </div>

          <div className="tf-hero-right">
            <div className="tf-hero-stats">
              {[
                { icon: 'fa-calendar-check', label: 'EVENT YEAR', val: d.year },
                { icon: 'fa-microchip', label: 'PROJECTS', val: d.projects.length },
                { icon: 'fa-camera-retro', label: 'GALLERY', val: allPhotos.length }
              ].map((stat, i) => (
                <div key={i} className="tf-hero-stat-card">
                  <i className={`fa-solid ${stat.icon}`} style={{ color: '#ffcc00', fontSize: '1.4rem' }} />
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: 1 }}>{stat.label}</div>
                    <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 900 }}>{stat.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="tf-wave-sep">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path d="M0,40 C320,80 720,0 1080,50 C1260,75 1380,30 1440,20 L1440,70 L0,70Z" />
        </svg>
      </div>

      {/* ── ABOUT SECTION (SPLIT) ── */}
      <section className="tf-about">
        <div className="tf-about-inner">
          <div className="tf-about-left">
            <span className="tf-section-pill">The History</span>
            <h2>About <span style={{ color: d.color }}>TechFest {d.version}</span></h2>
            {d.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="tf-about-right">
            <div className="tf-about-img-container">
              <img src={d.img} alt="TechFest Highlights" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS TABLE ── */}
      <section className="tf-projects">
        <div className="tf-projects-header">
          <span className="tf-pill">The Arena</span>
          <h2>Innovations <span>Showcased</span></h2>
          <p>Every single project submitted and presented during this edition.</p>
        </div>

        <div className="tf-table-container">
          <table className="tf-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>#</th>
                <th style={{ width: '30%' }}>Project Title</th>
                <th>Team Members</th>
                <th style={{ width: '100px' }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {d.projects.map((proj, i) => (
                <tr key={i}>
                  <td className="tf-proj-id">{String(i + 1).padStart(2, '0')}</td>
                  <td className="tf-proj-title">{proj.name}</td>
                  <td className="tf-member-list">{proj.members}</td>
                  <td style={{ fontWeight: 800, color: d.color }}>{proj.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── MASONRY GALLERY ── */}
      <section className="tf-gallery-section">
        <div className="tf-heading">
          <span className="tf-pill" style={{ background: 'rgba(255,204,0,0.1)', color: '#ffcc00', borderColor: 'rgba(255,204,0,0.2)' }}>Visual Log</span>
          <h2 style={{ color: '#fff' }}>Event <span>Highlights</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>Captured moments of brilliance and technical prowess.</p>
        </div>

        <div className="tf-grid">
          {visiblePhotos.map((img, i) => (
            <div
              key={i}
              className={`tf-item tf-item-${img.size}`}
              onClick={() => setLbIdx(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="tf-overlay"><i className="fa-solid fa-expand" /></div>
            </div>
          ))}
        </div>

        {!showFull && allPhotos.length > 10 && (
          <button className="tf-see-all-btn" onClick={() => setShowFull(true)}>
            Explore All {allPhotos.length} Photos
          </button>
        )}
      </section>

      {/* ── LIGHTBOX ── */}
      {lbImg && (
        <div className="gl-lightbox" onClick={e => e.target === e.currentTarget && setLbIdx(null)}>
          <button className="gl-lb-close" onClick={() => setLbIdx(null)}><i className="fa-solid fa-xmark" /></button>

          <button className="gl-lb-nav gl-lb-prev" onClick={() => setLbIdx(i => (i - 1 + visiblePhotos.length) % visiblePhotos.length)}>
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className="gl-lb-panel">
            <img className="gl-lb-img" src={lbImg.src} alt={lbImg.alt} />
            <div className="gl-lb-caption">
              <div style={{ color: '#ffcc00', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '1px' }}>TECHFEST {version}.0 ARCHIVE</div>
              <div style={{ color: '#fff', fontSize: '0.9rem', opacity: 0.6, marginTop: '5px' }}>Shot {lbIdx + 1} of {visiblePhotos.length}</div>
            </div>

            <div className="gl-lb-thumbs">
              {visiblePhotos.map((img, i) => (
                <div key={i} className={`gl-lb-thumb ${lbIdx === i ? 'active' : ''}`} onClick={() => setLbIdx(i)}>
                  <img src={img.src} alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          <button className="gl-lb-nav gl-lb-next" onClick={() => setLbIdx(i => (i + 1) % visiblePhotos.length)}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      )}

      {/* ── FOOTER NAV ── */}
      <footer className="tf-footer-nav">
        <div className="tf-footer-nav-inner">
          {/* Left Side: Back Link */}
          <Link to="/gymkhana/technocrat" className="tf-nav-link tf-nav-btn-secondary">
            <i className="fa-solid fa-arrow-left-long" /> Back to Technocrat
          </Link>

          {/* Right Side: Version Navigation */}
          <div className="tf-nav-group">
            {version > 1 && (
              <Link to={`/gymkhana/techfest/${version - 1}`} className="tf-nav-link tf-nav-btn-secondary">
                <i className="fa-solid fa-chevron-left" /> Edition {version - 1}.0
              </Link>
            )}

            {version < 3 && (
              <Link to={`/gymkhana/techfest/${version + 1}`} className="tf-nav-link tf-nav-btn-primary">
                Explore Edition {version + 1}.0 <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '5px' }} />
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function TechFest1() { return <TechFestPage version={1} />; }
export function TechFest2() { return <TechFestPage version={2} />; }
export function TechFest3() { return <TechFestPage version={3} />; }