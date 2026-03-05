import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { SECTION_META } from '../data/index.js';
import TimerRing from './TimerRing';
import styles from './QuizEngine.module.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizEngine({ questions: rawQ, title, color, onComplete, timePerQ = 60, enableTimer = true, timerMode = 'question', limit = 40 }) {
  const navigate = useNavigate();
  const questions = useMemo(() => shuffle(rawQ).slice(0, Math.min(rawQ.length, limit)), []);

  const {
    current, q, selected, answered, score, userAnswers,
    finished, timeLeft, pct, grade, gradeColor, progress,
    handleSelect, handleNext, restart, total
  } = useQuiz(questions, enableTimer ? timePerQ : 99999, timerMode);

  if (finished) {
    const results = { score, total, pct, grade, gradeColor, userAnswers, title, questions };
    if (onComplete) onComplete(results);
    else {
      localStorage.setItem('lastResult', JSON.stringify({ score, total, pct, grade, title, timestamp: Date.now(), userAnswers: userAnswers.slice(0, 20) }));
      navigate('/results');
    }
    return null;
  }

  if (!q) return null;

  const meta = SECTION_META[q.section] || { color: color || '#6366f1', icon: '📝', bg: 'rgba(99,102,241,0.1)' };
  const qColor = meta.color;
  const diffColors = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' };

  return (
    <div className={styles.wrap}>
      {/* Header Bar */}
      <div className={styles.bar}>
        <div className={styles.barLeft}>
          <span className={styles.title}>{title}</span>
          <span className={styles.counter}>{current + 1} / {total}</span>
        </div>
        <div className={styles.barRight}>
          <span className={styles.scoreChip}>✓ {score}</span>
          {enableTimer && (
            <div className={styles.timerBox}>
              <TimerRing timeLeft={timeLeft} total={timePerQ} />
              {timerMode === 'section' && (
                <span className={styles.timerText}>
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="progress-track" style={{ margin: '0 0 24px' }}>
        <div className="progress-fill" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${qColor}, ${qColor}aa)` }} />
      </div>

      {/* Dot trail */}
      <div className={styles.dotTrail}>
        {questions.map((_, i) => {
          const ans = userAnswers.find(a => a.qid === questions[i].id);
          return <div key={i} className={styles.dot} style={{
            background: i < current ? (ans?.correct ? '#10b981' : ans?.skipped ? '#6b7280' : '#ef4444') : i === current ? qColor : 'var(--border2)'
          }} />;
        })}
      </div>

      {/* Question */}
      <div className={styles.qCard} style={{ borderTopColor: qColor }}>
        <div className={styles.qMeta}>
          <span className={styles.badge} style={{ background: meta.bg, color: qColor, borderColor: qColor + '44' }}>
            {meta.icon} {q.section}
          </span>
          <span className={styles.typeBadge}>{q.type}</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: diffColors[q.difficulty] }}>{q.difficulty}</span>
        </div>
        <p className={styles.qText}>{q.question}</p>
      </div>

      {/* Options */}
      <div className={styles.options}>
        {q.options.map((opt, i) => {
          let cls = styles.opt;
          if (answered) {
            if (i === q.answer) cls = `${styles.opt} ${styles.correct}`;
            else if (i === selected) cls = `${styles.opt} ${styles.wrong}`;
            else cls = `${styles.opt} ${styles.dimmed}`;
          } else if (selected === i) cls = `${styles.opt} ${styles.chosen}`;
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={answered}>
              <span className={styles.optIdx}>{['A', 'B', 'C', 'D'][i]}</span>
              <span className={styles.optText}>{opt}</span>
              {answered && i === q.answer && <span className={styles.tick}>✓</span>}
              {answered && i === selected && i !== q.answer && <span className={styles.cross}>✗</span>}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`${styles.exp} ${selected === q.answer ? styles.expOk : styles.expBad}`}>
          <strong>{selected === q.answer ? '✅ Correct! ' : selected === -1 ? '⏰ Time Up! ' : '❌ Wrong. '}</strong>
          {q.explanation}
        </div>
      )}

      {answered && (
        <button className={styles.nextBtn} style={{ background: `linear-gradient(135deg, ${qColor}, ${qColor}bb)` }} onClick={handleNext}>
          {current + 1 >= total ? '🏁 See Results' : 'Next →'}
        </button>
      )}
    </div>
  );
}
