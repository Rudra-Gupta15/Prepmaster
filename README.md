# ⚡ PrepMaster — TCS NQT + AI/ML Quiz Platform

> Complete placement preparation — 120+ questions, timer mode, exam guides, topic-wise practice

## 🚀 Deploy to Vercel in 2 minutes

### Option 1: Vercel Dashboard (Easiest)
1. Push to GitHub: `git init && git add . && git commit -m "init" && git push`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → Framework: **Vite** (auto-detected)
4. Click **Deploy** ✅

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 💻 Local Development
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build
```

## 📁 Project Structure
```
src/
├── data/
│   ├── tcs-verbal.js      # 25 Verbal questions
│   ├── tcs-reasoning.js   # 25 Reasoning questions
│   ├── tcs-numerical.js   # 27 Numerical questions
│   ├── tcs-programming.js # 25 Programming questions
│   ├── aiml-questions.js  # 25 AI/ML questions
│   └── index.js           # Combined data + configs
├── hooks/
│   └── useQuiz.js         # Quiz state + timer logic
├── components/
│   ├── Header.jsx          # Navigation
│   ├── QuizEngine.jsx      # Reusable quiz UI
│   └── TimerRing.jsx       # Circular countdown timer
└── pages/
    ├── Home.jsx            # Landing page
    ├── TCSPage.jsx         # TCS NQT section picker
    ├── AIMLPage.jsx        # AI/ML topic picker
    ├── PracticePage.jsx    # Custom practice builder
    ├── GuidePage.jsx       # Complete NQT study guide
    └── ResultsPage.jsx     # Score breakdown
```

## 📊 Content Coverage

### TCS NQT (102 questions)
| Section | Questions | Topics |
|---------|-----------|--------|
| Verbal Ability | 25 | Synonyms, Antonyms, Fill-in-Blanks, RC, Error Detection, Idioms |
| Reasoning Ability | 25 | Series, Coding-Decoding, Blood Relations, Directions, Syllogisms, Analogy |
| Numerical Ability | 27 | %, P&L, Time & Work, Speed, SI/CI, Averages, P&C, Probability |
| Programming Logic | 25 | Output Prediction, DS, OOP, Algorithms, Python, SQL |

### AI & ML (25 questions)
ML Fundamentals · Transfer Learning · LLMs · Python · Control Flow · AI Agents
