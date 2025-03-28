import React from 'react'

function Project({project}) {

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p><a href={project.url}>{project.url}</a></p>
      <p>{project.content}</p>
    </div>
  )
}

export default Project