import React from "react";
import Typewriter from "typewriter-effect";

export default function AboutMe() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-6 pt-12">
      <h1 className="text-center text-3xl px-2 my-12">
        Hello I&apos;m Ken,
        <span className="italic">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("traveler")
                .pauseFor(1500)
                .deleteAll()
                .typeString("tech enthusiast")
                .pauseFor(1500)
                .deleteAll()
                .typeString("web developer")
                .start();
            }}
          />
        </span>
      </h1>
      <img
        className="w-full rounded-lg"
        src="images/palomar-edit.png"
        alt="ken-palomar-park"
      />
      <div className="flex flex-wrap content-center my-12">
        <h2 className="border-solid border-l-4 border-green-800 border-opacity-50 text-2xl px-2 mb-6">
          About Me
        </h2>
        <p className="leading-8 my-4">
          My name is Ken, but you can think of me as a traveler, tech
          enthusiast, and web developer! I attended college at California State
          University, Long Beach, and received a Bachelor's degree in
          Psychology.
          <br />
          <br />
          <em>
            But wait, Ken, didn&apos;t you just say that you were a web
            developer?
          </em>
          <br />
          <br />
          Well yes, while I learned invaluable skills, such as patience,
          communication, and creativity, I realized that psychology was
          ultimately not for me. Therefore, I went back to my roots in
          technology and started considering my options. In my time networking,
          I met with a friend that found success with web development through a
          boot camp named LearningFuze, and he highly recommended I attend if I
          was interested.
        </p>
        <p className="leading-8 my-4">
          For months I continued to work my full-time job while learning how to
          code on my own, and when the time came, I parted ways and enrolled in
          LearningFuze where I would dedicate 60-70 hours per week to
          programming. By the end of the curriculum, I had learned how to
          develop a full-stack application with PostgreSQL, Express.js,
          React.js, and Node.js.
        </p>
        <p className="leading-8 my-4">
          My drive for learning and self-development has led me to a field that
          is not only rewarding but also aligns with my core interests. I am
          truly thankful to have this opportunity &mdash; but this is only the
          beginning of my journey. I can&apos;t wait to see what the future has
          in store for me!
        </p>
        <p className="leading-8 my-4">
          <span className="font-semibold">Fun Fact:</span> I own 9 pairs of
          headphones, and my best pal is a Yorkie. &#128054;
        </p>
      </div>
    </div>
  );
}
