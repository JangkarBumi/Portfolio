import React from 'react';

const Project = ({ title, description, color, img }) => {
  return (
    <div id="project" style={{ backgroundColor: `${color}` }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="ss" src={img} alt="" />
    </div>
  );
};

export default Project;
