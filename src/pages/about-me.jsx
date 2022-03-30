import React, {useEffect} from "react";
import Typewriter from "typewriter-effect";

export default function AboutMe() {
  useEffect(() => {
    document.title = "About Me | Ken Kieu"
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto px-4 md:px-6 mt-28">
      <div className="relative">
        <h1 className="banner text-white text-center w-full font-bold text-3xl px-2 md:text-4xl">
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
                  .typeString("software engineer")
                  .start();
              }}
            />
          </span>
        </h1>
        <img
          className="w-full rounded-lg shadow-md"
          src="images/palomar-overlay.png"
          alt="ken-palomar-park"
        />
      </div>
      <div className="my-16 max-w-4xl mx-auto relative">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={204}
              height={384}
              fill="none"
              viewBox="0 0 204 192"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-green-800 text-opacity-10"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={204}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={204}
              height={384}
              fill="none"
              viewBox="0 0 204 192"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-green-800 text-opacity-10"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={204}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={204}
              height={384}
              fill="none"
              viewBox="0 0 204 192"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-green-800 text-opacity-10"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={204}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="text-center">
          <h2 className="leading-6 text-green-800 text-opacity-70 font-semibold tracking-wide uppercase">
            Meet Ken
          </h2>
          <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-3xl">
            About Me
          </h3>
        </div>
        <div className="text-gray-500 mt-16">
          <h2 className="mb-4 font-bold text-lg text-gray-900">
            Why did you make a career change?
          </h2>
          <p className="leading-10">
            My name is Ken, but you can consider me a traveler, tech enthusiast,
            and software engineer! I attended college at California State
            University, Long Beach, and earned a Bachelor's degree in
            Psychology. While I learned invaluable skills, such as patience,
            communication, and creativity, I came to realize that psychology was
            not a fit for me. I went back to my roots in
            technology and while networking, I met with a friend that found success with web development. He highly recommended I attend if I found interest.
          </p>
          <h2 className="mt-12 mb-4 font-bold text-lg text-gray-900">
            My fourteen week journey into development
          </h2>
          <p className="leading-10">
            For months I continued to work my full-time job while learning how
            to code on my own, and when the time came, I parted ways and
            enrolled in LearningFuze where I would dedicate 60-70 hours per week
            to programming. By the end of the curriculum, I had learned how to
            develop a full-stack application utilizing modern technologies.{" "}
            <span>
              <div className="grid grid-cols-2 gap-1 text-center my-12 font-semibold">
                <div className="bg-green-800 bg-opacity-70 text-white rounded-md">
                  PostgreSQL
                </div>
                <div className="bg-green-800 bg-opacity-70 text-white rounded-md">
                  Express.js
                </div>
                <div className="bg-green-800 bg-opacity-70 text-white rounded-md">
                  React.js
                </div>
                <div className="bg-green-800 bg-opacity-70 text-white rounded-md">
                  Node.js
                </div>
              </div>
            </span>
            My drive for learning and self-development has led me to a field
            that is not only rewarding but also aligns with my core interests. I
            am truly thankful to have this opportunity &mdash; but this is only
            the beginning of my journey. I can&apos;t wait to see what the
            future has in store for me!
          </p>
          <p className="leading-10 mt-12">
            <span className="font-bold text-gray-900">Fun Fact:</span> I own 10
            pairs of headphones, and my favorite travel destination is Disney
            World in Orlando, FL.
          </p>
        </div>
      </div>
    </main>
  );
}
