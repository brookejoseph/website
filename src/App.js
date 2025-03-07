import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('main');
  const [activeScrollSection, setActiveScrollSection] = useState('intro');
  
  const sectionRefs = {
    intro: useRef(null),
    now: useRef(null),
    work: useRef(null),
    projects: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'writing' || sectionId === 'travel' || sectionId === 'mental' || 
        sectionId === 'videos' || sectionId === 'values') {
      setActiveSection(sectionId);
      window.scrollTo(0, 0);
      return;
    }
    
    setActiveSection('main');
    const section = sectionRefs[sectionId].current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'mental') {
        setActiveSection('mental');
      } else if (hash === 'another-section') {
        setActiveSection('another-section');
      }
    };
    
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      if (activeSection !== 'main') return;
      
      const scrollPosition = window.scrollY + 100;

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
  }, [activeSection, sectionRefs]);

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
              className={`nav-item ${activeSection === 'values' ? 'active' : ''}`}
              onClick={() => scrollToSection('values')}
            >
              values 🌟
            </button>
            <button 
              className={`nav-item ${activeSection === 'writing' ? 'active' : ''}`}
              onClick={() => scrollToSection('writing')}
            >
              technical writing 🤓
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
        <div className="sticky-header">
          <div className="section-indicator">
            {activeSection === 'main' && activeScrollSection === 'intro' && 'BROOKE JOSEPH'}
            {activeSection === 'main' && activeScrollSection === 'now' && 'RIGHT NOW I\'M'}
            {activeSection === 'main' && activeScrollSection === 'work' && 'IN PAST LIVES: TEAMS IVE WORKED WITH'}
            {activeSection === 'main' && activeScrollSection === 'projects' && 'IN PAST LIVES: PROJECTS'}
            {activeSection === 'writing' && 'TECHNICAL WRITING'}
            {activeSection === 'mental' && 'PUBLIC NOTES APP'}
            {activeSection === 'videos' && 'VIDEOS'}
            {activeSection === 'values' && 'VALUES'}
            {activeSection === 'travel' && 'TRAVEL'}
          </div>
        </div>

        {activeSection === 'main' && (
          <>
            <header className="header" ref={sectionRefs.intro}>
              <div className="header-content">
                <div className="header-image">
                  <img src="https://pbs.twimg.com/profile_images/1787242753060900864/dXQAhQIW_400x400.jpg" alt="Brooke Joseph" />
                </div>
                <div className="header-text">
                  <h1>BROOKE JOSEPH</h1>
                  <p className="location">
                    📍 Currently: In Sweden (<a href="https://twitter.com/BrookeaJoseph">say hi</a>)
                  </p>
                </div>
              </div>
              <p className="philosophy">
                I work for my 10 and 80 year old self. I believe true happiness comes from giving more to the world more than you take and solving the problems that matter to you. 
              </p>
            </header>

            <section className="section" ref={sectionRefs.now}>
              <h2 className="section-title">RIGHT NOW I'M</h2>
              <ul className="current-list">
                <li>Training models on embedded systems at Ekkono (knowledge distillation and quantization)</li>
                <li>Solo travelling Europe.</li>
                <li>Building products for fast growing companies.</li>
                <li>Dismantling misaligned incentive structures.</li>
              </ul>
            </section>

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

                <div className="card pink-hover">
                  <div className="card-content">
                    <h4 className="card-title">Knowledge Distillation</h4>
                    <p className="card-description">
                      Developped an algorithm to leverage knowledge distillation for improving the performance of bad models. 
                    </p>
                  </div>
                </div>
                
                <div className="card purple-hover">
                  <div className="card-content">
                    <h4 className="card-title">GenTube</h4>
                    <p className="card-description">
                      Built first iteration in 1 week. The team has scaled it to 500k+ images generated since and millions of users.
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
                
                <div className="card pink2-hover">
                  <div className="card-content">
                    <h4 className="card-title">DP Research</h4>
                    <p className="card-description">
                      Presented Differential Privacy research to people across the globe (Washington DC, Germany, Toronto and Sweden). Over 80k people across all events. 
                    </p>
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
                
                <div className="card pink2-hover">
                  <div className="card-content">
                    <h4 className="card-title">Epsilon & Delta Tool</h4>
                    <p className="card-description">
                      Built a tool to help engineers select privacy parameters. Used by fortune 500 companies.
                    </p>
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
                
                <div className="card yellow-hover">
                  <div className="card-content">
                    <h4 className="card-title">Real FL</h4>
                    <p className="card-description">
                      Created a real Federated learning environment with a Raspberry Pi to demonstrate privacy-preserving ML techniques.
                    </p>
                    <p className="card-link"><a href="https://github.com/brookejoseph/FederatedLearningRaspberry">See more</a></p>
                  </div>
                </div>

                <div className="card yellow-hover">
                  <div className="card-content">
                    <h4 className="card-title">Training on embedded devices</h4>
                    <p className="card-description">
                      Cannot share repo but helped condense an MLP to train in very very small spaces. If you're a memory nerd you'd find this cool.
                    </p>
                  </div>
                </div>


                <div className="card pink-hover">
                  <div className="card-content">
                    <h4 className="card-title">Burrow</h4>
                    <p className="card-description">
                      Built a knowlegde graph that scrapped various sources. Got 700 sign ups.  
                    </p>
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
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/brain-computer-interface-for-bipolar-disorder-def65cd5cad0">Read</a></p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Digitalizing our Brain</h4>
                  <p className="card-description">
                    One of my many rabbit holes that converted into a post. Connectomics is insanely cool.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/a-beginners-guide-to-connectomics-5b0581c9cb6f">Read</a></p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Leveraging Data for AgriTech</h4>
                  <p className="card-description">
                    We could literally transform agriculture by leveraging data from existing widely used sensors.
                  </p>
                  <p className="card-link"><a href="https://medium.com/@brookeajoseph17/leveraging-data-insights-in-agriculture-4523f96d8bba">Read</a></p>
                </div>
              </div>

              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Drug Development</h4>
                  <p className="card-description">
                    My rant on how inefficient drug development is and why its killing us.
                  </p>
                  <p className="card-link"><a href="https://open.substack.com/pub/brookejoseph/p/breaking-the-90-barrier-how-ai-is?r=1rjzfc&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false">Read</a></p>
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
                    A deep dive into federated learning.
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
                    I wrote a paper where I did the math in a nn by hand and I go through it in this video.
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
          <section id="mental" className="section">
            <h2 id="mental" className="section-title">PUBLIC NOTES</h2>
            <ul className="plain-article-list">
              <h3>Thoughts/My Philosophies</h3>
              <li>
                <li>
                  <Link to="/pages/problems" className="plain-link">
                  Problems I think about.
                </Link>
                </li>
                 <li>
                  <Link to="/pages/interesting-stuff" className="plain-link">
                  Things I won't shut up about.
                </Link>
                </li>
                <Link to="/pages/ambition" className="plain-link">
                  My thoughts on ambition.
                </Link>
              </li>
              <li>
                <Link to="/pages/work-ethic" className="plain-link">
                  My thoughts on work ethic.
                </Link>
              </li>
              <h3>Health</h3>
              <li>
                <Link to="/pages/food" className="plain-link">
                  The food I eat. 
                </Link>
              </li>
              <li>
                <Link to="/pages/running" className="plain-link">
                  How I train for long distance races. 
                </Link>
              </li>
              <li>
                <Link to="/pages/lifting" className="plain-link">
                  How I train in the gym. 
              </Link>
              </li>
              
              <h3>Extra</h3>
               <li>
                <Link to="/pages/cool-people" className="plain-link">
                  People I find cool. 
              </Link>
              </li>
            </ul>
            <div className="back-button-container">
              <button className="back-button" onClick={() => setActiveSection('main')}>
                ← Back to main page
              </button>
            </div>
          </section>
        )}

        {activeSection === 'values' && (
          <section className="section">
            <h2 className="section-title">VALUES</h2>
            <ul className="plain-article-list">
              <h1>
              a few things I live by (these are things I tell myself almost everyday):
              </h1>
              <li className="plain-article-item">
                work hard but with direction. don't be the person who works for the sake of working.
              </li>
              <li className="plain-article-item">
                having empathy and being kind are strengths. many people interpret it as a weakness. don't let them stop you from being kind and empathic. 
              </li>
              <li className="plain-article-item">
                be urgent but thoughtful. i love urgent people who go from problem to idea to product or solution fast.
              </li>
              <li className="plain-article-item">
                follow your gut. it might seem wrong but you're constantly finetuning your instincts and that invaluable. your intuition is the closet source of truth for yourself you will ever get.
              </li>
              <li className="plain-article-item">
                take all advice with a grain of salt. live your own life and don't assume anyone else knows whats best for you.
              </li>
              <li className="plain-article-item">
                give other people advice sparingly. its better to just be supportive.
              </li>
               <li className="plain-article-item">
                stay manic, crazy and nerdy.
              </li>
              <li className="plain-article-item">
               take care of your mind and body. sleep well, work out (everyday, no execuses), eat clean. 
              </li>
              <li className="plain-article-item">
                stay curious about the world, if you care about a problem enough, go solve it, don't wait for other people. 
              </li>
              <li className="plain-article-item">
                literally right now is the best time to do anything.
              </li>
              <li className="plain-article-item">
                the best things are done when interesting people work together. greatness isn't made alone.
              </li>
              <li className="plain-article-item">
                alway question what you're doing.
              </li>
              <li className="plain-article-item">
                always show respect and love to parents and grandparents.
              </li>
            </ul>
            <div className="back-button-container">
              <button className="back-button" onClick={() => setActiveSection('main')}>
                ← Back to main page
              </button>
            </div>
          </section>
        )}

        {activeSection === 'travel' && (
          <section className="section">
            <h2 className="section-title">TRAVEL</h2>
            <p className="travel-intro">
              I've traveled to 17 countries and 22 US states. Here are some of my favourite places. I'll add all my recommendations when I have time one day.
            </p>
            <div className="cards-container">
              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Malmo, Sweden</h4>
                  <p className="card-description">
                    Great if you're in Copenhagen and want to see Sweden. Lots of cute restaurants in the old part of the city.
                  </p>
                </div>
              </div>
              
              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">London, England</h4>
                  <p className="card-description">
                    Classic, borough market, Kings Station (for harry potter fans), chelsea is my favourite area. 
                  </p>
                </div>
              </div>

              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Paris, France</h4>
                  <p className="card-description">
                    Likely my favourite city in europe. Amazing food. 
                  </p>
                </div>
              </div>
              
              <div className="card pink2-hover">
                <div className="card-content">
                  <h4 className="card-title">Gothenburg, Sweden</h4>
                  <p className="card-description">
                    Cute underground bars. I lived an hour from this city when I lived in Sweden so went often. 
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">Amsterdam, Netherlands</h4>
                  <p className="card-description">
                    I've been here a few times, love the city, must have stroopwafel and fries and mayonnaise.
                  </p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Villars, Switzerland</h4>
                  <p className="card-description">
                    Take a train through the mountains. Cheese and potatoes with pickles, so good omg. Only note, everything is pretty expensive lol.
                  </p>
                </div>
              </div>

              <div className="card purple-hover">
                <div className="card-content">
                  <h4 className="card-title">Dublin, Ireland</h4>
                  <p className="card-description">
                    Cute bars, you just have to go to temple bar. The city at night is pretty too. 
                  </p>
                </div>
              </div>
              
              <div className="card pink2-hover">
                <div className="card-content">
                  <h4 className="card-title">Edinburgh, Scotland</h4>
                  <p className="card-description">
                    So aesthetic. For Harry Potter fans if you're in the UK you have to go. They also have a cool castle. It actually feels like you jumped in a time machine in this city.  
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">Amsterdam, Netherlands</h4>
                  <p className="card-description">
                    I've been here a few times, love the city, must have stroopwafel and fries and mayonnaise.
                  </p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Nice, France</h4>
                  <p className="card-description">
                    Nice in the super nice (haha), Eze and Monaco are worth a visit. Also Italy is pretty close and def worth the trip. I also went to a perfume factory which was fun.
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">Florence/Tuscany, Italy</h4>
                  <p className="card-description">
                    I had the best pasta of my life in Florence. Also spending a night on some farm in Tuscany is totally worth it.
                  </p>
                </div>
              </div>

              <div className="card yellow-hover">
                <div className="card-content">
                  <h4 className="card-title">Nice, France</h4>
                  <p className="card-description">
                    Nice in the super, go to Eze and Monaco. Also Italy is pretty close and def worth the trip. I also went to a perfume factory which was fun.
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">New York, New York</h4>
                  <p className="card-description">
                    My favourite city on the planet. period. 
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">Montreal, Canada</h4>
                  <p className="card-description">
                   The best city in Canada by farrr. Although the builder scene in Toronto is better :/ 
                  </p>
                </div>
              </div>

              <div className="card pink-hover">
                <div className="card-content">
                  <h4 className="card-title">Naples, Florida</h4>
                  <p className="card-description">
                   Have spent a lot of time in Florida, Naples is my favourite city. Much better than Miami, its just very expensive.
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