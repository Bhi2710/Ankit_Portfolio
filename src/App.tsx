import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResearchPage } from './pages/ResearchPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TalksPage } from './pages/TalksPage';
import { TeachingPage } from './pages/TeachingPage';
import { CVPage } from './pages/CVPage';
import { MorePage } from './pages/MorePage';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-teal selection:text-white">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Navigation Bar - Preserved Space Navy design */}
      <Navbar />

      {/* Main Page Routing View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/talks" element={<TalksPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
