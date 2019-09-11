import React from 'react';

const Project = ({ color, img, title, desc, live, front, node, rails }) => {
  const nodeBackend =
    node === '' ? (
      ''
    ) : (
      <li>
        <a target="_blank" rel="noopener noreferrer" href={node}>
          View NodeJS code on Github
        </a>
      </li>
    );

  const railsBackend =
    rails === '' ? (
      ''
    ) : (
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JangkarBumi/merlinbook-rails"
        >
          View Ruby on Rails code on Github
        </a>
      </li>
    );

  return (
    <div className="project" style={{ backgroundImage: color }}>
      Project
      <h1>{title}</h1>
      <p>{desc}</p>
      <ul className="stack">
        <li>
          <a target="_blank" rel="noopener noreferrer" href={live}>
            Live Site
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={front}>
            View React code on Github
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
