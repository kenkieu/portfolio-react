import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutMe from './pages/about-me';
import Work from './pages/work';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="work" element={<Work />} />
        <Route
          path="*"
          element={
            <main className="pt-8">
              <div className="flex flex-wrap justify-center">
                <p className="text-center my-8 text-xl w-full">
                  Oops, did you lose your way?
                </p>
                <button className="bg-green-800 bg-opacity-70 text-white rounded-sm p-3">
                  <Link to="/" className="cursor-pointer">Return Home</Link>
                </button>
              </div>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
