import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './AIMLPage.module.css';

const sections = [
    { id: 'all', label: 'Full SAP Quiz', icon: '💼', color: '#f0a500', desc: 'All SAP modules combined — complete interview simulation', filter: q => q.topic === 'SAP Engineer' },
    { id: 'sap-fund', label: 'SAP Fundamentals', icon: '📘', color: '#f0a500', desc: 'SAP overview, clients, Fiori UX, Solution Manager, S/4HANA overview', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP Fundamentals' },
    { id: 'abap', label: 'ABAP Programming', icon: '💻', color: '#e53e3e', desc: 'ABAP syntax, internal tables, SELECT, BAPIs, CDS views, Enhancement Framework', filter: q => q.topic === 'SAP Engineer' && q.section === 'ABAP' },
    { id: 'mm', label: 'SAP MM', icon: '📦', color: '#10b981', desc: 'Purchase Orders, Material Master, P2P process, MIGO, MRP', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP MM' },
    { id: 'sd', label: 'SAP SD', icon: '🛒', color: '#6366f1', desc: 'Order-to-Cash, Sales Orders, Delivery, Billing, Pricing', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP SD' },
    { id: 'fi', label: 'SAP FI', icon: '💰', color: '#f59e0b', desc: 'Chart of Accounts, Company Code, G/L postings, New G/L', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP FI' },
    { id: 'co', label: 'SAP CO', icon: '📊', color: '#38bdf8', desc: 'Cost Centers, Internal Orders, Profit Centers, controlling', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP CO' },
    { id: 'basis', label: 'SAP Basis', icon: '⚙️', color: '#8b5cf6', desc: 'System landscapes, TMS, SM37 background jobs, HANA architecture', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP Basis' },
    { id: 'integration', label: 'SAP Integration', icon: '🔗', color: '#14b8a6', desc: 'Integration Suite (CPI), RFC, IDocs, ALE, EDI', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP Integration' },
    { id: 's4', label: 'SAP S/4HANA', icon: '🚀', color: '#61dafb', desc: 'S/4HANA simplifications, Universal Journal, SAP BTP', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP S/4HANA' },
    { id: 'security', label: 'SAP Security', icon: '🔒', color: '#ef4444', desc: 'Authorization Objects, SU01, PFCG roles, Segregation of Duties', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP Security' },
    { id: 'hcm', label: 'SAP HCM', icon: '👥', color: '#f97316', desc: 'HCM overview, Infotypes, SuccessFactors cloud HCM', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP HCM' },
    { id: 'analytics', label: 'SAP Analytics', icon: '📈', color: '#c084fc', desc: 'SAP Analytics Cloud (SAC), SAP BW data warehouse', filter: q => q.topic === 'SAP Engineer' && q.section === 'SAP Analytics' },
];

export default function SAPPage() {
    const [active, setActive] = useState(null);

    if (active) {
        const sec = sections.find(s => s.id === active);
        const qs = ALL_QUESTIONS.filter(sec.filter);
        return (
            <div>
                <div className={styles.backBar}>
                    <button className={styles.backBtn} onClick={() => setActive(null)}>← Back</button>
                    <span style={{ color: sec.color, fontWeight: 700 }}>{sec.icon} {sec.label}</span>
                </div>
                <QuizEngine questions={qs} title={`SAP Engineer — ${sec.label}`} color={sec.color} timePerQ={99999} enableTimer={false} />
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge} style={{ borderColor: 'rgba(240,165,0,0.4)', background: 'rgba(240,165,0,0.1)', color: '#f0a500' }}>💼 SAP Engineer Interview Preparation</span>
                <h1 className={styles.title}>Interview-Ready <span style={{ background: 'linear-gradient(135deg,#f0a500,#e53e3e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SAP</span></h1>
                <p className={styles.sub}>
                    Practice all 12 SAP modules in one place. No timer — focus on understanding.
                    Covers ABAP, MM, SD, FI, CO, Basis, Integration, S/4HANA, Security, and HCM.
                </p>
            </div>
            <div className={styles.grid}>
                {sections.map(sec => {
                    const count = ALL_QUESTIONS.filter(sec.filter).length;
                    return (
                        <div key={sec.id} className={`${styles.card} ${sec.id === 'all' ? styles.featured : ''}`}
                            style={{ '--sc': sec.color }} onClick={() => setActive(sec.id)}>
                            <span className={styles.icon}>{sec.icon}</span>
                            <h3 className={styles.cardTitle}>{sec.label}</h3>
                            <p className={styles.cardDesc}>{sec.desc}</p>
                            <div className={styles.cardFoot}>
                                <span className={styles.count}>{count} questions</span>
                                <button className={styles.go} style={{ color: sec.color, borderColor: sec.color + '44' }}>Practice →</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
