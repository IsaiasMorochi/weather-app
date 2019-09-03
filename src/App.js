import React from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherLocation from './components/WeatherLocation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

         <WeatherLocation></WeatherLocation>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
