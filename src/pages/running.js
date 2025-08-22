import React from 'react';
import { Link } from 'react-router-dom';

function Running() {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>How I Train</h1>
        <div className="article-meta">
        </div>
      </header>
      
      <article className="article-content">
        <p>
          you'll likely find better, more rigorous plans somewhere else online. this is mainly for myself to come back to haha.
        </p>
        
        <h3><strong>Training for cross/track</strong></h3>
        
        <ul>
          <li>I used to run track and cross country and then eventually started running half marathons and one marathon. So I know a few things about what it takes to train for a run (specifically long distances), but I'm definitely not an expert. 800m is one of the hardest races in track (don't come for me lol) but the focus with races from 800m - 2k is speed, power and endurance. This was my training plan with the team, usually.</li>
          <li><strong>Runs:</strong> 4-5x/week
            <ul>
              <li><strong>Intervals (usually twice a week)</strong>
                <ul>
                  <li>sprint then slower pace, 400m repeats at race pace</li>
                </ul>
              </li>
              <li><strong>Tempo runs</strong>
                <ul>
                  <li>moderate effort</li>
                  <li>I usually did these on sunday</li>
                </ul>
              </li>
              <li><strong>Sprints & hills</strong>
                <ul>
                  <li>I HATED THESE but they're great and very important especially if you're running cross.</li>
                </ul>
              </li>
              <li><strong>Long runs</strong> (~5-7 miles for endurance)</li>
            </ul>
          </li>
        </ul>
        
        <h3><strong>Half Marathon</strong></h3>
        
        <ul>
          <li>After my high school and towards the end of my high school days I started getting into longer races. My training for half marathons was optimized more for endurance and I was racing to place (especially for my first race) so I was focused on getting the race pace control down pat. Also there is so much that goes into properly hydrating and replenishing yourself during the race. I took a lot of time during my training to experiment with different energy gels, when to hydrate, where the water stations on the course are, etc.</li>
          <li><strong>Runs:</strong> 4-6x/week
            <ul>
              <li><strong>Long run</strong>
                <ul>
                  <li>10-14 miles, slow pace</li>
                  <li>once a week</li>
                  <li>when I experimented with gels/when to hydrate</li>
                </ul>
              </li>
              <li><strong>Tempo runs</strong>
                <ul>
                  <li>this was most of my runs</li>
                  <li>sustained effort at 80-90% effort</li>
                </ul>
              </li>
              <li><strong>Speed workouts</strong>
                <ul>
                  <li>toward the beginning to middle of my training</li>
                  <li>mile repeats</li>
                  <li>strides</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>I found that having gels every 5km was perfect for me, towards the end of the race I had them more frequently.</li>
        </ul>
        
        <h3><strong>Marathon</strong></h3>
        
        <ul>
          <li>a complete and different beast. this will consume your whole life when you're training for this. I always say you can walk into a half without training but definitely not a marathon. The training is pretty much the same as for a half but the long runs are longgg haha.</li>
          <li><strong>Runs:</strong> 5-6x/week
            <ul>
              <li><strong>Long run</strong> (16-22 miles, slow pace)</li>
            </ul>
          </li>
        </ul>
        
        <h3>few extra notes + things I wish I knew sooner</h3>
        
        <ul>
          <li>training shoes and race shoes should be different (this is potentially controversial but is what worked for me)
            <ul>
              <li>racing shoes → thinner sole, closer foot to pavement contact (allows you to move faster)
                <ul>
                  <li>nike is def the best brand for this</li>
                  <li><a href="https://www.nike.com/se/en/w?q=vaporflys&vst=vaporflys">vaporflys</a> are the best possible shoes to race in</li>
                </ul>
              </li>
              <li>training shoes → thicker sole, good to run many many miles in
                <ul>
                  <li><a href="https://21run.com/se/asics-magic-speed-4-herr-1011b875-101?gad_source=1&gclid=Cj0KCQiAz6q-BhCfARIsAOezPxlELYT1vCjuwDL03hh2kueXf2434VEvxZeiuYFVkmzRS62_u3JI8-EaAgMsEALw_wcB">these are my fav</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>my favourite gels
            <ul>
              <li><a href="https://www.rei.com/product/835058/honey-stinger-organic-energy-gel?cm_mmc=aff_AL-_-40661-_-55097-_-NA&avad=55097_a401b9a9d">The holy grail my all time favourite</a></li>
              <li><a href="https://www.amazon.com/dp/B087T434YT?tag=thestrategistsite-20&ascsubtag=__st0307awd__cm19o8d8k00000iihtd64ebgs__243613________1________google.com&th=1">GU anything is great</a></li>
              <li><a href='https://untapped.cc/product/coffee-untapped-energy-gel/'>I discovered Untapped in Ottawa haha</a></li>
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

export default Running;