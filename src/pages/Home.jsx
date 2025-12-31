import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="landing-page">
            <div className="glass-card text-center">
                <h1 className="landing-title">{t('hero.title')}</h1>
                <p className="landing-subtitle">{t('hero.subtitle')}</p>
                <nav className="landing-nav">
                    <Link to="/articles" className="landing-btn">{t('nav.articles')}</Link>
                    <Link to="/about" className="landing-btn">{t('nav.about')}</Link>
                    <Link to="/contact" className="landing-btn">{t('nav.contact')}</Link>
                </nav>
            </div>
        </div>
    );
};

export default Home;
