import React, { useState } from 'react';

const Navbar = () => {
  const [open, isOpen] = useState(false);

  const handleClick = () => {
    open ? isOpen(false) : isOpen(true);
  };

  return (
    <nav>
      <div className="hamburger" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={('nav-links', open ? 'open' : 'closed')}>
        <li onClick={handleClick}>
          <a href="#project">Recent Projects</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact Me</a>
        </li>
        <li onClick={handleClick}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JangkarBumi"
          >
            Github
          </a>
        </li>
        <li onClick={handleClick}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zehairawan/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
