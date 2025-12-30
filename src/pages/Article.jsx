import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();

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
        <div className="container section">
            <Link to="/" style={{ color: '#2563eb', display: 'block', marginBottom: '2rem' }}>← Back to Home</Link>
            <article>
                <header style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{articleContent.title}</h1>
                    <p style={{ color: '#64748b' }}>Published on {articleContent.date}</p>
                </header>
                <div style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>
                    {articleContent.content}
                </div>
            </article>
        </div>
    );
};

export default Article;
