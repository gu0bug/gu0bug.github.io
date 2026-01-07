import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './layout/Header';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import './i18n/config';
import './index.css';

const AppContent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className={`app ${isLanding ? 'landing-active' : ''}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<RouteGuard title={t('nav.articles')}><Articles /></RouteGuard>} />
          <Route path="/about" element={<RouteGuard title={t('nav.about')}><About /></RouteGuard>} />
          <Route path="/contact" element={<RouteGuard title={t('nav.contact')}><Contact /></RouteGuard>} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Gu0’ Pages. {t('footer.rights')}. | {t('footer.builtWith')}
        </div>
      </footer>
    </div>
  );
};

const RouteGuard = ({ children, title }) => {
  React.useEffect(() => {
    document.title = `${title} | Gu0’ Pages`;
  }, [title]);
  return children;
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
