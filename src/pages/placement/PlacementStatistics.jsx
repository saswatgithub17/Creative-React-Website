import { useState, useEffect, useRef, useMemo } from 'react';

/* ── Reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Company color map ── */
const COMPANY_COLORS = {
  TCS:            { bg: '#0a2472', text: '#fff', short: 'TCS' },
  WIPRO:          { bg: '#8b2be2', text: '#fff', short: 'WIP' },
  'LTI MINDTREE': { bg: '#00aa44', text: '#fff', short: 'LTI' },
  MINDTREE:       { bg: '#00aa44', text: '#fff', short: 'MT' },
  COGNIZENT:      { bg: '#0066cc', text: '#fff', short: 'COG' },
  COGNIZANT:      { bg: '#0066cc', text: '#fff', short: 'COG' },
  INFOSYS:        { bg: '#007acc', text: '#fff', short: 'INF' },
  CAPGEMINI:      { bg: '#0070ad', text: '#fff', short: 'CAP' },
  DELOITTE:       { bg: '#86bc25', text: '#fff', short: 'DEL' },
  ACCENTURE:      { bg: '#a100ff', text: '#fff', short: 'ACC' },
  'TECH MAHINDRA':{ bg: '#e31837', text: '#fff', short: 'TM'  },
  'L&T FINANCE':  { bg: '#e8401c', text: '#fff', short: 'L&T' },
  'BAJAJ ALLIANZ':{ bg: '#003087', text: '#fff', short: 'BAJ' },
  QSPIDERS:       { bg: '#ff6600', text: '#fff', short: 'QSP' },
  GQT:            { bg: '#1a1a2e', text: '#fff', short: 'GQT' },
  MPHASYS:        { bg: '#6a1e91', text: '#fff', short: 'MPH' },
  HCL:            { bg: '#0d6efd', text: '#fff', short: 'HCL' },
  'BYJU\'S':      { bg: '#fd4c00', text: '#fff', short: 'BYJ' },
};

const getCompanyStyle = (name) => {
  const key = Object.keys(COMPANY_COLORS).find(k => name.toUpperCase().includes(k));
  return key ? COMPANY_COLORS[key] : { bg: '#334155', text: '#fff', short: name.slice(0, 3).toUpperCase() };
};

