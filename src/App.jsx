import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import './i18n/config';
import './index.css';

const AppContent = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className={`app ${isLanding ? 'landing-active' : ''}`}>
      {!isLanding && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>
      {!isLanding && (
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} My Personal Site. Built with React & Vite.
          </div>
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
