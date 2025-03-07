import React from 'react';
import { Link } from 'react-router-dom';

function Ambitious() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>Reflections on Authentic vs Performative Ambition</h1>
        <div className="article-meta">
        </div>
      </header>
      
      <article className="article-content">
        <p className="article-lead">
          I've realized there are two types of ambitious people: <strong>authentic and performative</strong>. Understanding the difference has been transformative in how I approach work and personal growth.
        </p>
        
        <p>
          People with performative ambition are the people who fall under, as the swedes would call it, good girl syndrome (applies to both genders). They follow playbooks perfectly, check all the boxes off, etc. They care a lot more about <strong>being seen</strong> as doing everything they can rather than <strong>actually</strong> doing everything they can.
        </p>
        
        <p>
          There was a great piece called trying to try, one of my favourite parts, "almost any effort will serve to convince us that we have 'tried our hardest', if trying our hardest is all we are trying to do." This way of thinking is a lot more geared towards optics, you're constantly looking to see how other people are perceiving you. People with this performative ambition tend to care a lot more about <strong>feeling</strong> like they're doing the right thing rather than doing the right thing. They confused effort with effectiveness ("I worked hard" vs. "I solved the problem").
        </p>
        
        <p>
          I would say this manifests as spending hours studying to get the best grades (even if you think the class is pointless), working on projects to impress an employer, building something because you want to impress Joe Schmoe 😎 or improving your skills in xyz because you think it'll gain you brownie points with a group of people.
        </p>
        
        <p>
          People with authentic ambitions tend to care a lot more about actually getting the work done. Instead of evaluating their work on this spectrum of "I feel like I've tried my best or at least enough", <strong>it's either you got the work done right or not</strong>, that's it, it's binary. They evaluate work based on its real world impact. People with this ambition tend not to care about what others think, they eliminate the noise and are often using their internal compass when deciding what to build, who to work with, what they want to do with their lives etc.
        </p>
        
        <p>
          Also note that I was careful not to say that they resist social norms because the conventional "contrarian" has become a trend and, as a result, the complete opposite of what it means to be so. The new contrarians are people who follow their intuition.
        </p>
        
        <p>
          I will say I fell victim to the good girl syndrome lol, and I would argue most ambitious people have. For me, it came as a newcomer to Waterloo. I was around people who were playing different games and became almost a chameleon to these communities. I used to be so focused on becoming the best engineer, just building more and more, and things I wasn't even excited about, such that I forgot who I actually was and what pumped me up. It took me moving all the way to Europe and removing myself from certain environments to realize this.
        </p>
      </article>
      
      <div className="article-navigation">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Ambitious;