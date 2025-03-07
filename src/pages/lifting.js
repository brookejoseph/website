import React from 'react';
import { Link } from 'react-router-dom';

function LiftingGuide() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>My Lifting Routine</h1>
        <div className="article-meta">
        </div>
      </header>
      
      <article className="article-content">
        <p>
          I lift 6 days a week and have been (even through other training) since I was 16. I workout in the morning 5am usually but had to push it to 6am when I lived in Toronto. I've gone through any different training plans. Here is how I train and my advice for what its worth haha.
        </p>
        
        <p>
          First thing I'll say is always have a plan. Map out what your goals are and build a plan for how you'll progress week by week and how you'll measure progress. I have split my goals into three parts
        </p>
        
        <ol>
          <li>aesthetic
            <ul>
              <li>includes cutting and bulking and a lot of focused nutrient</li>
            </ul>
          </li>
          <li>strength/power
            <ul>
              <li>usually paired with training for different races</li>
              <li>since being significantly more career focused these days, I opt in for this type of training as a proxy to stay healthy lolol</li>
            </ul>
          </li>
          <li>Building muscle
            <ul>
              <li>if you're a gym bro reading this I already know you're going to have stuff to say lol</li>
            </ul>
          </li>
        </ol>
        
        <h3>Aesthetic</h3>
        
        <ul>
          <li>When I was younger I spent a lot of time training to look like a certain person. Sadly, life isn't fair, and we're not all built the same lol. So I learned my lesson and realized that training for aesthetics is still productive just requires some reframing. Instead I started seeing it more as training for MY optimal physique. In terms of the training, when losing fat I followed my strength training routine but focused on eating in a deficit. I also have tried recomp before but idk I think its much more productive/sustainable to build muscle and lose fat separately.</li>
        </ul>
        
        <h3>SIDE NOTE:</h3>
        
        <ul>
          <li>PROGRESSIVE OVERLOAD is a beautiful beautiful thing lol. Its basically the idea that you're progressing in your movements over time. It looks different depending on your goals. I'll explain more.</li>
        </ul>
        
        <h3>Strength</h3>
        
        <ul>
          <li>okay now for the good stuff, the routine. I will share that the specific movements change but I'll add the relevant info that generalizes across all sessions.
            <ul>
              <li><strong>Reps & Sets:</strong>
                <ul>
                  <li>depends on muscle groups. For legs and shoulders I found that higher rep ranges was optimal and for biceps and back less so. But generally: 3-6 reps, 3-5 sets</li>
                </ul>
              </li>
              <li><strong>Exercises:</strong>
                <ul>
                  <li><strong>Compound lifts</strong> are GREAT for power: squat, deadlift, bench, overhead press</li>
                </ul>
              </li>
              <li><strong>Split:</strong>
                <ul>
                  <li>I like the classic push, pull and legs</li>
                </ul>
              </li>
              <li>Progressive overload
                <ul>
                  <li>Increase weight (e.g., adding 5 lbs to your squat every week)</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
        <h3>Building muscle (Hypertrophy)</h3>
        
        <ul>
          <li>When I was in this era I listened to my homie Jeff Nippard, he is great and very knowledgeable.
            <ul>
              <li><strong>Reps & Sets:</strong> 6-12 reps, 3-4 sets</li>
              <li><strong>Split:</strong>
                <ul>
                  <li>still do push, pull and legs</li>
                </ul>
              </li>
              <li>Progressive overload
                <ul>
                  <li>Increase reps, weight, or volume (e.g., going from 8 to 10 reps or adding an extra set).</li>
                  <li>track everything</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
        <h3>Extra side notes</h3>
        
        <ul>
          <li>bad training days happen, don't let it worry you. As long as you show up, thats all that matters.</li>
          <li>energy matters a lot, I like to have energy drinks when I work out. I noticed I'm able to push myself a lot harder.</li>
          <li>try to eat a high protein meal after you work out.</li>
          <li>track your weights</li>
        </ul>
      </article>
      
      <div className="article-navigation">
        <Link to="/?section=fitness" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default LiftingGuide;