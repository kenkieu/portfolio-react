import React from 'react';

export default function Footer() {

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer id="contact" className="bg-gray-100 my-16 py-2 md:py-6 lg:py-8 shadow-sm">
      <div className="flex m-auto w-2/3 justify-center my-16">
        <a href="mailto: kenkieu93@gmail.com" className="px-6 text-red-600">
          <i className="fas fa-envelope-square text-4xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/ken-kieu/" className="px-6 text-blue-600">
          <i className="fab fa-linkedin text-4xl"></i>
        </a>
        <a href="https://github.com/kenkieu/" className="px-6">
          <i className="fab fa-github-square text-4xl"></i>
        </a>
      </div>
      <div className="flex m-auto w-2/3 justify-center tracking-wide text-xs">PORTFOLIO BY KEN KIEU</div>
      <button onClick={scrollTop} className="cursor-pointer m-auto w-full">
        <i className="fas fa-angle-up text-2xl text-green-800 text-opacity-40 flex m-auto w-2/3 justify-center mt-12"></i>
      </button>
    </footer>
  );
}
