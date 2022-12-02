import { React } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //Destructuring props
  const { scrollTop } = props;

  return (
    <div className="relative z-10">
      <nav className="px-4 md:px-8 lg:px-12 py-2 bg-white border-b flex justify-between items-center w-full fixed top-0">
        <Link
          to={"/"}
          onClick={() => {
            scrollTop();
          }}
          className="cursor-pointer"
        >
          <div className="text-xl tracking-wide font-semibold font-playfair italic transform md:hover:text-green-800 md:hover:text-opacity-70 duration-700">
            Ken Kieu
          </div>
        </Link>
        <ul className="flex font-medium">
          <li className="cursor-pointer md:hover:text-green-800 md:hover:text-opacity-70 duration-700">
            <Link
              to="/"
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer px-2 sm:px-3 md:hover:text-green-800 md:hover:text-opacity-70 duration-700">
            <Link
              to="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="cursor-pointer md:hover:text-green-800 md:hover:text-opacity-70 duration-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
