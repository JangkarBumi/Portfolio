import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <h1>My Project</h1>
      <Navbar></Navbar>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
