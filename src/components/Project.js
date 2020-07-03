import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { TiArrowForward } from 'react-icons/ti';
const Project = ({ color, img, title, desc, live, front, node, rails, id }) => {
  const nodeBackend =
    node === '' ? (
      ''
    ) : (
      <a target="_blank" rel="noopener noreferrer" href={node}>
        <FaNodeJs className="logo" />
      </a>
    );

  return (
    <div className="project" style={{ backgroundImage: color }}>
      <p className="work-number">{id}</p>

      <img src={img} alt="" />
      <div className="stack">
        <div>
          <a
            className="sub-title"
            target="_blank"
            rel="noopener noreferrer"
            href={live}
          >
            <p>
              {title} <TiArrowForward className="arrow" />
            </p>
          </a>
        </div>
        <div style={{ float: 'right', marginTop: '10px' }}>
          <a target="_blank" rel="noopener noreferrer" href={front}>
            <FaReact className="logo" />
          </a>
          {nodeBackend}
        </div>
      </div>

      <p className="title">{desc}</p>
    </div>
  );
};

export default Project;
