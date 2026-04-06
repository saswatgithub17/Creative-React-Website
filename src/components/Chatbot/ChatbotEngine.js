// ============================================================
// ChatbotEngine.js — CTC College Rule-Based Knowledge Engine
// ============================================================

const KNOWLEDGE_BASE = [
  // ── GREETINGS ─────────────────────────────────────────────
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'hola', 'namaste', 'greetings'],
    response: {
      text: "👋 Hello! Welcome to **Creative Techno College, Angul**!\n\nI'm Neo  — your virtual guide. I can help you with admissions, courses, placements, events, and much more! What would you like to know?",
      quickReplies: ['Admissions', 'Courses', 'Placements', 'Contact Us'],
      links: [],
    },
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'thank you', 'thankyou', 'thx', 'ty', 'appreciate', 'helpful'],
    response: {
      text: "😊 You're most welcome! It's my pleasure to assist you.\n\nIs there anything else you'd like to know about CTC?",
      quickReplies: ['Courses', 'Admissions', 'Contact Us'],
      links: [],
    },
  },
  {
    id: 'bye',
    keywords: ['bye', 'goodbye', 'see you', 'later', 'take care', 'exit', 'close'],
    response: {
      text: "👋 Goodbye! Have a wonderful day!\n\nFeel free to come back anytime. CTC is always here to help you on your academic journey! 🎓",
      quickReplies: [],
      links: [],
    },
  },

  // ── ABOUT CTC ─────────────────────────────────────────────
  {
    id: 'about',
    keywords: ['about ctc', 'about college', 'what is ctc', 'creative techno', 'college info', 'tell me about', 'history', 'established', 'founded', 'est'],
    response: {
      text: "🏛️ **Creative Techno College (CTC), Angul** is a premier technical institution established in **2010**, affiliated to **Utkal University** and approved by **AICTE**.\n\nLocated in Angul, Odisha, CTC offers world-class engineering education under the aegis of the **Creative Knowledge Foundation (CKF)**.\n\n🎯 **Vision:** To be a centre of excellence for technical education\n📚 **Mission:** Empower students with knowledge, skills & values",
      quickReplies: ['Our Team', 'About Trust', 'Courses', 'Accreditation'],
      links: [
        { label: 'About CTC', path: '/about/ctc' },
        { label: 'About Trust', path: '/about/trust' },
      ],
    },
  },
  {
    id: 'trust',
    keywords: ['trust', 'ckf', 'creative knowledge foundation', 'management', 'organization'],
    response: {
      text: "🏢 **Creative Knowledge Foundation (CKF)** is the parent organization that runs Creative Techno College.\n\nCKF is committed to fostering quality education and skill development across Odisha. They also run **CKF Skills** — a dedicated skill training wing.",
      quickReplies: ['About CTC', 'Our Team', 'CKF Skills'],
      links: [
        { label: 'About Trust', path: '/about/trust' },
        { label: 'CKF Skills', path: '/ckf-skills' },
      ],
    },
  },
  {
    id: 'team',
    keywords: ['team', 'principal', 'faculty', 'staff', 'professor', 'teacher', 'director', 'our team', 'management team'],
    response: {
      text: "👩‍🏫 **CTC Faculty & Management Team**\n\nCTC is led by an experienced team of academicians and industry professionals dedicated to student success.\n\nVisit our Our Team page to meet the Principal, HODs, and teaching staff.",
      quickReplies: ['About CTC', 'Contact Us'],
      links: [
        { label: 'Our Team', path: '/about/team' },
      ],
    },
  },

  // ── ADMISSIONS ────────────────────────────────────────────
  {
    id: 'admission',
    keywords: ['admission', 'admissions', 'apply', 'join', 'enroll', 'enroll', 'how to apply', 'application', 'seat', 'intake'],
    response: {
      text: "🎓 **Admissions at CTC — 2024-25**\n\n📋 **Eligibility:** 10+2 / HSC pass with Physics, Chemistry, Maths (PCM)\n📅 **Process:** Apply online → Submit documents → Merit list → Fee payment\n📑 **Documents:** Mark sheets, Transfer Certificate, Caste Certificate (if applicable), Passport photos\n\n✅ Admission is merit-based through OJEE / Direct admission.",
      quickReplies: ['Apply Now', 'Fee Structure', 'Courses', 'Contact Us'],
      links: [
        { label: 'Admission Details', path: '/admission' },
        { label: 'Apply Now', path: '/admission/apply' },
      ],
    },
  },
  {
    id: 'fee',
    keywords: ['fee', 'fees', 'cost', 'tuition', 'payment', 'scholarship', 'fee structure', 'how much'],
    response: {
      text: "💰 **Fee Structure at CTC**\n\nCTC offers affordable fee structures with options for:\n• 🏦 Bank loan assistance\n• 🎖️ Government scholarships (SC/ST/OBC)\n• 📊 Merit-based fee concessions\n\nFor exact fee details, please contact our admission office directly or visit the Admission page.",
      quickReplies: ['Apply Now', 'Contact Us', 'Admission'],
      links: [
        { label: 'Admission Info', path: '/admission' },
        { label: 'Apply Online', path: '/admission/apply' },
        { label: 'Contact Office', path: '/contacts' },
      ],
    },
  },

  // ── COURSES ───────────────────────────────────────────────
  {
    id: 'courses',
    keywords: ['course', 'courses', 'program', 'programs', 'branch', 'branches', 'stream', 'degree', 'b.e', 'be', 'b.tech', 'btech', 'engineering', 'department'],
    response: {
      text: "📚 **Courses Offered at CTC**\n\n🎓 **Regular Degree Programs (B.E.):**\n• Computer Science & Engineering\n• Electronics & Telecommunication Engg.\n• Electrical Engineering\n• Mechanical Engineering\n• Civil Engineering\n\n📘 **Value-Added Courses** — Industry-oriented add-on certifications\n\n🚀 **Enhancement Programs** — Skill & personality development",
      quickReplies: ['Value-Added Courses', 'Enhancement Programs', 'Admissions'],
      links: [
        { label: 'Regular Courses', path: '/academics/regular' },
        { label: 'Value-Added Courses', path: '/academics/value-added' },
        { label: 'Enhancement Programs', path: '/academics/enhancement' },
      ],
    },
  },
  {
    id: 'value_added',
    keywords: ['value added', 'value-added', 'certificate', 'certification', 'extra course', 'additional course'],
    response: {
      text: "📘 **Value-Added Courses at CTC**\n\nCTC offers industry-oriented value-added certification programs that complement your degree:\n\n• Programming & Software Development\n• Digital Marketing\n• Spoken English & Communication\n• AutoCAD & Design Tools\n• And more...\n\nThese courses prepare students for industry with practical skills beyond the classroom.",
      quickReplies: ['Regular Courses', 'Enhancement Programs', 'Placements'],
      links: [
        { label: 'Value-Added Courses', path: '/academics/value-added' },
      ],
    },
  },
  {
    id: 'enhancement',
    keywords: ['enhancement', 'personality', 'soft skill', 'spoken english', 'communication', 'development program'],
    response: {
      text: "🚀 **Enhancement Programs at CTC**\n\nCTC's enhancement programs focus on holistic student development:\n\n• 🗣️ Communication & Soft Skills\n• 💼 Interview Preparation\n• 🧠 Aptitude Training\n• 🤝 Leadership & Teamwork\n• 📊 Resume Building Workshops\n\nThese programs ensure our graduates are industry-ready!",
      quickReplies: ['Placements', 'Courses', 'Admissions'],
      links: [
        { label: 'Enhancement Programs', path: '/academics/enhancement' },
      ],
    },
  },

  // ── PLACEMENTS ────────────────────────────────────────────
  {
    id: 'placements',
    keywords: ['placement', 'placements', 'job', 'jobs', 'recruit', 'recruiter', 'company', 'companies', 'package', 'ctc', 'salary', 'career', 'hire', 'campus'],
    response: {
      text: "💼 **Placements at CTC**\n\nCTC has a strong placement record with students placed in top companies!\n\n🏆 **Top Recruiters:** Infosys, TCS, Wipro, L&T, Tata Motors, NTPC, and many more\n📈 **Placement Rate:** Consistently high year-on-year\n💰 **Average Package:** Competitive salary packages\n\nOur dedicated Placement Cell conducts drives, mock interviews & industry connects.",
      quickReplies: ['Placement Stats', 'Development Programs', 'Brochure', 'Courses'],
      links: [
        { label: 'Placement Statistics', path: '/placement/statistics' },
        { label: 'Development Programs', path: '/placement/programs' },
        { label: 'Placement Brochure', path: '/placement/brochure' },
      ],
    },
  },
  {
    id: 'placement_stats',
    keywords: ['placement statistics', 'placement record', 'how many students placed', 'stats', 'statistics', 'numbers', 'data'],
    response: {
      text: "📊 **Placement Statistics**\n\nCTC proudly showcases impressive placement statistics year after year.\n\nVisit our Placement Statistics page for detailed numbers, company-wise data, and branch-wise placement records.",
      quickReplies: ['Placements', 'Brochure', 'Courses'],
      links: [
        { label: 'Placement Statistics', path: '/placement/statistics' },
        { label: 'Placement Brochure', path: '/placement/brochure' },
      ],
    },
  },

  // ── GYMKHANA & EVENTS ─────────────────────────────────────
  {
    id: 'gymkhana',
    keywords: ['gymkhana', 'clubs', 'activities', 'extracurricular', 'extra curricular', 'student activities', 'student life'],
    response: {
      text: "🎉 **CTC Gymkhana — Student Activities Hub!**\n\nCTC Gymkhana is the heart of student life with 4 vibrant wings:\n\n🔧 **Technocrat** — Technical events & innovations\n🎭 **Cultural** — Arts, dance, drama & cultural events\n⚽ **Sports** — Inter-college & intra-college sports\n🌱 **Disha CSR** — Community service & social responsibility",
      quickReplies: ['Technocrat', 'Cultural', 'Sports', 'Disha CSR'],
      links: [
        { label: 'Gymkhana Home', path: '/gymkhana' },
        { label: 'Technocrat', path: '/gymkhana/technocrat' },
        { label: 'Cultural', path: '/gymkhana/cultural' },
        { label: 'Sports', path: '/gymkhana/sports' },
      ],
    },
  },
  {
    id: 'technocrat',
    keywords: ['technocrat', 'technical club', 'tech club', 'technical events', 'hackathon', 'coding club'],
    response: {
      text: "🔧 **Technocrat Club — CTC's Technical Wing**\n\nTechnocrat drives innovation and technical excellence:\n• Hackathons & Coding Competitions\n• Project Exhibitions\n• Technical Workshops\n• Industry Guest Lectures\n• TechFest — our annual mega technical festival!",
      quickReplies: ['TechFest', 'Cultural', 'Sports', 'Gymkhana'],
      links: [
        { label: 'Technocrat', path: '/gymkhana/technocrat' },
      ],
    },
  },
  {
    id: 'cultural',
    keywords: ['cultural', 'dance', 'music', 'drama', 'arts', 'cultural event', 'cultural club', 'fest'],
    response: {
      text: "🎭 **Cultural Club — CTC's Creative Heart**\n\nCTC's Cultural wing celebrates talent and creativity:\n• Annual Cultural Fest\n• Dance & Music Competitions\n• Drama & Theatre\n• Literary Events\n• Fashion Shows & Art Exhibitions",
      quickReplies: ['Technocrat', 'Sports', 'Gymkhana'],
      links: [
        { label: 'Cultural', path: '/gymkhana/cultural' },
      ],
    },
  },
  {
    id: 'sports',
    keywords: ['sports', 'games', 'football', 'cricket', 'basketball', 'athletics', 'tournament', 'sport'],
    response: {
      text: "⚽ **Sports Club — CTC's Champion Spirit!**\n\nCTC encourages sports excellence:\n• Cricket, Football, Basketball, Volleyball\n• Athletics & Track Events\n• Indoor Games (Chess, Carrom, TT)\n• Inter-college Tournaments\n• State-level Sports Participation",
      quickReplies: ['Cultural', 'Technocrat', 'Gymkhana'],
      links: [
        { label: 'Sports', path: '/gymkhana/sports' },
      ],
    },
  },
  {
    id: 'disha',
    keywords: ['disha', 'csr', 'community', 'social', 'nss', 'volunteer', 'service', 'social responsibility'],
    response: {
      text: "🌱 **Disha & CSR Club — Giving Back to Society**\n\nDisha is CTC's social responsibility wing:\n• Blood Donation Camps\n• Environmental Drives (plantation, cleanliness)\n• Village Adoption Programs\n• Awareness campaigns (health, literacy)\n• Collaboration with NGOs",
      quickReplies: ['Cultural', 'Sports', 'Gymkhana'],
      links: [
        { label: 'Disha CSR', path: '/gymkhana/disha-csr' },
      ],
    },
  },
  {
    id: 'techfest',
    keywords: ['techfest', 'tech fest', 'technical festival', 'annual fest', 'annual festival', 'techfest 1', 'techfest 2', 'techfest 3'],
    response: {
      text: "🚀 **TechFest — CTC's Annual Technical Extravaganza!**\n\nTechFest is our flagship event bringing together students, industry experts, and innovators!\n\nWe've had **3 incredible editions** so far:\n• 🔵 TechFest 1 — The Beginning\n• 🟡 TechFest 2 — Rising Higher\n• 🔴 TechFest 3 — Innovation Unleashed",
      quickReplies: ['TechFest 1', 'TechFest 2', 'TechFest 3', 'Gymkhana'],
      links: [
        { label: 'TechFest 1', path: '/gymkhana/techfest/1' },
        { label: 'TechFest 2', path: '/gymkhana/techfest/2' },
        { label: 'TechFest 3', path: '/gymkhana/techfest/3' },
      ],
    },
  },

  // ── CONTACT ───────────────────────────────────────────────
  {
    id: 'contact',
    keywords: ['contact', 'contacts', 'address', 'phone', 'number', 'email', 'location', 'where', 'how to reach', 'directions', 'reach us', 'call'],
    response: {
      text: "📍 **Contact Creative Techno College**\n\n🏛️ **Address:**\nCreative Techno College, Angul,\nOdisha — 759001, India\n\n📞 **Phone:** Available on contact page\n📧 **Email:** Available on contact page\n🗺️ **Location:** Angul, Odisha",
      quickReplies: ['About CTC', 'Admissions', 'Our Team'],
      links: [
        { label: 'View Contact Page', path: '/contacts' },
      ],
    },
  },

  // ── ACCREDITATION ─────────────────────────────────────────
  {
    id: 'naac',
    keywords: ['naac', 'accreditation', 'grade', 'quality', 'assessment', 'accredited', 'naac grade'],
    response: {
      text: "⭐ **NAAC Accreditation — CTC**\n\nCTC is proud to be assessed by **NAAC** (National Assessment and Accreditation Council).\n\nVisit our NAAC page for the detailed accreditation report, criteria scores, and official documents.",
      quickReplies: ['NBA', 'About CTC', 'AICTE'],
      links: [
        { label: 'NAAC Details', path: '/naac' },
      ],
    },
  },
  {
    id: 'nba',
    keywords: ['nba', 'national board', 'program accreditation', 'nba accreditation'],
    response: {
      text: "🏆 **NBA Accreditation — CTC**\n\nNBA (National Board of Accreditation) ensures our engineering programs meet national quality standards.\n\nVisit our NBA page for accreditation details, program criteria, and documentation.",
      quickReplies: ['NAAC', 'Courses', 'About CTC'],
      links: [
        { label: 'NBA Details', path: '/nba' },
      ],
    },
  },
  {
    id: 'aicte',
    keywords: ['aicte', 'approval', 'approved', 'all india council', 'regulatory', 'government approval', 'mhrd'],
    response: {
      text: "✅ **AICTE Approval — CTC**\n\nCTC is **AICTE (All India Council for Technical Education)** approved — the statutory body for technical education in India.\n\nOur programs meet all AICTE norms and regulations, ensuring recognition across India.",
      quickReplies: ['NAAC', 'NBA', 'Courses'],
      links: [
        { label: 'AICTE Documents', path: '/aicte/documents' },
        { label: 'Mandatory Disclosure', path: '/aicte/mandatory-disclosure' },
      ],
    },
  },

  // ── COMMITTEES ────────────────────────────────────────────
  {
    id: 'icc',
    keywords: ['icc', 'internal complaints', 'posh', 'harassment', 'grievance women', 'complaints committee', 'anti harassment'],
    response: {
      text: "🛡️ **Internal Complaints Committee (ICC)**\n\nCTC's ICC is committed to providing a safe, respectful, and dignified environment for all students and staff.\n\n• Handles complaints under POSH Act\n• Confidential & impartial process\n• Dedicated women's safety focus\n\nFor queries or complaints, contact the ICC through the official channel.",
      quickReplies: ['GRC', 'Contact Us', 'About CTC'],
      links: [
        { label: 'ICC Details', path: '/icc' },
      ],
    },
  },
  {
    id: 'grc',
    keywords: ['grc', 'grievance', 'redressal', 'complaint', 'grievance redressal', 'student complaint', 'dispute'],
    response: {
      text: "⚖️ **Grievance Redressal Committee (GRC)**\n\nCTC's GRC ensures swift and fair resolution of student and staff grievances.\n\n• Academic grievances\n• Administrative issues\n• Fee-related disputes\n• Any other concerns\n\nThe committee ensures transparency and timely action.",
      quickReplies: ['ICC', 'Contact Us'],
      links: [
        { label: 'GRC Details', path: '/grc' },
      ],
    },
  },

  // ── GALLERY ───────────────────────────────────────────────
  {
    id: 'gallery',
    keywords: ['gallery', 'photos', 'pictures', 'images', 'photo gallery', 'campus photos', 'campus pictures'],
    response: {
      text: "📸 **CTC Photo Gallery**\n\nExplore beautiful moments from CTC campus life — events, fests, achievements, and more!\n\nVisit the gallery to see our vibrant campus culture.",
      quickReplies: ['About CTC', 'Gymkhana', 'Contact Us'],
      links: [
        { label: 'View Gallery', path: '/gallery' },
      ],
    },
  },

  // ── VIKSHIT BHARAT ────────────────────────────────────────
  {
    id: 'vikshit_bharat',
    keywords: ['vikshit bharat', 'viksit bharat', 'developed india', 'vikshit', 'national initiative'],
    response: {
      text: "🇮🇳 **Vikshit Bharat Initiative at CTC**\n\nCTC actively participates in the **Vikshit Bharat** (Developed India) national initiative — aligning education with India's vision for 2047.\n\nLearn more about how CTC is contributing to this national mission.",
      quickReplies: ['About CTC', 'Courses'],
      links: [
        { label: 'Vikshit Bharat', path: '/vikshit-bharat' },
      ],
    },
  },

  // ── LOGIN / PORTALS ───────────────────────────────────────
  {
    id: 'login',
    keywords: ['login', 'portal', 'student portal', 'staff portal', 'admin portal', 'sign in', 'log in', 'student login', 'faculty login'],
    response: {
      text: "🔐 **CTC Portals — Login Access**\n\nAccess your dedicated portal:\n\n👨‍🎓 **Student Portal** — Attendance, marks, results\n👩‍🏫 **Staff Portal** — Faculty resources & info\n🏫 **Admin Portal** — Administrative access\n🎓 **Principal Portal** — Principal dashboard\n📋 **Admission Portal** — Admission process",
      quickReplies: ['Contact Us', 'About CTC'],
      links: [
        { label: 'Student Login', path: '/login/student' },
        { label: 'Staff Login', path: '/login/staff' },
        { label: 'Admin Login', path: '/login/admin' },
      ],
    },
  },

  // ── IQAC ──────────────────────────────────────────────────
  {
    id: 'iqac',
    keywords: ['iqac', 'internal quality', 'quality assurance', 'quality cell'],
    response: {
      text: "📋 **IQAC — Internal Quality Assurance Cell**\n\nCTC's IQAC ensures continuous quality enhancement in academic and administrative activities.\n\nVisit the IQAC section for reports, minutes of meetings, and quality initiatives.",
      quickReplies: ['NAAC', 'NBA', 'About CTC'],
      links: [
        { label: 'IQAC', path: '/iqac' },
      ],
    },
  },
];

// ── FALLBACK ──────────────────────────────────────────────
const FALLBACK_RESPONSE = {
  text: "🤔 Hmm, I didn't quite catch that! Here are some things I can help you with:",
  quickReplies: ['Admissions', 'Courses', 'Placements', 'Contact Us', 'About CTC', 'Gymkhana'],
  links: [],
};

// ── WELCOME MESSAGE ───────────────────────────────────────
export const WELCOME_MESSAGE = {
  id: 'welcome',
  sender: 'bot',
  text: "👋 Hello! I'm **Neo**, your virtual guide for **Creative Techno College, Angul**!\n\nI can help you with information about admissions, courses, placements, events, and more. What would you like to know?",
  quickReplies: ['Admissions', 'Courses', 'Placements', 'Gymkhana', 'Contact Us'],
  links: [],
  timestamp: new Date(),
};

// ── INTENT MATCHER ────────────────────────────────────────
export function getResponse(userInput) {
  const input = userInput.toLowerCase().trim();

  if (!input) return FALLBACK_RESPONSE;

  let bestMatch = null;
  let bestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (input.includes(keyword)) {
        // Longer keyword matches score higher
        score += keyword.split(' ').length * 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  return FALLBACK_RESPONSE;
}
