import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* API endpoint — works on Hostinger after deployment */
const SUBMIT_URL = `${import.meta.env.BASE_URL}Admission/submit.php`;

const STEPS = [
    { id: 1, label: 'Personal Info', icon: 'fa-solid fa-user' },
    { id: 2, label: 'Academic Info', icon: 'fa-solid fa-graduation-cap' },
    { id: 3, label: 'Course & Details', icon: 'fa-solid fa-book-open' },
    { id: 4, label: 'Review & Submit', icon: 'fa-solid fa-paper-plane' },
];

function ProgressBar({ step }) {
    return (
        <div className="af-progress">
            {STEPS.map((s, i) => (
                <div key={s.id} className={`af-step-node ${step >= s.id ? 'done' : ''} ${step === s.id ? 'active' : ''}`}>
                    <div className="af-node-circle">
                        {step > s.id
                            ? <i className="fa-solid fa-check"></i>
                            : <i className={s.icon}></i>}
                    </div>
                    <span className="af-node-label">{s.label}</span>
                    {i < STEPS.length - 1 && (
                        <div className={`af-node-line ${step > s.id ? 'done' : ''}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

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

export default function AdmissionApply() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
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

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [step]);

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
    const clrErr = k => setErrors(e => { const ne = { ...e }; delete ne[k]; return ne; });

    /* ── Validation per step ── */
    function validate(s) {
        const e = {};
        if (s === 1) {
            if (!form.fullName.trim()) e.fullName = 'Full name is required';
            if (!form.dob) e.dob = 'Date of birth is required';
            if (!form.gender) e.gender = 'Please select your gender';
            if (!form.phone.match(/^\d{10}$/)) e.phone = 'Enter a valid 10-digit mobile number';
        }
        if (s === 2) {
            if (!form.school10.trim()) e.school10 = 'Please enter your 10th school name';
            if (!form.pct10) e.pct10 = 'Enter 10th percentage / grade';
            if (!form.school12.trim()) e.school12 = 'Please enter your +2 school name';
            if (!form.pct12) e.pct12 = 'Enter +2 percentage / grade';
            if (!form.stream) e.stream = 'Please select your +2 stream';
            if (!form.yearPass) e.yearPass = 'Enter your year of passing +2';
        }
        if (s === 3) {
            if (!form.course) e.course = 'Please select a course';
            if (!form.address.trim()) e.address = 'Address is required';
            if (!form.district.trim()) e.district = 'District is required';
            if (!form.pincode.match(/^\d{6}$/)) e.pincode = 'Enter a valid 6-digit pin code';
        }
        return e;
    }

    function next() {
        const e = validate(step);
        if (Object.keys(e).length) { setErrors(e); return; }
        setErrors({});
        setStep(s => s + 1);
    }
    function back() { setStep(s => s - 1); setErrors({}); }

    async function submit() {
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
            } else {
                setSubmitError(json.error || 'Submission failed. Please try again.');
            }
        } catch {
            setSubmitError('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
    }

    /* ── STEP RENDERERS ── */
    const Input = ({ name, type = 'text', placeholder, ...rest }) => (
        <input
            className={`af-input ${errors[name] ? 'af-input-err' : ''}`}
            type={type}
            value={form[name]}
            placeholder={placeholder}
            onChange={e => { set(name, e.target.value); clrErr(name); }}
            {...rest}
        />
    );
    const Select = ({ name, children }) => (
        <select
            className={`af-input ${errors[name] ? 'af-input-err' : ''}`}
            value={form[name]}
            onChange={e => { set(name, e.target.value); clrErr(name); }}
        >
            {children}
        </select>
    );

    if (submitted) return <SuccessScreen name={form.fullName} course={form.course} appId={appId} navigate={navigate} />;

    return (
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
                    <ProgressBar step={step} />

                    {/* ── Step 1: Personal Info ── */}
                    {step === 1 && (
                        <div className="af-form-section">
                            <h2 className="af-form-title"><i className="fa-solid fa-user"></i> Personal Information</h2>
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
                    )}

                    {/* ── Step 2: Academic Info ── */}
                    {step === 2 && (
                        <div className="af-form-section">
                            <h2 className="af-form-title"><i className="fa-solid fa-graduation-cap"></i> Academic Details</h2>
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
                                        {[2025, 2024, 2023, 2022, 2021, 2020, 2019].map(y => <option key={y}>{y}</option>)}
                                    </Select>
                                </Field>
                            </div>
                        </div>
                    )}

                    {/* ── Step 3: Course & Address ── */}
                    {step === 3 && (
                        <div className="af-form-section">
                            <h2 className="af-form-title"><i className="fa-solid fa-book-open"></i> Course & Contact Details</h2>
                            <Field label="Course Applied For *" error={errors.course}>
                                <div className="af-course-pick">
                                    {[
                                        { v: 'BBA', label: 'BBA', sub: 'Bachelor of Business Administration', color: '#f5c518' },
                                        { v: 'BCA', label: 'BCA', sub: 'Bachelor of Computer Applications', color: '#00d4ff' },
                                        { v: 'B.Sc CS(H)', label: 'B.Sc CS(H)', sub: 'Computer Science (Honours)', color: '#7b61ff' },
                                        { v: 'B.Sc DS', label: 'B.Sc DS', sub: 'Data Science', color: '#ff6b6b' },
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
                    )}

                    {/* ── Step 4: Review ── */}
                    {step === 4 && (
                        <div className="af-form-section">
                            <h2 className="af-form-title"><i className="fa-solid fa-eye"></i> Review Your Application</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', marginBottom: '24px' }}>
                                Please review your information carefully. Clicking <strong>Submit Application</strong> will securely save your details directly to the database.
                            </p>
                            <div className="af-review-grid">
                                <ReviewBlock title="Personal Information" icon="fa-solid fa-user" rows={[
                                    ['Full Name', form.fullName],
                                    ['Date of Birth', form.dob],
                                    ['Gender', form.gender],
                                    ['Category', form.category || 'General'],
                                    ['Mobile', form.phone],
                                    ['Email', form.email || '—'],
                                ]} />
                                <ReviewBlock title="Academic Details" icon="fa-solid fa-graduation-cap" rows={[
                                    ['10th School', form.school10],
                                    ['10th Marks', form.pct10],
                                    ['+2 School', form.school12],
                                    ['+2 Stream', form.stream],
                                    ['+2 Marks', form.pct12],
                                    ['Year of Pass', form.yearPass],
                                ]} />
                                <ReviewBlock title="Course & Address" icon="fa-solid fa-book-open" rows={[
                                    ['Course', form.course],
                                    ['Address', form.address],
                                    ['District', form.district],
                                    ['State', form.state],
                                    ['PIN Code', form.pincode],
                                    ['Has PC/Laptop', form.havePC || '—'],
                                    ['Reference', form.reference || '—'],
                                ]} />
                            </div>
                            <div className="af-wa-notice" style={{ background: 'rgba(45,125,210,0.08)', borderColor: 'rgba(45,125,210,0.25)' }}>
                                <i className="fa-solid fa-database" style={{ color: 'var(--cyan)' }}></i>
                                <p>Your application will be <strong>securely stored</strong> in the college database. The admission team will contact you on your registered mobile number for document verification.</p>
                            </div>
                        </div>
                    )}

                    {/* ── Navigation ── */}
                    <div className="af-nav">
                        {step > 1
                            ? <button className="af-btn-back" onClick={back}><i className="fa-solid fa-arrow-left"></i> Back</button>
                            : <Link to="/admission" className="af-btn-back"><i className="fa-solid fa-arrow-left"></i> Admission Info</Link>
                        }
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <span className="af-step-count">Step {step} of {STEPS.length}</span>
                            {step < 4
                                ? <button className="af-btn-next" onClick={next}>Next <i className="fa-solid fa-arrow-right"></i></button>
                                : <button
                                className="af-btn-submit"
                                onClick={submit}
                                disabled={submitting}
                                style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
                            >
                                {submitting
                                    ? <><i className="fa-solid fa-spinner fa-spin"></i> Submitting…</>
                                    : <><i className="fa-solid fa-paper-plane"></i> Submit Application</>}
                            </button>
                        }
                    </div>
                    {submitError && (
                        <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '10px', textAlign: 'right', fontFamily: 'var(--font-head)' }}>
                            <i className="fa-solid fa-circle-exclamation"></i> {submitError}
                        </p>
                    )}
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
