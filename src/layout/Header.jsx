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
                <Link to="/" className="logo">{t('nav.portfolio')}</Link>
                <nav>
                    <ul>
                        <li><Link to="/">{t('nav.home')}</Link></li>
                        <li><Link to="/about">{t('nav.about')}</Link></li>
                        <li><Link to="/articles">{t('nav.articles')}</Link></li>
                        <li><Link to="/contact">{t('nav.contact')}</Link></li>
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
