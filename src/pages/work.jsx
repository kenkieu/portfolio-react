import React from 'react';

export default function AboutMe() {
  return (
    <div className="max-w-screen-lg mx-auto px-3 md:px-6">
      <h1 className="border-solid border-l-4 border-green-800 border-opacity-40 text-3xl px-2 my-16">My Work</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <a href="https://lfz-bloglab.herokuapp.com/">
          <img className="w-full rounded-lg" src="images/bloglab-preview.jpeg" alt="bloglab-website" />
        </a>
        <div className="flex flex-wrap content-center pb-8">
          <a href="https://lfz-bloglab.herokuapp.com/">
          <h2 className="text-center text-xl underline">bloglab</h2>
          </a>
          <p className="leading-8 my-4">Bloglab is a full stack application for writer, bloggers, and avid journalists to document their adventures. It has the modern features in social media, such as likes and comments, and also incorporates an authenticated login system using argon2, and jwt tokens. </p>
          <p><span className="font-semibold">Technologies: </span>HTML5, CSS3, PostgreSQL, Express.js, React.js, Node.js, Materialize CSS, Flexbox</p>
        </div>
        <a href="https://kenkieu.github.io/tripify/">
          <img className="w-full rounded-lg" src="images/tripify-preview.jpeg" alt="tripify-website" />
        </a>
        <div className="flex flex-wrap content-center">
          <a href="https://kenkieu.github.io/tripify/">
            <h2 className="text-center text-xl underline">tripify</h2>
          </a>
          <p className="leading-8 my-4">Tripify is an application for travel enthusiast&apos;s who are looking for an easy way to track their budget and spending. The application features data storage through localStorage, and fetches weather updates by sending an XHRHttpRequest to the Weatherbit API once the user has input a valid city.</p>
          <p><span className="font-semibold">Technologies: </span> HTML5, CSS3, JavaScript</p>
        </div>
      </div>
    </div>
  );
}
