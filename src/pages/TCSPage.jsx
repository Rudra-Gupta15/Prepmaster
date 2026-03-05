import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './TCSPage.module.css';

const sections = [
  { id:'verbal',      label:'Verbal Ability',    icon:'📖', color:'#06b6d4', time:60, desc:'Synonyms, Antonyms, Fill-in-Blanks, RC, Idioms, Error Detection', filter: q => q.section==='Verbal Ability' },
  { id:'reasoning',   label:'Reasoning Ability', icon:'🧩', color:'#8b5cf6', time:90, desc:'Series, Coding-Decoding, Blood Relations, Directions, Syllogisms', filter: q => q.section==='Reasoning Ability' },
  { id:'numerical',   label:'Numerical Ability', icon:'🔢', color:'#f59e0b', time:90, desc:'Percentages, P&L, Time & Work, Speed & Distance, SI/CI, Probability', filter: q => q.section==='Numerical Ability' },
  { id:'programming', label:'Programming Logic',  icon:'💻', color:'#10b981', time:75, desc:'Output Prediction, Data Structures, Algorithms, OOP, Python, SQL', filter: q => q.section==='Programming Logic' },
  { id:'mock',        label:'Full Mock Test',     icon:'🎯', color:'#ec4899', time:75, desc:'All 4 sections combined — simulate the real TCS NQT exam experience', filter: q => q.topic==='TCS NQT' },
];

export default function TCSPage() {
  const [active, setActive] = useState(null);

  if (active) {
    const sec = sections.find(s => s.id === active);
    const qs = ALL_QUESTIONS.filter(sec.filter);
    return (
      <div>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => setActive(null)}>← Back to Sections</button>
          <span style={{ color: sec.color, fontWeight:700 }}>{sec.icon} {sec.label}</span>
        </div>
        <QuizEngine
          questions={qs}
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
            <div className={styles.infoRow}><span>📝 Total Questions</span><strong>{ALL_QUESTIONS.filter(q=>q.topic==='TCS NQT').length}+</strong></div>
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
          return (
            <div key={sec.id} className={`${styles.card} ${isMock ? styles.mockCard : ''}`} style={{'--sc': sec.color}}
              onClick={() => setActive(sec.id)}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{sec.icon}</span>
                {isMock && <span className={styles.hotBadge}>⭐ Recommended</span>}
              </div>
              <h3 className={styles.cardTitle}>{sec.label}</h3>
              <p className={styles.cardDesc}>{sec.desc}</p>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>📝 {count} questions</span>
                <span className={styles.metaItem}>⏱️ {sec.time}s/q</span>
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
