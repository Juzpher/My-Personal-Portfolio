import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Form from "../../../components/Form/Form";

const Contact = () => {
  return (
    <div className="default-container" name="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-2xl sm:text-3xl font-bold font-work capitalize ">
            Contact me to discuss how I can help bring your project to life.
            <br />
            <span className="gradient-text">Let's get started</span>
          </h1>
          <p className="text-secondary-50">
            Your vision, my expertise—together, we'll build something
            exceptional.
          </p>
          {/* Button Section */}
          <div className="flex justify-start mb-8 lg:mb-0">
            <a
              className="button-outline-icon"
              href="https://github.com/EijiroNotME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="button-outline-icon"
              href="https://www.linkedin.com/in/juspher-vergara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="button-outline-icon"
              href="https://www.facebook.com/Juspher.VergaraRomano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full mx-auto lg:max-w-none">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
