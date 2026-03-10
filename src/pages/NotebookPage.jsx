import { useState, useMemo } from 'react';
import { ALL_QUESTIONS } from '../data/index.js';
import { notebookLibrary } from '../data/notebookData.js';
import styles from './NotebookPage.module.css';

const topics = [
    { name: 'TCS NQT', icon: '🏢', color: '#06b6d4', filter: q => q.topic === 'TCS NQT' },
    { name: 'AI & ML', icon: '🤖', color: '#6366f1', filter: q => q.topic === 'AI & ML' },
    { name: 'React', icon: '⚛️', color: '#61dafb', filter: q => q.topic === 'React Engineer' },
    { name: 'SAP', icon: '💼', color: '#f0a500', filter: q => q.topic === 'SAP Engineer' },
    { name: 'DevOps', icon: '🔧', color: '#f97316', filter: q => q.topic === 'DevOps Engineer' },
];

export default function NotebookPage() {
    const [activeTopic, setActiveTopic] = useState(topics[0]);
    const [activeTab, setActiveTab] = useState('library'); // 'library' | 'qa'
    const [activeLevel, setActiveLevel] = useState('All'); // 'All' | 'Basic' | 'Intermediate' | 'Advanced'
    const [search, setSearch] = useState('');
    const [expandedQ, setExpandedQ] = useState(null);

    const levels = ['All', 'Basic', 'Intermediate', 'Advanced'];

    const libraryData = useMemo(() => {
        let data = notebookLibrary[activeTopic.name] || [];
        if (activeLevel !== 'All') {
            data = data.filter(item => item.level === activeLevel);
        }
        if (!search) return data;
        return data.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.content.toLowerCase().includes(search.toLowerCase())
        );
    }, [activeTopic, search, activeLevel]);

    const qaData = useMemo(() => {
        const data = ALL_QUESTIONS.filter(activeTopic.filter);
        if (!search) return data;
        return data.filter(q =>
            q.question.toLowerCase().includes(search.toLowerCase()) ||
            q.explanation.toLowerCase().includes(search.toLowerCase())
        );
    }, [activeTopic, search]);

    return (
        <div className={styles.page}>
            <aside className={styles.sidebar}>
                {topics.map(t => (
                    <button
                        key={t.name}
                        className={`${styles.sideTab} ${activeTopic.name === t.name ? styles.activeSide : ''}`}
                        onClick={() => { setActiveTopic(t); setExpandedQ(null); }}
                        style={activeTopic.name === t.name ? { '--grad': `linear-gradient(135deg, ${t.color}, ${t.color}cc)` } : {}}
                    >
                        <span>{t.icon}</span> {t.name}
                    </button>
                ))}
            </aside>

            <main className={styles.content}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.topicTitle}>{activeTopic.icon} {activeTopic.name} Notebook</h1>
                        <p style={{ color: 'var(--text-dim)', fontSize: 13, marginTop: 4 }}>Comprehensive study library & question bank.</p>
                    </div>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tabBtn} ${activeTab === 'library' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('library')}
                        >
                            📚 Library
                        </button>
                        <button
                            className={`${styles.tabBtn} ${activeTab === 'qa' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('qa')}
                        >
                            ❓ Q&A Bank
                        </button>
                    </div>
                </div>

                <div className={styles.searchBox}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input
                        type="text"
                        placeholder={`Search ${activeTab === 'library' ? 'concepts' : 'questions'}...`}
                        className={styles.searchInput}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {activeTab === 'library' && (
                    <div className={styles.levelFilters}>
                        {levels.map(lvl => (
                            <button
                                key={lvl}
                                className={`${styles.levelBtn} ${activeLevel === lvl ? styles.activeLevel : ''}`}
                                onClick={() => setActiveLevel(lvl)}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>
                )}

                {activeTab === 'library' ? (
                    <div className={styles.libraryGrid}>
                        {libraryData.map((item, i) => (
                            <div key={i} className={styles.libCard}>
                                <div className={styles.libHeader}>
                                    <span className={`${styles.levelBadge} ${styles[item.level?.toLowerCase()]}`}>
                                        {item.level}
                                    </span>
                                    <div className={styles.libTitle}>{item.title}</div>
                                </div>

                                {item.definition ? (
                                    <div className={styles.detailedContent}>
                                        <section className={styles.detailedSec}>
                                            <h4 className={styles.secLabel}>📖 Definition</h4>
                                            <p className={styles.secText}>{item.definition}</p>
                                        </section>

                                        <section className={styles.detailedSec}>
                                            <h4 className={styles.secLabel}>📝 Overview</h4>
                                            <ul className={styles.secList}>
                                                {item.overview?.map((step, idx) => (
                                                    <li key={idx}>{step}</li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section className={styles.detailedSec}>
                                            <h4 className={styles.secLabel}>🔑 Key-Points</h4>
                                            <ul className={styles.secList}>
                                                {item.keyPoints?.map((point, idx) => (
                                                    <li key={idx} className={styles.keyPoint}>{point}</li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section className={styles.detailedSec}>
                                            <h4 className={styles.secLabel}>❓ Interview Questions</h4>
                                            <div className={styles.qaGrid}>
                                                {item.questions?.map((qObj, idx) => (
                                                    <div key={idx} className={styles.qaMiniItem}>
                                                        <div className={styles.miniQ}>{qObj.q}</div>
                                                        <div className={styles.miniA}>Ans: {qObj.a}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className={styles.detailedSec}>
                                            <h4 className={styles.secLabel}>💡 Example</h4>
                                            <div className={styles.exampleBox}>{item.example}</div>
                                        </section>
                                    </div>
                                ) : (
                                    <div className={styles.libContent}>{item.content}</div>
                                )}
                            </div>
                        ))}
                        {libraryData.length === 0 && <p style={{ textAlign: 'center', gridColumn: '1/-1', opacity: 0.5 }}>No {activeLevel !== 'All' ? activeLevel : ''} concepts found for "{search}"</p>}
                    </div>
                ) : (
                    <div className={styles.qaList}>
                        {qaData.map((q, i) => (
                            <div key={q.id || i} className={styles.qaItem}>
                                <div
                                    className={styles.qaHead}
                                    onClick={() => setExpandedQ(expandedQ === i ? null : i)}
                                >
                                    <p className={styles.qaQ}>
                                        <span className={styles.badge}>{q.section}</span>
                                        {q.question.replace(/^\[[^\]]+\]\s*/, '')}
                                    </p>
                                    <span>{expandedQ === i ? '▲' : '▼'}</span>
                                </div>
                                {expandedQ === i && (
                                    <div className={styles.qaBody}>
                                        <div className={styles.qaAns}>
                                            Answer: {['A', 'B', 'C', 'D'][q.answer]} — {q.options[q.answer]}
                                        </div>
                                        <div className={styles.qaExp}>
                                            <strong>Explanation:</strong> {q.explanation}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        {qaData.length === 0 && <p style={{ textAlign: 'center', opacity: 0.5 }}>No questions found for "{search}"</p>}
                    </div>
                )}
            </main>
        </div>
    );
}
