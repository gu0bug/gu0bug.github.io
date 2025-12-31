import React from 'react';
import { useTranslation } from 'react-i18next';

const Articles = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="glass-card">
                <h1>{t('articles.title')}</h1>
                <p style={{ color: 'var(--secondary-color)' }}>Coming soon...</p>
            </div>
        </div>
    );
};

export default Articles;
