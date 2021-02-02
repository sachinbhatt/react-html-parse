import React from 'react';
import logo from './logo.svg';
import './App.css';
import DomSpan from './DomSpan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DomSpan />
    </div>
  );
}

export default App;
