import React from 'react';

const projects = [
 
  {
    image: '/me.jpeg',
    caption: 'Cat Images Api react component ',
    link: 'https://Prakanksh.github.io/cat-gallery',
  },
  // Add more projects here...
];

export default function Projects() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <img 
              src={project.image} 
              alt={`Project ${index + 1}`} 
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
              {project.caption}
              <br />
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#00BFFF', textDecoration: 'underline', display: 'block', marginTop: '0.25rem' }}
              >
                Visit Project
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
