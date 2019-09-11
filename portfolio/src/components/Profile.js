import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profile">
      <h1>Zeha Irawan</h1>
      <p>I'm a full-stack web developer</p>
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
    </div>
  );
};

export default Profile;
