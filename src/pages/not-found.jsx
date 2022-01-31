import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 md:px-6 mt-24">
      <div className="flex flex-wrap justify-center">
        <p className="text-center my-8 text-xl w-full">
          Oops, did you lose your way?
        </p>
        <button className="bg-green-800 bg-opacity-70 text-white rounded-sm p-3">
          <Link to="/" className="cursor-pointer">
            Return Home
          </Link>
        </button>
      </div>
    </main>
  );
}
