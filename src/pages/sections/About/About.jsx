import React from "react";
import Description from "./Description";
import Tools from "./Tools";

const About = () => {
  return (
    <div className="default-container flex flex-col gap-12" name="about">
      <Description />
      <Tools />
    </div>
  );
};

export default About;
