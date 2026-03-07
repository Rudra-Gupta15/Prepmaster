import { useState } from 'react';
import { ALL_QUESTIONS, EXAM_CONFIGS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './TCSPage.module.css';

const sections = [
  { id: 'verbal', label: 'Verbal Ability', icon: '📖', color: '#06b6d4', time: 60, desc: 'Synonyms, Antonyms, Fill-in-Blanks, RC, Idioms, Error Detection', filter: q => q.section === 'Verbal Ability' },
  { id: 'reasoning', label: 'Reasoning Ability', icon: '🧩', color: '#8b5cf6', time: 90, desc: 'Series, Coding-Decoding, Blood Relations, Directions, Syllogisms', filter: q => q.section === 'Reasoning Ability' },
  { id: 'numerical', label: 'Numerical Ability', icon: '🔢', color: '#f59e0b', time: 90, desc: 'Percentages, P&L, Time & Work, Speed & Distance, SI/CI, Probability', filter: q => q.section === 'Numerical Ability' },
  { id: 'programming', label: 'Programming Logic', icon: '💻', color: '#10b981', time: 75, desc: 'Output Prediction, Data Structures, Algorithms, OOP, Python, SQL', filter: q => q.section === 'Programming Logic' },
  { id: 'mock', label: 'Full Mock Test', icon: '🎯', color: '#ec4899', time: 75, desc: 'All 4 sections combined — simulate the real TCS NQT exam experience', filter: q => q.topic === 'TCS NQT' },
  { id: 'demo', label: 'REAL TEST DEMO', icon: '🚀', color: '#f43f5e', time: 1500, desc: 'Section-wise time breakdown (Numerical, Verbal, Reasoning) as per real exam.', filter: q => q.topic === 'TCS NQT' },
];

export default function TCSPage() {
  const [active, setActive] = useState(null);
  const [demoStep, setDemoStep] = useState(0);
  const [demoResults, setDemoResults] = useState([]);

  const demoConfig = EXAM_CONFIGS.REAL_TEST_DEMO;
  const flatSections = [
    ...demoConfig.parts[0].sections,
    ...demoConfig.parts[1].sections
  ];

  const handleDemoComplete = (res) => {
    const next = demoStep + 1;
    const updatedResults = [...demoResults, res];
    setDemoResults(updatedResults);

    if (next < flatSections.length) {
      setDemoStep(next);
    } else {
      const totalScore = updatedResults.reduce((acc, r) => acc + r.score, 0);
      const totalQs = updatedResults.reduce((acc, r) => acc + r.total, 0);
      localStorage.setItem('lastResult', JSON.stringify({
        score: totalScore,
        total: totalQs,
        pct: Math.round((totalScore / totalQs) * 100),
        grade: totalScore / totalQs >= 0.8 ? 'A' : 'B',
        title: 'TCS NQT REAL TEST DEMO',
        timestamp: Date.now(),
        userAnswers: updatedResults.flatMap(r => r.userAnswers).slice(0, 30)
      }));
      setActive(null);
      window.location.href = '/results';
    }
  };

  const questions = useMemo(() => {
    if (active === 'demo') {
      const sec = flatSections[demoStep];
      return ALL_QUESTIONS.filter(sec.filter).slice(0, sec.questions);
    }
    if (active) {
      const sec = sections.find(s => s.id === active);
      return ALL_QUESTIONS.filter(sec.filter);
    }
    return [];
  }, [active, demoStep, flatSections]);

  if (active === 'demo') {
    const sec = flatSections[demoStep];
    return (
      <div key={`demo-${demoStep}`}>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => { setActive(null); setDemoStep(0); setDemoResults([]); }}>Exit Demo</button>
          <span style={{ color: demoConfig.color, fontWeight: 700 }}>🚀 {demoConfig.label} — {sec.label}</span>
          <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--muted2)' }}>Section {demoStep + 1} of {flatSections.length}</span>
        </div>
        <QuizEngine
          questions={questions}
          title={sec.label}
          color={demoConfig.color}
          timePerQ={sec.time * 60}
          enableTimer={true}
          timerMode="section"
          onComplete={handleDemoComplete}
        />
      </div>
    );
  }

  if (active) {
    const sec = sections.find(s => s.id === active);
    return (
      <div>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => setActive(null)}>← Back to Sections</button>
          <span style={{ color: sec.color, fontWeight: 700 }}>{sec.icon} {sec.label}</span>
        </div>
        <QuizEngine
          questions={questions}
          title={`TCS NQT — ${sec.label}`}
          color={sec.color}
          timePerQ={sec.time}
          enableTimer={true}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.examBadge}>🏢 TCS NQT Preparation</span>
          <h1 className={styles.title}>Master Every Section</h1>
          <p className={styles.sub}>
            Practice all 4 TCS NQT sections individually or take the full mock test.
            Each session uses a timer to simulate real exam pressure.
          </p>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}><span>📝 Total Questions</span><strong>{ALL_QUESTIONS.filter(q => q.topic === 'TCS NQT').length}+</strong></div>
            <div className={styles.infoRow}><span>⏱️ Timer Mode</span><strong>On ✅</strong></div>
            <div className={styles.infoRow}><span>❌ Negative Marking</span><strong>None</strong></div>
            <div className={styles.infoRow}><span>🎯 Cutoff</span><strong>~60% per section</strong></div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {sections.map(sec => {
          const count = ALL_QUESTIONS.filter(sec.filter).length;
          const isMock = sec.id === 'mock';
          const isDemo = sec.id === 'demo';
          return (
            <div key={sec.id} className={`${styles.card} ${isMock ? styles.mockCard : ''} ${isDemo ? styles.demoCard : ''}`} style={{ '--sc': sec.color }}
              onClick={() => setActive(sec.id)}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{sec.icon}</span>
                {isMock && <span className={styles.hotBadge}>⭐ Recommended</span>}
              </div>
              <h3 className={styles.cardTitle}>{sec.label}</h3>
              <p className={styles.cardDesc}>{sec.desc}</p>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>📝 {isDemo ? '100+' : count} questions</span>
                <span className={styles.metaItem}>⏱️ {isDemo ? '190 mins' : `${sec.time}s/q`}</span>
              </div>
              <button className={styles.startBtn} style={{ background: sec.color }}>
                Start Practice →
              </button>
            </div>
          );
        })}
      </div>

      {/* Tips Banner */}
      <div className={styles.tipsBanner}>
        <h3 className={styles.tipsTitle}>⚡ Quick TCS NQT Tips</h3>
        <div className={styles.tipsGrid}>
          {[
            '🚫 No negative marking — ALWAYS attempt all questions!',
            '⏰ Verbal: 75 sec/q · Reasoning: 100 sec/q · Numerical: 92 sec/q',
            '🎯 Score 60%+ in each section to clear cutoff',
            '💡 Attempt easy questions first, mark hard ones for review',
            '📊 Foundation section determines if you pass; Advanced determines salary band',
            '🔢 Learn Vedic math shortcuts for faster numerical calculations',
          ].map(tip => (
            <div key={tip} className={styles.tip}>{tip}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
