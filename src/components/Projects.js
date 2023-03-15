import React from 'react';
import '../styles/Projects.css'
const projects = [
  {
    title: 'Hackathon Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/300/200'
  },
  {
    title: 'Personal Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['React', 'CSS'],
    image: 'https://picsum.photos/300/200'
  },
  {
    title: 'Mobile App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['React Native', 'Firebase'],
    image: 'https://picsum.photos/300/200'
  },
  {
    title: 'E-commerce Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/300/200'
  }
];

function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="Project" key={index}>
          <div className="Project-left">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="Project-right">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="Project-technologies">
              <span>Technologies:</span>
              {project.technologies.map((technology, index) => (
                <span key={index}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;