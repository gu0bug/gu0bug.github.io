import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(nextLang);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { to: "/articles", label: t('nav.articles') },
        { to: "/about", label: t('nav.about') },
        { to: "/contact", label: t('nav.contact') },
    ];

    return (
        <header>
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMenu}>{t('nav.portfolio')}</Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="lang-switch desktop-only" onClick={toggleLanguage}>
                        {t('language')}
                    </button>

                    <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
                <div className={`mobile-sidebar ${isMenuOpen ? 'active' : ''}`}>
                    <div className="sidebar-header">
                        <button className="close-btn" onClick={closeMenu}>&times;</button>
                    </div>
                    <nav className="mobile-nav">
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} onClick={closeMenu}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="sidebar-footer">
                        <div className="divider"></div>
                        <button className="lang-switch-mobile" onClick={() => { toggleLanguage(); }}>
                            {t('language')}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
