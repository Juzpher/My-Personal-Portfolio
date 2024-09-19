import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ id, type, name, role, img, tools }) => {
  return (
    <div className="bg-primary-50 p-4 rounded-16 w-full h-full">
      <div className="flex flex-col gap-4 h-full">
        {/* Img div */}
        <div className="flex-shrink-0">
          <img
            src={img}
            alt=""
            className="rounded-8 w-full h-80 object-cover"
          />
        </div>
        {/* Text div */}
        <div className="flex flex-col gap-2 flex-grow">
          <div>
            <h1 className="small-caps font-work tracking-wider text-xl text-secondary-default">
              {type}
            </h1>
            <p className="text-secondary-50">
              <span>{name}</span> | <span>{role}</span>
            </p>
          </div>
          <div className="flex justify-between items-start mt-auto">
            {/* Bread crumbs */}
            <div className="flex flex-wrap gap-2 max-w-[calc(100%-3rem)]">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="py-1 px-2 rounded-8 bg-primary-75 text-secondary-50 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
            <button className="button-outline-icon flex-shrink-0 ml-2">
              <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
