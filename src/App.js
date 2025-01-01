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
        {['Twitter', 'Substack', 'LinkedIn', 'GitHub'].map((text, index) => {
          const hrefs = [
            "https://twitter.com/BrookeaJoseph",
            "https://brookejoseph.substack.com/",
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
        <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>Ekkono - Sweden</h3>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}> I’m working with IoT devices and embedded systems to collect and process sensor data for training machine learning models.</p> 
        <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>Contrary - San Francisco</h3>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}> Contrary identifies and invests in the world's top talent. The firm has helped create more than $10 billion in value through investments in companies including Ramp, Anduril, Zepto, and others. </p> 
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>Stealth Startup - Toronto</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Working with previous founders at Maluuba and Wish. Built 5 apps end-to-end with 100k users. Worked with convex, next js, react, react native, typescript, LLM finetuning/evaluation </p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Devron - New York</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Collaborated with senior engineers to incorporate Differential Privacy into their platform. This involved navigating and understanding their complex infrastructure to ensure effective implementation.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>TensoAI - Montreal</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Researched how agricultural data from satellites and sensors could train machine learning models using Federated Learning. I also investigated and recommended strategies for setting up the company's Federated Learning infrastructure to enhance data privacy and collaborative model training.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3'}}>Dr Tong's Biochemistry Lab</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>As the youngest research assistant in the lab, I revamped the website and collaborated with PhDs to code 3D models of various proteins using PyMol.</p>
        </div>
        <ul style={{ fontFamily: 'Times New Roman', fontSize: '1.2em', marginTop: '50px' }}>
        <h3 style={{ 
          fontFamily: 'Times New Roman', 
          fontSize: '1.5em', 
          color: '#C39BD3',
          textAlign: 'center' 
        }}>Projects</h3>

          <li>Built first iteration of <a href="https://www.gentube.app/feed/spotlight" target="_blank" rel="noopener noreferrer">gentube</a> 500k+ images made</li>
          <li>Built a CPU from <a href="https://brookejoseph.substack.com/p/building-a-cpu-from-scratch" target="_blank" rel="noopener noreferrer">scratch</a> </li>
          <li><a href="https://www.contrary.com/blog/class-of-2025" target="_blank" rel="noopener noreferrer">Contrary VP!</a></li>

          <li>Amino Acid Sequence to vector embedding <a href="https://github.com/brookejoseph/sequence-embeddings" target="_blank" rel="noopener noreferrer">script</a> </li>
          <li>Played around with Kalman Filters and combining <a href="https://github.com/brookejoseph/sensorfusion/blob/main/app.py" target="_blank" rel="noopener noreferrer">gyroscope and accelemeter data</a> </li>
          <li>Built a vector database from <a href="https://github.com/brookejoseph/VectorDatabase" target="_blank" rel="noopener noreferrer">scratch</a> </li>
          <li>Built a tool to connect with friends based on <a href="https://github.com/brookejoseph/SearchProj" target="_blank" rel="noopener noreferrer">images</a> </li>
          <li>Created a real Federated environment with a <a href="https://github.com/brookejoseph/FederatedLearningRaspberry" target="_blank" rel="noopener noreferrer">Raspberry Pi</a> </li>
          <li>A tool to help people new to DP select <a href="https://github.com/brookejoseph/PrivacyParametersEstimator" target="_blank" rel="noopener noreferrer">privacy parameters</a> </li>
          <li>Received 2nd place out of 700 in Amazon hackathon. Our team was invited to present to Amazon executives.</li>
          <li>Added guassian noise to <a href="https://github.com/brookejoseph/dpcoco/blob/main/coco%2Bguassian.ipynb" target="_blank" rel="noopener noreferrer">my dog</a> </li>

            <li>Contributed to the development of a voice assistant app (<a href="https://mymemoirs.app" target="_blank" rel="noopener noreferrer">mymemoirs</a>)</li>
            <li><a href="https://neo.substack.com/p/meet-the-2025-neo-scholars" target="_blank" rel="noopener noreferrer">Neo Scholar!</a></li>
            <li>Worked with a PhD at MIT investigating how to train a CNN on medical data for disease prediction.</li>
            <li>Hosted a Socratica for a semester with an amazing group of people</li>
            <li>Played around with synthetic data using <a href="https://github.com/brookejoseph/SyntheticSensorData" target="_blank" rel="noopener noreferrer">GANs and LLMs</a></li>
            <li>Made a fun tool for my mom to convert her grocery lists into <a href="https://www.simplywanderfullai.com/" target="_blank" rel="noopener noreferrer">recipes</a></li>

            <li>Recreated character AI with alternating moods. (<a href="https://trycarson.com" target="_blank" rel="noopener noreferrer">trycarson</a>)</li>
            <li>Created a website that generates personalized hallmark cards. Worked on finetuning diffusion models and LLMs. (<a href="https://sendhearts.app" target="_blank" rel="noopener noreferrer">sendhearts</a>)</li>
            <li>Created a website to scrape YouTube for nostalgic candy commercials based on where and when you grew up. (<a href="https://gencandy.com" target="_blank" rel="noopener noreferrer">gencandy</a>)</li>
            <li>Built multimodal knowledge graphs enabling users to understand any topic.</li>
          </ul>
      </div>
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Other Cool Stuff</h2>
        <div style={{ marginLeft: '20px', wordWrap: 'break-word' }}>
        <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Travelling</h3>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>I loveee travelling, meet new people and learning about different cultures. Would love to travel to as many countries as possible. Currently have travlled to 17 countries + 22 states in the US.</p>
        <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Cooking</h3>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Love to cook! I can whip up some really good italian food and learning authentic Lebanese food from my grandpa + mom!</p>
        <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Gym</h3>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Haven't missed a day in the gym for 3 years (besides sick days).</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Differential Privacy Research</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Invited to give presentations all over the world (Germany, Toronto, Washington DC, etc.) on my research in Differential Privacy. Over 80,000 people in attendance across all conferences + presneted at Google.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>International Marathon Runner</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Travelled all over to compete in half and full marathons, ranking top 20 in my age group for the Detroit Marathon.</p>
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
      
