import { Link } from 'react-router-dom';
import { ALL_QUESTIONS, EXAM_CONFIGS } from '../data/index.js';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.pill}>🚀 India's Most Complete Placement Prep Platform</div>
        <h1 className={styles.heroH1}>
          Crack <span className="tcs-grad">Interviews</span><br />
          &amp; <span className="grad-text">Land Your Dream Job</span>
        </h1>
        <p className={styles.heroSub}>
          {ALL_QUESTIONS.length}+ curated questions · 5 career tracks · TCS NQT · React · SAP · DevOps · AI/ML ·
          Detailed explanations · Mock test mode with timer. Built for freshers to pass on first attempt.
        </p>
        <div className={styles.ctaRow}>
          <Link to="/tcs-nqt" className="btn btn-tcs">🏢 TCS NQT Prep</Link>
          <Link to="/aiml" className="btn btn-primary">🤖 AI &amp; ML</Link>
          <Link to="/react" className="btn btn-react">⚛️ React</Link>
          <Link to="/sap" className="btn btn-sap">💼 SAP</Link>
          <Link to="/devops" className="btn btn-devops">🔧 DevOps</Link>
        </div>
        <div className={styles.stats}>
          {[
            { n: ALL_QUESTIONS.length + '+', l: 'Questions' },
            { n: '5', l: 'Career Tracks' },
            { n: '30+', l: 'Topics' },
            { n: '⏱️', l: 'Timer Mode' },
            { n: '100%', l: 'Free' },
          ].map(s => (
            <div key={s.l} className={styles.stat}>
              <span className={styles.statN}>{s.n}</span>
              <span className={styles.statL}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Career Tracks */}
      <section className={styles.section}>
        <h2 className="section-title">Choose Your Career Track</h2>
        <div className={styles.tracks}>

          {/* Dynamic Career Tracks from EXAM_CONFIGS */}
          {Object.values(EXAM_CONFIGS).filter(c => !c.id.includes('DEMO')).map(track => {
            const topicMap = {
              'TCS_NQT': 'TCS NQT',
              'AIML': 'AI & ML',
              'REACT': 'React Engineer',
              'SAP': 'SAP Engineer',
              'DEVOPS': 'DevOps Engineer'
            };
            const targetTopic = topicMap[track.id] || track.label;
            const totalQs = ALL_QUESTIONS.filter(q => q.topic === targetTopic).length;

            return (
              <div key={track.id} className={styles.track} style={{ '--tc': track.color }}>
                <div className={styles.trackHead}>
                  <span className={styles.trackIcon}>{track.icon}</span>
                  <div>
                    <h3 className={styles.trackTitle}>{track.label}</h3>
                    <p className={styles.trackDesc}>{track.description}</p>
                  </div>
                </div>
                <div className={styles.trackSections}>
                  {track.sections.map(s => {
                    const sectionCount = ALL_QUESTIONS.filter(s.filter).length;
                    return (
                      <div key={s.label} className={styles.trackSection}>
                        <span>{s.icon || '📚'}</span>
                        <span style={{ color: s.color || track.color, fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                        <span className={styles.trackCount}>{sectionCount}q</span>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.trackFooter}>
                  <span className={styles.trackTotal}>{totalQs} questions</span>
                  <Link to={`/${track.id === 'TCS_NQT' ? 'tcs-nqt' : track.id.toLowerCase()}`} className={`btn btn-sm ${track.id === 'TCS_NQT' ? 'btn-tcs' : track.id === 'AIML' ? 'btn-primary' : ''}`} style={track.id === 'REACT' || track.id === 'SAP' || track.id === 'DEVOPS' ? { background: track.gradient, color: track.id === 'REACT' ? '#000' : '#fff', fontWeight: 700, borderRadius: 8, padding: '7px 18px', fontSize: 13 } : {}}>
                    Start →
                  </Link>
                </div>
              </div>
            );
          })}


        </div>
      </section>

      {/* Why PrepMaster */}
      <section className={styles.section}>
        <h2 className="section-title">Why PrepMaster?</h2>
        <div className={styles.features}>
          {[
            { icon: '⏱️', title: 'Timed Practice', desc: 'Real exam simulation with per-question timer. Get used to the pressure before the actual test.' },
            { icon: '🎯', title: '5 Career Tracks', desc: 'TCS NQT, AI/ML, React, SAP, DevOps — all the top placement & interview tracks in one place.' },
            { icon: '💡', title: 'Instant Explanations', desc: 'Every wrong answer shows a detailed explanation so you understand WHY, not just WHAT.' },
            { icon: '📊', title: 'Performance Analytics', desc: 'Topic-wise score breakdown to identify your weak areas and focus study time effectively.' },
            { icon: '🔀', title: 'Shuffled Questions', desc: "Questions are randomly shuffled each session so you don't memorize order — you actually learn." },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Practice on your phone during commute. Fully responsive for any screen size.' },
          ].map(f => (
            <div key={f.title} className={styles.feature}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h4 className={styles.featureTitle}>{f.title}</h4>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TCS NQT Quick Facts */}
      <section className={styles.section}>
        <h2 className="section-title">TCS NQT Quick Facts</h2>
        <div className={styles.facts}>
          {[
            { label: 'Total Duration', value: '110 min', icon: '⏰' },
            { label: 'Total Questions', value: '90 questions', icon: '📝' },
            { label: 'Negative Marking', value: 'NONE ✅', icon: '✅' },
            { label: 'Sections', value: '4 (Foundation)', icon: '📋' },
            { label: 'Minimum Score', value: '~60% per section', icon: '🎯' },
            { label: 'Mode', value: 'Online (computer-based)', icon: '💻' },
          ].map(f => (
            <div key={f.label} className={styles.factCard}>
              <span className={styles.factIcon}>{f.icon}</span>
              <span className={styles.factVal}>{f.value}</span>
              <span className={styles.factLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <Link to="/guide" className="btn btn-tcs btn" style={{ fontSize: 16 }}>
          📚 Read Complete TCS NQT Study Guide →
        </Link>
      </div>
    </div>
  );
}
