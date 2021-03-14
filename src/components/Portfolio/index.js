//map  projects , portfolio is a container, map through six projects
import React, { useState } from 'react';
import Card from "../Project";
const [projects] = useState([
    {
      name: 'Weather app ',
      description: 'js',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'run-buddy',
      description: 'html/css',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'coding quiz',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'collectors-haven',
      description: 'Node',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Hourly',
      description: '/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);
  projects.map(project => (
      <Card name={project.name}></Card>
   ))

export default Portfolio;