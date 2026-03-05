import { useState, useEffect, useRef } from 'react';

export function useQuiz(questions, timePerQuestion = 60) {
  const [current, setCurrent]     = useState(0);
  const [selected, setSelected]   = useState(null);
  const [answered, setAnswered]   = useState(false);
  const [score, setScore]         = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finished, setFinished]   = useState(false);
  const [timeLeft, setTimeLeft]   = useState(timePerQuestion);
  const [timerActive, setTimerActive] = useState(true);
  const intervalRef = useRef(null);

  const q = questions[current];

  useEffect(() => {
    if (!timerActive || answered || finished) return;
    setTimeLeft(timePerQuestion);
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          autoAnswer();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [current, timerActive, answered]);

  const autoAnswer = () => {
    if (answered) return;
    setAnswered(true);
    setSelected(-1);
    setUserAnswers(prev => [...prev, { qid: q?.id, selected: -1, correct: false, skipped: true }]);
  };

  const handleSelect = (idx) => {
    if (answered || !q) return;
    clearInterval(intervalRef.current);
    setSelected(idx);
    setAnswered(true);
    const correct = idx === q.answer;
    if (correct) setScore(s => s + 1);
    setUserAnswers(prev => [...prev, { qid: q.id, selected: idx, correct, skipped: false }]);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrent(c => c + 1);
    setSelected(null);
    setAnswered(false);
    setTimeLeft(timePerQuestion);
  };

  const restart = () => {
    setCurrent(0); setSelected(null); setAnswered(false);
    setScore(0); setUserAnswers([]); setFinished(false);
    setTimeLeft(timePerQuestion); setTimerActive(true);
  };

  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'D';
  const gradeColor = pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444';
  const progress = questions.length > 0 ? (current / questions.length) * 100 : 0;

  return {
    current, q, selected, answered, score, userAnswers,
    finished, timeLeft, timerActive,
    pct, grade, gradeColor, progress,
    handleSelect, handleNext, restart,
    setTimerActive,
    total: questions.length,
  };
}
