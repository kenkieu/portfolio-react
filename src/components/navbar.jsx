import {React, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  let [path, updatePath] = useState('/');
  const togglePath = path === "/" ? (path = "/work") : (path = "/");
  const navText = path === "/" ? 'Work' : 'About';


  return (
    <nav className="px-3 md:px-6 lg:px-12 py-3 bg-white shadow-sm flex justify-between items-center">
      <h1 className="italic text-lg">Welcome to my Portfolio!</h1>
      <ul className="flex">
        <li>
          <Link
            to={togglePath}
            onClick={() => {
              updatePath(togglePath);
            }}
            className="px-4 cursor-pointer"
          >
            {navText}
          </Link>
        </li>
        <li>
          <a href="#contact" className="cursor-pointer pl-2">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