/* ── All placement data ── */
const DATA_2025 = [
  { name: 'Asutosh Sahu',          batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Swapnajit Sahoo',       batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Anish Ashutosh Nayak',  batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Abhilipsha Pradhan',    batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Adyasha Sahu',          batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Archita Dhar',          batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Sania Nayak',           batch: 'BCA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Bhabani Sankar Dash',   batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Namitarani Sahu',       batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Vishal Tiwari',         batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Sangita Pradhan',       batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Laxmipriya Sahu',       batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Payal Sahoo',           batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Nensi Biswal',          batch: 'BBA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Rituparna Devi',        batch: 'BBA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Ipsita Sahoo',          batch: 'BBA - 2022 AB',  company: 'TCS',         designation: 'Software Trainee' },
  { name: 'Sandhyarani Sahu',      batch: 'BSc.CS - 2022 AB',company: 'TCS',        designation: 'Software Trainee' },
  { name: 'Chandrakanta Muduli',   batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Pritam Kumar Behera',   batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Adyasha Sahu',          batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Anish Ashutosh Nayak',  batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Pritiprangya Behera',   batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Chandan Swain',         batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Abhishek Kumar Rai',    batch: 'BCA',            company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Resmasmita Priyadarsini',batch: 'BSc.CS (H)',    company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Monalisha Sahu',        batch: 'BSc.CS (H)',     company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Sushree Smita Swain',   batch: 'BSc.CS (H)',     company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Sushree Sangita Pradhan',batch: 'BSc.CS (H)',    company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Debasish Pradhan',      batch: 'BSc.CS (H)',     company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Karan Kumar Nayak',     batch: 'BSc.CS (H)',     company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Payal Pradhan',         batch: 'BSc.CS (H)',     company: 'WIPRO',        designation: 'Software Trainee' },
  { name: 'Chandrakanta Muduli',   batch: 'BCA - 2022 AB',  company: 'LTI MINDTREE', designation: 'Associate Trainee' },
  { name: 'S.K. Akil',             batch: 'BCA - 2022 AB',  company: 'LTI MINDTREE', designation: 'Associate Trainee' },
  { name: 'Payal Pradhan',         batch: 'BSc.CS',         company: 'LTI MINDTREE', designation: 'Associate Trainee' },
  { name: 'Pritiprangya Behera',   batch: 'BCA - 2022 AB',  company: 'COGNIZENT',    designation: 'Associate Trainee' },
  { name: 'Ritwik Sahoo',          batch: 'BSc.CS',         company: 'COGNIZENT',    designation: 'Associate Trainee' },
  { name: 'Seema Behera',          batch: 'BSc.CS',         company: 'COGNIZENT',    designation: 'Associate Trainee' },
  { name: 'Lopita Sahu',           batch: 'BSc.CS',         company: 'COGNIZENT',    designation: 'Associate Trainee' },
  { name: 'Anish Ashutosh Nayak',  batch: 'BCA - 2022 AB',  company: 'COGNIZENT',    designation: 'Associate Trainee' },
  { name: 'Ananta Kishor Swain',   batch: 'BCA - 2022 AB',  company: 'COGNIZENT',    designation: 'Associate Trainee' },
  { name: 'Swapnajit Sahoo',       batch: 'BCA - 2022 AB',  company: 'COGNIZENT',    designation: 'Associate Trainee' },
];

const DATA_2024 = [
  { name: 'Rahul Kumar Sahu',      batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Prajolita Dehury',      batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Tushar Raman Naik',     batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Ayush Lal',             batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Shibuprasad Nayak',     batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Khusi Bilas',           batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Subrat Sahoo',          batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Prangya Paramita Sahu', batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Punam P. Panda',        batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Titan Kumar Prusty',    batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Somesh Sahu',           batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Biswajit Sahu',         batch: 'BBA',      company: 'TCS',           designation: 'BPS' },
  { name: 'Dhiren Mahanta',        batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Matru Prasad Muduli',   batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Biswajit Sahu',         batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Ashis Parida',          batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Suman Sahoo',           batch: 'BSC-CS',   company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Gyana Ranjan Sahu',     batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Samit Kumar Pradhan',   batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Ayush Lal',             batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Titan Kumar Prusty',    batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Abhishek Sahu',         batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Tushar Raman Naik',     batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Rahul Kumar Sahu',      batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Subrat Sahoo',          batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Alok Kumar Sahoo',      batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Sibu Prashad Nayak',    batch: 'BBA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Ranjeet Yadav',         batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Subhakant Pradhan',     batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Priyadarshan Pradhan',  batch: 'BSC-CS',   company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Priyaranjan Sahoo',     batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Rasabihari Sahu',       batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Hemananda Sahu',        batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Alekha Sahoo',          batch: 'BCA',      company: 'L&T Finance',   designation: 'Trainee' },
  { name: 'Subhendu Kumar Pratap Singh', batch: 'BCA', company: 'L&T Finance',  designation: 'Trainee' },
  { name: 'Tusar Raman Naik',      batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Abhishek Sahu',         batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Chidatmika Pradhan',    batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Monalisa Pradhan',      batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Prajolita Dehury',      batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Prangya Paramita Sahu', batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Punam P. Panda',        batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Somesh Sahu',           batch: 'BBA',      company: 'E-panipuri Kartz', designation: 'Trainee' },
  { name: 'Subhashree Ranjan Tunga',batch: 'BSC-CS',  company: 'Golden India Transport', designation: 'Trainee' },
  { name: 'Punam P. Panda',        batch: 'BBA',      company: 'Golden India Transport', designation: 'Trainee' },
  { name: 'Abhishek Sahoo',        batch: 'BBA',      company: 'Golden India Transport', designation: 'Trainee' },
  { name: 'Somesh Sahoo',          batch: 'BBA',      company: 'Bajaj Allianz',  designation: 'Trainee' },
  { name: 'Sibuprasad Nayak',      batch: 'BBA',      company: 'Bajaj Allianz',  designation: 'Trainee' },
  { name: 'Alok Kumar Sahoo',      batch: 'BBA',      company: 'Bajaj Allianz',  designation: 'Trainee' },
  { name: 'Tushar Raman Naik',     batch: 'BBA',      company: 'Bajaj Allianz',  designation: 'Trainee' },
  { name: 'Titan Kumar Prusty',    batch: 'BBA',      company: 'Bajaj Allianz',  designation: 'Trainee' },
  { name: 'Pradyuda Kumar Sahoo',  batch: 'BBA',      company: 'Bajaj Allianz',  designation: 'Trainee' },
  { name: 'Abhjit Jena',           batch: 'BCA',      company: 'EDEVLOP',        designation: 'Trainee' },
  { name: 'Priyadarshan Pradhan',  batch: 'BSC-CS',   company: 'EDEVLOP',        designation: 'Trainee' },
  { name: 'Somesh Sahoo',          batch: 'BBA',      company: 'Leran Medix',    designation: 'Trainee' },
  { name: 'Pradyuda Kumar Sahoo',  batch: 'BBA',      company: 'Leran Medix',    designation: 'Trainee' },
  { name: 'Satyabrata Ojha',       batch: 'BCA',      company: 'Edtech',         designation: 'Trainee' },
  { name: 'Ashish Singh',          batch: 'BCA',      company: 'Edtech',         designation: 'Trainee' },
  { name: 'Sourav Sahoo',          batch: 'BSC-CS',   company: 'DELOITTE',       designation: 'Software Trainee' },
  { name: 'Priyadarshan Pradhan',  batch: 'BSC-CS',   company: 'DELOITTE',       designation: 'Software Trainee' },
  { name: 'Kajal Sahoo',           batch: 'BSC-CS',   company: 'DELOITTE',       designation: 'Software Trainee' },
  { name: 'Subhashree Behera',     batch: 'BCA',      company: 'ACCENTURE',      designation: 'Software Trainee' },
  { name: 'Rojalin Tripathy',      batch: 'BSC-CS',   company: 'ACCENTURE',      designation: 'Software Trainee' },
  { name: 'Diptimayee Sahoo',      batch: 'BSC-CS',   company: 'TCS',            designation: 'Software Trainee' },
  { name: 'Gyana Ranjan Nath',     batch: 'BCA',      company: 'WIPRO',          designation: 'Software Trainee' },
  { name: 'Abhijit Jena',          batch: 'BCA',      company: 'WIPRO',          designation: 'Software Trainee' },
];

const DATA_2023 = [
  { name: 'Itishree Nath',         batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Gaurav Pathak',         batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Adysha Rout',           batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Roshan Das',            batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Jitendriya Jena',       batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Sachin Kumar Dhal',     batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Purusottam Barik',      batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Bednath Sahu',          batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Suraj Kumar Sahoo',     batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Laxminarayan Bisoi',    batch: 'BSC-CS', company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Asit Kumar Biswal',     batch: 'BSC-CS', company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Dharitri Sahoo',        batch: 'BSC-CS', company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Netaji Bai',            batch: 'BSC-CS', company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Rakesh Senapati',       batch: 'BSC-CS', company: 'WIPRO',         designation: 'Software Trainee' },
  { name: 'Kalpana Naik',          batch: 'BSC-CS', company: 'GQT',           designation: 'Full Stack Developer' },
  { name: 'Nibedita Sahoo',        batch: 'BSC-CS', company: 'GQT',           designation: 'Full Stack Developer' },
  { name: 'Sonalee Singh',         batch: 'BCA',    company: 'GQT',           designation: 'Full Stack Developer' },
  { name: 'Gaurav Pathak',         batch: 'BCA',    company: 'GQT',           designation: 'Full Stack Developer' },
  { name: 'Rasmita Sahoo',         batch: 'BSC-CS', company: 'GQT',           designation: 'Full Stack Developer' },
  { name: 'Shrutisweta Panda',     batch: 'BSC-CS', company: 'GQT',           designation: 'Full Stack Developer' },
  { name: 'Suraj Naik',            batch: 'BBA',    company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Ananya Singh',          batch: 'BBA',    company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Subhranshu Sahu',       batch: 'BBA',    company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Subrat Kumar Pradhan',  batch: 'BBA',    company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Jogita Jangyaseni Pradhan', batch: 'BBA',company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Janmejaya Behera',      batch: 'BBA',    company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Rohan Kumar Sahoo',     batch: 'BBA',    company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Kusumanjali Pradhan',   batch: 'BBA',    company: 'KAMALJIT ENTERPRISES', designation: 'Marketing' },
  { name: 'Jogita Jangyaseni Pradhan', batch: 'BBA',company: 'KAMALJIT ENTERPRISES', designation: 'Marketing' },
  { name: 'Janmejaya Behera',      batch: 'BBA',    company: 'KAMALJIT ENTERPRISES', designation: 'Marketing' },
  { name: 'Roshan Das',            batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Itishree Nath',         batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Rakesh Senapati',       batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Baishanavi Rout',       batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Laxminarayan Bisoi',    batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Adysha Rout',           batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Sandeep Samal',         batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Kalpana Naik',          batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Padmalaya Sahu',        batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Sonalee Singh',         batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Dharitri Sahoo',        batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Subhasmita Singh',      batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Subrat Kumar Sahu',     batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Abhijit Bhuyan',        batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Netaji Bai',            batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Rasmita Sahoo',         batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Arjyakumari Nirlipta',  batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Sruti Sweta Panda',     batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Deepa Sahu',            batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Madhusmita Rout',       batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Sweet Kumari Muni',     batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Chinmayee Sahoo',       batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Satyajit Bhuyan',       batch: 'BSC-CS', company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Purnima Sahoo',         batch: 'BCA',    company: 'QSPIDERS',      designation: 'Trainee' },
  { name: 'Akash Kumar Behera',    batch: 'BBA',    company: 'TCS',           designation: 'BPS' },
  { name: 'Jogita Jangyaseni Pradhan', batch: 'BBA',company: 'TCS',           designation: 'BPS' },
  { name: 'Amisha Prasad',         batch: 'BBA',    company: 'TCS',           designation: 'BPS' },
  { name: 'Subrat Kumar Sahu',     batch: 'BCA',    company: 'TEACHNOOK',     designation: 'Academic Counsellor' },
  { name: 'Priyadarshini Garnaik', batch: 'BSC-CS', company: 'CREDENTS SOFT', designation: 'Intern' },
  { name: 'Satyajit Bhuyan',       batch: 'BSC-CS', company: 'TECH MAHINDRA', designation: 'BPS' },
  { name: 'Abhijit Bhuyan',        batch: 'BSC-CS', company: 'TECH MAHINDRA', designation: 'BPS' },
  { name: 'Akash Kumar Behera',    batch: 'BBA',    company: 'TECH MAHINDRA', designation: 'BPS' },
  { name: 'Rohan Kumar Sahoo',     batch: 'BBA',    company: 'BYJU\'S',       designation: 'HR Role' },
  { name: 'Rasmita Sahoo',         batch: 'BSC-CS', company: 'TECH MAHINDRA', designation: 'BPS' },
  { name: 'Janmejaya Behera',      batch: 'BBA',    company: 'BYJU\'S',       designation: 'Marketing' },
  { name: 'Jogita Jangyaseni Pradhan', batch: 'BBA',company: 'BYJU\'S',       designation: 'Marketing' },
  { name: 'Ananya Singh',          batch: 'BBA',    company: 'BYJU\'S',       designation: 'Marketing' },
  { name: 'Barsaranee Barik',      batch: 'BCA',    company: 'EXCELERATE',    designation: 'Data Analyst' },
  { name: 'Adysha Rout',           batch: 'BCA',    company: 'TECH MAHINDRA', designation: 'BPS' },
  { name: 'Janmejaya Behera',      batch: 'BBA',    company: 'TECH MAHINDRA', designation: 'BPS' },
  { name: 'Adysha Rout',           batch: 'BCA',    company: 'CAPGEMINI',     designation: 'Trainee' },
  { name: 'Abhijit Jena',          batch: 'BCA',    company: 'WIPRO',         designation: 'Software Trainee' },
];

const DATA_2022 = [
  { name: 'Richa Singh',           batch: 'BCA (2019-22)', company: 'DELOITTE',   designation: '' },
  { name: 'Snehlata Pandey',       batch: 'BCA (2019-22)', company: 'DELOITTE',   designation: '' },
  { name: 'Ankita Pradhan',        batch: 'BCA (2019-22)', company: 'DELOITTE',   designation: '' },
  { name: 'Debasrita Sahu',        batch: 'BSC (2019-22)', company: 'DELOITTE',   designation: '' },
  { name: 'Ratikanta Pradhan',     batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Snehlata Pandey',       batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Isha Agarwal',          batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Rani Sahu',             batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Ankita Pradhan',        batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Answesha Sahu',         batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Debismita Sahu',        batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Tejaswini Pradhan',     batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Puja Behera',           batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Subhadra Behera',       batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Manasmita Sahoo',       batch: 'BSC (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Jyotirmay Prasad',      batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'S. Satya Sagar',        batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Richa Singh',           batch: 'BCA (2019-22)', company: 'WIPRO',      designation: '' },
  { name: 'Puja Behera',           batch: 'BSC (2019-22)', company: 'LTI',        designation: '' },
  { name: 'Isha Agarwal',          batch: 'BCA (2019-22)', company: 'LTI',        designation: '' },
  { name: 'Snehlata Pandey',       batch: 'BCA (2019-22)', company: 'LTI',        designation: '' },
  { name: 'Jyotirmay Prasad',      batch: 'BCA (2019-22)', company: 'ACCENTURE',  designation: '' },
  { name: 'Swadesh Behera',        batch: 'BSC (2019-22)', company: 'ACCENTURE',  designation: '' },
  { name: 'Pratibha Behera',       batch: 'BCA (2019-22)', company: 'MPHASYS',    designation: '' },
  { name: 'Isha Agarwal',          batch: 'BCA (2019-22)', company: 'MPHASYS',    designation: '' },
  { name: 'Richa Singh',           batch: 'BCA (2019-22)', company: 'MPHASYS',    designation: '' },
  { name: 'Snehlata Pandey',       batch: 'BCA (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Smrutirekha Sahu',      batch: 'BSC (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Sratoswini Parida',     batch: 'BCA (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Swadesh Behera',        batch: 'BSC (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Ankita Pani',           batch: 'BCA (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Richa Singh',           batch: 'BCA (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Tejaswini Pradhan',     batch: 'BSC (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Isha Agarwal',          batch: 'BCA (2019-22)', company: 'CAPGEMINI',  designation: '' },
  { name: 'Rituparna Das',         batch: 'BBA (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Iqra Asad',             batch: 'BBA (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Vaibhab Sharma',        batch: 'BBA (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Sonali Seth',           batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Smrutirekha Sahu',      batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Baby Pradhan',          batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Sucharita Sahu',        batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Puja Behera',           batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Tejaswini Pradhan',     batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Anwesha Sahu',          batch: 'BSC (2019-22)', company: 'O2 SAVER',   designation: '' },
  { name: 'Satybrata Pradhan',     batch: 'BCA (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Subham Parida',         batch: 'BCA (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Jyotirmay Prasad',      batch: 'BCA (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Ankita Pani',           batch: 'BCA (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Isha Agarwal',          batch: 'BCA (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Sonali Seth',           batch: 'BSC (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Swadesh Behera',        batch: 'BSC (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Smrutirekha Sahu',      batch: 'BSC (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Anwesha Sahu',          batch: 'BSC (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Subhasmita Sahu',       batch: 'BSC (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Tejaswini Pradhan',     batch: 'BSC (2019-22)', company: 'QSPIDERS',   designation: '' },
  { name: 'Subham Parida',         batch: 'BCA (2019-22)', company: 'INFOSYS',    designation: '' },
  { name: 'Biswabijan Mohanty',    batch: 'BSC (2019-22)', company: 'INFOSYS',    designation: '' },
  { name: 'Rani Sahu',             batch: 'BSC (2019-22)', company: 'INFOSYS',    designation: '' },
  { name: 'Pratibha Behera',       batch: 'BCA (2019-22)', company: 'INFOSYS',    designation: '' },
  { name: 'Tejaswini Pradhan',     batch: 'BSC (2019-22)', company: 'INFOSYS',    designation: '' },
];

const DATA_2020_21 = [
  { name: 'Ashutosh Kar',          batch: 'BCA-2021', company: 'WIPRO, TCS, AT&T, Airtel, Publis Sapient, Mind Tree, Tech Mahindra, L&T', designation: '8 Offers' },
  { name: 'Purushotam Swain',      batch: 'BCA-2021', company: 'WIPRO, TCS, Infosys, CISCO, Accenture, HCL',                              designation: '6 Offers' },
  { name: 'Vikash Tiwary',         batch: 'BCA-2021', company: 'WIPRO, TCS, Edusys',                                                      designation: '3 Offers' },
  { name: 'Swetalin Nath',         batch: 'BCA-2021', company: 'WIPRO, Cognizent, Infosys, Mindtree',                                     designation: '4 Offers' },
  { name: 'Abhisek Jena',          batch: 'BCA-2021', company: 'SNAPDEAL, Mindtree',                                                       designation: '2 Offers' },
  { name: 'Ayush Tripathy',        batch: 'BCA-2021', company: 'WIPRO',                                                                    designation: '1 Offer' },
  { name: 'Sagar Pradhan',         batch: 'BCA-2021', company: 'Mindtree',                                                                 designation: '1 Offer' },
  { name: 'Rajesh Sahu',           batch: 'BCA-2021', company: 'HCL',                                                                      designation: '1 Offer' },
  { name: 'Nasreen Qureshi',       batch: 'BSC-2021', company: 'ICICI, Tech Mahindra, TCS, Mindtree',                                     designation: '4 Offers' },
  { name: 'Biswabhusan Das',       batch: 'BSC-2021', company: 'Byju\'s, Upgrade',                                                        designation: '2 Offers' },
  { name: 'Swayamprava Das',       batch: 'BSC-2021', company: 'DXC, TCS',                                                                designation: '2 Offers' },
  { name: 'Sunil Das',             batch: 'BCA-2020', company: 'WIPRO',                                                                    designation: '1 Offer' },
  { name: 'Amit Kumar Mahanta',    batch: 'BCA-2020', company: 'Tech Mahindra',                                                            designation: '1 Offer' },
  { name: 'Krishnakanta Behera',   batch: 'BCA-2021', company: 'Byju\'s',                                                                 designation: '1 Offer' },
  { name: 'Swagatika Pradhan',     batch: 'BCA-2021', company: 'TCS',                                                                      designation: '1 Offer' },
  { name: 'Saswat Sahu',           batch: 'BCA-2021', company: 'Mindtree',                                                                 designation: '1 Offer' },
  { name: 'Komal Gupta',           batch: 'BCA-2021', company: 'Mindtree',                                                                 designation: '1 Offer' },
  { name: 'Anmol Kumar Mishara Sharma', batch: 'BSC-2021', company: 'COGNIZANT',                                                           designation: '1 Offer' },
];

const YEAR_TABS = [
  { id: '2025', label: '2025', data: DATA_2025, color: '#0c2340' },
  { id: '2024', label: '2024', data: DATA_2024, color: '#1a3a6b' },
  { id: '2023', label: '2023', data: DATA_2023, color: '#2d5a8e' },
  { id: '2022', label: '2022 Batch', data: DATA_2022, color: '#3d7ab5' },
  { id: '2021', label: '2020 & 2021', data: DATA_2020_21, color: '#5599cc' },
];

const PAGE_SIZE = 12;

/* ── Chart ── */
function HiringChart() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const loadChart = () => {
      // Check if Chart.js is already loaded in the window
      const Chart = window.Chart;
      if (!Chart) return;

      if (chartRef.current) chartRef.current.destroy();
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['WIPRO','TECH MAHINDRA','TCS','MINDTREE/LTI','INFOSYS','COGNIZANT','DELOITTE','ACCENTURE','CAPGEMINI','HCL',"BYJU'S"],
          datasets: [
            { label: '2020', data: [10,2,8,1,2,0,1,1,2,1,1], backgroundColor: 'rgba(12,35,64,0.85)' },
            { label: '2021', data: [8,1,7,2,1,0,2,1,1,0,1],  backgroundColor: 'rgba(26,58,107,0.85)' },
            { label: '2022', data: [12,2,9,1,2,1,1,1,3,0,1], backgroundColor: 'rgba(45,90,142,0.85)' },
            { label: '2023', data: [15,3,10,2,1,0,1,1,1,0,2], backgroundColor: 'rgba(61,122,181,0.85)' },
            { label: '2024', data: [8,1,4,1,1,0,1,1,1,0,1],  backgroundColor: 'rgba(85,153,204,0.85)' },
            { label: '2025', data: [5,1,2,0,0,1,1,0,1,0,0],  backgroundColor: 'rgba(130,190,230,0.85)' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: 'top', labels: { font: { family: 'Plus Jakarta Sans', size: 12 }, color: '#0c2340' } },
          },
          scales: {
            x: { stacked: true, ticks: { font: { size: 11 }, color: '#334155' }, grid: { display: false } },
            y: { stacked: true, ticks: { font: { size: 11 }, color: '#334155' }, grid: { color: 'rgba(0,0,0,0.05)' } },
          },
        },
      });
    };

    // Dynamically add the script tag if not present
    if (!window.Chart) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.async = true;
      script.onload = loadChart;
      document.body.appendChild(script);
    } else {
      loadChart();
    }

    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, []);

  return (
    <div style={{ height: 380, position: 'relative', width: '100%' }}>
      <canvas ref={canvasRef} />
    </div>
  );
}

/* ── Student row card ── */
function StudentCard({ student, idx }) {
  const style = getCompanyStyle(student.company);
  const initials = student.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px 18px',
      background: idx % 2 === 0 ? '#fff' : '#f8fafc',
      borderBottom: '1px solid rgba(10,22,40,0.06)',
      transition: 'background 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#f0f6ff'}
      onMouseLeave={e => e.currentTarget.style.background = idx % 2 === 0 ? '#fff' : '#f8fafc'}
    >
      {/* Avatar */}
      <div style={{
        width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
        background: `linear-gradient(135deg,#0c2340,#1a3a6b)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.72rem', fontWeight: 800, color: '#ffcc00',
      }}>{initials}</div>

      {/* Name + batch */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#0c2340', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {student.name}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, marginTop: 2 }}>
          {student.batch}
        </div>
      </div>

      {/* Company badge */}
      <div style={{
        background: style.bg, color: style.text,
        padding: '5px 12px', borderRadius: 20,
        fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', fontWeight: 800,
        letterSpacing: '0.3px', flexShrink: 0, maxWidth: 160,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        textAlign: 'center',
      }}>
        {student.company}
      </div>

      {/* Designation */}
      {student.designation && (
        <div style={{
          background: '#f0f6ff', border: '1.5px solid rgba(12,35,64,0.12)',
          color: '#0c2340', padding: '4px 10px', borderRadius: 8,
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.68rem', fontWeight: 700,
          flexShrink: 0, display: 'none',
        }} className="ps-desg">
          {student.designation}
        </div>
      )}
    </div>
  );
}

/* ── Data table section ── */
function PlacementTable({ data, year }) {
  const [search, setSearch] = useState('');
  const [compFilter, setCompFilter] = useState('ALL');
  const [batchFilter, setBatchFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState('list'); // list | grid

  const companies = useMemo(() => ['ALL', ...new Set(data.map(d => d.company))].sort(), [data]);
  const batches   = useMemo(() => ['ALL', ...new Set(data.map(d => d.batch))].sort(), [data]);

  const filtered = useMemo(() => data.filter(d => {
    const q = search.toLowerCase();
    const matchQ = !q || d.name.toLowerCase().includes(q) || d.company.toLowerCase().includes(q) || d.batch.toLowerCase().includes(q);
    const matchC = compFilter === 'ALL' || d.company === compFilter;
    const matchB = batchFilter === 'ALL' || d.batch === batchFilter;
    return matchQ && matchC && matchB;
  }), [data, search, compFilter, batchFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => { setPage(1); }, [search, compFilter, batchFilter]);

  // Company distribution
  const compDist = useMemo(() => {
    const counts = {};
    filtered.forEach(d => { counts[d.company] = (counts[d.company] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [filtered]);

  return (
    <div>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Total Placed', val: data.length, icon: 'fa-users' },
          { label: 'Companies',    val: new Set(data.map(d => d.company)).size, icon: 'fa-building' },
          { label: 'Batches',      val: new Set(data.map(d => d.batch)).size, icon: 'fa-graduation-cap' },
          { label: 'Showing',      val: filtered.length, icon: 'fa-filter' },
        ].map((s, i) => (
          <div key={i} style={{
            background: i === 0 ? 'linear-gradient(135deg,#0c2340,#1a3a6b)' : '#fff',
            border: '1px solid rgba(10,22,40,0.07)',
            borderRadius: 14, padding: '16px 18px',
            boxShadow: '0 2px 12px rgba(10,22,40,0.07)',
          }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.5rem', fontWeight: 900, color: i === 0 ? '#ffcc00' : '#0c2340', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.7rem', fontWeight: 600, color: i === 0 ? 'rgba(255,255,255,0.6)' : '#4a6080', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{
          flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: 10,
          background: '#fff', border: '1.5px solid rgba(10,22,40,0.1)', borderRadius: 12, padding: '0 14px',
        }}>
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#94a3b8', fontSize: '0.85rem' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search name, company, batch…"
            style={{ flex: 1, border: 'none', outline: 'none', padding: '12px 0', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.85rem', background: 'transparent', color: '#0c2340' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '0.75rem' }}>✕</button>
          )}
        </div>
        <select
          value={compFilter} onChange={e => setCompFilter(e.target.value)}
          style={{
            flex: '0 0 auto', border: '1.5px solid rgba(10,22,40,0.1)', borderRadius: 12,
            padding: '10px 14px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.82rem',
            color: '#0c2340', background: '#fff', outline: 'none', cursor: 'pointer',
          }}
        >
          {companies.map(c => <option key={c} value={c}>{c === 'ALL' ? '🏢 All Companies' : c}</option>)}
        </select>
        <select
          value={batchFilter} onChange={e => setBatchFilter(e.target.value)}
          style={{
            flex: '0 0 auto', border: '1.5px solid rgba(10,22,40,0.1)', borderRadius: 12,
            padding: '10px 14px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.82rem',
            color: '#0c2340', background: '#fff', outline: 'none', cursor: 'pointer',
          }}
        >
          {batches.map(b => <option key={b} value={b}>{b === 'ALL' ? '🎓 All Batches' : b}</option>)}
        </select>
      </div>

      {/* Company distribution chips */}
      {compDist.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {compDist.map(([comp, count]) => {
            const s = getCompanyStyle(comp);
            return (
              <button
                key={comp}
                onClick={() => setCompFilter(compFilter === comp ? 'ALL' : comp)}
                style={{
                  background: compFilter === comp ? s.bg : `${s.bg}18`,
                  color: compFilter === comp ? s.text : s.bg,
                  border: `1.5px solid ${s.bg}40`,
                  borderRadius: 20, padding: '5px 12px',
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.72rem', fontWeight: 800,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                  transition: 'all 0.2s',
                }}
              >
                {comp} <span style={{ opacity: 0.75 }}>({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* List */}
      <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid rgba(10,22,40,0.08)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(10,22,40,0.07)' }}>
        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '12px 18px',
          background: 'linear-gradient(135deg,#0c2340,#1a3a6b)',
        }}>
          <div style={{ width: 38, flexShrink: 0 }} />
          <div style={{ flex: 1, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.72rem', fontWeight: 800, color: '#ffcc00', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Student Name · Batch</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.72rem', fontWeight: 800, color: '#ffcc00', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Company</div>
        </div>

        {paged.length === 0 ? (
          <div style={{ padding: '48px 20px', textAlign: 'center' }}>
            <i className="fa-solid fa-search" style={{ fontSize: '2rem', color: '#cbd5e1', display: 'block', marginBottom: 12 }} />
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>No results found</div>
          </div>
        ) : (
          paged.map((s, i) => <StudentCard key={i} student={s} idx={i} />)
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{
              background: page === 1 ? '#f0f4f8' : '#0c2340', color: page === 1 ? '#94a3b8' : '#ffcc00',
              border: 'none', borderRadius: 10, padding: '8px 16px',
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: page === 1 ? 'default' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            ← Prev
          </button>
          {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
            let p;
            if (totalPages <= 7) p = i + 1;
            else if (page <= 4) p = i + 1;
            else if (page >= totalPages - 3) p = totalPages - 6 + i;
            else p = page - 3 + i;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                style={{
                  background: page === p ? '#0c2340' : '#fff',
                  color: page === p ? '#ffcc00' : '#0c2340',
                  border: `1.5px solid ${page === p ? '#0c2340' : 'rgba(12,35,64,0.15)'}`,
                  borderRadius: 10, padding: '8px 14px', minWidth: 38,
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >{p}</button>
            );
          })}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            style={{
              background: page === totalPages ? '#f0f4f8' : '#0c2340', color: page === totalPages ? '#94a3b8' : '#ffcc00',
              border: 'none', borderRadius: 10, padding: '8px 16px',
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.8rem', fontWeight: 700, cursor: page === totalPages ? 'default' : 'pointer',
            }}
          >
            Next →
          </button>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
            Page {page} of {totalPages} · {filtered.length} records
          </span>
        </div>
      )}
    </div>
  );
}

/* ── Main page ── */
export default function PlacementStatistics() {
  useReveal();
  const [activeYear, setActiveYear] = useState('2025');
  const activeTab = YEAR_TABS.find(t => t.id === activeYear);
  const contentRef = useRef(null);

  const handleYearSwitch = (id) => {
    setActiveYear(id);
    setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    @keyframes psIn{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes psShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    .rv{opacity:0;transform:translateY(24px);transition:opacity 0.5s ease,transform 0.5s ease;}
    .rv.visible{opacity:1;transform:none;}
    *{box-sizing:border-box;}
    body{margin:0;font-family:'Plus Jakarta Sans',sans-serif;}
    .ps-page{background:#f0f4f8;min-height:100vh;}
    .ps-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      min-height:320px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;
    }
    .ps-hero-content{position:relative;z-index:2;padding:68px 5% 52px;}
    .ps-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:18px;}
    .ps-hero-h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(2rem,5vw,3.4rem);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-1.5px;margin-bottom:14px;}
    .ps-hero-h1 em{font-style:normal;color:#ffcc00;}
    .ps-hero-sub{color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;max-width:520px;margin-bottom:28px;}
    .ps-wave{height:56px;margin-top:-1px;}
    .ps-wave svg{width:100%;height:100%;display:block;}
    .ps-main{max-width:1200px;margin:0 auto;padding:0 4% 80px;}
    .ps-chart-card{background:#fff;border-radius:22px;padding:32px;box-shadow:0 4px 24px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);margin-bottom:36px;}
    .ps-chart-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.1rem;font-weight:900;color:#0c2340;margin-bottom:4px;}
    .ps-chart-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-bottom:24px;}
    .ps-year-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;}
    .ps-year-tab{
      padding:10px 20px;border-radius:12px;border:1.5px solid rgba(12,35,64,0.12);
      background:#fff;color:#0c2340;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.82rem;font-weight:800;cursor:pointer;transition:all 0.25s;
    }
    .ps-year-tab.active{background:#0c2340;color:#ffcc00;border-color:#0c2340;box-shadow:0 6px 20px rgba(12,35,64,0.28);}
    .ps-year-tab:not(.active):hover{background:#f0f4f8;}
    .ps-table-card{background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 4px 24px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);}
    .ps-table-header{background:linear-gradient(135deg,#0c2340,#1a3a6b);padding:24px 28px;position:relative;overflow:hidden;}
    .ps-table-header::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);pointer-events:none;}
    .ps-table-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.2rem;font-weight:900;color:#fff;position:relative;z-index:1;}
    .ps-table-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;margin-top:3px;}
    .ps-table-body{padding:24px;}
    @media(max-width:600px){
      .ps-hero-content{padding:48px 4% 36px;}
      .ps-hero-h1{font-size:2rem;letter-spacing:-1px;}
      .ps-year-tab{padding:8px 14px;font-size:0.76rem;}
      .ps-table-body{padding:16px 12px;}
    }
  `;

  const totalAllTime = DATA_2025.length + DATA_2024.length + DATA_2023.length + DATA_2022.length + DATA_2020_21.length;

  return (
    <>
      <style>{css}</style>
      <div className="ps-page">

        {/* HERO */}
        <div className="ps-hero">
          <div className="ps-hero-content">
            <div className="ps-hero-badge"><i className="fa-solid fa-chart-bar" />Placement Statistics · 2020–2025</div>
            <h1 className="ps-hero-h1">Our <em>Placement</em><br />Success Story</h1>
            <p className="ps-hero-sub">Complete year-wise placement data for Creative Techno College — {totalAllTime}+ students placed in leading companies across India.</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[
                { val: `${totalAllTime}+`, label: 'Total Placements' },
                { val: '20+',             label: 'Companies' },
                { val: '6',               label: 'Years Data' },
                { val: '100%',            label: 'Commitment' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.6rem', fontWeight: 900, color: '#ffcc00', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ps-wave"><svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z" fill="#f0f4f8" /></svg></div>

        <div className="ps-main">

          {/* CHART */}
          <div className="ps-chart-card rv">
            <div className="ps-chart-title">Year-wise Hiring Distribution (2020–2025)</div>
            <div className="ps-chart-sub">Stacked bar chart showing hiring counts by company across all years</div>
            <HiringChart />
          </div>

          {/* YEAR TABS */}
          <div className="ps-year-tabs rv" style={{ transitionDelay: '0.1s' }}>
            {YEAR_TABS.map(tab => (
              <button
                key={tab.id}
                className={`ps-year-tab${activeYear === tab.id ? ' active' : ''}`}
                onClick={() => handleYearSwitch(tab.id)}
              >
                {tab.label} <span style={{ opacity: 0.6, fontSize: '0.75em', marginLeft: 4 }}>({tab.data.length})</span>
              </button>
            ))}
          </div>

          {/* TABLE CARD */}
          <div className="ps-table-card rv" style={{ transitionDelay: '0.15s' }} ref={contentRef}>
            <div className="ps-table-header">
              <div className="ps-table-title">Placement Report — {activeTab?.label}</div>
              <div className="ps-table-sub">{activeTab?.data.length} records · Searchable & filterable by company and batch</div>
            </div>
            <div className="ps-table-body">
              {activeTab && <PlacementTable data={activeTab.data} year={activeYear} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}