import React, { Fragment } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Project from './components/Project';
import projects from './components/projects.json';

const App = () => {
  return (
    <Fragment>
      <Profile></Profile>
      {projects.projects.map(e => (
        <Project
          key={e.title}
          id={e.id}
          title={e.title}
          desc={e.desc}
          img={e.img}
          color={e.color}
          live={e.live}
          front={e.front}
          node={e.node}
          rails={e.rails}
        ></Project>
      ))}
      <Contact></Contact>
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
