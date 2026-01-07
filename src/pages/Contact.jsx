import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="container contact-page">
            <div className="glass-card contact-card">
                <h1 className="contact-title">{t('contact.title')}</h1>

                <div className="contact-content">
                    <p className="contact-mission"><strong>{t('contact.mission')}</strong></p>
                    <p className="contact-philosophy"><strong>{t('contact.philosophy')}</strong></p>

                    <div className="contact-intro">
                        <p>{t('contact.background')}</p>
                        <p>{t('contact.vision')}</p>
                    </div>

                    <p className="contact-credo">{t('contact.credo')}</p>

                    <div className="contact-roles">
                        <p className="role-item-text">{t('contact.roles.architect')}</p>
                        <p className="role-item-text">{t('contact.roles.operator')}</p>
                    </div>

                    <div className="contact-footer-text">
                        <p>{t('contact.footer')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
