import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="glass-card">
                <h1>{t('about.title')}</h1>
                <p>{t('about.content')}</p>
            </div>
        </div>
    );
};

export default About;
