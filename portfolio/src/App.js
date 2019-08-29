import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Story from './components/Story';
import { default as Data, default as data } from './data';

function App() {
  console.log(Data);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Story></Story>
      {data.map(e => {
        return (
          <Project
            key={e.title}
            title={e.title}
            description={e.description}
            color={e.color}
            img={e.img}
          ></Project>
        );
      })}
      <Contact></Contact>
    </div>
  );
}

export default App;
