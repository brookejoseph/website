import React from 'react';
import { Link } from 'react-router-dom';

function DifferentialPrivacy() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>Introduction to Differential Privacy</h1>
        <div className="article-meta">
          <span className="article-date">March 15, 2023</span>
        </div>
      </header>
      
      <article className="article-content">
        <p>
          Differential privacy is a mathematical framework for providing privacy guarantees. 
          It ensures that the removal or addition of a single database item does not substantially 
          affect the outcome of any analysis.
        </p>
        
        <h2>Key Concepts</h2>
        <p>
          The fundamental principle behind differential privacy is that when looking at the output 
          of a differentially private analysis, it should be difficult to determine whether any 
          specific individual's data was included in the original dataset or not.
        </p>
        
        {/* Add more article content here */}
      </article>
      
      <div className="article-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default DifferentialPrivacy;