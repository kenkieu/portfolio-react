import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | Not Found"
  }, []);
  return (
    <div className="min-h-screen mx-auto px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto banner">
        <div className="flex items-center lg:justify-center flex-wrap lg:flex-wrap">
          <span className="text-center text-4xl mr-6 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            404
          </span>
          <div>
            <div className="lg:border-l lg:pl-6 mt-4">
              <span className="sm:text-2xl md:text-3xl font-extrabold">
                Page not found
              </span>
              <p className="text-gray-400 py-2">
                Please verify the address in the URL and try again.
              </p>
              <span className="text-green-800 hover:text-opacity-90 text-opacity-70 mr-6 mt-12 font-extrabold">
                <Link to="/">Return Home</Link>
                <span aria-hidden="true"> →</span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6"></div>
      </div>
    </div>
  );
}
