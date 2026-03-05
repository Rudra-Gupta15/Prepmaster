import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TCSPage from './pages/TCSPage';
import AIMLPage from './pages/AIMLPage';
import ReactPage from './pages/ReactPage';
import SAPPage from './pages/SAPPage';
import DevOpsPage from './pages/DevOpsPage';
import PracticePage from './pages/PracticePage';
import GuidePage from './pages/GuidePage';
import ResultsPage from './pages/ResultsPage';
import NotebookPage from './pages/NotebookPage';

import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Header />
      <main style={{ position: 'relative', zIndex: 1, minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tcs-nqt" element={<TCSPage />} />
          <Route path="/aiml" element={<AIMLPage />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/sap" element={<SAPPage />} />
          <Route path="/devops" element={<DevOpsPage />} />
          <Route path="/quiz" element={<PracticePage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
