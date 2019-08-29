import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Story></Story>
      <Project title={'First Project'} description={'bla bla bla'} color={'green'}> </Project>
      <Project title={'First Project'} description={'bla bla bla'} color={'navy'}> </Project>
      <Project title={'First Project'} description={'bla bla bla'} color={'navy'}> </Project>
      <Project title={'First Project'} description={'bla bla bla'} color={'navy'}> </Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
