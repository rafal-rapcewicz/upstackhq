import React from 'react';
import logo from './logo.svg';
import { Users } from './components/Users';
import { Users2 } from './components/Users2';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users2 />
      </header>
    </div>
  );
}

export default App;
