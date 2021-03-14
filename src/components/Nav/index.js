import React from 'react';

function Nav() {

    const categories = [
        // {
        //   name: "About Me",
        //   description:
        //     "A quick bio and recent photo of me",
        // },
        { name: "Portfolio", description: "A few links to applications I have built" },
        { name: "Contact", description: "A contact form to get in touch with me" },
        {
          name: "Resume",
          description: "A link to my Professional Resume",
        },
      ];

      function categorySelected(name) {
          console.log(`${name} clicked`)
      };
      
    return (
        <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
              <span onClick={() => categorySelected(category.name)} >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
    );
  }
  
  export default Nav;