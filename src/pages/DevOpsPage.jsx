import { useState, useMemo } from 'react';
import { ALL_QUESTIONS, EXAM_CONFIGS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './AIMLPage.module.css';

const sections = [
    { id: 'all', label: 'Full DevOps Quiz', icon: '🔧', color: '#f97316', desc: 'All DevOps topics combined — complete interview simulation', filter: q => q.topic === 'DevOps Engineer' },
    ...EXAM_CONFIGS.DEVOPS.sections,
    { id: 'all-demo', label: 'REAL TEST DEMO', icon: '🚀', color: '#f43f5e', desc: '80 questions in 50 mins: 40 DevOps + 15 reasoning + 15 aptitude + 10 verbal mix.', filter: q => q.topic === 'DevOps Engineer' },
];

export default function DevOpsPage() {
    const [active, setActive] = useState(null);

    const questions = useMemo(() => {
        if (!active) return [];
        if (active.id === 'all-demo') {
            const topicQs = ALL_QUESTIONS.filter(EXAM_CONFIGS.DEVOPS_DEMO.topicFilter).sort(() => 0.5 - Math.random()).slice(0, 40);
            const reasonQs = ALL_QUESTIONS.filter(EXAM_CONFIGS.DEVOPS_DEMO.reasoningFilter).sort(() => 0.5 - Math.random()).slice(0, 15);
            const aptQs = ALL_QUESTIONS.filter(EXAM_CONFIGS.DEVOPS_DEMO.numericalFilter).sort(() => 0.5 - Math.random()).slice(0, 15);
            const verbalQs = ALL_QUESTIONS.filter(EXAM_CONFIGS.DEVOPS_DEMO.verbalFilter).sort(() => 0.5 - Math.random()).slice(0, 10);
            return [...topicQs, ...reasonQs, ...aptQs, ...verbalQs].sort(() => 0.5 - Math.random());
        }
        return ALL_QUESTIONS.filter(active.filter).sort(() => 0.5 - Math.random()).slice(0, active.id === 'all' ? 100 : 20);
    }, [active]);

    if (active?.id === 'all-demo') {
        return (
            <div>
                <div className={styles.backBar}>
                    <button className={styles.backBtn} onClick={() => setActive(null)}>← Exit Demo</button>
                    <span style={{ color: '#f43f5e', fontWeight: 700 }}>🚀 REAL TEST DEMO</span>
                </div>
                <QuizEngine
                    questions={questions}
                    title="DevOps — REAL TEST DEMO"
                    color="#f43f5e"
                    timePerQ={50 * 60}
                    enableTimer={true}
                    timerMode="section"
                    limit={80}
                />
            </div>
        );
    }

    if (active) {
        return (
            <div>
                <div className={styles.backBar}>
                    <button className={styles.backBtn} onClick={() => setActive(null)}>← Back</button>
                    <span style={{ color: active.color, fontWeight: 700 }}>{active.icon} {active.label}</span>
                </div>
                <QuizEngine questions={questions} title={`DevOps Engineer — ${active.label}`} color={active.color} timePerQ={99999} enableTimer={false} />
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge} style={{ borderColor: 'rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>🔧 DevOps Engineer Interview Preparation</span>
                <h1 className={styles.title}>Interview-Ready <span style={{ background: 'linear-gradient(135deg,#f97316,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DevOps</span></h1>
                <p className={styles.sub}>
                    Practice all core DevOps interview topics. No timer — focus on understanding.
                    Covers Git, CI/CD, Docker, Kubernetes, IaC, Monitoring, Linux, Cloud, and Security.
                </p>
            </div>
            <div className={styles.grid}>
                {sections.map(sec => {
                    const count = ALL_QUESTIONS.filter(sec.filter).length;
                    return (
                        <div key={sec.id} className={`${styles.card} ${sec.id === 'all' ? styles.featured : ''}`}
                            style={{ '--sc': sec.color }} onClick={() => setActive(sec)}>
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
