import { Link } from 'react-router-dom';
import { ALL_QUESTIONS } from '../data/index.js';
import styles from './Home.module.css';

const tcsCount = ALL_QUESTIONS.filter(q => q.topic === 'TCS NQT').length;
const aimlCount = ALL_QUESTIONS.filter(q => q.topic === 'AI & ML').length;
const reactCount = ALL_QUESTIONS.filter(q => q.topic === 'React Engineer').length;
const sapCount = ALL_QUESTIONS.filter(q => q.topic === 'SAP Engineer').length;
const devopsCount = ALL_QUESTIONS.filter(q => q.topic === 'DevOps Engineer').length;

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
          <Link to="/tcs-nqt" className="btn btn-tcs btn">🏢 TCS NQT Prep</Link>
          <Link to="/aiml" className="btn btn-primary btn">🤖 AI &amp; ML</Link>
          <Link to="/react" className="btn btn-ghost btn">⚛️ React</Link>
          <Link to="/sap" className="btn btn-ghost btn">💼 SAP</Link>
          <Link to="/devops" className="btn btn-ghost btn">🔧 DevOps</Link>
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

          {/* TCS NQT */}
          <div className={styles.track} style={{ '--tc': '#06b6d4' }}>
            <div className={styles.trackHead}>
              <span className={styles.trackIcon}>🏢</span>
              <div>
                <h3 className={styles.trackTitle}>TCS NQT Preparation</h3>
                <p className={styles.trackDesc}>Complete preparation for TCS National Qualifier Test</p>
              </div>
            </div>
            <div className={styles.trackSections}>
              {[
                { icon: '📖', label: 'Verbal Ability', count: 25, color: '#06b6d4' },
                { icon: '🧩', label: 'Reasoning Ability', count: 25, color: '#8b5cf6' },
                { icon: '🔢', label: 'Numerical Ability', count: 27, color: '#f59e0b' },
                { icon: '💻', label: 'Programming Logic', count: 25, color: '#10b981' },
              ].map(s => (
                <div key={s.label} className={styles.trackSection}>
                  <span>{s.icon}</span>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                  <span className={styles.trackCount}>{s.count}q</span>
                </div>
              ))}
            </div>
            <div className={styles.trackFooter}>
              <span className={styles.trackTotal}>{tcsCount} questions</span>
              <Link to="/tcs-nqt" className="btn btn-tcs btn btn-sm">Start →</Link>
            </div>
          </div>

          {/* AI & ML */}
          <div className={styles.track} style={{ '--tc': '#6366f1' }}>
            <div className={styles.trackHead}>
              <span className={styles.trackIcon}>🤖</span>
              <div>
                <h3 className={styles.trackTitle}>AI &amp; ML Interview Prep</h3>
                <p className={styles.trackDesc}>Interview-ready preparation across all AI/ML topics</p>
              </div>
            </div>
            <div className={styles.trackSections}>
              {[
                { icon: '🧠', label: 'ML Fundamentals', count: 8, color: '#6366f1' },
                { icon: '🔁', label: 'Transfer Learning', count: 3, color: '#10b981' },
                { icon: '💬', label: 'Large Language Models', count: 4, color: '#f59e0b' },
                { icon: '🐍', label: 'Python', count: 5, color: '#38bdf8' },
                { icon: '⚡', label: 'Control Flow', count: 2, color: '#c084fc' },
                { icon: '🤖', label: 'AI Agents', count: 3, color: '#ef4444' },
              ].map(s => (
                <div key={s.label} className={styles.trackSection}>
                  <span>{s.icon}</span>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                  <span className={styles.trackCount}>{s.count}q</span>
                </div>
              ))}
            </div>
            <div className={styles.trackFooter}>
              <span className={styles.trackTotal}>{aimlCount} questions</span>
              <Link to="/aiml" className="btn btn-primary btn btn-sm">Start →</Link>
            </div>
          </div>

          {/* React Engineer */}
          <div className={styles.track} style={{ '--tc': '#61dafb' }}>
            <div className={styles.trackHead}>
              <span className={styles.trackIcon}>⚛️</span>
              <div>
                <h3 className={styles.trackTitle}>React Engineer Interview</h3>
                <p className={styles.trackDesc}>Hooks, state management, performance, testing &amp; more</p>
              </div>
            </div>
            <div className={styles.trackSections}>
              {[
                { icon: '📄', label: 'JSX & Fundamentals', count: 8, color: '#61dafb' },
                { icon: '🪝', label: 'Hooks', count: 8, color: '#f59e0b' },
                { icon: '🔄', label: 'State & Props', count: 7, color: '#6366f1' },
                { icon: '🗂️', label: 'State Management', count: 5, color: '#ef4444' },
                { icon: '⚡', label: 'Performance', count: 3, color: '#c084fc' },
                { icon: '🧪', label: 'Testing & More', count: 9, color: '#14b8a6' },
              ].map(s => (
                <div key={s.label} className={styles.trackSection}>
                  <span>{s.icon}</span>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                  <span className={styles.trackCount}>{s.count}q</span>
                </div>
              ))}
            </div>
            <div className={styles.trackFooter}>
              <span className={styles.trackTotal}>{reactCount} questions</span>
              <Link to="/react" className="btn btn-sm" style={{ background: 'linear-gradient(135deg,#61dafb,#6366f1)', color: '#000', fontWeight: 700, borderRadius: 8, padding: '7px 18px', fontSize: 13 }}>Start →</Link>
            </div>
          </div>

          {/* SAP Engineer */}
          <div className={styles.track} style={{ '--tc': '#f0a500' }}>
            <div className={styles.trackHead}>
              <span className={styles.trackIcon}>💼</span>
              <div>
                <h3 className={styles.trackTitle}>SAP Engineer Interview</h3>
                <p className={styles.trackDesc}>ABAP, MM, SD, FI, CO, Basis, Integration &amp; more</p>
              </div>
            </div>
            <div className={styles.trackSections}>
              {[
                { icon: '💻', label: 'ABAP', count: 9, color: '#e53e3e' },
                { icon: '📦', label: 'SAP MM', count: 5, color: '#10b981' },
                { icon: '🛒', label: 'SAP SD', count: 4, color: '#6366f1' },
                { icon: '💰', label: 'SAP FI', count: 4, color: '#f59e0b' },
                { icon: '⚙️', label: 'SAP Basis', count: 5, color: '#8b5cf6' },
                { icon: '🔒', label: 'Security & More', count: 9, color: '#ef4444' },
              ].map(s => (
                <div key={s.label} className={styles.trackSection}>
                  <span>{s.icon}</span>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                  <span className={styles.trackCount}>{s.count}q</span>
                </div>
              ))}
            </div>
            <div className={styles.trackFooter}>
              <span className={styles.trackTotal}>{sapCount} questions</span>
              <Link to="/sap" className="btn btn-sm" style={{ background: 'linear-gradient(135deg,#f0a500,#e53e3e)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '7px 18px', fontSize: 13 }}>Start →</Link>
            </div>
          </div>

          {/* DevOps Engineer */}
          <div className={styles.track} style={{ '--tc': '#f97316' }}>
            <div className={styles.trackHead}>
              <span className={styles.trackIcon}>🔧</span>
              <div>
                <h3 className={styles.trackTitle}>DevOps Engineer Interview</h3>
                <p className={styles.trackDesc}>CI/CD, Docker, Kubernetes, IaC, Cloud &amp; more</p>
              </div>
            </div>
            <div className={styles.trackSections}>
              {[
                { icon: '🐳', label: 'Docker', count: 6, color: '#38bdf8' },
                { icon: '☸️', label: 'Kubernetes', count: 7, color: '#6366f1' },
                { icon: '⚙️', label: 'CI/CD Tools', count: 5, color: '#8b5cf6' },
                { icon: '📋', label: 'IaC (Terraform)', count: 4, color: '#14b8a6' },
                { icon: '☁️', label: 'Cloud (AWS)', count: 4, color: '#f0a500' },
                { icon: '📡', label: 'Monitoring & More', count: 9, color: '#ef4444' },
              ].map(s => (
                <div key={s.label} className={styles.trackSection}>
                  <span>{s.icon}</span>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                  <span className={styles.trackCount}>{s.count}q</span>
                </div>
              ))}
            </div>
            <div className={styles.trackFooter}>
              <span className={styles.trackTotal}>{devopsCount} questions</span>
              <Link to="/devops" className="btn btn-sm" style={{ background: 'linear-gradient(135deg,#f97316,#6366f1)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '7px 18px', fontSize: 13 }}>Start →</Link>
            </div>
          </div>

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
