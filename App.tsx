import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import TeenDashboard from './screens/TeenDashboard';
import ParentDashboard from './screens/ParentDashboard';
import Chatbot from './screens/Chatbot';
import LearningCenter from './screens/LearningCenter';
import Settings from './screens/Settings';
import EmergencyContacts from './screens/EmergencyContacts';
import ReportIncident from './screens/ReportIncident';
import SafetyIntervention from './screens/SafetyIntervention';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [isInterventionOpen, setIsInterventionOpen] = useState(false);
  const location = useLocation();

  // Simulate an intervention trigger for demo purposes
  useEffect(() => {
    if (location.pathname === '/teen' && !localStorage.getItem('interventionShown')) {
      const timer = setTimeout(() => {
        setIsInterventionOpen(true);
        localStorage.setItem('interventionShown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/teen" element={<TeenDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/learning" element={<LearningCenter />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/emergency" element={<EmergencyContacts />} />
        <Route path="/report" element={<ReportIncident />} />
      </Routes>
      
      <SafetyIntervention 
        isOpen={isInterventionOpen} 
        onClose={() => setIsInterventionOpen(false)} 
      />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
