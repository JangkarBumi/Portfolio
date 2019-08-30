import React from 'react';

const Project = ({ title, description, color, img, live, github }) => {
  return (
    <div id="project" style={{ backgroundColor: `${color}` }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="ss" src={img} alt="" />
      <a target="_blank" href={live}>
        Live Site
      </a>
      <a target="_blank" href={github}>
        View code on Github
      </a>
    </div>
  );
};

export default Project;
