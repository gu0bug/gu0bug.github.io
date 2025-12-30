import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(nextLang);
    };

    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PORTFOLIO</Link>
                <nav>
                    <ul>
                        <li><Link to="/">{t('nav.home')}</Link></li>
                        <li><a href="#about">{t('nav.about')}</a></li>
                        <li><a href="#articles">{t('nav.articles')}</a></li>
                    </ul>
                </nav>
                <button className="lang-switch" onClick={toggleLanguage}>
                    {t('language')}
                </button>
            </div>
        </header>
    );
};

export default Header;
