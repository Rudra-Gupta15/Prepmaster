import { verbalQuestions } from './tcs-verbal.js';
import { reasoningQuestions } from './tcs-reasoning.js';
import { numericalQuestions } from './tcs-numerical.js';
import { programmingQuestions } from './tcs-programming.js';
import { aimlQuestions } from './aiml-questions.js';
import { reactQuestions } from './react-questions.js';
import { sapQuestions } from './sap-questions.js';
import { devopsQuestions } from './devops-questions.js';

export const ALL_QUESTIONS = [
  ...verbalQuestions,
  ...reasoningQuestions,
  ...numericalQuestions,
  ...programmingQuestions,
  ...aimlQuestions,
  ...reactQuestions,
  ...sapQuestions,
  ...devopsQuestions,
];

export const EXAM_CONFIGS = {
  TCS_NQT: {
    id: 'TCS_NQT',
    label: 'TCS NQT Mock Test',
    icon: '🏢',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
    description: 'Complete TCS National Qualifier Test simulation with all sections',
    sections: [
      { id: 'verbal', label: 'Verbal Ability', icon: '📖', time: 30, questions: 250, color: '#06b6d4', filter: q => q.topic === 'TCS NQT' && q.section === 'Verbal Ability' },
      { id: 'reasoning', label: 'Reasoning Ability', icon: '🧩', time: 30, questions: 250, color: '#8b5cf6', filter: q => q.topic === 'TCS NQT' && q.section === 'Reasoning Ability' },
      { id: 'numerical', label: 'Numerical Ability', icon: '🔢', time: 35, questions: 250, color: '#f59e0b', filter: q => q.topic === 'TCS NQT' && q.section === 'Numerical Ability' },
      { id: 'programming', label: 'Programming Logic', icon: '💻', time: 25, questions: 250, color: '#10b981', filter: q => q.topic === 'TCS NQT' && q.section === 'Programming Logic' },
    ],
  },
  AIML: {
    id: 'AIML',
    label: 'AI & ML Interview Prep',
    icon: '🤖',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #ec4899)',
    description: 'Complete AI/ML interview preparation across core topics',
    sections: [
      { id: 'ml-basics', label: 'ML Basics', icon: '🧠', time: 20, questions: 250, color: '#6366f1', desc: 'Core ML concepts, algorithms, and fundamental principles', filter: q => q.topic === 'AI & ML' && q.section === 'ML Basics' },
      { id: 'deep-learning', label: 'Deep Learning', icon: '🧬', time: 20, questions: 250, color: '#8b5cf6', desc: 'Neural Networks, Backpropagation, and advanced model architectures', filter: q => q.topic === 'AI & ML' && q.section === 'Deep Learning' },
      { id: 'nlp-cv', label: 'NLP & CV', icon: '🔍', time: 20, questions: 250, color: '#10b981', desc: 'Natural Language Processing and Computer Vision specializations', filter: q => q.topic === 'AI & ML' && q.section === 'NLP & CV' },
      { id: 'genai-agents', label: 'GenAI & Agents', icon: '💬', time: 20, questions: 250, color: '#f59e0b', desc: 'LLMs, Prompt Engineering, and Autonomous AI Agents', filter: q => q.topic === 'AI & ML' && q.section === 'GenAI & Agents' },
    ],
  },
  REACT: {
    id: 'REACT',
    label: 'React Engineer Interview',
    icon: '⚛️',
    color: '#61dafb',
    gradient: 'linear-gradient(135deg, #61dafb, #6366f1)',
    description: 'Complete React Engineer interview preparation covering hooks, state management, performance & more',
    sections: [
      { id: 'js-fund', label: 'JS Fundamentals', icon: '📄', time: 15, questions: 250, color: '#61dafb', desc: 'Modern JavaScript, Closures, Promises, and React-specific JS concepts', filter: q => q.topic === 'React Engineer' && q.section === 'JS Fundamentals' },
      { id: 'hooks-state', label: 'Hooks & State', icon: '🪝', time: 20, questions: 250, color: '#f59e0b', desc: 'Comprehensive guide to React Hooks and complex state management', filter: q => q.topic === 'React Engineer' && q.section === 'Hooks & State' },
      { id: 'adv-patterns', label: 'Advanced Patterns', icon: '🧩', time: 15, questions: 250, color: '#6366f1', desc: 'HOCs, Render Props, Compound components, and Design patterns', filter: q => q.topic === 'React Engineer' && q.section === 'Advanced Patterns' },
      { id: 'perf-testing', label: 'Performance & Testing', icon: '⚡', time: 15, questions: 250, color: '#ef4444', desc: 'Optimization techniques and robust testing with RTL', filter: q => q.topic === 'React Engineer' && q.section === 'Performance & Testing' },
    ],
  },
  SAP: {
    id: 'SAP',
    label: 'SAP Engineer Interview',
    icon: '💼',
    color: '#f0a500',
    gradient: 'linear-gradient(135deg, #f0a500, #e53e3e)',
    description: 'SAP Engineer interview prep — ABAP, ERP, Cloud & Architecture',
    sections: [
      { id: 'erp-fund', label: 'ERP Fundamentals', icon: '📘', time: 15, questions: 250, color: '#f0a500', desc: 'SAP R/3, S/4HANA, Client concept, and Master Data', filter: q => q.topic === 'SAP Engineer' && q.section === 'ERP Fundamentals' },
      { id: 'abap-prog', label: 'ABAP Programming', icon: '💻', time: 20, questions: 250, color: '#e53e3e', desc: 'Internal tables, BAPIs, BAdIs, and Enhancement Framework', filter: q => q.topic === 'SAP Engineer' && q.section === 'ABAP Programming' },
      { id: 'cloud-arch', label: 'Cloud & Architecture', icon: '🏛️', time: 15, questions: 250, color: '#8b5cf6', desc: 'SAP BTP, Fiori UX, and HANA Architecture', filter: q => q.topic === 'SAP Engineer' && q.section === 'Cloud & Architecture' },
      { id: 'practical-modules', label: 'Practical Modules', icon: '🛠️', time: 15, questions: 250, color: '#10b981', desc: 'T-Codes, Monitoring, IDocs, and Transport Management', filter: q => q.topic === 'SAP Engineer' && q.section === 'Practical Modules' },
    ],
  },
  DEVOPS: {
    id: 'DEVOPS',
    label: 'DevOps Engineer Interview',
    icon: '🔧',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316, #6366f1)',
    description: 'DevOps Engineer interview prep — CI/CD, Containers, IaC & Cloud',
    sections: [
      { id: 'cicd-git', label: 'CI/CD & Git', icon: '⚙️', time: 15, questions: 250, color: '#8b5cf6', desc: 'Pipelines, Branching strategies, and automation tools', filter: q => q.topic === 'DevOps Engineer' && q.section === 'CI/CD & Git' },
      { id: 'docker-k8s', label: 'Docker & K8s', icon: '🐳', time: 20, questions: 250, color: '#38bdf8', desc: 'Container orchestration, Images, Pods, and Services', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Docker & K8s' },
      { id: 'iac-linux', label: 'IaC & Linux', icon: '📋', time: 15, questions: 250, color: '#14b8a6', desc: 'Terraform, Ansible, and core Linux administration', filter: q => q.topic === 'DevOps Engineer' && q.section === 'IaC & Linux' },
      { id: 'cloud-security', label: 'Cloud & Security', icon: '🔒', time: 15, questions: 250, color: '#f0a500', desc: 'AWS/Azure services and DevSecOps best practices', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Cloud & Security' },
    ],
  },
  REAL_TEST_DEMO: {
    id: 'REAL_TEST_DEMO',
    label: 'REAL TEST DEMO',
    icon: '🚀',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)',
    description: 'Highly realistic TCS NQT simulation with specific section-wise durations.',
    parts: [
      {
        part: 'Part A: Foundation (75 mins)',
        sections: [
          { id: 'numerical', label: 'Numerical Ability', time: 25, questions: 20, filter: q => q.topic === 'TCS NQT' && q.section === 'Numerical Ability' },
          { id: 'verbal', label: 'Verbal Ability', time: 25, questions: 20, filter: q => q.topic === 'TCS NQT' && q.section === 'Verbal Ability' },
          { id: 'reasoning', label: 'Reasoning Ability', time: 25, questions: 20, filter: q => q.topic === 'TCS NQT' && q.section === 'Reasoning Ability' },
        ]
      },
      {
        part: 'Part B: Advanced (115 mins)',
        sections: [
          { id: 'adv-quant', label: 'Advanced Quant & Reasoning', time: 25, questions: 15, filter: q => q.topic === 'TCS NQT' && (q.section === 'Reasoning Ability' || q.section === 'Numerical Ability') },
          { id: 'adv-coding', label: 'Advanced Coding', time: 90, questions: 10, filter: q => q.topic === 'TCS NQT' && q.section === 'Programming Logic' },
        ]
      }
    ]
  },
  AIML_DEMO: {
    id: 'AIML_DEMO',
    label: 'REAL TEST DEMO',
    time: 50,
    questions: 80,
    topicFilter: q => q.topic === 'AI & ML',
    reasoningFilter: q => q.section === 'Reasoning Ability',
    numericalFilter: q => q.section === 'Numerical Ability',
    verbalFilter: q => q.section === 'Verbal Ability',
  },
  REACT_DEMO: {
    id: 'REACT_DEMO',
    label: 'REAL TEST DEMO',
    time: 50,
    questions: 80,
    topicFilter: q => q.topic === 'React Engineer',
    reasoningFilter: q => q.section === 'Reasoning Ability',
    numericalFilter: q => q.section === 'Numerical Ability',
    verbalFilter: q => q.section === 'Verbal Ability',
  },
  SAP_DEMO: {
    id: 'SAP_DEMO',
    label: 'REAL TEST DEMO',
    time: 50,
    questions: 80,
    topicFilter: q => q.topic === 'SAP Engineer',
    reasoningFilter: q => q.section === 'Reasoning Ability',
    numericalFilter: q => q.section === 'Numerical Ability',
    verbalFilter: q => q.section === 'Verbal Ability',
  },
  DEVOPS_DEMO: {
    id: 'DEVOPS_DEMO',
    label: 'REAL TEST DEMO',
    time: 50,
    questions: 80,
    topicFilter: q => q.topic === 'DevOps Engineer',
    reasoningFilter: q => q.section === 'Reasoning Ability',
    numericalFilter: q => q.section === 'Numerical Ability',
    verbalFilter: q => q.section === 'Verbal Ability',
  },
};

export const SECTION_META = {
  // TCS
  'Verbal Ability': { color: '#06b6d4', icon: '📖', bg: 'rgba(6,182,212,0.1)' },
  'Reasoning Ability': { color: '#8b5cf6', icon: '🧩', bg: 'rgba(139,92,246,0.1)' },
  'Numerical Ability': { color: '#f59e0b', icon: '🔢', bg: 'rgba(245,158,11,0.1)' },
  'Programming Logic': { color: '#10b981', icon: '💻', bg: 'rgba(16,185,129,0.1)' },
  // AI & ML
  'ML Basics': { color: '#6366f1', icon: '🧠', bg: 'rgba(99,102,241,0.1)' },
  'Deep Learning': { color: '#8b5cf6', icon: '🧬', bg: 'rgba(139,92,246,0.1)' },
  'NLP & CV': { color: '#10b981', icon: '🔍', bg: 'rgba(16,185,129,0.1)' },
  'GenAI & Agents': { color: '#f59e0b', icon: '💬', bg: 'rgba(245,158,11,0.1)' },
  // React
  'JS Fundamentals': { color: '#61dafb', icon: '📄', bg: 'rgba(97,218,251,0.1)' },
  'Hooks & State': { color: '#f59e0b', icon: '🪝', bg: 'rgba(245,158,11,0.1)' },
  'Advanced Patterns': { color: '#6366f1', icon: '🧩', bg: 'rgba(99,102,241,0.1)' },
  'Performance & Testing': { color: '#ef4444', icon: '⚡', bg: 'rgba(239,68,68,0.1)' },
  // SAP
  'ERP Fundamentals': { color: '#f0a500', icon: '📘', bg: 'rgba(240,165,0,0.1)' },
  'ABAP Programming': { color: '#e53e3e', icon: '💻', bg: 'rgba(229,62,62,0.1)' },
  'Cloud & Architecture': { color: '#8b5cf6', icon: '🏛️', bg: 'rgba(139,92,246,0.1)' },
  'Practical Modules': { color: '#10b981', icon: '🛠️', bg: 'rgba(16,185,129,0.1)' },
  // DevOps
  'CI/CD & Git': { color: '#8b5cf6', icon: '⚙️', bg: 'rgba(139,92,246,0.1)' },
  'Docker & K8s': { color: '#38bdf8', icon: '🐳', bg: 'rgba(56,189,248,0.1)' },
  'IaC & Linux': { color: '#14b8a6', icon: '📋', bg: 'rgba(20,184,166,0.1)' },
  'Cloud & Security': { color: '#f0a500', icon: '🔒', bg: 'rgba(240,165,0,0.1)' },
};


export const TCS_NQT_GUIDE = {
  overview: {
    title: 'About TCS NQT',
    content: 'TCS National Qualifier Test (NQT) is a standardized assessment used by Tata Consultancy Services for campus recruitment. It evaluates candidates on cognitive and programming skills to shortlist students for interviews.',
  },
  exam_pattern: [
    { section: 'Verbal Ability', questions: 24, time: '30 min', marks: 1, negMark: 0, level: 'Foundation' },
    { section: 'Reasoning Ability', questions: 30, time: '50 min', marks: 1, negMark: 0, level: 'Foundation' },
    { section: 'Numerical Ability', questions: 26, time: '40 min', marks: 1, negMark: 0, level: 'Foundation' },
    { section: 'Programming Logic', questions: 10, time: '15 min', marks: 1, negMark: 0, level: 'Foundation' },
    { section: 'Coding', questions: 2, time: '45 min', marks: 10, negMark: 0, level: 'Advanced' },
  ],
  tips: [
    { title: 'No Negative Marking', icon: '✅', tip: 'TCS NQT has NO negative marking. Attempt ALL questions — never leave any blank!' },
    { title: 'Time Management', icon: '⏱️', tip: 'Verbal: 75 sec/q · Reasoning: 100 sec/q · Numerical: 92 sec/q · Programming: 90 sec/q' },
    { title: 'Foundation First', icon: '🎯', tip: 'Score well in Foundation to clear cutoff. Advanced section (coding) determines salary band.' },
    { title: 'Mock Tests', icon: '📝', tip: 'Practice at least 10 full mock tests before the actual exam. Speed matters as much as accuracy.' },
    { title: 'Verbal Strategy', icon: '📖', tip: 'Focus on synonyms, antonyms, fill-in-the-blanks. RC passages are straightforward — read carefully.' },
    { title: 'Numerical Shortcuts', icon: '🔢', tip: 'Learn Vedic math shortcuts for fast calculation. Focus on % → P&L → TW → SI/CI → Probability.' },
    { title: 'Programming Logic', icon: '💻', tip: 'Focus on output prediction, time complexity, and basic DS. OOP concepts from Java/Python are tested.' },
    { title: 'Cutoff Typically', icon: '📊', tip: 'Cutoff is typically 60-65% in each section. You must clear ALL sections to proceed to HR round.' },
  ],
  roadmap: [
    { week: 'Week 1', tasks: ['Complete all Verbal topics: synonyms, antonyms, fill-in-blanks, RC', 'Practice 100 verbal questions daily', 'Learn 10 new vocabulary words daily'] },
    { week: 'Week 2', tasks: ['Reasoning: Series, Coding-Decoding, Blood Relations, Directions', 'Solve 50 reasoning puzzles daily', 'Practice logical deduction systematically'] },
    { week: 'Week 3', tasks: ['Numerical: Percentages, P&L, Time & Work, Speed & Distance', 'Learn shortcut formulas', 'Practice 40 numerical problems daily'] },
    { week: 'Week 4', tasks: ['Programming Logic: Output prediction, DS, OOP, Algorithms', 'Write code daily in Python/Java/C++', 'Take 2 full mock tests'] },
    { week: 'Week 5-6', tasks: ['Full mock tests daily', 'Analyze mistakes and weak areas', 'Revise formula sheets', 'Practice coding on HackerRank'] },
  ],
};
