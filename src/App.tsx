import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MatrixBackground } from './components/MatrixBackground';
import { TerminalNav } from './components/TerminalNav';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { CoursesPage } from './pages/CoursesPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
export function App() {
  return (
    <BrowserRouter>
      <div className="crt-screen min-h-screen bg-dark-primary text-text-primary">
        <MatrixBackground />
        <TerminalNav />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);

}
