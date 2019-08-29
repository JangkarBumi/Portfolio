import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Project title={'First Project'} description={'bla bla bla'} color={'green'}> </Project>
      <Project title={'First Project'} description={'bla bla bla'} color={'green'}> </Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
