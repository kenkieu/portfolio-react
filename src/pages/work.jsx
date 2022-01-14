import React from "react";
import Project from "../components/project";

export default function Work() {
  const projects = [
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
    <div className="max-w-screen-xl mx-auto px-3 md:px-6 pt-12">
      <div className="text-center my-16">
        <h2 className="leading-6 text-green-800 text-opacity-70 font-semibold tracking-wide uppercase">
          Single Page Applications
        </h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          My Projects
        </h3>
      </div>
      <div className="grid gap-8">
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
