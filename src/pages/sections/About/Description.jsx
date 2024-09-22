import React from "react";
import aboutData from "../../../assets/mock/about/_about";

const Description = () => {
  return (
    <div className="bg-primary-100 p-10 rounded-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className=" font-default tracking-wider font-bold text-lg uppercase">
            About Me
          </h1>
          <p className="text-secondary-default text-sm font-default font-extralight tracking-widest">
            {aboutData.paragraph}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            {aboutData.display.map((item, index) => (
              <div key={index}>
                <h1 className="text-secondary-default text-3xl font-default font-bold tracking-wider">
                  {item.number}
                </h1>
                <p className="text-secondary-50 text-sm font-default tracking-wider ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center  ">
            <img src={aboutData.logo} alt="logo" className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Description;
