import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ProjectSection = ({ img, type, name, role, toolsInText, id, link }) => {
  return (
    <div className="border-t w-full border-primary-75 p-3 sm:p-5">
      <div className="flex flex-row items-center gap-3 sm:gap-4 w-full">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-64 md:h-64 object-cover rounded-md"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 px-2 sm:px-4">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold truncate">
            {name}
          </h1>
          <p className="text-sm sm:text-base text-secondary-default mb-2 sm:mb-3">
            {type}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 w-full lg:w-1/3">
            {toolsInText.map((tool, index) => (
              <span
                key={index}
                className="text-xs sm:text-base text-secondary-default border border-secondary-default rounded-full px-2 py-1 sm:px-3 sm:py-1"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* View Link */}
        <div className="flex-shrink-0">
          <NavLink
            to={link}
            target="_blank"
            className="flex items-center gap-1 sm:gap-2 font-bold italic group transition-all duration-200"
          >
            <span className="text-base sm:text-2xl md:text-3xl text-secondary-default">
              View
            </span>
            <FiArrowUpRight className="w-3 h-3 sm:w-12 sm:h-12 text-secondary-default group-hover:text-[#4AB1E2] transition-all duration-200" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
