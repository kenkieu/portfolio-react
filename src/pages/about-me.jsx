import React from 'react';

export default function AboutMe() {
  return (
    <div className="max-w-screen-lg mx-auto px-3 md:px-6">
      <h1 className="border-solid border-l-4 border-green-800 border-opacity-40 text-3xl px-2 my-16">
        Hi, <br /> I&apos;m Ken, <br /> a{" "}
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
          Hello, my name is Ken, but you can think of me as a traveler, tech
          enthusiast, and web developer! I attended college at California State
          University, Long Beach and received a Bachelor's degree in Psychology.{" "}
          <em>
            But wait, "Psychology? He just said he's a web developer. How did he
            get there?"
          </em>{" "}
          Well, once I started on my career in psychology, I came to realization
          that the field - albeit interesting, it was not for me. I went back to
          my foundational interest in technology and started considering my
          options. I spoke to a friend that found success with web development
          through a bootcamp named LearningFuze, and he highly recommmended I
          attend if I was interested.
        </p>
        <p className="leading-8 my-4">
          For 9 months, I juggled full time work while learning the basics of
          HTML5, CSS3, and JavaScript. When the time came, I resigned from my
          current job, and made the decision to attend LearningFuze where I
          would dedicate 800+ hours on coding during the 14 week program. Since then, I
          haven&apos;t been more certain of my career path. Coding is a diverse creative outlet that
          allows me to bring my ideas to life. It has become one of my favorite
          hobbies, and I often find myself thinking about what my next project should be.
          In addition, new projects provide me with the opportunity to work with new technologies,
          which broaden the scope of my technical skills.
        </p>
        <p className="leading-8 my-4">
          My drive for learning, and self-development has led me to a field that
          is not only rewarding, but also aligns with my core interests. I am
          truly thankful to have this opportunity, and am excited to apply my
          skills at a great company.
        </p>
        <p className="leading-8 my-4">
          <span className="font-semibold">Fun Fact:</span> I own 9 pairs of
          headphones, and my best friend is a Yorkie. &#128054;
        </p>
      </div>
    </div>
  );
}
