//map  projects , portfolio is a container, map through six projects
import React, { useState } from 'react';
import Card from "../Project";


function Portfolio() {
    const [projects] = useState([
        {
          name: 'Weather app ',
          description: 'js',
          link: "https://github.com",
          repo: "https://github.com",
          image: "airforce2"
        },
        {
          name: 'run-buddy',
          description: 'html/css',
          link: "https://github.com",
          repo: "https://github.com",
          image: "airforce2"
        },
        {
          name: 'coding quiz',
          description: 'HTML/CSS',
          link: "https://github.com",
          repo: "https://github.com",
          image: "airforce2"
        },
        {
          name: 'collectors-haven',
          description: 'A new take on a project that was originally built with vanilla js. Collectors haven is now using the MERN stack. ',
          link: "https://aqueous-taiga-86315.herokuapp.com/",
          repo: "https://github.com/peters0470/group-project3", 
          image: "airforce2"

        },
        {
          name: 'Hourly',
          description: '/JavaScript/CSS',
          link: "https://github.com",
          repo: "https://github.com",
          image: "airforce2"
        },
      ]);
      console.log(projects.image)
      return(
          <div>
        {projects.map((project, i) => (
          <Card key={i} name={project.name} description={project.description} link={project.link} repo={project.repo} image={project.image}></Card>

       ))}
          </div>
      )

}

export default Portfolio;