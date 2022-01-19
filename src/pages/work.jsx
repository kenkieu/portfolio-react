import React from "react";
import Project from "../components/project";

export default function Work() {
  const projects = [
  {
    title: "stratana",
    description: "Stratana is a web application for businesses that need end-to-end strategy management and SaaS solutions. Unique to my previous projects, the website was commissioned and was a collaborative effort between myself and a lead developer. The website features modern frameworks and libraries such as Next.js and Tailwind to showcase a compelling front-end design.",
    technologies: "HTML5, CSS3, SCSS, Tailwind, Next.js, Node.js",
    image: "images/stratana-preview.jpeg",
    website:"https://stratana.com/"
  },
  {
    title: "bloglab",
    description: "Bloglab is a full stack web application for writer, bloggers, and avid journalists to document their adventures. It has the modern features of social media, such as likes and comments, and also incorporates JSON Web Token for authentication, and Argon2 for hashing passwords.",
    technologies: "HTML5, CSS3, PostgreSQL, Express.js, React.js, Node.js, Materialize CSS, Flexbox",
    image: "images/bloglab-preview.jpeg",
    website:"https://lfz-bloglab.herokuapp.com/"
  },
  {
    title: "tripify",
    description: "Tripify is an web application for travel enthusiast's who are looking for an easy way to track their budget and spending. The application features data stores through localStorage, and fetches weather updates by sending an XHRHttpRequest to the Weatherbit API once the user has input a valid city.",
    technologies: "HTML5, CSS3, JavaScript",
    image: "images/tripify-preview.jpeg",
    website: "https://kenkieu.github.io/tripify/"
  },
]
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-6 mt-24">
      <div className="text-center my-12">
        <h2 className="leading-6 text-green-800 text-opacity-70 font-semibold tracking-wide uppercase">
          Single Page Applications
        </h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          My Projects
        </h3>
      </div>
      <div className="grid gap-12">
        {projects.map(project => {
          return (
            <div key={project.title}>
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                website={project.website}
                />
            </div>
          );
        })}
      </div>
    </div>
  );
}
