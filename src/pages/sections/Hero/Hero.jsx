import React from "react";
import displayImg from "../../../assets/Img/profile.png";
import heroImg from "../../../assets/Img/Hero-Img.png";

//Icons
import { IoMdCloudDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className="default-container flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="flex flex-col">
          {/* First Section */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src={displayImg}
              alt="hero"
              className="w-auto h-14 rounded-md"
            />
            <div className="flex items-center gap-2">
              <div className="rounded-full w-3 h-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <p className="text-sm text-secondary-50 lowercase">
                Available to work
              </p>
            </div>
          </div>
          {/* Second Section */}
          <div className="flex flex-col">
            <h1 className="font-bold text-5xl font-work tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient [--tw-gradient-text:theme('colors.accent.default')]">
                Juspher
              </span>
              <br />
              Aspiring Web Developer
              <br />
              <span className="text-3xl">
                <span className="gradient-text  ">| </span>
                Building the Web, Pixel by Pixel
              </span>
            </h1>
            <p className="mt-2 text-xl text-secondary-50 ">
              Full-Stack Developer | Web Designer
            </p>
            <div className="mt-5 flex items-center justify-start">
              <button className="button-outline flex justify-items-center">
                <IoMdCloudDownload className="mr-2 h-5 w-5" />
                <a>Download CV</a>
              </button>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={heroImg}
            alt="hero"
            className="max-h-[40rem] w-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
