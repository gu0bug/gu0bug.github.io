import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Article = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    // In a real app, you'd fetch based on ID. This is a simplified demo.
    const articleContent = {
        title: 'My Journey in Tech',
        date: '2023-12-30',
        content: `
      Technology is always evolving, and so am I. In this post, I share my experiences and lessons learned over the past few years.
      
      Clean code is not just about aesthetics; it's about maintainability and collaboration. When we write code, we are communicating with other developers as much as we are with the machine.
      
      Design is another crucial aspect. A well-designed tool feels invisible - it just works as you expect it to.
    `
    };

    return (
        <div className="container">
            <div className="glass-card">
                <Link to="/" style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '2rem' }}>← {t('articles.back')}</Link>
                <article>
                    <header style={{ marginBottom: '3rem', background: 'transparent', border: 'none', position: 'static', height: 'auto' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{articleContent.title}</h1>
                        <p style={{ color: 'var(--secondary-color)' }}>{t('articles.published')} {articleContent.date}</p>
                    </header>
                    <div style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>
                        {articleContent.content}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Article;
