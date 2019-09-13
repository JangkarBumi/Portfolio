import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="who">
        REALIST.
        <br />
        IDEALIST.
        <br />
        INVOKER.
        <br />& MENTOR.
      </h1>
      <p className="profile-copy">
      Fullstack web developer, digital marketer & amateur philosopher who likes to ask an important question like why people still asking if batman can defeat superman.
      <br/>
      <br/>
       Batman once took out the entire justice league alone.
      </p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JangkarBumi"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zehairawan/"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:zehairawan@gmail.com">
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <div className="hello">
        <a href="#contact">Say Hello!</a>
      </div>
    </div>
  );
};

export default Profile;
