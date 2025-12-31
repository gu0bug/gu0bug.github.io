import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="glass-card">
                <h1>{t('contact.title')}</h1>
                <p>{t('contact.subtitle')}</p>
            </div>
        </div>
    );
};

export default Contact;
