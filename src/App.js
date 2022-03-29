import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutMe from "./pages/about-me";
import Work from "./pages/work";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

export function App() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navbar
        scrollTop={scrollTop}
      />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer scrollTop={scrollTop} />
    </>
  );
}

export default App;
