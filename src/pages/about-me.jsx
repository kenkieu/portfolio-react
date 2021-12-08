import React from "react";

export default function AboutMe() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-6">
      <h1 className="border-solid border-l-4 border-green-800 border-opacity-40 text-3xl px-2 my-16">
        Hi <br /> I&apos;m Ken <br /> a{" "}
        <span className="italic">web developer</span>
      </h1>
      <img
        className="w-full rounded-lg"
        src="images/palomar-edit.png"
        alt="ken-palomar-park"
      />
      <div className="flex flex-wrap content-center my-16">
        <h2 className="text-center text-xl">About Me</h2>
        <p className="leading-8 my-4">
          My name is Ken, but you can think of me as a traveler, tech
          enthusiast, and web developer! I attended college at California State
          University, Long Beach and received a Bachelor's degree in Psychology.
          <br />
          <br />
          <em>
            But wait, Ken, didn&apos;t you just say that you were a web
            developer?
          </em>
          <br />
          <br />
          During my time in the psychology field, I learned invaluable skills,
          such as patience, communication, and creativity, but I came to the
          realization that the field was not for me. So, I went back to my
          foundational interest in technology and started considering my
          options. I spoke to a friend that found success with web development
          through a bootcamp named LearningFuze, and he highly recommmended I
          attend if I was interested.
        </p>
        <p className="leading-8 my-4">
          For 9 months, I juggled a 40 hour workweek while simultaneously
          committing an additional 15 hours per week to learning the basics of
          HTML5, CSS3, and JavaScript. When the time came, I parted ways with my
          current job, and began attending LearningFuze where I would dedicate
          800+ hours on coding during the 14 week program. By the end of the
          curriculum I had learned how to code a full stack application with
          PostgreSQL, Express.js, React.js, and Node.js.
          <br />
          <br />
          Since my enrollment to LearningFuze, I have discovered how coding is a
          diverse creative outlet that allows me to bring my ideas to life, and
          it has become one of my favorite hobbies. I often find myself thinking
          about new projects because they provide me with the opportunity to
          learn and work with new technologies.
        </p>
        <p className="leading-8 my-4">
          My drive for learning and self-development has led me to a field that
          is not only rewarding, but also aligns with my core interests. I am
          truly thankful to have this opportunity &mdash; but this is only the
          beginning of my journey. I can&apos;t wait to see what the future has
          in store for me!
        </p>
        <p className="leading-8 my-4">
          <span className="font-semibold">Fun Fact:</span> I own 9 pairs of
          headphones, and my best friend is a Yorkie. &#128054;
        </p>
      </div>
    </div>
  );
}
