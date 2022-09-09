import React from 'react'



const ProjectCard = (props) => {
  return (
      <div key={props.id} className="card">
      <h4>{props.title}</h4>
      <p>{ props.description}</p>
    </div>
  )
}

export default ProjectCard