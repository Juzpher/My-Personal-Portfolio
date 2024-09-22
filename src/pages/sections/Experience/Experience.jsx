import React from "react";
import previewLaptop from "../../../assets/Img/Preview/companyLaptop.png";
import companyLogo from "../../../assets/Img/Preview/companyLogo.png";
import { FiArrowUpRight } from "react-icons/fi";

const Experience = () => {
  return (
    <div
      className="default-container flex flex-col gap-12 items-center justify-center"
      name="experience"
    >
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-2xl small-caps font-semibold gradient-text tracking-wider">
          My work experience
        </h1>
        <p className="tracking-wider font-extralight">
          As an aspiring web developer, I am committed to gaining valuable
          experience in environments that enhance my skills and expertise.
          Here’s a look at my experience:
        </p>
      </div>

      <div className="bg-primary-100 p-4 rounded-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="col-span-1 md:col-span-2">
          <div className="p-4 gap-4">
            <div className="flex justify-start items-center mb-2">
              <img src={companyLogo} alt="" className="h-24 w-auto" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg small-caps tracking-widest font-work">
                <span className="gradient-text">Web Developer </span>Intern, AP
                Global IT Solutions Inc.
              </h1>
              <p className="tracking-widest text-secondary-50">
                June 2023 - July 2023
              </p>
              <p className="tracking-widest text-secondary-primary font-default text-sm font-extralight py-2">
                At AP Global, I developed and maintained web applications,
                collaborated with senior developers, and participated in
                debugging and testing. I also contributed to redesigning and
                updating old websites, which enhanced my skills in using the
                latest technologies such as React.js, Next.js, TypeScript, and
                Minimal UI.
              </p>
            </div>
            <div className="mt-auto flex justify-start">
              <a
                className="mx-0 button-outline flex items-center justify-center bg-primary-default normal-case"
                href="https://www.apgitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiArrowUpRight className="mr-2 h-5 w-5" />
                <span>Visit AP Global</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={previewLaptop}
            alt=""
            className="rounded-12 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
