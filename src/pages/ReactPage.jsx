import { useState, useMemo } from 'react';
import { ALL_QUESTIONS, EXAM_CONFIGS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './AIMLPage.module.css';

const sections = [
    { id: 'all', label: 'Full React Quiz', icon: '⚛️', color: '#61dafb', desc: 'All React topics combined — complete interview simulation', filter: q => q.topic === 'React Engineer' },
    { id: 'jsx', label: 'JSX & Fundamentals', icon: '📄', color: '#61dafb', desc: 'Virtual DOM, JSX syntax, className, fragments, expressions', filter: q => q.topic === 'React Engineer' && q.section === 'JSX & Fundamentals' },
    { id: 'state', label: 'State & Props', icon: '🔄', color: '#6366f1', desc: 'useState, props immutability, lifting state, defaultProps', filter: q => q.topic === 'React Engineer' && q.section === 'State & Props' },
    { id: 'hooks', label: 'Hooks', icon: '🪝', color: '#f59e0b', desc: 'useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer, Rules of Hooks', filter: q => q.topic === 'React Engineer' && q.section === 'Hooks' },
    { id: 'lifecycle', label: 'Component Lifecycle', icon: '♻️', color: '#10b981', desc: 'componentDidMount, componentWillUnmount, PureComponent, differences with hooks', filter: q => q.topic === 'React Engineer' && q.section === 'Component Lifecycle' },
    { id: 'stateMgmt', label: 'State Management', icon: '🗂️', color: '#ef4444', desc: 'Context API, Redux, reducers, actions, Redux Thunk, Zustand', filter: q => q.topic === 'React Engineer' && q.section === 'State Management' },
    { id: 'perf', label: 'Performance', icon: '⚡', color: '#c084fc', desc: 'React.memo, code splitting, React.lazy, Suspense, useTransition', filter: q => q.topic === 'React Engineer' && q.section === 'Performance' },
    { id: 'router', label: 'React Router', icon: '🗺️', color: '#38bdf8', desc: 'Routes, Link, useNavigate, useParams, client-side navigation', filter: q => q.topic === 'React Engineer' && q.section === 'React Router' },
    { id: 'forms', label: 'Forms & Events', icon: '📝', color: '#f97316', desc: 'Controlled components, synthetic events, e.preventDefault', filter: q => q.topic === 'React Engineer' && q.section === 'Forms & Events' },
    { id: 'advanced', label: 'Advanced React', icon: '🚀', color: '#8b5cf6', desc: 'Error Boundaries, Portals, Concurrent Mode, Render Props', filter: q => q.topic === 'React Engineer' && q.section === 'Advanced React' },
    { id: 'testing', label: 'Testing', icon: '🧪', color: '#14b8a6', desc: 'RTL philosophy, getByRole, waitFor, findBy, async testing', filter: q => q.topic === 'React Engineer' && q.section === 'Testing' },
    { id: 'nextjs', label: 'Next.js & SSR', icon: '▲', color: '#a3a3a3', desc: 'getServerSideProps, getStaticProps, SSR vs SSG, ISR', filter: q => q.topic === 'React Engineer' && q.section === 'Next.js & SSR' },
    { id: 'demo', label: 'REAL TEST DEMO', icon: '🚀', color: '#f43f5e', desc: '80 questions in 50 mins: 40 React + 15 reasoning + 15 aptitude + 10 verbal mix.', filter: q => q.topic === 'React Engineer' },
];

export default function ReactPage() {
    const [active, setActive] = useState(null);

    const demoConfig = EXAM_CONFIGS.REACT_DEMO;
    const questions = useMemo(() => {
        if (active === 'demo') {
            const topicQs = ALL_QUESTIONS.filter(demoConfig.topicFilter).sort(() => 0.5 - Math.random()).slice(0, 40);
            const reasonQs = ALL_QUESTIONS.filter(demoConfig.reasoningFilter).sort(() => 0.5 - Math.random()).slice(0, 15);
            const aptQs = ALL_QUESTIONS.filter(demoConfig.numericalFilter).sort(() => 0.5 - Math.random()).slice(0, 15);
            const verbalQs = ALL_QUESTIONS.filter(demoConfig.verbalFilter).sort(() => 0.5 - Math.random()).slice(0, 10);
            return [...topicQs, ...reasonQs, ...aptQs, ...verbalQs].sort(() => 0.5 - Math.random());
        }
        if (active) {
            const sec = sections.find(s => s.id === active);
            return ALL_QUESTIONS.filter(sec.filter);
        }
        return [];
    }, [active, demoConfig]);

    if (active === 'demo') {
        return (
            <div>
                <div className={styles.backBar}>
                    <button className={styles.backBtn} onClick={() => setActive(null)}>← Exit Demo</button>
                    <span style={{ color: '#f43f5e', fontWeight: 700 }}>🚀 {demoConfig.label}</span>
                </div>
                <QuizEngine
                    questions={questions}
                    title="React — REAL TEST DEMO"
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
        const sec = sections.find(s => s.id === active);
        return (
            <div>
                <div className={styles.backBar}>
                    <button className={styles.backBtn} onClick={() => setActive(null)}>← Back</button>
                    <span style={{ color: sec.color, fontWeight: 700 }}>{sec.icon} {sec.label}</span>
                </div>
                <QuizEngine questions={questions} title={`React Engineer — ${sec.label}`} color={sec.color} timePerQ={99999} enableTimer={false} />
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge} style={{ borderColor: 'rgba(97,218,251,0.4)', background: 'rgba(97,218,251,0.1)', color: '#61dafb' }}>⚛️ React Engineer Interview Preparation</span>
                <h1 className={styles.title}>Interview-Ready <span style={{ background: 'linear-gradient(135deg,#61dafb,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>React</span></h1>
                <p className={styles.sub}>
                    Practice all 11 core React interview topics. No timer — focus on understanding.
                    Covers JSX, Hooks, State Management, Performance, Testing, and Next.js.
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
