import React from "react";

export default function AboutMe() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-6 pt-12">
      <h2 className="border-solid border-l-4 border-green-800 border-opacity-40 text-2xl px-2 my-16">
        My Work
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <a href="https://lfz-bloglab.herokuapp.com/">
          <img
            className="w-full rounded-lg lg:transform hover:-translate-x-1 duration-700"
            src="images/bloglab-preview.jpeg"
            alt="bloglab-website"
          />
        </a>
        <div className="flex flex-wrap content-center pb-8 items-center">
          <a href="https://lfz-bloglab.herokuapp.com/">
            <h3 className="text-center text-lg hover:text-black hover:text-opacity-70 duration-700">
              bloglab <i className="fas fa-external-link-alt text-xs"></i>
            </h3>
          </a>
          <p className="leading-8 my-4">
            Bloglab is a full stack web application for writer, bloggers, and
            avid journalists to document their adventures. It has the modern
            features of social media, such as likes and comments, and also
            incorporates JSON Web Token for authentication, and Argon2 for
            hashing passwords.
          </p>
          <p>
            <span className="font-semibold">Technologies: </span>HTML5, CSS3,
            PostgreSQL, Express.js, React.js, Node.js, Materialize CSS, Flexbox
          </p>
        </div>
        <a href="https://kenkieu.github.io/tripify/">
          <img
            className="w-full rounded-lg lg:transform hover:-translate-x-1 duration-700"
            src="images/tripify-preview.jpeg"
            alt="tripify-website"
          />
        </a>
        <div className="flex flex-wrap content-center">
          <a href="https://kenkieu.github.io/tripify/">
            <h3 className="text-center text-lg hover:text-black hover:text-opacity-70 duration-700">
              tripify <i className="fas fa-external-link-alt text-xs"></i>
            </h3>
          </a>
          <p className="leading-8 my-4">
            Tripify is an web application for travel enthusiast&apos;s who are
            looking for an easy way to track their budget and spending. The
            application features data stores through localStorage, and fetches
            weather updates by sending an XHRHttpRequest to the Weatherbit API
            once the user has input a valid city.
          </p>
          <p>
            <span className="font-semibold">Technologies: </span> HTML5, CSS3,
            JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}
