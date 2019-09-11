import React from 'react';

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
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zehairawan/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:zehairawan@gmail.com">ZehaIrawan@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
