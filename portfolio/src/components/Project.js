import React from 'react'

const Project = ({title, description, color}) => {
  return (
    <div id='project'>
      <p>{title}</p>
      <p>{description}</p>
      <p>{color}</p>
    </div>
  )
}

export default Project
