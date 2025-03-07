import React from 'react';
import { Link } from 'react-router-dom';

function InterestingProblems() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>Problems I Find Interesting</h1>
        <div className="article-meta">
        </div>
      </header>
      
      <article className="article-content">
        <ul>
          <li><strong>Misallocation of talent</strong>
            <ul>
              <li>many of the most talented people in the world are working on suboptimal problems. Researchers focusing on citation count over impact of research or spending hours on grant applications instead of tackling the research, operators stuck in consulting, talented engineers working at a FAANG company.</li>
            </ul>
          </li>
          
          <li><strong>Metascience funding mechanisms</strong>
            <ul>
              <li>we lack effective systems for funding research on improving science itself. As mentioned in the previous problem this often manifests as incredibly talented researchers spending time justifying why they deserve money.</li>
            </ul>
          </li>
          
          <li><strong>Knowledge integration across hyperspecialized fields</strong>
            <ul>
              <li>modern research has fragmented into silos so extreme that breakthrough solutions in one domain rarely reach related problems in others.</li>
            </ul>
          </li>
          
          <li><strong>Coordination mechanisms for addressing collective action problems</strong>
            <ul>
              <li>many of our existential challenges have technically feasible solutions but lack institutional frameworks to implement them. people historically get more done as a small nit collective, how we can produce this environment.</li>
            </ul>
          </li>
          
          <li><strong>Research reproducibility infrastructure</strong>
            <ul>
              <li>a growing percentage of published research cannot be replicated. there is a huge gap between the results being produced in labs and actually mass adoption/implementation of this tech.</li>
            </ul>
          </li>
          
          <li><strong>What is the most effective way of adapting the education system to modern technology</strong>
            <ul>
              <li>current schooling systems are misaligned with the talent the world needs today. their structures are rooted in outdated traditions and incentive systems. that's why we often see people working on interesting and innovative problems operating outside of, or actively opposing these traditional educational frameworks.</li>
            </ul>
          </li>
          
          <li><strong>Can we build systems that provide humans with a fair and equitable means of compensation and a sense of purpose?</strong>
            <ul>
              <li>I find this especially interesting in the context of AGI. what happens when it is not longer a matter of skill or knowledge and we have systems that will outperform us in almost every vertical.</li>
            </ul>
          </li>
          
          <li><strong>Superbabies. How can we make babies smarter?</strong>
            <ul>
              <li>the genetic foundations of human intelligence represent one of our most significant frontiers for advancing human potential.</li>
            </ul>
          </li>
          
          <li><strong>Preventative medicine</strong>
            <ul>
              <li>an overwhelming number of deaths could have been prevented if they were caught early enough. how do we design systems to prevent this instead of reacting?</li>
            </ul>
          </li>
        </ul>
      </article>
      
      <div className="article-navigation">
        <Link to="/#mental" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default InterestingProblems;