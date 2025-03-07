import React from 'react';
import { Link } from 'react-router-dom';

function HealthyEatingGuide() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>How I eat - 90% of the time</h1>
        <div className="article-meta">
        </div>
      </header>
      
      <article className="article-content">
        <p>
          My mom is really big into eating clean and healthy, so I grew up always eating very clean. Then I moved out, started focusing all my attention to building and transparently I spent less time focused on the quality of my food and ate whatever. I noticed how much of a toll it put on mental health, my skin was bad, my productivity, happiness, mental clarity and overall confidence. So I basically went back to square one and taught myself how to grocery shop properly and started meal prepping so I had no excuses but to eat clean. 
        </p>
        
        <p>
          I really love the whole foods "diet", if it didn't come from the ground don't eat it. I'm obvious not a doctor but this is all based on the research I've done. Here is a quick little grocery hall
        </p>
        
        <h3>Twice a year:</h3>
        
        <ul>
          <li><strong>Creatine</strong> → I used to take <a href="https://www.weightworld.uk/creatine-monohydrate-powder.html?utm_source=awin&utm_medium=affiliate&utm_campaign=489797&awc=22446_1741337551_acff6ee4f9ba9a9544b4bb5ef20328f7" target="_blank" rel="noopener noreferrer">monohydrate creatine everyday</a>, but it dehydrates you and found I wasn't drinking enough water so stopped.</li>
          <li><strong>Collagen</strong> → great for skin and joints. I supplement this <a href="https://www.vitalproteins.com/">vital proteins is an amazing brand.</a></li>
          <li><strong>Omega-3 →</strong> I take everyday</li>
          <li><strong>B-complex</strong> (energy, brain) → I take supplements every other day</li>
          <li><strong>D</strong> (bones, mood) – I take supplements everyday in the winter and every other day in the summer</li>
          <li><strong>Magnesium</strong> (muscle function) → I take a supplement every night</li>
          <li><strong>Zinc</strong> (immune, metabolism) → only take it when I get sick tbh lol</li>
          <li><strong>Iron</strong> (oxygen transport) → I have naturally low iron (most women do) so I take supplements.</li>
        </ul>
        
        <p>side note [other micronutrients]:</p>
        
        <ul>
          <li><strong>A</strong> (eyes, skin) → from my food</li>
          <li><strong>K</strong> (blood clotting, bone health) → from my food!</li>
          <li><strong>Iron</strong> (oxygen transport) → I have naturally low iron (most women do) so I take supplements.</li>
          <li><strong>Calcium</strong> (bones, nerves) → from my food</li>
        </ul>
        
        <h3>Every week:</h3>
        
        <ul>
          <li>
            <strong>Protein</strong>
            <ul>
              <li>Lean ground beef meats (costco sells for cheap)</li>
              <li>Chicken (I avoid the thighs, they're usually more fatty)</li>
              <li>salmon</li>
              <li>eggs (don't skip the yolk!) → high in protein and iron</li>
              <li>low fat greek yogurt → high protein and also great for your gut</li>
              <li>parmesan cheese → potentially bold of me to put in the protein section haha but its high in many essential vitamins and calcium.</li>
            </ul>
          </li>
          <li>
            <strong>Fats</strong>
            <ul>
              <li>I should be better at this</li>
              <li>I mainly consume with olive oil</li>
              <li>fatty fish</li>
            </ul>
          </li>
          <li>
            <strong>Carbs</strong>
            <ul>
              <li>sweet potatoes → high in potassium, vitamin A + C, fibre</li>
              <li>brussels sprouts → high in Omega 3, vitamin K, fibre</li>
              <li>broccoli</li>
              <li>berries on greek yogurt</li>
              <li>bananas → electrolytes, potassium</li>
              <li>sourdough (sometimes) → technically counts as fermented food</li>
            </ul>
          </li>
        </ul>
        
        <h3>Best places to shop</h3>
        
        <ul>
          <li>
            US
            <ul>
              <li>Aldis</li>
              <li>Costco</li>
              <li>Whole Foods (expensive tho :/)</li>
            </ul>
          </li>
          <li>
            Canada
            <ul>
              <li>Zhers is great</li>
              <li>Loblaws</li>
            </ul>
          </li>
          <li>
            Sweden
            <ul>
              <li>ICA</li>
            </ul>
          </li>
        </ul>
        
        <h3><strong>What I Avoid</strong></h3>
        
        <ul>
          <li>Ultra-processed foods + fast food places (ofc)</li>
          <li>bread + pastries + pasta +dough of any sort</li>
          <li>seed oils</li>
          <li>excessive alcohol (I usually never drink, I don't find it necessary)</li>
        </ul>
        
        <h3><strong>what and how I normally eat</strong></h3>
        
        <ul>
          <li>
            when I'm not travelling and am stationed in one city I block out 3 hours every Sunday to meal prep. I promise it saves so much time and is incredibly efficient. I like to make myself lunch for the week which is usually
            <ul>
              <li>chicken breast</li>
              <li>brussels sprouts</li>
              <li>broccoli</li>
              <li>sweet potatoes</li>
            </ul>
          </li>
          <li>
            I usually don't get super hungry for dinner, but sometimes I'll meal prep just different sides I can through together quickly. I also sometimes deviate from the chicken and veggies meal and have a few other go to's I'll mention below
            <ul>
              <li>
                option 1
                <ul>
                  <li>ground beef patties</li>
                  <li>parmesan cheese</li>
                  <li>baked sweet potatoe fries (no oil)</li>
                </ul>
              </li>
              <li>
                option 2 (if I'm feeling fancy lol)
                <ul>
                  <li>steak</li>
                  <li>bananas cooked in same pot as steak with honey (SO GOOD)</li>
                  <li>eggs</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>For breakfast I'm usually always on the run so I just have greek yogurt and a banana. If I have time I'll have a hardboiled egg as well.</li>
          <li>side note I ofc sometimes eat the foods I try to avoid, especially if I'm travelling or going out to dinner, etc. I just try to stick to the above 90% of the time.</li>
        </ul>
        
        <p>hope this is helpful!</p>
      </article>
      
      <div className="article-navigation">
        <Link to="/?section=health" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default HealthyEatingGuide;