import React from 'react'

const Project = ({title, description, color}) => {
  return (
    <div id='project' style={{backgroundColor:`${color}`}}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default Project
