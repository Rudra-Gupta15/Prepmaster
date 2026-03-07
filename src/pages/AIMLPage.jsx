import { useState, useMemo } from 'react';
import { ALL_QUESTIONS, EXAM_CONFIGS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './AIMLPage.module.css';

const sections = [
  { id: 'all', label: 'Full AI/ML Quiz', icon: '🤖', color: '#6366f1', desc: 'All topics combined — complete interview preparation', filter: q => q.topic === 'AI & ML' },
  { id: 'fund', label: 'ML Fundamentals', icon: '🧠', color: '#6366f1', desc: 'AI vs ML vs DL, Supervised/Unsupervised/RL, Overfitting, Loss, Gradient Descent', filter: q => q.section === 'ML Fundamentals' },
  { id: 'deep', label: 'Deep Learning', icon: '🧬', color: '#8b5cf6', desc: 'Neural Networks, Backpropagation, Optimizers (Adam, SGD), Activation Functions', filter: q => q.section === 'Deep Learning' },
  { id: 'cv', label: 'Computer Vision', icon: '🔍', color: '#10b981', desc: 'CNNs, Image Processing, Object Detection (YOLO), Segmentation, OpenCV', filter: q => q.section === 'Computer Vision' },
  { id: 'nlp', label: 'NLP & Text Mining', icon: '📝', color: '#38bdf8', desc: 'RNNs, Tokenization, Stemming, TF-IDF, Word2Vec, BERT, Sentiment Analysis', filter: q => q.section === 'NLP & Text Mining' },
  { id: 'llm', label: 'Large Language Models', icon: '💬', color: '#f59e0b', desc: 'LLMs, Quantization, Hallucination, RAG, Prompt Engineering, CoT', filter: q => q.section === 'Large Language Models' },
  { id: 'agents', label: 'AI Agents', icon: '🤖', color: '#ef4444', desc: 'LLM agents, Tools, Memory types, Planning, ReAct, Chatbot vs Agent', filter: q => q.section === 'AI Agents' },
  { id: 'transfer', label: 'Transfer Learning', icon: '🔁', color: '#14b8a6', desc: 'Pretrained models, Feature Extraction vs Fine-Tuning, Catastrophic Forgetting', filter: q => q.section === 'Transfer Learning' },
  { id: 'rl', label: 'Reinforcement Learning', icon: '🎮', color: '#c084fc', desc: 'Markov Decision Processes, Q-Learning, Rewards, Policies, Actor-Critic', filter: q => q.section === 'Reinforcement Learning' },
  { id: 'python', label: 'Python for ML', icon: '🐍', color: '#38bdf8', desc: 'Data types, Lists, Tuples, Dicts, Sets, Functions, Lambda, Mutability', filter: q => q.section === 'Python' },
  { id: 'control', label: 'Control Flow', icon: '⚡', color: '#f43f5e', desc: 'for/while loops, break/continue, list comprehension, range()', filter: q => q.section === 'Control Flow' },
  { id: 'demo', label: 'REAL TEST DEMO', icon: '🚀', color: '#f43f5e', desc: '80 questions in 50 mins: 40 AI/ML + 15 reasoning + 15 aptitude + 10 verbal mix.', filter: q => q.topic === 'AI & ML' },
];

export default function AIMLPage() {
  const [active, setActive] = useState(null);

  const demoConfig = EXAM_CONFIGS.AIML_DEMO;
  const questions = useMemo(() => {
    if (active === 'demo') {
      const topicQs = ALL_QUESTIONS.filter(demoConfig.topicFilter).sort(() => 0.5 - Math.random()).slice(0, 40);
      const reasonQs = ALL_QUESTIONS.filter(demoConfig.reasoningFilter).sort(() => 0.5 - Math.random()).slice(0, 15);
      const aptQs = ALL_QUESTIONS.filter(demoConfig.numericalFilter).sort(() => 0.5 - Math.random()).slice(0, 15);
      const verbalQs = ALL_QUESTIONS.filter(demoConfig.verbalFilter).sort(() => 0.5 - Math.random()).slice(0, 10);
      return [...topicQs, ...reasonQs, ...aptQs, ...verbalQs].sort(() => 0.5 - Math.random());
    }
    if (active) {
      const sec = sections.find(s => s.id === active);
      return ALL_QUESTIONS.filter(sec.filter);
    }
    return [];
  }, [active, demoConfig]);

  if (active === 'demo') {
    return (
      <div>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => setActive(null)}>← Exit Demo</button>
          <span style={{ color: '#f43f5e', fontWeight: 700 }}>🚀 {demoConfig.label}</span>
        </div>
        <QuizEngine
          questions={questions}
          title="AI & ML — REAL TEST DEMO"
          color="#f43f5e"
          timePerQ={50 * 60}
          enableTimer={true}
          timerMode="section"
          limit={80}
        />
      </div>
    );
  }

  if (active) {
    const sec = sections.find(s => s.id === active);
    return (
      <div>
        <div className={styles.backBar}>
          <button className={styles.backBtn} onClick={() => setActive(null)}>← Back</button>
          <span style={{ color: sec.color, fontWeight: 700 }}>{sec.icon} {sec.label}</span>
        </div>
        <QuizEngine questions={questions} title={`AI & ML — ${sec.label}`} color={sec.color} timePerQ={99999} enableTimer={false} />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.badge}>🤖 AI & ML Interview Preparation</span>
        <h1 className={styles.title}>Interview-Ready <span className="grad-text">AI & ML</span></h1>
        <p className={styles.sub}>
          Practice all 10 core AI/ML interview topics. No timer — focus on understanding.
          MCQ + Aptitude + Code reasoning questions with detailed explanations.
        </p>
      </div>
      <div className={styles.grid}>
        {sections.map(sec => {
          const count = ALL_QUESTIONS.filter(sec.filter).length;
          return (
            <div key={sec.id} className={`${styles.card} ${sec.id === 'all' ? styles.featured : ''}`}
              style={{ '--sc': sec.color }} onClick={() => setActive(sec.id)}>
              <span className={styles.icon}>{sec.icon}</span>
              <h3 className={styles.cardTitle}>{sec.label}</h3>
              <p className={styles.cardDesc}>{sec.desc}</p>
              <div className={styles.cardFoot}>
                <span className={styles.count}>{count} questions</span>
                <button className={styles.go} style={{ color: sec.color, borderColor: sec.color + '44' }}>Practice →</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
