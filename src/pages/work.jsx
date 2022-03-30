import React, {useEffect} from "react";
import Project from "../components/project";

export default function Work() {
  useEffect(() => {
    document.title = "Ken Kieu | My Work"
  }, []);
  const projects = [
    {
      title: "darkhorse advisor",
      description:
        "A business website for Darkhorse LLC. built from start to finish within one week. The website utilizes Next.js as the frontend framework and Tailwind library for a minimally aestheic design. Implemented Google Analytics 4 to monitor traffic and track page views.",
      technologies: "HTML5, CSS3, SCSS, JavaScript, Tailwind, Next.js, Google Analytics 4",
      image: "images/darkhorse-preview.png",
      website: "https://darkhorseadvisor.com/",
    },
    {
      title: "stratana",
      description:
        "A company website for Stratana. Stratana offers businesses end-to-end strategy management and SaaS solutions. Unique to my previous projects, the website was commissioned and was a collaborative effort between myself and a lead developer. The website features modern frameworks and libraries such as Next.js and Tailwind to showcase a compelling front-end design.",
      technologies: "HTML5, CSS3, SCSS, JavaScript, Tailwind, Next.js",
      image: "images/stratana-preview.jpeg",
      website: "https://stratana.com/",
    },
    {
      title: "bloglab",
      description:
        "Bloglab is a full-stack web application for writers, bloggers, and avid journalists to document their adventures. It has the modern features of social media, such as likes and comments, and also incorporates JSON Web Token for authentication, and Argon2 for hashing passwords.",
      technologies:
        "HTML5, CSS3, JavaScript, PostgreSQL, Express.js, React.js, Node.js, Materialize CSS, Flexbox",
      image: "images/bloglab-preview.jpeg",
      website: "https://lfz-bloglab.herokuapp.com/",
    },
    {
      title: "tripify",
      description:
        "Tripify is a web application created for travel enthusiasts to track their budget and spending. The application features data stores through localStorage and fetches weather updates by sending an XHRHttpRequest to the Weatherbit API once the user has input a valid city.",
      technologies: "HTML5, CSS3, JavaScript, jQuery",
      image: "images/tripify-preview.jpeg",
      website: "https://kenkieu.github.io/tripify/",
    },
  ];
  return (
    <main className="max-w-screen-xl mx-auto px-3 md:px-6 mt-24">
      <div className="text-center my-12">
        <h2 className="leading-6 text-green-800 text-opacity-70 font-semibold tracking-wide uppercase">
          Single Page Applications
        </h2>
        <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-3xl">
          My Projects
        </h3>
      </div>
      <div className="grid gap-12">
        {projects.map((project) => {
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
    </main>
  );
}
