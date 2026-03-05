import { useState } from 'react';
import { TCS_NQT_GUIDE } from '../data/index.js';
import styles from './GuidePage.module.css';

export default function GuidePage() {
  const [tab, setTab] = useState('overview');

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.badge}>📚 Complete TCS NQT Study Guide</span>
        <h1 className={styles.title}>Everything You Need to <span className="tcs-grad">Pass TCS NQT</span></h1>
        <p className={styles.sub}>Exam pattern, section-wise strategy, tips, and a complete 6-week study roadmap. Zero prior prep needed.</p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {[['overview','🏢','Overview'],['pattern','📋','Exam Pattern'],['tips','⚡','Pro Tips'],['roadmap','🗺️','Study Roadmap'],['topics','📖','Topic List']].map(([id,icon,label]) => (
          <button key={id} className={`${styles.tab} ${tab===id?styles.tabActive:''}`} onClick={() => setTab(id)}>
            {icon} {label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === 'overview' && (
        <div className={styles.content}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewMain}>
              <h2 className={styles.h2}>What is TCS NQT?</h2>
              <p className={styles.para}>TCS National Qualifier Test (NQT) is a standardized online assessment conducted by Tata Consultancy Services for campus recruitment. It's used to shortlist candidates from engineering and science colleges across India for TCS hiring.</p>
              <p className={styles.para}>The test evaluates cognitive abilities (verbal, reasoning, numerical) and technical skills (programming logic + coding). Clearing NQT is the mandatory first step before TCS HR interviews.</p>
              <h2 className={styles.h2} style={{ marginTop:28 }}>Who Should Take It?</h2>
              <ul className={styles.list}>
                <li>B.E./B.Tech students in final year</li>
                <li>M.E./M.Tech/MCA students</li>
                <li>Students with 60%+ aggregate throughout academics</li>
                <li>Maximum 2 active backlogs allowed</li>
                <li>Gap in studies: not more than 2 years</li>
              </ul>
            </div>
            <div className={styles.overviewSide}>
              <div className={styles.quickFacts}>
                <h3 className={styles.h3}>Quick Facts</h3>
                {[
                  ['Mode','Online, Computer Based'],
                  ['Duration','110 minutes (Foundation)'],
                  ['Language','English only'],
                  ['Negative Marks','None ✅'],
                  ['Cutoff','~60-65% per section'],
                  ['Result','Within 2-3 weeks'],
                  ['Validity','2 years'],
                ].map(([k,v]) => (
                  <div key={k} className={styles.factRow}>
                    <span className={styles.factKey}>{k}</span>
                    <span className={styles.factVal}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exam Pattern */}
      {tab === 'pattern' && (
        <div className={styles.content}>
          <h2 className={styles.h2}>Foundation Section (Mandatory for all)</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>{['Section','Questions','Time','Marks Each','Negative Mark','Difficulty'].map(h=><th key={h} className={styles.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {TCS_NQT_GUIDE.exam_pattern.map((row, i) => (
                  <tr key={i} className={styles.tr}>
                    <td className={styles.td} style={{ fontWeight:700, color:'var(--text)' }}>{row.section}</td>
                    <td className={styles.td}>{row.questions}</td>
                    <td className={styles.td}>{row.time}</td>
                    <td className={styles.td}>{row.marks}</td>
                    <td className={styles.td} style={{ color: row.negMark === 0 ? '#10b981' : '#ef4444' }}>{row.negMark === 0 ? 'None ✅' : row.negMark}</td>
                    <td className={styles.td}><span className={styles.levelBadge} style={{ background: row.level==='Foundation' ? 'rgba(6,182,212,0.15)' : 'rgba(139,92,246,0.15)', color: row.level==='Foundation' ? '#06b6d4' : '#8b5cf6' }}>{row.level}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.patternNote}>
            💡 <strong>Important:</strong> The Advanced Section (2 coding questions in 45 min) determines your salary band at TCS. Foundation determines if you pass. Aim to clear Foundation first, then prepare for Advanced coding.
          </div>

          <h2 className={styles.h2} style={{ marginTop:32 }}>Section-wise Time Strategy</h2>
          <div className={styles.strategyGrid}>
            {[
              { section:'Verbal Ability', time:'30 min / 24 questions', perQ:'75 sec', strategy:'Read quickly. RC passages: skim first, then answer. Synonyms/Antonyms are the fastest to score.', color:'#06b6d4' },
              { section:'Reasoning Ability', time:'50 min / 30 questions', perQ:'100 sec', strategy:'Do series/analogy/odd-one-out first (fastest). Leave blood relations and direction for last.', color:'#8b5cf6' },
              { section:'Numerical Ability', time:'40 min / 26 questions', perQ:'92 sec', strategy:'Percentage and SI/CI are formula-based (quick). Time & Work and P&L need more careful reading.', color:'#f59e0b' },
              { section:'Programming Logic', time:'15 min / 10 questions', perQ:'90 sec', strategy:'Output prediction and DS questions are fast. OOP concept questions are straightforward if you know basics.', color:'#10b981' },
            ].map(s => (
              <div key={s.section} className={styles.stratCard} style={{ borderLeftColor: s.color }}>
                <div className={styles.stratHeader}>
                  <h4 style={{ color: s.color }}>{s.section}</h4>
                  <span className={styles.stratTime}>{s.perQ}/question</span>
                </div>
                <p className={styles.stratText}>{s.strategy}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {tab === 'tips' && (
        <div className={styles.content}>
          <div className={styles.tipsGrid}>
            {TCS_NQT_GUIDE.tips.map((tip, i) => (
              <div key={i} className={styles.tipCard}>
                <span className={styles.tipIcon}>{tip.icon}</span>
                <h4 className={styles.tipTitle}>{tip.title}</h4>
                <p className={styles.tipText}>{tip.tip}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.h2} style={{ marginTop:40 }}>Day-Before Checklist</h2>
          <div className={styles.checklist}>
            {[
              'Complete at least one full mock test',
              'Revise all formula sheets (%, SI, SI/CI, TW, Speed)',
              'Review your wrong answers from practice sessions',
              'Get 8+ hours of sleep',
              'Keep your admit card and ID proof ready',
              'Test your internet connection and computer',
              'Arrive/login 30 minutes early',
              "Don't study anything new the day before",
            ].map((item, i) => (
              <div key={i} className={styles.checkItem}>
                <span className={styles.checkBox}>□</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Roadmap */}
      {tab === 'roadmap' && (
        <div className={styles.content}>
          <p className={styles.para} style={{ marginBottom:28 }}>This 6-week roadmap takes you from zero preparation to TCS NQT ready. Follow it consistently and you'll be confident walking into the test.</p>
          <div className={styles.roadmap}>
            {TCS_NQT_GUIDE.roadmap.map((w, i) => (
              <div key={i} className={styles.weekCard}>
                <div className={styles.weekBadge} style={{ background: ['#06b6d4','#8b5cf6','#f59e0b','#10b981','#ec4899','#ef4444'][i]+'22', color: ['#06b6d4','#8b5cf6','#f59e0b','#10b981','#ec4899','#ef4444'][i] }}>
                  {w.week}
                </div>
                <ul className={styles.weekTasks}>
                  {w.tasks.map((t, j) => (
                    <li key={j} className={styles.weekTask}><span className={styles.bullet}>→</span>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Topics */}
      {tab === 'topics' && (
        <div className={styles.content}>
          {[
            { section:'Verbal Ability', color:'#06b6d4', topics:[
              {t:'Synonyms & Antonyms', desc:'Word meanings — build vocabulary daily (10 words/day)'},
              {t:'Fill in the Blanks', desc:'Grammar + vocabulary combined — focus on prepositions and tense'},
              {t:'Reading Comprehension', desc:'2-3 short passages — practice speed reading'},
              {t:'Error Detection', desc:'Subject-verb agreement, tense, articles, prepositions'},
              {t:'Idioms & Phrases', desc:'Learn 50 most common idioms used in TCS'},
            ]},
            { section:'Reasoning Ability', color:'#8b5cf6', topics:[
              {t:'Number Series', desc:'Arithmetic, geometric, Fibonacci, prime patterns'},
              {t:'Letter Series', desc:'Alphabetical position and forward/backward shifts'},
              {t:'Coding-Decoding', desc:'Letter shifting, reverse coding, number coding'},
              {t:'Blood Relations', desc:'Family tree diagrams — draw them out'},
              {t:'Directions', desc:'N/S/E/W turns with distance calculation'},
              {t:'Syllogisms', desc:'All, Some, No statements — Venn diagram approach'},
              {t:'Analogy', desc:'Word relationships: tool:use, part:whole, etc.'},
            ]},
            { section:'Numerical Ability', color:'#f59e0b', topics:[
              {t:'Percentages', desc:'% increase/decrease, compound % change'},
              {t:'Profit & Loss', desc:'CP/SP/MP/Discount — mark-up formulas'},
              {t:'Time & Work', desc:'LCM method is fastest for these problems'},
              {t:'Speed & Distance', desc:'Relative speed, trains, boats — formula driven'},
              {t:'Simple & Compound Interest', desc:'SI=PRT/100; CI uses (1+r/n)^nt'},
              {t:'Averages', desc:'Weighted average, changing averages'},
              {t:'Ratio & Proportion', desc:'Basic ratio simplification and sharing'},
              {t:'Permutation & Combination', desc:'nPr and nCr — when order matters/doesn\'t'},
              {t:'Probability', desc:'Favorable/Total outcomes approach'},
            ]},
            { section:'Programming Logic', color:'#10b981', topics:[
              {t:'Output Prediction', desc:'Trace through loops, recursion, pointer arithmetic'},
              {t:'Data Structures', desc:'Stack, Queue, Trees, Arrays — time complexity'},
              {t:'Sorting & Searching', desc:'Bubble, Selection, Merge, Quick sort complexities'},
              {t:'OOP Concepts', desc:'Inheritance, Encapsulation, Polymorphism, Abstraction'},
              {t:'Python Basics', desc:'Lists, dicts, loops, functions, lambda'},
              {t:'Database Basics', desc:'SQL SELECT, WHERE, COUNT, JOIN basics'},
              {t:'Bitwise Operations', desc:'AND, OR, XOR, shift operations'},
            ]},
          ].map(s => (
            <div key={s.section} className={styles.topicSection}>
              <h3 className={styles.topicSectionTitle} style={{ color: s.color }}>{s.section}</h3>
              <div className={styles.topicsList}>
                {s.topics.map(t => (
                  <div key={t.t} className={styles.topicItem} style={{ borderLeftColor: s.color }}>
                    <span className={styles.topicTitle}>{t.t}</span>
                    <span className={styles.topicDesc}>{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
