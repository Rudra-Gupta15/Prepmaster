import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './AIMLPage.module.css';

const sections = [
  { id:'all',      label:'Full AI/ML Quiz',         icon:'🤖', color:'#6366f1', desc:'All topics combined — complete interview preparation', filter: q => q.topic==='AI & ML' },
  { id:'fund',     label:'ML Fundamentals',         icon:'🧠', color:'#6366f1', desc:'AI vs ML vs DL, Supervised/Unsupervised/RL, Overfitting, Loss, Gradient Descent', filter: q => q.section==='ML Fundamentals' },
  { id:'transfer', label:'Transfer Learning',       icon:'🔁', color:'#10b981', desc:'Pretrained models, Feature Extraction vs Fine-Tuning, Catastrophic Forgetting', filter: q => q.section==='Transfer Learning' },
  { id:'llm',      label:'Large Language Models',   icon:'💬', color:'#f59e0b', desc:'LLMs, Quantization, Hallucination, RAG, Prompt Engineering, CoT', filter: q => q.section==='Large Language Models' },
  { id:'python',   label:'Python for ML',           icon:'🐍', color:'#38bdf8', desc:'Data types, Lists, Tuples, Dicts, Sets, Functions, Lambda, Mutability', filter: q => q.section==='Python' },
  { id:'control',  label:'Control Flow',            icon:'⚡', color:'#c084fc', desc:'for/while loops, break/continue, list comprehension, range()', filter: q => q.section==='Control Flow' },
  { id:'agents',   label:'AI Agents',               icon:'🤖', color:'#ef4444', desc:'LLM agents, Tools, Memory types, Planning, ReAct, Chatbot vs Agent', filter: q => q.section==='AI Agents' },
];

export default function AIMLPage() {
  const [active, setActive] = useState(null);

  if (active) {
    const sec = sections.find(s => s.id === active);
    const qs = ALL_QUESTIONS.filter(sec.filter);
    return (
      <div>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => setActive(null)}>← Back</button>
          <span style={{ color: sec.color, fontWeight:700 }}>{sec.icon} {sec.label}</span>
        </div>
        <QuizEngine questions={qs} title={`AI & ML — ${sec.label}`} color={sec.color} timePerQ={99999} enableTimer={false}/>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.badge}>🤖 AI & ML Interview Preparation</span>
        <h1 className={styles.title}>Interview-Ready <span className="grad-text">AI & ML</span></h1>
        <p className={styles.sub}>
          Practice all 6 core AI/ML interview topics. No timer — focus on understanding.
          MCQ + Aptitude + Code reasoning questions with detailed explanations.
        </p>
      </div>
      <div className={styles.grid}>
        {sections.map(sec => {
          const count = ALL_QUESTIONS.filter(sec.filter).length;
          return (
            <div key={sec.id} className={`${styles.card} ${sec.id==='all'?styles.featured:''}`}
              style={{'--sc':sec.color}} onClick={() => setActive(sec.id)}>
              <span className={styles.icon}>{sec.icon}</span>
              <h3 className={styles.cardTitle}>{sec.label}</h3>
              <p className={styles.cardDesc}>{sec.desc}</p>
              <div className={styles.cardFoot}>
                <span className={styles.count}>{count} questions</span>
                <button className={styles.go} style={{ color: sec.color, borderColor: sec.color+'44' }}>Practice →</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
