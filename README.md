# ⚡ PrepMaster — Complete Placement & Interview Prep

> **[Live Demo: prepmaster-gold.vercel.app](https://prepmaster-gold.vercel.app/)**

**PrepMaster** is a premium, high-performance quiz platform designed to help students and professionals crack placements and technical interviews. It features **4000+ curated questions** across 5 major career tracks, realistic mock tests, and a dedicated notebook for topic-wise library explanations.

## 🚀 Key Features
- **4000+ Verified Questions**: Real-world interview questions with detailed explanations, synchronized with actual data banks.
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

## 📊 Content Breakdown (Total: 4000+ Questions)

### 🏢 TCS NQT (1000 questions)
- **Verbal Ability**: 234 questions
- **Reasoning Ability**: 205 questions
- **Numerical Ability**: 167 questions
- **Programming Logic**: 394 questions

### 🤖 Career Tracks
- **AI & ML**: 1000 questions (LLMs, Deep Learning, Agents, RL, etc.)
- **React Engineer**: 790 questions (Hooks, State, Performance, Advanced)
- **SAP Engineer**: 715 questions (ABAP, MM, FI, CO, SD, Basis)
- **DevOps Engineer**: 565 questions (Docker, Kubernetes, CI/CD, IaC, Cloud)

---

## 🛠️ Installation & Setup
```bash
# Clone the repository
git clone https://github.com/Rudra-Gupta15/Prepmaster

# Install dependencies
npm install

# Start development server
npm run dev
