import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Story from './components/Story';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Story></Story>
      <div id="project">
        <div className="first-half">
          <h1>MerlinBook</h1>
          <p>
            Front End for Bookstore CMS Built with React Redux for the
            front-end, and have two version of API built using two different
            stack. Which is MERN stack and Ruby on Rails
          </p>
          <ul className="stack">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://merlinbook.zehairawan.com/"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/MerlinBook"
              >
                View React code on Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/merlinbook-nodejs"
              >
                View NodeJS code on Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/merlinbook-rails"
              >
                View Ruby on Rails code on Github
              </a>
            </li>
          </ul>
        </div>
        <div className="second-half">
          <img className="ss" src="https://i.imgur.com/9v0Lvxu.png" alt="" />
        </div>
      </div>

      <div id="project">
        <div className="first-half">
          <h1>MerlinDoc</h1>
          <p>Medical Directory App built with MERN stack</p>
          <ul className="stack">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://merlindoc.zehairawan.com/"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/MerlinDoc"
              >
                View React code on Github
              </a>
            </li>
          </ul>
        </div>
        <div className="second-half">
          <img className="ss" src="https://i.imgur.com/cKrmCDe.png" alt="" />
        </div>
      </div>

      <div id="project">
        <div className="first-half">
          <h1>MerlinFood</h1>
          <p>Concept website for Food App built with ReactJS</p>
          <ul className="stack">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://merlinfood.zehairawan.com/"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/MerlinFood"
              >
                View React code on Github
              </a>
            </li>
          </ul>
        </div>
        <div className="second-half">
          <img className="ss" src="https://i.imgur.com/amXvOWz.jpg" alt="" />
        </div>
      </div>

      <div id="project">
        <div className="first-half">
          <h1>MerlinDash</h1>
          <p>Concept Website for Push Notifications App</p>
          <ul className="stack">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://merlindash.zehairawan.com/"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/MerlinDash"
              >
                View React code on Github
              </a>
            </li>
          </ul>
        </div>

        <div className="second-half">
          <img className="ss" src="https://i.imgur.com/yNe1CkQ.png" alt="" />
        </div>
      </div>

      <div id="project">
        <div className="first-half">
          <h1>MerlinShop</h1>
          <p>Concept Website for E-commerce App built with ReactJS</p>
          <ul className="stack">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://merlinshop.zehairawan.com/"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JangkarBumi/MerlinShop"
              >
                View React code on Github
              </a>
            </li>
          </ul>
        </div>
        <div className="second-half">
          <img className="ss" src="https://i.imgur.com/hs5I0b9.png" alt="" />
        </div>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
