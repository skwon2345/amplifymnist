import React from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './components/draw';

function App() {
  return (
    <div className="App">
      <h1>Let's classify digits</h1>
      <Draw />
    </div>
  );
}

export default App;
