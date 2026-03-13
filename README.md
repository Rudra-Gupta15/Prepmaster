# ⚡ PrepMaster — Complete Placement & Interview Prep

> **[Live Demo: prepmaster-gold.vercel.app](https://prepmaster-gold.vercel.app/)**

**PrepMaster** is a premium, high-performance quiz platform designed to help students and professionals crack placements and technical interviews. It features **5,600+ curated questions** across 5 major career tracks, realistic mock tests, and a dedicated notebook for topic-wise library explanations.

## 🚀 Key Features
- **5,600+ Verified Questions**: Real-world interview questions with detailed explanations, synchronized with actual data banks.
- **5 Premium Career Tracks**: TCS NQT, AI & ML, React Engineer, SAP Engineer, and DevOps Engineer.
- **Mobile Responsive**: Fully optimized for phones and tablets with a high-priority **Hamburger Menu**, viewport-locking, and animated drawer system.
- **Premium UI**: Modern Glassmorphism design with absolute layout stability and refined mobile interactions.
- **Smart Quiz Engine**: Integrated per-question timer, progress tracking, and score breakdown.
- **Topic Notebook**: Detailed library explanations and point-wise notes for major tech stacks.
- **Custom Practice**: Build your own practice sessions by filtering topics and difficulty.

## 💻 Technical Stack
- **Frontend**: React.js, Vite
- **Styling**: Vanilla CSS (Custom Glassmorphism System)
- **Routing**: React Router v6
- **State**: React Hooks (Custom `useQuiz` logic)

## 📁 Project Structure
```
src/
├── data/
│   ├── tcs-*.js           # TCS NQT split modules (Numerical, Verbal, etc.)
│   ├── aiml-questions.js    # AI & ML Track (1000+ questions)
│   ├── react-questions.js   # React Engineer Track (750+ questions)
│   ├── sap-questions.js     # SAP Engineer Track (700+ questions)
│   ├── devops-questions.js  # DevOps Engineer Track (550+ questions)
│   └── index.js             # Central data index & EXAM_CONFIGS
├── components/
│   ├── Header.jsx           # Responsive navigation with Mobile Drawer
│   ├── QuizEngine.jsx       # Core logic for handling quiz sessions
│   └── Notebook/            # Topic explanation components
└── pages/
    ├── Home.jsx             # Career track dashboard
    ├── PracticePage.jsx     # Custom filter-based training
    └── NotebookPage.jsx     # Technical library & notes
```

## 📊 Content Breakdown (Total: 5,699 Questions)

### 🏢 TCS NQT (2,100 questions)
- **Verbal Ability**: 700 questions
- **Reasoning Ability**: 700 questions
- **Numerical Ability**: 700 questions

### 🤖 Career Tracks
- **AI & ML**: 900 questions (ML Basics, Deep Learning, NLP & CV, GenAI & Agents)
- **React Engineer**: 900 questions (JS Fundamentals, Hooks & State, Performance, Advanced Patterns)
- **SAP Engineer**: 899 questions (ABAP, MM, FI/CO, SD/Basis)
- **DevOps Engineer**: 900 questions (Docker & Containers, CI/CD, Kubernetes, Cloud & IaC)

## 📂 Dataset

The raw CSV question data is publicly available on Kaggle:

🔗 **[PrepMaster — Placement & Interview Quiz Questions](https://www.kaggle.com/datasets/rudrakumargupta/prepmaster-placement-and-interview-quiz-questions)**

---

## 🛠️ Installation & Setup
```bash
# Clone the repository
git clone https://github.com/Rudra-Gupta15/Prepmaster

# Install dependencies
npm install

# Start development server
npm run dev
