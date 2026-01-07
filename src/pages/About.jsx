import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="container about-page">
            <div className="glass-card">
                <header className="about-header text-center">
                    <h1 className="about-title">{t('about.title')}</h1>
                    <p className="about-tagline">{t('about.intro')}</p>
                </header>

                <section className="about-intro">
                    <p className="description">{t('about.description')}</p>
                    <p className="vision">{t('about.vision')}</p>
                </section>

                <div className="roles-grid">
                    <div className="role-item">
                        <h3>{t('about.roles.architect.title')}</h3>
                        <p>{t('about.roles.architect.content')}</p>
                    </div>
                    <div className="role-item">
                        <h3>{t('about.roles.builder.title')}</h3>
                        <p>{t('about.roles.builder.content')}</p>
                    </div>
                    <div className="role-item">
                        <h3>{t('about.roles.leader.title')}</h3>
                        <p>{t('about.roles.leader.content')}</p>
                    </div>
                </div>

                <footer className="about-footer text-center">
                    <p className="philosophy">{t('about.philosophy')}</p>
                    <h3 className="final-tagline">{t('about.final')}</h3>
                </footer>
            </div>
        </div>
    );
};

export default About;
