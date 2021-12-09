import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const { updatePath, scrollTop } = props;

  return (
    <footer
      id="contact"
      className="bg-gray-100 my-16 py-2 md:py-6 lg:py-8 shadow-sm"
    >
      <div className="flex m-auto w-2/3 justify-center my-12">
        <a
          href="mailto: kenkieu93@gmail.com"
          className="px-6 text-red-600 md:transform hover:-translate-y-0.5 duration-500"
        >
          <i className="fas fa-envelope-square text-4xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ken-kieu/"
          className="px-6 text-blue-600 md:transform hover:-translate-y-0.5 duration-500"
        >
          <i className="fab fa-linkedin text-4xl"></i>
        </a>
        <a
          href="https://github.com/kenkieu/"
          className="px-6 md:transform hover:-translate-y-0.5 duration-500"
        >
          <i className="fab fa-github-square text-4xl"></i>
        </a>
      </div>
      <div className="flex m-auto w-2/3 justify-center tracking-wide text-xs">
        <Link
          to="/"
          onClick={() => {
            updatePath("/");
            scrollTop();
          }}
          className="cursor-pointer text-black hover:text-opacity-70 duration-700"
        >
          PORTFOLIO BY KEN KIEU
        </Link>
      </div>
      <div className="py-6 flex m-auto w-2/3 justify-center tracking-wide text-xs">
        <a
          href="https://drive.google.com/file/d/1DjZYdWwVCYB4-98s3rbDyuBs1GVhG4_U/view?usp=sharing"
          className="text-black hover:text-opacity-70 duration-700"
        >
          VIEW RESUME
        </a>
      </div>
      <button onClick={scrollTop} className=" m-auto flex justify-center mt-6">
        <i className="cursor-pointer animate-bounce fas fa-angle-up text-2xl text-green-800 text-opacity-50 flex m-auto w-2/3 justify-center"></i>
      </button>
    </footer>
  );
}
