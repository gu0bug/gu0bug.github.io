import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    const mockArticles = [
        { id: 1, title: 'My First Post', date: '2023-10-01', summary: 'This is the summary of my first blog post.' },
        { id: 2, title: 'Learning React', date: '2023-10-05', summary: 'Thoughts on the modern React ecosystem.' },
        { id: 3, title: 'Designing for the Web', date: '2023-11-12', summary: 'How to create clean and user-friendly interfaces.' }
    ];

    return (
        <div className="container">
            {/* Hero Section */}
            <section className="hero">
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
                <a href="#articles" className="cta-button">{t('hero.cta')}</a>
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <h2>{t('about.title')}</h2>
                <p style={{ maxWidth: '700px', fontSize: '1.1rem' }}>{t('about.content')}</p>
            </section>

            {/* Articles Section */}
            <section id="articles" className="section">
                <h2>{t('articles.title')}</h2>
                <div className="article-list">
                    {mockArticles.map(article => (
                        <Link key={article.id} to={`/article/${article.id}`} className="article-card">
                            <h3>{article.title}</h3>
                            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{article.date}</span>
                            <p>{article.summary}</p>
                            <span style={{ color: '#2563eb', fontWeight: '500', display: 'block', marginTop: '1rem' }}>
                                {t('articles.readMore')} →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
