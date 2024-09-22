import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  const imageUrls = [
    '/pictures/app.png',
    'pictures/burrow.png',
    'pictures/cables.png',
    'pictures/gartner.png',
    'pictures/robot.png',
    'pictures/womenofin.png',
  ];



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '50px',
      paddingBottom: '50px',
      overflowY: 'scroll',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f3f9',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '30px', textAlign: 'center', color: '#C39BD3' }}>Brooke Joseph</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '30px',
      }}>
        {['Twitter', 'My thoughts', 'LinkedIn', 'GitHub'].map((text, index) => {
          const hrefs = [
            "https://twitter.com/BrookeaJoseph",
            "https://medium.com/@brookeajoseph17",
            "https://www.linkedin.com/in/brooke-joseph-0a7525196/",
            "https://github.com/brookejoseph"
          ];
          return (
            <a href={hrefs[index]} target="_blank" rel="noopener noreferrer" key={index}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: '#7D3C98',
                  padding: '15px',
                  fontSize: '18px',
                  border: '2px solid #7D3C98',
                  borderRadius: '8px',
                  margin: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#7D3C98';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#7D3C98';
                }}
              >
                {text}
              </button>
            </a>
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 className="type-effect" style={{ fontFamily: 'Times New Roman', fontSize: '2em' }}>
          Born to <mark style={{ backgroundColor: '#C39BD3' }}>build</mark>
        </h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', wordWrap: 'break-word', padding: '0 20px' }}>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>
            Previous Endeavors: Computer Vision, Programming microcontrollers, control algorithms, CAD designs, Federated Learning, Secure Aggregation, Differential Privacy, Knowledge Graphs, CNNs for Silicon Wafer Detection.
          </p>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Experiences</h2>
        <div style={{ marginLeft: '20px', wordWrap: 'break-word' }}>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>Stealth Startup - Toronto</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Working with previous founders at Maluuba and Wish. Built 5 apps end-to-end with 100k users. Worked with convex, next js, react, react native, typescript, LLM finetuning/evaluation </p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Devron - New York</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Collaborated with senior engineers to incorporate Differential Privacy into their platform. This involved navigating and understanding their complex infrastructure to ensure effective implementation.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>TensoAI - Montreal</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Researched how agricultural data from satellites and sensors could train machine learning models using Federated Learning. I also investigated and recommended strategies for setting up the company's Federated Learning infrastructure to enhance data privacy and collaborative model training.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>Dr Tong's Biochemistry Lab</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>As the youngest research assistant in the lab, I revamped the website and collaborated with PhDs to code 3D models of various proteins using PyMol, significantly boosting productivity by 10x.</p>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Other Cool Stuff</h2>
        <div style={{ marginLeft: '20px', wordWrap: 'break-word' }}>
        <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Building with ROS/MATLAB</h3>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>I use Simulink in MATLAB to program robots for executing various actions in simulated environments. For fun mainly :)</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Presented at Google</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>I was invited to give a presentation on my projects and research in Federated Learning. Specifically looking at how to incorporate Differential Privacy and the challenges with that.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Created Multimodal Knowledge Graphs</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Helping to streamline the learning process. Presented to over 1000 people and gained 700 sign-ups.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Alexa Scheduling Optimizer</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Received 2nd place out of 700 participants in a global Amazon hackathon. Our team was invited to present our solution to Amazon executives for potential implementation.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Multi-GPU Training</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Worked with a PhD at MIT investigating how to train a CNN on medical data for disease prediction.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Differential Privacy Research</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Invited to give presentations all over the world (Germany, Toronto, Washington DC, etc.) on my research in Differential Privacy. Over 80,000 people in attendance across all conferences.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>International Marathon Runner</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Travelled all over to compete in half and full marathons, ranking top 20 in my age group for the Detroit Marathon.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Projects</h3>
          <ul style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>
            <li>Contributed to the development of a voice assistant app. My role involved fine-tuning models and integrating text-to-speech technology. (<a href="https://mymemoirs.app" target="_blank" rel="noopener noreferrer">mymemoirs.app</a>)</li>
            <li>Recreated character AI with alternating moods. (<a href="https://trycarson.com" target="_blank" rel="noopener noreferrer">trycarson.com</a>)</li>
            <li>Created a website that generates personalized hallmark cards.</li>
            <li>Worked on finetuning diffusion models and LLMs. (<a href="https://sendhearts.app" target="_blank" rel="noopener noreferrer">sendhearts.app</a>)</li>
            <li>Created a website to scrape YouTube for nostalgic candy commercials based on where and when you grew up. (<a href="https://gencandy.com" target="_blank" rel="noopener noreferrer">gencandy.com</a>)</li>
            <li>Developed multimodal knowledge graphs enabling users to understand any topic.</li>
            <li>Scraped the web to collect relevant articles, papers, and YouTube videos, and used RAG to optimize results and identify the most pertinent sections of the scraped documents.</li>
            <li>Received 700 sign ups in 24 hours. (burrow)</li>
          </ul>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Videos</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {['https://youtube.com/embed/UXxHawXiN6w', 'https://www.youtube.com/embed/75wv-WgqTic', 'https://www.youtube.com/embed/t18MBKs5uSQ', 'https://www.youtube.com/embed/S3PsPC8kHng'].map((src, index) => (
        <iframe
          key={index}
          className="responsive-iframe"
          src={src}
          title={`Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
      </div>
    </div>
  );
}

export default App;


/*

      <div className="my-align">
        <h2>Articles</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ width: '45%', margin: '10px' }}>
            <a href="https://medium.com/@brookeajoseph17/brain-computer-interface-for-bipolar-disorder-def65cd5cad0" target="_blank" rel="noopener noreferrer">
              <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*R17kI1Mj8l0ChBI4.jpg" alt="Article preview" style={{ width: '100%', height: 'auto' }}/>
             
            </a>
          </div>
          <div style={{ width: '45%', margin: '10px' }}>
            <a href="https://medium.com/@brookeajoseph17/introduction-to-differential-privacy-6a14c2a8ead2" target="_blank" rel="noopener noreferrer">
              <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CDWID1GUnlPOrp1vCqTBuw.png" alt="Article preview" style={{ width: '100%', height: 'auto' }}/>
              <h3>Math behind Differential Privacy</h3>
            </a>
          </div>
          <div style={{ width: '45%', margin: '10px' }}>
            <a href="https://medium.com/@brookeajoseph17/a-guide-to-privacy-preserving-technology-8db3d20dd8f1" target="_blank" rel="noopener noreferrer">
              <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*7ruV8l2CndlNF7mW.png" alt="Article preview" style={{ width: '100%', height: 'auto' }}/>
              <h3>Guide to Privacy Preserving Technology</h3>
            </a>
          </div>
          <div style={{ width: '45%', margin: '10px' }}>
            <a href="https://medium.com/@brookeajoseph17/a-beginners-guide-to-connectomics-5b0581c9cb6f" target="_blank" rel="noopener noreferrer">
              <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*lMlGWJCO_Tx4Ngup.jpg" alt="Article preview" style={{ width: '100%', height: 'auto' }}/>
              <h3>Connectomics</h3>
            </a>
          </div>
        </div>
      </div>*/
      
