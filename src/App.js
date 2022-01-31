import { React, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutMe from "./pages/about-me";
import Work from "./pages/work";
import NotFound from "./pages/not-found";

export function App() {
  let [path, updatePath] = useState(window.location.pathname);
  const togglePath = path === "/" ? (path = "/work") : (path = "/");

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navbar
        updatePath={updatePath}
        togglePath={togglePath}
        scrollTop={scrollTop}
      />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="work" element={<Work />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer updatePath={updatePath} scrollTop={scrollTop} />
    </>
  );
}

export default App;
