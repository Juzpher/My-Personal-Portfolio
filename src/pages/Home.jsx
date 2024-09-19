import React from "react";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
