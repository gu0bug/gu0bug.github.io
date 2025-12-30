import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Article from './pages/Article';
import './i18n/config';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} My Personal Site. Built with React & Vite.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
