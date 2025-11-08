import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage';
import AdminProfile from './components/AdminProfile';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Events from './components/Events';
import PressRelease from './components/PressRelease';
import Hireforms from './components/Hireforms';
import AboutUs from './components/AboutUs';
import ClientSatisfaction from './components/ClientSatisfaction';
// Scroll-to-top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/hireforms" element={<Hireforms />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/client-satisfaction" element={<ClientSatisfaction />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
