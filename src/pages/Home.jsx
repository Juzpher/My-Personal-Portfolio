import React from "react";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
