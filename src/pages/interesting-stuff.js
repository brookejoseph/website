import React from 'react';
import { Link } from 'react-router-dom';

function ThingsIWontShutUpAbout() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>Things I Won't Shut Up About</h1>
        <div className="article-meta">
        </div>
      </header>
      
      <article className="article-content">
        <ul>
          <li>Lebanese culture (food, traditions, history, etc.)</li>
          
          <li>how you don't truly know someone until you've worked, lived or travelled with them.</li>
          
          <li>uploading a map of the human brain to a computer. some cool labs actively working on this. its cool.</li>
          
          <li>optimizing the food we eat and why it matters.</li>
          
          <li>how the food you eat can make you depressed.</li>
          
          <li>the importance of following your gut, how to refine it and why its your only tool to building anything aligned with what you want.</li>
          
          <li>speaking french (only ask me to speak french if you aren't fluent lol)</li>
          
          <li>modern environments differ radically from those in which human development evolved, with unknown consequences. What will be consequences be? idk it freaks me out lol</li>
          
          <li>how information abundance has paradoxically led to worse decision making. (candid human experience lol)</li>
          
          <li>how coordination failures prevent us from implementing solutions we already have.</li>
          
          <li>the beauty of understanding systems at multiple levels of abstraction. specifically in the context of software! (hardware → os → compiler/assembly → low level languages …)</li>
          
          <li>how breakthrough technologies often come from unexpected interdisciplinary connections.</li>
          
          <li>how most productivity systems fail because they ignore cognitive limitations!!! (both a meta discussion and on a microlevel with daily productivity systems)</li>
          
          <li>how travelling the world should be a prerequisite to building anything "impactful".</li>
        </ul>
      </article>
      
      <div className="article-navigation">
        <Link to="/#mental" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default ThingsIWontShutUpAbout;