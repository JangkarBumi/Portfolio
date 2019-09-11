import React from 'react';
import { FaGithub } from 'react-icons/fa';
const Project = ({ color, img, title, desc, live, front, node, rails }) => {
  const nodeBackend =
    node === '' ? (
      ''
    ) : (
      <li>
        <a
          className="visit"
          target="_blank"
          rel="noopener noreferrer"
          href={node}
        >
          {' '}
          <FaGithub />
          NodeJS codes
        </a>
      </li>
    );

  const railsBackend =
    rails === '' ? (
      ''
    ) : (
      <li>
        <a
          className="visit"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JangkarBumi/merlinbook-rails"
        >
          {' '}
          <FaGithub />
          Ruby on Rails codes
        </a>
      </li>
    );

  return (
    <div className="project" style={{ backgroundImage: color }}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <ul className="stack">
        <li>
          <a
            className="visit"
            target="_blank"
            rel="noopener noreferrer"
            href={live}
          >
            Live Site
          </a>
        </li>
        <li>
          <a
            className="visit"
            target="_blank"
            rel="noopener noreferrer"
            href={front}
          >
            <FaGithub /> React codes
          </a>
        </li>
        {nodeBackend}
        {railsBackend}
      </ul>
      <img src={img} alt="" />
    </div>
  );
};

export default Project;
