import { React } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { updatePath, togglePath } = props;
  const navItem = window.location.pathname === "/" ? "Work" : "About";

  return (
    <nav className="px-3 md:px-6 lg:px-12 py-2 bg-white shadow-sm flex justify-between items-center">
      <div className="text-md bg-black bold text-white py-1 px-6 font-mono">
        KEN KIEU
      </div>
      <ul className="flex">
        <li className="px-4 hover:text-black hover:text-opacity-70 duration-700">
          <Link
            to={togglePath}
            onClick={() => {
              updatePath(togglePath);
            }}
            className="cursor-pointer"
          >
            {navItem}
          </Link>
        </li>
        <li className="hover:text-black hover:text-opacity-70 duration-700 pl-2">
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
