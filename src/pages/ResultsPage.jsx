import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_QUESTIONS, SECTION_META } from '../data/index.js';
import styles from './ResultsPage.module.css';

export default function ResultsPage() {
  const [r, setR] = useState(null);
  useEffect(() => {
    const s = localStorage.getItem('lastResult');
    if (s) setR(JSON.parse(s));
  }, []);

  if (!r) return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>📊</span>
      <h2>No results yet</h2>
      <p>Complete a quiz session to see your results here.</p>
      <div className={styles.emptyBtns}>
        <Link to="/tcs-nqt" className="btn btn-tcs">🏢 TCS NQT</Link>
        <Link to="/aiml" className="btn btn-primary">🤖 AI & ML</Link>
        <Link to="/react" className="btn btn-react">⚛️ React</Link>
        <Link to="/sap" className="btn btn-sap">💼 SAP</Link>
        <Link to="/devops" className="btn btn-devops">🔧 DevOps</Link>
      </div>
    </div>
  );

  const pct = r.pct || Math.round((r.score / r.total) * 100);
  const gradeColor = pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444';
  const msg = pct >= 90 ? '🎯 Excellent! You\'re ready for the real test!' : pct >= 80 ? '💪 Great score! Keep practising.' : pct >= 60 ? '📖 Good effort. Review weak areas.' : '🔁 Need more practice. Revise topics.';

  // Section breakdown
  const sections = [...new Set(ALL_QUESTIONS.map(q => q.section))];
  const userAnswers = r.userAnswers || [];

  return (
    <div className={styles.page}>
      {/* Score Card */}
      <div className={styles.scoreCard}>
        <div className={styles.scoreCardBg} />
        <div className={styles.ringWrap}>
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r="56" fill="none" stroke="var(--surface2)" strokeWidth="6" />
            <circle cx="65" cy="65" r="56" fill="none" stroke={gradeColor} strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${(pct / 100) * 352} 352`}
              transform="rotate(-90 65 65)"
              style={{ transition: 'stroke-dasharray 1.5s ease' }}
            />
          </svg>
          <div className={styles.ringInner}>
            <span className={styles.grade} style={{ color: gradeColor }}>{r.grade}</span>
            <span className={styles.pctText}>{pct}%</span>
          </div>
        </div>
        <div className={styles.scoreInfo}>
          <h2 className={styles.scoreTitle}>{r.score} / {r.total}</h2>
          <p className={styles.scoreMsg}>{msg}</p>
          <p className={styles.scoreLabel}>{r.title || 'Quiz Result'}</p>
          <div className={styles.scoreActions}>
            <Link to="/tcs-nqt" className="btn btn-tcs btn btn-sm">Retake TCS NQT</Link>
            <Link to="/aiml" className="btn btn-primary btn btn-sm">AI & ML Quiz</Link>
            <Link to="/quiz" className="btn btn-ghost btn btn-sm">Custom Practice</Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className={styles.statsRow}>
        {[
          { label: 'Correct', value: r.score, color: '#10b981' },
          { label: 'Wrong', value: r.total - r.score, color: '#ef4444' },
          { label: 'Accuracy', value: `${pct}%`, color: gradeColor },
          { label: 'Grade', value: r.grade, color: gradeColor },
        ].map(s => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statVal} style={{ color: s.color }}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Section Breakdown */}
      {userAnswers.length > 0 && (
        <div className={styles.section}>
          <h3 className="section-title">Section Breakdown</h3>
          <div className={styles.breakdown}>
            {sections.map(sec => {
              const meta = SECTION_META[sec] || { color: '#6366f1', icon: '📝' };
              const secQs = ALL_QUESTIONS.filter(q => q.section === sec);
              const secAns = userAnswers.filter(a => { const q = ALL_QUESTIONS.find(q => q.id === a.qid); return q?.section === sec; });
              if (secAns.length === 0) return null;
              const correct = secAns.filter(a => a.correct).length;
              const total = secAns.length;
              const p = Math.round((correct / total) * 100);
              const bc = p >= 70 ? '#10b981' : p >= 40 ? '#f59e0b' : '#ef4444';
              return (
                <div key={sec} className={styles.breakRow}>
                  <div className={styles.breakMeta}>
                    <span className={styles.breakIcon}>{meta.icon}</span>
                    <span className={styles.breakName}>{sec}</span>
                    <span className={styles.breakCount}>{correct}/{total}</span>
                  </div>
                  <div className="progress-track" style={{ flex: 1 }}>
                    <div className="progress-fill" style={{ width: `${p}%`, background: bc }} />
                  </div>
                  <span className={styles.breakPct} style={{ color: bc }}>{p}%</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Question Review */}
      {userAnswers.length > 0 && (
        <div className={styles.section}>
          <h3 className="section-title">Question Review <span style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 400 }}>(first 15)</span></h3>
          <div className={styles.reviewList}>
            {userAnswers.slice(0, 15).map((ans, i) => {
              const q = ALL_QUESTIONS.find(q => q.id === ans.qid);
              if (!q) return null;
              return (
                <div key={i} className={`${styles.reviewItem} ${ans.correct ? styles.rvOk : ans.skipped ? styles.rvSkip : styles.rvBad}`}>
                  <span className={styles.rvIcon}>{ans.correct ? '✅' : ans.skipped ? '⏰' : '❌'}</span>
                  <div className={styles.rvContent}>
                    <p className={styles.rvQ}>{q.question.slice(0, 100)}{q.question.length > 100 ? '...' : ''}</p>
                    {!ans.correct && !ans.skipped && <p className={styles.rvAnswer}>✓ {q.options[q.answer]}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
