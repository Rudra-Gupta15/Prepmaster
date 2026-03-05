import { useState, useMemo } from 'react';
import { ALL_QUESTIONS, SECTION_META } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './PracticePage.module.css';

export default function PracticePage() {
  const [selected, setSelected] = useState([]);
  const [difficulty, setDifficulty] = useState('All');
  const [started, setStarted] = useState(false);

  const sections = [...new Set(ALL_QUESTIONS.map(q => q.section))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filtered = useMemo(() => {
    return ALL_QUESTIONS.filter(q => {
      const secOk = selected.length === 0 || selected.includes(q.section);
      const diffOk = difficulty === 'All' || q.difficulty === difficulty;
      return secOk && diffOk;
    });
  }, [selected, difficulty]);

  const toggleSection = (s) => setSelected(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev, s]);

  if (started) {
    return (
      <div>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => setStarted(false)}>← Back to Filter</button>
          <span className={styles.backInfo}>{filtered.length} questions · {difficulty} · {selected.length > 0 ? selected.join(', ') : 'All topics'}</span>
        </div>
        <QuizEngine questions={filtered} title="Custom Practice" color="#6366f1" timePerQ={99999} enableTimer={false}/>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🎮 Custom Practice</h1>
      <p className={styles.sub}>Select topics and difficulty to build your own custom practice session.</p>

      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Difficulty</h3>
        <div className={styles.diffRow}>
          {difficulties.map(d => (
            <button key={d} className={`${styles.diffBtn} ${difficulty===d ? styles.diffActive : ''}`}
              style={difficulty===d ? { background: d==='Easy'?'#10b98122':d==='Medium'?'#f59e0b22':d==='Hard'?'#ef444422':'#6366f122', color: d==='Easy'?'#10b981':d==='Medium'?'#f59e0b':d==='Hard'?'#ef4444':'#818cf8', borderColor: d==='Easy'?'#10b981':d==='Medium'?'#f59e0b':d==='Hard'?'#ef4444':'#6366f1' } : {} }
              onClick={() => setDifficulty(d)}>{d}</button>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>
          Topics
          <button className={styles.clearBtn} onClick={() => setSelected([])}>{selected.length > 0 ? `Clear (${selected.length})` : 'All selected'}</button>
        </h3>
        <div className={styles.topicsGrid}>
          {sections.map(s => {
            const meta = SECTION_META[s] || { color:'#6366f1', icon:'📝' };
            const count = ALL_QUESTIONS.filter(q => q.section === s && (difficulty==='All' || q.difficulty===difficulty)).length;
            const active = selected.includes(s) || selected.length === 0;
            return (
              <button key={s} className={`${styles.topicBtn} ${selected.includes(s) ? styles.topicActive : ''}`}
                style={selected.includes(s) ? { borderColor: meta.color, background: meta.bg, color: meta.color } : {}}
                onClick={() => toggleSection(s)}>
                <span>{meta.icon}</span>
                <span className={styles.topicName}>{s}</span>
                <span className={styles.topicCount}>{count}q</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.preview}>
          <span className={styles.previewCount}>{filtered.length}</span>
          <span className={styles.previewLabel}>questions match your filter</span>
        </div>
        <button className="btn btn-primary btn" onClick={() => filtered.length > 0 && setStarted(true)} disabled={filtered.length === 0}>
          🚀 Start Practice Session →
        </button>
      </div>
    </div>
  );
}
