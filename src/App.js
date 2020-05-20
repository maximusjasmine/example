import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Max from './Max';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting
          furColor="black"
          eyeColor="brown"
        />
        <p>
          Hello World
        </p>
        <Max />
      </header>
    </div>
  );
}

export default App;
