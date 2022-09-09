import React from 'react'
import ProjectCard from './ProjectCard'
const projects = [
    {
        "id":1,
        "title":"Project 1",
        "description":"Dummy description"
    },
    {
        "id":2,
        "title":"Project 2",
        "description":"Dummy description"
    },
    {
        "id":3,
        "title":"Project 3",
        "description":"Dummy description"
    },
    {
        "id": 4,
        "title": "Project 4",
        "description":"Dummy description"
    }
]
const Projects = () => {
    return (
        <section>
            <div className="container projects__Cont">
                <h2>Projects</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque ratione ab. Architecto aspernatur ipsam minus vero pariatur vel soluta?</p>
                {
                    projects.map(project => {
                        return(<ProjectCard key={project.id} title={project.title} description={project.description} />)
                    })
                        
                }
            </div>
        </section>
    )
}

export default Projects