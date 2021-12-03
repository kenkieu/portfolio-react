import React from 'react';

export default function AboutMe() {
  return (
    <div className="max-w-screen-lg mx-auto px-3 md:px-6">
      <h1 className="border-solid border-l-4 border-green-800 border-opacity-40 text-3xl px-2 my-16">Hi, <br /> I&apos;m Ken, <br /> a <span className="italic">web developer.</span></h1>
        <img className="w-full rounded-lg" src="images/palomar-edit.png" alt="ken-palomar-park" />
        <div className="flex flex-wrap content-center my-16">
          <h2 className="text-center text-xl">About Me</h2>
          <p className="leading-8 my-4">I&apos;m Ken, but you can consider me a traveler, tech enthusiast, and web developer! To me, coding is a diverse creative outlet that allows me to bring my ideas to life. One of my favorite things about development is that new projects allow me to work with new technologies, expanding my knowledge base.</p>
          <p><span className="font-semibold">Fun Fact:</span> I own 9 pairs of headphones, and a Yorkie. &#128054;</p>
      </div>
    </div>
  );
}
