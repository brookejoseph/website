import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';


import './App.css';

function App() {
  // State to track which section to display
  const [activeSection, setActiveSection] = useState('main');
  const [activeScrollSection, setActiveScrollSection] = useState('intro');
  
  const sectionRefs = {
    intro: useRef(null),
    now: useRef(null),
    work: useRef(null),
    projects: useRef(null)
  };

  // Function to handle scrolling to different sections within the main content
  const scrollToSection = (sectionId) => {
    // If selecting writing or travel, switch to that view
    if (sectionId === 'writing' || sectionId === 'travel' || sectionId === 'mental' || sectionId === 'videos') {
      setActiveSection(sectionId);
      window.scrollTo(0, 0);
      return;
    }
    
    // Otherwise, ensure we're in main view and scroll to the section
    setActiveSection('main');
    
    const section = sectionRefs[sectionId].current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position (only when in main view)
  useEffect(() => {
    const handleScroll = () => {
      if (activeSection !== 'main') return;
      
      const scrollPosition = window.scrollY + 100; // offset for header

      // Check each section's position
      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveScrollSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionRefs]); // Added sectionRefs to dependency array

  return (
    <div className="app-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="logo">Brooke Joseph</div>
          
          <nav className="nav-menu">
            <button 
              className={`nav-item ${activeSection === 'main' && activeScrollSection === 'intro' ? 'active' : ''}`}
              onClick={() => scrollToSection('intro')}
            >
              start here 🎬
            </button>
            <button 
              className={`nav-item ${activeSection === 'main' && activeScrollSection === 'now' ? 'active' : ''}`}
              onClick={() => scrollToSection('now')}
            >
              currently 🩷
            </button>
            <button 
              className={`nav-item ${activeSection === 'main' && (activeScrollSection === 'work' || activeScrollSection === 'projects') ? 'active' : ''}`}
              onClick={() => scrollToSection('work')}
            >
              teams I've worked with 👩🏼‍💻
            </button>
            <button 
              className={`nav-item ${activeSection === 'writing' ? 'active' : ''}`}
              onClick={() => scrollToSection('writing')}
            >
              technial writing 🤓
            </button>

            <button 
              className={`nav-item ${activeSection === 'videos' ? 'active' : ''}`}
              onClick={() => scrollToSection('videos')}
            >
              videos 📸
            </button>
            <button 
              className={`nav-item ${activeSection === 'mental' ? 'active' : ''}`}
              onClick={() => scrollToSection('mental')}
            >
              public notes 📖
            </button>
            <button 
              className={`nav-item ${activeSection === 'travel' ? 'active' : ''}`}
              onClick={() => scrollToSection('travel')}
            >
              travel 🌏
            </button>
          </nav>
          
          <div className="sidebar-footer">
            <div className="social-links">
              <a href="https://twitter.com/BrookeaJoseph">Twitter</a>
              <a href="https://www.linkedin.com/in/brooke-joseph-0a7525196/">LinkedIn</a>
              <a href="https://github.com/brookejoseph">GitHub</a>
              <a href="https://brookejoseph.substack.com/">Substack</a>
            </div>
            <div className="copyright">© {new Date().getFullYear()}</div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* Sticky header that changes based on section */}
        <div className="sticky-header">
          <div className="section-indicator">
            {activeSection === 'main' && activeScrollSection === 'intro' && 'BROOKE JOSEPH'}
            {activeSection === 'main' && activeScrollSection === 'now' && 'RIGHT NOW I\'M'}
            {activeSection === 'main' && activeScrollSection === 'work' && 'IN PAST LIVES: TEAMS IVE WORKED WITH'}
            {activeSection === 'main' && activeScrollSection === 'projects' && 'IN PAST LIVES: PROJECTS'}
            {activeSection === 'writing' && 'TECHNICAL WRITING'}
            {activeSection === 'mental' && 'PUBLIC NOTES APP'}
            {activeSection === 'videos' && 'VIDEOS'} {/* Changed == to === */}
            {activeSection === 'travel' && 'TRAVEL'}
          </div>
        </div>

        {/* Main scrollable content (home, now, work, projects) */}
        {activeSection === 'main' && (
          <>
            {/* HEADER / INTRO SECTION */}
            <header className="header" ref={sectionRefs.intro}>
              <div className="header-content">
                <div className="header-image">
                  <img src="https://pbs.twimg.com/profile_images/1787242753060900864/dXQAhQIW_400x400.jpg" alt="Brooke Joseph" />
                </div>
                <div className="header-text">
                  <h1>BROOKE JOSEPH</h1>
                  <p className="location">
                    📍 Currently: In Sweden (<a href="https://twitter.com/BrookeaJoseph">say hi</a>) or shoot me an email: <a href="mailto:brooke@joseph.com">brooke@joseph.com</a>
                  </p>
                </div>
              </div>
              
              <p className="philosophy">
                I work for my 10 and 80 year old self. I belive true happiness comes from giving more to the world more than you take and solving the problems that matter most to you. 
              </p>
              
              <p className="interests">
                Not possible to list all of my interests but here are a few: consumer tech, low level systems (compilers, etc.), applied math for nuclear physics, lifting weights, travelling the world, etc.
              </p>
            </header>

            {/* RIGHT NOW I'M SECTION */}
            <section className="section" ref={sectionRefs.now}>
              <h2 className="section-title">RIGHT NOW I'M</h2>
              
              <ul className="current-list">
                <li>I'm training models on embedded systems at Ekkono 🍃 (knowledge distillation and quantization)</li>
                <li>Solo travelling Europe</li>
                <li>Building tools for cool companies</li>
                <li>Building tools for a non profit</li>
              </ul>
            </section>

            {/* IN PAST LIVES: WORK SECTION */}
            <section className="section" ref={sectionRefs.work}>
              <h2 className="section-title">IN PAST LIVES I EXPLORED</h2>
              
              <h3 className="subsection-title">TEAMS IVE WORKED WITH</h3>
              
                <div className="cards-container">
                  <div className="card purple-hover">
                    <div className="card-content">
                      <h4 className="card-title">Ekkono</h4>
                      <p className="card-description">
                        Making models smaller, doing work in model quantization and knowledge distillation.
                      </p>
                      <p className="card-date">Sweden</p>
                    </div>
                  </div>
                  
                  <div className="card pink-hover">
                    <div className="card-content">
                      <h4 className="card-title">Stealth</h4>
                      <p className="card-description">
                        Worked with founders who previously scaled to billon $ companies. Built 5 apps end-to-end with <b>100k users.</b> (did growth, building, product design, etc.)
                      </p>
                      <p className="card-date">Toronto</p>
                    </div>
                  </div>
                  
                  <div className="card yellow-hover">
                    <div className="card-content">
                      <h4 className="card-title">Devron</h4>
                      <p className="card-description">
                        Collaborated with senior engineers to incorporate Differential Privacy into their platform, navigating complex infrastructure.
                      </p>
                      <p className="card-date">New York</p>
                    </div>
                </div>
                
                  <div className="card purple-hover">
                    <div className="card-content">
                      <h4 className="card-title">CEP</h4>
                    <p className="card-description">
                      Helping fix a broken educational system in the US. Building tools for an amazing non-profit. 
                      </p>
                      <p className="card-date">America</p>
                    </div>
                  </div>
                  
                  <div className="card pink-hover">
                    <div className="card-content">
                      <h4 className="card-title">Dr Tong Lab</h4>
                      <p className="card-description">
                        I made 3D models of proteins.
                      </p>
                      <p className="card-date">Canada</p>
                    </div>
                  </div>
                </div>
            </section>

            {/* IN PAST LIVES: PROJECTS SECTION */}
            <section className="section" ref={sectionRefs.projects}>
              <h3 className="subsection-title">BUILDS</h3>
              
              <div className="cards-container">
                <div className="card yellow-hover">
                  <div className="card-content">
                    <h4 className="card-title">CPU from scratch</h4>
                    <p className="card-description">
                      Built a CPU from fundamental components, designing and implementing all logic gates and systems.
                    </p>
                    <p className="card-link"><a href="https://brookejoseph.substack.com/p/building-a-cpu-from-scratch">See more</a></p>
                  </div>
                </div>
                
                <div className="card purple-hover">
                  <div className="card-content">
                    <h4 className="card-title">GenTube</h4>
                    <p className="card-description">
                      Built first iteration. Has scaled to 500k+ images generated since and millions of users.
                    </p>
                    <p className="card-link"><a href="https://www.gentube.app/feed/spotlight">See more</a></p>
                  </div>
                </div>
                
                <div className="card pink2-hover">
                  <div className="card-content">
                    <h4 className="card-title">Carson</h4>
                    <p className="card-description">
                      Built and scaled. Users spending over 90 hours a week. Thousands of messages sent. 
                    </p>
                    <p className="card-link"><a href="https://www.trycarson.com/">See more</a></p>
                  </div>
                </div>
                
                <div className="card pink-hover">
                  <div className="card-content">
                    <h4 className="card-title">Vector Database</h4>
                    <p className="card-description">
                      Built a vector database from scratch for efficient similarity search and embedding retrieval.
                    </p>
                    <p className="card-link"><a href="https://github.com/brookejoseph/VectorDatabase">See more</a></p>
                  </div>
                </div>
  
                <div className="card yellow-hover">
                  <div className="card-content">
                    <h4 className="card-title">Connect based on Images</h4>
                    <p className="card-description">
                      Built a fun little tool to connect with people based on images in your camera.
                    </p>
                    <p className="card-link"><a href="https://github.com/brookejoseph/Find-A-Pal">See more</a></p>
                  </div>
                </div>

                <div className="card pink-hover">
                  <div className="card-content">
                    <h4 className="card-title">Personalized e-card</h4>
                    <p className="card-description">
                      Created a website that generates personalized hallmark cards. Worked on finetuning diffusion models and LLMs
                    </p>
                    <p className="card-link"><a href="https://sendhearts.app/">See more</a></p>
                  </div>
                </div>


                <div className="card pink-hover">
                  <div className="card-content">
                    <h4 className="card-title">Neo Scholar</h4>
                    <p className="card-description">
                    Just a great community of amazing people. 
                    </p>
                    <p className="card-link"><a href="https://neo.substack.com/p/meet-the-2025-neo-scholars">See more</a></p>
                  </div>
                </div>

                <div className="card pink2-hover">
                  <div className="card-content">
                    <h4 className="card-title">Contrary VP</h4>
                    <p className="card-description">
                    More amazing people!!
                    </p>
                    <p className="card-link"><a href="https://www.contrary.com/blog/class-of-2025">See more</a></p>
                  </div>
                </div>
                
                <div className="card yellow-hover">
                  <div className="card-content">
                    <h4 className="card-title">Real FL</h4>
                    <p className="card-description">
                      Created a real Federated learning environment with a Raspberry Pi to demonstrate privacy-preserving ML techniques.
                    </p>
                    <p className="card-link"><a href="https://github.com/brookejoseph/FederatedLearningRaspberry">See more</a></p>
                  </div>
                </div>

                <div className="card pink2-hover">
                  <div className="card-content">
                    <h4 className="card-title">More coming 🕑</h4>
                    <p className="card-description">
                    always building....
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* WRITING SECTION - Only displayed when selected */}
        {activeSection === 'writing' && (
          <section className="section">
            <h2 className="section-title">WRITING</h2>
            
            <div className="cards-container">
              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">Introduction to Differential Privacy</h4>
                  <p className="card-description">
                    An accessible explanation of differential privacy concepts and mathematics.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/introduction-to-differential-privacy-6a14c2a8ead2">Read</a></p>
                </div>
              </div>
              
              
              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Model Quantization</h4>
                  <p className="card-description">
                    A very simple explanation of vanilla model quantization.
                  </p>
                  <p className="card-link"><a href="https://open.substack.com/pub/brookejoseph/p/model-quantization?r=1rjzfc&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false">Read</a></p>
                </div>
              </div>
              
              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Brain-Computer Interface for Bipolar Disorder</h4>
                  <p className="card-description">
                    Exploring how BCI technology could revolutionize mental health treatment.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/brain-computer-interface-for-bipolar-disorder-def65cd5cad0">Read article</a></p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Digitalizing our Brain</h4>
                  <p className="card-description">
                    One of my many rabbit holes that converted into a post. Connectomics is insanely cool.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/a-beginners-guide-to-connectomics-5b0581c9cb6f">Read article</a></p>
                </div>
              </div>


               <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Leveraging Data for AgriTech</h4>
                  <p className="card-description">
                    We could literally transform agriculture by leveraging data from exisitng widely used sensors.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/leveraging-data-insights-in-agriculture-4523f96d8bba">Read article</a></p>
                </div>
              </div>
              

              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Drug Development</h4>
                  <p className="card-description">
                    My rant on how inefficient drug development is and why its killing us.
                  </p>
                  <p className="card-link"><a href="https://open.substack.com/pub/brookejoseph/p/breaking-the-90-barrier-how-ai-is?r=1rjzfc&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false">Read article</a></p>
                </div>
              </div>
              
              
              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">A Guide to Privacy Preserving Technology</h4>
                  <p className="card-description">
                    An overview of various technologies that help protect privacy in the digital age.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/a-guide-to-privacy-preserving-technology-8db3d20dd8f1">Read</a></p>
                </div>
              </div>

              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Model Distillation</h4>
                  <p className="card-description">
                    All the fun things about model distillation.
                  </p>
                  <p className="card-link"><a href="https://open.substack.com/pub/brookejoseph/p/model-distillation?r=1rjzfc&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false">Read</a></p>
                </div>
              </div>
            </div>


            
            
            <div className="back-button-container">
              <button className="back-button" onClick={() => setActiveSection('main')}>
                ← Back to main page
              </button>
            </div>
          </section>
        )}

        {activeSection === 'videos' && (
          <section className="section">
            <h2 className="section-title">VIDEOS</h2>
            
            <div className="cards-container">
              
              <div className="card yellow-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/UXxHawXiN6w/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://www.youtube.com/watch?v=UXxHawXiN6w", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Oppenheimer Math!</h4>
                  <p className="card-description">
                    Why the world almost ended. 
                  </p>
                </div>
              </div>

              <div className="card purple-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/75wv-WgqTic/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://www.youtube.com/watch?v=75wv-WgqTic", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Federated Learning Explained</h4>
                  <p className="card-description">
                    A deep dive into how federated learning.
                  </p>
                </div>
              </div>
              
              <div className="card pink-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/t18MBKs5uSQ/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://www.youtube.com/watch?v=t18MBKs5uSQ", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Differential Privacy and FL</h4>
                  <p className="card-description">
                    How and why to combine FL and DP.
                  </p>
                </div>
              </div>
              
              <div className="card yellow-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/S3PsPC8kHng/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://www.youtube.com/watch?v=S3PsPC8kHng", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Quantum Computing</h4>
                  <p className="card-description">
                    The math behind quantum computers. 
                  </p>
                </div>
              </div>

              <div className="card pink2-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/0RY42M-KMq4/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://youtu.be/0RY42M-KMq4?si=uLZLXLAWQqCEzxWR", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Computer Vision</h4>
                  <p className="card-description">
                    Image Segmentation and YOLO 
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/3iAJbmpDqx4/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://youtu.be/3iAJbmpDqx4?si=9I8eRN1LAMQknCc9", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Bayes Classifier</h4>
                  <p className="card-description">
                    For people who like stats. 
                  </p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-video">
                  <div className="video-thumbnail" 
                      style={{backgroundImage: "url('https://img.youtube.com/vi/gSAKcxDdJf0/maxresdefault.jpg')"}}
                      onClick={() => window.open("https://youtu.be/gSAKcxDdJf0?si=LmC8g6pJqu2SzMYq", "_blank")}>
                    <div className="play-button">▶</div>
                  </div>
                </div>


                <div className="card-content">
                  <h4 className="card-title">Neural Network by hand</h4>
                  <p className="card-description">
                    I wrote a paper where I did the math in a nn by hand and I go throw it in this video.
                  </p>
                </div>
              </div>
            </div>

            
            
            <div className="back-button-container">
              <button className="back-button" onClick={() => setActiveSection('main')}>
                ← Back to main page
              </button>
            </div>
          </section>
        )}


{activeSection === 'mental' && (
  <section className="section">
    <h2 className="section-title">PUBLIC NOTES</h2>
    
    <ul className="plain-article-list">
      <li className="plain-article-item">
        <a href="/page/introduction-to-differential-privacy" 
           className="plain-link">
          Introduction to Differential Privacy
        </a>
        <span className="plain-date">Mar 15, 2023</span>
      </li>
      
      <li className="plain-article-item">
        <a href="/page/brain-computer-interface-for-bipolar-disorder" 
           className="plain-link">
          Brain-Computer Interface for Bipolar Disorder
        </a>
        <span className="plain-date">May 3, 2023</span>
      </li>
      
      <li className="plain-article-item">
        <a href="/page/guide-to-privacy-preserving-technology" 
           className="plain-link">
          A Guide to Privacy Preserving Technology
        </a>
        <span className="plain-date">Jun 22, 2023</span>
      </li>

<li className="plain-article-item">
  <Link to="/pages/beginners-guide-to-connectomics" 
       className="plain-link">
    Introduction to Differential Privacy
  </Link>
  <span className="plain-date">Mar 15, 2023</span>
</li>

      <li className="plain-article-item">
        <a href="/page/breaking-the-90-barrier-ai-drug-development" 
           className="plain-link">
          Breaking the 90% Barrier: How AI is Transforming Drug Development
        </a>
        <span className="plain-date">Oct 5, 2023</span>
      </li>
    </ul>
    
    <div className="back-button-container">
      <button className="back-button" onClick={() => setActiveSection('main')}>
        ← Back to main page
      </button>
    </div>
  </section>
)}



        {/* TRAVEL SECTION - Only displayed when selected */}
        {activeSection === 'travel' && (
          <section className="section">
            <h2 className="section-title">TRAVEL</h2>
            
            <p className="travel-intro">
              I've traveled to 17 countries and 22 US states, with a passion for exploring new cultures and cuisines.
            </p>
            
            <div className="cards-container">
              <div className="card yellow-hover">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1566408669374-5a6d5dca0b89?q=80&w=2787&auto=format&fit=crop" alt="Stockholm, Sweden" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">Stockholm, Sweden</h4>
                  <p className="card-description">
                    The perfect blend of modern design, historical architecture, and nature. The subway system is an art gallery in itself.
                  </p>
                </div>
              </div>
              
              <div className="card purple-hover">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop" alt="Kyoto, Japan" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">Kyoto, Japan</h4>
                  <p className="card-description">
                    The perfect balance of tradition and modernity. The temples and gardens offer tranquility while the city provides excellent contemporary experiences.
                  </p>
                </div>
              </div>
              
              <div className="card pink-hover">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2940&auto=format&fit=crop" alt="Beirut, Lebanon" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">Beirut, Lebanon</h4>
                  <p className="card-description">
                    A city of contrasts with incredible resilience. The food is unmatched, the nightlife is vibrant, and the Mediterranean coastline is beautiful.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="back-button-container">
              <button className="back-button" onClick={() => setActiveSection('main')}>
                ← Back to main page
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;