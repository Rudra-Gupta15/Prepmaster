import styles from './TimerRing.module.css';

export default function TimerRing({ timeLeft, total }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const pct  = timeLeft / total;
  const dash  = pct * circ;
  const color = timeLeft > total * 0.5 ? '#10b981' : timeLeft > total * 0.25 ? '#f59e0b' : '#ef4444';

  return (
    <div className={styles.wrap}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} fill="none" stroke="var(--surface2)" strokeWidth="4"/>
        <circle cx="28" cy="28" r={r} fill="none"
          stroke={color} strokeWidth="4" strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          transform="rotate(-90 28 28)"
          style={{ transition: 'stroke-dasharray 1s linear, stroke 0.5s' }}
        />
      </svg>
      <span className={styles.time} style={{ color }}>{timeLeft}</span>
    </div>
  );
}
