import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompetitiveAdvantagePage from './pages/CompetitiveAdvantagePage';
import WhyWorkWithChinaPage from './pages/WhyWorkWithChinaPage';
import './index.css';

function App() {
  return (
    <>
      <Background3D />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competitive-advantage" element={<CompetitiveAdvantagePage />} />
        <Route path="/why-work-with-china" element={<WhyWorkWithChinaPage />} />
      </Routes>
    </>
  );
}

export default App;
