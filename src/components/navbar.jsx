import { React } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { updatePath, togglePath, scrollTop } = props;
  const navItem = window.location.pathname === "/" ? "Work" : "About";

  return (
    <div className="relative z-10">
      <nav className="px-3 md:px-6 lg:px-12 py-2 bg-white shadow-sm flex justify-between items-center w-full fixed top-0">
        <Link
          to={"/"}
          onClick={() => {
            updatePath("/");
            scrollTop();
          }}
          className="cursor-pointer"
        >
          <div className="text-md bg-black bold text-white py-1 px-4 font-cinzel tracking-widest transform hover:bg-green-800 hover:bg-opacity-50 duration-700">
            KEN KIEU <i className="fas fa-laptop"></i>
          </div>
        </Link>
        <ul className="flex">
          <li className="px-4 hover:text-black hover:text-opacity-70 duration-700">
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
          <li className="hover:text-black hover:text-opacity-70 duration-700 pl-2">
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
