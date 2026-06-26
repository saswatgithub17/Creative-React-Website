import { useState, useEffect, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FormContext = createContext(null);
/* API endpoint — environment aware (points to production DB for local dev testing) */
const SUBMIT_URL = import.meta.env.DEV
    ? 'https://creativecollege.in/CTC%20NEW%20REACT%20WEBSITE/Admission/submit.php'
    : `${import.meta.env.BASE_URL}Admission/submit.php`;

const STEPS = []; // progress bar removed

function Field({ label, icon, error, children }) {
    return (
        <div className="af-field">
            <label className="af-label">
                {icon && <i className={icon}></i>}
                {label}
            </label>
            {children}
            {error && <span className="af-error"><i className="fa-solid fa-circle-exclamation"></i> {error}</span>}
        </div>
    );
}

function Input({ name, type = 'text', placeholder, ...rest }) {
    const { form, set, errors, clrErr } = useContext(FormContext);
    return (
        <input
            className={`af-input ${errors[name] ? 'af-input-err' : ''}`}
            type={type}
            value={form[name]}
            placeholder={placeholder}
            onChange={e => { set(name, e.target.value); clrErr(name); }}
            name={name}
            {...rest}
        />
    );
}

function Select({ name, children }) {
    const { form, set, errors, clrErr } = useContext(FormContext);
    return (
        <select
            className={`af-input ${errors[name] ? 'af-input-err' : ''}`}
            value={form[name]}
            onChange={e => { set(name, e.target.value); clrErr(name); }}
            name={name}
        >
            {children}
        </select>
    );
}

export default function AdmissionApply() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [appId, setAppId] = useState(null);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        // Step 1
        fullName: '',
        dob: '',
        gender: '',
        category: '',
        phone: '',
        email: '',
        // Step 2
        school10: '',
        pct10: '',
        school12: '',
        stream: '',
        pct12: '',
        yearPass: '',
        // Step 3
        course: '',
        address: '',
        district: '',
        state: 'Odisha',
        pincode: '',
        havePC: '',
        reference: '',
    });

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
    const clrErr = k => setErrors(e => { const ne = { ...e }; delete ne[k]; return ne; });

    /* ── Comprehensive Validation ── */
    function validateAll() {
        const e = {};
        
        // Personal Info
        if (!form.fullName.trim()) e.fullName = 'Full name is required';
        if (!form.dob) e.dob = 'Date of birth is required';
        if (!form.gender) e.gender = 'Please select your gender';
        if (!form.phone.match(/^\d{10}$/)) e.phone = 'Enter a valid 10-digit mobile number';
        
        // Academic Info
        if (!form.school10.trim()) e.school10 = 'Please enter your 10th school name';
        if (!form.pct10) e.pct10 = 'Enter 10th percentage / grade';
        if (!form.school12.trim()) e.school12 = 'Please enter your +2 school name';
        if (!form.pct12) e.pct12 = 'Enter +2 percentage / grade';
        if (!form.stream) e.stream = 'Please select your +2 stream';
        if (!form.yearPass) e.yearPass = 'Enter your year of passing +2';
        
        // Course & Details
        if (!form.course) e.course = 'Please select a course';
        if (!form.address.trim()) e.address = 'Address is required';
        if (!form.district.trim()) e.district = 'District is required';
        if (!form.pincode.match(/^\d{6}$/)) e.pincode = 'Enter a valid 6-digit pin code';
        
        return e;
    }

    async function submit() {
        const e = validateAll();
        if (Object.keys(e).length) {
            setErrors(e);
            const firstErrorField = Object.keys(e)[0];
            const element = document.getElementsByName(firstErrorField)[0] || document.querySelector(`[name="${firstErrorField}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus({ preventScroll: true });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }
        setErrors({});
        setSubmitting(true);
        setSubmitError('');
        try {
            const res  = await fetch(SUBMIT_URL, {
                method : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body   : JSON.stringify(form),
            });
            const json = await res.json();
            if (json.success) {
                setAppId(json.application_id);
                setSubmitted(true);

                // Track successful lead submission in Google Tag Manager / GA4
                if (typeof window !== 'undefined') {
                    // Push custom event to dataLayer so GTM can fire conversion tags on success only
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'lead_form_submitted',
                        form_type: 'admission_apply',
                        application_id: json.application_id,
                        course: form.course
                    });

                    // Direct gtag custom lead event
                    if (typeof window.gtag === 'function') {
                        window.gtag('event', 'generate_lead', {
                            'event_category': 'engagement',
                            'event_label': 'Admission Form Submit Success',
                            'value': 1.0,
                            'currency': 'INR',
                            'course': form.course,
                            'lead_id': json.application_id
                        });

                        // Direct Google Ads conversion tracking event
                        window.gtag('event', 'conversion', {
                            'send_to': 'AW-16982895656/MYlTCPvQyLEcEKjYiaI_'
                        });
                    }
                    console.log('Lead form successfully saved in database. Conversion events dispatched.');
                }
            } else {
                setSubmitError(json.error || 'Submission failed. Please try again.');
            }
        } catch {
            setSubmitError('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
    }

    if (submitted) return <SuccessScreen name={form.fullName} course={form.course} appId={appId} navigate={navigate} />;

    return (
        <FormContext.Provider value={{ form, set, errors, clrErr }}>
        <div className="af-page">
            {/* ── Page Hero ── */}
            <div className="af-hero">
                <div className="af-hero-glow" />
                <div style={{ position: 'relative' }}>
                    <span className="section-label" style={{ color: 'var(--cyan)' }}>Online Application</span>
                    <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', margin: '12px 0 10px' }}>
                        Apply for Admission <span style={{ color: 'var(--gold)' }}>2026–27</span>
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', letterSpacing: '0.04em' }}>
                        Creative Techno College, Angul · AICTE Approved · Utkal University Affiliated
                    </p>
                </div>
            </div>

            {/* ── Form Card ── */}
            <div className="af-body">
                <div className="af-card">
                    {/* ── Section 1: Personal Info ── */}
                    <div className="af-form-section">
                        <h2 className="af-form-title"><i className="fa-solid fa-user"></i> 1. Personal Information</h2>
                        <div className="af-grid-2">
                            <Field label="Full Name *" icon="fa-solid fa-signature" error={errors.fullName}>
                                <Input name="fullName" placeholder="As per 10th certificate" />
                            </Field>
                            <Field label="Date of Birth *" error={errors.dob}>
                                <Input name="dob" type="date" />
                            </Field>
                            <Field label="Gender *" error={errors.gender}>
                                <Select name="gender">
                                    <option value="">Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Select>
                            </Field>
                            <Field label="Category">
                                <Select name="category">
                                    <option value="">Select Category</option>
                                    <option>General</option>
                                    <option>OBC</option>
                                    <option>SC</option>
                                    <option>ST</option>
                                    <option>PwD</option>
                                </Select>
                            </Field>
                            <Field label="Mobile Number *" icon="fa-solid fa-phone" error={errors.phone}>
                                <Input name="phone" type="tel" placeholder="10-digit mobile number" maxLength={10} />
                            </Field>
                            <Field label="Email Address" icon="fa-solid fa-envelope">
                                <Input name="email" type="email" placeholder="Optional" />
                            </Field>
                        </div>
                    </div>

                    <div style={{ height: '1px', background: 'rgba(10,22,40,0.08)', margin: '36px 0' }} />

                    {/* ── Section 2: Academic Details ── */}
                    <div className="af-form-section">
                        <h2 className="af-form-title"><i className="fa-solid fa-graduation-cap"></i> 2. Academic Details</h2>
                        <p className="af-form-subtitle">10th Certificate Details</p>
                        <div className="af-grid-2">
                            <Field label="10th School / Board *" error={errors.school10}>
                                <Input name="school10" placeholder="School name" />
                            </Field>
                            <Field label="10th Percentage / CGPA *" error={errors.pct10}>
                                <Input name="pct10" placeholder="e.g. 78% or 7.8 CGPA" />
                            </Field>
                        </div>
                        <p className="af-form-subtitle" style={{ marginTop: '24px' }}>+2 / 12th / Diploma Details</p>
                        <div className="af-grid-2">
                            <Field label="+2 School / College / Board *" error={errors.school12}>
                                <Input name="school12" placeholder="School / college name" />
                            </Field>
                            <Field label="+2 Stream *" error={errors.stream}>
                                <Select name="stream">
                                    <option value="">Select Stream</option>
                                    <option>Science (PCM)</option>
                                    <option>Science (PCB)</option>
                                    <option>Commerce</option>
                                    <option>Arts / Humanities</option>
                                    <option>Vocational</option>
                                    <option>Diploma</option>
                                </Select>
                            </Field>
                            <Field label="+2 Percentage / CGPA *" error={errors.pct12}>
                                <Input name="pct12" placeholder="e.g. 65% or 6.5 CGPA" />
                            </Field>
                            <Field label="Year of Passing +2 *" error={errors.yearPass}>
                                <Select name="yearPass">
                                    <option value="">Select Year</option>
                                    {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019].map(y => <option key={y}>{y}</option>)}
                                </Select>
                            </Field>
                        </div>
                    </div>

                    <div style={{ height: '1px', background: 'rgba(10,22,40,0.08)', margin: '36px 0' }} />

                    {/* ── Section 3: Course & Address ── */}
                    <div className="af-form-section">
                        <h2 className="af-form-title"><i className="fa-solid fa-book-open"></i> 3. Course & Contact Details</h2>
                        <Field label="Course Applied For *" error={errors.course}>
                            <div className="af-course-pick">
                                {[
                                    { v: 'BBA', label: 'BBA', sub: 'Bachelor of Business Administration', color: '#f5c518' },
                                    { v: 'BCA', label: 'BCA', sub: 'Bachelor of Computer Applications', color: '#00d4ff' },
                                    { v: 'B.Sc CS(H)', label: 'B.Sc CS(H)', sub: 'Computer Science (Honours)', color: '#7b61ff' },
                                    { v: 'B.Sc DS', label: 'B.Sc DS', sub: 'Data Science', color: '#ff6b6b' },
                                    { v: 'MBA', label: 'MBA', sub: 'Master of Business Administration', color: '#ec4899' },
                                    { v: 'MCA', label: 'MCA', sub: 'Master of Computer Applications', color: '#06b6d4' },
                                ].map(c => (
                                    <label key={c.v} className={`af-course-tile ${form.course === c.v ? 'sel' : ''}`} style={{ '--tc': c.color }}>
                                        <input type="radio" name="course" value={c.v} checked={form.course === c.v} onChange={() => { set('course', c.v); clrErr('course'); }} />
                                        <strong>{c.label}</strong>
                                        <span>{c.sub}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.course && <span className="af-error"><i className="fa-solid fa-circle-exclamation"></i> {errors.course}</span>}
                        </Field>

                        <p className="af-form-subtitle" style={{ marginTop: '24px' }}>Permanent Address</p>
                        <div className="af-grid-2">
                            <Field label="Address *" error={errors.address}>
                                <textarea
                                    name="address"
                                    className={`af-input ${errors.address ? 'af-input-err' : ''}`}
                                    rows={3}
                                    placeholder="Street / Village / Ward"
                                    value={form.address}
                                    onChange={e => { set('address', e.target.value); clrErr('address'); }}
                                />
                            </Field>
                            <div>
                                <Field label="District *" error={errors.district}>
                                    <Input name="district" placeholder="e.g. Angul" />
                                </Field>
                                <Field label="State" style={{ marginTop: '12px' }}>
                                    <Input name="state" placeholder="State" />
                                </Field>
                            </div>
                            <Field label="PIN Code *" error={errors.pincode}>
                                <Input name="pincode" placeholder="6-digit pin" maxLength={6} />
                            </Field>
                            <Field label="Do you have a PC / Laptop at home?">
                                <Select name="havePC">
                                    <option value="">Select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </Field>
                            <Field label="How did you hear about us?">
                                <Select name="reference">
                                    <option value="">Select</option>
                                    <option>Friend / Family</option>
                                    <option>Social Media</option>
                                    <option>News / Newspaper</option>
                                    <option>School / Teacher</option>
                                    <option>Walk-in / Visit</option>
                                    <option>Other</option>
                                </Select>
                            </Field>
                        </div>
                    </div>

                    {/* ── Navigation ── */}
                    <div className="af-nav">
                        <Link to="/admission" className="af-btn-back">
                            <i className="fa-solid fa-arrow-left"></i> Back to Admission Info
                        </Link>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                            <button
                                className="af-btn-submit"
                                onClick={submit}
                                disabled={submitting}
                                style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
                            >
                                {submitting
                                    ? <><i className="fa-solid fa-spinner fa-spin"></i> Submitting…</>
                                    : <><i className="fa-solid fa-paper-plane"></i> Submit Application</>}
                            </button>
                            {submitError && (
                                <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '4px', textAlign: 'right', fontFamily: 'var(--font-head)' }}>
                                    <i className="fa-solid fa-circle-exclamation"></i> {submitError}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Side Info Panel */}
                <aside className="af-aside">
                    <div className="af-aside-card">
                        <h3><i className="fa-solid fa-circle-info"></i> Important Info</h3>
                        <ul>
                            <li>Admission is on a <strong>first-come, first-served</strong> basis.</li>
                            <li>Bring original documents on the day of admission.</li>
                            <li>Eligibility: 10+2 pass with min. <strong>45%</strong> marks.</li>
                            <li>For queries call: <strong>+91 9668844571</strong></li>
                        </ul>
                    </div>
                    <div className="af-aside-card af-aside-courses">
                        <h3><i className="fa-solid fa-table-list"></i> Available Seats</h3>
                        {[
                            { label: 'BBA', seats: 120, color: '#f5c518' },
                            { label: 'BCA', seats: 120, color: '#00d4ff' },
                            { label: 'B.Sc CS(H)', seats: 128, color: '#7b61ff' },
                            { label: 'B.Sc DS', seats: 30, color: '#ff6b6b' },
                            { label: 'MBA', seats: 60, color: '#ec4899' },
                            { label: 'MCA', seats: 60, color: '#06b6d4' },
                        ].map(c => (
                            <div key={c.label} className="af-seat-row">
                                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: c.color, display: 'inline-block', flexShrink: 0 }}></span>
                                <span className="af-seat-label">{c.label}</span>
                                <span className="af-seat-count">{c.seats} seats</span>
                            </div>
                        ))}
                    </div>
                    <div className="af-aside-card">
                        <h3><i className="fa-solid fa-location-dot"></i> Campus Address</h3>
                        <p>Baluakata, Saradhapur, Angul, Odisha — 759143</p>
                        <p style={{ marginTop: '8px' }}>City Office: Tamrit Colony, Angul</p>
                    </div>
                </aside>
            </div>
        </div>
        </FormContext.Provider>
    );
}

function ReviewBlock({ title, icon, rows }) {
    return (
        <div className="af-review-block">
            <div className="af-review-block-title"><i className={icon}></i> {title}</div>
            {rows.map(([k, v]) => (
                <div key={k} className="af-review-row">
                    <span className="af-review-key">{k}</span>
                    <span className="af-review-val">{v || '—'}</span>
                </div>
            ))}
        </div>
    );
}

function SuccessScreen({ name, course, appId, navigate }) {
    return (
        <div className="af-success-page">
            <div className="af-success-card">
                <div className="af-success-icon"><i className="fa-solid fa-circle-check"></i></div>
                <h2>Application Submitted!</h2>
                <p>Thank you, <strong>{name}</strong>! Your application for <strong>{course}</strong> has been received by Creative Techno College.</p>
                {appId && (
                    <p style={{ marginTop: '14px', fontSize: '0.88rem', fontFamily: 'var(--font-head)', color: 'var(--blue-light)' }}>
                        <i className="fa-solid fa-hashtag"></i> Application ID: <strong style={{ color: 'var(--gold)' }}>#{appId}</strong>
                    </p>
                )}
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                    Our team will contact you on <strong>{name.split(' ')[0]}'s</strong> registered mobile number for further steps. Please keep your documents ready.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
                    <button className="btn-primary" onClick={() => navigate('/admission')}>
                        <i className="fa-solid fa-arrow-left"></i> Back to Admission
                    </button>
                    <button className="btn-outline" onClick={() => navigate('/')}>
                        <i className="fa-solid fa-house"></i> Home
                    </button>
                </div>
            </div>
        </div>
    );
}
