import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Achievements from './Achievements';
import Contact from './Contact';
import Queries from './Queries';
import Projects from './Projects';

function AppContent() {
  const location = useLocation();

  return (
    <div>
      <div className="App">
        <nav>
          <div className="name">
            Samreen Kausar
          </div>

          <div className="nav-links">
            <Link to="/">About Me</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Achievements">Achievements</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Queries">Queries</Link>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Queries" element={<Queries />} />
      </Routes>

      {location.pathname !== '/Queries' && <Queries />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;