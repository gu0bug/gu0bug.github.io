import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="landing-page">
            <div className="glass-container">
                <h1 className="landing-title">Gu0’ Pages</h1>
                <p className="landing-subtitle">数字游民</p>
                <nav className="landing-nav">
                    <Link to="/articles" className="landing-btn">文章列表</Link>
                    <Link to="/about" className="landing-btn">关于</Link>
                    <Link to="/contact" className="landing-btn">联系</Link>
                </nav>
            </div>
        </div>
    );
};

export default Home;
