import { React } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { updatePath, togglePath, scrollTop } = props;
  const navItem = window.location.pathname === "/" ? "Work" : "About";

  return (
    <div className="relative z-10">
      <nav className="px-4 md:px-8 lg:px-12 py-2 bg-white border-b flex justify-between items-center w-full fixed top-0">
        <Link
          to={"/"}
          onClick={() => {
            updatePath("/");
            scrollTop();
          }}
          className="cursor-pointer"
        >
          <div className="text-xl tracking-wide font-semibold font-playfair italic transform md:hover:text-green-800 md:hover:text-opacity-50 duration-700">
            Ken Kieu
          </div>
        </Link>
        <ul className="flex font-medium">
          <li className="px-4 md:hover:text-green-800 md:hover:text-opacity-50 duration-700">
            <Link
              to={togglePath}
              onClick={() => {
                updatePath(togglePath);
                scrollTop();
              }}
              className="cursor-pointer"
            >
              {navItem}
            </Link>
          </li>
          <li className="md:hover:text-green-800 md:hover:text-opacity-50 duration-700 pl-2">
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
