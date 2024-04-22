import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AddStock from './addstock';


function App() {
  const [showAddStock, setShowAddStock] = useState(false);

  if (showAddStock) {
    return <AddStock />;
  }

  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white' }}>
      <header className="App-header">
      <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: '50px', width: '50px' }} />
          <input 
            type="search" 
            placeholder="Search..." 
            style={{
              margin: '10px',
              padding: '5px',
              fontSize: '16px'
            }}
          />
        </div>
        <button 
          onClick={() => setShowAddStock(true)}
          style={{
            position: 'absolute',
            top: 200,
            left: 50,
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Add new stock
        </button>
        <p style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          fontSize: '16px',
          width: '200px',
          margin: 'auto',
          marginTop: '20px',
          position: 'absolute',
          top: 180,
          left: 300,
          borderRadius: '4px'
        }}>
          Trades:
        </p>
        <p style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          fontSize: '16px',
          width: '200px',
          margin: 'auto',
          marginTop: '20px',
          position: 'absolute',
          top: 180,
          left: 700,
          borderRadius: '4px'
        }}>
          Top trade:
        </p>
        <p style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          fontSize: '16px',
          width: '200px',
          margin: 'auto',
          marginTop: '20px',
          position: 'absolute',
          top: 180,
          left: 1100,
          borderRadius: '4px'
        }}>
          Worst trade:
        </p>
      </header>
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
