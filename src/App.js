import logo from './logo.svg';
import React from 'react';
import './App.css';


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '50px',
      overflowY: 'scroll'
    }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>Brooke Joseph</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <a href="https://twitter.com/BrookeaJoseph" target="_blank" rel="noopener noreferrer">
          <button 
            style={{
              backgroundColor: 'transparent',
              color: 'pink',
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '4px',
              margin: '10px'
            }}
          >
            Twitter 
          </button>
        </a>
        <a href="https://medium.com/@brookeajoseph17" target="_blank" rel="noopener noreferrer">
          <button 
            style={{
              backgroundColor: 'transparent',
              color: 'pink',
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '4px',
              margin: '10px'
            }}
          >
            My thoughts 
          </button>
        </a>
        <a href="https://www.linkedin.com/in/brooke-joseph-0a7525196/" target="_blank" rel="noopener noreferrer">
          <button 
            style={{
              backgroundColor: 'transparent',
              color: 'pink',
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '4px',
              margin: '10px'
            }}
          >
            LinkedIn 
          </button>
        </a>
        <a href="https://github.com/brookejoseph" target="_blank" rel="noopener noreferrer">
          <button 
            style={{
              backgroundColor: 'transparent',
              color: 'pink',
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '4px',
              margin: '10px'
            }}
          >
            GitHub 
          </button>
        </a>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        <button 
          style={{
            backgroundColor: 'transparent',
            color: 'pink',
            padding: '10px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px',
            margin: '10px'
          }}
        >
          Example Page 
        </button>
      </a>
      </div>

      <div className="left-align">
        <h2>Background</h2>
        <ul style={{ marginLeft: '100px' }}>
          <li>From the canadian detroit, currently studying at Waterloo</li>
          <li>I love lifting weights and have ran a run marathons</li>
          <li>Love love love travelling and meeting new people from different backgrounds</li>
        </ul>
      </div>

      <div className="left-align">
        <h2>What I've built</h2>
        <ul style={{ marginLeft: '100px' }}>
          <li>Worked with software engieers at Devron to add Differential Privacy into their exisitng platform.
            Helping meet privacy quota. 
          </li>
          <li>Attempted to use Raspberry Pis to create a real Federated environment 
            that would replicate exactly how these models work in a real application</li>
          <li>Worked alongside Amazon to pitch a solution for Alexa. Using NLP, FL, DP and 
            Generative AI we created an Alexa for the workplace to increase connectivity </li>
          <li>Currently building knowlegde graphs that help address information overload by laying out a clear path to learn whatever you want </li>
        </ul>
      </div>
    </div>
    
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => alert('Button clicked!')}>
          ur mom
        </button>
      </header>
    </div>
  );
}
*/


export default App;
